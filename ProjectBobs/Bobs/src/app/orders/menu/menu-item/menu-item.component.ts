import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'src/app/state/menu-items/menu-item.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input() menuItem: MenuItem;

  constructor() { }

  ngOnInit() {
  }

}
