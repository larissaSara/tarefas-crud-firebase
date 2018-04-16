import { Component } from '@angular/core';
import { TarefasProvider } from '../../providers/tarefas/tarefas';


import { NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'tarefa.html'
})
export class TarefaPage {
    title: string;
  form: FormGroup;
  
  tarefa: any;

  // maneira 1
  
  constructor(public navCtrl: NavController, public navParams: NavParams,  private formBuilder: FormBuilder, private provider: TarefasProvider, private toast: ToastController) {
    this.tarefa = this.navParams.data.tarefas || { };
    this.createForm();

    this.setupPageTitle();
  }

  private setupPageTitle() {
    this.title = this.navParams.data.tarefas ? 'Alterando tarefa' : 'Nova tarefa';
  }
 
  createForm() {
    this.form = this.formBuilder.group({
      key: [this.tarefa.key],
      name: [this.tarefa.name, Validators.required],
      data: [this.tarefa.data, Validators.required],
    });
  }
 
  onSubmit() {
    if (this.form.valid) {
      this.provider.save(this.form.value)
        .then(() => {
          this.toast.create({ message: 'Tarefa salva com sucesso.', duration: 3000 }).present();
          this.navCtrl.pop();
        })
        .catch((e) => {
          this.toast.create({ message: 'Erro ao salvar a tarefa.', duration: 3000 }).present();
          console.error(e);
        })
    }
  }
  removerTarefa(key: string) {
    if (key) {
      this.provider.remove(key)
        .then(() => {
          this.toast.create({ message: 'Tarefa removido sucesso.', duration: 3000 }).present();
          this.navCtrl.pop();
        })
        .catch(() => {
          this.toast.create({ message: 'Erro ao remover a tarefa.', duration: 3000 }).present();
        });
    }
  }
  }




