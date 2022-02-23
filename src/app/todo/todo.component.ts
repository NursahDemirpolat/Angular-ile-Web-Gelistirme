import { Component, OnInit} from '@angular/core';
import { TodoItem } from '../todoitem';
import { Model } from './model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  displayAll:boolean=false;

  constructor() { 
    this.model.items=this.getItemsFromLS();
  }

  message:string='merhaba';
  inputText:string="";

  // private name: string ="Nursah";

  // // items2=[
  // //   "item 1","item 2","item 3","item 4"
  // // ];

  // items:TodoItem[]=[
  //   // {description:"Kahvaltı",action:"Yes"},
  //   // {description:"Spor",action:"Yes"},
  //   // {description:"Alışveriş",action:"No"}
  //   // -------------------------------------------------
  //   // new TodoItem("Kahvaltı","Yes"),
  //   // new TodoItem("Spor","Yes"),
  //   // new TodoItem("Alışveriş","No"),
  //   // new TodoItem("Market","Yes")
  //   // -------------------------------------------------
  //   { decription:"Kahvaltı", action:"Yes"},
  //   { decription:"Spor", action:"Yes"},
  //   { decription:"Alışveriş", action:"No"}
  // ];

  // getName() {
  //   return this.name;
  // }

  model=new Model();

  // addItem(txtItem:any){
  //   console.log(txtItem.value);
  // }

  addItem(value:string){
    this.message=value;
    if(value!=""){
      let data={decription:value, action:false};
      this.model.items.push(data);

      let items=this.getItemsFromLS();
      items.push(data);
      localStorage.setItem("items",JSON.stringify(items))
      this.inputText="";
    }
    else{
      alert("bilgi giriniz")
    }
  }

  getItemsFromLS(){
    let items:TodoItem[]=[];
    let value=localStorage.getItem("items")
    if(value!=null){
      items=JSON.parse(value)
    }
    return items;
  }

  onActionChanged(item:TodoItem){
    let items=this.getItemsFromLS();
    localStorage.clear();
    items.forEach(i=>{
      if(i.decription==item.decription){
        i.action=item.action;
      }
    });
    localStorage.setItem("items",JSON.stringify(items))
  }

  getName(){
    return this.model.name;
  }
  getItems(){
    if(this.displayAll){
      return this.model.items;
    }
    return this.model.items.filter(item => item.action==false);
  }
  displayCount(){
    return this.model.items.filter(i=>i.action).length;
  }
  getBtnClasses(){
    return{
      'disabled':this.inputText.length==0,
      'btn-secondary':this.inputText.length==0,
      'btn-primary':this.inputText.length>0
   }
  }
}
