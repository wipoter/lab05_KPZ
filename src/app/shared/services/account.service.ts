import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAccount } from '../../shared/interfaces/accont';

@Injectable({
  providedIn: 'root'
})

export class AccountService {
  constructor(private http: HttpClient){}
  public getStudent() : Observable<IAccount[]>{
    const path = 'https://localhost:7276/api/StudentAccount/Account';
    return this.http.get<IAccount[]>(path);
  }
}