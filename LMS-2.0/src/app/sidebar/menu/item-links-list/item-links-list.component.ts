import { Component } from '@angular/core';

import { ITEMS_LIST } from './item-links-list'

@Component({
  selector: 'app-item-links-list',
  templateUrl: './item-links-list.component.html',
  styleUrls: ['./item-links-list.component.css']
})
export class ItemLinksListComponent {

  public itemsList = ITEMS_LIST

}
