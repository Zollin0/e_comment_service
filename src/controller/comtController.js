const router = require('express').Router();
module.exports = router;

const comtService = require('../service/comtService');

router.post('/getComt', async (req, res, next) => {
    const result = await comtService.getComt(req.body.cbId, req.body.comtId);
    res.ResultVO(0, '成功', result);
});
