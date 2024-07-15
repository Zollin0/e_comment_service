const comtBodyDao = require('../dao/comtBodyDao.js');

exports.getComtBody = async (cbId) => {
    const comtBody = await comtBodyDao.getComtBody(cbId);
    return comtBody;
};

exports.createComtBody = async (cbId, cbimg, cbtext, cbtitle) => {
    const comtBody = await comtBodyDao.createComtBody(cbId, cbimg, cbtext, cbtitle);
    return comtBody;
};

exports.modifyComtBody = async (cbId, cbimg, cbtext, cbtitle) => {
    const comtBody = await comtBodyDao.modifyComtBody(cbId, cbimg, cbtext, cbtitle);
    return comtBody;
};
