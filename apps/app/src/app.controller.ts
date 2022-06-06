import { mathMicroserviceOptions } from './grpc.options';
import {
  Body,
  Controller,
  Get,
  Inject,
  Logger,
  OnModuleInit,
  Post,
} from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { MATH_PACKAGE } from './grpc.constants';
import { IGrpcMathService } from './grpc.interface';

@Controller()
export class AppController implements OnModuleInit {
  private logger = new Logger('AppController');
  // Service is our microservice
  private mathService: IGrpcMathService;

  // // TWO APPROACHES FOR WORKING WITH GRPC CLIENT:
  // // 1.
  // @Client(mathMicroserviceOptions)
  // private mathClient: ClientGrpc;
  // // 2.
  constructor(@Inject(MATH_PACKAGE) private mathClient: ClientGrpc) {}

  onModuleInit() {
    this.mathService =
      this.mathClient.getService<IGrpcMathService>('MathController'); // string is the name of the controller in .proto file
  }

  @Get()
  getHello(): string {
    return 'hello world!';
  }

  @Post('add')
  async accumulate(@Body('data') data: number[]) {
    this.logger.log('Adding :', data.toString());
    return this.mathService.accumulate({ data });
  }
}
