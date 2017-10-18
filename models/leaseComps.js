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
    dateEntered: DataTypes.DATE,
    dateSold: DataTypes.DATE,
    buildingSF: DataTypes.STRING,
    totalAcreage: DataTypes.STRING,
    salePrice: DataTypes.STRING,
    numUnits: DataTypes.STRING,
    oneBedRent: DataTypes.STRING,
    twoBedRent: DataTypes.STRING,
    threeBedRent: DataTypes.STRING,
    note: DataTypes.STRING

  });

  return leaseComps;

};