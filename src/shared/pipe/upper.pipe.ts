import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Upper',
})
export class UpperPipe implements PipeTransform {
  transform(value) {
    return value.toUpperCase();
  }
}
