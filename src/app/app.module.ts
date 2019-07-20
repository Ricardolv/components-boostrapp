import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RectiveFormComponent } from './rective-form/rective-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TemplateDriveFormComponent } from './template-drive-form/template-drive-form.component';
import { MustMatchDirective } from './_helpers';

@NgModule({
  declarations: [
    AppComponent,
    RectiveFormComponent,
    TemplateDriveFormComponent,
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
