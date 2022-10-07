const express = require('express');
const router = express.Router();

router.get('/a', (req, res)=>{
    res.sendFile('src/public/index.html');
})
module.exports = router;