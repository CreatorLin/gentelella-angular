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
import { MediaGalleryComponent } from './page-content/media-gallery/media-gallery.component';
import { TypographyComponent } from './page-content/typography/typography.component';
import { IconsComponent } from './page-content/icons/icons.component';
import { GlyphiconsComponent } from './page-content/glyphicons/glyphicons.component';
import { WidgetsComponent } from './page-content/widgets/widgets.component';
import { InvoiceComponent } from './page-content/invoice/invoice.component';
import { InboxComponent } from './page-content/inbox/inbox.component';
import { CalendarComponent } from './page-content/calendar/calendar.component';
import { TablesComponent } from './page-content/tables/tables.component';
import { TableDynamicComponent } from './page-content/table-dynamic/table-dynamic.component';
import { ChartJSComponent } from './page-content/chart-js/chart-js.component';
import { ChartJS2Component } from './page-content/chart-js2/chart-js2.component';
import { MorisJSComponent } from './page-content/moris-js/moris-js.component';
import { EChartsComponent } from './page-content/e-charts/e-charts.component';
import { OtherChartsComponent } from './page-content/other-charts/other-charts.component';
import { FixedSidebarComponent } from './page-content/fixed-sidebar/fixed-sidebar.component';
import { FixedFooterComponent } from './page-content/fixed-footer/fixed-footer.component';
import { ECommerceComponent } from './page-content/e-commerce/e-commerce.component';

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
    GeneralElementsComponent,
    MediaGalleryComponent,
    TypographyComponent,
    IconsComponent,
    GlyphiconsComponent,
    WidgetsComponent,
    InvoiceComponent,
    InboxComponent,
    CalendarComponent,
    TablesComponent,
    TableDynamicComponent,
    ChartJSComponent,
    ChartJS2Component,
    MorisJSComponent,
    EChartsComponent,
    OtherChartsComponent,
    FixedSidebarComponent,
    FixedFooterComponent,
    ECommerceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SidebarMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
