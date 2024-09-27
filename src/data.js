import { Data } from "@base-framework/base";

/**
 * This will setup the todo data.
 */
export const data = new Data();

/**
 * The storage key will be used to get and set data
 * to the local storage. We will set the key to the
 * data source to allow it to use the key.
 */
const STORAGE_KEY = 'key-name';
data.setKey(STORAGE_KEY);

/**
 * If the local storage is empty, we can set default
 * data.
 *
 * We can pass the default data in to the resume
 * method to pull the previous local storage data or
 * start with the default data.
 */
const defaultValue =
{
    items: [],
    active: 0,
    completed: 0,
    filter: 'all'
};
data.resume(defaultValue);

/**
 * This will update the list count when updated.
 *
 * @param {array} items
 * @returns {void}
 */
data.on('items', (items) =>
{
    const total = items.length;
    const active = items.filter(item => !item.completed).length;
    const completed = total - active;

    data.set({
        active,
        completed
    });
});

/**
 * This will update the filter when updated.
 *
 * @param {string} value
 * @returns {void}
 */
data.on('filter', (value) =>
{
    if (!value)
    {
        data.filter = 'all';
    }
    data.store();
});