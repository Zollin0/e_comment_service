const managerDao = require('../dao/managerDao.js');

//查询管理员信息
exports.getManager = async (managerId) => {
    const manager = await managerDao.getManager(managerId);
    return manager;
};

//创建新管理员
