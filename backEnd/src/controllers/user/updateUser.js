import {User} from "../../models/index.js";
export default async function updateUser(id, updatedData){
    return await User.findByIdAndUpdate(id, updatedData, {new:true})
}