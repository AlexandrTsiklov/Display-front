import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-scholarship-item-link',
  templateUrl: './item-link.component.html',
  styleUrls: ['./item-link.component.css']
})
export class ItemLinkComponent {

  @Input('itemObject') itemObject: { text: string; url: string; }

}
