import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  public isLoggedIn: string | null = null;

  ngOnInit(): void {
    this.isLoggedIn = localStorage.getItem('isLoggedIn');
  }

  public logIn() {
    console.log('ok');
    this.isLoggedIn = 'true';
    localStorage.setItem('isLoggedIn', 'true');
  }

  public logOut() {
    this.isLoggedIn = null;
    localStorage.clear();
  }
}
