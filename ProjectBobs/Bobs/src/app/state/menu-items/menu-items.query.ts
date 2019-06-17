import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { MenuItemsStore, MenuItemsState } from './menu-items.store';
import { MenuItem } from './menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class MenuItemsQuery extends QueryEntity<MenuItemsState, MenuItem> {

  constructor(protected store: MenuItemsStore) {
    super(store);
  }

}
