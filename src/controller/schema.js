const sequelize = require('../config/sequelize');
const Sequelize = require('Sequelize')
const _basicSituation = null;
exports.basicSituation = function() {
    if(!_basicSituation){
        _basicSituation = sequelize.define('basicSituation',{
            authTime:Sequelize.DATE,
            takeStudentType:Sequelize.INTEGER,
            dr5degreeNum
        })
    }
}