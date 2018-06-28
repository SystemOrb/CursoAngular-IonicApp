import { Component } from '@angular/core';
import { ServiceListCreator } from '../../app/services/listCreator.service';
import { list, listFinished } from '../../app/class/export.class';
import { NavController, AlertController } from 'ionic-angular';
@Component({
  selector: 'list-creator',
  templateUrl: 'listCreator.html'
})
export class listCreator {
  constructor(public _service:ServiceListCreator,
              public alert:AlertController,
              public pagination:NavController) { }

  label:string = '';
  item:list[] = [];
  nombreItem:string = '';

  addList(nameItem:list)
  {
    this.item.push(nameItem);
    this._service.list.push(nameItem);
    this.nombreItem = '';
  }
  saveList()
  {
    if(this.item.length>1)
    {
      this._service.insertList();
      this.pagination.pop();
    }else{
      let alert = this.alert.create({
      title: this.nombreItem,
      subTitle: 'Debes crear por lo menos un item de la lista',
      buttons: ['OK']
    });
    alert.present();
  }
}
  /*removeItem(value)
  {
    this.item.splice(value);
  }*/





}
