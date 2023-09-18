import { Injectable } from '@nestjs/common';
import { CreateAwDto } from './dto/create-aw.dto';

@Injectable()
export class AwsService {
  create(createAwDto: CreateAwDto) {
    
    const AWS = require('aws-sdk');

    // AWS 자격 증명 설정
    AWS.config.credentials = new AWS.Credentials({
      accessKeyId: 'your-access-key-id',
      secretAccessKey: 'your-secret-access-key',
    });

    // AWS 서비스 클라이언트 생성
    const eventbridge = new AWS.EventBridge();

    // 업데이트할 Rule 이름과 새로운 cron 표현식 정의
    const ruleName = 'YourRuleName';
    const newCronExpression = 'cron(0 12 * * ? *)';  // 원하는 새로운 cron 표현식

    // Rule 업데이트
    const params = {
      Name: ruleName,
      ScheduleExpression: newCronExpression,
      State: 'ENABLED',  // Rule 상태 (ENABLED 또는 DISABLED)
    };

    eventbridge.putRule(params, (err, data) => {
      if (err) {
        console.error("Rule 업데이트 중 오류 발생:", err);
      } else {
        console.log("업데이트 결과:", data);
      }
    });

  }
}
