import { GrpcModule } from './grpc.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MATH_PACKAGE } from './grpc.constants';

@Module({
  imports: [GrpcModule.register({ name: MATH_PACKAGE })],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
