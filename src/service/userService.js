const userDao = require('../dao/userDao');

//查询用户信息
exports.getUserInfor = async (userId) => {
    const userInfor = await userDao.getUserInfor(userId);
    return userInfor;
};
