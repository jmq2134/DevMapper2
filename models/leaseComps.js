'use strict';
var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  
  var leaseComps = sequelize.define("leaseComps", {

    siteName: DataTypes.STRING,
    siteStreet1: DataTypes.STRING,
    siteStreet2: DataTypes.STRING,
    siteCity: DataTypes.STRING,
    siteState: DataTypes.STRING, 
    siteZip: DataTypes.STRING,
    siteAddress: DataTypes.STRING,
    entered: DataTypes.STRING,
    sold: DataTypes.STRING,
    buildingSF: DataTypes.STRING,
    salePrice: DataTypes.STRING,
    totalAcreage: DataTypes.STRING,
    costPerAcre: DataTypes.STRING,
    numUnits: DataTypes.STRING,
    costPerUnit: DataTypes.STRING,
    oneBedRent: DataTypes.STRING,
    twoBedRent: DataTypes.STRING,
    threeBedRent: DataTypes.STRING,
    notes: DataTypes.STRING

  });

  return leaseComps;

};