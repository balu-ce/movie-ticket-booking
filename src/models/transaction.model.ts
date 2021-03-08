import {Entity, model, property} from '@loopback/repository';

@model()
export class Transaction extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  movie_name: string;

  @property({
    type: 'string',
    required: true,
  })
  theatre_name: string;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'Date',
    required: true,
  })
  show_dt: Date;

  @property({
    type: 'string',
    required: true,
  })
  show_time: string;

  @property({
    type: 'string',
    required: true,
  })
  booking_status: string;

  @property({
    type: 'string',
  })
  booked_email: string;

  @property({
    type: 'string',
    required: true,
  })
  seat_no: string;

  @property({
    type: 'string',
    required: true,
  })
  city: string;

  constructor(data?: Partial<Transaction>) {
    super(data);
  }
}

export interface TransactionRelations {
  // describe navigational properties here
}

export type TransactionWithRelations = Transaction & TransactionRelations;
