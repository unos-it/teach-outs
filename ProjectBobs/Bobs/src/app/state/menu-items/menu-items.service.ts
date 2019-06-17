import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { MenuItemsStore } from './menu-items.store';
import { MenuItem } from './menu-item.model';
import { tap } from 'rxjs/operators';
import { ApiResponse } from '../api-response';

@Injectable({ providedIn: 'root' })
export class MenuItemsService {

  constructor(
    private menuItemsStore: MenuItemsStore,
    private http: HttpClient
  ) {
  }

  get() {
    return this.http.get<ApiResponse<MenuItem[]>>('assets/menu-items.json').pipe(
      tap(data => this.menuItemsStore.set(data.Value))
    );
  }

  add(menuItem: MenuItem) {
    this.menuItemsStore.add(menuItem);
  }

  update(id, menuItem: Partial<MenuItem>) {
    this.menuItemsStore.update(id, menuItem);
  }

  remove(id: ID) {
    this.menuItemsStore.remove(id);
  }
}
