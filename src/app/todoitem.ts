// export class TodoItem{
//     decription:string;
//     action:string;
//     constructor(decription:string,action:string){
//         this.decription=decription;
//         this.action=action;
//     }
// }

// const td=new TodoItem("Spor","yes");

// export class TodoItem{
//     constructor(public decription:string,public action:string){
//         this.decription=decription;
//         this.action=action;
//     }
// }

export interface TodoItem{
    decription:string;
    action:boolean;
    
}
