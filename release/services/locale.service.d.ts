import { EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import 'rxjs/add/operator/startWith';
export declare class LocaleService {
    readonly defaultLocale: string;
    readonly localesSupported: string[];
    protected translateService: TranslateService;
    currentLocale: string;
    changes: EventEmitter<string>;
    constructor(defaultLocale: string, localesSupported: string[], translateService: TranslateService);
    updateLocale(nextLocale: string): void;
    readonly current: string;
    private translateSubscription;
}
