import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styles: [
  ]
})
export class TodoPageComponent implements OnInit {

  completado: boolean = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  //Esta accion ejecuta el reducer que cambia de estado a todos
  toggleAll() {
    this.completado = !this.completado;
    // console.log(this.completado);
    this.store.dispatch(actions.toggleAll({ completado: this.completado }))

  }

}
