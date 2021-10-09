import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { PeopleComponent } from './people/people.component';
import { DemoMaterialModule } from './materia-module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { EventComponent } from './event/event.component';
import { FocusareasComponent } from './focusareas/focusareas.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { IndividualprofileComponent } from './individualprofile/individualprofile.component';
import { ContactComponent } from './contact/contact.component';
import { PublicationsComponent } from './publications/publications.component';
import { ResourcesComponent } from './resources/resources.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { JwPaginationModule } from 'jw-angular-pagination';
import { NgJsonEditorModule } from 'ang-jsoneditor' 
import { NgxTweetModule } from "ngx-tweet";

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    HomeComponent,
    EventComponent,
    FocusareasComponent,
    FooterComponent,
    PeopleComponent,
    IndividualprofileComponent,
    ContactComponent,
    PublicationsComponent,
    ResourcesComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    CommonModule ,
    HttpClientModule,
    MatCarouselModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    JwPaginationModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule ,
    NgJsonEditorModule,
    NgxTweetModule,
    RouterModule.forRoot([

      { path: 'app-home', component: HomeComponent },
      { path: '', redirectTo: 'app-home', pathMatch: 'full' },
      { path: 'app-people', component: PeopleComponent },
      { path: 'app-faculty', component: PeopleComponent },
      { path: 'app-phdStudent', component: PeopleComponent },
      { path: 'app-msStudent', component: PeopleComponent },
      { path: 'app-individualprofile/:id', component: IndividualprofileComponent },
      { path: 'app-publications', component: PublicationsComponent },
      { path: 'app-focusareas', component: FocusareasComponent },
      { path: 'app-event', component: EventComponent },
      { path: 'app-resources', component: ResourcesComponent },
      { path: 'app-contact', component: ContactComponent },
      { path: 'app-admin', component: AdminComponent },


    ]),
    NgbModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent
   ]
})
export class AppModule { }
