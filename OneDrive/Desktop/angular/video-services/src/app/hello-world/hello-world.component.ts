import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit, OnDestroy {
  title = "Hello World!";
  intervalSub: any;

  ngOnInit() {
    this.intervalSub = setInterval(() => {
      console.log("Hello from NgOnInit");
    }, 1000);
  }

  ngOnDestroy() {
    console.log("Hello from NgOnDestroy");
    if (this.intervalSub) {
      clearInterval(this.intervalSub);
    }
  }

  getMin(a : number,b: number){
    return a < b ? a : b;
  }
}
