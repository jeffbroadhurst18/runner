import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RunnerNameComponent } from './runner-name.component';
import { RunnerNameService } from './runner-name.service';
import { RunnerNameDetailComponent } from './runner-name-detail.component';
import { RunnerNameNewComponent } from './runner-name-new.component';
import { TransformBestPipe, TransformAgePipe, TransformSexPipe } from './runner-name.component.pipe';
import './rxjs-extensions';

@NgModule({
  imports: [BrowserModule,
    FormsModule,AppRoutingModule,
    HttpModule],
  declarations: [AppComponent, RunnerNameComponent,RunnerNameDetailComponent,RunnerNameNewComponent,
  TransformBestPipe, TransformAgePipe, TransformSexPipe],
  bootstrap: [AppComponent],
  providers: [RunnerNameService]
})
export class AppModule { }
