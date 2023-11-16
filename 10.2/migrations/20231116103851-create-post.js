'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Posts', {
      id: {
        type: Sequelize.BIGINT(15),
        allowNull: false,
        autoIncrement: true,
      },
      content: {
        type: Sequelize.STRING(280),
        allowNull: false,
      },
      referenceId: {
        type: Sequelize.BIGINT(15),
        allowNull: true,
        references: {
          model: "Post",
          key: "id",
        },
      },
      userId: {
        type: Sequelize.BIGINT(15),
        allowNull: false,
        references: {
          model: user,
          key: "id",
        },
      },
      type: {
        type: Sequelize.ENUM,
        allowNull: false,
        values: ["post", "repost", "reply"],
        defaultValue: "post",
      },

      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      postedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    },);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Posts');
  }
};