import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarMenuService } from './sidebar/menu/sidebar-menu.service';

import * as $ from 'jquery';
import { SidebarMenuComponent } from './sidebar/menu/sidebar-menu.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarTitleComponent } from './sidebar/title/sidebar-title.component';
import { SidebarProfileComponent } from './sidebar/profile/sidebar-profile.component';
import { SidebarFooterComponent } from './sidebar/footer/sidebar-footer.component';
import { SidebarToggleComponent } from './navbar/sidebar-toggle/sidebar-toggle.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarMenuComponent,
    FooterComponent,
    SidebarTitleComponent,
    SidebarProfileComponent,
    SidebarFooterComponent,
    SidebarToggleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SidebarMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
