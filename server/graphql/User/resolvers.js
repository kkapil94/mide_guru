import { UserModel } from "../../models/UserModel.js"


export const resolvers = {
    Query:{
        getUser:async (_,{id})=>{
            const user =await UserModel.findById(id);
            if(!user) throw new Error("user not found");
            return user
        }
    },
    Mutation:{
        createUser:async(_,{userInput})=>{
            const user = await UserModel.create({...userInput});
            return user
        }
    }
}