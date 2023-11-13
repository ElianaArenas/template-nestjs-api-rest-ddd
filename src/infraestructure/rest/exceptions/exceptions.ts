import { HttpException, HttpStatus } from '@nestjs/common';


type ParametersType = { [key: string]: unknown };

export class BaseException extends HttpException {
  readonly context: string;
  readonly statusCode: number;
  readonly code?: string;
  readonly parameters: ParametersType;

  constructor(name: string, message: string, stack, status: HttpStatus, parameters?: ParametersType) {
    super({ name, message,stack }, status);

    if (parameters) {
      this.parameters = parameters;
    }

    this.statusCode = super.getStatus();
    Error.captureStackTrace(this);
  }
}

export class ApiInternalServerException extends BaseException {
  constructor(name?: string, message?: string, stack?: any, parameters?: ParametersType) {
    super(name, message ?? 'InternalServerException',stack, 500, parameters);
  }
}

export class BusinessException extends BaseException {
    constructor(name?: string, message?: string, stack?: any, parameters?: ParametersType) {
      super(name, message ?? 'BussinessException',stack, 400, parameters);
    }
  }

export class ApiNotFoundException extends BaseException {
    constructor(name?: string, message?: string, stack?: any, parameters?: ParametersType) {
    super(name, message ?? 'NotFoundException', stack,404, parameters);
  }
}

export class ApiConflictException extends BaseException {
    constructor(name?: string, message?: string, stack?: any, parameters?: ParametersType) {
    super(name, message ?? 'ConflictException', stack, 409, parameters);
  }
}


export class ApiBadRequestException extends BaseException {
    constructor(name?: string, message?: string, stack?: any, parameters?: ParametersType) {
    super(name, message ?? 'BadRequestException',stack, 400, parameters);
  }
}