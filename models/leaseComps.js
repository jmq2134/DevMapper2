'use strict';
var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {

    var leaseComps = sequelize.define("leaseComps", {

        siteName: DataTypes.STRING,
        address: DataTypes.STRING,
        owner: DataTypes.STRING,
        entered: DataTypes.STRING,
        sold: DataTypes.STRING,
        buildingSF: DataTypes.STRING,
        salePrice: DataTypes.STRING,
        totalAcreage: DataTypes.STRING,
        costPerAcre: DataTypes.STRING,
        numUnits: DataTypes.STRING,
        costPerUnit: DataTypes.STRING,
        oneBedSF: DataTypes.STRING,
        twoBedSF: DataTypes.STRING,
        threeBedSF: DataTypes.STRING,
        oneBedRent: DataTypes.STRING,
        twoBedRent: DataTypes.STRING,
        threeBedRent: DataTypes.STRING,
        notes: DataTypes.STRING

    });

    return leaseComps;

};