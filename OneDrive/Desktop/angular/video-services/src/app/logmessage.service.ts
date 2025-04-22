import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogmessageService {

  logmessage(msg: string): void{
    console.log(msg);

  }


  constructor() { }
}
