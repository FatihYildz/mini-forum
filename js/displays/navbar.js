const links = [
    {
        title: 'Accueil',
        private: false,
        route: 'home'
    },
    {
        title: 'Modifier mon compte',
        private: true,
        route: 'update'
    },
    {
        title: 'Se déconnecter',
        private: true,
        route: ''
    },
    {
        title: 'Créer un compte',
        private: false,
        route: 'register'
    },
    {
        title: 'Se connecter',
        private: false,
        route: 'login'
    }];

export function createNavbar(activePage, loggedIn = false) {
    const navbar = document.createElement('nav');

    links
        .filter(link => link.private === loggedIn || link.route === 'home')
        .forEach(link => {
            const linkElement = document.createElement('div');
            linkElement.textContent = link.title;
            if (link.route === activePage) {
                linkElement.classList.add('active');
            }
            navbar.appendChild(linkElement);
        });

    return navbar;
}