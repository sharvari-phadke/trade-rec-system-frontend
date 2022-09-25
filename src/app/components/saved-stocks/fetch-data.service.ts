import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StockDTO } from 'src/app/classes/StockDTO';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class FetchDataService {
  
  constructor(private http: HttpClient) { }

  // getSavedStocks(){
  //   return this.http.get("http://localhost:9000/api/stocks/getSavedStocks");
  // }

  getSavedStocks(name: string) {
    return this.http.post("http://localhost:9000/api/stocks/getSavedStocks", name);
  }

  deleteStock(s: StockDTO): Observable<any> {
    return this.http.post("http://localhost:9000/api/stocks/delStock",s);

  }

  getUsername(): Observable<string> {
    return this.http.get("http://localhost:9000/api/user/username", { responseType: 'text' });
  }
  
}