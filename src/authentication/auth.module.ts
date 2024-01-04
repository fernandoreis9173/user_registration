import { PrismaService } from "src/prisma.service";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./jwt.strategy";
import { UserService } from "src/users/users.service";
import { UsersModule } from "src/users/users.module";
import { Module } from '@nestjs/common'
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";



@Module({
    controllers: [AuthController],
    providers: [AuthService, PrismaService, JwtStrategy, UserService],
    imports:[
        UsersModule,
        PassportModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            signOptions:{
                expiresIn: process.env.JWT_EXPIRES_IN
            }
        })
    ]
})

export class AuthModule{}