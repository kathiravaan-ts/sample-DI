import { Component, Inject, OnInit } from '@angular/core';
import { ParentComponent } from './components/parent/parent.component';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-app',
  standalone: true,
  imports: [ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    {
      provide: AuthenticationService,
      useFactory: () => new AuthenticationService(),
    },
  ],
})
export class AppComponent implements OnInit {
  //private authService = Inject(AuthenticationService);
  constructor(private authService: AuthenticationService) {}
  ngOnInit(): void {
    this.authService.authLog('APP');
  }
}
