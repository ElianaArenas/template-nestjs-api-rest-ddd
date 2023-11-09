import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';

const levels = {
    error:0,
    warn: 1,
    info:2,
    debug:3,
    verbose:4,
  }

const { LOG_LEVEL } = process.env;

const logLevel = LOG_LEVEL; 

const winstonLogger = WinstonModule.createLogger({
  levels,
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp(),
        winston.format.ms(),
      ),
      level: logLevel,
    }),
  ],
});

export default winstonLogger;