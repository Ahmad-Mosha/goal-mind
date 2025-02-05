import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class TimezoneService {
  private readonly baseUrl: string;
  private readonly apiKey: string;

  constructor(private configService: ConfigService) {
    this.baseUrl = this.configService.get<string>('env.baseUrl');
    this.apiKey = this.configService.get<string>('env.apiKey');
  }

  async getTimezones() {
    try {
      const response = await axios.get(`${this.baseUrl}/timezone`, {
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
