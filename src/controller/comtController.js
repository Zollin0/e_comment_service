const router = require('express').Router();
module.exports = router;

const comtService = require('../service/comtService');

// 查询评论信息
router.post('/getComt', async (req, res, next) => {
    const result = await comtService.getComt(req.body.cbId, req.body.comtId);
    res.ResultVO(0, '成功', result);
});

// 创建新评论
router.post('/createComt', async (req, res, next) => {
    const result = await comtService.createComt(req.body.cbId, req.body.comtId, req.body.text, req.body.userId);
    res.ResultVO(0, '成功', result);
});

// 删除评论
router.post('/deleteComt', async (req, res, next) => {
    const result = await comtService.deleteComt(req.body.cbId, req.body.comtId, req.body.userId);
    res.ResultVO(0, '成功', result);
});

// 更新评论获赞数
router.post('/ThumbsUp', async (req, res, next) => {
    const thumbsUp = await comtService.updateThumbsUp(req.body.comtId, req.body.cbId);
    res.ResultVO(0, '成功', { thumbsUp });
});
// 取消点赞评论
router.post('/cancelThumbsUp', async (req, res) => {
    const thumbsUp = await comtService.cancelThumbUp(req.body.comtId, req.body.cbId);
    res.ResultVO(0, '成功', { thumbsUp });
});
//查询历史评论
router.post('/getHistoryComt', async (req, res) => {
    const result = await comtService.getHistoryComt(req.body.cbId, req.body.userId);
    res.ResultVO(0, '成功', result);
});
