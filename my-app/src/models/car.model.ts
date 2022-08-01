import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Car extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  make: string;

  @property({
    type: 'string',
    required: true,
  })
  model?: string;

  @property({
    type: 'number',
    required: true,
  })
  price?: number;

  @property({
    type: 'string',
  })
  carDealershipName?: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Car>) {
    super(data);
  }
}

export interface CarRelations {
  // describe navigational properties here
}

export type CarWithRelations = Car & CarRelations;
