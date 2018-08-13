import {Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { NgModule } from '@angular/core';
import { ForthComponent } from './forth/forth.component';

const routes : Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'first'}, //if localhost is empty go to localhost/first
    {path: 'first', component: FirstComponent}, //localhost/first -> FirstComponent
    {path: 'second', component: SecondComponent},
    {path: 'third', component: ThirdComponent},
    {path: 'third/forth', component: ForthComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

