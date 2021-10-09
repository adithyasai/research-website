import { Component, OnInit } from '@angular/core';
import * as publications from '../../assets/SiteData/publications.json';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {
  publicationsData: any = (publications as any).default;

  constructor() { }

  ngOnInit(): void {
    console.log(this.publicationsData.faculties)
  }

}
