import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SlotsModule } from 'slots/slots.module';
import { AwsModule } from './aws/aws.module';

@Module({
  imports: [SlotsModule, AwsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
