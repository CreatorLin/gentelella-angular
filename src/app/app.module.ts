import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarMenuService } from './sidebar/menu/sidebar-menu.service';

import * as $ from 'jquery';
import { SidebarMenuComponent } from './sidebar/menu/sidebar-menu.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarMenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SidebarMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
