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

//创建新评论体评分（给某一评论体新增打分）
exports.createScore = async (cbId, scoreId, score) => {
    const sql = `
        INSERT INTO 
            e_score
        (
            cb_id,
            score_id,
            score
        )
        VALUES
        (
            ?,
            ?,
            ?
        )
    `;
    const sqlParams = [cbId, scoreId, score];
    try {
        return await db.query(sql, sqlParams);
    } catch (error) {
        console.error('创建新评论体评分失败:', error);
        throw error;
    }
};
