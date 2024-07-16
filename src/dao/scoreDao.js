const db = require('../utils/dbConnPool/mariadb');

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
