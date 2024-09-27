import { router } from "@base-framework/base";
import { Div } from "@base-framework/atoms";
import { Todo } from "./todo.js";

/**
 * This will setup the app router.
 */
const baseUrl = '/todo/';
const title = 'Example App';
router.setup(baseUrl, title);

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