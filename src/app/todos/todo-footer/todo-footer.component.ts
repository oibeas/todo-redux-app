import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actions from 'src/app/filtro/filtro.actions';
import { limpiarCompletados } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: [
  ]
})
export class TodoFooterComponent implements OnInit {

  filtroActual: actions.filtrosValidos = 'todos';
  filtros: actions.filtrosValidos[] = ['todos', 'completados', 'pendientes'];

  pendientes: number = 0;


  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    //Nos subscribimos para ver los cambios al store pero solo al filtro
    // this.store.select('filtro').subscribe(filtro => {
    //   this.filtroActual = filtro;
    // });

    //Mejor creo una nueva suscripcion para que maneje tambien la cantidad de estados pendientes
    this.store.subscribe(state => {
      this.filtroActual = state.filtro;
      //Tambien necesito saber cuantos estados estan pendientes,necesito contarlos
      //Le paso un filter al array de todos para que me traiga los que no estan completados y los cuento
      this.pendientes = state.todos.filter(todo => !todo.completado).length



    })
  }

  cambiarFiltro(filtro: actions.filtrosValidos) {
    console.log(filtro);
    this.store.dispatch(actions.setFiltro({ filtro: filtro }))
  }


  borrarCompletados() {
    this.store.dispatch(limpiarCompletados())

  }


}
