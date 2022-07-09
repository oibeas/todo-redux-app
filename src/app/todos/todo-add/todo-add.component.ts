import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: [
  ]
})
export class TodoAddComponent implements OnInit {


  txtInput: FormControl;

  constructor(private store: Store<AppState>) {
    this.txtInput = new FormControl('', Validators.required)
  }

  ngOnInit(): void {
  }

  agregar() {
    if (this.txtInput.invalid) { return } //Esto es para que si no es valido no haga nada

    console.log(this.txtInput.value);
    console.log(this.txtInput.valid);

    this.store.dispatch(actions.crear({ texto: this.txtInput.value })); //Esto dispara la accion de crear un todo y crea un nuevo estado con el texto

    this.txtInput.reset(); //Esto es para que se borre del cuadro input en el html

  }

}
