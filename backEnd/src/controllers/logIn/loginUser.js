import {User} from "../../models/index.js";

export default async function loginUser(email){
    const user = await User.findOne({email})
    return user;
}