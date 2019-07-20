import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';

import { MustMatchDirective } from './_helpers';

import { ServiceWorkerModule } from '@angular/service-worker';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RectiveFormComponent } from './rective-form/rective-form.component';
import { TemplateDriveFormComponent } from './template-drive-form/template-drive-form.component';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    RectiveFormComponent,
    TemplateDriveFormComponent,
    JwPaginationComponent,
    PaginationComponent,

    MustMatchDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,

    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
