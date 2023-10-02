import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';

@Injectable()
export class UserRepository {
  private users: UserEntity[] = [];

  async save(user: UserEntity) {
    this.users.push(user);
  }

  async list() {
    return this.users;
  }

  async searchEmail(email: string) {
    const searchUser = this.users.find((user) => user.email === email);
    return searchUser !== undefined;
  }

  async update(id: string, updateData: Partial<UserEntity>) {
    const user = this.users.find((savedUser) => savedUser.id === id);
    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    Object.entries(updateData).forEach(([key, value]) => {
      if (key === 'id') return;
      user[key] = value;
    });

    return user;
  }
}
