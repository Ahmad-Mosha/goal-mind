import { Controller, Get, Query } from '@nestjs/common';
import { PlayersService } from './players.service';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Get('seasons')
  async getSeasons(@Query('player') playerId?: string) {
    return this.playersService.getSeasons(playerId);
  }

  @Get('profiles')
  async getProfiles(
    @Query('page') page?: string,
    @Query('player') playerId?: string,
    @Query('search') search?: string,
  ) {
    const pageNumber = page ? parseInt(page, 10) : 1;
    return this.playersService.getProfiles(pageNumber, playerId, search);
  }

  @Get()
  async getStatistics(
    @Query('page') page?: string,
    @Query('player') playerId?: string,
    @Query('search') search?: string,
    @Query('team') teamId?: string,
    @Query('league') leagueId?: string,
    @Query('season') season?: string,
  ) {
    const pageNumber = page ? parseInt(page, 10) : 1;
    return this.playersService.getStatistics(
      pageNumber,
      playerId,
      search,
      teamId,
      leagueId,
      season,
    );
  }
}
