import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { DashboardService } from '../dashboard.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {

  
  constructor(
    private dashBoardService: DashboardService, 
    private _router: Router,
    private location: Location
  ) { }

  ngOnInit() {
  }


  checkIfHome(){
        return this.dashBoardService.getIsHome();
  }

  goBack(){
    this.location.back();
  }

}
