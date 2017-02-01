import { Injectable } from '@angular/core';

//this service takes in a number and returns that many array items in an array
//if this number is more than the array length, it returns the whole array

@Injectable()
export class MyService {

  friends:Array<string>;

  constructor() {
    this.friends = ['Durga', 'Tamara', 'Sharon', 'Kelly', 'Jack', 'Robert', 'Andrew', 'Susan', 'Anita', 'Geoff', 'Jim'];
  }

  getFriends(count:number) {
    var result = [];

    if (count > this.friends.length) count = this.friends.length;

    for (var i=0; i<count; i++) {
      result.push(this.friends[i]);
    }

    return result;
  }

}
