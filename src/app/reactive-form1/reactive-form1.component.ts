import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form1',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './reactive-form1.component.html',
  styles: []
})
export class ReactiveForm1Component {
myForm: FormGroup= new FormGroup({
      name: new FormControl('Sanjay'),
      email: new FormControl(''),
      message: new FormControl('')
    });
  

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Message', form.value.message);
  }
}

