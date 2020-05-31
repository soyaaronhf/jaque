import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'excerpt'
})
export class ExcerptPipe implements PipeTransform {

  transform(value: string, max: number = 20 ): string {
    return value.length >= max ? value.substring(0,max) + '...' : value
  }

}
