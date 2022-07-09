import { Pipe, PipeTransform } from '@angular/core';
import { filtrosValidos } from '../filtro/filtro.actions';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro: filtrosValidos): Todo[] {

    switch (filtro) {
      case 'completados':
        return todos.filter(todo => todo.completado);  //Filtramos y devolvemos todos los que cumplen el completado

      case 'pendientes':
        return todos.filter(todo => !todo.completado); //Filtramos y devolvemos los no completados

      default:
        return todos;
    }

  }

}
