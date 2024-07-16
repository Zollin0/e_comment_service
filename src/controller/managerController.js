const router = require('express').Router();
module.exports = router;

const managerService = require('../service/managerService.js');

//查询管理员信息
router.post('/getManager', async (req, res, next) => {
    const result = await managerService.getManager(req.body.managerId);
    res.ResultVO(0, '成功', result);
});

//创建新管理员
router.post('/createManager', async (req, res, next) => {
    const result = await managerService.createManager(req.body.managerId, req.body.managerAccount, req.body.managerPassword);
    res.ResultVO(0, '成功', result);
});
