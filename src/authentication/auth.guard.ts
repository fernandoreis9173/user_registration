import { ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "./auth.service";



export class JwtAuthGuard extends AuthGuard('jwt'){

    constructor(private jwtService: JwtService, private authService: AuthService) {
        super(jwtService, authService)
    }
    
    canActivate(context: ExecutionContext){
        return super.canActivate(context)
    }

    // async canActivate(context: ExecutionContext): Promise<boolean> {
    //     const request = context.switchToHttp().getRequest();
    //     const authHeader = request.headers.authorization;
    
    //     if (!authHeader) {
    //       throw new UnauthorizedException('Token not found');
    //     }
    
    //     const token = authHeader.split(' ')[1];
    
    //     // Verificar se o token está revogado
    //     // const isRevoked = await this.authService.isTokenRevoked(token);
    //     // if (isRevoked) {
    //     //   throw new UnauthorizedException('Token is invalid');
    //     // }
    
    //     try {
    //       const decoded = this.jwtService.verify(token);
    //       request.user = decoded;
    //       return true;
    //     } catch (error) {
    //       throw new UnauthorizedException('Token is expired or invalid');
    //     }
    //   }

    handleRequest(err,user,info){
        if(err || !user){
            throw err || new UnauthorizedException();
        }
        return user
    }
}