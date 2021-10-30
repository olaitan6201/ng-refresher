import { Router } from '@angular/router';
import { PersonsService } from './../persons.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent implements OnInit {
  // @Output() personCreate = new EventEmitter<string>();
  personName = '';

  constructor(private prsService: PersonsService, private route: Router) { }

  ngOnInit(): void {
  }

  onCreatePerson(){
    // this.personCreate.emit(this.personName);
    this.prsService.addPerson(this.personName);
    this.route.navigate(['/']);
    this.personName = '';
  }

}
