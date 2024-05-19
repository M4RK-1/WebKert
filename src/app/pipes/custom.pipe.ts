import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    return `$${value.toFixed(2)}`;
  }
}
