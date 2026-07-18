import {User} from "../../models/index.js";
export default async function getOneUser(id){
    return await User.findById(id)
}