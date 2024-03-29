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

  getModelById(id: string): Observable<GameModel> {
    return this.http.get<GameModel>(this.gameModelUrl + "/" + id);
  }

  createModel(nameM: string, authorM: string, polygonsM: number, descriptionM: string): Observable<any> {
    const body = {
      name: nameM,
      author: authorM,
      polygons: polygonsM,
      description: descriptionM,
      date: new Date(),
      modelName: "picnic"
    }
    return this.http.post<any>(this.gameModelUrl, body);
  }

  updateModel(id: string, nameM: string, authorM: string, polygonsM: number, descriptionM: string): Observable<any> {
    const body = {
      name: nameM,
      author: authorM,
      polygons: polygonsM,
      description: descriptionM
    }
    return this.http.put<any>(this.gameModelUrl + '/' + id, body);
  }

  deleteModel(id: string): Observable<any> {
    return this.http.delete<any>(this.gameModelUrl + "/" + id);
  }
}
