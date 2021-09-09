import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decoradorhash'
})
export class DecoradorhashPipe implements PipeTransform {

  transform(value: unknown, args: string): unknown {

    return  args + value;
  }

}
