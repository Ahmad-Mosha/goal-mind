import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class LeaguesService {
  private readonly baseUrl: string;
  private readonly apiKey: string;

  constructor(private configService: ConfigService) {
    this.baseUrl = this.configService.get<string>('env.apiBaseUrl');
    this.apiKey = this.configService.get<string>('env.apiKey');
  }

  async getAllLeagues() {
    try {
      const response = await axios.get(`${this.baseUrl}/leagues`, {
        headers: {
          'X-API-KEY': this.apiKey,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getLeagueById(id: string) {
    try {
      const response = await axios.get(`${this.baseUrl}/leagues/${id}`, {
        headers: {
          'X-API-KEY': this.apiKey,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getLeagueStandings(id: string) {
    try {
      const response = await axios.get(
        `${this.baseUrl}/leagues/${id}/standings`,
        {
          headers: {
            'X-API-KEY': this.apiKey,
          },
        },
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
