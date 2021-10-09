import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EventComponent } from '../event/event.component';
import { PeopleComponent } from '../people/people.component';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  @Input() name: any;
  username: String = '';
  date = "";
  address = "";
  eventObject: any ;

  public data: any;
 
  constructor() {
  }

  ngOnInit(): void {

    this.eventObject = new EventComponent();
    
  }

  saveNews() {
    var formatedDate = formatDate(this.date , 'dd MMM yyyy' , 'en-US');
    let eventData = {
      "headLine": this.username,
      "Date": formatedDate,
      "Content": this.address

    };
    this.eventObject.eventsData.News.push(eventData);
    this.username = '';
    this.date='';
    this.address='';
  }

}
