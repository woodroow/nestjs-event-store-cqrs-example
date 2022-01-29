import { Logger } from '@nestjs/common';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { HeroFoundItemEvent } from '../impl/hero-found-item.event';

@EventsHandler(HeroFoundItemEvent)
export class HeroFoundItemHandler implements IEventHandler<HeroFoundItemEvent> {
  logger = new Logger(this.constructor.name);

  handle(event: HeroFoundItemEvent) {
    this.logger.verbose('Async HeroFoundItemEvent...');
  }
}
