export class User {
    username:string
    password:string

    setUserName(username: string) {
        this.username = username;
    }

    getUserName() {
        return this.username;
    }
}