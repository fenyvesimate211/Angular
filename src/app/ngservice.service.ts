import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

class Login {
}

@Injectable({
  providedIn: 'root'
})
export class NgserviceService {

  constructor(private _http: HttpClient) { }



  fetchLoginListFromRemote(): Observable<any>{
    return this._http.get<any>('http://localhost:8075/getloginlist');
  }
  addLoginToRemote(login: Login): Observable<any>{
    return this._http.post<any>('http://localhost:8075/addlogin',login);
  }
  updateLoginToRemote(login: Login): Observable<any>{
    return this._http.post<any>('http://localhost:8075/editlogin',login);
  }

  fetchLoginBdyIdFromRemote(id: number): Observable<any> {
    return this._http.get<any>('http://localhost:8075/getloginbyid/'+id);
  }
  deleteLoginBdyIdFromRemote(id: number): Observable<any> {
    return this._http.delete<any>('http://localhost:8075/login/' + id);
  }
}
