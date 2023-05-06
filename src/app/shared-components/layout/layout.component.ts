import { Component } from '@angular/core';
import { MENU_ITEMS } from 'src/app/const/menu-items';
import { MenuItem } from 'src/app/interfaces/menu-item-interface';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  menuItems: MenuItem[] = MENU_ITEMS;
}
