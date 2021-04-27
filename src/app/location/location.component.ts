import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

    // Implement validation based upon actual city names

    locationinput: string = "";

    onKey (event: any) {
	this.locationinput = event.target.value;
    }

    constructor() { }

  ngOnInit(): void {

  }

}