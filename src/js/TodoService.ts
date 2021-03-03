import {ItodoData} from "./typings";
import $ from 'jquery';
export function getTodoList(
    target:any,
    methodName:string,
    descriptor:PropertyDescriptor
) {
    const _origin = descriptor.value;
    descriptor.value = function (todoData: ItodoData[]) {
        $.get('http://localhost:8080/todolist').then((res:string)=>{
            if (!res) {
                return;
            }
            todoData = JSON.parse(res);
        }).then(()=>{
            _origin.call(this,todoData);
        })
    }
}
