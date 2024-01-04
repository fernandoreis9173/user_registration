import { Request, Response } from "express";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login-user.dto";
import { Controller, Post, Req, Res, Body } from "@nestjs/common";
import { RegisterUsersDto } from "./dto/register-user.dtp";



@Controller('/auth')
export class AuthController{

        constructor(private readonly authService: AuthService){}

        @Post('/login')
        async login(@Req() request:Request, @Res() response: Response, @Body() loginDto: LoginDto):Promise<any>{
            try {
                const result = await this.authService.login(loginDto);
                return response.status(200).json({
                    status: 'ok!',
                    message: 'Successfully login!',
                    result: result
                })
            } catch (err) {
                return response.status(501).json({
                    status: 'Error!',
                    message: 'Internal Server Error!',
                })
            }
        }

        @Post('/register')
        async register(@Req() request:Request, @Res() response: Response, @Body() registerDto: RegisterUsersDto):Promise<any>{
            try {
                const result = await this.authService.register(registerDto);
                return response.status(200).json({
                    status: 'ok!',
                    message: 'Successfully register users!',
                    result: result
                })
            } catch (err) {
                console.error(err);
                return response.status(500).json({
                    status: 'Error!',
                    message: 'Internal Server Error!',
                })
            }
        }
}