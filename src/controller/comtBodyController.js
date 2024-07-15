const router = require('express').Router();
module.exports = router;

const comtBodyService = require('../service/comtBodyService');

router.post('/getComtBody', async (req, res, next) => {
    const result = await comtBodyService.getComtBody(req.body.cbId);
    res.ResultVO(0, '成功', result);
});
