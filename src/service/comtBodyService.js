const comtBodyDao = require('../dao/comtBodyDao.js');

exports.getComtBody = async (cbId) => {
    const comtBody = await comtBodyDao.getComtBody(cbId);
    return comtBody;
};
