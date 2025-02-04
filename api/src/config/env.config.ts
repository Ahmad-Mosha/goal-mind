import { registerAs } from '@nestjs/config';

export default registerAs('env', () => ({
  jwtSecret: process.env.JWT_SECRET,
  apiKey: process.env.API_KEY,
  baseUrl: process.env.BASE_URL,
}));
