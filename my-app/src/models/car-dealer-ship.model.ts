import {Entity, model, property, hasMany} from '@loopback/repository';
import { Address } from './address.model';
import {Car} from './car.model';

@model()
export class CarDealerShip extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  Name: string;

  @property({
    type: Address,
    required: true,
  })
  address: Address;

  @property({
    type: 'string',
    required: true,
  })
  phoneNumber: string;

  @hasMany(() => Car, {keyTo: 'carDealershipName'})
  cars: Car[];

  constructor(data?: Partial<CarDealerShip>) {
    super(data);
  }
}

export interface CarDealerShipRelations {
  // describe navigational properties here
}

export type CarDealerShipWithRelations = CarDealerShip & CarDealerShipRelations;
