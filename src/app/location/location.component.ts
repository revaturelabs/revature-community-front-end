import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

    // Implement validation based upon actual city names

    locationform: string = "";

    onKey (event: any) {
	this.locationform = event.target.value;
    }

    constructor() { }

  ngOnInit(): void {

  }

}