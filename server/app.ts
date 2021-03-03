import express, {Application} from "express";
import bodyParse from 'body-parser';
import {readFile} from "./utils";


const app: Application = express();
app.use(bodyParse.json());

app.all('*',(req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-methods','POST,GET,PUT,DELETE,OPTIONS');
    next()
})

app.get('/todolist',function (req, res) {
    const todoList = readFile('todo.json');
    res.send(todoList);
});
app.post('/toggle',function (req, res) {

});
app.post('/remove',function (req, res) {

});
app.post('/add',function (req, res) {

});

app.listen(8080,()=>{
    console.log('Listening is on 8080 port')
})