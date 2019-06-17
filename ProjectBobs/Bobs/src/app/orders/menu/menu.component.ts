import { Component, OnInit } from '@angular/core';
import { MenuItemsQuery } from 'src/app/state/menu-items/menu-items.query';
import { MenuItemsService } from 'src/app/state/menu-items/menu-items.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems$ = this.menuItemsQuery.selectAll();

  constructor(
    private menuItemsQuery: MenuItemsQuery,
    private menuItemsService: MenuItemsService
  ) { }

  ngOnInit() {
    this.menuItemsService.get().subscribe();
  }

}
