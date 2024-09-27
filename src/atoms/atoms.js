import { Atom } from "@base-framework/base";
import { Input, Button } from "@base-framework/atoms";

export const DeleteButton = Atom((props, children) =>
{
    props.class = 'bttn delete';
    return Button(props, children);
});

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