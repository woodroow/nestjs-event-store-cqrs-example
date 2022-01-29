<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

Full example [nest-event-store-cqrs](https://github.com/woodroow/nestjs-event-store-cqrs-example) use KafkaJS as event-store module with [Nest](https://github.com/kamilmysliwiec/nest) and [CQRS](https://github.com/nestjs/cqrs).
   
## Description




After `HeroKilledDragonEvent` world service should respawn new dragon by doing `RespawnDragonCommand`
## Installation

```bash
$ npm install
```

## Running the app

```bash
# start kafka and kafka-ui
$ docker-compose up -d

# watch mode hero and world services
$ yarn start:dev hero
$ yarn start:dev world
```
