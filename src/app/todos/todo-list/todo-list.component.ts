import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Todo } from '../models/todo.model';
import { AppState } from 'src/app/app.reducers';
import { filtrosValidos } from 'src/app/filtro/filtro.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: [
  ]
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  filtroActual: filtrosValidos;

  constructor(private store: Store<AppState>) {
    // this.store.select('todos').subscribe(todos => this.todos = todos);

    //Necesito todo el state para traerme tambien el filtroActual y poder pasarselo al pipe que he creado filtro.pipe.ts
    this.store.subscribe(state => {
      // this.store.subscribe({todos,filtro} => {  //Se puede desestructurar para solo coger del store los todos y filtros
      this.todos = state.todos;
      this.filtroActual = state.filtro;

    })
  }

  ngOnInit(): void {



  }

}
