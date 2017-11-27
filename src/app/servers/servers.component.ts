//import { setTimeout } from 'timers';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  
  allowBtn: boolean = false;
  classBtn: string = "btn-secondary";
  createServerStatus: string  = "No Server Created!"
  serverName: string = '';
 // someMsg: string = '';

  constructor() {
     setTimeout(()=>{ 
       this.allowBtn = true; 
       this.classBtn = "btn-primary"
      },2000);
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.classBtn = "btn-success";
    this.createServerStatus = `Server Created Successfully, with name: ${this.serverName}!`;
  }

}
