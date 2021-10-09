import { Component, OnInit } from '@angular/core';
import * as foucsareas from '../../assets/SiteData/focusareas.json';

@Component({
  selector: 'app-focusareas',
  templateUrl: './focusareas.component.html',
  styleUrls: ['./focusareas.component.scss']
})
export class FocusareasComponent implements OnInit {
  focusAreas: any = (foucsareas as any).default;

  constructor() { }

  ngOnInit(): void {
  }

}
