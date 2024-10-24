import { Ul } from "@base-framework/atoms";
import { NavLink } from "@base-framework/base";

/**
 * This will create a navigation link.
 *
 * @param {string} href
 * @param {string} text
 * @returns {object}
 */
const NavLi = (href, text, exact = false) => (new NavLink(
{
    href,
    text,
    exact,
    class: 'inline-flex items-center justify-center whitespace-nowrap rounded-md px-8 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow',
    dataSet: ['selected', ['state', true, 'active']]
}));

/**
 * This will create a nav.
 *
 * @returns {object}
 */
export const Nav = () => Ul({ class: 'inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground mt-8' }, [
    NavLi('./', 'All', true),
    NavLi('active', 'Active'),
    NavLi('completed', 'Completed')
]);