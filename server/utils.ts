import {readFileSync, writeFileSync} from "fs";
import {resolve} from 'path'
import {ItodoData} from "../src/js/typings";
export function readFile(path:string):string {
    return readFileSync(resolve(__dirname,path),'utf8');
}

export function writeFile<T>(path: string,data:T) {
    writeFileSync(resolve(__dirname,path),JSON.stringify(data))
}

export function fileOperation(path: string, fn?:any):string | void {
    let todoList:ItodoData[] = JSON.parse(readFile('todo.json')) || [];
    if (!fn) {
        return JSON.stringify(todoList);
    }
    todoList = fn(todoList);
    writeFile<ItodoData[]>(path,todoList);
}
