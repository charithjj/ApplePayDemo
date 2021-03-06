import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WindowRef } from './WindowRef';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { WindowRefService } from './WindowRefService';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [WindowRef, WindowRefService],
  //add the schemas property and pass the CUSTOM_ELEMENTS_SCHEMA constant
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
