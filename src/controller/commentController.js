const router = require('express').Router();
module.exports = router;

const commentService = require('../service/commentService');

// 查询评论信息
router.post('/getComment', async (req, res, next) => {
    const result = await commentService.getComment(req.body.comtSubjectId);
    res.ResultVO(0, '成功', result);
});

// 创建新评论
router.post('/createComment', async (req, res, next) => {
    const result = await commentService.createComment(req.body.comtSubjectId, req.body.commentId, req.body.text, req.body.userId);
    res.ResultVO(0, '成功', result);
});

// 删除评论
router.post('/deleteComment', async (req, res, next) => {
    const result = await commentService.deleteComment(req.body.comtSubjectId, req.body.commentId, req.body.userId);
    res.ResultVO(0, '成功', result);
});

// 更新评论获赞数
router.post('/ThumbsUp', async (req, res, next) => {
    const thumbsUp = await commentService.updateThumbsUp(req.body.commentId, req.body.comtSubjectId);
    res.ResultVO(0, '成功', { thumbsUp });
});

// 取消点赞评论
router.post('/cancelThumbsUp', async (req, res) => {
    const thumbsUp = await commentService.cancelThumbUp(req.body.commentId, req.body.comtSubjectId);
    res.ResultVO(0, '成功', { thumbsUp });
});

//查询历史评论
router.post('/getHistorycomment', async (req, res) => {
    const result = await commentService.getHistorycomment(req.body.comtSubjectId, req.body.userId);
    res.ResultVO(0, '成功', result);
});
