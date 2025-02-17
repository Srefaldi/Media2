import { Sequelize } from "sequelize";

const db = new Sequelize('Csharp_db', 'root', '',{
    host: "localhost",
    dialect: "mysql"
});

export default db;