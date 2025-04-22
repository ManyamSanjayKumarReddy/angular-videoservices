import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete-items',
  templateUrl: './delete-items.component.html',
  styleUrls: ['./delete-items.component.css']
})
export class DeleteItemsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() deleteRequest = new EventEmitter<string>();

  delete(){
    this.deleteRequest.emit('item name')
  }

}
