import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private http: HttpClient) { }

  public sendToCalculate(height: number, weight: number) {
    return this.http.post("http://localhost:3888/calculate", {
      "height": height,
      "weight": weight
    });

  }
}
