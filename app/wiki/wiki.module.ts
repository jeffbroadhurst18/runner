import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';
import { CommonModule }       from '@angular/common';

import { WikiComponent} from './wiki.component';
import { WikipediaService} from './wikipedia.service';

@NgModule({
  imports:      [ FormsModule,CommonModule ],
  declarations: [ WikiComponent ],
  exports:      [ WikiComponent ],
  providers:    [ WikipediaService ] 
})
export class WikiModule { }