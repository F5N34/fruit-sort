import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Prediction } from '../interfaces/prediction';
import { Upload } from '../interfaces/upload.interface';

@Injectable({
  providedIn: 'root'
})
export class VerifyFruitService {

  private baseApi = 'https://fruit-recognizer.herokuapp.com'

  private optionRequete = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundaryxyFdzACvJEsyGviR',
      'Accept': 'application/json'
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  public sendUrlImage(url: any): Observable<Prediction> {
    return this.http.get<Prediction>(this.baseApi + '/classify-url?url=' + url);
  }

  public sendImage(pic: File): Observable<Prediction> {
    const header = new HttpHeaders({ 'enctype': 'multipart/form-data' });
    const formData = new FormData;
    formData.append('file', pic);
    return  this.http.post<Prediction>(this.baseApi + '/upload',formData,{headers: header});
  }
}
