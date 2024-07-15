const db = require('../utils/dbConnPool/mariadb');

exports.getComtBody = async (cbId) => {
    const sql = `
        SELECT 
            *
        FROM 
            e_comt_body
        WHERE
            cb_id = ?
    `;
    const sqlParams = [cbId];
    return await db.query(sql, sqlParams);
};
