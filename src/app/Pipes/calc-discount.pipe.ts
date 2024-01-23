import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcDiscount',
  standalone: true
})
export class CalcDiscountPipe implements PipeTransform {

  transform(value: number,discountValue:number=25): number {

    // value =200 , discountValue = 50%
    let disValue=discountValue/100;//50/100=.5
    let mulRes=value*disValue;//200 * .5 =100
    let subRes=value-mulRes;// 200 - 100 = 100
    return subRes;

  }

}
