import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationComponent } from './animation.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'animation', component: AnimationComponent }
  ])],
  exports: [RouterModule]
})
export class AnimationRoutingModule {}