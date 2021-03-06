import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { WikiModule } from './wiki/wiki.module';
import { WeatherModule } from './weather/weather.module';
import { AnimationModule } from './animation/animation.module';
import { GameModule } from './game/game.module';

import { AppComponent } from './app.component';
import { RunnerNameComponent } from './runner-name.component';
import { RunnerNameService } from './runner-name.service';
import { RunnerNameDetailComponent } from './runner-name-detail.component';
import { RunnerNameNewComponent } from './runner-name-new.component';
import { RunnerNameSearchComponent } from './runner-name-search.component';
import { RunnerNameSearchService } from './runner-name-search.service';
import { TransformBestPipe, TransformAgePipe, TransformSexPipe } from './runner-name.component.pipe';
import { HighlightDirective} from './highlight.directive';
import './rxjs-extensions';

@NgModule({
  imports: [BrowserModule,
    FormsModule,AppRoutingModule,
    HttpModule,JsonpModule,WikiModule,WeatherModule,AnimationModule,GameModule],
  declarations: [AppComponent, RunnerNameComponent,RunnerNameDetailComponent,RunnerNameNewComponent,
  RunnerNameSearchComponent,HighlightDirective,
  TransformBestPipe, TransformAgePipe, TransformSexPipe],
  bootstrap: [AppComponent],
  providers: [RunnerNameService]
})
export class AppModule { }
