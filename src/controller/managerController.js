const router = require('express').Router();
module.exports = router;

const managerService = require('../service/managerService.js');

router.post('/getManager', async (req, res, next) => {
    const result = await managerService.getManager(req.body.managerId);
    res.ResultVO(0, '成功', result);
});
