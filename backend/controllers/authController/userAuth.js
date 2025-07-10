const User = require("../../modules/userModule");
const bcrypt = require("bcrypt");

module.exports.register = async(req,res)=>{
    const {name , username , email,password} = req.body;
    const empass = await bcrypt.hash(password,10);
    const newUsr = new User({
        name,
        username,
        password:empass,
        email
    });
    newUsr.save();
    res.send({
        message:"Account created !",
        newUsr
    });
};

module.exports.login = async(req,res)=>{
    const {username , password} = req.body;
    const existUsr = await User.find({username:username});
    if(!existUsr){
        res.send({
            success:0,
            message:"user not found !"
        });
    };
    const checkPass = await bcrypt.compare(password,existUsr.password);
    if(!checkPass){
        res.send({
            success:0,
            message:"Wrong pass try again!"
        })
    };
    res.send({
            success:1,
            message:"Login Successful...!",
            existUsr
        })

};