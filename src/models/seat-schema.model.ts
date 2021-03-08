import {Model, model, property} from '@loopback/repository';

@model()
export class SeatSchema extends Model {
  @property({
    type: 'string',
    required: true,
  })
  city: string;

  @property({
    type: 'string',
    required: true,
  })
  theatre_name: string;

  @property({
    type: 'string',
    required: true,
  })
  movie_name: string;

  @property({
    type: 'date',
    required: true,
  })
  movie_dt: string;

  @property({
    type: 'number',
    required: true,
  })
  movie_time: number;

  /*@property({
    type: 'array',
    required: true,
  })
  seats: string[];*/




  constructor(data?: Partial<SeatSchema>) {
    super(data);
  }
}

export interface SeatSchemaRelations {
  // describe navigational properties here
}

export type SeatSchemaWithRelations = SeatSchema & SeatSchemaRelations;
