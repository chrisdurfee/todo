import { Div } from "@base-framework/atoms";
import { router } from "@base-framework/base";
import { Todo } from "./todo.js";

/**
 * This will setup the app router.
 */
const baseUrl = '/todo/';
const title = 'Example App';
router.setup(baseUrl, title);

/**
 * This will setup the service worker.
 *
 * @returns {void}
 */
const setupService = () =>
{
    // service workers can only work on secure connections
    const protocol = window.location.protocol.replace(':', '');
    if (!('serviceWorker' in navigator) || protocol === 'http')
    {
        return false;
    }

    const sw = navigator.serviceWorker;
    sw.register('./sw.js', {
        scope: './'
    }).then((serviceWorker) =>
    {

    });
};

setupService();

/**
 * This will create the app.
 *
 * @return {object}
 */
export const App = () => (
    Div({
        class: 'app',

        /**
         * This will setup a route that will pass the filter from the
         * url to the todo component.
         */
        route: {
            uri: '/:filter?*', // this will set an optional param named filter
            component: new Todo()
        }
    })
);