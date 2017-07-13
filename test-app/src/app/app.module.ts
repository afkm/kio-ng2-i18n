import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { KioNg2i18nModule, DEFAULT_LOCALE } from 'kio-ng2-i18n'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    KioNg2i18nModule
  ],
  providers: [
    {
      provide: DEFAULT_LOCALE,
      useValue: 'en_US'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
