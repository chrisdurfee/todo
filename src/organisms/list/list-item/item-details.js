import { Checkbox, DeleteButton } from "../../../atoms/atoms.js";
import { Div, Label } from "@base-framework/atoms";

/**
 * This will refresh the items.
 *
 * @param {object} data
 */
const refresh = (data) =>
{
    const MILLISECONDS = 10;
    window.setTimeout(() => data.refresh('items').store(), MILLISECONDS);
};

/**
 * This will create a detail object.
 *
 * @returns {object}
 */
export const ItemDetails = () => (Div({ class: 'view' }, [
    /**
     * This will bind the completed value to the checkbox and
     * refresh the list when changed.
     */
    Checkbox({ bind: 'completed', change: (e, {context}) => refresh(context.data)}),

    /**
     * This will watch the item description and update it
     * when it changes.
     */
    Label({
            click: (e, {state}) => state.toggle('editing')
        },
        '[[description]]'
    ),
    DeleteButton(
    {
        click(e, parent)
        {
            /**
             * This will remove the item from the list.
             */
            const data = parent.context.data;
            data.splice('items', parent.index)
            .store();
        }
    })
]));