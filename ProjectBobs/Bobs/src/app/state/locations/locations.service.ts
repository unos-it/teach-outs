import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { LocationsStore } from './locations.store';
import { Location } from './location.model';
import { tap } from 'rxjs/operators';
import { ApiResponse } from '../api-response';
import { LocationsQuery } from './locations.query';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LocationsService {

  constructor(
    private locationsQuery: LocationsQuery,
    private locationsStore: LocationsStore,
    private http: HttpClient
  ) {
  }

  get() {
    const request$ = this.http.get<ApiResponse<Location[]>>('assets/locations.json').pipe(
      tap(data => this.locationsStore.set(data.Value))
    );

    return this.locationsQuery.getHasCache() ? of() : request$;
  }

}
