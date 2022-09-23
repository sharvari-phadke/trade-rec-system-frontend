export class StockDTO {
    stockSymbol: string;
    currentPrice: number;
    close2WeeksAgo: number;
    changePercent: number;
    quantitySaved: number;
    username: string;

    constructor(stockSymbol: string, currentPrice: number, close2WeeksAgo: number, changePercent: number, quantitySaved: number, username: string) {
        this.stockSymbol = stockSymbol;
        this.currentPrice = currentPrice;
        this.close2WeeksAgo = close2WeeksAgo;
        this.changePercent = changePercent;
        this.quantitySaved = quantitySaved;
        this.username = username;
    }
}