import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt} from 'passport-jwt';
import { PrismaService } from "src/prisma.service";
import { Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){

        constructor(private readonly prismaService:PrismaService){
            super({
                jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
                ignoreExpiration: false,
                secretOrKey: process.env.JWT_SECRET
            })
        }

        async validate(payload:{username:string}){
            const users = await this.prismaService.usersNest.findUnique({
                where:{
                    username: payload.username
                }
            })
            return users;
        }
}