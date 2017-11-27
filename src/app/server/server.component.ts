import { Component } from '@angular/core';

//Decorator-->
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})

export class ServerComponent {
    id: string = '';
    status: string = '';

    constructor(){
        this.id = "ABC" + (Math.floor(Math.random() * 10000));
        this.status =  ((Math.floor(Math.random() * 100) < 20)? 'offline' : ((Math.floor(Math.random() * 100) < 40)? 'connecting' : 'online';
        setTimeout(()=>{ this.status = "online"},(Math.floor(Math.random() * 1000) + 2000));
    }
}

