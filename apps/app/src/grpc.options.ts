import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const mathMicroserviceOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'math',
    protoPath: join(__dirname, 'math-proto.proto'),
  },
};
