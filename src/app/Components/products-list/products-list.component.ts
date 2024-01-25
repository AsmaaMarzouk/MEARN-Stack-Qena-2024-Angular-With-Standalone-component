import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalcDiscountPipe } from '../../Pipes/calc-discount.pipe';
import { Iproduct } from '../../Model/iproduct';
import { ImgStyleDirective } from '../../Directives/img-style.directive';
import { ProductsService } from '../../Services/products.service';
import { Router } from '@angular/router';
import { ProductsWithApiService } from '../../Services/products-with-api.service';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [FormsModule, CommonModule, CalcDiscountPipe, ImgStyleDirective],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent {
  // productList: Iproduct[];
  showImage: boolean = true;
  user: string = 'Ali';

  productsListFilter: Iproduct[] = [];
  // product1:TrackInfo=new TrackInfo();
  // product2:TrackInfo=new TrackInfo();
  // product2:TrackInfo=new TrackInfo();

  // Day3

  date1: Date = new Date();

  // ##################################

  // Day3
  @Input() set listFilterValueInchild(value: string) {
    console.log(value);

    // this.productsListFilter = this.performFilter(value);
    // Day4
    // this.productsListFilter = this.prdService.performFilter(value);
    // console.log(this.performFilter(value));
    // console.log(this.productsListFilter);


    // Day5

    this.productWithApiService.getAllPrds().subscribe(data => {
      this.productsListFilter=data.filter(prd=>prd.name.toLowerCase().includes(value));
      console.log(this.productsListFilter);

    })
  }

  //  @Output() addPrdsEvent:EventEmitter<Iproduct>=new EventEmitter<Iproduct>();
  @Output() addPrdsEvent = new EventEmitter<Iproduct>();

  // ######################################
  // categoryID
  // 1 => tables , 2=> chairs , 3=> tv units

  // Day4 => inject

  // Day5 => inject products service with api
  constructor(public prdService:ProductsService,private router:Router,private productWithApiService:ProductsWithApiService) {
    // this.productList = [
    //   {
    //     id: 1,
    //     name: 'Odense 8-Seater Top Dining Table',
    //     price: 21500,
    //     quantity: 0,
    //     PrdimgURL:
    //       'https://media.homecentre.com/i/homecentre/163650487-163650487-HC18082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 1,
    //     Material: 'Engineered Wood',
    //   },
    //   {
    //     id: 5,
    //     name: 'Trixia 4-Seater Glass Dining Table',
    //     price: 30000,
    //     quantity: 8,
    //     PrdimgURL:
    //       'https://media.homecentre.com/i/homecentre/163645951-163645951-HC07102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 1,
    //     Material: 'Metal',
    //   },
    //   {
    //     id: 25,
    //     name: 'Gasha Marble Top Side Table',
    //     price: 14000,
    //     quantity: 10,
    //     PrdimgURL:
    //       'https://media.homecentre.com/i/homecentre/160079085-160079085-HC020518_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 1,
    //     Material: 'Metal',
    //   },
    //   {
    //     id: 7,
    //     name: 'Ventura Fabric Dining Chair',
    //     price: 1500,
    //     quantity: 2,
    //     PrdimgURL:
    //       'https://media.homecentre.com/i/homecentre/161257427-161257427-HC280119_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 2,
    //     Material: 'Upholstered Seating',
    //   },
    //   {
    //     id: 17,
    //     name: 'Ventura Fabric Dining Chair',
    //     price: 1500,
    //     quantity: 2,
    //     PrdimgURL:
    //       'https://media.homecentre.com/i/homecentre/162640761-162640761-HC23092020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 2,
    //     Material: 'Upholstered Seating',
    //   },
    //   {
    //     id: 9,
    //     name: 'Boston Study Chair',
    //     price: 1000,
    //     quantity: 10,
    //     PrdimgURL:
    //       'https://media.homecentre.com/i/homecentre/159671547-159671547-HCB1226OCT17_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 2,
    //     Material: 'Upholstered Seating',
    //   },
    //   {
    //     id: 10,
    //     name: 'Coby Extendable TV Unit',
    //     price: 13000,
    //     quantity: 0,
    //     PrdimgURL:
    //       'https://media.homecentre.com/i/homecentre/163723189-163568026-HC16082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 3,
    //     Material: 'Wood',
    //   },
    //   {
    //     id: 15,
    //     name: 'Accent TV Unit',
    //     price: 36999,
    //     quantity: 4,
    //     PrdimgURL:
    //       'https://media.homecentre.com/i/homecentre/161684469-161684469-HC210519_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 3,
    //     Material: 'MDF',
    //   },
    //   {
    //     id: 55,
    //     name: 'Plymouth TV Unit',
    //     price: 36999,
    //     quantity: 3,
    //     PrdimgURL:
    //       'https://media.homecentre.com/i/homecentre/163688823-163688823-HC05102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 3,
    //     Material: 'wood',
    //   },
    // ];

    //  this.addPrdsEvent=new EventEmitter<Iproduct>();
  }
  ngOnInit(): void {
    // this.productsListFilter = this.productList;
    // Day4
    // this.productsListFilter = this.prdService.getAllPrd();

    // Day5

    this.productWithApiService.getAllPrds().subscribe({
      next:(data)=>{
        // console.log(data);
        this.productsListFilter=data;

      },
      error:(err)=>{

        console.log(err);

      }
    })
  }

  toggleImg() {
    this.showImage = !this.showImage;
  }

  // performFilter(filterValue: string): Iproduct[] {
  //   filterValue = filterValue.toLowerCase();
  //   return this.productList.filter((product: Iproduct) =>
  //     product.name.toLowerCase().includes(filterValue)
  //   );
  // }

  addToCart(prd: Iproduct) {
    // console.log(prd);

    this.addPrdsEvent.emit(prd);
  }


  // Day4

  goPrdDetails(prdID:number) {

    this.router.navigate(['/prd',prdID]);
  }
  // ##############
}
