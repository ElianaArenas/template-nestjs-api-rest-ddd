import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
class LoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger();

  constructor() {}

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

      return this.logger.log(message);
      
    });

    next();
  }
}

export default LoggerMiddleware;
