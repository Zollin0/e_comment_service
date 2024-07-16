const router = require('express').Router();
module.exports = router;

const comtBodyService = require('../service/comtBodyService');

//查询评论体信息
router.post('/getComtBody', async (req, res, next) => {
    const result = await comtBodyService.getComtBody(req.body.cbId);
    res.ResultVO(0, '成功', result);
});

//创建新评论体
router.post('/createComtBody', async (req, res, next) => {
    const result = await comtBodyService.createComtBody(req.body.cbId, req.body.cbImg, req.body.cbText, req.body.cbTitle, req.body.userId);
    res.ResultVO(0, '成功', result);
});

//修改评论体信息
router.post('/modifyComtBody', async (req, res, next) => {
    const result = await comtBodyService.modifyComtBody(req.body.cbId, req.body.cbImg, req.body.cbText, req.body.cbTitle, req.body.userId);
    res.ResultVO(0, '成功', result);
});

//删除评论体信息
router.post('/deleteComtBody', async (req, res, next) => {
    const result = await comtBodyService.deleteComtBody(req.body.cbId);
    res.ResultVO(0, '成功', result);
});
