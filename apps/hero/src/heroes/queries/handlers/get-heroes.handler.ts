import { Logger } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { HeroRepository } from '../../repository/hero.repository';
import { GetHeroesQuery } from '../impl';

@QueryHandler(GetHeroesQuery)
export class GetHeroesHandler implements IQueryHandler<GetHeroesQuery> {
  constructor(private readonly repository: HeroRepository) {}

  logger = new Logger(this.constructor.name);

  async execute(query: GetHeroesQuery) {
    this.logger.verbose('Async GetHeroesQuery...');
    return this.repository.findAll();
  }
}
