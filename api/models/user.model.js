const { DataTypes } = require("sequelize") 
const { sequelize } = require("../../db/db.js") 

const User = sequelize.define('user', { 
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING 
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: new Date() 
    }
},
{updatedAt: false} 
)

module.exports = User 