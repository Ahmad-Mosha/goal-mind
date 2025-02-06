import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class PlayersService {
  private readonly baseUrl: string;
  private readonly apiKey: string;

  constructor(private configService: ConfigService) {
    this.baseUrl = this.configService.get<string>('env.baseUrl');
    this.apiKey = this.configService.get<string>('env.apiKey');
  }

  async getStatistics(
    page: number = 1,
    playerId?: string,
    search?: string,
    teamId?: string,
    leagueId?: string,
    season?: string,
  ) {
    try {
      if (!this.baseUrl) {
        throw new Error('API Base URL is not configured');
      }

      let url = `${this.baseUrl}/players`;
      const params = new URLSearchParams();

      if (page > 1) {
        params.append('page', page.toString());
      }
      if (playerId) {
        params.append('player', playerId);
      }
      if (search && search.length >= 4) {
        params.append('search', search);
      }
      if (teamId) {
        params.append('team', teamId);
      }
      if (leagueId) {
        params.append('league', leagueId);
      }
      if (season) {
        params.append('season', season);
      }

      const queryString = params.toString();
      if (queryString) {
        url += `?${queryString}`;
      }

      const response = await axios.get(url, {
        headers: {
          'x-rapidapi-key': this.apiKey,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getSeasons(playerId?: string) {
    try {
      if (!this.baseUrl) {
        throw new Error('API Base URL is not configured');
      }
      const url = playerId
        ? `${this.baseUrl}/players/seasons?player=${playerId}`
        : `${this.baseUrl}/players/seasons`;
      const response = await axios.get(url, {
        headers: {
          'x-rapidapi-key': this.apiKey,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getProfiles(page: number = 1, playerId?: string, search?: string) {
    try {
      if (!this.baseUrl) {
        throw new Error('API Base URL is not configured');
      }

      let url = `${this.baseUrl}/players/profiles`;
      const params = new URLSearchParams();

      if (page > 1) {
        params.append('page', page.toString());
      }
      if (playerId) {
        params.append('player', playerId);
      }
      if (search && search.length >= 3) {
        params.append('search', search);
      }

      const queryString = params.toString();
      if (queryString) {
        url += `?${queryString}`;
      }

      const response = await axios.get(url, {
        headers: {
          'x-rapidapi-key': this.apiKey,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
