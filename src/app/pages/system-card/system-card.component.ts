import {Component, Input, OnInit} from '@angular/core';
import {HealthDataService} from "../../services/health-data-service/health-data.service";

@Component({
  selector: 'app-system-card',
  templateUrl: './system-card.component.html',
  styleUrls: ['./system-card.component.scss']
})
export class SystemCardComponent implements OnInit{

  @Input()
  card:any;
  loading: boolean = false;

  constructor(private healthDataObj: HealthDataService) {
  }

  ngOnInit(): void {
    this.healthDataObj.allHealthRefreshEvent.subscribe(toRefresh => {
      if(toRefresh) {
        this.refreshStatus();
      }
    })

  }

  refreshStatus() {
    this.loading = true;
    setTimeout(()=> this.loading = false, 1000)
  }


}
