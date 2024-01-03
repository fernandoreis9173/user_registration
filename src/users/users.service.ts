import { PrismaService } from "src/prisma.service";
import { Users } from "./users.model";
import { Injectable } from "@nestjs/common";


@Injectable()
export class UserService{

        constructor(private prisma: PrismaService){}

        async getAllUser():Promise<Users[]>{
            return this.prisma.usersNest.findMany()
        }
}