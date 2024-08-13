import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()
export class ChildLoggerService extends LoggerService {
  constructor() {
    super();
  }

  override log(name: string): void {
    console.log(name + ' - ChildLoggerService has been called!');
  }
}
