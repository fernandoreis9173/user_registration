import { PrismaService } from "src/prisma.service";
import { Users } from "./users.model";
import { ConflictException, Injectable } from "@nestjs/common";


@Injectable()
export class UserService{

        constructor(private prisma: PrismaService){}

        async getAllUser():Promise<Users[]>{
            return this.prisma.usersNest.findMany()
        }

        async getUser(id:number): Promise<Users | null>{
            return this.prisma.usersNest.findUnique({
                where: {id:Number(id)}
            })
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

        async updateUser(id:number, data:Users): Promise<Users>{
            
            return this.prisma.usersNest.update({
                where: {id:Number(id)},
                data:{ name: data.name, email: data.email, username: data.username}
            })
        }

        async deleteUser(id:number): Promise<Users>{
            return this.prisma.usersNest.delete({
                where:{id: Number(id)}
            })
        }
}