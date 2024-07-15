const db = require('../utils/dbConnPool/mariadb');

exports.getUserInfor = async (userId) => {
    const sql = `
        SELECT 
            user_id AS userId,
            user_nickname AS userNickname,
            user_account AS userAccount,
            user_password AS userPassword,
            user_head AS userHead
        FROM 
            e_user
        WHERE
            user_id = ?
    `;
    const sqlParams = [userId];
    return await db.query(sql, sqlParams);
};
