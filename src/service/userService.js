const userDao = require('../dao/userDao');

exports.getUserInfor = async (userId) => {
    const userInfor = await userDao.getUserInfor(userId);
    return userInfor;
};
