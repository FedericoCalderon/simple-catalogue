import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data;
    });
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    this.updateCartBadge(product);
  }

  private updateCartBadge(product: any): void {
    const productIndex = this.products.findIndex(p => p.id === product.id);
    if (productIndex !== -1) {
      this.products[productIndex].cartCount = (this.products[productIndex].cartCount || 0) + 1;
    }
  }
}
