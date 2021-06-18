import { router } from './router.js';
import { createNavbar } from './displays/navbar.js';

const header = document.querySelector('header');
const main = document.querySelector('main');

if (isUserConnected()) {
    displayPage('topic');
} else {
    displayPage('login');
}

export function displayPage(route) {

    if (route === 'logout') {
        localStorage.clear();
    }

    const userIsConnected = isUserConnected();

    resetView();

    const headerElement = createNavbar(route, userIsConnected);
    header.appendChild(headerElement);

    const bodyElement = router(route);
    main.appendChild(bodyElement);
};

function isUserConnected() {
    const localStorageUser = localStorage.getItem('user');
    if (localStorageUser) {
        return true;
    } else {
        return false;
    }
}

function resetView() {
    header.innerHTML = '';
    main.innerHTML = '';
};