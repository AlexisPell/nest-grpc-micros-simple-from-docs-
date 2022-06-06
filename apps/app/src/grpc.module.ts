import { DynamicModule, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

interface GrpcModuleOptions {
  name: string;
}

@Module({})
export class GrpcModule {
  static register({ name }: GrpcModuleOptions): DynamicModule {
    return {
      module: GrpcModule,
      imports: [
        ClientsModule.registerAsync([
          {
            name,
            useFactory: () => ({
              transport: Transport.GRPC,
              options: {
                package: 'math',
                protoPath: join(__dirname, 'math-proto.proto'),
              },
            }),
          },
        ]),
      ],
      exports: [ClientsModule],
    };
  }
}
