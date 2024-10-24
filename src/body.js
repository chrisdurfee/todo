import { Div } from "@base-framework/atoms";
import { TodoHeader } from "./organisms/header/todo-header.js";
import { SectionList } from "./organisms/list/section-list.js";
import { NavFooter } from "./organisms/nav-footer.js";

/**
 * This will create the todo body.
 *
 * @returns {object}
 */
export const Body = () => (
    Div({ class: 'todo flex flex-auto flex-col' }, [
        TodoHeader(),
        SectionList(),
        NavFooter()
    ])
);