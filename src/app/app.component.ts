import { Component, ElementRef } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-17-firebase';
  courses: Observable<any[]>;
  clients: Observable<any[]>;

  constructor(private dbContext: AngularFireDatabase) {
    this.courses = dbContext
      .list('courses')
      .snapshotChanges()
      .pipe(
        map((action) =>
          action.map((course) => {
            const key = course.payload.key;
            const data = course.payload.val();
            return data;
          })
        )
      );

      this.clients = dbContext
      .list('clients')
      .snapshotChanges()
      .pipe(
        map((action) =>
          action.map((a) => {
            const key = a.payload.key;
            const data = a.payload.val();
            return data;
          })
        )
      );
  }

  Add(data: any) {
    if (data !== '') {
      this.dbContext.list('courses').push(data.value);
    }
  }
}
