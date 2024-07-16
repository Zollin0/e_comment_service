const router = require('express').Router();
module.exports = router;

const scoreService = require('../service/scoreService.js');

router.post('/getScore', async (req, res, next) => {
    const result = await scoreService.getScore(req.body.cbId);
    res.ResultVO(0, '成功', result);
});
