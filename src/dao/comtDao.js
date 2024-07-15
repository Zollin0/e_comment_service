const db = require('../utils/dbConnPool/mariadb');

exports.getComt = async (cbId, comtId) => {
    const sql = `
        SELECT 
            *
        FROM 
            e_comt
        WHERE
            cb_id = ?
            AND comt_id = ?
    `;
    const sqlParams = [cbId, comtId];
    return await db.query(sql, sqlParams);
};
