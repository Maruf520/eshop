import { Component, OnInit, OnDestroy } from '@angular/core';
import { PastOrder, PastOrderProduct } from '../../types/order.type';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../services/order/order.service';
import { Subscription } from 'rxjs';
import { UserService } from '../../services/users/user-service.service';

@Component({
  selector: 'app-pastorders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pastorders.component.html',
  styleUrl: './pastorders.component.scss',
})
export class PastordersComponent implements OnInit, OnDestroy {
  pastOrderProducts: PastOrderProduct[] = [];
  subscriptions: Subscription = new Subscription();
  pastOrder!: PastOrder;
  pastOrders: PastOrder[] = [];

  constructor(
    private orderService: OrderService,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    this.subscriptions.add(
      this.orderService
        .getOrders(this.userService.loggedInUser.email)
        .subscribe((pastOrders) => {
          this.pastOrders = pastOrders;
        })
    );
  }
  selectOrder(event: any) {
    if (Number.parseInt(event.target.value) > 0) {
      this.pastOrder = this.pastOrders.filter(
        (order) => order.orderId === Number.parseInt(event.target.value)
      )[0];
      this.getOrdeProducts(this.pastOrder.orderId);
    } else {
      this.pastOrder = <any>undefined;
      this.pastOrderProducts = [];
    }
  }

  getOrdeProducts(orderId: number): void {
    this.subscriptions.add(
      this.orderService
        .getOrderProducts(orderId)
        .subscribe((products) => (this.pastOrderProducts = products))
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
