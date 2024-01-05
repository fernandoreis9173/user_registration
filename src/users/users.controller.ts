import { Body, Controller, Delete, Get, Param, Put, Req, Res, UseGuards } from "@nestjs/common";
import { UserService } from "./users.service";
import { Request, Response } from 'express';
import { JwtAuthGuard } from "src/authentication/auth.guard";
import { Users } from "./users.model";

@Controller('users')
export class UsersController {
    constructor(private readonly userService : UserService){}

    @Get()
    // @UseGuards(JwtAuthGuard)
    async getAllUsers(@Req() request: Request, @Res() response: Response):Promise<any>{
        try {
                const result = await this.userService.getAllUser();
                return response.status(200).json({
                    status: 'ok!',
                    message: 'Successfully fetch data!',
                    result: result
                })
        } catch (err) {
            return response.status(500).json({
                status: 'ok!',
                message: 'Internal Server Error!'
            })
        }
    }

    @Get(':id')
    async getUsers(@Param('id') id:number): Promise<Users | null>{
        return this.userService.getUser(id)
    }

    @Delete(':id')
    async deleteUsers(@Param('id') id:number): Promise<Users>{
        return this.userService.deleteUser(id)
    }

    @Put(':id')
    async updateUsers(@Param('id') id:number, @Body() postData: Users): Promise<Users>{
        console.log("passou aqui", id, postData);
        return this.userService.updateUser(id, postData)
    }
}