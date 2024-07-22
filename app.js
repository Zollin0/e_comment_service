// 定义 Node Express 服务器
const express = require('express');
const app = express();

// 设置允许跨域访问
const cors = require('cors');
app.use(
    cors({
        origin: '*',
        methods: ['GET', 'POST']
    })
);
// 将请求体解析为 JSON
app.use(express.json());
// 错误处理
app.use(require('./src/middleware/errorHandler'));
// 响应格式化
app.use(require('./src/middleware/responseFormat'));

// 路由规则
app.use('/api/user', require('./src/controller/userController.js')); //用户
app.use('/api/commentSubject', require('./src/controller/commentSubjectController.js')); //评论体
app.use('/api/comment', require('./src/controller/commentController.js')); //评论
app.use('/api/score', require('./src/controller/scoreController.js')); //评论体评分
app.use('/api/question', require('./src/controller/questionController.js')); //提问

// 导入服务器配置
const server_conf = require('config').get('serverConfig');
// 启动服务器
const server = app.listen(server_conf.port || 33001, server_conf.host || '127.0.0.1', () => {
    console.log('Server running at http://%s:%s', server_conf.host, server_conf.port);
    console.log('Environment=%s', process.env.NODE_ENV);
});
