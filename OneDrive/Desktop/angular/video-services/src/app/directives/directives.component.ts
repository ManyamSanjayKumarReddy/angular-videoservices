import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  template: `
  <div [ngClass]="currentClasses">
  Example
  </div>
  <div [ngStyle]="currentStyles">
  Sytles Modified
  </div>


  <input [(ngModel)]="name" type="text" id="example">
  <h1>Input is : {{ name }}</h1>

  <h1 *ngIf="isActive">Active</h1>
  <div *ngFor="let item of items, let i = index">

  <p>{{i}}</p>

  <p>{{item.name}}</p>  
  <p>{{item.age}}</p>  
  <p>{{item.place}}</p>  
  </div>

  <div [ngSwitch]="perlu.name">
    <div *ngSwitchCase="'sanju'"> Hi Sanju</div>
    <div *ngSwitchCase="'buddy'"> Hi Akka</div>
    <div *ngSwitchDefault="'sridevi'"> Hi Mom </div>
  </div>


  `,
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  isSpecial = true;
  currentClasses = {};
  currentStyles = {};
  name = 'Sanju'

  isActive = true;
  // items = ['Item 1', 'Item 2', 'Item 3'];
  items = [
    { name: 'Sanju' },
    { age: 25 },
    { place: 'Delhi' }
  ]

  perlu = {
    name : 'sridevi'
  }


  constructor() { }

  ngOnInit(): void {
    this.setCurrentClasses();
    this.setCurrentStyles()
  }

  setCurrentClasses() {
    this.currentClasses = {
      savable: true,
      modified: false,
      special: true

    }
  }

  setCurrentStyles() {
    this.currentStyles = {
      'font-style': 'italic',
      'font-weight': 'bold'
    }

  }


}
