const db = require('../utils/dbConnPool/mariadb');

//获取评论体评分
exports.getScore = async (cbId) => {
    const sql = `
        SELECT 
            *
        FROM 
            e_score
        WHERE
            cb_id = ?
    `;
    const sqlParams = [cbId];
    return await db.query(sql, sqlParams);
};
