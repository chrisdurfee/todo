import { Footer, On, Span } from "@base-framework/atoms";
import { Button } from "@base-framework/ui";
import { Icons } from "../icons/icons.js";

/**
 * This will remove the completed items.
 *
 * @param {object} data
 * @returns {void}
 */
const clear = (data) =>
{
    const items = data.items;
    if (items.length < 1)
    {
        return;
    }

    /**
     * This will filter out the completed items
     * and store the active items.
     */
    const active = items.filter(item => !item.completed);
    data.items = active;

    /**
     * This will store the data to the local storage.
     */
    data.store();
};

/**
 * This will create a clear button.
 *
 * @returns {object}
 */
const ClearButton = () => (
    On('completed', (value) =>
        (value > 0) && Button({
            variant: 'withIcon',
            position: 'right',
            class: 'destructive',
            click: (e, {context}) => clear(context.data),
            icon: Icons.trash
        }, 'Clear Completed')
    )
);

/**
 * This will create a nav footer.
 *
 * @returns {object}
 */
export const NavFooter = () => Footer({ class: 'footer inline-flex flex-row justify-between items-center p-4 min-h-[72px]' }, [
    Span({ class: 'text-muted-foreground' }, '[[active]] active'),
    ClearButton()
]);