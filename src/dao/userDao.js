const db = require('../utils/dbConnPool/mariadb');

// 引入 UUIDv7 生成器
const { v7: uuidv7 } = require('uuid');

//登录
exports.getUser = async (account, password) => {
    const sql = `
        SELECT 
            *
        FROM 
            yi_user
        WHERE 
            account = ? AND password = ?
    `;
    const sqlParams = [account, password];
    return await db.query(sql, sqlParams);
};

//获取用户信息
exports.getAllUsers = async () => {
    const sql = `
        SELECT 
            *
        FROM 
            yi_user
    `;
    return await db.query(sql);
};

// 创建新用户
exports.createUser = async (account, password) => {
    const sql = `
        INSERT INTO 
            yi_user
        (
            user_id,
            account,
            password,
            created_at
        )
        VALUES
        (
            ?,
            ?,
            ?,
            NOW()
        )
    `;
    const sqlParams = [uuidv7(), account, password];
    try {
        return await db.query(sql, sqlParams);
    } catch (error) {
        console.error('创建新用户失败:', error);
        throw error;
    }
};
// 修改用户信息
exports.updateUser = async (userId, nickname, avatar, password) => {
    const sql = `
        UPDATE 
            yi_user
        WHERE 
            user_id = ?
        SET 
            nickname = ?,
            avatar = ?,
            password = ?

    `;
    const sqlParams = [userId, nickname, avatar, password];
    try {
        return await db.query(sql, sqlParams);
    } catch (error) {
        console.error('修改用户:', error);
        throw error;
    }
};
