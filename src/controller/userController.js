const router = require('express').Router();
module.exports = router;

const userService = require('../service/userService');

//查询用户信息
router.post('/getUserInfor', async (req, res, next) => {
    const result = await userService.getUserInfor(req.body.userId);
    res.ResultVO(0, '成功', result);
});
