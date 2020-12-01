import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GropingComponent } from './groping/groping.component';


const routes: Routes = [
  {
    path : '',
    redirectTo : 'userGrouping',
    pathMatch : 'full'
  },
  {
    path : 'userGrouping',
    component : GropingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
