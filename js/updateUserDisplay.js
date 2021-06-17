export function createUpdateUserDisplay() {
    const updateUserForm = document.createElement('form');
    updateUserForm.id = "update-user-form";

    const usernameInput = document.createElement('input');
    usernameInput.type = 'text';
    usernameInput.name = 'username';
    usernameInput.id = 'username-ipt';
    usernameInput.placeholder = "Modifier le nom d'utilisateur";

    const newPasswordInput = document.createElement('input');
    newPasswordInput.type = 'password';
    newPasswordInput.name = 'new-password';
    newPasswordInput.id = 'new-password-ipt';
    newPasswordInput.placeholder = "Modifier le mot de passe";

    const newPasswordConfirmInput = document.createElement('input');
    newPasswordConfirmInput.type = 'password';
    newPasswordConfirmInput.name = 'new-password-confirm';
    newPasswordConfirmInput.id = 'new-password-confirm-ipt';
    newPasswordConfirmInput.placeholder = "Confirmer le nouveau mot de passe";

    const oldPasswordInput = document.createElement('input');
    oldPasswordInput.type = 'password';
    oldPasswordInput.name = 'old-password';
    oldPasswordInput.id = 'old-password-ipt';
    oldPasswordInput.placeholder = "Entrer le mot de passe actuel";

    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.textContent = 'Modifier mon compte';

    updateUserForm.appendChild(usernameInput);
    updateUserForm.appendChild(newPasswordInput);
    updateUserForm.appendChild(newPasswordConfirmInput);
    updateUserForm.appendChild(oldPasswordInput);
    updateUserForm.appendChild(submitButton);

    return updateUserForm;
}