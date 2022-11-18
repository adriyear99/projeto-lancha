'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Barcos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Barcos.init({
    id: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    foto: DataTypes.STRING,
    consumo: DataTypes.FLOAT,
    idade: DataTypes.INTEGER,
    cooler: DataTypes.BOOLEAN,
    tanque: DataTypes.FLOAT,
    pessoas: DataTypes.INTEGER,
    peso: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Barcos',
  });
  return Barcos;
};