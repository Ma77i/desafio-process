const process = require('dotenv')

module.exports = {
    mongoConfig: {
        HOSTNAME: 'cluster0.v01os.mongodb.net',
        SCHEMA: "mongodb+srv",
        DATABASE: "ecommerce",
        OPTIONS: "retryWrites=true&w=majority",
        USER: "Ma77iass",
        PASSWORD: process.env=MONGOOSE_DB
    }
}