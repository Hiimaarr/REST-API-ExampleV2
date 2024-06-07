const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("restAPIdb", "alma", "reboot", {
  host: "localhost", 
  dialect: "mysql", 
  port: 3306, 
  logging: false,
}); 

const checkConnection = async () => {
  
  try {
    await sequelize.authenticate(); 
    console.log("funca");
  } catch (error) {
    console.log(error);
  }
};

const syncModels = async () => {
  
  try {
    await sequelize.sync(); 
  } catch (error) {
    console.log(error);
  }
};

module.exports = { checkConnection, syncModels, sequelize };
