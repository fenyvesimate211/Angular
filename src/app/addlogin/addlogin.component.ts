import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {NgserviceService} from '../ngservice.service';
import {Login} from '../login';


@Component({
  selector: 'app-addlogin',
  templateUrl: './addlogin.component.html',
  styleUrls: ['./addlogin.component.css']
})
export class AddloginComponent implements OnInit {
  login = new Login();
  constructor(private _route: Router,private _service: NgserviceService) { }

  ngOnInit(): void {
  }

addLoginformsubmit()
{
this._service.addLoginToRemote(this.login).subscribe
(
  data =>{
    console.log("Data added successfully");
    this._route.navigate(['loginlist']);
  },
  error =>console.log("Error")
)
}


  gotolist() {
    this._route.navigate(['loginlist']);
  }
}