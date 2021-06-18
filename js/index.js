import { router } from './router.js';
import { createNavbar } from './displays.navbar.js';

const header = document.querySelector('header');
const main = document.querySelector('main');

export function displayPage(route) {

    // Check if user is connected
    resetView();

    const headerElement = createNavbar(route);
    header.appendChild(headerElement);

    const bodyElement = router(route);
    main.appendChild(bodyElement);
};

function resetView() {
    header.innerHTML = '';
    main.innerHTML = '';
};