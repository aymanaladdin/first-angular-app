import { Component } from '@angular/core';

//Decorator-->
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})

export class ServerComponent {
    name: string = 'Server'
    model: string = '4.3.2'
}