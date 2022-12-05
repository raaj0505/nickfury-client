import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HealthDataService {

  allHealthRefreshEvent: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor() { }

  pushAllHealthRefreshEvent(refresh:boolean) {
    this.allHealthRefreshEvent.next(refresh);
  }
}
