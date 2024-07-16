const router = require('express').Router();
module.exports = router;

const questionService = require('../service/questionService.js');

router.post('/getQuestion', async (req, res, next) => {
    const result = await questionService.getQuestion(req.body.cbId, req.body.questionId);
    res.ResultVO(0, '成功', result);
});
