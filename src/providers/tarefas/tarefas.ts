import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
/*
  Generated class for the TarefasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TarefasProvider {
  private PATH = '/tarefas';

  constructor(private db: AngularFireDatabase) {  }

  getAll(){
    return this.db.list(this.PATH, ref => ref.orderByChild('name'))
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
  }

  get(key: string){
    return this.db.object(this.PATH + key);
  }

  save(tarefa: any){
    return new Promise((resolve, reject) => {
      if (tarefa.key) {
        this.db.list(this.PATH)
          .update(tarefa.key, { name: tarefa.name, data: tarefa.data })
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.db.list(this.PATH)
          .push({ name: tarefa.name, data: tarefa.data })
          .then(() => resolve());
      }
    })
  }

  remove(key: string){
    return this.db.list(this.PATH).remove(key);
  }

}
