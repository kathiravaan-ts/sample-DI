import { Component, Inject, OnInit, inject } from '@angular/core';
import { ParentComponent } from './components/parent/parent.component';
import { AuthenticationService } from './services/authentication.service';
import { LoggerService } from './services/logger.service';

export const authProvideFactory = 
  (loggerService: LoggerService) => new AuthenticationService(loggerService);

@Component({
  selector: 'app-app',
  standalone: true,
  imports: [ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    {
      provide: AuthenticationService,
      useFactory: authProvideFactory,
      deps: [LoggerService],
      multi: false
    },
  ],
})

export class AppComponent implements OnInit {
  authService = inject(AuthenticationService);

  ngOnInit(): void {
    this.authService.authLog('APP');
  }
}
