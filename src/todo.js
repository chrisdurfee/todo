import { Component } from "@base-framework/base";
import { Body } from "./body.js";
import { data } from "./data.js";

/**
 * Todo
 *
 * This is the main todo component. It will render the header, list and footer.
 *
 * @export
 * @class Todo
 * @extends {Component}
 */
export class Todo extends Component
{
    /**
     * This will be called before the component is set up.
     *
     * @return {void}
     */
    beforeSetup()
    {
        /**
         * The Todo is loaded by a route in the app component. The
         * route data source is passed to our todo component.
         *
         * This will link the route filter param to the data filter
         * property.
         */
        data.link(this.route, 'filter');
    }

    /**
     * This will setup the local context that is shared with all nested
     * components and atoms.
     *
     * @returns {object}
     */
    setContext()
    {
        return { data };
    }

    /**
     * This will render the todo component.
     *
     * @returns {object}
     */
    render()
    {
        return Body();
    }
}