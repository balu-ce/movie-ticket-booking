import {inject} from '@loopback/core';
import {DefaultKeyValueRepository} from '@loopback/repository';
import {RedisDataSource} from '../datasources/redis.datasource';
import {Payment} from '../models';

export class PaymentRepository extends DefaultKeyValueRepository<
  Payment
> {
  constructor(
    @inject('datasources.Redis') dataSource: RedisDataSource,
  ) {
    super(Payment, dataSource);
  }
}
