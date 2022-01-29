import { Logger } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { RespawnDragonCommand } from '../impl/respawn-dragon.command';

@CommandHandler(RespawnDragonCommand)
export class RespawnDragonHandler
  implements ICommandHandler<RespawnDragonCommand>
{
  logger = new Logger(this.constructor.name);

  async execute(command: RespawnDragonCommand) {
    this.logger.verbose('Async RespawnDragonCommand...');
    return null;
  }
}
