import { Component, OnInit } from '@angular/core';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  username:String;

  password:String;


  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    if(this.username === "123" && this.password=== "123") {
      this.router.navigate(["/movies"]);
    }
  }

}
