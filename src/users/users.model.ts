import { Prisma } from "@prisma/client";



export class Users implements Prisma.UsersNestCreateInput{
    name: string;
    password: string;
    username: string;
    email: string;
}