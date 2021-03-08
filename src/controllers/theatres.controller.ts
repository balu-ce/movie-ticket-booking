import {

  repository
} from '@loopback/repository';
import {
  getModelSchemaRef,


  post,






  requestBody
} from '@loopback/rest';
import {Theatres} from '../models';
import {FindTheatre} from '../models/find-theatre.model';
import {TheatresRepository} from '../repositories';

export class TheatresController {
  constructor(
    @repository(TheatresRepository)
    public theatresRepository: TheatresRepository,
  ) { }

  @post('/theatres', {
    responses: {
      '200': {
        description: 'Theatres model instance',
        content: {'application/json': {schema: getModelSchemaRef(Theatres)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Theatres, {
            title: 'NewTheatres',
            exclude: ['id'],
          }),
        },
      },
    })
    theatres: Omit<Theatres, 'id'>,
  ): Promise<Theatres> {
    return this.theatresRepository.create(theatres);
  }

  @post('superops/findbyTheatres', {
    responses: {
      '200': {
        description: 'Theatres model instance',
        content: {'application/json': {schema: getModelSchemaRef(Theatres)}},
      },
    },
  })
  async findbyTheatres(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FindTheatre, {}),
        },
      },
    })
    input: FindTheatre,
  ): Promise<any> {
    const filter: any = {
      "where": {
        "city": input.city
      }
    }
    if (input.theatre_name) {
      filter["where"]["theatres"] = {"$elemMatch": {theatre_name: input.theatre_name}}
    }
    const res = await this.theatresRepository.findOne(filter);
    const theatres = res?.theatres || [];
    return theatres;

  }

}
