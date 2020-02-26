
import { Action, createAction, props } from '@ngrx/store';
import { ShoppingItem } from '../models/shopping-item.model';

export enum ShoppingActionTypes {
  ADD_ITEM = '[SHOPPING] Add Item',
  DELETE_ITEM = '[SHOPPING] Delete Item'
}

// export class AddItemAction implements Action {
//   readonly type = ShoppingActionTypes.ADD_ITEM;

//   constructor(public payload: ShoppingItem) { }
// }

// export class DeleteItemAction implements Action {
//   readonly type = ShoppingActionTypes.DELETE_ITEM;

//   constructor(public payload: string) { }
// }

export const addItem = createAction('[SHOPPING] Add Item', (payload) => ({payload}));
export const deleteItem = createAction('[SHOPPING] Delete Item', (payload) => ({payload}));


//export type ShoppingAction = AddItemAction | DeleteItemAction;
