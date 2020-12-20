import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImg'
})
export class GlxDefaultImgPipe implements PipeTransform {

  transform(value: string): string {
    console.log(value);
    // return value ? value : 'assets/img-not-found.png';
    if (value === null) {
      return 'assets/img-not-found.png';
    } else {
      return value;
    }
  }

}
