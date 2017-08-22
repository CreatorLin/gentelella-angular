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
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './page-content/dashboard/dashboard.component';
import { Dashboard2Component } from './page-content/dashboard2/dashboard2.component';
import { Dashboard3Component } from './page-content/dashboard3/dashboard3.component';
import { GeneralFormComponent } from './page-content/general-form/general-form.component';
import { AdvancedComponentsComponent } from './page-content/advanced-components/advanced-components.component';
import { FormValidationComponent } from './page-content/form-validation/form-validation.component';
import { FormWizardComponent } from './page-content/form-wizard/form-wizard.component';
import { FormUploadComponent } from './page-content/form-upload/form-upload.component';
import { FormButtonsComponent } from './page-content/form-buttons/form-buttons.component';
import { GeneralElementsComponent } from './page-content/general-elements/general-elements.component';

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
    NavbarComponent,
    DashboardComponent,
    Dashboard2Component,
    Dashboard3Component,
    GeneralFormComponent,
    AdvancedComponentsComponent,
    FormValidationComponent,
    FormWizardComponent,
    FormUploadComponent,
    FormButtonsComponent,
    GeneralElementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SidebarMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
