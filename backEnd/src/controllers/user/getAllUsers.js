import {User} from "../../models/index.js";
export default async function getAllUsers(){
    return await User.find()
}