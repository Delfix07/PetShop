import {User} from "../../models/index.js";

export default async function deleteUser (id){
    return await User.findByIdAndDelete(id)
}