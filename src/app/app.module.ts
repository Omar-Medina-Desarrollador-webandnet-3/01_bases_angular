import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import { HeroeComponent } from './heroes/heroe/heroe.component';


@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    HeroeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  // bootstrap: [ContadorComponent]
})
export class AppModule { }
