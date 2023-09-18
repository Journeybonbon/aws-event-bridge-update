import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AwsModule } from './aws/aws.module';
import { SlotsModule } from './slots/slots.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [SlotsModule, AwsModule, ConfigModule.forRoot({
    isGlobal: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
