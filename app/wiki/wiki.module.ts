import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';
import { CommonModule }       from '@angular/common';

import { WikiComponent} from './wiki.component';
import { WikipediaService} from './wikipedia.service';
import { WikiRoutingModule} from './wiki-routing.module';

@NgModule({
  imports:      [ FormsModule,CommonModule,WikiRoutingModule ],
  declarations: [ WikiComponent ],
  providers:    [ WikipediaService ] 
})
export class WikiModule { }