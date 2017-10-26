'use strict';
var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {

    var fipDev = sequelize.define("fipDev", {

        siteName: DataTypes.STRING,
        address: DataTypes.STRING,
        entered: DataTypes.STRING,
        owner: DataTypes.STRING,
        numUnits: DataTypes.STRING,
        acres: DataTypes.STRING,
        squareFootage: DataTypes.STRING,
        salePrice: DataTypes.STRING,
        notes: DataTypes.STRING

    });

    return fipDev;

};