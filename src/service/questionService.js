const questionDao = require('../dao/questionDao.js');

//查询提问
exports.getQuestion = async (cbId, questionId) => {
    const question = await questionDao.getQuestion(cbId, questionId);
    return question;
};

//创建新提问
exports.createQuestion = async (cbId, userId, questionId, text) => {
    const question = await questionDao.createQuestion(cbId, userId, questionId, text);
    return question;
};
