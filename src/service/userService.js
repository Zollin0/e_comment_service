const userDao = require('../dao/userDao');

//登录
exports.getUser = async (account, password) => {
    const user = await userDao.getUser(account, password);
    return user;
};

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
//修改用户信息
exports.updateUser = async (userId, nickname, avatar, password) => {
    const updateuser = await userDao.updateUser(userId, nickname, avatar, password);
    return updateuser;
};
