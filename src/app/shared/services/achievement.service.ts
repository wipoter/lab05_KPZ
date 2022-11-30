import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAchievement } from '../../shared/interfaces/achievement';

@Injectable({
  providedIn: 'root'
})
export class AchievementService {

  constructor(private http: HttpClient){}
  public getStudent() : Observable<IAchievement[]>{
    const path = 'https://localhost:7276/api/StudentAccount/Achievement';
    return this.http.get<IAchievement[]>(path);
  }
}
