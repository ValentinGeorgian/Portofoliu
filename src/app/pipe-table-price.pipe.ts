import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeTablePrice'
})
export class PipeTablePricePipe implements PipeTransform {

  transform(value: number): string {

    let priceReturn:string = "";

    priceReturn = value.toString() + "  RON";
    
    return priceReturn;
  }

}
