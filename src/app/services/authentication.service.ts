import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {
  constructor() {}

  authLog(name: string): void {
    console.log(name + ' - AuthenticationService has been Called!');
  }
}
