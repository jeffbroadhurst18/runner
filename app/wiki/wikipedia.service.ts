import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';

@Injectable()
export class WikipediaService {
    constructor(private jsonp : Jsonp){}



    search (term:string) {
        let wikiUrl = 'http://en.wikipedia.org/w/api.php';

        let params = new URLSearchParams();

        params.set('format','json');
        params.set('action',"opensearch");
        params.set('prop',"extracts");
        params.set('exchars',"140");
        params.set('exlimit',"10");
        params.set('exintro',"");
        params.set('explaintext',"");
        params.set('rawcontinue',"");
        params.set('generator',"search");
        params.set('gsrlimit', "10")
        params.set('search',term);
        params.set('callback','JSONP_CALLBACK');

        return this.jsonp.get(wikiUrl, {search:params})
                .map(response => <string[]> response.json()[1]);
    }
    
}