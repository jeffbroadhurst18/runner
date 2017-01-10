import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { RunnerNameSearchService } from './runner-name-search.service';
import { Runner } from './runner';

@Component({
    moduleId: module.id,
    selector: 'runner-name-search',
    templateUrl: 'runner-name-search.component.html',
    providers: [RunnerNameSearchService]
})

export class RunnerNameSearchComponent implements OnInit {
runners: Observable<Runner[]>;
private searchTerms = new Subject<string>();

constructor(
    private RunnerNameSearchService: RunnerNameSearchService,
    private router:Router){}

    search(term: string): void {
        this.searchTerms.next(term);
    }
    
    ngOnInit(): void {
        this.runners = this.searchTerms.debounceTime(300).distinctUntilChanged()
        .switchMap(term => term
                        ? this.RunnerNameSearchService.search(term)
                        : Observable.of<Runner[]>([])).catch(error => { 
                        console.log(error);
                        return Observable.of<Runner[]>([]);
                        });
    }
     
        gotoDetail(runner: Runner): void {
            let link = ['/detail',runner.id];
            this.router.navigate(link);
        }
    }