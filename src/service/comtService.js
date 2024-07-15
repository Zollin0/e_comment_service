const comtDao = require('../dao/comtDao.js');

exports.getComt = async (cbId, comtId) => {
    const comt = await comtDao.getComt(cbId, comtId);
    return comt;
};
