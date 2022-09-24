export class StockDTO {
    symbol: string;
    currPrice: number;
    close2WeeksAgo: number;
    changePercent: number;
    quantitySaved: number;
    username: string;

    constructor(symbol: string, currPrice: number, close2WeeksAgo: number, changePercent: number, quantitySaved: number, username: string) {
        this.symbol = symbol;
        this.currPrice = currPrice;
        this.close2WeeksAgo = close2WeeksAgo;
        this.changePercent = changePercent;
        this.quantitySaved = quantitySaved;
        this.username = username;
    }
}