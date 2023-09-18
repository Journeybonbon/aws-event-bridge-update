import { Injectable } from '@nestjs/common';
import { CreateAwDto } from './dto/create-aw.dto';
import { EventBridgeClient, PutRuleCommand } from "@aws-sdk/client-eventbridge";

@Injectable()
export class AwsService {
  async create(createAwDto: CreateAwDto) {
    
    const credentials = {
      accessKeyId: process.env.ACCESS_KEY_ID,
      secretAccessKey: process.env.SECRET_ACCESS_KEY,
    };
    const eventbridge = new EventBridgeClient({ region: "ap-northeast-2", credentials });

    const ruleName = 'futsal-server-scheduler';
    const newCronExpression = 'cron(0 15 L * ? *)';  // 원하는 새로운 cron 표현식 (기존 : 0 15 L * ? *s)
    const params = {
      Name: ruleName,
      ScheduleExpression: newCronExpression,
      State: 'ENABLED',  // Rule 상태 (ENABLED 또는 DISABLED)
    };

    try {
      const data = await eventbridge.send(new PutRuleCommand(params));
      console.log(data);
    } catch (error) {
      console.error("Rule 업데이트 오류: ", error);
    }
  }

}
