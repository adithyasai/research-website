import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as userData from '../../assets/SiteData/individualUserData.json';

@Component({
  selector: 'app-individualprofile',
  templateUrl: './individualprofile.component.html',
  styleUrls: ['./individualprofile.component.scss']
})
export class IndividualprofileComponent implements OnInit {
  userData: any = (userData as any).default;
  
  items: any = [];
  pageOfItems: Array<any> = [];
  @Output() changePage = new EventEmitter<any>(true);
  @Input() initialPage = 1;
  @Input() pageSize = 10;
  @Input() maxPages = 10;
  constructor() { }

  ngOnInit(): void {
    this.items = Array(250).fill(9).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`}));

  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    console.log(this.userData);
}

}
