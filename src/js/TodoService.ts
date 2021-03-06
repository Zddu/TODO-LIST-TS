import {ItodoData} from "./typings";
import $ from 'jquery';
import {myFetch} from "./utils";

export function getTodoList(
    target: any,
    methodName: string,
    descriptor: PropertyDescriptor
) {
    const _origin = descriptor.value;
    descriptor.value = function (todoData: ItodoData[]) {
        $.get('http://localhost:8080/todolist').then((res:string) => {
            if (!res) {
                return;
            }
            todoData = JSON.parse(res)
        }).then(() => {
            _origin.call(this, todoData);
        })
    }
}

export function removeTodo(
    target: any,
    methodName: string,
    descriptor: PropertyDescriptor
):void {
    const _origin = descriptor.value;
    descriptor.value = function (id: number, target: HTMLElement) {
        $.post('http://localhost:8080/remove', {id}).then((res) => {
            console.log(res);
            _origin.call(this, id, target)
        })
        // myFetch('http://localhost:8080/remove',{id:id},{method:'POST'}).then((res)=>{
        //     console.log(res);
        //     _origin.call(this, id, target);
        // })
    }
}
