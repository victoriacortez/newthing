var Sequelize = require('sequelize')

var attributes = {
    firstname: {
        type: Sequelize.STRING
    },
    lastname: {
        type: Sequelize.STRING
    },
    birthday: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    emailaddress: {
        type: Sequelize.STRING,
    },
    emailaddress2: {
        type: Sequelize.STRING,
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            is: /^[a-z0-9\_\-]+$/i,
        }
    },
    password: {
        type: Sequelize.STRING,
    },
    password2: {
        type: Sequelize.STRING,
    },
    salt: {
        type: Sequelize.STRING
    }
}

var options = {
  freezeTableName: true
}

module.exports.attributes = attributes;
module.exports.options = options;