import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { LocationsStore, LocationsState } from './locations.store';
import { Location } from './location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationsQuery extends QueryEntity<LocationsState, Location> {

  constructor(protected store: LocationsStore) {
    super(store);
  }

}
