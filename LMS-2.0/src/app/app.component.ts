import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header></header>
    <main>
      <app-sidebar class="sidebar"></app-sidebar>
      <app-main class="main"></app-main>
    </main>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
