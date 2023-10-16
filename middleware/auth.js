const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


const register = async(req, res, next) => {

    try {
        const oldUser = await prisma.user.findUnique({
            where:{
                email:req.body
            }
            
        })
        if(oldUser){
            return res.satus(400).json({
                message:"User already exists"
            })
        } else {
            const newUser = await prisma.user.create({
                data:{
                    email:req.body,
                    password:req.body
                }
            })
            return res.status(200).json({
                message: "User was created",
                newUser
            })
        }
    } catch (err) {
        return res.status(401).json({
          message: "Couldnt create user",
          error: err,
        });
    }
}

module.exports ={
    register
}