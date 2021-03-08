import {DefaultCrudRepository} from '@loopback/repository';
import {Theatres, TheatresRelations} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TheatresRepository extends DefaultCrudRepository<
  Theatres,
  typeof Theatres.prototype.id,
  TheatresRelations
> {
  constructor(
    @inject('datasources.Mongo') dataSource: MongoDataSource,
  ) {
    super(Theatres, dataSource);
  }
}
