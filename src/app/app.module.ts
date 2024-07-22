import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageStoryComponent } from './components/manage-story/manage-story.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ManageStoryComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
