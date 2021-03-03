import TodoEvent from "./js/TodoEvent";
import { ItodoData } from "./js/typings";
;(() => {
  const oInput: HTMLInputElement = document.querySelector('input');
  const oAddBtn: HTMLElement = document.querySelector('button');
  const oTodoList: HTMLElement = document.querySelector('.todo-list');
  const todoData: ItodoData[] = [
    {
      id: 1,
      content: '123',
      completed: true
    },
    {
      id: 2,
      content: '234',
      completed: false
    },
    {
      id: 3,
      content: '345',
      completed: false
    },
  ];
  let id:number = todoData.length;
  const todoEvent: TodoEvent = new TodoEvent(todoData,oTodoList);

  function init(): void {
    bindEvent()
  }
  function bindEvent(): void {
    oAddBtn.addEventListener('click', handleAddBtnClick, false);
    oTodoList.addEventListener('click', handleListClick, false);
  }
  function handleAddBtnClick(): void {
    const val = oInput.value.trim();
    if(val.length){
      const ret =todoEvent.addTodo(<ItodoData>{
        id: ++id,
        content: val,
        completed: false
      })
      if(ret && ret === 101){
        alert('列表项已存在！')
      }
      oInput.value = ''
    }
  }
  function handleListClick(e: MouseEvent): void {
    const tar = e.target as HTMLElement;
    const tagName = tar.tagName.toLowerCase();
    
    if (tagName === 'input' || tagName === 'button') {
      switch (tagName) {
        case 'input':
          todoEvent.toggleComplete(id,tar);
          break;
        case 'button':
          todoEvent.removeTodo(id,tar);
          break;
      }
    }
  }
  init();
})()
