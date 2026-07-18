import {User} from "../../models/index.js";

export default async function createUser(newUser){
    const userCreated = await User.create(newUser)
    return userCreated
}
