import { readFileSync } from 'fs';
import { createSecureContext } from 'tls';
import { config } from './config';
import logger from './modules/logger';

const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({
  target: {
    host: 'localhost',
    port: 3001,
  },
});

// port 80, http
const httpServer = require('http').createServer((req, res) => {
  console.log(
    `proxy http ${req.method} ${req.connection.remoteAddress} ${
      req.headers.host
    } ${req.url}`
  );
  if (req.method === 'GET') {
    const Location = 'https://' + req.headers.host + req.url;
    res.writeHead(302, { Location });
    return res.end();
  }
  res.writeHead(403);
  res.end('Forbidden');
  // proxy.web(req, res);
});
// httpServer.on("upgrade", (req, socket, head) => {
//   if (req.headers.host === "website.com") {
//   }
//   proxy.ws(req, socket, head);
// });
httpServer.listen(80);

// https

// https://stackoverflow.com/questions/12219639/is-it-possible-to-dynamically-return-an-ssl-certificate-in-nodejs#answer-20285934
// https://stackoverflow.com/questions/12219639/is-it-possible-to-dynamically-return-an-ssl-certificate-in-nodejs/38862651#38862651

const getSecureContext = domain =>
  createSecureContext({
    key: readFileSync(`/etc/letsencrypt/live/${domain}/privkey.pem`),
    cert: readFileSync(`/etc/letsencrypt/live/${domain}/fullchain.pem`),
  });

const secureContext = {
  'newsletter.orderbot.org': getSecureContext('newsletter.orderbot.org'),
};

const httpsOptions = {
  key: readFileSync(`/etc/letsencrypt/live/${config.host}/privkey.pem`),
  cert: readFileSync(`/etc/letsencrypt/live/${config.host}/fullchain.pem`),
  SNICallback(domain, cb) {
    cb(null, secureContext[domain]);
  },
};

// port 443, https
const httpsServer = require('https').createServer(httpsOptions, (req, res) => {
  console.log(
    `proxy https ${req.method} ${req.connection.remoteAddress} ${
      req.headers.host
    } ${req.url}`
  );
  const remoteIp = req.connection.remoteAddress;
  console.log(
    `${new Date().toISOString()}: ${req.method} request to ${
      req.url
    } from ${remoteIp}`
  );
  logger(req, res, err => {
    if (config.allowedIps.indexOf('*') > -1) {
      return proxy.web(req, res);
    }
    if (config.allowedIps.indexOf(remoteIp) === -1) {
      res.writeHead(403, 'Forbidden');
      return res.end(`${remoteIp} is Forbidden`);
    }
    proxy.web(req, res);
  });
});
httpsServer.on('upgrade', (req, socket, head) => {
  proxy.ws(req, socket, head);
});
httpsServer.listen(443);

process.on('SIGINT', () => {
  console.info('index.ts SIGINT signal received.');
  httpServer.close();
  httpsServer.close();
});
