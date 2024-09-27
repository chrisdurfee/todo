import { Button, Input } from "@base-framework/atoms";
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
    props.class = 'bttn delete';
    return Button(props, children);
});

/**
 * This will create a checkbox.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
export const Checkbox = Atom((props, children) => ({
    tag: 'label',
    class: 'check-label',
    nest:
    [
        Input({
            type: 'checkbox',
            ...props,
            children
        })
    ]
}));