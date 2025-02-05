import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './config/database.config';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import envConfig from './config/env.config';
import { LeaguesModule } from './leagues/leagues.module';
import { TeamsModule } from './teams/teams.module';
import { PlayersModule } from './players/players.module';
import { TimezoneModule } from './timezone/timezone.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [envConfig],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(databaseConfig),
    AuthModule,
    UsersModule,
    LeaguesModule,
    TeamsModule,
    TimezoneModule,
    PlayersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
