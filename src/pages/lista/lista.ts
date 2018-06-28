import { Component } from '@angular/core';
import { ServiceListCreator } from '../../app/services/listCreator.service';
import { NavController } from 'ionic-angular';
import { listCreator } from '../listCreator/listCreator';
import { list, listFinished } from '../../app/class/export.class';
@Component({
  selector: 'app-list',
  templateUrl: 'lista.html'
})
export class ListComponent {
  constructor(  public _listCreator:ServiceListCreator,
                public changePage:NavController) {

    this.getList();
  }
  arrayItem:list[] = [];
  changingPage()
  {
    this.changePage.push( listCreator );
  }
   getList()
   {
     
   }


}
