import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppDashboardComponent} from './app-dashboard/app-dashboard.component';
import {AppTableComponent} from './app-table/app-table.component';

const routes: Routes = [{
  path: 'home',
  component: AppDashboardComponent
}, {
  path: 'table',
  component: AppTableComponent
}, {
  path: '',
  pathMatch: 'full',
  redirectTo: '/home'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
