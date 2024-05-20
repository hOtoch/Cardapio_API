import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodData } from '../interface/FoodData';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  API_URL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getData() : Observable<FoodData[]>{
    return this.http.get<FoodData[]>(this.API_URL + '/food');
  }

  addFood(data : FoodData) : Observable<FoodData>{
    return this.http.post<FoodData>(this.API_URL + '/food', data);
  }
}

