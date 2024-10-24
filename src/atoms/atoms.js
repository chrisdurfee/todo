import { Button, Input, Label } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";

/**
 * This will create a delete button.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
export const DeleteButton = Atom((props, children) =>
{
    props.class = 'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2';
    return Button(props, children);
});

/**
 * This will create a checkbox.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
export const Checkbox = Atom((props, children) => (
    Label({ class: 'check-label' }, [
        Input({
            type: 'checkbox',
            ...props,
            children
        })
    ]))
);