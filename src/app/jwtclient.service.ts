import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtclientService {

  constructor( private http:HttpClient) { }

  public generateToken(request: { userName: string; password: string; }):Observable<any>{

    return this.http.post("http://localhost:8080/login",request,{responseType: 'text' as 'json'});
  }


  public welcome(token: string | Object) {
    console.log('Service token:', token);

    // Construct the Authorization header
    const tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);

    // Send the GET request with headers
    return this.http.get('http://localhost:8080/users', { headers });
  }
  
}
