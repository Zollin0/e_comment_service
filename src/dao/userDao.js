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
