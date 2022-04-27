

module.exports = {
    mongoConfig: {
        HOSTNAME: process.env.HOSTNAME_DB,
        SCHEMA: "mongodb+srv",
        DATABASE: process.env.DATABASE,
        OPTIONS: "retryWrites=true&w=majority",
        USER: process.env.USER,
        PASSWORD: process.env.PWD_DB
    }
}