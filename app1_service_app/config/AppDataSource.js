const path = require("path")
const { DataSource } = require("typeorm")

const AppDataSource = new DataSource({
    "type": "mssql",
    "host": "localhost",
    "port": 1433,
    "username": "sa",
    "password": "root",
    "database": "microservice_app1",
    "synchronize": true,
    "logging": true,
    "entities": [
        path.join(__dirname, "../entities/User.js"),
    ],
    "options": {
        trustServerCertificate: true,
        trustedConnection: false,
        enableArithAbort: true,
        // instanceName: "SQLEXPRESS",
    },
    migrations: [],
    subscribers: [],
})

module.exports = AppDataSource