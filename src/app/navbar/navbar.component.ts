import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToLogin() {
    console.log("GoToLogin clicked!");
    this.router.navigate(['/login']);
  }

  goToStore(){
    console.log("GoToStore Clicked!");
    this.router.navigate(['/store']);
  }

}
