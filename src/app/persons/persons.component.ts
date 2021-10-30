import { PersonsService } from './persons.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})

export class PersonsComponent implements OnInit, OnDestroy {
  personList: string[] = [];
  private personListSubs: Subscription = new Subscription();
  isFetching = false;

  constructor(private prsService: PersonsService){}

  ngOnInit():void{
    // this.personList = this.prsService.persons;
    this.personListSubs = this.prsService.personsChanged.subscribe(persons => {
      this.personList = persons;
      this.isFetching = false;
    });
    this.prsService.fetchPersons();
    this.isFetching = true;
  }

  deletePerson(name: string){
    this.prsService.removePerson(name);
  }


  ngOnDestroy():void{
    this.personListSubs.unsubscribe();
  }
}
