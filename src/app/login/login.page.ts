import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  npm: any;
  createQR: any;

  constructor(public router: Router) {}

  ngOnInit() {}

  public generate() {
    this.router.navigate(['/home'], { queryParams: { data: this.npm } });
  }
}
