import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DEFAULT_LOCALE } from './injection/DefaultLocale.token';
import { LOCALES } from './injection/Locale.token';
import { LOCALE_PROVIDER } from './injection/LocaleProvider.token';
import { LocaleService } from './services/locale.service';
export { LocaleService };
export { DEFAULT_LOCALE, LOCALES, LOCALE_PROVIDER };
var KioNg2i18nModule = (function () {
    function KioNg2i18nModule() {
    }
    KioNg2i18nModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    //declarations: [],
                    providers: [
                        {
                            provide: LOCALES,
                            useValue: ['en_US', 'de_DE']
                        },
                        {
                            provide: DEFAULT_LOCALE,
                            useValue: 'de_DE'
                        },
                        LocaleService
                    ],
                    //entryComponents: [],
                    exports: [CommonModule]
                },] },
    ];
    /** @nocollapse */
    KioNg2i18nModule.ctorParameters = function () { return []; };
    return KioNg2i18nModule;
}());
export { KioNg2i18nModule };
