import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./views/auth/login/login.component";
import {RegisterComponent} from "./views/auth/register/register.component";
import {MainComponent} from "./views/main/main.component";
import {GraphComponent} from "./views/main/graph/graph.component";
import {FormComponent} from "./views/main/form/form.component";
import {TableComponent} from "./views/main/table/table.component";
import {RouterOutlet} from "@angular/router";

@NgModule({
  declarations:[
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    GraphComponent,
    FormComponent,
    TableComponent
  ],
  imports: [
    RouterOutlet

  ],
  bootstrap:[
    AppComponent
  ]
})

export class AppModule{

}

















