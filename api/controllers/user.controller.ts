import User, { IUser } from "../models/user.model";
// Supertest para Integracion Test
//Logica de Negocio aquí -> Separar en capa "Interaccion/Conexion con la BD"

export class UserController{
  // constructor(conexion:Conexion){
  // }
    async getAllUsers() {
    const users = await User.findAll()
    return users
  }

  // //absctarct Conexion.ts 
  // @get()

  // //ConexionBD.ts extends AbsstarctConexion.ts

  // get(model:Model){

  //   const respnose = model.findAll()
  //   return response;
  // }

  // //ConexionMock.ts extends AbstractConexion.ts
  // get(model:Model){

  //   const respnose = {
  //     fa:'fadfa'
  //   }
  //   return response;
  // }

  public getUserByLastName(lastNameOfUser:string){

  }


  public getUserByAge(lastNameOfUser:string){

  }

  
    async createUser(user:IUser){
    const newUser = await User.create(user)
    return newUser
  }


  async deleteUser(userId:number){
    const userElimination = await User.destroy({where: {id: userId}})
  }

  async editUser(userId:number, editUser:IUser){
    const updateUser = await User.update({
      firstName: editUser.firstName,
      lastName: editUser.lastName,
      email: editUser.email,
      password: editUser.password
    },{
      where: {id: userId}
    });
  }
}