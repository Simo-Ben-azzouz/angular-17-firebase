import { Component, ElementRef } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-17-firebase';
  courses: Observable<any[]>; 

  constructor(private dbContext: AngularFireDatabase) {
    this.courses = dbContext.list('courses').valueChanges();
  }

  Add(data: any) {
    if (data !== '') 
      {
        this.dbContext.list('courses').push(data.value);
      }
  }
}
