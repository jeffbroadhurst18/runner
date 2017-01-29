import { Injectable} from '@angular/core';

export class Country {
    name: string;
    state: string;

    constructor() {
        this.name = '';
        this.state = 'inactive'
     }

    toggleState(){
        this.state = (this.state === 'active') ? 'inactive' : 'active';
    }
}