import { Component,OnInit } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1 highlight>{{title}}
    <nav>
    <a routerLink="runner" routerLinkActive="active">Runner</a>
    <a routerLink="wiki"  routerLinkActive="active">Wiki</a>
    <a routerLink="weather"  routerLinkActive="active">Weather</a>
  </nav>
    </h1><router-outlet></router-outlet>`
})
export class AppComponent {
    title = 'Runner Administration Program';
}