import { Input, Label } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import { Button } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";

/**
 * This will create a delete button.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
export const DeleteButton = Atom((props, children) => (
    Button({
        ...props,
        variant: 'icon',
        icon: Icons.trash
    })
));

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
            class: 'cursor-pointer',
            ...props,
            children
        })
    ]))
);