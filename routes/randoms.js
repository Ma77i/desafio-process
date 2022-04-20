const { Router } = require('express')
const router = Router()
const { fork } = require('child_process')



/* const suma = () => {
    let suma = 0
    for (let i = 0; i < 1e6; i++) {
        suma += i;
    }
    return suma
} */

/* 
const sum = suma()
console.log(sum)
res.send(sum.toString()) */
router.get("/", (req, res)=>{
    
    const { query } = req
    console.log(query)

    console.time("time")
    const random = fork("random.js")
    random.send({
        message: 'start',
        num: +query.num
    })
    random.on('message', (message)=>{
        //console.log(message)
        res.send(message)
    })
    console.timeEnd("time")
})

module.exports = router



















