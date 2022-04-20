

module.exports = {
    mongoConfig: {
        HOSTNAME: process.env.HOSTNAME_DB,
        SCHEMA: "mongodb+srv",
        DATABASE: "ecommerce",
        OPTIONS: "retryWrites=true&w=majority",
        USER: "Ma77iass",
        PASSWORD: process.env.PWD_DB
    }
}