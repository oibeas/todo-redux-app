import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { borrar, crear, editar, limpiarCompletados, toggle, toggleAll } from './todo.actions';


export const estadoInicial: Todo[] = [
    new Todo('Salvar al mundo'),
    new Todo('Vivir la vida'),
    new Todo('Seguir vivo'),
    new Todo('Rejuvenecer')
];

const _todoReducer = createReducer(
    estadoInicial,
    //reducer para añadir todo
    on(crear, (state, { texto }) => [...state, new Todo(texto)]),
    //reducer para marcar y desmarcar todo
    on(toggle, (state, { id }) => {
        return state.map(todo => { //Esto devuelve un nuevo array con una copia del anterior transformandolo
            if (todo.id === id) { //solo transformo el objeto con el id que quiero
                return {
                    ...todo, //Primero extrae todas las propiedades
                    completado: !todo.completado //Pero las de completado pones las opuestas
                }
            }
            else { //Si el id no coincide lo dejo como estaba
                return todo;
            }
        })
    }),
    //reducer para editar un todo
    on(editar, (state, { id, texto }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    texto: texto
                }
            }
            else { //Si el id no coincide lo dejo como estaba
                return todo;
            }
        })
    }),
    //reducer para borrar todo
    on(borrar, (state, { id }) => state.filter(todo => todo.id !== id)), //Devuelve todos los todos que sean diferentes al que estoy pasando por su id, el filter crea un nuevo array con esa devolucion. Creo un nuevo estado con todos los id menos el que le estoy pasando

    //Cambiar estado de todos los todos
    on(toggleAll, (state, { completado }) => state.map(todo => { //Esto devuelve un nuevo array con una copia del anterior transformandolo
        return {
            ...todo, //Primero extrae todas las propiedades
            completado: completado //Cambiamos el estado de los todos
        }
    })
    ),
    //Borrar los comletados
    on(limpiarCompletados, state => state.filter(todo => todo.completado === false))


);




export function todoReducer(state, action) {
    return _todoReducer(state, action);
}