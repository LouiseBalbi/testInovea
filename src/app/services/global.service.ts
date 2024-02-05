import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GameModel } from '../models/gameModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private gameModelUrl = "https://inov-test-api.onrender.com/api/models";

  constructor(private http: HttpClient) { }

  getList(): Observable<GameModel[]> {
    return this.http.get<GameModel[]>(this.gameModelUrl);
  }
}
