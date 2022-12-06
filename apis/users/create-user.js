const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const { usersModel } = require('../../schemas')

const CreateUser = app.post('/', (req, res) => {
    usersModel.find({email: req.body.email }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            if(result.length===0){
  const session = bcrypt.hashSync(Math.floor(Math.random() * 1000).toString(), 12)
    const hashedPassword = bcrypt.hashSync(req.body.password, 12)
    const userType=req.body.userType;
    if(userType=='District'){
        const DistrictArea = req.body.DistrictArea;
        if (DistrictArea === undefined || DistrictArea.length == 0) {
            console.log("empty")
            const user = new usersModel({
                image:req.body.image,
                email: req.body.email,
                password: hashedPassword,
                session: session,
                name: req.body.name,
                dob: req.body.dob,
                profession: req.body.profession,
                city: req.body.city,
                userType: req.body.userType,
                DistrictArea:null,
                gender: req.body.gender,
                forum: req.body.forum,
                role: req.body.role,
                department: req.body.department,
            })
            user.save((error, result) => {
                if (error) {
                    res.send(error)
                } else {
                    res.send(result)
                }
            })
        }else{
            console.log("not empty")
              const user = new usersModel({
            image:req.body.image,
            email: req.body.email,
            password: hashedPassword,
            session: session,
            name: req.body.name,
            dob: req.body.dob,
            profession: req.body.profession,
            city: req.body.city,
            userType: req.body.userType,
            DistrictArea:req.body.DistrictArea,
            gender: req.body.gender,
            forum: req.body.forum,
            role: req.body.role,
            department: req.body.department,
        })
        user.save((error, result) => {
            if (error) {
                res.send(error)
            } else {
                res.send(result)
            }
        })
        }
      
    }else if(userType=='Province'){
        const DistrictArea = req.body.DistrictArea;
        const PPArea = req.body.PPArea;

        if (DistrictArea === undefined || DistrictArea.length == 0 ||
            PPArea === undefined || PPArea.length == 0) {
                const user = new usersModel({
                    image:req.body.image,
                    email: req.body.email,
                    password: hashedPassword,
                    session: session,
                    name: req.body.name,
                    dob: req.body.dob,
                    profession: req.body.profession,
                    city: req.body.city,
                    userType: req.body.userType,
                    DistrictArea:null,
                    PPArea:null,
                    gender: req.body.gender,
                    forum: req.body.forum,
                    role: req.body.role,
                    department: req.body.department,
                })
                user.save((error, result) => {
                    if (error) {
                        res.send(error)
                    } else {
                        res.send(result)
                    }
                })
        }else{
            const user = new usersModel({
                image:req.body.image,
                email: req.body.email,
                password: hashedPassword,
                session: session,
                name: req.body.name,
                dob: req.body.dob,
                profession: req.body.profession,
                city: req.body.city,
                userType: req.body.userType,
                DistrictArea:req.body.DistrictArea,
                PPArea:req.body.PPArea,
                gender: req.body.gender,
                forum: req.body.forum,
                role: req.body.role,
                department: req.body.department,
            })
            user.save((error, result) => {
                if (error) {
                    res.send(error)
                } else {
                    res.send(result)
                }
            })
        }
       
    }else if(userType=='UC'){
        const DistrictArea = req.body.DistrictArea;
        const PPArea = req.body.PPArea;
        const UCArea = req.body.UCArea;



        if (DistrictArea === undefined || DistrictArea.length == 0 ||
            PPArea === undefined || PPArea.length == 0||
            UCArea === undefined || UCArea.length == 0) {
                const user = new usersModel({
                    image:req.body.image,
                    email: req.body.email,
                    password: hashedPassword,
                    session: session,
                    name: req.body.name,
                    dob: req.body.dob,
                    profession: req.body.profession,
                    city: req.body.city,
                    userType: req.body.userType,
                    DistrictArea:null,
                    PPArea:null,
                    UCArea:null,
                    gender: req.body.gender,
                    forum: req.body.forum,
                    role: req.body.role,
                    department: req.body.department,
                })
                user.save((error, result) => {
                    if (error) {
                        res.send(error)
                    } else {
                        res.send(result)
                    }
                })
            }else{
                const user = new usersModel({
                    image:req.body.image,
                    email: req.body.email,
                    password: hashedPassword,
                    session: session,
                    name: req.body.name,
                    dob: req.body.dob,
                    profession: req.body.profession,
                    city: req.body.city,
                    userType: req.body.userType,
                    DistrictArea:req.body.DistrictArea,
                    PPArea:req.body.PPArea,
                    UCArea: req.body.UCArea,
                    gender: req.body.gender,
                    forum: req.body.forum,
                    role: req.body.role,
                    department: req.body.department,
                })
                user.save((error, result) => {
                    if (error) {
                        res.send(error)
                    } else {
                        res.send(result)
                    }
                })
            }
      
    }else if(userType=='Unit'){
        const DistrictArea = req.body.DistrictArea;
        const PPArea = req.body.PPArea;
        const UCArea = req.body.UCArea;
        const UnitArea = req.body.UnitArea;




        if (DistrictArea === undefined || DistrictArea.length == 0 ||
            PPArea === undefined || PPArea.length == 0||
            UCArea === undefined || UCArea.length == 0||
            UnitArea === undefined || UnitArea.length == 0) {
                const user = new usersModel({
                    image:req.body.image,
                    email: req.body.email,
                    password: hashedPassword,
                    session: session,
                    name: req.body.name,
                    dob: req.body.dob,
                    profession: req.body.profession,
                    city: req.body.city,
                    userType: req.body.userType,
                    DistrictArea:null,
                    PPArea:null,
                    UCArea:null,
                    UnitArea:null,
                    gender: req.body.gender,
                    forum: req.body.forum,
                    role: req.body.role,
                    department: req.body.department,
                })
                user.save((error, result) => {
                    if (error) {
                        res.send(error)
                    } else {
                        res.send(result)
                    }
                })
            }else{
                const user = new usersModel({
                    image:req.body.image,
                    email: req.body.email,
                    password: hashedPassword,
                    session: session,
                    name: req.body.name,
                    dob: req.body.dob,
                    profession: req.body.profession,
                    city: req.body.city,
                    userType: req.body.userType,
                    DistrictArea:req.body.DistrictArea,
                    PPArea:req.body.PPArea,
                    UCArea:req.body.UCArea,
                    UnitArea:req.body.UnitArea,
                    gender: req.body.gender,
                    forum: req.body.forum,
                    role: req.body.role,
                    department: req.body.department,
                })
                user.save((error, result) => {
                    if (error) {
                        res.send(error)
                    } else {
                        res.send(result)
                    }
                })
            }
      
    }else{
        res.send("Invalid UserType")
    }
            }else{
        res.json("Email Already Exists")
                

            }

  
}
    })
   
})
module.exports = CreateUser