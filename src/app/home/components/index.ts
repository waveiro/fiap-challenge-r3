import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuComponent } from './menu/menu.component';

export * from './menu-item/menu-item.component';
export * from './menu/menu.component';
export * from './jumbotron/jumbotron.component';

export const components: any[] = [
  MenuItemComponent,
  MenuComponent,
  JumbotronComponent
];