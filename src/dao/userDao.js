const db = require('../utils/dbConnPool/mariadb');

//获取用户信息
exports.getUserInfor = async (userId) => {
    const sql = `
        SELECT 
            *
        FROM 
            e_user
        WHERE
            user_id = ?
    `;
    const sqlParams = [userId];
    return await db.query(sql, sqlParams);
};

// 创建新用户
exports.createUser = async (userId, userAccount, userPassword) => {
    const sql = `
        INSERT INTO 
            e_user
        (
            user_id,
            user_account,
            user_password
        )
        VALUES
        (
            ?,
            ?,
            ?
        )
    `;
    const sqlParams = [userId, userAccount, userPassword];
    try {
        return await db.query(sql, sqlParams);
    } catch (error) {
        console.error('创建新用户失败:', error);
        throw error;
    }
};
