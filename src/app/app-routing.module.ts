import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes =[
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent,  },
  { path: 'dashboard2',  component: Dashboard2Component,  },
  { path: 'dashboard3',  component: Dashboard3Component,  },
  { path: 'generalform',  component: GeneralFormComponent,  },
  { path: 'advancedcomponents',  component: AdvancedComponentsComponent,  },
  { path: 'formvalidation',  component: FormValidationComponent,  },
  { path: 'formwizard',  component: FormWizardComponent,  },
  { path: 'formupload',  component: FormUploadComponent,  },
  { path: 'formbuttons',  component: FormButtonsComponent,  },
  { path: 'generalelements',  component: GeneralElementsComponent,  },
  { path: 'mediagallery',  component: MediaGalleryComponent,  },
  { path: 'typography',  component: TypographyComponent,  },
  { path: 'icons',  component: IconsComponent,  },
  { path: 'glyphicons',  component: GlyphiconsComponent,  },
  { path: 'widgets',  component: WidgetsComponent,  },
  { path: 'invoice',  component: InvoiceComponent,  },
  { path: 'inbox',  component: InboxComponent,  },
  { path: 'calendar',  component: CalendarComponent,  },
  { path: 'tables',  component: TablesComponent,  },
  { path: 'tabledynamic',  component: TableDynamicComponent,  },
  { path: 'chartjs',  component: ChartJSComponent,  },
  { path: 'chartjs2',  component: ChartJS2Component,  },
  { path: 'morisjs',  component: MorisJSComponent,  },
  { path: 'echarts',  component: EChartsComponent,  },
  { path: 'othercharts',  component: OtherChartsComponent,  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
