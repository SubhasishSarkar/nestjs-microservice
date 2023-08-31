import { Controller, Get } from '@nestjs/common';
import { Inject } from '@nestjs/common/decorators';
import { ClientProxy } from '@nestjs/microservices/client';
@Controller()
export class AppController {
  constructor(@Inject('AUTH_SERVICE') private authService: ClientProxy) {}

  @Get()
  async getUser() {
    return this.authService.send(
      {
        cmd: 'get_user',
      },
      {},
    );
  }
}
