import { Controller, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { MathService } from './math.service';

interface INumberArray {
  data: number[];
}

interface ISumOfNumberArray {
  sum: number;
}

@Controller()
export class MathController {
  private readonly logger = new Logger();

  constructor(private readonly mathService: MathService) {}

  @GrpcMethod('MathController', 'Accumulate') // params from .proto file
  accumulate(numberArray: INumberArray, metadata: any): ISumOfNumberArray {
    this.logger.log('Math microservice: Adding :', numberArray.data.toString());
    return { sum: this.mathService.accumulate(numberArray.data) };
  }
}
