import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';
import { PaginationComponent } from './pagination';
import { TemplateDriveFormComponent } from './template-drive-form';
import { RectiveFormComponent } from './rective-form';
import { DynamicReactiveFormsComponent } from './dynamic-reactive-forms';
import { AlertComponent } from './_alert/alert.component';
import { MultiAlertsComponent } from './multi-alerts';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'tdf', component: TemplateDriveFormComponent },
  { path: 'rfv', component: RectiveFormComponent },
  { path: 'drfc', component: DynamicReactiveFormsComponent },
  { path: 'multialert', component: MultiAlertsComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
