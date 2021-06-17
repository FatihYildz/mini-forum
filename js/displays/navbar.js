export function createNavbar(activePage, loggedIn = false) {
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

    switch (activePage) {
        case 'home':
            homeLink.classList.add('active');
            break;
        case 'update':
            updateAccountLink.classList.add('active');
            break;
        case 'register':
            registerLink.classList.add('active');
            break;
        case 'login':
            loginLink.classList.add('active');
            break;
        default:
            break;
    }

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