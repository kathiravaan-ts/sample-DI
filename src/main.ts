import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appconfig } from './app/app.config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppComponent],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
    <app-app></app-app>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, appconfig);
