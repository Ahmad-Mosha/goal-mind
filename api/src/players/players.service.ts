import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class PlayersService {
  private readonly baseUrl: string;
  private readonly apiKey: string;

  constructor(private configService: ConfigService) {
    this.baseUrl = this.configService.get<string>('env.apiBaseUrl');
    this.apiKey = this.configService.get<string>('env.apiKey');
  }

  async getAllPlayers() {
    try {
      const response = await axios.get(`${this.baseUrl}/players`, {
        headers: {
          'X-API-KEY': this.apiKey,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getPlayerById(id: string) {
    try {
      const response = await axios.get(`${this.baseUrl}/players/${id}`, {
        headers: {
          'X-API-KEY': this.apiKey,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getPlayerInjuries(id: string) {
    try {
      const response = await axios.get(
        `${this.baseUrl}/players/${id}/injuries`,
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

  async getPlayerTransfers(id: string) {
    try {
      const response = await axios.get(
        `${this.baseUrl}/players/${id}/transfers`,
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
