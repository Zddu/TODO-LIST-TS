import TodoDom from "./TodoDom";
import { ItodoData } from "./typings";
import {getTodoList, removeTodo} from "./TodoService";
import {createTemplate} from "./utils";

/**
 * 处理传入的数据类
 */
class TodoEvent extends TodoDom {
  private tododata: ItodoData[];
  constructor(tododata: ItodoData[], domWrapper: HTMLElement) {
    super(domWrapper);
    this.tododata = tododata;
    this.init(this.tododata);
  }
  // @ts-ignore
  @getTodoList
  protected init(todoData: ItodoData[]){
    this.tododata = todoData;
    this.initList(this.tododata)
  }
  protected initList(todoData: ItodoData[]):void {
    this.tododata = todoData;
    const oFrag = document.createDocumentFragment();
    this.tododata.map((todo) => {
      const oItem = createTemplate('div','todo-item',this.todoView(todo));
      oFrag.appendChild(oItem);
    })
    this.domWrapper.appendChild(oFrag);
  }
  public addTodo(todo: ItodoData): undefined | number {
    const _todo: null | ItodoData = this.tododata.find((item) => { return todo.content === item.content });
    if (!_todo) {
      this.tododata.push(todo);
      this.addItem(todo);
      return;
    }
    return 101;
  }
  @removeTodo
  public removeTodo(id: number, target: HTMLElement) {
    this.tododata = this.tododata.filter((item: ItodoData) => {return item.id !== id });
    this.removeItem(target);
  }
  public toggleComplete(id: number, target: HTMLElement) {
    this.tododata = this.tododata.map((item: ItodoData) => {
      if (item.id === id) {
        item.completed = !item.completed;
        this.changeCompleted(target, item.completed);
      }
      return item;
    })
  }
}

export default TodoEvent;
