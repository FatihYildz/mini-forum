import { User } from '../models/user.js';

export function createLoginDisplay() {
    const form = document.createElement('form');
    const usernameDiv = document.createElement('div');
    const passwordDiv = document.createElement('div');

    const usernameLabel = document.createElement('label');
    usernameLabel.setAttribute('for', 'username-ipt');
    usernameLabel.innerHTML = 'Nom Utilisateur: ';

    const usernameInput = document.createElement('input');
    usernameInput.setAttribute('type', 'text');
    usernameInput.setAttribute('name', 'username');
    usernameInput.setAttribute('id', 'username-ipt');
    usernameInput.required = true;

    usernameDiv.appendChild(usernameLabel);
    usernameDiv.appendChild(usernameInput);

    const passwordLabel = document.createElement('label');
    passwordLabel.setAttribute('for', 'password-ipt');
    passwordLabel.innerHTML = 'Mot de passe: ';

    const passwordInput = document.createElement('input');
    passwordInput.setAttribute('type', 'password');
    passwordInput.setAttribute('name', 'password');
    usernameInput.setAttribute('id', 'password-ipt');
    passwordInput.required = true;

    passwordDiv.appendChild(passwordLabel);
    passwordDiv.appendChild(passwordInput);

    const submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'Envoyer');

    form.appendChild(usernameDiv);
    form.appendChild(passwordDiv);
    form.appendChild(submit);

    form.addEventListener('submit', (event) => {
        const user = new User(null, usernameInput.value, passwordInput.value, null);
        User.login(user);
    });

    return form;
}