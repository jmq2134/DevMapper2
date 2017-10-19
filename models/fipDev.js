'use strict';
var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  
  var fipDev = sequelize.define("fipDev", {

    siteName: DataTypes.STRING,
    siteStreet1: DataTypes.STRING,
    siteStreet2: DataTypes.STRING,
    siteCity: DataTypes.STRING,
    siteState: DataTypes.STRING, 
    siteZip: DataTypes.STRING,
    siteAddress: DataTypes.STRING,
    entered: DataTypes.STRING,
    owner: DataTypes.STRING,
    numUnits: DataTypes.STRING,
    salePrice: DataTypes.STRING,
    notes: DataTypes.STRING

  });

  return fipDev;

};