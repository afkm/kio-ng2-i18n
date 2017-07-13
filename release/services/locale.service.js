import { Injectable, Inject, EventEmitter } from '@angular/core';
import { LOCALES, DEFAULT_LOCALE } from '../injection';
var LocaleService = (function () {
    function LocaleService(defaultLocale, localesSupported) {
        this.defaultLocale = defaultLocale;
        this.localesSupported = localesSupported;
        this.changes = new EventEmitter();
    }
    LocaleService.prototype.updateLocale = function (nextLocale) {
        this.currentLocale = nextLocale;
        this.changes.emit(nextLocale);
    };
    LocaleService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    LocaleService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DEFAULT_LOCALE,] },] },
        { type: Array, decorators: [{ type: Inject, args: [LOCALES,] },] },
    ]; };
    return LocaleService;
}());
export { LocaleService };
