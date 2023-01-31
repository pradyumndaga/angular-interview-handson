import { Component, OnInit, VERSION } from '@angular/core';
import { FetchApi } from './fetch.api';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  user: string;
  countryList = ['IND', 'USD', 'UK'];
  country: string;
  username: string;
  message: any;
  constructor(private fetchApi: FetchApi) {}
  ngOnInit() {
    this.fetchApi.callApi().subscribe((str) => {
      this.message = str;
      console.log(this.message?.message);
    });
  }

  setUsername($event) {
    console.log($event);
    this.username = $event;
  }

  logout() {
    console.log('logout');
    this.username = '';
  }

  changed() {
    console.log('changed', this.user);
  }
}
