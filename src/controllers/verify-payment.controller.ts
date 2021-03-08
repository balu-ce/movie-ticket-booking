// Uncomment these imports to begin using these cool features!

import {authenticate} from '@loopback/authentication';
import {inject} from '@loopback/core';
import {AnyObject, AnyType, repository} from '@loopback/repository';
import {getModelSchemaRef, HttpErrors, post, requestBody} from '@loopback/rest';
import {SecurityBindings, securityId, UserProfile} from '@loopback/security';
import {Payment} from '../models';
import {PaymentRepository} from '../repositories/payment.repository';

// import {inject} from '@loopback/core';


export class VerifyPaymentController {
  constructor(
    @repository(PaymentRepository)
    public paymentRepository: PaymentRepository,
    @inject(SecurityBindings.USER, {optional: true})
    public user: UserProfile
  ) { }

  paymentService() {
    console.log("Payment Done")
  }

  @authenticate('jwt')
  @post('/payment_gateway', {
    responses: {
      '200': {
        description: 'Transaction model instance',
        content: {'application/json': {schema: getModelSchemaRef(AnyType)}},
      },
    },
  })
  async create(
    @inject(SecurityBindings.USER)
    currentUserProfile: UserProfile,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AnyType),
        },
      },
    })
    payment_info: AnyObject,
  ): Promise<any> {
    const k = payment_info.booking_id
    const pr = await this.paymentRepository.get(k);
    const user_id = currentUserProfile[securityId];
    if (pr == null) {
      throw new HttpErrors[422]("Booking TimeOut");
    }
    else {
      this.paymentService();
      const payment_obj = {} as Payment;
      payment_obj.payee_user_id = user_id;
      payment_obj.payment_verified = "verified";
      await this.paymentRepository.set(k, payment_obj);
      await this.paymentRepository.expire(k, 360000)
      return {
        "status": "Tickets will sent to your mail or phone no"
      }
    }
  }

}
