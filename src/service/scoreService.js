const scoreDao = require('../dao/scoreDao.js');

exports.getScore = async (cbId) => {
    const score = await scoreDao.getScore(cbId);
    return score;
};
