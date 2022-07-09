import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/app.reducers';
import { Todo } from '../models/todo.model';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: [
  ]
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('inputFisico') txtInputFisico: ElementRef;

  chkCompletado: FormControl;
  txtInput: FormControl;

  editando: boolean = false;

  constructor(private store: Store<AppState>) {

  }

  ngOnInit(): void {

    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.chkCompletado.valueChanges.subscribe(valor => { //Aqui nos subscribimos al estado del todo, cuando se marca o desmarca vamos a disparar una accion
      //Aqui disparamos la accion con el id del objeto que quiero editar
      this.store.dispatch(actions.toggle({ id: this.todo.id }))

    })

  }

  editar() { //Esta funcion se hace para seleccionar todo el texto en el focus al dar doble click, necesitamos que se cargue, por eso lo de 1 ms
    this.editando = true;
    this.txtInput.setValue(this.todo.texto); //Esto es para que no se borre el texto al hacer doble clik

    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

  terminarEdicion() { //Esta funcion me permite salir del focus al pinchar fuera, con (blur), y guarda el texto cambiado
    this.editando = false;

    if (this.txtInput.invalid) { return } //si el texto esta vacio no hace nada
    if (this.txtInput.value === this.todo.texto) { return } //si el texto no ha cambiado no hace nada

    this.store.dispatch(
      actions.editar({
        id: this.todo.id,
        texto: this.txtInput.value
      })
    )
  }


  //con esta accion borro por su id
  borrar() {
    this.store.dispatch(actions.borrar({ id: this.todo.id }))
  }

}
