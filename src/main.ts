import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import winstonLogger from './config/logger/logger-options';
import { API_DEFAULT_PORT, API_DEFAULT_PREFIX } from './common/constants';
import { Logger, ValidationPipe } from '@nestjs/common';

import { createSwagger } from './config/swagger/swagger-config';
import { TransformInterceptor } from './infraestructure/rest/interceptors/response.interceptor';
import { HttpExceptionFilter } from './infraestructure/rest/exceptions/httpException.filter';

const logger = new Logger('Main');
async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
      logger: winstonLogger,
    });
  
    const PORT = API_DEFAULT_PORT;
    const PREFIX = API_DEFAULT_PREFIX;
  
    app.setGlobalPrefix(PREFIX);
    app.enableCors();
  
    
  
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );
  
    app.useGlobalInterceptors(new TransformInterceptor());
    app.useGlobalFilters(new HttpExceptionFilter());
  
    createSwagger(app);
    await app.listen(PORT, () => {
        logger.log(`Server running on port ${PORT}`);
    });
  }
  
  bootstrap();
