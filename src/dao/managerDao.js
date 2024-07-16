const db = require('../utils/dbConnPool/mariadb');

//获取管理员信息
exports.getManager = async (managerId) => {
    const sql = `
        SELECT 
            *
        FROM 
            e_managers
        WHERE
            manager_id = ?
    `;
    const sqlParams = [managerId];
    return await db.query(sql, sqlParams);
};

// 创建新管理员
exports.createManager = async (managerId, managerAccount, managerPassword) => {
    const sql = `
        INSERT INTO 
            e_managers
        (
            manager_id,
            manager_account,
            manager_password
        )
        VALUES
        (
            ?,
            ?,
            ?
        )
    `;
    const sqlParams = [managerId, managerAccount, managerPassword];
    try {
        return await db.query(sql, sqlParams);
    } catch (error) {
        console.error('创建新管理员账号失败:', error);
        throw error;
    }
};
