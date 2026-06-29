import { Injectable } from '@nestjs/common';

@Injectable()
export class UserLoggers {
  log(message: string) {
    console.log('[LOG]', message);
  }
}
