import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { MenuItem } from './menu-item.model';

export interface MenuItemsState extends EntityState<MenuItem> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'menu-items' })
export class MenuItemsStore extends EntityStore<MenuItemsState, MenuItem> {

  constructor() {
    super();
  }

}

