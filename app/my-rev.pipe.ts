import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev',
  standalone: true
})
export class MyRevPipe implements PipeTransform {

  transform(value: string): string {
    let result: string = "";
    let it: number = 0;
    for (it = value.length - 1; it >= 0; it--) {
      result += value[it];
    }
    // You can use the additionalParam if needed
    // console.log('Additional Parameter:', additionalParam);
    return result;
  }
  

}
