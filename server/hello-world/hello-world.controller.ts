import { Controller, Get, HttpCode } from '@nestjs/common';

@Controller('hello-world')
export class HelloWorldController {
  @Get()
  @HttpCode(200)
  welcome(): Object {
    return {message: 'Hello from server!'};
  }
}
