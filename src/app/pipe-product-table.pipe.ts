import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeProductTable'
})
export class PipeProductTablePipe implements PipeTransform {

  transform(value: string, value1: string): string {
    let stringReturn: string = "";

    if ((value != "") && (value1 == ""))
    {
      stringReturn = value.slice(0,1).toUpperCase() + value.slice(1,value.length);
    }

    if((value != "")&&(value1 != ""))
    {
      stringReturn = value.slice(0,1).toUpperCase() + value.slice(1,value.length) + 
      " - " + "(" + value1.toLowerCase() + ")";
    }

    return stringReturn;

  }

}
