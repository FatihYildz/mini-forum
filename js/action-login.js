const url = "http://localhost:8080/";

myForm = document.getElementById('loginform'); //Il faudra add un ID au form

myForm.addEventListener('submit', login);


function login(event) {
    event.preventDefault();
    const input_username = event.target.password.value;
    const input_password = event.target.password.value;

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/login', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({ username: input_username, password: input_password }));
    new Promise((resolve, reject) => {
        xhr.onload = () => (xhr.status !== 200) ? reject() : resolve(JSON.parse(xhr.response));
    }).then(user => {
        console.log(user);
        return user;
    }).catch(() => {
        console.log('Oops, user not found');
    });
}