import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  message = "hello from child again";

  @Input() childMessage: string | undefined;

  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage() {
    this.messageEvent.emit("hello from child")
  }

  showText = false; 

  toggleText(event : Object): void{
    this.showText = !this.showText;
    console.log(event)
    
  }

  todaysDate = new Date();

  isDisabled = true;

  onSave(){
    console.log("You Clicked on Save Button")
  }
}


