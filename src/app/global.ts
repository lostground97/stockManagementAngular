'use strict';

import { BootstrapOptions } from '@angular/core/src/application_ref';

export var isAdmin = false;
export var isUser = false;

export function adminLogin(){
    isAdmin = true;
}

export function logout(){
    isAdmin = false;
    isUser = false;
}

export function userLogin(){
    isUser = true;
}

export function getAdminStatus(): boolean{
    return isAdmin;
}

export function getUserStatus(): boolean{
    return isUser;
}