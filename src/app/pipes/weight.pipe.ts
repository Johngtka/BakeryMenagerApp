import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'weight',
})
export class WeightPipe implements PipeTransform {
    transform(value: unknown, ...args: unknown[]): unknown {
        return null;
    }
}
