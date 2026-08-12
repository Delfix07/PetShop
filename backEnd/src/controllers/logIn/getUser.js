import { User } from "../../models/index.js";

export default async function getUser(email) {
    return await User.findOne({ email })
}