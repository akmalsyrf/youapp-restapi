import { Injectable } from '@nestjs/common';

@Injectable()
export class MasterService {
  helloWorld() {
    return 'Hello World';
  }
}
