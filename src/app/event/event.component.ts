import { Component, OnInit } from '@angular/core';
import * as eventsData from '../../assets/SiteData/eventsData.json';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  eventsData: any = (eventsData as any).default;

  constructor() { }

  ngOnInit(): void {
  }

}
