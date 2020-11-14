import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private http: HttpClient) { }

  getLocation() {
    return this.http.get('http://api.ipapi.com/api/check?access_key=b91bfd7360e561f550e05e2cdc3c94bb');
  }
}
