import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

export type User = any;

@Injectable()
export class UsersService {
    private users = [
        {
            id: 1,
            username: 'celil',
            password: bcrypt.hashSync('changeme', 10), // mot de passe hashé
        },
    ];

    async findOneByUsername(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}
