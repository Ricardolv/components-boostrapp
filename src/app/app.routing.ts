import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';
import { PaginationComponent } from './pagination';
import { TemplateDriveFormComponent } from './template-drive-form';
import { RectiveFormComponent } from './rective-form';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'tdf', component: TemplateDriveFormComponent },
  { path: 'rfv', component: RectiveFormComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
