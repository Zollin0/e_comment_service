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
