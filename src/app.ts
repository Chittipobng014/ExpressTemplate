process.on('unhandledRejection', (reason, p) => {
  console.error('unhandledRejection');
  console.error(reason, p);
  throw reason;
});

// https://expressjs.com/en/advanced/best-practice-performance.html
// process.on('uncaughtException', error => {
//   console.error('uncaughtException');
//   console.error(error);
//   process.exit(1);
// });

process.on('SIGINT', () => {
  // calling shutdown allows your process to exit normally
  process.exit();
});

import * as bodyParser from 'body-parser';
import express from 'express';
import * as path from 'path';
import 'reflect-metadata';
import { errorMiddleware } from './exceptions/errorMiddleware';
import { sanitizeObject } from './libs/sanitize';

const helmet = require('helmet');
// const frameguard = require("frameguard");
const compression = require('compression');

const middleware1 = (req, res, next) => {
  console.log(
    `${req.method} client request to ${req.originalUrl} from ip address ${
    req.ip
    } at ${new Date()}`
  );
  next();
};

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.initMiddlewares();
    this.initRoutes();
    this.initErrorhandles();
  }

  private initMiddlewares(): void {
    this.app.use(helmet({ noCache: true }));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(compression());
    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
      );
      res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, OPTIONS'
      );
      res.header(
        'Cache-Control',
        'private, no-cache, no-store, must-revalidate'
      );
      res.header('Expires', '-1');
      res.header('Pragma', 'no-cache');
      res.header('X-Frame-Options', ''); // to satisfy facebook messenger
      next();
    });

    this.app.use((req, res, next) => {
      req.body = sanitizeObject(req.body);
      next();
    });

    // error handler
    this.app.use(async (err, req, res, next) => {
      if (!err) {
        return next();
      }
      res.status(500).json(err);
    });
  }
  private initRoutes(): void {

    // statics
    this.app.use(
      express.static(path.resolve(__dirname, '..', 'static', 'root'))
    );
    this.app.use(
      express.static(path.resolve(__dirname, '..', 'static', 'assets'))
    );
    for (const resource of ['assets', 'test', 'weui', 'privacy', 'phaser']) {
      this.app.use(
        `/${resource}`,
        express.static(path.resolve(__dirname, '..', 'static', resource))
      );
    }

    // catch all
    this.app.get('/*', (req, res) => {
      res.sendFile(
        path.resolve(__dirname, '..', 'static', 'root', 'index.html')
      );
    });
  }

  private initErrorhandles() {
    this.app.use(errorMiddleware);
  }
}

export default new App().app;
