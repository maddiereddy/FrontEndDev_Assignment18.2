import { Component, OnInit } from '@angular/core';
import { MyService } from '../my-service.service';

//this components gets 5 friends from the service and displays them in the view

@Component({
  selector: 'my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent implements OnInit {

    friends: string[];
    myService: MyService;

    constructor(myService: MyService) {
        this.myService = myService;
    }

    ngOnInit() {
        this.friends = this.myService.getFriends(5);
    }
}
