const scoreDao = require('../dao/scoreDao.js');

//查询评论体评分
exports.getScore = async (cbId) => {
    const score = await scoreDao.getScore(cbId);
    return score;
};

//创建新评论体评分（给某一评论体新增打分）
exports.createScore = async (cbId, scoreId, score) => {
    const creatscore = await scoreDao.createScore(cbId, scoreId, score);
    return creatscore;
};
