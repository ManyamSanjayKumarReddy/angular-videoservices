import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { LogmessageService } from '../logmessage.service';

@Component({
  selector: 'app-tempvar',
  templateUrl: './tempvar.component.html',
  styleUrls: ['./tempvar.component.css']
})
export class TempvarComponent implements OnInit {

  constructor(private logservice: LogmessageService, private renderer: Renderer2, private host: ElementRef) { }

  ngOnInit(): void {
    this.logservice.logmessage("This is coming from Services")
    this.renderer.setStyle(this.host.nativeElement, 'color', 'Green');
  }

  displayName = "";

  logUsername(value: string) {
    this.displayName = value;
  }

}
