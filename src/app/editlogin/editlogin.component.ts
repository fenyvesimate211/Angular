import { Component, OnInit } from '@angular/core';
import { Login} from '../login';
import {ActivatedRoute, Router} from '@angular/router';
import {NgserviceService} from '../ngservice.service';

@Component({
  selector: 'app-editlogin',
  templateUrl: './editlogin.component.html',
  styleUrls: ['./editlogin.component.css']
})
export class EditloginComponent implements OnInit {

    loginToUpdate = new Login();

  constructor(private _route: Router, private _service: NgserviceService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = parseInt(this._activatedRoute.snapshot.paramMap.get('id'));
    this._service.fetchLoginBdyIdFromRemote(id).subscribe(
      data=> {
        console.log("Data fetched successfully");this.loginToUpdate = data;

      },
      error => console.log("Exception on fetching login by id to edit")
    )

  }
  updateLoginformsubmit()
  {
    this._service.updateLoginToRemote(this.loginToUpdate).subscribe
    (
      data =>{
        console.log("Data updated successfully");
        this._route.navigate(['loginlist']);
      },
      error =>console.log("Error")
    )
  }

  gotolist() {
    this._route.navigate(['loginlist']);
  }
}