import User, { IUser } from "../../models/user.model";

export interface IController{
    getAll() :Promise<User[]>;
    getOne( id:number ):Promise<User>
    create( user:IUser ) :Promise<User>;
    edit( id:number, user:IUser ) :Promise<User | null>;
    delete( id:number ) :Promise<string>
}