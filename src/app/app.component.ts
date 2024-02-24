import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-17-firebase';
  courses: Observable<any[]>; 

  constructor(dbContext: AngularFireDatabase) {
    this.courses = dbContext.list('courses').valueChanges();
  }
}
