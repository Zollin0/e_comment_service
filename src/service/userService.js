const userDao = require('../dao/userDao');

//查询用户信息
exports.getAllUsers = async () => {
    const users = await userDao.getAllUsers();
    return users;
};

//创建新用户
exports.createUser = async (userId, account, password) => {
    const createuser = await userDao.createUser(userId, account, password);
    return createuser;
};
