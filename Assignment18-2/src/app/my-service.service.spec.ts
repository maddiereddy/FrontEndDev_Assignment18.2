/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyService } from './my-service.service';


describe('MyServiceService', () => {
  /*beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyServiceService]
    });
  });

  it('should ...', inject([MyServiceService], (service: MyServiceService) => {
    expect(service).toBeTruthy();
  }));*/

    let service: MyService = new MyService();

    //check if we get the first 5 friends in the array
    it('Should get 5 friends', () => {
        let items = service.getFriends(5);
        expect(items).toEqual(['Durga', 'Tamara', 'Sharon', 'Kelly', 'Jack']);
    });

    //check if we get the whole array when we request a 100
    it('Should get all friends', () => {
        let items = service.getFriends(100);
        expect(items).toEqual(['Durga', 'Tamara', 'Sharon', 'Kelly', 'Jack', 'Robert', 'Andrew', 'Susan', 'Anita', 'Geoff', 'Jim']);
    });
});

