import { Div, Section, Ul } from "@base-framework/atoms";
import { Item } from "./list-item/item.js";

/**
 * This will setup the list filter.
 *
 * @param {string} filter
 * @returns {function}
 */
const setupFilter = (filter = 'all') =>
{
    switch (filter)
    {
        case 'active':
            return (item) => (item.completed !== true);
        case 'completed':
            return (item) => (item.completed === true);
        default:
            return (item) => true;
    }
};

/**
 * This will create a list section.
 *
 * @returns {object}
 */
export const SectionList = () => Section({ class: 'main' }, [
    Div({
        /**
         * This will update the list anytime the filter is
         * changed.
         */
        onSet: ['filter', (value) =>
        {
            const filter = setupFilter(value);

            return Ul({
                class: 'todo-list',

                /**
                 * This will bind to the parent items property and
                 * update the items when the data is updated.
                 */
                for: ['items', (item, index, data) =>
                {
                    /**
                     * This will check the filter, if the item does not pass
                     * the filter we return null to prevent it from being
                     * added to the list.
                     */
                    if (filter(item) === false)
                    {
                        return;
                    }

                    return new Item({
                        index,
                        data
                    });
                }]
            });
        }]
    })
]);