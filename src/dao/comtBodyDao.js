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
exports.createComtBody = async (cbId, cbimg, cbtext, cbtitle) => {
    const sql = `
        INSERT 
        INTO 
        e_comt_body (cb_id, cb_img, cb_text, cb_title)
        VALUES (?, ?, ?, ?)
    `;
    const sqlParams = [cbId, cbimg, cbtext, cbtitle];
    return await db.query(sql, sqlParams);
};

exports.modifyComtBody = async (cbId, cbimg, cbtext, cbtitle) => {
    const sql = `
        UPDATE e_comt_body
        SET 
            cb_img = ?,
            cb_text = ?,
            cb_title = ?
        WHERE
            cb_id = ?
    `;
    const sqlParams = [cbimg, cbtext, cbtitle, cbId];
    return await db.query(sql, sqlParams);
};
