import { HeroKilledDragonEvent } from '@app/core';
import { Injectable, Logger } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { DropAncientItemCommand } from '../commands/impl/drop-ancient-item.command';
const itemId = '0';

@Injectable()
export class HeroesGameSagas {
  logger = new Logger(this.constructor.name);
  @Saga()
  dragonKilled = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(HeroKilledDragonEvent),
      delay(1000),
      map((event) => {
        this.logger.verbose('Inside [HeroesGameSagas] Saga');
        return new DropAncientItemCommand(event.heroId, itemId);
      }),
    );
  };
}
