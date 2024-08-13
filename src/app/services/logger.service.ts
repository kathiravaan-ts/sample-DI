import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  private currDatetime: number;
  constructor() {
    this.currDatetime = new Date().getMilliseconds();
  }

  log(name: string): void {
    console.log(
      name +
        ' - loggerserice has been called! creation date - ' +
        this.currDatetime
    );
  }
}
