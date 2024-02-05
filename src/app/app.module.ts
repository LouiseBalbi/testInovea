import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ListComponent } from './components/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsModelComponent } from './components/details-model/details-model.component';
import {MatButtonModule} from '@angular/material/button';
import { UpdateModelComponent } from './components/update-model/update-model.component';
import { CreateModelComponent } from './components/create-model/create-model.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import { DATE_PIPE_DEFAULT_OPTIONS, registerLocaleData } from '@angular/common';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import localeFr from '@angular/common/locales/fr';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


registerLocaleData(localeFr, 'fr');


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailsModelComponent,
    UpdateModelComponent,
    CreateModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' },
    {provide: DATE_PIPE_DEFAULT_OPTIONS, useValue: {timezone: 'fr-FR'}}

  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
