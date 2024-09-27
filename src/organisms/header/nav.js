import { Ul } from "@base-framework/atoms";
import { NavLink } from "@base-framework/base";

/**
 * This will create a navigation link.
 *
 * @param {string} href
 * @param {string} text
 * @returns {object}
 */
const NavLi = (href, text) => (new NavLink(
{
    href,
    text,
    class: 'single-tab bttn',
    activeClass: 'selected'
}));

/**
 * This will create a nav.
 *
 * @returns {object}
 */
export const Nav = () => Ul({ class: 'filter-group filter-tabs' }, [
    NavLi('./', 'All'),
    NavLi('./active', 'Active'),
    NavLi('./completed', 'Completed')
]);