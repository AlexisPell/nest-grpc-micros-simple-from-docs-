import { Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MathModule } from './math.module';
import { join } from 'path';

const logger = new Logger('Math');

async function bootstrap() {
  const app = await NestFactory.createMicroservice(MathModule, {
    transport: Transport.GRPC,
    options: {
      package: 'math', // package from .proto file settings
      protoPath: join(__dirname, 'math-proto.proto'),
    },
  });

  await app.listen();
  logger.log('Math microservice is running...');
}
bootstrap();
