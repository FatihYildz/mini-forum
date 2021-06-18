export class User {
    constructor(id, username, password, admin) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.admin = admin;
    }

    static login(user) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:8080/login', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({ username: user.username, password: user.password }));

        new Promise((resolve, reject) => {
            xhr.onload = () => (xhr.status !== 200) ? reject() : resolve(JSON.parse(xhr.response));
        }).then(user => {
            return user;
        }).catch((error) => {
            console.log('Error', error);
        });
    }

    static createUser(user) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:8080/api/user', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({ username: user.username, password: user.password, passwordConfirm: user.password }));

        new Promise((resolve, reject) => {
            xhr.onload = () => (xhr.status !== 200) ? reject() : resolve(JSON.parse(xhr.response));
        }).then(user => {
            console.log(user);
            return user;
        }).catch((error) => {
            console.log('Error', error);
        });
    };
};