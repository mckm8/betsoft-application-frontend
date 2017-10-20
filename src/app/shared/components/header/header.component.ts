import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {UserService} from "../../services/user.service";
import {UserData} from "./UserData";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    pushRightClass: string = 'push-right';
    userData: UserData;
    constructor(private translate: TranslateService,
                private userService: UserService,
                public router: Router) {
        this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
                this.toggleSidebar();
            }
        });
        userService.getLoggedInUserData().subscribe(
            result => {
                if (result) {
                    this.userData = new UserData(result.username, result.firstName, result.secondName, result.email);
                    console.log(this.userData.userCaption);

                } else {
                    console.log('pusta odpowiedz')
                    // this.error = 'Username or password is incorrect';
                }
            },
            error => {
                console.log('BLAD');
            }
        );
    }

    ngOnInit() {}

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }


    onLoggedout() {
        localStorage.removeItem('access_token');
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}
