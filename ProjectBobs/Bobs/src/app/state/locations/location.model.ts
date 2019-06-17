import { ID } from '@datorama/akita';

export interface Location {
  id: ID;
  name: string;
  street: string;
  city: string;
  state: string;
  zip: string;
}

/**
 * A factory function that creates Locations
 */
export function createLocation(params: Partial<Location>) {
  return {

  } as Location;
}
