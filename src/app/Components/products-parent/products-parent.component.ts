import { Component } from '@angular/core';
import { ProductsListComponent } from '../products-list/products-list.component';
import { FormsModule } from '@angular/forms';
import { Iproduct } from '../../Model/iproduct';
import { CalcDiscountPipe } from '../../Pipes/calc-discount.pipe';

@Component({
  selector: 'app-products-parent',
  standalone: true,
  imports: [ProductsListComponent, FormsModule,CalcDiscountPipe],
  templateUrl: './products-parent.component.html',
  styleUrl: './products-parent.component.scss',
})
export class ProductsParentComponent {
  listFilterValue: string = '';

  cart: Iproduct[] = [];
  addFunc(product: Iproduct) {
    this.cart.push(product);
  }
}
