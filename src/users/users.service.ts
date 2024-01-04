import { PrismaService } from "src/prisma.service";
import { Users } from "./users.model";
import { ConflictException, Injectable } from "@nestjs/common";


@Injectable()
export class UserService{

        constructor(private prisma: PrismaService){}

        async getAllUser():Promise<Users[]>{
            return this.prisma.usersNest.findMany()
        }

        async createUser(data:Users): Promise<Users>{
            const existing = await this.prisma.usersNest.findUnique({
                where: {
                    username: data.username
                }
            })

            if(existing){
                throw new ConflictException('username already exists')
            }
            return this.prisma.usersNest.create({
                data
            })
        }
}