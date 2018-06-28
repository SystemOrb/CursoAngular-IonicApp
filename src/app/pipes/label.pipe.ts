import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'labelPipe'
})

export class labelPipe implements PipeTransform {
  transform(value:string, args:string='Crea tu lista'):string {
    return (value.length!=0)?value:args;
  }
}
