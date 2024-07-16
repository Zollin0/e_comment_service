const scoreDao = require('../dao/scoreDao.js');

//查询评论体评分
exports.getScore = async (cbId) => {
    const score = await scoreDao.getScore(cbId);
    return score;
};
