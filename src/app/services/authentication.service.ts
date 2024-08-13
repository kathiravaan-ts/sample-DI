import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()
export class AuthenticationService {

  constructor(private _loggerService: LoggerService) {}

  authLog(name: string): void {
    console.log(name + ' - AuthenticationService has been Called!');
  }
}
