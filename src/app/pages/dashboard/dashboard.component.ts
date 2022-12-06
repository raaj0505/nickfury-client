import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private router: Router) {
  }

  goTo(s: string) {
    if(s) {
      this.router.navigate(['all-systems'], {queryParams:{status:s}})
    } else{
      this.router.navigate(['all-systems'])
    }

  }
}
