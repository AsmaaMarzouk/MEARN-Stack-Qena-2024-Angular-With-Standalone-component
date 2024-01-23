import { Component } from '@angular/core';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { ProductsParentComponent } from './Components/products-parent/products-parent.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,ProductsListComponent,ProductsParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ecommerce-project2';
}
