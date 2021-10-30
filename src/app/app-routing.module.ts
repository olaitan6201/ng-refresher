import { PersonInputComponent } from './persons/person-input/person-input.component';
import { PersonsComponent } from './persons/persons.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes : Routes = [
  { path: '', component: PersonsComponent},
  { path: 'input', component: PersonInputComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
