import { Component, OnInit } from '@angular/core';
import {NgserviceService} from '../ngservice.service';
import {Router} from '@angular/router';
import {Login} from '../login';


@Component({
  selector: 'app-loginlist',
  templateUrl: './loginlist.component.html',
  styleUrls: ['./loginlist.component.css']
})
export class LoginlistComponent implements OnInit {


  logins: Array<Login> = [];
  constructor(private _route: Router, private _service: NgserviceService) { }
  ngOnInit(): void {
    this.getLogins();
  }

  getLogins() {
    this._service.fetchLoginListFromRemote().subscribe(
      data => this.logins = data, error => console.log("Exception occurred 1"),
    )
  }
  isEmpty()
  {
    if (this.logins == null)
    {
      return true;
    }
    else { return false; }
  }

  goToAddLogin() {
    this._route.navigate(['/addlogin']);
  }

  goToUpdateLogin(id: number) {
    console.log("id: "+ id);
    this._route.navigate(['/editlogin', id]);
  }


  goToViewLogin(id: number){
    this._route.navigate(['/viewlogin', id]);

  }

  deleteLogin(id: number) {
    if (confirm('Are you sure ?'))
  return this._service.deleteLoginBdyIdFromRemote(id).subscribe(
    success =>{
      ("Login deleted succesfully");
    },
    error=> {console.log("Exception occured 2"); this.getLogins()}
   )
  }
}
