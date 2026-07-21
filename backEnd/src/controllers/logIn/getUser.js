import User from "../../models/index"
export default async function getUser(email){
    try{
        const findUserEmail = await User.findOne(email)
        return User
    }catch(error){
        console.error("Error occurred while finding the user", error);
    }
}