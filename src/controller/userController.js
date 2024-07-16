const router = require('express').Router();
module.exports = router;

const userService = require('../service/userService');

//查询用户信息
router.post('/getUserInfor', async (req, res, next) => {
    const result = await userService.getUserInfor(req.body.userId);
    res.ResultVO(0, '成功', result);
});

//创建新用户
router.post('/createUser', async (req, res, next) => {
    const result = await userService.createUser(req.body.userId, req.body.userAccount, req.body.userPassword);
    res.ResultVO(0, '成功', result);
});
