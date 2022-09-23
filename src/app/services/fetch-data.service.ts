import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StockDTO } from 'src/app/classes/StockDTO';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const AUTH_API = 'http://localhost:8081/';

@Injectable({
  providedIn: 'root'
})

export class FetchDataService {
  

  constructor(private http: HttpClient) { }
  
  getQuoteByMarketCap(marketCap:any)
  {
    
    return this.http.get( "http://localhost:8085/getQuoteByMarketCap/"+marketCap);
  }

  getRecommendations(marketCap:any)
  {
    return this.http.get( "http://localhost:8085/getRecommendations/"+marketCap);
  }

  saveStock(ss:StockDTO): Observable<any> {
    
    return this.http.post(AUTH_API + 'saveStock', 
    JSON.stringify(ss)
    , httpOptions);
  }

  
  
  
}