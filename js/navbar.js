export function createNavbar(loggedIn) {
    const navbar = document.createElement('nav');

    const homeLink = document.createElement('div');
    homeLink.textContent = 'Accueil';
    const updateAccountLink = document.createElement('div');
    updateAccountLink.textContent = 'Modifier mon compte';
    const logoutLink = document.createElement('div');
    logoutLink.textContent = 'Se déconnecter';
    const registerLink = document.createElement('div');
    registerLink.textContent = 'Créer un compte';
    const loginLink = document.createElement('div');
    loginLink.textContent = 'Se connecter';

    navbar.appendChild(homeLink);
    if (loggedIn) {
        navbar.appendChild(updateAccountLink);
        navbar.appendChild(logoutLink);
    } else {
        navbar.appendChild(registerLink);
        navbar.appendChild(loginLink);
    }

    return navbar;
}