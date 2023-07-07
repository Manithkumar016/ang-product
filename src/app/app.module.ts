import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddtolistComponent } from './addtolist/addtolist.component';
import { ListofproductComponent } from './listofproduct/listofproduct.component';
import { SidebarComponent } from './sidebar/sidebar.component';
// import { GlobalService } from './global.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddtolistComponent,
    ListofproductComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  // providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
