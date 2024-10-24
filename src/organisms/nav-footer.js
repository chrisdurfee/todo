import { Button, Footer, I, Span } from "@base-framework/atoms";
import { Icons } from "../icons/icons.js";

/**
 * This will remove the completed items.
 *
 * @param {object} data
 * @returns {void}
 */
const clear = (data) =>
{
    const items = data.get('items');
    if (items.length < 1)
    {
        return;
    }

    /**
     * This will filter out the completed items
     * and store the active items.
     */
    const active = items.filter(item => !item.completed);
    data.set('items', active)
        .store();
};

/**
 * This will create a clear button.
 *
 * @returns {object}
 */
const ClearButton = () => (
{
    /**
     * This will only render the button if we have completed tasks.
     */
    onSet: ['completed', (value) =>
    {
        if (value < 1)
        {
            return null;
        }

        return Button({ class: 'flex-row justify-between items-center inline-flex whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-10 px-4 py-2', click: (e, {context}) => clear(context.data) }, [
            Span({class: 'mr-2' }, 'Clear Completed'),
            I({ html: Icons.trash })
        ]);
    }]
});

/**
 * This will create a nav footer.
 *
 * @returns {object}
 */
export const NavFooter = () => Footer({ class: 'footer inline-flex flex-row justify-between items-center p-4 min-h-[72px]' }, [
    Span({ class: 'text-muted-foreground' }, '[[active]] active'),
    ClearButton()
]);