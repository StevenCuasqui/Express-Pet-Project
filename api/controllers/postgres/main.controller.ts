import User, { IUser } from "../../models/user.model";
import { IController } from "./IController";

export class MainController implements IController{
    
    async getAll(): Promise<User[]> {
        const allUser: User[] = await User.findAll();
        return allUser;
    }
    
    getOne(id: number): Promise<User> {
        const user = User.findByPk(id);
        return user;
    }

    async create(user:User) :Promise<User>{
        const newUser = await User.create(user);
        return newUser
    }

    async edit(id: number, user: IUser): Promise<User> {
        const updatedUser = {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password
        }

        const update = User.update(updatedUser, { where: {id} }).then((user)=>{
            return user
        })
        .catch(()=>{
            return null
        });
        return update
    }

    async delete(id: number): Promise<string> {
        const deleteU = User.destroy({ where: {id} }).then(()=>{
            return "Succesfully deleted user!";
        })
        .catch(()=>{
            return "Couldn't delete user"
        })
        return deleteU;
    }

    
}