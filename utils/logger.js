const { createLogger, format, transports } = require('winston');
const { combine, colorize, json, printf, timestamp } = format;
require('winston-daily-rotate-file');
const fs = require('fs');
const logsDirectory = 'logs';

if (!fs.existsSync(logsDirectory)) {
  fs.mkdirSync(logsDirectory);
}

const dailyRotateFileTransport = new transports.DailyRotateFile({
  filename: `${logsDirectory}/%DATE%.log`,
  datePattern: 'DD-MMM-YYYY'
});

const logger = createLogger({
  format: combine(
    timestamp(),
    json()
  ),
  transports: [
    new transports.Console({
      format: combine(
        colorize(),
        printf(
          info => `${info.level} : ${info.timestamp} : Message - ${info.message}`
        )
      )
    }),
    dailyRotateFileTransport
  ]
});

module.exports = logger;