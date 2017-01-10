import {Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location} from '@angular/common';
import { RunnerNameService } from './runner-name.service';
import { Runner } from './runner';

@Component({
moduleId: module.id,
selector: 'runner-name-detail',
templateUrl: 'runner-name-detail.component.html',
})

export class RunnerNameDetailComponent implements OnInit {
constructor(
    private runnerNameService: RunnerNameService,
    private route: ActivatedRoute,
    private location: Location  
){}

ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
        let id = +params['id'];
        this.runnerNameService.getRunner(id).then(runner => this.addBests(runner));
    });
}

addBests(runner:Runner): void {
    this.runner = runner;
    this.runner.bestmins = this.runner.best != null ? Math.floor(this.runner.best/60) : 0;
    this.runner.bestsecs = this.runner.best != null ? this.runner.best % 60 : 0;
}

goBack():void {
    this.location.back();
}

save():void {
      this.runner.best = (Number(this.runner.bestmins) * 60) + Number(this.runner.bestsecs);
      this.runnerNameService.update(this.runner).then(() => this.goBack());
}

@Input()
runner: Runner;
}
