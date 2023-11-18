'use strict';

const { TABLE_NAMES } = require('../models/constants.js')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, { DataTypes }) {
    await queryInterface.createTable(TABLE_NAMES.User,
      {
        id: {
          type: DataTypes.BIGINT,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        username: {
          type: DataTypes.STRING(30),
          allowNull: false,
          unique: true,
        },
        email: {
          type: DataTypes.STRING(120),
          allowNull: false,
          unique: true,
        },
        emailVerifiedAt: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        passwordHash: {
          type: DataTypes.STRING(512),
          allowNull: false,
        },
        bio: {
          type: DataTypes.STRING(160),
          allowNull: false,
        },
        location: {
          type: DataTypes.STRING(30),
          allowNull: true,
        },
        website: {
          type: DataTypes.STRING(100),
          allowNull: true,
        },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW,
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW,
        },
        dateOfBirth: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        profilePicture: {
          type: DataTypes.STRING(1024),
          allowNull: false,
        },
        coverPicture: {
          type: DataTypes.STRING(1024),
          allowNull: false,
        },
        isPublic: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        }
      }
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
