import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from 'src/app/services/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  loginUserClick(){
    // DELETE LATER!!!
    console.log(this.user.username + " : " + this.user.password);

    this.userService.userLogin(this.user.username, this.user.password).subscribe(
      response => {
        localStorage.setItem("username", response.username);
        localStorage.setItem("userId", JSON.stringify(response.userId));
      }
    );
  }

}
