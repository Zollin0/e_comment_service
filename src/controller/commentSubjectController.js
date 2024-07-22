const router = require('express').Router();
module.exports = router;

const commentSubjectService = require('../service/commentSubjectService');

//查询评论体信息
router.post('/getAllCommentSubject', async (req, res, next) => {
    const result = await commentSubjectService.getAllCommentSubject();
    res.ResultVO(0, '成功', result);
});

//创建新评论体
router.post('/createCommentSubject', async (req, res, next) => {
    const result = await commentSubjectService.createCommentSubject(req.body.comtSubjectId, req.body.cbImg, req.body.cbText, req.body.cbTitle, req.body.userId);
    res.ResultVO(0, '成功', result);
});

//修改评论体信息
router.post('/modifyCommentSubject', async (req, res, next) => {
    const result = await commentSubjectService.modifyCommentSubject(req.body.comtSubjectId, req.body.cbImg, req.body.cbText, req.body.cbTitle, req.body.userId);
    res.ResultVO(0, '成功', result);
});

//删除评论体信息
router.post('/deleteCommentSubject', async (req, res, next) => {
    const result = await commentSubjectService.deleteCommentSubject(req.body.comtSubjectId);
    res.ResultVO(0, '成功', result);
});
