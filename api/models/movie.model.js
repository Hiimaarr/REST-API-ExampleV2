const { DataTypes } = require("sequelize"); 
const { sequelize } = require("../../db/db.js"); 

const Movie = sequelize.define(
  "movie",
  {
    
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER, 
    },
    director: {
        type: DataTypes.STRING
    },
    duration: {
        type: DataTypes.STRING
    },
    genre:{
        type: DataTypes.STRING
    },
    rate: {
        type: DataTypes.DECIMAL
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: new Date(), 
    },
  },
  { updatedAt: false } 
);

module.exports = Movie; 
