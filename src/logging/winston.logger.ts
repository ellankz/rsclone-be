import winston from 'winston';

const options = {
  file: {
    level: 'warn',
    filename: 'logs/app.log',
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
  },
};

const logger = winston.createLogger({
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.Console(options.console),
  ],
  exitOnError: false,
});

export class LoggerStream {
  static write(message: string) {
    logger.info(message.substring(0, message.lastIndexOf('\n')));
  }
}

export default logger;