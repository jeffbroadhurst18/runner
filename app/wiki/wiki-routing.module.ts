import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WikiComponent } from './wiki.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'wiki', component: WikiComponent }
  ])],
  exports: [RouterModule]
})
export class WikiRoutingModule {}