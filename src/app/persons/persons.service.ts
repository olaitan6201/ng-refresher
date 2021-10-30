import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PersonsService {
  personsChanged = new Subject<string[]>();
  // persons: string[] = ['Max', 'Manuel', 'Anna'];
  persons: string[] = [];

  constructor(private http: HttpClient){}

  addPerson(name: string){
    this.persons.push(name);
    this.personsChanged.next(this.persons);
  }

  removePerson(name: string){
    // this.persons.splice(this.persons.indexOf(name), 1); --best practice
    this.persons = this.persons.filter(person => {
      return person !== name;
    });
    this.personsChanged.next(this.persons);
  }

  fetchPersons(){
    this.http.get<any>('https://swapi.dev/api/people').pipe(map(resData => {
      return resData.results.map((data: { name: any; }) => data.name);
    })).subscribe(data => {
      this.personsChanged.next(data);
    });
  }
}
