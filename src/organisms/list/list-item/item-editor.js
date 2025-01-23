import { Div, OnState } from "@base-framework/atoms";
import { Input } from "@base-framework/ui/atoms";

const ENTER_KEY = 13;
const ESCAPE_KEY = 27;

/**
 * This will create an editor input.
 *
 * @returns {object}
 */
const EditorInput = () => (
    Input(
    {
        /**
         * This will bind the item description to the item data.
         */
        bind: 'description',
        class: 'edit flex flex-auto mt-2 p-2 rounded-sm',
        keydown(e, {data})
        {
            switch (e.which)
            {
                case ENTER_KEY:
                    this.blur();
                    break;
                case ESCAPE_KEY:
                    /**
                     * This will stop the editor and revert the
                     * data.
                     */
                    data.revert();
                    this.blur();
                    break;
            }
        },
        blur(e, parent)
        {
            parent.context.data.store();
            parent.state.editing = false;
        }
    })
);

/**
 * This will create a todo editor.
 *
 * @returns {object}
 */
export const ItemEditor = () => (
    Div({ class: 'flex flex-auto' }, [
        OnState('editing', (val) => val && EditorInput() || null)
    ])
);