'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Post', {
      id: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      content: {
        type: Sequelize.DataTypes.STRING(280),
        allowNull: false,
      },
      referenceId: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: true,
        references: {
          model: "Post",
          key: "id",
        },
      },
      userId: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: "User",
          key: "id",
        },
      },
      type: {
        type: Sequelize.DataTypes.ENUM,
        allowNull: false,
        values: ["post", "repost", "reply"],
        defaultValue: "post",
      },

      createdAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.DataTypes.NOW,
      },
      deletedAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: true,
      },
      postedAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: true,
      },
    },);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Post');
  }
};