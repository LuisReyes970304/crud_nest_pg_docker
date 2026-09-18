import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { User } from './entities/user.entity.js';

const userList:User[]= [
  {
    id: 1,
    email: "email@example.com",
    password: "hashedPassword",
    name: "Luis Reyes",
    age: 13
  }
]

const findUser = (id: number): User | undefined => {
    return userList.find(user => user.id === id);
};

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    return { NewUser: createUserDto };
  }

  findAll() {
    return userList;
  }

  findOne(id: number) {
    const user = findUser(id);
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = findUser(id)
      if (!user) {
        throw new Error(`User with ID ${id} not found`); 
      }
    Object.assign(user, updateUserDto);
    return user
  }

  remove(id: number) {
    return userList.filter(u => u.id !== 1);
  }
}
