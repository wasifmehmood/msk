// @ts-ignore()

// order.module.ts
@NgModule({
    imports: [CommonModule],
    declarations: [OrderComponent],
    providers: [{ provide: PaymentService, useClass: DefaultPaymentService }],
})
export class OrderModule { }

// @ts-ignore()
// payment.service.ts
@Injectable()
export abstract class PaymentService {
    abstract calculatePayment(order: Order): number;
}

// @ts-ignore()
// default-payment.service.ts
@Injectable()
export class DefaultPaymentService implements PaymentService {
    calculatePayment(order: Order): number {
        // Calculate payment using default payment method
    }
}

// @ts-ignore()
// paypal-payment.service.ts
@Injectable()
export class PaypalPaymentService implements PaymentService {
    calculatePayment(order: Order): number {
        // Calculate payment using PayPal payment method
    }
}