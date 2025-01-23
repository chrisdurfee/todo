import { Div } from "@base-framework/atoms";
import { router } from "@base-framework/base";
import { Configs } from "./configs.js";
import { setupService } from "./service.js";
import { Todo } from "./todo.js";

/**
 * This will setup the app router.
 */
router.setup(Configs.router.baseUrl, Configs.router.title);

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