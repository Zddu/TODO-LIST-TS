import { ItodoData } from "./typings";

class TodoTemplate{
  protected todoView({id,content,completed}:ItodoData):string{
    return `
      <input type="checkbox" ${completed ? 'checked':''} data-id="${id}">
      <span style="text-decoration:${completed ? 'line-through':''}" data-id="${id}">${content}</span>
      <button data-id="${id}">删除</button>
    `
  }
}

export default TodoTemplate;