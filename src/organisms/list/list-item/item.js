import { Li } from "@base-framework/atoms";
import { Component, Jot } from "@base-framework/base";
import { ItemDetails } from "./item-details.js";
import { ItemEditor } from "./item-editor.js";

/**
 * This will create a todo item.
 *
 * @type {typeof Component}
 */
export const Item = Jot(
{
    /**
     * This will setup the item states.
     *
     * @member {object} state
     */
    state:
    {
        editing: false,
        completed: false
    },

    /**
     * This will render the item.
     *
     * @return {object}
     */
    render()
    {
        return Li(
            {
                class: 'flex flex-col rounded-lg border bg-card text-card-foreground shadow-sm p-4',

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
        );
    }
});