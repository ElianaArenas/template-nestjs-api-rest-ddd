import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { createLogger, format, transports, Logger, addColors } from 'winston';

const colors = {
  info: 'green',
  warn: 'yellow',
  error: 'red',
};

addColors(colors);
@Injectable()
class LoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger();

  constructor() {
    this.logger = createLogger({
      level: 'info',
      format: format.combine(
        format.timestamp({ format: 'YYYY-MM-dd HH:mm:ss' }),
        format.json(),
      ),
      transports: [
        new transports.Console({
          format: format.combine(format.json()),
        }),
      ],
    });
  }

  use(request: Request, response: Response, next: NextFunction): void {
    response.on('finish', () => {
      const { method, originalUrl, ip } = request;
      const { statusCode, statusMessage } = response;
      const isHealthCheck = originalUrl == '/api/integration/CHECK_ROUTE/health/liveness';
      const isSuccessPost = originalUrl == '/api/integration/CHECK_ROUTE/initiate' && statusCode == 201 && method == 'POST';

      const message = `${method} ${originalUrl} ${statusCode} ${statusMessage} ${ip}`;

      if (statusCode >= 500) return this.logger.error(message);

      if (statusCode >= 400) return this.logger.warn(message);

      if (isHealthCheck) return;

      if (isSuccessPost) return;

      return this.logger.info(message);
      
    });

    next();
  }
}

export default LoggerMiddleware;
