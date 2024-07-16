const db = require('../utils/dbConnPool/mariadb');

//获取提问信息
exports.getQuestion = async (cbId, questionId) => {
    const sql = `
        SELECT 
            *
        FROM 
            e_questions
        WHERE
            cb_id = ?
            AND question_id = ?
    `;
    const sqlParams = [cbId, questionId];
    return await db.query(sql, sqlParams);
};

//创建新提问
exports.createQuestion = async (cbId, userId, questionId, text) => {
    const sql = `
        INSERT INTO 
            e_questions
        (
            cb_id,
            user_id,
            question_id,
            text
        )
        VALUES
        (
            ?,
            ?,
            ?,
            ?
        )
    `;
    const sqlParams = [cbId, userId, questionId, text];
    try {
        return await db.query(sql, sqlParams);
    } catch (error) {
        console.error('创建新提问失败:', error);
        throw error;
    }
};
