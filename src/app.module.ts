import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleStrategy } from './Authentication/google.strategy';
import { TodoModule } from './todo/todo.module';
import { SequelizeModule } from '@nestjs/sequelize';


@Module({
  imports: [ 
    SequelizeModule.forRoot({
    dialect: 'mysql',
    host: process.env.DB_HOST || 'alphapod-database-development.cgcuzja2fgfv.ap-southeast-1.rds.amazonaws.com',
    port: 3306,
    username: process.env.DB_USERNAME || 'finalyst-dev',
    password: process.env.DB_PASSWORD || '!PV.F*VA96JD2n*CyLD.wD',
    database: process.env.DB_DATABASE ||  'finalyst_dev',
    autoLoadModels: true,
    synchronize: true,
  }),
  TodoModule
  ],
  controllers: [AppController],
  providers: [AppService, GoogleStrategy],
})
export class AppModule {}
