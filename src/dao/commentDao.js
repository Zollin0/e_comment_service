const db = require('../utils/dbConnPool/mariadb');

// 查询评论信息
exports.getComment = async (comtSubjectId) => {
    const sql = `
        SELECT 
            *
        FROM 
            yi_comment
        WHERE
            comt_subject_id=?
    `;
    const sqlParams = [comtSubjectId];
    try {
        return await db.query(sql, sqlParams);
    } catch (error) {
        console.error('查询评论信息失败:', error);
        throw error;
    }
};

// 创建新评论
exports.createComment = async (comtSubjectId, commentId, text, userId) => {
    const sql = `
        INSERT INTO 
            yi_comment
        (
            comt_subject_id,
            comment_id,
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
    const sqlParams = [comtSubjectId, commentId, text, userId];
    try {
        return await db.query(sql, sqlParams);
    } catch (error) {
        console.error('创建评论失败:', error);
        throw error;
    }
};

// 删除评论
exports.deleteComment = async (comtSubjectId, commentId) => {
    const sql = `
        DELETE FROM 
            yi_comment
        WHERE
            comt_subject_id = ?
            AND comment_id = ?
    `;
    const sqlParams = [comtSubjectId, commentId];
    try {
        return await db.query(sql, sqlParams);
    } catch (error) {
        console.error('删除评论失败:', error);
    }
};

// 更新评论获赞数
exports.updateThumbsUp = async (commentId, comtSubjectId) => {
    const sqlUpdate = `
    UPDATE yi_comment
    SET thumbs_up = thumbs_up + 1
    WHERE comment_id = ? AND comt_subject_id = ?
`;

    const sqlSelect = `
    SELECT thumbs_up
    FROM yi_comment
    WHERE comment_id = ? AND comt_subject_id = ?
`;
    const sqlParams = [commentId, comtSubjectId];
    try {
        await db.query(sqlUpdate, sqlParams);
        const result = await db.query(sqlSelect, sqlParams);
        return result[0].thumbs_up;
    } catch (error) {
        console.error('点赞失败:', error);
        throw error;
    }
};

// 更新评论点赞数（减少）
exports.cancelThumbsUp = async (commentId, comtSubjectId) => {
    const sqlUpdate = `
        UPDATE yi_comment
        SET thumbs_up = thumbs_up - 1
        WHERE comment_id = ? AND comt_subject_id = ?
    `;
    const sqlSelect = `
        SELECT thumbs_up
        FROM yi_comment
        WHERE comment_id = ? AND comt_subject_id = ?
    `;
    const sqlParams = [commentId, comtSubjectId];
    try {
        await db.query(sqlUpdate, sqlParams);
        const result = await db.query(sqlSelect, sqlParams);
        return result[0].thumbs_up;
    } catch (error) {
        console.error('取消点赞失败:', error);
        throw error;
    }
};

// 查询历史评论
exports.getHistoryComment = async (comtSubjectId, userId) => {
    const sql = `
        SELECT 
            c.text,
            c.thumbs_up,
            b.cb_title
        FROM 
            yi_comment c
        JOIN
            yi_comment_body b ON c.comt_subject_id = b.comt_subject_id
        WHERE
            c.comt_subject_id = ?
            AND c.user_id = ?
    `;
    const sqlParams = [comtSubjectId, userId];
    try {
        return await db.query(sql, sqlParams);
    } catch (error) {
        console.error('查询历史评论失败:', error);
        throw error;
    }
};
