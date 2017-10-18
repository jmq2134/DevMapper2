'use strict';
var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  
  var Centers = sequelize.define("Centers", {

    siteName: DataTypes.STRING,
    siteStreet1: DataTypes.STRING,
    siteStreet2: DataTypes.STRING,
    siteCity: DataTypes.STRING,
    siteState: DataTypes.STRING, 
    siteZip: DataTypes.STRING,
    dateEntered: DataTypes.DATE,
    owner: DataTypes.STRING,
    numUnits: DataTypes.STRING,
    salePrice: DataTypes.STRING,
    notes: DataTypes.STRING

  });

  Centers.associate = function(models) {

    Centers.hasMany(models.Tenants, {
      onDelete: "cascade"
    });

  };

  return Centers;

};