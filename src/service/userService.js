const userDao = require('../dao/userDao');

//查询用户信息
exports.getUserInfor = async (userId) => {
    const userInfor = await userDao.getUserInfor(userId);
    return userInfor;
};

//创建新用户
exports.createUser = async (userId, userAccount, userPassword) => {
    const createuser = await userDao.createUser(userId, userAccount, userPassword);
    return createuser;
};
