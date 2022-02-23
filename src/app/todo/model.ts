import { TodoItem } from "../todoitem";

export class Model {
    name:string;
    items:TodoItem[];


    constructor(){
        this.name="Nursah";
        this.items=[
            { decription:"Kahvaltı", action:true},
            { decription:"Spor", action:true},
            { decription:"Alışveriş", action:false}
        ]
    }
}

const m=new Model();