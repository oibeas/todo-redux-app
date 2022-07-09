import { createAction, props } from '@ngrx/store';

//CREAR TODO
export const crear = createAction(
    '[TODO] Crear Todo',
    props<{ texto: string }>()
);

//CAMBIAR ESTADO
export const toggle = createAction( //Esta accion cambia el estado, si esta marcado es true y desmarcado false
    '[TODO] Toggle Todo',
    props<{ id: number }>()
);

//EDITAR TEXTO
export const editar = createAction( //Esta accion para editar, necesito el id y el nuevo texto
    '[TODO] Editar Todo',
    props<{ id: number, texto: string }>()
);

//BORRAR TODO
export const borrar = createAction( //Esta accion para editar, necesito el id y el nuevo texto
    '[TODO] Borrar Todo',
    props<{ id: number }>()
);

//CAMBIAR EL ESTADO DE LOS TODOS COMPLETADO/NO COMPLETADO
export const toggleAll = createAction(
    '[TODO] Cambiar estado Todos',
    props<{ completado: boolean }>()
);

//LIMPIAR COMPLETADOS
export const limpiarCompletados = createAction(
    '[TODO] Limpiar los completados'
)