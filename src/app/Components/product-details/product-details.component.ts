import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../Services/products.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Iproduct } from '../../Model/iproduct';
import { CommonModule } from '@angular/common';
import { ProductsWithApiService } from '../../Services/products-with-api.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  prdID: number = 0;
  product: Iproduct | undefined = undefined;

  // Day5
  prdIDList: number[] = [];

  currIndex: number = 0;

  // ########################
  // Day6

  productsAfterSearch: Iproduct[] = [];

  // ######################
  // inject
  constructor(
    private ProductService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productWithApiService: ProductsWithApiService
  ) {}
  ngOnInit(): void {
    //convert to number =>  parseInt(),Number , +
    // this.prdID = this.activatedRoute.snapshot.paramMap.get('productID')
    //   ? Number(this.activatedRoute.snapshot.paramMap.get('productID'))
    //   : 0;

    //  console.log(this.prdID);

    // this.product = this.ProductService.getPrdByID(this.prdID);

    // console.log(this.product);

    this.prdIDList = this.ProductService.getPrdIDSList();
    // console.log(this.prdIDList);
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.prdID = paramMap.get('productID')
        ? Number(paramMap.get('productID'))
        : 0;

      // this.product=this.ProductService.getPrdByID(this.prdID);

      this.productWithApiService.getPrdByID(this.prdID).subscribe({
        next: (data) => {
          // console.log(data);
          this.product = data;
        },
        error: (err) => {
          console.log(err);
        },
      });
    });
  }

  goBackFunc() {
    this.router.navigate(['Products']);
  }

  // Day5

  previousFunc() {
    this.currIndex = this.prdIDList.indexOf(this.prdID);
    //  console.log(this.currIndex);
    this.router.navigate(['/prd', this.prdIDList[--this.currIndex]]);
    // arr[0] =
  }
  nextFunc() {
    this.currIndex = this.prdIDList.indexOf(this.prdID);
    // console.log(this.currIndex);
    this.router.navigate(['/prd', this.prdIDList[++this.currIndex]]);
  }

  // Day6
  search(material: string) {
    this.productWithApiService.searchPrdWithMaterial(material).subscribe({
      next: (data) => {
        // console.log(data);
        this.productsAfterSearch=data;
        // console.log(this.productsAfterSearch);

      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
