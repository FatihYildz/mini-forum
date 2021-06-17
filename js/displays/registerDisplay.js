export function loginFormDisplay() {
    const form = document.createElement('form');

    const usernameDiv = document.createElement('div');
    const passwordDiv = document.createElement('div');
    const confirmPasswordDiv = document.createElement('div');

    const usernameLabel = document.createElement('label');
    usernameLabel.setAttribute('for', 'username-ipt');
    usernameLabel.innerHTML = 'Nom Utilisateur: ';

    const usernameInput = document.createElement('input');
    usernameInput.setAttribute('type', 'text');
    usernameInput.setAttribute('name', 'username');
    usernameInput.setAttribute('id', 'username-ipt');
    usernameInput.required = true;

    const passwordLabel = document.createElement('label');
    passwordLabel.setAttribute('for', 'password-ipt');
    passwordLabel.innerHTML = 'Mot de passe: ';

    const passwordInput = document.createElement('input');
    passwordInput.setAttribute('type', 'password');
    passwordInput.setAttribute('name', 'password');
    passwordInput.setAttribute('id', 'password-ipt');
    passwordInput.required = true;

    const confirmPasswordLabel = document.createElement('label');
    confirmPasswordLabel.setAttribute('for', 'password-confirm-ipt');
    confirmPasswordLabel.innerHTML = 'Confirmez le mot de passe: ';

    const confirmPasswordInput = document.createElement('input');
    confirmPasswordInput.setAttribute('type', 'password');
    confirmPasswordInput.setAttribute('name', 'password-confirm');
    confirmPasswordInput.setAttribute('id', 'password-confirm-ipt');
    confirmPasswordInput.required = true;


    const submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'Créer un compte');


    usernameDiv.appendChild(usernameLabel);
    usernameDiv.appendChild(usernameInput);

    passwordDiv.appendChild(passwordLabel);
    passwordDiv.appendChild(passwordInput);

    confirmPasswordDiv.appendChild(confirmPasswordLabel);
    confirmPasswordDiv.appendChild(confirmPasswordInput);

    form.appendChild(usernameDiv);
    form.appendChild(passwordDiv);
    form.appendChild(confirmPasswordDiv);
    form.appendChild(submit);

    return form;
}