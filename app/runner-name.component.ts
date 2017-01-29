import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jsonp, URLSearchParams } from '@angular/http';
import { RunnerNameService } from './runner-name.service';
import { Runner } from './runner';


@Component({
  moduleId: module.id,
  selector: 'my-runnername',
  templateUrl: 'runner-name.component.html',
  styleUrls: ['https://unpkg.com/bootstrap@3.3.7/dist/css/bootstrap.css'],
})

export class RunnerNameComponent implements OnInit {

  constructor(private runnerNameService: RunnerNameService,
    private router: Router) { }

  runners: Runner[];
  selectedRunner: Runner;
  errorMessage: string;

  getRunners(): void {
   // this.runnerNameService.getRunners().then(runners => this.runners = runners);
   this.runnerNameService.getRunners().subscribe(
     runners => this.runners = runners,
     error => this.errorMessage = <any>error)
  }

  ngOnInit(): void {
    this.getRunners();
  }

  onSelect(runner: Runner): void {
    this.selectedRunner = runner;
    this.selectedRunner.bestmins = Math.floor(this.selectedRunner.best/60);
    this.selectedRunner.bestsecs = this.selectedRunner.best % 60;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedRunner.id]);
  }

  newDetail(): void {
    this.router.navigate(['new']);
  }

  delete():void {
    this.runnerNameService.delete(this.selectedRunner.id).then(() => this.getRunners());
  }

  close(): void {
    this.selectedRunner = null;
  }
}