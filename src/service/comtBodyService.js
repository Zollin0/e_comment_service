const comtBodyDao = require('../dao/comtBodyDao.js');

//查询评论体信息
exports.getComtBody = async (cbId) => {
    const comtBody = await comtBodyDao.getComtBody(cbId);
    return comtBody;
};

//创建新评论体
exports.createComtBody = async (cbId, cbImg, cbText, cbTitle, userId) => {
    const comtBody = await comtBodyDao.createComtBody(cbId, cbImg, cbText, cbTitle, userId);
    return comtBody;
};

//修改评论体信息
exports.modifyComtBody = async (cbId, cbImg, cbText, cbTitle, userId) => {
    const comtBody = await comtBodyDao.modifyComtBody(cbId, cbImg, cbText, cbTitle, userId);
    return comtBody;
};
