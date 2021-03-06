const mongoose = require("mongoose");
const { obj } = require("../models/User");
const UserSchema = require("../models/User");
const User = mongoose.model("User", UserSchema);

class UserService {


    async setUser(user){

        if(user["_id"] !== undefined) {
          return await User.updateOne({ _id:user["_id"] }, { $set: user })
        }
        else{
            const userObj = new User(user);
            userObj.setPassword(user.password);
            const result = await userObj.save();
            result["salt"] = "";
            result["hash"] = "";
            return result;
        }

    }

    async getUser(){
        return await User.find({isDel: false}).select(["-salt", "-hash"])
    }

    async removeUser(_id){
        return await User.updateOne({"_id":_id}, {$set:{ isDel: true }})
    }


    
    async loginUser(email, password){
        const result = await User.find({"email":email});
        if(result){
            if(result.length > 0){
                const user = result[0];

                if(user.validatePassword(password)){
                    
                    user["hash"] = "";
                    user["salt"] = "";
                    

                    const objUser = user.toObject();

                    objUser.token =  user.generateToken();
                    return objUser;
                }
                else{
            
                    return;
                }
            }
        }
    }


}


module.exports = UserService;