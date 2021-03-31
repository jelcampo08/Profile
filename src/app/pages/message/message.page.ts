import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
  contents ="";
  createdAt ="";
  messages = [];

  constructor() { }

  sendMsg(){
    let messagess = {
    contents: this.contents,
    createdAt: new Date().getTime()

  }
  this.messages.push(messagess);
  this.clearField();
}
clearField(){
  this.contents ="";

}

  ngOnInit() {
  }

}
