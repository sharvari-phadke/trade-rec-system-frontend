import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FetchDataService } from './fetch-data.service';
import {
  SortableHeaderDirective,
  SortEvent,
  compare,
} from './sortable-header.directive';
import { StockDTO } from 'src/app/classes/StockDTO';

@Component({
  selector: 'app-saved-stocks',
  templateUrl: './saved-stocks.component.html',
  styleUrls: ['./saved-stocks.component.css']
})
export class SavedStocksComponent implements OnInit {

  constructor(private fetchService: FetchDataService) { }

  loading: boolean | undefined;
  currentUser: any;
  stocks: any;
  stocksData: any;
  stockId: any;
  stockName: any;
  filter: any;  
  @ViewChildren(SortableHeaderDirective)
  headers!: QueryList<SortableHeaderDirective>;

  ngOnInit(): void {    
    this.getSavedStocks();
  }

  getSavedStocks() {
    this.loading = true;
    this.fetchService.getSavedStocks().subscribe(
      (data: any) => {
        this.stocks = data;
        this.loading = false;

      },
      (err: any) => {
        console.log( err);
        this.loading = false;
      }
    )
  }


  deleteStock(s: StockDTO) {
    const ss: StockDTO = new StockDTO(s.stockSymbol, s.currentPrice, s.close2WeeksAgo, s.changePercent, s.quantitySaved, s.username);    

    this.fetchService.deleteStock(ss).subscribe(

      (response: any) => {
        if (response) {
          // this.saved = true;
          console.log("Deleted successfully");
          this.getSavedStocks();
        }
      }
    )

  }

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    if (direction === '' || column === '') {
      console.log("If");      
      this.stocks = this.stocks;
    } else {
      console.log("Else");      
      this.stocks = [...this.stocks].sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }
}
