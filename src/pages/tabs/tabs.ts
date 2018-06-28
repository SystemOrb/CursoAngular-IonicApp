import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { ListComponent } from '../lista/lista';
import { listBuyed } from '../lista_finalizada/list-finished';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ListComponent;
  tab3Root = listBuyed;

  constructor() {

  }
}
