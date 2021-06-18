import { links, navbarRouter } from '../router.js';

export function createNavbar(route, loggedIn) {
    const navbar = document.createElement('nav');

    links
        .filter(link => link.private === loggedIn && link.route != 'topic')
        .forEach(link => {
            const linkElement = document.createElement('div');
            linkElement.id = `link-${link.route}`;
            linkElement.textContent = link.title;
            if (link.route === route) {
                linkElement.classList.add('active');
            } else {
                linkElement.classList.remove('active');
            }
            linkElement.addEventListener('click', navbarRouter);
            navbar.appendChild(linkElement);
        });

    return navbar;
}