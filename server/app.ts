import express, {Application} from "express";
import bodyParser from 'body-parser';
import {fileOperation, readFile, writeFile} from "./utils";
import {ItodoData} from "../src/js/typings";

const app: Application = express();
app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}));

app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    next();
})

app.get('/todolist', function (req, res) {
    const todoList = fileOperation('todo.json') as string;
    res.send(todoList);
});
app.post('/toggle', function (req, res) {

});
app.post('/remove', function (req, res) {
    let id: number = parseInt(req.body.id);
    fileOperation('todo.json',(todoList:ItodoData[])=>{
        return todoList.filter((todo) => {
            return todo.id !== id
        })
    });
    res.send({
        msg: 'ok',
        code: '200'
    })
});
app.post('/add', function (req, res) {

});
app.listen(8080, () => {
    console.log('Listening is on 8080 port')
})
