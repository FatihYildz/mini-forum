import { displayPage } from './index.js';
import { createHomeDisplay } from './displays/homeDisplay.js';
import { createUpdateUserDisplay } from './displays/updateUserDisplay.js';
import { createRegisterDisplay } from './displays/registerDisplay.js';
import { createTopicDisplay } from './displays/topicDisplay.js';
import { createLoginDisplay } from './displays/loginDisplay.js';

export const links = [
    {
        title: 'Accueil',
        private: true,
        route: 'home',
        page: createHomeDisplay
    },
    {
        title: 'Modifier mon compte',
        private: true,
        route: 'update',
        page: createUpdateUserDisplay
    },
    {
        title: 'Se déconnecter',
        private: true,
        route: 'logout'
    },
    {
        title: 'Créer un compte',
        private: false,
        route: 'register',
        page: createRegisterDisplay
    },
    {
        title: 'Se connecter',
        private: false,
        route: 'login',
        page: createLoginDisplay
    },
    {
        route: 'topic',
        page: createTopicDisplay,
    }
];

export function navbarRouter(event) {
    const route = event.target.id.split('-')[1];
    displayPage(route);
}

export function router(route) {
    if (route === 'logout') {
        // Disconnect user here
        return links.find(link => link.route === 'login').page();
    }
    return links.find(link => link.route === route).page();
}

