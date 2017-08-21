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
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
