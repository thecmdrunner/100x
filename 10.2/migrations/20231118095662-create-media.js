"use strict";

const { TABLE_NAMES } = require("../models/constants.js");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, { DataTypes }) {
    await queryInterface.createTable(
      TABLE_NAMES.Media, {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      index: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      postId: {
        type: DataTypes.BIGINT,
        allowNull: true,
        references: {
          model: TABLE_NAMES.Post,
          key: "id",
        },
      },
      mediaUrl: {
        type: DataTypes.STRING(1024),
        allowNull: false
      },
      type: {
        type: DataTypes.ENUM,
        values: ["image", "video", "gif"],
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
