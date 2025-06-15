import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../app/services/product-service';
import { Product } from '../../app/models/product.model';
import { CommonModule } from '@angular/common'; // <-- This is key
import { FormsModule } from '@angular/forms'; // For ngModel

@Component({
  selector: 'app-product-component',
   standalone: true,
   imports: [CommonModule, FormsModule],
  templateUrl: './product-component.html',
  styleUrls: ['./product-component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];

newProduct: Product = { name: '', price: 0, quantity: 0 };
editProduct: Product | null = null;


  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(data => this.products = data);
  }

  saveProduct() {
    if (this.editProduct) {
      this.productService.updateProduct(this.editProduct.id!, this.editProduct)
        .subscribe(() => {
          this.loadProducts();
          this.editProduct = null;
        });
    } else {
      this.productService.addProduct(this.newProduct)
        .subscribe(() => {
          this.loadProducts();
          this.newProduct = { name: '', price: 0, quantity: 0 };
        });
    }
  }

  startEdit(product: Product) {
    this.editProduct = { ...product };
  }

  cancelEdit() {
    this.editProduct = null;
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => this.loadProducts());
  }
}
