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

  constructor(private dbContext: AngularFireDatabase, private elementRef: ElementRef) {
    this.courses = dbContext.list('courses').valueChanges();
  }

  Add(data: any) {
    // const inputValue = data.value.trim(); // Get the trimmed value of the input
    if (data !== '') { // Only push non-empty values
      this.dbContext.list('courses').push(data.value);
      this.elementRef.nativeElement.querySelector('input').value = ''; // Reset input value
    }
  }
}
