import TodoTemplate from "./TodoTemplate";
import { ItodoData } from "./typings";
import { createTemplate, findParentNode } from "./utils";

class TodoDom extends TodoTemplate {
  private domWrappeer: HTMLElement;
  constructor(domWrapper: HTMLElement) {
    super();
    this.domWrappeer = domWrapper;
  }
  protected initList(todoData: ItodoData[]) {
    const oFrag = document.createDocumentFragment();
    todoData.map((todo) => {
      const oItem = createTemplate('div','todo-item',this.todoView(todo));
      oFrag.appendChild(oItem);
    })
    this.domWrappeer.appendChild(oFrag);
  }
  protected addItem(todo: ItodoData) {
    const oItem = createTemplate('div','todo-item',this.todoView(todo));
    this.domWrappeer.appendChild(oItem);
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