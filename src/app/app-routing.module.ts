import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router'
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { ParentComponent } from './main/parent/parent.component';


const routes: Routes = [
  {path:  '',  redirectTo: 'impekable/dashboard', pathMatch:'full'},
  {path:'impekable', component: ParentComponent,
  children: [{path: 'dashboard', component: DashboardComponent}]
}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
