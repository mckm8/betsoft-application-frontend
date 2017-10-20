import {Component, Input} from "@angular/core";
import {Router} from "@angular/router";
import {routerTransition} from "../router.animations";
import {AuthenticationService} from "../shared/services/authentication.service";
import {UserService} from "../shared/services/user.service";
import {LoginData} from "./login-data";
import {FormGroup, FormBuilder} from "@angular/forms";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent {

    loginForm: FormGroup;

    constructor(private router: Router,
                private authenticationService: AuthenticationService,
                private userService: UserService,
                private fb: FormBuilder) {
        this.createForm();
    }

    createForm() {
        this.loginForm = this.fb.group({
            username: '',
            password: ''
        })
    }

    onSubmit() {
        console.log(this.loginForm.value.username);
        console.log(this.loginForm.value.password);
        this.login(this.loginForm.value.username,
            this.loginForm.value.password);
    }

    login(username: string, password: string) {
        // this.loading = true;
        this.authenticationService.login(username, password)
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
        this.router.navigate(['/dashboard']);
    }
}
