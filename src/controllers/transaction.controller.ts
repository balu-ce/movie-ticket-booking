import {authenticate} from '@loopback/authentication';
import {inject} from '@loopback/core';
import {
  AnyObject,
  AnyType,
  IsolationLevel,
  repository
} from '@loopback/repository';
import {
  getModelSchemaRef, HttpErrors, post, requestBody
} from '@loopback/rest';
import {SecurityBindings, securityId, UserProfile} from '@loopback/security';
import {Payment, Transaction} from '../models';
import {ShowSchema} from '../models/show-schema.model';
import {TransactionRepository} from '../repositories';
import {PaymentRepository} from '../repositories/payment.repository';
const _ = require('lodash');

export class TransactionController {
  constructor(
    @repository(TransactionRepository)
    public transactionRepository: TransactionRepository,
    @repository(PaymentRepository)
    public paymentRepository: PaymentRepository,
    @inject(SecurityBindings.USER, {optional: true})
    public user: UserProfile
  ) { }

  async verifyPayment(tx: any, key: string) {
    while (true) {
      const pr = await this.paymentRepository.get(key)
      if (pr == null) {
        //tx.rollback();
        break;
      }
      else {
        const pv = pr.payment_verified;
        if (pv == "verified") {
          tx.commit();
          break
        }
      }
    }
  }

  @authenticate('jwt')
  @post('/superops/booking_seat', {
    responses: {
      '200': {
        description: 'Transaction model instance',
        content: {'application/json': {schema: getModelSchemaRef(Transaction)}},
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
    seat: AnyObject,
  ): Promise<any> {
    if (seat.seat_no.length < 6) {
      const tx = await this.transactionRepository.beginTransaction({
        isolationLevel: IsolationLevel.READ_COMMITTED,
        timeout: 120000, // 30000ms = 30s
      });

      const filter: any = {
        'movie_name': seat.movie_name, 'theatre_name':
          seat.theatre_name, 'city': seat.city, 'show_dt': seat.show_dt, 'show_time': seat.show_time,
        'seat_no': {inq: seat.seat_no}, 'booking_status': 'open'
      }

      console.log(filter)

      const user_id = currentUserProfile[securityId];

      try {
        const created = await this.transactionRepository.updateAll({booking_status: 'booked', booked_email: user_id}, filter, {transaction: tx});
      } catch (err) {
        throw new HttpErrors[422]("One of the seat was already booked");
      }




      const payment_obj = {} as Payment;
      payment_obj.payee_user_id = user_id;
      payment_obj.payment_verified = "not_verified";
      const ran_no = Math.floor(Math.random() * 101);
      const now = Date.now(); // Unix timestamp in milliseconds
      const key = user_id + '_' + ran_no + '_' + now;
      await this.paymentRepository.set(key, payment_obj)
      await this.paymentRepository.expire(key, 120000)
      this.verifyPayment(tx, key);
      const res = filter;
      filter["booking_id"] = key;
      delete filter["booking_status"]
      return filter;
    }
    else {
      throw new HttpErrors[422]("Only 6 tickets allowed per person");
    }

  }

  @authenticate('jwt')
  @post('/superops/select_seats', {
    responses: {
      '200': {
        description: 'Transaction model instance',
        content: {'application/json': {schema: getModelSchemaRef(Transaction)}},
      },
    },
  })
  async select_seats(
    @inject(SecurityBindings.USER)
    currentUserProfile: UserProfile,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AnyType),
        },
      },
    })
    seat: AnyObject,
  ): Promise<any> {

    const tx = await this.transactionRepository.beginTransaction({
      isolationLevel: IsolationLevel.READ_COMMITTED,
      timeout: 120000, // 30000ms = 30s
    });

    const filter: any = {
      'movie_name': seat.movie_name, 'theatre_name':
        seat.theatre_name, 'city': seat.city, 'show_dt': seat.show_dt, 'show_time': seat.show_time
    }

    console.log(filter);

    const seats = await this.transactionRepository.find(filter);

    tx.commit();

    return seats;
  }

  @post('/superops/available_shows', {
    responses: {
      '200': {
        description: 'Transaction model instance',
        content: {'application/json': {schema: getModelSchemaRef(AnyType)}},
      },
    },
  })
  async available_shows(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ShowSchema, {}),
        },
      },
    })
    showSchema: ShowSchema,
  ): Promise<any> {

    const tx = await this.transactionRepository.beginTransaction({
      isolationLevel: IsolationLevel.READ_COMMITTED,
      timeout: 120000, // 30000ms = 30s
    });

    const filter: any = {
      'movie_name': showSchema.movie_name, 'theatre_name':
        showSchema.theatre_name, 'city': showSchema.city
    }

    const shows = await this.transactionRepository.find(filter);
    var grouped = _.groupBy(shows, 'show_dt');
    const res: any = {};
    for (let key in grouped) {
      var grouped_show: any = _.groupBy(grouped[key], 'show_time');
      res[key] = [];
      for (let y in grouped_show) {
        res[key].push(y)
      }
    }
    tx.commit();
    return res;
  }

}
