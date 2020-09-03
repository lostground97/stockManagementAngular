'use strict';

import { BootstrapOptions } from '@angular/core/src/application_ref';

export var isAdmin = false;
export var isUser = false;

export function adminLogin(){
    isAdmin = true;
    isUser = false;
}

export function logout(){
    isAdmin = false;
    isUser = false;
}

export function userLogin(){
    isUser = true;
    isAdmin = false;
}

export function getAdminStatus(): boolean{
    return isAdmin;
}

export function getUserStatus(): boolean{
    return isUser;
}