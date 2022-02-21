const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "Comentario",
    {
      autor: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      comentario:{
          type: DataTypes.STRING,
          allowNull:false
      }
    },
    {
      timestamps: false,
    }
  );
};

