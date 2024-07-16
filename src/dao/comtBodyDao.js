const db = require('../utils/dbConnPool/mariadb');

// 获取评论体信息
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
    try {
        return await db.query(sql, sqlParams);
    } catch (error) {
        console.error('Error in getComtBody:', error);
        throw error;
    }
};

// 创建评论体
exports.createComtBody = async (cbId, cbImg, cbText, cbTitle, userId) => {
    const sql = `
        INSERT INTO e_comt_body (cb_id, cb_img, cb_text, cb_title, user_id)
        VALUES (?, ?, ?, ?, ?)
    `;
    const sqlParams = [cbId, cbImg, cbText, cbTitle, userId];
    try {
        return await db.query(sql, sqlParams);
    } catch (error) {
        console.error('Error in createComtBody:', error);
        throw error;
    }
};

// 修改评论体信息
exports.modifyComtBody = async (cbId, cbImg, cbText, cbTitle, userId) => {
    const sql = `
        UPDATE e_comt_body
        SET 
            cb_img = ?,
            cb_text = ?,
            cb_title = ?,
            user_id = ?
        WHERE
            cb_id = ?
    `;
    const sqlParams = [cbImg, cbText, cbTitle, userId, cbId];
    try {
        return await db.query(sql, sqlParams);
    } catch (error) {
        console.error('Error in modifyComtBody:', error);
        throw error;
    }
};
// 删除评论体信息
exports.deleteComtBody = async (cbId) => {
    const sql = `
        DELETE FROM e_comt_body
        WHERE
            cb_id = ?
    `;
    const sqlParams = [cbId];
    try {
        return await db.query(sql, sqlParams);
    } catch (error) {
        console.error('Error in deleteComtBody:', error);
    }
};
