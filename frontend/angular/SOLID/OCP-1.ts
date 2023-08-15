// @ts-ignore()

@Component({
    selector: 'app-order',
    template: `
      <h2>Order Details</h2>
      <p>Order ID: {{ orderId }}</p>
      <p>Customer Name: {{ customerName }}</p>
      <!-- Other order details -->
    `,
  })
  export class OrderComponent {
    orderId: string;
    customerName: string;
  
    constructor(orderId: string, customerName: string) {
      this.orderId = orderId;
      this.customerName = customerName;
    }
  }
// @ts-ignore()

  @Component({
    selector: 'app-order-details',
    template: `
      <app-order [orderId]="orderId" [customerName]="customerName"></app-order>
      <p>Order Date: {{ orderDate }}</p>
      <p>Shipping Address: {{ shippingAddress }}</p>
    `,
  })
  export class OrderDetailsComponent extends OrderComponent {
    orderDate: string;
    shippingAddress: string;
  
    constructor(orderId: string, customerName: string, orderDate: string, shippingAddress: string) {
      super(orderId, customerName);
      this.orderDate = orderDate;
      this.shippingAddress = shippingAddress;
    }
  }


// <app-order-details
//   [orderId]="'123'"
//   [customerName]="'John Doe'"
//   [orderDate]="'2023-07-04'"
//   [shippingAddress]="'123 Main St'"
// ></app-order-details>