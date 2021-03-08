import {Model, model, property} from '@loopback/repository';

@model()
export class Payment extends Model {
  @property({
    type: 'string',
    required: true,
  })
  payee_user_id: string;

  @property({
    type: 'string',
    required: true,
  })
  payment_verified: string;


  constructor(data?: Partial<Payment>) {
    super(data);
  }
}

export interface PaymentRelations {
  // describe navigational properties here
}

export type PaymentWithRelations = Payment & PaymentRelations;
