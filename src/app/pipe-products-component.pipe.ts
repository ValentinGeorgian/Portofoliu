import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeProductsComponent'
})
export class PipeProductsComponentPipe implements PipeTransform {

  transform(value: string, param1:string): string {

    let stringReturn:string = "";

    if(param1 == "")
    {
      stringReturn = "Price: ";
    }
    else
    {
      stringReturn = "Price with discount: ";
    }

    return stringReturn;
  }

}
