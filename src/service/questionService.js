const questionDao = require('../dao/questionDao.js');

exports.getQuestion = async (cbId, questionId) => {
    const question = await questionDao.getQuestion(cbId, questionId);
    return question;
};
