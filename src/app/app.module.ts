import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { environment } from '../environments/environment';

import { MustMatchDirective, fakeBackendProvider, JwtInterceptor, ErrorInterceptor } from './_helpers';

import { appRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { RectiveFormComponent } from './rective-form/rective-form.component';
import { TemplateDriveFormComponent } from './template-drive-form/template-drive-form.component';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { PaginationComponent } from './pagination';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { DynamicReactiveFormsComponent } from './dynamic-reactive-forms/dynamic-reactive-forms.component';

@NgModule({

  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    appRoutingModule,

    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  declarations: [
    AppComponent,

    MustMatchDirective,

    RectiveFormComponent,
    TemplateDriveFormComponent,
    JwPaginationComponent,
    PaginationComponent,
    HomeComponent,
    LoginComponent,
    DynamicReactiveFormsComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
