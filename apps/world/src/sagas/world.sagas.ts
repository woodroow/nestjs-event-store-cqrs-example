import { HeroKilledDragonEvent } from '@app/core';
import { Injectable, Logger } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { RespawnDragonCommand } from '../commands/impl/respawn-dragon.command';

@Injectable()
export class WorldSagas {
  logger = new Logger(this.constructor.name);
  @Saga()
  respawnDragon = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(HeroKilledDragonEvent),
      delay(1000),
      map((event) => {
        this.logger.verbose('Inside [WorldSagas] Saga respawn new dragon');

        return new RespawnDragonCommand();
      }),
    );
  };
}
