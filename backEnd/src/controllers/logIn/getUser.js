import {User} from "../../models/index.js"
export default async function getUser(email){
    try{
        const findUserEmail = await User.findOne({email})
        return findUserEmail
    }catch(error){
        console.error("Error occurred while finding the user", error)
    }
}