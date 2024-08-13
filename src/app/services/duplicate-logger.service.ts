import { Injectable } from '@angular/core';

@Injectable()
export class DuplicateLoggerService {
  constructor() {}

  log(name: string): void {
    console.log(name + ' - DuplicateLoggerService has been called!');
  }
}
