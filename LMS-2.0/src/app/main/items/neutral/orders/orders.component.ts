import { Component } from "@angular/core";
import { ORDERS_DATA } from "./orders.data";

@Component({
    selector: 'app-orders-scholarship-item',
    template: `
        <div class="main__container">
            <div class="orders-header header-only-name header-text_name-style">Приказы</div>
            <div class="orders-canvas main-canvas">
                <div class="frame orders-frame" *ngFor="let order of ordersData">
                  <div class="orders-frame-name">{{ order.name }}</div>
                  <div class="orders-frame-info">{{ order.text }}</div>
                </div>
            </div>
        </div>  
    `,
    styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
    ordersData: { name: string, text: string }[] = ORDERS_DATA
}
