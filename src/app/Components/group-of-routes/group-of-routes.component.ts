import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-group-of-routes',
  standalone: true,
  imports: [RouterModule,NavbarComponent,FooterComponent],
  templateUrl: './group-of-routes.component.html',
  styleUrl: './group-of-routes.component.scss'
})
export class GroupOfRoutesComponent {

}
