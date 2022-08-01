import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  CarDealerShip,
  Car,
} from '../models';
import {CarDealerShipRepository} from '../repositories';

export class CarDealerShipCarController {
  constructor(
    @repository(CarDealerShipRepository) protected carDealerShipRepository: CarDealerShipRepository,
  ) { }

  @get('/car-dealer-ships/{id}/cars', {
    responses: {
      '200': {
        description: 'Array of CarDealerShip has many Car',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Car)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Car>,
  ): Promise<Car[]> {
    return this.carDealerShipRepository.cars(id).find(filter);
  }

  @post('/car-dealer-ships/{id}/cars', {
    responses: {
      '200': {
        description: 'CarDealerShip model instance',
        content: {'application/json': {schema: getModelSchemaRef(Car)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof CarDealerShip.prototype.Name,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Car, {
            title: 'NewCarInCarDealerShip',
            exclude: ['id'],
            optional: ['carDealershipName']
          }),
        },
      },
    }) car: Omit<Car, 'id'>,
  ): Promise<Car> {
    return this.carDealerShipRepository.cars(id).create(car);
  }

  @patch('/car-dealer-ships/{id}/cars', {
    responses: {
      '200': {
        description: 'CarDealerShip.Car PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Car, {partial: true}),
        },
      },
    })
    car: Partial<Car>,
    @param.query.object('where', getWhereSchemaFor(Car)) where?: Where<Car>,
  ): Promise<Count> {
    return this.carDealerShipRepository.cars(id).patch(car, where);
  }

  @del('/car-dealer-ships/{id}/cars', {
    responses: {
      '200': {
        description: 'CarDealerShip.Car DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Car)) where?: Where<Car>,
  ): Promise<Count> {
    return this.carDealerShipRepository.cars(id).delete(where);
  }
}
