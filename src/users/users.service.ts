import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

export type User = any;

@Injectable()
export class UsersService {
    private users = [
        {
            id: 1,
            username: 'celil',
            password: bcrypt.hashSync('changeme', 10),
        },
    ];

    async findOneByUsername(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
    async create(user: User): Promise<User> {
        const newUser = { ...user, id: this.users.length + 1 };
        this.users.push(newUser);
        return newUser;
    }
    async findOneById(id: number): Promise<User | undefined> {
        return this.users.find(user => user.id === id);
    }
    async findAll(): Promise<User[]> {
        return this.users;
    }
}
