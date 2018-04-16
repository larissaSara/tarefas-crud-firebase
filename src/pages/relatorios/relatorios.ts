import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TarefasProvider } from '../../providers/tarefas/tarefas';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'page-relatorios',
  templateUrl: 'relatorios.html',
})
export class RelatoriosPage {
  tarefas: Observable<any>

  //declaracao do chart tipo doughnut
  doughnutChartLabels:string[];
  doughnutChartData:any[];
  doughnutChartType:string = 'doughnut';


  constructor(public navCtrl: NavController, public navParams: NavParams, public bd: TarefasProvider) {
    this.tarefas = this.bd.getAll();
    this.graficoDoughnut();
  }

  
  ionViewDidLoad() { }

  graficoDoughnut(){
   
    this.doughnutChartData = [30,20,40];
    this.doughnutChartLabels = ["teste1", "teste2"];
    
   
  };

}
