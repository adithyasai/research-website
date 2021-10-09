import { Component, Input, OnInit } from '@angular/core';
import * as data from '../../assets/SiteData/people.json';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  peopleData: any = (data as any).default;
  faculty: any = this.peopleData.faculty
  phDStudents: any =this.peopleData.phDStudents 
  msStudents: any = this.peopleData.msStudents 
  router: any;

  constructor( private _router: Router) {
          this.router = _router.url; 
   }

  ngOnInit(): void {

  }
  
}
