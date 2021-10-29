import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-refresher';

  persons: string[] = ['Max', 'Manuel', 'Anna'];

  onPersonCreated(personName:string){
    this.persons.push(personName);
  }
}
