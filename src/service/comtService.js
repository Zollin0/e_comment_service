const comtDao = require('../dao/comtDao.js');

//查询评论信息
exports.getComt = async (cbId, comtId) => {
    const comt = await comtDao.getComt(cbId, comtId);
    return comt;
};
//创建新评论
exports.createComt = async (cbId, comtId, text, userId) => {
    const comt = await comtDao.createComt(cbId, comtId, text, userId);
    return comt;
};
//删除评论
exports.deleteComt = async (cbId, comtId) => {
    const comt = await comtDao.deleteComt(cbId, comtId);
    return comt;
};
// 更新评论获赞数
exports.updateThumbsUp = async (comtId, cbId) => {
    return await comtDao.updateThumbsUp(comtId, cbId);
};
// 更新评论点赞数（减少）
exports.cancelThumbUp = async (comtId, cbId) => {
    return await comtDao.cancelThumbsUp(comtId, cbId);
};
//查询历史评论
exports.getHistoryComt = async (cbId, userId) => {
    const comt = await comtDao.getHistoryComt(cbId, userId);
    return comt;
};
