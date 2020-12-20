import { Component, OnInit } from '@angular/core';
import {Login} from '../login';
import {ActivatedRoute, Router} from '@angular/router';
import {NgserviceService} from '../ngservice.service';

@Component({
  selector: 'app-viewlogin',
  templateUrl: './viewlogin.component.html',
  styleUrls: ['./viewlogin.component.css']
})
export class ViewloginComponent implements OnInit {

  login = new Login();
  constructor(private _route:Router, private _service: NgserviceService, private _activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    let id = parseInt(this._activatedRouter.snapshot.paramMap.get('id'));
    this._service.fetchLoginBdyIdFromRemote(id).subscribe(
    data=>{
      console.log("data received");
      this.login = data;
    },
      error => console.log("Exception Occured")
    )
  }
  gotolist() {
    this._route.navigate(['loginlist']);
  }
}
