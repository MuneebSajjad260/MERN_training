import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {CarDealerShip} from '../models';
import {CarDealerShipRepository} from '../repositories';

export class CarDealershipController {
  constructor(
    @repository(CarDealerShipRepository)
    public carDealerShipRepository : CarDealerShipRepository,
  ) {}

  @post('/dealerships')
  @response(200, {
    description: 'CarDealerShip model instance',
    content: {'application/json': {schema: getModelSchemaRef(CarDealerShip)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CarDealerShip, {
            title: 'NewCarDealerShip',
            
          }),
        },
      },
    })
    carDealerShip: CarDealerShip,
  ): Promise<CarDealerShip> {
    return this.carDealerShipRepository.create(carDealerShip);
  }

  @get('/dealerships/count')
  @response(200, {
    description: 'CarDealerShip model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(CarDealerShip) where?: Where<CarDealerShip>,
  ): Promise<Count> {
    return this.carDealerShipRepository.count(where);
  }

  @get('/dealerships')
  @response(200, {
    description: 'Array of CarDealerShip model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(CarDealerShip, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(CarDealerShip) filter?: Filter<CarDealerShip>,
  ): Promise<CarDealerShip[]> {
    return this.carDealerShipRepository.find(filter);
  }

  @patch('/dealerships')
  @response(200, {
    description: 'CarDealerShip PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CarDealerShip, {partial: true}),
        },
      },
    })
    carDealerShip: CarDealerShip,
    @param.where(CarDealerShip) where?: Where<CarDealerShip>,
  ): Promise<Count> {
    return this.carDealerShipRepository.updateAll(carDealerShip, where);
  }

  @get('/dealerships/{id}')
  @response(200, {
    description: 'CarDealerShip model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(CarDealerShip, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(CarDealerShip, {exclude: 'where'}) filter?: FilterExcludingWhere<CarDealerShip>
  ): Promise<CarDealerShip> {
    return this.carDealerShipRepository.findById(id, filter);
  }

  @patch('/dealerships/{id}')
  @response(204, {
    description: 'CarDealerShip PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CarDealerShip, {partial: true}),
        },
      },
    })
    carDealerShip: CarDealerShip,
  ): Promise<void> {
    await this.carDealerShipRepository.updateById(id, carDealerShip);
  }

  @put('/dealerships/{id}')
  @response(204, {
    description: 'CarDealerShip PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() carDealerShip: CarDealerShip,
  ): Promise<void> {
    await this.carDealerShipRepository.replaceById(id, carDealerShip);
  }

  @del('/dealerships/{id}')
  @response(204, {
    description: 'CarDealerShip DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.carDealerShipRepository.deleteById(id);
  }
}
