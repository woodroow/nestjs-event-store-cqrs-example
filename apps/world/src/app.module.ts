import { HeroKilledDragonEvent } from '@app/core';
import { Module } from '@nestjs/common';
import { EventStoreModule } from 'nestjs-event-store-cqrs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommandHandlers } from './commands/handlers';
import { WorldSagas } from './sagas/world.sagas';

@Module({
  imports: [
    EventStoreModule.forRoot({
      client: {
        clientId: 'world',
        brokers: ['localhost:9093'],
      },
      consumer: {
        groupId: 'world-consumer',
      },
      eventHandlers: {
        HeroKilledDragonEvent: (heroId, dragonId) =>
          new HeroKilledDragonEvent(heroId, dragonId),
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, WorldSagas, ...CommandHandlers],
})
export class AppModule {}
