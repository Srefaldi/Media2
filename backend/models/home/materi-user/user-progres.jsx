import { Sequelize } from "sequelize";
import db from "../../../config/LOGIN/Databases";

const { DataTypes } = Sequelize;

const UserProgress = db.define('user_progress', {
    userId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lessonId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    freezeTableName: true
});

export default UserProgress;