import {User} from "../../models/index.js";

export default async function loginUser(email, password){
    const user = await User.findOne({email, password})
    return user;
}