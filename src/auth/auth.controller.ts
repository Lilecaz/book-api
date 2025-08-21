import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    async login(@Body() body: LoginDto) {
        const user = await this.authService.validateUser(body.username, body.password);
        if (!user) {
            throw new UnauthorizedException('Identifiants invalides');
        }
        return this.authService.login(user);
    }
    @Post('logout')
    async logout() {
        return { message: 'Déconnexion réussie' };
    }
    @Post('register')
    async register(@Body() body: LoginDto) {
        const user = await this.authService.register(body.username, body.password);
        if (!user) {
            throw new UnauthorizedException('Échec de l\'enregistrement');
        }
        return { message: 'Enregistrement réussi', user };
    }
}
