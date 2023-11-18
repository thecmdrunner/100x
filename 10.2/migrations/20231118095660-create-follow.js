"use strict";

const { TABLE_NAMES } = require("../models/constants.js");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, { DataTypes }) {
    await queryInterface.createTable(
      TABLE_NAMES.Follow,

      {
        id: {
          type: DataTypes.BIGINT,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        followerId: {
          type: DataTypes.BIGINT,
          allowNull: false,
          references: {
            model: TABLE_NAMES.User,
            key: "id",
          },
        },
        followingId: {
          type: DataTypes.BIGINT,
          allowNull: false,
          references: {
            model: TABLE_NAMES.User,
            key: "id",
          },
        },
        timestamp: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
          allowNull: false,
        },
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
  },
};
