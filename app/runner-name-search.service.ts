import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Runner } from './runner';

@Injectable()
export class RunnerNameSearchService {

    constructor(private http: Http){}
     
    search(term: string): Observable<Runner[]> {
        return this.http
           .get(`http://localhost/Product_API/api/runner/?name=${term}`)
           // .get(`http://localhost:51599/api/runner/?name=${term}`)
            .map((r:Response) => r.json() as Runner[]);
    }
}