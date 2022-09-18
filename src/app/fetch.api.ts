import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FetchApi {
  constructor(private http: HttpClient) {}

  callApi(){
    return this.http.get<string>('https://mocki.io/v1/4503bb84-4135-4c46-8cf2-4c4fcf1d273d').pipe(
map(response => { return response}),
catchError(err => err)
);
  }
}