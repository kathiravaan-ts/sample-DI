import { Component } from '@angular/core';
import { LoggerService } from '../../services/logger.service';
import { ChildComponent } from '../child/child.component';
import { DuplicateLoggerService } from '../../services/duplicate-logger.service';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
  providers: [
    { provide: DuplicateLoggerService },
    { provide: LoggerService, useExisting: DuplicateLoggerService },
  ],
})
export class ParentComponent {
  constructor(
    private _loggerService: LoggerService,
    private _duplicateLoggerService: DuplicateLoggerService
  ) {
    console.log('PARENT Component constructor() has been called!');
    this._loggerService.log('parent');
  }
}
