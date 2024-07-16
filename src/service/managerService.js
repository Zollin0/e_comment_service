const managerDao = require('../dao/managerDao.js');

exports.getManager = async (managerId) => {
    const manager = await managerDao.getManager(managerId);
    return manager;
};
