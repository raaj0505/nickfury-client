import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data-service/data.service";
import {HealthDataService} from "../../services/health-data-service/health-data.service";

@Component({
  selector: 'app-systems',
  templateUrl: './systems.component.html',
  styleUrls: ['./systems.component.scss']
})
export class SystemsComponent implements OnInit{
  cards: any[] = [];
  refresh:boolean = false;
  constructor(private dataService: DataService, private healthData: HealthDataService) {

  }

  ngOnInit(): void {

    this.loadSystems();
  }

  loadSystems() {
    this.dataService.getAllSystems().subscribe((res:any) => {
      this.cards = res;
    }, error => console.log("error", error))
  }

  refreshAll() {
    this.healthData.pushAllHealthRefreshEvent(true);
    setTimeout(()=> this.healthData.pushAllHealthRefreshEvent(false), 1000)
  }
}
