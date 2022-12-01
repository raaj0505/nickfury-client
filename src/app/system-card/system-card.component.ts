import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-system-card',
  templateUrl: './system-card.component.html',
  styleUrls: ['./system-card.component.scss']
})
export class SystemCardComponent {

  @Input()
  card:any;

}
