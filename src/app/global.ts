'use strict';

import { BootstrapOptions } from '@angular/core/src/application_ref';

export var isLoggedIn = false;

export function loggingin(){
    isLoggedIn = true;
}

export function logout(){
    isLoggedIn = false;
}

export function getStatus(): boolean{
    return isLoggedIn;
}