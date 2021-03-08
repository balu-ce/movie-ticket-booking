import {Model, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class FindTheatre extends Model {
  @property({
    type: 'string',
  })
  theatre_name: string;

  @property({
    type: 'string',
    required: true,
  })
  city: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<FindTheatre>) {
    super(data);
  }
}

export interface FindTheatreRelations {
  // describe navigational properties here
}

export type FindTheatreWithRelations = FindTheatre & FindTheatreRelations;
