import {Injectable} from "@angular/core";
import {JwtHelper} from "angular2-jwt";
import {TOKEN_NAME} from "./auth.constant";
/**
 * Created by MCKM on 2017-10-17.
 */

@Injectable()
export class UserService {
    jwtHelper: JwtHelper = new JwtHelper();
    accessToken: string;

    constructor() {
    }

    login(accessToken: string) {
        console.log(accessToken);

        const decodedToken = this.jwtHelper.decodeToken(accessToken);
        console.log(decodedToken);

        this.accessToken = accessToken;

        localStorage.setItem(TOKEN_NAME, accessToken);
    }

    logout() {
        this.accessToken = null;
        localStorage.removeItem(TOKEN_NAME);
    }
}
