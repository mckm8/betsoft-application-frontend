/**
 * Created by MCKM on 2017-10-20.
 */
export class UserData{
    private _username: string;
    private _firstName: string;
    private _secondName: string;
    private _email: string;

    constructor(username: string, firstName: string, secondName: string, email: string) {
        this._username = username;
        this._firstName = firstName;
        this._secondName = secondName;
        this._email = email;
    }

    get userCaption(): string {
        return this.firstName + ' ' + this.secondName;
    }

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get secondName(): string {
        return this._secondName;
    }

    set secondName(value: string) {
        this._secondName = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }
}
