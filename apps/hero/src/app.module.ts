import { HeroKilledDragonEvent } from '@app/core';
import { Module } from '@nestjs/common';
import { EventStoreModule } from 'nestjs-event-store-cqrs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroesGameModule } from './heroes/heroes.module';

@Module({
  imports: [
    HeroesGameModule,
    EventStoreModule.forRoot({
      client: {
        clientId: 'hero',
        brokers: ['localhost:9093'],
      },
      consumer: {
        groupId: 'hero-consumer',
      },
      eventHandlers: {
        HeroKilledDragonEvent: (heroId, dragonId) =>
          new HeroKilledDragonEvent(heroId, dragonId),
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
