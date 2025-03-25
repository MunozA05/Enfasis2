const { DataTypes } =  require("sequelize");
const sequelize = require("../db/db");

const Auth = sequelize.define(
    "Auth",
    {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        email:{
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true,
            validate:{
                isEmail: {msg:"Debe ser un correo valido"},
                notNull: {msg:"El correo electronico es obligatorio"}
            }
        },
        password:{
            type: DataTypes.STRING(255),
            allowNull: false,
            validate:{
                notNull: {msg:"La password es requerida"}
            }
        },
    },
    {
        timestamps: true
    }
);

module.exports = Auth;