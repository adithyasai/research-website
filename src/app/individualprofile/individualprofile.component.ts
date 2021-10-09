import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as userInfo from '../../assets/SiteData/individualUserData.json';

@Component({
  selector: 'app-individualprofile',
  templateUrl: './individualprofile.component.html',
  styleUrls: ['./individualprofile.component.scss']
})
export class IndividualprofileComponent implements OnInit {
  userData: any = (userInfo as any).default;
  id: any = '';
  

  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
   
    console.log(this.userData);
    this.id = this.route.snapshot.paramMap.get('id');
    this.userData = this.userData.individual[this.id];

    console.log(this.id)

  }

}
