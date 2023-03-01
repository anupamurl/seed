 
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users , UserDocument }  from "./users.schema";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(@InjectModel(Users.name) private userModel: Model<UserDocument>) {}
 

  async create(user: User   ) {  
    const newBook = new this.userModel(user);
   return await newBook.save();
  }

  async findAll() {
   return await this.userModel.find().exec()
  }

  async findOne(id: number) {
    return await this.userModel.findById(id).exec();
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.userModel.findByIdAndUpdate(id, User, {new: true})
  }

  async remove(id: number) {
    return await this.userModel.findByIdAndRemove(id);
  }
}

 