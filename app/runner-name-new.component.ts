import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location} from '@angular/common';
import { RunnerNameService } from './runner-name.service';
import { Runner } from './runner';

@Component({
moduleId: module.id,
selector: 'runner-name-new',
templateUrl: 'runner-name-new.component.html',
})

export class RunnerNameNewComponent implements OnInit {
        constructor(
            private runnerNameService: RunnerNameService,
            private route: ActivatedRoute,
            private location: Location,
            
        ){}

        runner: Runner;  

        ngOnInit(): void {
            this.setUpNewRunner();
        }

        setUpNewRunner(): void{
            this.runner = new Runner();
        }

        goBack():void {
            this.location.back();
        }

        save():void {
            this.runner.best = (Number(this.runner.bestmins) * 60) + Number(this.runner.bestsecs);
            this.runnerNameService.update(this.runner).then(() => this.goBack());
        }
}