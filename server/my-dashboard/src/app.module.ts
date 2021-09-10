import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ServicesModule } from './services/services.module';
import { WidgetsModule } from './widgets/widgets.module';
import { ParamsModule } from './params/params.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://chrystal:test123@cluster0.ddzky.mongodb.net/dashboard?retryWrites=true&w=majority',
    ),
    ServicesModule,
    WidgetsModule,
    ParamsModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
