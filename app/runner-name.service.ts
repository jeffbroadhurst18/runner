import { Injectable } from '@angular/core';
import { Runner } from './runner';
import { Headers, Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class RunnerNameService {
    private runnerUrl = 'http://localhost/Product_API/api/runner';
//private runnerUrl = 'http://localhost:51599/api/runner';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) {
       
     }

    // getRunners(): Promise<Runner[]> {
    //     return this.http.get(this.runnerUrl).toPromise()
    //         .then(response => response.json() as Runner[])
    //         .catch(this.handleError)
    // }

    getRunners(): Observable<Runner[]>{
        return this.http.get(this.runnerUrl).map(this.extractData)
        .catch(this.handleError);
    }

    private extractData(res:Response)
    {
            let body = res.json();
            return body || { };
    }

    getRunner(id: number): Promise<Runner> {
        return this.getRunners().toPromise().then(runners => runners.find(runner => runner.id === id));
    }

     update(runner:Runner): Promise<Runner>{
             const url = `${this.runnerUrl}`;
             return this.http
            .post(url, JSON.stringify(runner), {headers: this.headers})
            .toPromise()
            .then(() => runner)
            .catch(this.handleError);
    }

     delete(id: number): Promise<void> {
            const url = `${this.runnerUrl}/${id}`;
            return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null).catch(this.handleError);
    }
    

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    private doit(response:any)
    {
       return response.json().data;
    }
}
