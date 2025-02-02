import Users from "../../models/LOGIN/UserModel.js";
import argon2 from "argon2";

export const getUsers = async(req, res) =>{
    try{
        const response = await Users.findAll({
            attributes:['uuid','name','email','role']
        });
        res.status(200).json(response);
    } catch (error){
        res.status(500).json({msg: error.message})
    }
}

export const getUsersById = async (req, res) => {
    try {
        const response = await Users.findOne({
            attributes: ['uuid', 'name', 'email', 'role'],
            where: {
                uuid: req.params.id
            }
        });

        if (!response) {
            return res.status(404).json({ msg: "User tidak ditemukan" });
        }

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};


export const createUsers = async(req, res) =>{
    const {name, email, password, confPassword, role} = req.body;
    if(password !==confPassword) return res.status(400).json({msg: "Password dan Confirm Password Tidak Cocok"})
    const hashPassword = await argon2.hash(password);
    try{
        await Users.create({
            name : name,
            email: email,
            password: hashPassword,
            role: role,
        });
        res.status(201).json({msg: "Register Berhasil"})
    } catch (error){
        res.status(400).json({msg: error.message})
    }
    }

export const updateUsers = async(req, res) =>{
    const user = await Users.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!user) return res.status(404).json({msg: "User Tidak Ditemukan"})
        const {name, email, password, confPassword, role} = req.body;
    let hashPassword;
    if(password === "" || password === null){
        hashPassword = user.password
    }else{
        hashPassword = await argon2.hash(password);
    }
    if(password !==confPassword) return res.status(400).json({msg: "Password dan Confirm Password Tidak Cocok"})
        try{
            await Users.update({
                name : name,
                email: email,
                password: hashPassword,
                role: role,
            },{
                where:{
                    id: user.id
                }
            });
            res.status(200).json({msg: "User Berhasil Update"})
        } catch (error){
            res.status(400).json({msg: error.message})
        }
    }


    export const delateUsers = async (req, res) => {  
        try {
            const user = await Users.findOne({
                where: { uuid: req.params.id }
            });
    
            if (!user) {
                return res.status(404).json({ msg: "User Tidak Ditemukan" });
            }
    
            await Users.destroy({
                where: { uuid: user.uuid } // Perbaikan dari 'user.id' ke 'user.uuid'
            });
    
            res.status(200).json({ msg: "User Berhasil Dihapus" });
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    };
    
    