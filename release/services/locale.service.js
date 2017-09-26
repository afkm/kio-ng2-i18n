import 'rxjs/add/operator/startWith';
import { Injectable, Inject, EventEmitter } from '@angular/core';
import { DEFAULT_LOCALE } from '../injection/DefaultLocale.token';
import { LOCALES } from '../injection/Locale.token';
import { TranslateService } from '@ngx-translate/core';
var LocaleService = /** @class */ (function () {
    function LocaleService(defaultLocale, localesSupported, translateService) {
        var _this = this;
        this.defaultLocale = defaultLocale;
        this.localesSupported = localesSupported;
        this.translateService = translateService;
        this.changes = new EventEmitter();
        this.translateSubscription = this.changes.startWith(this.defaultLocale).subscribe(function (locale) {
            _this.translateService.use(locale.substr(0, 2));
        });
        this.currentLocale = defaultLocale;
    }
    LocaleService.prototype.updateLocale = function (nextLocale) {
        this.currentLocale = nextLocale;
        this.changes.emit(nextLocale);
    };
    Object.defineProperty(LocaleService.prototype, "current", {
        get: function () {
            return this.currentLocale;
        },
        enumerable: true,
        configurable: true
    });
    LocaleService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    LocaleService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DEFAULT_LOCALE,] },] },
        { type: Array, decorators: [{ type: Inject, args: [LOCALES,] },] },
        { type: TranslateService, },
    ]; };
    return LocaleService;
}());
export { LocaleService };
