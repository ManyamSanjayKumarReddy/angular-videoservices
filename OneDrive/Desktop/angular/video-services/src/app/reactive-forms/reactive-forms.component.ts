import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  // name = new FormControl(''); // Create a new FormControl instance with an initial value of an empty string

  // updateName(){
  //   this.name.setValue('John Doe'); // Update the value of the FormControl to 'John Doe'
  // }
  constructor() { }

  ngOnInit(): void {
  }

  profileForm = new FormGroup({
    firstName: new FormControl('',[
      Validators.required,
      Validators.minLength(5),
    ]),
    lastName: new FormControl('',[
      Validators.required,
      Validators.minLength(5),
    ]),
  })

  onSubmit() {
    console.warn(this.profileForm.value); // Log the value of the form when submitted
  }

  get firstName() {
    return this.profileForm.get('firstName'); // Get the FormControl for firstName
  }
  get lastName() {
    return this.profileForm.get('lastName'); // Get the FormControl for Lastname
  }



}
