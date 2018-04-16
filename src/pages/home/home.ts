import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TarefasProvider } from '../../providers/tarefas/tarefas';
import { Observable } from 'rxjs/Observable';
import { TarefaPage } from '../tarefa/tarefa';

import { ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tarefas: Observable<any>;

  constructor(public navCtrl: NavController, private provider: TarefasProvider, public modalCtrl: ModalController) {
    this.tarefas = this.provider.getAll();
  }

  //abrir pagina para cadastrar uma unica tarefa
  criarTarefa() {
    this.navCtrl.push(TarefaPage);
  
  }

  //abrir pagina para listar dados de uma unica tarefa
  
  openTarefa(tarefas: any){
       this.navCtrl.push(TarefaPage, {tarefas: tarefas});
      
  }
    

  


}
