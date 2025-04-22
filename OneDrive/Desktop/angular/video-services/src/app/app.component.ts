import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'video-services';
  showHelloComponent = true;

  toggleComponent() {
    this.showHelloComponent = !this.showHelloComponent;
  }

  deleteItem(item : string){
    console.log(item)
  }

  fontSizePx = 16;

}
