import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  // URL which returns list of JSON items (API end-point URL)

  private readonly URL = `http://localhost:3000/items`;

  constructor(private http: HttpClient) { }

  // create a method named: resolveItems()
  // this method returns list-of-items in form of Observable
  // every HTTTP call returns Observable object
  resolveItems(): Observable<any> {
    console.log('Request is sent!');
    // this.http is a HttpClient library provide by @angular/common
    // we are calling .get() method over this.http object
    // this .get() method takes URL to call API
    return this.http.get(`https://cors-anywhere.herokuapp.com/${this.URL}`);
  }

  // create a method named: resolveItems()
  // this method returns list-of-items in form of Observable
  // every HTTTP call returns Observable object
  // createItem(): Observable<any> {
  //   console.log('Request is sent!');
  //   // Using the POST method
  //   const headers =  {
  //     headers: new  HttpHeaders({ 
  //       'Content-Type': 'application/x-www-form-urlencoded'})
  //   };
  //   return this.http.post(this.URL,
  //   {
  //     'email' : 'ankit.codechintan@gmail.com',
  //     'phone' : 910950
  //   },headers)
  // }
}
