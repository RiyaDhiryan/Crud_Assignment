const User = require('../Models/userModels.js')
exports.home = (req,res)=>{
    res.send('Ram Ram bhai saraya ne')
}
exports.register = async(req,res)=>{
    try {
       const {name,email,password}= req.body; 
       if(!name || !email || !password){
        return res.status(400).json({msg:"All input fields are required"})
       }
       const user = await User.create({
        name,
        email,
        password
       })
       res.status(200).json({
        success:true,
        message:"User Registered Successfully",
        user
       })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
    
}
// Login
exports.Login = async(req,res)=>{
    try {
        const {email,password} = req.body
        const user = await User.findOne({email})
        if(!email || !password){
            return res.status(400).json({msg:"All input fields are required"})
           }
        if(user){
            //compare password
            if(user.password == password){
                res.status(200).send({msg:"User Login successfully"})
            }
            else{
                res.status(401).send({msg:'Invalid Password'})
            }
        }
        else{
            res.status(404).send({msg:"No account associate with this email"})
        }
        res.status(200).json({
            success:true,
            message:"User Login Successfully",
            user
           }) 
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}