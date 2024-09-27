import { Button, Div, Footer, Span } from "@base-framework/atoms";

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

        return Div([
            Span('Clear Completed'),
            Button({
                class: 'clear-completed bttn danger',
                click: (e, {context}) => clear(context.data)
            })
        ]);
    }]
});

/**
 * This will create a nav footer.
 *
 * @returns {object}
 */
export const NavFooter = () => Footer({ class: 'footer' }, [
    Span('[[active]] active'),
    ClearButton()
]);