/* eslint-disable prettier/prettier */
import { Catch } from '@nestjs/common/decorators';
import { HttpException } from '@nestjs/common/exceptions';
import { ArgumentsHost, ExceptionFilter } from '@nestjs/common/interfaces';
import { Request, Response } from 'express';

@Catch(HttpException)
export class SellerCustomExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost): any {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const request = context.getRequest<Request>();
    const status = exception.getStatus();
    response.status(status).json({
      statusCode: status,
      timeStamp: new Date().toISOString(),
      url: request.url,
      host: request.get('host'),
    });
  }
}
