import * as Rx from 'rxjs'
import { Component, OnInit } from '@angular/core';
import { LocaleService } from 'kio-ng2-i18n'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = this.localeService.currentLocale

  constructor(protected localeService:LocaleService){
    Rx.Observable.timer(1000).subscribe ( t => {
      this.localeService.updateLocale('en_US')
    } )
  }

  ngOnInit(){
    this.localeService.changes.subscribe ( locale => {
      this.title = `Locale: ${locale}`
    } )
  }
}
