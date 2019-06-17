import { ID } from '@datorama/akita';

export interface MenuItem {
  id: ID;
  icon: string;
  name: string;
  description: string;
  price: number;
}

/**
 * A factory function that creates MenuItems
 */
export function createMenuItem(params: Partial<MenuItem>) {
  return {

  } as MenuItem;
}
