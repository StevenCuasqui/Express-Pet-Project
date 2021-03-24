import { DataTypes, Model, Optional } from "sequelize/types";
import { sequelize } from '.';

interface UserAttributes{
    id:string;
    firstName:string;
    lastName:string;
    email:string;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'>{}

interface UserInstance extends Model<UserAttributes, UserCreationAttributes>,
UserAttributes{
    createdAt?: Date;
    updatedAt?: Date;
}

export const User = sequelize.define<UserInstance>(
    'User',
    {
        id:{
            type: DataTypes.UUID,
            allowNull: false,
            autoIncrement: false,
            primaryKey: true,
            unique: true,
        },
        firstName: {
            allowNull: true,
            type: DataTypes.TEXT,
        },
        lastName: {
            allowNull: false,
            type: DataTypes.TEXT,
        },
        email:{
            allowNull: true,
            type: DataTypes.TEXT,
        }
    }
);