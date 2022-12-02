import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data-service/data.service";

@Component({
  selector: 'app-systems',
  templateUrl: './systems.component.html',
  styleUrls: ['./systems.component.scss']
})
export class SystemsComponent implements OnInit{
  cards: any[] = [];

  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {

    this.loadSystems();
  }

  loadSystems() {
    this.dataService.getAllSystems().subscribe((res:any) => {
      this.cards = res;
    }, error => console.log("error", error))
  }

}
