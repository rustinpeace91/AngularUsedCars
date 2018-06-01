import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
//figuring out a way to set canGoBack to false when page loads
import { DashboardService } from '../dashboard.service';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(
    private dashBoardService: DashboardService
  ) { }

  ngOnInit() {
    this.dashBoardService.setIsHome(true);
  }

}
