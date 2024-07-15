const router = require('express').Router();
module.exports = router;

const comtBodyService = require('../service/comtBodyService');

router.post('/getComtBody', async (req, res, next) => {
    const result = await comtBodyService.getComtBody(req.body.cbId);
    res.ResultVO(0, '成功', result);
});
router.post('/createComtBody', async (req, res, next) => {
    const result = await comtBodyService.createComtBody(req.body.cbId, req.body.cbimg, req.body.cbtext, req.body.cbtitle);
    res.ResultVO(0, '成功', result);
});
router.post('/modifyComtBody', async (req, res, next) => {
    const result = await comtBodyService.modifyComtBody(req.body.cbId, req.body.cbimg, req.body.cbtext, req.body.cbtitle);
    res.ResultVO(0, '成功', result);
});
