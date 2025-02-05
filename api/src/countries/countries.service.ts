import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CountriesService {
  private readonly baseUrl: string;
  private readonly apiKey: string;

  constructor(private configService: ConfigService) {
    this.baseUrl = this.configService.get<string>('env.baseUrl');
    this.apiKey = this.configService.get<string>('env.apiKey');
  }

  async getCountries() {
    const response = await fetch(`${this.baseUrl}/all?fields=name,flags`, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': this.apiKey,
      },
    });
    const data = await response.json();
    return data;
  }
}
