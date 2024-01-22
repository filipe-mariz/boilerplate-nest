import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseProviders, sequelizeModule } from './database/database.providers';
import { UsersModule } from './app/modules/users/users.module';
import { LoginModule } from './app/modules/login/login.module';

@Module({
  imports: [
    UsersModule,
    sequelizeModule,
    LoginModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ...databaseProviders
  ]
})

export class AppModule {}
