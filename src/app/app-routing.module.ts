import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./views/main/main.component";
import {LoginComponent} from "./views/auth/login/login.component";
import {RegisterComponent} from "./views/auth/register/register.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path:"main", component:MainComponent, canActivate: []},
  {path:"login", component:LoginComponent},
  {path:"", redirectTo: "/login", pathMatch:"full"},
  {path:"register", component:RegisterComponent}
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
