import * as path from 'path';
const fs = require('fs-extra');
const rfs = require('rotating-file-stream');
const morgan = require('morgan');

const logDirectory = path.resolve(__dirname, '..', '..', 'logs');
if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory);
}

const accessLogStream = rfs('access.log', {
  interval: '1d', // rotate daily
  // size: "10M",
  maxFiles: 30,
  path: logDirectory,
});

export default morgan('combined', { stream: accessLogStream });
