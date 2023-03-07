import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { User, UserSchema,  } from './schema/user.schema';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports:[
    PassportModule.register({ defaultStrategy: "jwt" }),
    MongooseModule.forFeature([{name:User.name, schema: UserSchema}]),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports:[UserService],
})
export class UserModule {}
