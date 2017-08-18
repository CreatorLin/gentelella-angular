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
import { NavbarMenuComponent } from './navbar/menu/navbar-menu.component';
import { MsgListComponent } from './navbar/msg-list/msg-list.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarMenuComponent,
    FooterComponent,
    SidebarTitleComponent,
    SidebarProfileComponent,
    SidebarFooterComponent,
    SidebarToggleComponent,
    NavbarMenuComponent,
    MsgListComponent,
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SidebarMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
