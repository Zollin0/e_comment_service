const questionDao = require('../dao/questionDao.js');

//查询提问
exports.getQuestion = async (cbId, questionId) => {
    const question = await questionDao.getQuestion(cbId, questionId);
    return question;
};

//创建新提问
