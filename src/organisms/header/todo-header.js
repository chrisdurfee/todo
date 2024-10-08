import { H1, Header, Input } from "@base-framework/atoms";
import { Nav } from "./nav.js";

/**
 * This will add a new todo to the items array and update
 * the local storage.
 *
 * @param {string} description
 * @param {object} data
 * @returns {void}
 */
const add = (description, data) =>
{
    data.push('items', {
        description,
        completed: false
    }).store();
};

/**
 * This will store the enter key code.
 */
const ENTER_KEY = 13;

/**
 * This will create a header.
 *
 * @returns {object}
 */
export const TodoHeader = () => Header({ class: 'header' }, [
    H1('Todo'),
    Input({
        class: 'new-todo',
        placeholder: 'what needs to be done?',
        autofocus: true,

        /**
         * This willl add a new todo when the enter key is pressed.
         *
         * @param {object} e
         * @param {object} parent
         * @returns {void}
         */
        keydown(e, {context})
        {
            if (e.which === ENTER_KEY)
            {
                add(this.value, context.data);

                this.value = '';
            }
        }
    }),
    Nav()
]);