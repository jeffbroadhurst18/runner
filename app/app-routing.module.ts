import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RunnerNameComponent } from './runner-name.component';
import { RunnerNameDetailComponent } from './runner-name-detail.component';
import { RunnerNameNewComponent } from './runner-name-new.component';

const routes: Routes = [
     {
           path: 'runner',
           component: RunnerNameComponent
     },
     {
           path: 'detail/:id',
           component: RunnerNameDetailComponent
     },
     {
           path: 'new',
           component: RunnerNameNewComponent  
     },
     {
           path : 'wiki',
           redirectTo: 'wiki',
           pathMatch: 'full'
     },
     {
           path : 'weather',
           redirectTo: 'weather',
           pathMatch: 'full'
     },
     {
           path: '',
           redirectTo: '/runner',
           pathMatch: 'full'
     }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }