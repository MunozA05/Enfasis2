const Auth = require("../models/auth.model");
const response = require("../res/response");

const getAll = async(req, res, next)=>{
    try {
        const users = await Auth.findAll();
        let data;
        if(users.length>0){
            data= {
                users: users,
                total_users: users.length
            }
        }else{
            data={
                message: "Esta tabla no tiene registros"
            }
        }
        response.success(req,res,data,200);
    } catch (error) {
        console.log(error);
    }
}

const create = async(req,res,next)=>{
    try {
        const data = req.body;
        await Auth.sync();
        const userCreated = await Auth.create(data);
        message = {
            id: userCreated.id,
            msg: "el usuario fue creado con exito"
        }
        response.success(req,res,message,200);
    } catch (error) {
        next(error.message);
    }
}

const getById = async(req,res,next)=>{
    try {
        const id = req.params.id;
        const user = await Auth.findOne({where:{id}});
        let data;
        if(user){
            data= {
                user: user,
            }
        }else{
            data={
                message: "Esta tabla no tiene registros por ese ID"
            }
        }
        response.success(req,res,data,200);
    } catch (error) {
        next(error);
    }
}

const update = async(req,res,next)=>{
    try {
        const id = req.params.id;
        const data = req.body;
        await Auth.sync();
        const userUpdated = await Auth.update(data,{where:{id}});
        console.log(userUpdated);
        message = {
            id: id,
            msg: "el usuario fue actualizado con exito"
        }
        response.success(req,res,message,200);
    } catch (error) {
        next(error);
    }
}

const deleted = async(req,res,next)=>{
    try {
        const id = req.params.id;
        const userDeleted = await Auth.destroy({where:{id}});
        message = {
            id: id,
            msg: "el usuario con este id fue eliminado"
        }
        response.success(req,res,message,200);
    } catch (error) {
        next(error)
    }
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleted
}