import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ParentComponent } from './parent/parent.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RouterModule } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [DashboardComponent, ParentComponent, SidenavComponent],
  imports: [
    CommonModule,
    RouterModule,
   NgApexchartsModule
  ]
})
export class MainModule { }
