import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AnimationComponent } from './animation.component';
import { AnimationRoutingModule } from './animation-routing.module';
import { BackgroundDirective } from './background.directive';

@NgModule({
    imports: [FormsModule, CommonModule, AnimationRoutingModule],
    declarations: [AnimationComponent,BackgroundDirective],
    providers: []
})
export class AnimationModule { }