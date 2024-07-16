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
