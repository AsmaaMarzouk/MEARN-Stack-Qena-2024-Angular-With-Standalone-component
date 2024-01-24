import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../Services/products.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Iproduct } from '../../Model/iproduct';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {

  prdID:number=0;
  product:Iproduct|undefined=undefined;
// inject
constructor(private ProductService: ProductsService,private activatedRoute: ActivatedRoute,private router:Router){}
  ngOnInit(): void {

    //convert to number =>  parseInt(),Number , +
   this.prdID= (this.activatedRoute.snapshot.paramMap.get('productID'))?Number(this.activatedRoute.snapshot.paramMap.get('productID')):0;

  //  console.log(this.prdID);

  this.product= this.ProductService.getPrdByID(this.prdID);

  console.log(this.product);

  }


  goBackFunc(){
    this.router.navigate(['Products'])
  }

}
