import { Component, OnInit } from '@angular/core';
import { FetchDataService } from 'src/app/services/fetch-data.service';
import { StockDTO } from 'src/app/classes/StockDTO';

interface StockOptions {
	value: string;
	viewValue: string;
}

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	constructor(private fetchService: FetchDataService) { }

	marketCapOptions(value: string) {
		console.log("marketCapOptions " + value);

		switch (value) {
			case 'Large Cap':
				// if Large Cap is selected do something.
				this.callFun('LargeCap')
				break;
			case 'Mid Cap':
				// if Mid Cap is selected do something.
				this.callFun('MidCap')
				break;
			case 'Small Cap':
				// if Small Cap is selected do something.
				this.callFun('SmallCap')
				break;
		}

	}

	currentUser: string;
	stocks: any;
	marketCap: any;
	loading: boolean | undefined;
	saved: boolean = false;
	// stckArray: stock[] = [];
	stckArray: StockDTO[] = []
	quantity: number = 1 
	
	ngOnInit(): void {
		this.fetchService.getUsername().subscribe(
			(resp: any) => {
				this.currentUser= resp;
				console.log("In dashboard.component.ts\nUsername: ", this.currentUser);
			}
		);
	}

	callFun(marketCap: any) {
		// this.stocks=null; 
		
		this.marketCap = marketCap;
		console.log("In callFun "+ this.marketCap); 
		console.log("In callFun2 "+ this.currentUser); 
		this.loading = true;
		var len = 0;
		this.fetchService.getQuoteByMarketCap(this.marketCap).subscribe(
			(response) => {
				this.stocks = response;
				this.loading = false;
				
				for (var s in this.stocks) {
					len++;
				}
				for (var i = 0; i < len; i++) {
					// this.stckArray[i] = new stock(this.stocks[i].StockID, this.stocks[i].Name, this.stocks[i].Twoweekhigh, this.stocks[i].Twoweeklow, this.stocks[i].Lastclosingprice);
					this.stckArray[i] = new StockDTO(this.stocks[i].symbol, this.stocks[i].currentPrice, this.stocks[i].close2WeeksAgo, this.stocks[i].changePercent, this.stocks[i].quantitySaved, this.currentUser);
				}
				console.log(this.stckArray);
			},
			(error) => {
				this.loading = false
			}
		)

		
 
	}

	onKey(event: any) { this.quantity = event.target.value; }


	// getRecommendations(marketCap: any) {
	// 	this.loading = true;

	// 	this.fetchService.getRecommendations(marketCap).subscribe(
	// 		(data: any) => {
	// 			this.stocks = data;
	// 			this.loading = false;

	// 		},
	// 		(err: any) => {
	// 			this.loading = false;
	// 		}
	// 	)
	// }

	saveStock(s: StockDTO) {
		console.log("In saveStock\nUsername: ", this.currentUser);
		const ss: StockDTO = new StockDTO(s.symbol, s.currPrice, s.close2WeeksAgo, s.changePercent, this.quantity, this.currentUser);
		this.fetchService.saveStock(ss).subscribe(
			(response: any) => {
				if (response)
					this.saved = true;
			}
		)

	}




}





