import { Injectable } from '@angular/core';
import { translationModel } from '../models/translationModel';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TranslateApiService {

  url:string=''


  constructor(private http:HttpClient) {
    this.url=environment.url
   }

  getTranslation(fromLang:string, toLang:string, text:string):Observable<translationModel>{
    return this.http.get<translationModel>(`${this.url}langpair=${fromLang}|${toLang}&q=${text}`)
  }
}
