import { Pipe, PipeTransform } from '@angular/core';
import { dayJs } from '../../utils';

@Pipe({
  name: 'glxDate',
  pure: false
})
export class GlxDatePipe implements PipeTransform {

  transform(value: Date | string, format: string): string {
    return dayJs(value).format(format);
  }

}
