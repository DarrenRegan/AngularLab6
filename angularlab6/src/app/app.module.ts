import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 

constructor(private http: Http){ }

GetStudentData(): Observable<any> {
  return this.http.get("https://www.jsonblob.com/6e25b992-1b11-11e8-8015-4973034aa4d0")
  .map(obs => obs.json());
  }
}
