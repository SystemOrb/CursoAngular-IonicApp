import { Injectable } from '@angular/core';
import { listFinished } from '../class/list-finished';
import { list } from '../class/list';
@Injectable()
export class ServiceListCreator {

  list:list[] = [];
  listFinished:listFinished[] = [];
  constructor() {
    console.log("Servicio inicializado");
   }

  listCreator(name:string)
  {
      let appendList = new list(name,false);
      this.list.push(appendList);
  }
  insertList()
  {
    localStorage.setItem("list", JSON.stringify(this.list));
  }
  getList()
  {
    return JSON.parse(localStorage.getItem("data"));
  }
  deleteList(id:number)
  {
    this.list.splice(id);
    this.insertList();
  }
}
