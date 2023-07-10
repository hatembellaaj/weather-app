import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) {}

  getWeather(location:any){
      return this.http.get(
        'http://api.weatherapi.com/v1/current.json?key=f13c54faab904791a27131904231007 &q='+location+'&aqi=no'
      );
}
}
