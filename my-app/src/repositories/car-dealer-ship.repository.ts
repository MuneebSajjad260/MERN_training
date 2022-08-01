import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {CarDealerShip, CarDealerShipRelations, Car} from '../models';
import {CarRepository} from './car.repository';

export class CarDealerShipRepository extends DefaultCrudRepository<
  CarDealerShip,
  typeof CarDealerShip.prototype.Name,
  CarDealerShipRelations
> {

  public readonly cars: HasManyRepositoryFactory<Car, typeof CarDealerShip.prototype.Name>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('CarRepository') protected carRepositoryGetter: Getter<CarRepository>,
  ) {
    super(CarDealerShip, dataSource);
    this.cars = this.createHasManyRepositoryFactoryFor('cars', carRepositoryGetter,);
    this.registerInclusionResolver('cars', this.cars.inclusionResolver);
  }
}
