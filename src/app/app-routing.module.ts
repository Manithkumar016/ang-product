import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import {AddtolistComponent} from './addtolist/addtolist.component'
import { AppComponent } from './app.component';
import {ListofproductComponent} from './listofproduct/listofproduct.component'
const routes: Routes = [
 
  {
    path:"addtolist",
    component:AddtolistComponent,
  },
  {
    path:"listpage",
    component:ListofproductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  status:boolean=true;
 }
