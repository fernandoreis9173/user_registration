import { Req, Res } from "@nestjs/common";
import { UserService } from "./users.service";
import { Request, Response } from 'express';


export class UsersController {
    constructor(private readonly userService : UserService){}

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
}