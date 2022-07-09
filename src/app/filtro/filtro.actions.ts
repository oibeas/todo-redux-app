import { createAction, props } from '@ngrx/store';

//Como quiero que mi filtro tenga solo 3 tipos, no voy a usar un string sino que me voy a crear mi propio tipo de variable:
export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

export const setFiltro = createAction(
    '[Filtro] Set Filtro',
    props<{ filtro: filtrosValidos }>()
);
