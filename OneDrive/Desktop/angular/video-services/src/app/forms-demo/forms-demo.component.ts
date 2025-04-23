import { Component, OnInit } from '@angular/core';
import { Pet } from './pet.model';

@Component({
  selector: 'app-forms-demo',
  templateUrl: './forms-demo.component.html',
  styleUrls: ['./forms-demo.component.css']
})
export class FormsDemoComponent implements OnInit {

  species = ['Dog', 'Cat', 'Fish', 'Bird', 'Reptile'];

  model = new Pet(1, 'Dog', this.species[0]);

  submitted = false;
  

  onSubmit() {
    this.submitted = true;
  }

  constructor() { }


  ngOnInit(): void {
  }

}
