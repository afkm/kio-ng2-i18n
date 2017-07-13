import { EventEmitter } from '@angular/core';
export declare class LocaleService {
    readonly defaultLocale: string;
    readonly localesSupported: string[];
    currentLocale: string;
    changes: EventEmitter<string>;
    constructor(defaultLocale: string, localesSupported: string[]);
    updateLocale(nextLocale: string): void;
}
