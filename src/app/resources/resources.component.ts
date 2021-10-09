import { Component, OnInit } from '@angular/core';

export interface teachingData {
  course: string;
  position: number;
  description: string;
}

export interface userfulLinksData {
  content: string;
  position: number;
  links: string;
}


const TEACHING_DATA: teachingData[] = [
  {position: 1, course: 'Software Engineering	', description: 'To develop in-depth understanding of software engineering principles, practices and ability to apply them in developing large scale software systems.'},
  {position: 2, course: 'Software Systems Analsis and Design	', description: 'To develop in-depth understanding of software engineering principles, practices and ability to apply them in developing large scale software systems.'},
  {position: 3, course: 'Software Foundations	', description: 'To develop in-depth understanding of software engineering principles, practices and ability to apply them in developing large scale software systems.'},
  {position: 4, course: 'Software Quality Engineering	', description: 'To develop in-depth understanding of software engineering principles, practices and ability to apply them in developing large scale software systems.'},
  {position: 5, course: 'Internals of Application Servers	', description: 'To develop in-depth understanding of software engineering principles, practices and ability to apply them in developing large scale software systems.'},
  {position: 6, course: 'Principles of Programming Languages	', description: 'To develop in-depth understanding of software engineering principles, practices and ability to apply them in developing large scale software systems.'}

];

const USEFULLINKS_DATA: userfulLinksData[] = [
  {position: 1, content: 'Software Engineering	', links: 'To develop in-depth understanding of software engineering principles, practices and ability to apply them in developing large scale software systems.'},
  {position: 2, content: 'Software Systems Analsis and Design	', links: 'To develop in-depth understanding of software engineering principles, practices and ability to apply them in developing large scale software systems.'},
  {position: 3, content: 'Software Foundations	', links: 'To develop in-depth understanding of software engineering principles, practices and ability to apply them in developing large scale software systems.'},
  {position: 4, content: 'Software Quality Engineering	', links: 'To develop in-depth understanding of software engineering principles, practices and ability to apply them in developing large scale software systems.'},
  {position: 5, content: 'Internals of Application Servers	', links: 'To develop in-depth understanding of software engineering principles, practices and ability to apply them in developing large scale software systems.'},
  {position: 6, content: 'Principles of Programming Languages	', links: 'To develop in-depth understanding of software engineering principles, practices and ability to apply them in developing large scale software systems.'}

];

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  teachingColumns: string[] = ['position', 'course', 'description'];
  teachingSource = TEACHING_DATA;

  
  usefulDataColumns: string[] = ['position', 'content', 'links'];
  usefulSource = USEFULLINKS_DATA;
}
