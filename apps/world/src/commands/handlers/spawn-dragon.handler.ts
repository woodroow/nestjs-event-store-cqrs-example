import { Logger } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { SpawnDragonCommand } from '../impl/spawn-dragon.command';

@CommandHandler(SpawnDragonCommand)
export class SpawnDragonHandler implements ICommandHandler<SpawnDragonCommand> {
  logger = new Logger(this.constructor.name);

  async execute(command: SpawnDragonCommand) {
    this.logger.verbose('Async SpawnDragonCommand...');
    return null;
  }
}
