'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, { DataTypes }) {
    await queryInterface.createTable("Posts",
      {
        id: {
          type: DataTypes.BIGINT,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        type: {
          type: DataTypes.ENUM,
          values: ["post", "repost", "reply"],
          defaultValue: "post",
          allowNull: false,
        },
        referenceId: {
          type: DataTypes.BIGINT,
          allowNull: true,
          references: {
            model: "Posts",
            key: "id",
          },
        },
        userId: {
          type: DataTypes.BIGINT,
          allowNull: false,
          references: {
            model: "Users",
            key: "id",
          },
        },
        content: {
          type: DataTypes.STRING(280), allowNull: false
        },
        postedAt: {
          type: DataTypes.DATE, allowNull: true
        },
        createdAt: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
          allowNull: false,
        },
        deletedAt: {
          type: DataTypes.DATE, allowNull: true
        },
      });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('Posts');
     */
  }
};
