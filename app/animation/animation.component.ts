import { Component,Input,trigger,state,style,transition,animate } from '@angular/core';
import { animation1} from './animation';
import { Country } from './country';

@Component({
    moduleId: module.id,
    selector: 'my-animation',
    templateUrl: 'animation.component.html',
    styleUrls: ['countries.css'],
    providers: [],
    animations: [animation1]
})

export class AnimationComponent {
    color = 'green' ;
    countries : Country[];
    constructor() { }

    ngOnInit(): void {
    this.getCountries();
  }

  getCountries(){
      this.countries =[];
      this.addCountry('England');
      this.addCountry('Wales');
      this.addCountry('Scotland');
      this.addCountry('Northern Ireland');
  }

  addCountry(name:string)
  {
      var c1 = new Country();
      c1.name = name;
      this.countries.push(c1)
  }
}