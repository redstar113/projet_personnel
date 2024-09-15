import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./component/login/login.component";
import { MainComponent } from "./component/main/main.component";
import { DashboardComponent } from "./component/dashboard/dashboard.component";


const routes: Routes=[
{path:'',redirectTo:'',pathMatch:'full'},
{path:'login',component:LoginComponent},
{path:'main',component:MainComponent},
{path:'dashboard',component:DashboardComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{}
