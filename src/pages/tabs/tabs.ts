import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HomePage} from '../home/home';
import {RelatoriosPage} from '../relatorios/relatorios';
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tarefasRoot = HomePage;

  relatoriosRoot =RelatoriosPage;


  constructor(public navCtrl: NavController) {}

}
