const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "Mensaje",
    {
      autor: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mensaje:{
          type: DataTypes.TEXT,
          allowNull:false
      }
    },
    {
      timestamps: false,
    }
  );
};

