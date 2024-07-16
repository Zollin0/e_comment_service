const db = require('../utils/dbConnPool/mariadb');

// 查询评论信息
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
    try {
        return await db.query(sql, sqlParams);
    } catch (error) {
        console.error('Error in getComt:', error);
        throw error;
    }
};

// 创建新评论
exports.createComt = async (cbId, comtId, text, userId) => {
    const sql = `
        INSERT INTO 
            e_comt
        (
            cb_id,
            comt_id,
            text,
            user_id
        )
        VALUES
        (
            ?,
            ?,
            ?,
            ?
        )
    `;
    const sqlParams = [cbId, comtId, text, userId];
    try {
        return await db.query(sql, sqlParams);
    } catch (error) {
        console.error('Error in createComt:', error);
        throw error;
    }
};

// 删除评论
exports.deleteComt = async (cbId, comtId) => {
    const sql = `
        DELETE FROM 
            e_comt
        WHERE
            cb_id = ?
            AND comt_id = ?
    `;
    const sqlParams = [cbId, comtId];
    try {
        return await db.query(sql, sqlParams);
    } catch (error) {
        console.error('Error in deleteComt:', error);
    }
};
// 更新评论获赞数
exports.updateThumbsUp = async (comtId, cbId) => {
    const sqlUpdate = `
    UPDATE e_comt
    SET thumbs_up = thumbs_up + 1
    WHERE comt_id = ? AND cb_id = ?
`;

    const sqlSelect = `
    SELECT thumbs_up
    FROM e_comt
    WHERE comt_id = ? AND cb_id = ?
`;
    const sqlParams = [comtId, cbId];
    try {
        await db.query(sqlUpdate, sqlParams);
        const result = await db.query(sqlSelect, sqlParams);
        return result[0].thumbs_up;
    } catch (error) {
        console.error('Error in updateThumbsUp:', error);
        throw error;
    }
};

// 更新评论点赞数（减少）
exports.cancelThumbsUp = async (comtId, cbId) => {
    const sqlUpdate = `
        UPDATE e_comt
        SET thumbs_up = thumbs_up - 1
        WHERE comt_id = ? AND cb_id = ?
    `;
    const sqlSelect = `
        SELECT thumbs_up
        FROM e_comt
        WHERE comt_id = ? AND cb_id = ?
    `;
    const sqlParams = [comtId, cbId];
    try {
        await db.query(sqlUpdate, sqlParams);
        const result = await db.query(sqlSelect, sqlParams);
        return result[0].thumbs_up;
    } catch (error) {
        console.error('Error in cancelThumbsUp:', error);
        throw error;
    }
};
// 查询历史评论
exports.getHistoryComt = async (cbId, userId) => {
    const sql = `
        SELECT 
            c.text,
            c.thumbs_up,
            b.cb_title
        FROM 
            e_comt c
        JOIN
            e_comt_body b ON c.cb_id = b.cb_id
        WHERE
            c.cb_id = ?
            AND c.user_id = ?
    `;
    const sqlParams = [cbId, userId];
    try {
        return await db.query(sql, sqlParams);
    } catch (error) {
        console.error('Error in getHistoryComt:', error);
        throw error;
    }
};
