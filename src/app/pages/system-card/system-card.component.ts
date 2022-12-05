import {Component, Input, OnInit} from '@angular/core';
import {HealthDataService} from "../../services/health-data-service/health-data.service";
import {GenericApiService} from "../../services/generic-api-service/generic-api.service";

@Component({
  selector: 'app-system-card',
  templateUrl: './system-card.component.html',
  styleUrls: ['./system-card.component.scss']
})
export class SystemCardComponent implements OnInit{

  @Input()
  card:any;
  loading: boolean = false;

  constructor(private healthDataObj: HealthDataService, private api: GenericApiService) {
  }

  ngOnInit(): void {
    this.healthDataObj.allHealthRefreshEvent.subscribe(toRefresh => {
      if(toRefresh) {
        this.refreshStatus(this.card);
      }
    })

    this.refreshStatus(this.card);

  }

  refreshStatus(card:any) {
    this.loading = true;
    this.refreshSingleSystem(card)
  }

  refreshSingleSystem(card:any) {
    this.api.get(card.healthCheckUrl).subscribe((res:any) => {
      this.loading = false;
      console.log(res);
      card.branch = res.git.branch;
    }, err=> {
      card.branch = "Error"
      this.loading = false;
      console.log(err)
    })

  }


}
