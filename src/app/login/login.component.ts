import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import {AuthenticationService} from "../shared/services/authentication.service";
import {UserService} from "../shared/services/user.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    constructor(private router: Router, private authenticationService: AuthenticationService, private userService: UserService) {
    }

    ngOnInit() {
    }

    onLoggedin() {
        this.login();
        // this.userService.login(token);
    }

    login() {
        // this.loading = true;

        this.authenticationService.login("user","password")
            .subscribe(
                result => {
                    // this.loading = false;

                    if (result) {
                        this.userService.login(result);
                        this.navigateAfterSuccess();
                    } else {
                        console.log('Username or password is incorrect')
                        // this.error = 'Username or password is incorrect';
                    }
                },
                error => {
                    console.log('Username or password is incorrect');
                    // this.error = 'Username or password is incorrect';
                    // this.loading = false;
                }
            );
    }

    private navigateAfterSuccess() {
        // if (this.redirectUrl) {
        //     this.router.navigateByUrl(this.redirectUrl);
        // } else {
        console.log("navigating...")
            this.router.navigate(['/dashboard']);
        // }
    }
}
