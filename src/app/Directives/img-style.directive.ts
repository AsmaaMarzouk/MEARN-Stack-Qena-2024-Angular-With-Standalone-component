import { Directive, ElementRef, HostListener, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[ImgStyle]',
  standalone: true
})
export class ImgStyleDirective implements OnChanges {

  // document.getEle

// property dec
@Input() radius1:string="50px";
@Input('ImgStyle') radius2:string="5px dotted ${this.color}";

// @Input() op1:string=".5"
color:string="orange"
  constructor(private elementRef:ElementRef) {
    // this.elementRef.nativeElement.style.borderRadius="30px";
    // this.elementRef.nativeElement.style.border=`5px dotted ${this.color}`;
    // this.elementRef.nativeElement.style.border=`5px solid green`;
  }
  ngOnChanges(): void {
  // this.elementRef.nativeElement.style.border=`5px dotted ${this.color}`;

  }

  // method dec
@HostListener('mouseover') func1(){

  // this.elementRef.nativeElement.style.border="2px dashed red";
  this.elementRef.nativeElement.style.borderRadius=`${this.radius1}`;
  this.elementRef.nativeElement.style.opacity=".7";
}
@HostListener('mouseout') func2(){
  this.elementRef.nativeElement.style.borderRadius=`${this.radius2}`;
  this.elementRef.nativeElement.style.opacity="1";

  // this.elementRef.nativeElement.style.border="10px solid green";
  // this.elementRef.nativeElement.style.border=`5px dotted ${this.color}`;

}

}
