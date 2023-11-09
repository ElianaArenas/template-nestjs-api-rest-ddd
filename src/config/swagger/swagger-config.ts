import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as YAML from 'yaml';
import * as fs from 'fs';
import {
  SWAGGER_TITLE,
  SWAGGER_DESCRIPTION,
  SWAGGER_PREFIX,
  APP_VERSION,
  API_DEFAULT_PORT,
} from '../../common/constants';

export function createSwagger(app: INestApplication): void {
  const config = new DocumentBuilder()
    .addSecurity('basic', {
      type: 'http',
      scheme: 'basic',
    })
    .addSecurityRequirements('basic')
    .setTitle(SWAGGER_TITLE)
    .setDescription(SWAGGER_DESCRIPTION)
    .setVersion(APP_VERSION)
    .setLicense('Blue Express', 'https://www.blue.cl')
    .addServer(`http://localhost:${API_DEFAULT_PORT}`, 'Local Environment')
    .addServer('https://devapigw.bluex.cl', 'Development Environment')
    .addServer('https://qaapigw.bluex.cl', 'QA - Environment')
    .addServer('https://apigw.bluex.cl', 'Production Environment')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  const yamlFile = YAML.stringify(document);

  if (!fs.existsSync('./oas')) {
    fs.mkdirSync('./oas');
  }

  fs.writeFileSync('./oas/oas.yaml', yamlFile);

  SwaggerModule.setup(SWAGGER_PREFIX, app, document);
}
