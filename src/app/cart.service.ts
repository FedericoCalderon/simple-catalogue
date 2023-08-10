import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: any[] = [];

  addToCart(product: any): void {
    // Check if the product is already in the cart
    const existingItem = this.cartItems.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
  }

  clearCart(): void {
    this.cartItems = [];
  }

  getCartItems(): any[] {
    return this.cartItems;
  }
}
