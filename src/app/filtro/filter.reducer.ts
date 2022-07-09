import { createReducer, on } from '@ngrx/store';
import { setFiltro, filtrosValidos } from './filtro.actions';

//El estado inicial lo ponemos del tipo que hemos creado y debe coincidir con los 3 estados que hemos definido
export const initialState: filtrosValidos = 'todos';

export const filtroReducer = createReducer<filtrosValidos>(initialState,
    on(setFiltro, (state, { filtro }) => filtro),

);
