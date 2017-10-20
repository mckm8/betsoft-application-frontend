import {Injectable} from "@angular/core";
import {JwtHelper} from "angular2-jwt";
import {TOKEN_NAME} from "./auth.constant";
import {Http} from "@angular/http";
/**
 * Created by MCKM on 2017-10-17.
 */

@Injectable()
export class UserService {
    jwtHelper: JwtHelper = new JwtHelper();
    accessToken: string;

    constructor(private http: Http) {
    }

    getLoggedInUserData(){
        var username = this.jwtHelper.decodeToken(localStorage.getItem("access_token")).sub;
        return this.http.get("http://localhost:8081/users/"+username, null)
            .map(res => res.json());
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
