import {Entity, model, property} from '@loopback/repository';

interface Movie {
  "movie_name": string,
  "movie_rating": number,
}

interface Theatre {
  "theatre_name": string,
  "theatre_db_conn_id": string,
  "movies": Movie[]
}

@model({settings: {strict: false}})
export class Theatres extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  city: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
  theatres: Theatre[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Theatres>) {
    super(data);
  }
}

export interface TheatresRelations {
  // describe navigational properties here
}

export type TheatresWithRelations = Theatres & TheatresRelations;
