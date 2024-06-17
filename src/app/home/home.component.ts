import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,JsonPipe],
  templateUrl: './home1.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  countryList:country[] = [
    new country("1", "India"),
    new country('2', 'UAE'),
    new country('3', 'USA')
  ];
  onSubmit(contactForm : any) {
    console.log(contactForm.value);
  }
}

export class country {
  id:string;
  name:string;
 
  constructor(id:string, name:string) {
    this.id=id;
    this.name=name;
  }
}
