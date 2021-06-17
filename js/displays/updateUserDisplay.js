export function createUpdateUserDisplay() {
    const updateUserForm = document.createElement('form');
    updateUserForm.id = "update-user-form";

    const usernameDiv = document.createElement('div');
    const newPasswordDiv = document.createElement('div');
    const newPasswordConfirmDiv = document.createElement('div');
    const oldPasswordDiv = document.createElement('div');

    // Username
    const usernameLabel = document.createElement('label');
    usernameLabel.setAttribute('for', 'username-ipt');
    usernameLabel.textContent = 'Nom d\'utilisateur';

    const usernameInput = document.createElement('input');
    usernameInput.type = 'text';
    usernameInput.name = 'username';
    usernameInput.id = 'username-ipt';
    usernameInput.placeholder = "Modifier le nom d'utilisateur";

    usernameDiv.appendChild(usernameLabel);
    usernameDiv.appendChild(usernameInput);

    // New password
    const newPasswordLabel = document.createElement('label');
    newPasswordLabel.setAttribute('for', 'new-password-ipt');
    newPasswordLabel.textContent = 'Nouveau mot de passe';

    const newPasswordInput = document.createElement('input');
    newPasswordInput.type = 'password';
    newPasswordInput.name = 'new-password';
    newPasswordInput.id = 'new-password-ipt';
    newPasswordInput.placeholder = "Modifier le mot de passe";

    newPasswordDiv.appendChild(newPasswordLabel);
    newPasswordDiv.appendChild(newPasswordInput);

    // Confirmation new password
    const newPasswordConfirmLabel = document.createElement('label');
    newPasswordConfirmLabel.setAttribute('for', 'new-password-confirm-ipt');
    newPasswordConfirmLabel.textContent = 'Confirmer le nouveau mot de passe';

    const newPasswordConfirmInput = document.createElement('input');
    newPasswordConfirmInput.type = 'password';
    newPasswordConfirmInput.name = 'new-password-confirm';
    newPasswordConfirmInput.id = 'new-password-confirm-ipt';
    newPasswordConfirmInput.placeholder = "Confirmer le nouveau mot de passe";

    newPasswordConfirmDiv.appendChild(newPasswordConfirmLabel);
    newPasswordConfirmDiv.appendChild(newPasswordConfirmInput);

    // Old password
    const oldPasswordLabel = document.createElement('label');
    oldPasswordLabel.setAttribute('for', 'old-password-ipt');
    oldPasswordLabel.textContent = 'Mot de passe actuel';

    const oldPasswordInput = document.createElement('input');
    oldPasswordInput.type = 'password';
    oldPasswordInput.name = 'old-password';
    oldPasswordInput.id = 'old-password-ipt';
    oldPasswordInput.placeholder = "Entrer le mot de passe actuel";

    oldPasswordDiv.appendChild(oldPasswordLabel);
    oldPasswordDiv.appendChild(oldPasswordInput);

    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'Modifier mon compte';

    updateUserForm.appendChild(usernameDiv);
    updateUserForm.appendChild(newPasswordDiv);
    updateUserForm.appendChild(newPasswordConfirmDiv);
    updateUserForm.appendChild(oldPasswordDiv);
    updateUserForm.appendChild(submitButton);

    return updateUserForm;
}