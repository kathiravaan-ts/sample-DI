import { Component, Host, Optional, Self, SkipSelf } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';
import { LoggerService } from '../../services/logger.service';
import { ChildLoggerService } from '../../services/child-logger.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  providers: [{ provide: LoggerService, useClass: ChildLoggerService }],
})
export class ChildComponent {
  constructor(@Self() private _loggerService: LoggerService) {
    this._loggerService.log('child');
  }
}
