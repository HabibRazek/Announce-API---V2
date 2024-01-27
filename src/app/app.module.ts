import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListAnnounceComponent } from './Announce/list-announce/list-announce.component';
import { AddAnnounceComponent } from './Announce/add-announce/add-announce.component';
import { FormsModule } from '@angular/forms';
import { UpdateAnnounceComponent } from './Announce/update-announce/update-announce.component';


@NgModule({
  declarations: [
    AppComponent,
    ListAnnounceComponent,
    AddAnnounceComponent,
    UpdateAnnounceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
