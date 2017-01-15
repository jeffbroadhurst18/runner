import { Component } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { WikipediaService } from './wikipedia.service';

@Component ({
    moduleId: module.id,
    selector: 'my-wiki',
    templateUrl: 'wiki.component.html',
    providers: [WikipediaService]
})

export class WikiComponent {
    
    constructor (private wikipediaService:WikipediaService){}
    
    title = 'Wikipedia Demo';
    fetches = 'Fetches after every key stroke';
    items: Observable<string[]>;
    titles : string[];
    
    search (term:string){
        this.items = this.wikipediaService.search(term);
    }
}