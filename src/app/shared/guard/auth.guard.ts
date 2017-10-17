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
        console.log("token not expired");
        console.log(tokenNotExpired("access_token"));
        if (token){
            console.log(
                this.jwtHelper.decodeToken(token),
                this.jwtHelper.getTokenExpirationDate(token),
                this.jwtHelper.isTokenExpired(token)
            );
        }

        if (localStorage.getItem('access_token')) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}
