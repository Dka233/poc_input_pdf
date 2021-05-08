import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Model } from '../_models/model';
import { ServiceService }  from '../_services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  baseUrl = environment.apiUrl;
  info: any;

  constructor(private infoService: ServiceService, private http: HttpClient) { }

  ngOnInit(): void {
  this.getInfo();
  }

  getInfo() {
    return this.http.get(this.baseUrl + 'Info/get').subscribe(response => {
      this.info = response;
    }, error => {
      console.log(error);
    })
  }

}
