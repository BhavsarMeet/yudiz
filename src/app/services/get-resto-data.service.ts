import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetRestoDataService {

  constructor(private httpClient:HttpClient) { }

  getRestaurantByMeal(data:any):Observable<any>{
    return this.httpClient.get("http://localhost:3000/api/restaurant/getrestaurantbymeal/"+data);
  }

  getDishesByRestaurantName(data:any):Observable<any>{
    return this.httpClient.get("http://localhost:3000/api/restaurant/getdishesbyrestaurant/"+data);
  }
}
