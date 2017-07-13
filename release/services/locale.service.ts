import { Injectable, Inject, EventEmitter } from '@angular/core'
import { LocaleProvider } from '../interfaces/LocaleProvider'
import { LOCALES, DEFAULT_LOCALE } from '../injection'

@Injectable()
export class LocaleService {

  currentLocale:string
  changes:EventEmitter<string>=new EventEmitter()

  constructor(
      @Inject(DEFAULT_LOCALE) readonly defaultLocale:string,
      @Inject(LOCALES) readonly localesSupported:string[]
    )
  {}

  updateLocale ( nextLocale:string ) {
    this.currentLocale = nextLocale
    this.changes.emit(nextLocale)
  }

}