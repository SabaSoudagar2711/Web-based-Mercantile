import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header-component></app-header-component>
   <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'WebBasedMercantile';
}
