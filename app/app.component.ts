import { Component,OnInit } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1 highlight>{{title}}</h1><router-outlet></router-outlet>`
})
export class AppComponent {
    title = 'Runner Administration Program';
}