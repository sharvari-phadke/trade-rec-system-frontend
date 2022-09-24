import { Pipe, PipeTransform } from '@angular/core';
// import { stock } from '../../classes/stock';
import { StockDTO } from '../../classes/StockDTO';

@Pipe({ name: 'stock' })
export class StockPipe implements PipeTransform {
    transform(values: StockDTO[], filter: string): StockDTO[] {

        if (!filter || filter.length === 0) {
            return values;
        }

        if (values.length === 0) {
            return values;
        }

        return values.filter((value: StockDTO) => {
            return value.symbol.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
        });
    }
}