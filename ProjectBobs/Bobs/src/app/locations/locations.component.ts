import { Component, OnInit } from '@angular/core';
import { LocationsQuery } from '../state/locations/locations.query';
import { LocationsService } from '../state/locations/locations.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  public locations$ = this.locationsQuery.selectAll();
  
  constructor(
    private locationsQuery: LocationsQuery,
    private locationsService: LocationsService
  ) { }

  ngOnInit() {
    this.locationsService.get().subscribe();
  }

}
