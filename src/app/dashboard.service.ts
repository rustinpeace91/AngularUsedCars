// The idea behind this is to display certain information on the dashboard based on the state of the application
// since I decided to make the dashboard a seperate component from the other pages, I couldn't just update the buttons using HTML on the components themselves
// Instead this service stores variables and injects them into the dashboard component, which then decides which buttons to display
// it's a more complex solution, but could pay off as the app gets more complex. 

import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  isHome: boolean;
  constructor(dashBoardService: DashboardService) { }
  
  setIsHome(value){
    this.isHome = value;
  };

  getIsHome(){
    return this.isHome;
  }
}
