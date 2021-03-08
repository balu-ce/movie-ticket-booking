import {inject} from '@loopback/core';
import {DefaultTransactionalRepository} from '@loopback/repository';
import {MySqlDataSource} from '../datasources';
import {Transaction, TransactionRelations} from '../models';

export class TransactionRepository extends DefaultTransactionalRepository<
  Transaction,
  typeof Transaction.prototype.id,
  TransactionRelations
> {
  constructor(
    @inject('datasources.MySql') dataSource: MySqlDataSource,
  ) {
    super(Transaction, dataSource);
  }
}
