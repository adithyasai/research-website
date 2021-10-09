import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import * as foucsareas from '../../assets/SiteData/focusareas.json';
import * as homeData from '../../assets/SiteData/homeData.json';
import * as userData from '../../assets/SiteData/individualUserData.json';
import * as aboutUsData from '../../assets/SiteData/aboutData.json';
import * as eventsData from '../../assets/SiteData/eventsData.json';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers

})
export class HomeComponent implements OnInit {
  focusAreas: any = (foucsareas as any).default;
  homeData: any = (homeData as any).default;
  students: any = this.homeData.students;
  counts: any = this.homeData.counts; 
  aboutUs: any = (aboutUsData as any).default;

  userData: any = (userData as any).default;
  eventsData: any = (eventsData as any).default;


  slides = [
    {'image': 'https://picsum.photos/id/124/900/500',
      'heading' : "We are Looking for MS and PHD Students",
      'p' : "Apply Now"
    }, 
    {'image': 'https://picsum.photos/id/533/900/500',
      'heading' : "Lorem Impsum",
      'p' : "Apply Now"
    },
    {'image': 'https://picsum.photos/id/700/900/500',
      'heading' : "We are Looking for MS and PHD Students",
      'p' : "Lorem Impsum"
    },
    {'image': 'https://picsum.photos/id/807/900/500',
      'heading' : "Lorem Impsum",
      'p' : "Apply Now"
    }
  ];
  
  ngOnInit(): void {
  }


  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
}
