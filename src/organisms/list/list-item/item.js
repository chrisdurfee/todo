import { Li } from "@base-framework/atoms";
import { Jot } from "@base-framework/base";
import { ItemDetails } from "./item-details.js";
import { ItemEditor } from "./item-editor.js";

/**
 * This will create a todo item.
 *
 * @class
 */
export const Item = Jot(
{
    /**
     * This will setup the item states.
     *
     * @param {object|function}
     */
    state:
    {
        editing: false
    },

    /**
     * This will render the item.
     *
     * @param {object|function}
     */
    render: Li(
        {
            class: 'card list-card flex hover',

            /**
             * This will link the item data and state to add or remove the
             * classes when the data property is true. If the value is false
             * the classes will be removed.
             *
             * onSet binds to the component data and the onState binds to the
             * components state.
             */
            onSet: ['completed', { completed: true }],
            onState: ['editing', { editing: true }]
        },
        [
            ItemDetails(),
            ItemEditor()
        ]
    )
});