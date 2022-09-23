import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { SavedStocksComponent } from './components/saved-stocks/saved-stocks.component';
import { TabsComponent } from './components/tabs/tabs.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'login',
    pathMatch: 'full' 
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'header',
    component:HeaderComponent,
    outlet: "header"
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'saved-stocks',
    component:SavedStocksComponent
  },
  {
    path: 'tabs',
    component: TabsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

