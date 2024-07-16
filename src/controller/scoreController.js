const router = require('express').Router();
module.exports = router;

const scoreService = require('../service/scoreService.js');

//查询评论体评分
router.post('/getScore', async (req, res, next) => {
    const result = await scoreService.getScore(req.body.cbId);
    res.ResultVO(0, '成功', result);
});

//创建新评论体评分（给某一评论体新增打分）
router.post('/createScore', async (req, res, next) => {
    const result = await scoreService.createScore(req.body.cbId, req.body.scoreId, req.body.score);
    res.ResultVO(0, '成功', result);
});
