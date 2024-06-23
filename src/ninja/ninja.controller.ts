import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';

@Controller('ninja')
export class NinjaController {
  @Get()
  getninja() {
    return 'from get all ninjs';
  }
  @Get(':id')
  getNinjaById(@Param('id') id: string, @Query('name') name: string) {
    return { id, name };
  }
  @Post()
  addNinja(@Body() ninjaInfo: { name: string }) {
    return ninjaInfo;
  }
  @Put(':id')
  updateNinja(@Param('id') id: string, @Body() ninjaInfo: { name: string }) {
    return { id, ...ninjaInfo };
  }
}
