import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowMessagesComponent } from './show-messages/show-messages.component';
import { MessagesService } from './message.service';
import { MaterialModule } from './material-module';

@NgModule({
  declarations: [
    AppComponent,
    ShowMessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [MessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
