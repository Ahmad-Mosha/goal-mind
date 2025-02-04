import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class TeamsService {
  private readonly baseUrl: string;
  private readonly apiKey: string;

  constructor(private configService: ConfigService) {
    this.baseUrl = this.configService.get<string>('env.apiBaseUrl');
    this.apiKey = this.configService.get<string>('env.apiKey');
  }

  async getAllTeams() {
    try {
      const response = await axios.get(`${this.baseUrl}/teams`, {
        headers: {
          'X-API-KEY': this.apiKey,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getTeamById(id: string) {
    try {
      const response = await axios.get(`${this.baseUrl}/teams/${id}`, {
        headers: {
          'X-API-KEY': this.apiKey,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getTeamFixtures(id: string) {
    try {
      const response = await axios.get(`${this.baseUrl}/teams/${id}/fixtures`, {
        headers: {
          'X-API-KEY': this.apiKey,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getTeamPlayers(id: string) {
    try {
      const response = await axios.get(`${this.baseUrl}/teams/${id}/players`, {
        headers: {
          'X-API-KEY': this.apiKey,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
