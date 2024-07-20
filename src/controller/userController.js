const router = require('express').Router();
module.exports = router;

const userService = require('../service/userService');

//登录功能
router.post('/getUser', async (req, res, next) => {
    const result = await userService.getUser(req.body.account, req.body.password);
    res.ResultVO(0, '成功', result);
});

//查询用户信息
router.post('/getUserInfor', async (req, res, next) => {
    try {
        const result = await userService.getAllUsers();
        res.json({ code: 0, message: '成功', data: result });
    } catch (error) {
        next(error);
    }
});

//创建新用户
router.post('/createUser', async (req, res, next) => {
    const result = await userService.createUser(req.body.account, req.body.password);
    res.ResultVO(0, '成功', result);
});
