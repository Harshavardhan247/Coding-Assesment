import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string): string {

    if(value.length > 10){
      return value.slice(0,6) + '...';
    } else {
      return value;
    }
    
  }

}
