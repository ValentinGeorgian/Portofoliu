import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeNameTaskComponent'
})
export class PipeNameTaskComponentPipe implements PipeTransform
{

  transform(value: string): string
  {

    let nameReturn: string = "";

    for (let i = 0; i < value.length; i++)
    {
      nameReturn = nameReturn + value[i];
      if (value[i] == " ")
      {
        break;
      }
    }

    for(let i = 0; i<value.length; i++)
    {
      if(value[i] == " ")
      {
        nameReturn = nameReturn + value[i+1] + ". ";
      }
    }
    return nameReturn;
  }

}
