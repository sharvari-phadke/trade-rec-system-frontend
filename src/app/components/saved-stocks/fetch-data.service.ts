import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StockDTO } from 'src/app/classes/StockDTO';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const AUTH_API = 'https://aa7ccca8-45f7-436b-a884-f6acbba2dd57.mock.pstmn.io';

@Injectable({
  providedIn: 'root'
})

export class FetchDataService {


  constructor(private http: HttpClient) { }

  getSavedStocks() {
    return this.http.get("https://ab75b0ae-52bf-4b46-b401-78d71b63b971.mock.pstmn.io/getSavedStocks");
  }

  deleteStock(ss: StockDTO): Observable<any> {
    return this.http.get("https://ab75b0ae-52bf-4b46-b401-78d71b63b971.mock.pstmn.io/getSavedStocks");

  }
  
}