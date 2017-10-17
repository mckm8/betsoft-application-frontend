/**
 * Created by MCKM on 2017-10-17.
 */
import {AUTH_ADDRESS, TOKEN_NAME} from '../services/auth.constant';
import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {JwtHelper} from "angular2-jwt";

@Injectable()
export class AuthenticationService {
    jwtHelper: JwtHelper = new JwtHelper();
    accessToken: string;
    isAdmin: boolean;


    constructor(private http: Http) {
    }

    login(username: string, password: string) {
        // const body = `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&grant_type=password`;
        console.log("mleko1");
        var body = {
            "username" : username,
            "password" : password
        }

        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        // headers.append('Authorization', 'Basic ' + btoa(TOKEN_AUTH_USERNAME + ':' + TOKEN_AUTH_PASSWORD));

        // this.http.post(AUTH_ADDRESS, body, {headers}).subscribe(data => {
        //     var token = data.json().token;
        //
        //     const decodedToken = this.jwtHelper.decodeToken(token);
        //     console.log(decodedToken);
        //     this.accessToken = token;
        //     localStorage.setItem(TOKEN_NAME, this.accessToken);
        // });
        return this.http.post(AUTH_ADDRESS, body, {headers})
            .map(res => res.json())
            .map((res: any) => {
                if (res.token) {
                    return res.token;
                }
                return null;
            });
    }
}
