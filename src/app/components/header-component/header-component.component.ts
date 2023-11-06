import { Component } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-componentcomponent.component.html',

})
export class HeaderComponentComponent {
  cartService: any;
  onClearCart(): void {
    this.cartService.clearCart();
  }
}
