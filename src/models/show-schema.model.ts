import {Model, model, property} from '@loopback/repository';

@model()
export class ShowSchema extends Model {
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


  constructor(data?: Partial<ShowSchema>) {
    super(data);
  }
}

export interface ShowSchemaRelations {
  // describe navigational properties here
}

export type ShowSchemaWithRelations = ShowSchema & ShowSchemaRelations;
