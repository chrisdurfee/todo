import { TabNavigation } from "@base-framework/ui/organisms";

/**
 * This will create a nav.
 *
 * @returns {object}
 */
export const Nav = () => (
    new TabNavigation({
        class: 'mt-6 mb-1',
        options: [
            {
                label: 'All',
                href: './',
                exact: true
            },
            {
                label: 'Active',
                href: 'active'
            },
            {
                label: 'Completed',
                href: 'completed'
            }
        ]
    })
);