import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Model } from '../_models/model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  baseUrl = environment.apiUrl;

  info: Model[] = [];

  constructor(private http: HttpClient) { }

  addInfo(model: any) {
    return this.http.post(this.baseUrl + 'Info/add', model)
  }
}
