import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import {tokenNotExpired, JwtHelper} from "angular2-jwt";

@Injectable()
export class AuthGuard implements CanActivate {
    jwtHelper: JwtHelper = new JwtHelper();

    constructor(private router: Router) { }

    canActivate() {
        var token = localStorage.getItem('access_token');

        if (token) {
            if (this.jwtHelper.isTokenExpired(token)){
                this.router.navigate(['/login']);
                return false;
            } else {
                return true;
            }
        }

        this.router.navigate(['/login']);
        return false;
    }
}
