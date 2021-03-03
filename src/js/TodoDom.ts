import TodoTemplate from "./TodoTemplate";
import { ItodoData } from "./typings";
import { createTemplate, findParentNode } from "./utils";

class TodoDom extends TodoTemplate {
  protected domWrapper: HTMLElement;
  constructor(domWrapper: HTMLElement,) {
    super();
    this.domWrapper = domWrapper;
  }
  protected addItem(todo: ItodoData) {
    const oItem = createTemplate('div','todo-item',this.todoView(todo));
    this.domWrapper.appendChild(oItem);
  }
  protected removeItem(target: HTMLElement) {
    const oParentItem = findParentNode(target, 'todo-item');
    oParentItem.remove();
  }
  protected changeCompleted(target: HTMLElement, completed: boolean) {
    const oParentItem: HTMLElement = findParentNode(target, 'todo-item');
    const oContent: HTMLElement = oParentItem.querySelector('span');
    oContent.style.textDecoration = completed ? 'line-through' : '';
  }
}

export default TodoDom;
