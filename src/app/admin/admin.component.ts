import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EventComponent } from '../event/event.component';
import { PeopleComponent } from '../people/people.component';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';
import { formatDate } from '@angular/common';
import { FocusareasComponent } from '../focusareas/focusareas.component';

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

  areaname = '';
  imgurl = '';

  eventObject: any;
  foucsAreaObject: any;

  public data: any;

  constructor() {
  }

  ngOnInit(): void {

    this.eventObject = new EventComponent();
    this.foucsAreaObject = new FocusareasComponent();

  }

  saveNews() {
    var formatedDate = formatDate(this.date, 'dd MMM yyyy', 'en-US');
    let eventData = {
      "headLine": this.username,
      "Date": formatedDate,
      "Content": this.address

    };
    this.eventObject.eventsData.News.push(eventData);
    this.username = '';
    this.date = '';
    this.address = '';
  }

  saveFoucsArea() {
    let foucsAreaData = {
      "image": this.imgurl,
      "Name": this.areaname

    };
    this.foucsAreaObject.focusAreas.push(foucsAreaData);
    console.log(this.foucsAreaObject.focusAreas);
  }

}
