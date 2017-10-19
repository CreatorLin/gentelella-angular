import { Injectable } from '@angular/core';
import { menu } from './mock-menu';

import MenuItem from './menuItem';


@Injectable()
export class SidebarMenuService {
  
  constructor() { }

  getMenu(): Promise<MenuItem[]>{
    return Promise.resolve(menu);
  }
  
}
