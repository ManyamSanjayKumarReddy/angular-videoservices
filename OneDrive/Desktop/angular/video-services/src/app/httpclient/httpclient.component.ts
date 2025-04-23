import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-httpclient',
  templateUrl: './httpclient.component.html',
  styleUrls: ['./httpclient.component.css']
})
export class HttpclientComponent implements OnInit {

  constructor(private dataService: DataService) { }

  posts: any = [];

  ngOnInit(): void {

    this.dataService.getData().subscribe((res) => {
      this.posts = res;
      console.log(res)
    })
  }

}
