// Name Your Guards Well
// Guards should use the following naming convention:

// File Name: name.function.guard.ts
// Class Name: NameFunctionGuard
// Each part being identified as:

// name - this is the name of your guard. What are you guarding against?
// function - this is the function your guard will be attached to. Angular supports CanActivate, CanActivateChild, CanDeactivate, and Resolve.
// An example of an Auth Guard that is attached to the CanActivate function would be named as follows:

// File Name: auth.can_activate.guard
// Class Name: AuthCanActivateGuard

import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthCanActivateGuard implements CanActivate {
  constructor() {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return true;
  }
}
