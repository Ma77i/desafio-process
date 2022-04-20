const parseArgs = require('minimist') 
const path = require('path')

// import router
const { Router } = require('express')
const router = new Router()

router.get("/", (req, res)=>{
    /*     if( url === "/end") {
    const { url } = req
        res.end("servicio apagado")
        process.exit()
    } */
    const info = JSON.stringify({
        args: process.args,
        uptime: process.uptime(),
        platform: process.platform,
        arch: process.arch,
        version: process.version,
        pid: process.pid,
        path: process.execPath,
        projectPath: process.cwd(),
        cpuUsage: process.cpuUsage(),
        memoryUsage: process.memoryUsage()
    })
    res.send(info)
})

module.exports = router