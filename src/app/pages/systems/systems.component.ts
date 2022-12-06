import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data-service/data.service";
import {HealthDataService} from "../../services/health-data-service/health-data.service";
import {System} from "../../models/system";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-systems',
  templateUrl: './systems.component.html',
  styleUrls: ['./systems.component.scss']
})
export class SystemsComponent implements OnInit{
  cards: any[] = [];
  refresh:boolean = false;
  constructor(private dataService: DataService,
              private healthData: HealthDataService,
              private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params:any) => {
      let status = params.status;
      console.log(status)
      let healthStatus = (status === 'down') ? false: (status === 'up' ? true : null) ;
      console.log(healthStatus)
      this.loadSystems(healthStatus);
    })
  }

  loadSystems(status:any) {
    this.dataService.getAllSystems().subscribe((res:any) => {
      this.cards = status !== null ? res.filter((x:any) => (x.isUp === status)) : res;
    }, error => console.log("error", error))
  }

  refreshAll() {
    this.healthData.pushAllHealthRefreshEvent(true);
    setTimeout(()=> this.healthData.pushAllHealthRefreshEvent(false), 1000)
  }
}
