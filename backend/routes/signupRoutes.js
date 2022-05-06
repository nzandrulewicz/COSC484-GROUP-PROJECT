const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({username: 'Get Username'})
})

router.post('/', (req, res) => {
    res.status(200).json({username: 'Set Username'})
})

router.put('/:id', (req, res) => {
    res.status(200).json({username: `Update username ${req.params.id}`})
})

router.delete('/:id', (req, res) => {
    res.status(200).json({username: `Delete username ${req.params.id}`})
})


module.exports = router