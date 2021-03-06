'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
                // onDelete: 'cascade'
            },
            nickname: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },
            avatar: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            socket_id:{
                type:Sequelize.STRING
            },
            color: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Users');
    }
};