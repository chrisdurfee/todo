import { Div } from "@base-framework/atoms";
import { router } from "@base-framework/base";
import { setupService } from "./service.js";
import { Todo } from "./todo.js";

/**
 * This will setup the app router.
 */
const BASE_URL = '/todo/';
const title = 'Example App';
router.setup(BASE_URL, title);

/**
 * This will setup the service worker.
 */
setupService();

/**
 * This will create the app.
 *
 * @return {object}
 */
export const App = () => (
    Div({
        class: 'app-container flex flex-auto flex-col w-full min-h-full',

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