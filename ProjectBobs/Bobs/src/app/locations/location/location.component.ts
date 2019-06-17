import { Component, OnInit, Input } from '@angular/core';
import { Location } from 'src/app/state/locations/location.model';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  @Input() location: Location;

  constructor() { }

  ngOnInit() {
  }

}
