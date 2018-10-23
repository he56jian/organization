const path = require('path')
const fs = require('fs')
const url = require('url')
const http = require('http')
const events = require('events').EventEmitter;
const eventsEmitter = new events;
//创建链接
const MongoClient = require('mongodb').MongoClient;
var mongoUrl = 'mongodb://localhost:27017/user';

http.createServer((req, res) => {
	let _pathname = __dirname;		//获取当前目录
	if (req.method === 'GET') {
		if (!url.query) {
			let para = '';
			let _reqUrl = req.url;
			if (_reqUrl) {			//如果有请求地址的时候
				if (_reqUrl == '/favicon.ico') {				//判断请求的是否为图标；是的话不作为
					return res.end();
				}
				_pathname += url.parse(_reqUrl).pathname;
			}
			//在第一次解析时，就是解析的_pathname ,而第一次的页面为index.html	,
			if (_pathname.charAt(_pathname.length - 1) == '/') {
				_pathname += 'view/index.html';
			}
			res.setHeader('Access-Control-Allow-Origin', '*');			//设置允许跨域
			if (fs.existsSync(_pathname)) {			//路径存在才执行后面
				switch (path.extname(_pathname)) {
					case '.html':
						res.writeHead(200, {'Content-Type': 'text/html'});
						break;
					case '.js':
						res.writeHead(200, {'Content-Type': 'text/javascript'});
						break;
					case '.css':
						res.writeHead(200, {'Content-Type': 'text/css'});
						break;
					case '.gif':
						res.writeHead(200, {'Content-Type': 'image/gif'});
						break;
					case '.png':
						res.writeHead(200, {'Content-Type': 'image/png'});
						break;
					case '.jpg':
						res.writeHead(200, {'Content-Type': 'image/jpeg'});
						break;
					default:
						res.writeHead(200, {'Content-Type': 'application/json'})
						break;
				}
			}
			fs.readFile(_pathname, function (err, data) {
				if (err) console.log(err);
				res.write(data);
				res.end()
			})
		}

	} else if (req.method === 'POST') {
		let _artData = [],
			_userData = [],
			_commentData = [],
			_finishNum = 0;
		MongoClient.connect(mongoUrl, function (err, db) {				//连接数据库
				if (err) console.log(err);
				var dbo = db.db('user');									//创建可操作的user对象；
				dbo.collection('articals', {useNewUrlParser: true}).find({}).toArray(function (err, data) {
					// console.log(Object.keys(data[0]));
					let artKeyArr = Object.keys(data[0]);
					// console.log(Object.entries(data[0]))
					let _len = artKeyArr.length;
					for (let i = 0; i < _len; i++) {
						_artData[i] = artKeyArr[i] + ':' + data[0][artKeyArr[i]];
					}
					_artData = _artData.join('#');
					res.write(_artData,function () {
						eventsEmitter.emit('finishOne')
					})
				})
				dbo.collection('users', {useNewUrlParser: true}).find({}).toArray(function (err, data) {
					let conData = [];
					for (let k = 0, kLen = data.length; k < kLen; k++) {
						let userKeyArr = Object.keys(data[k]);
						// console.log(Object.entries(data[0]))
						let _len = userKeyArr.length;
						for (let i = 0; i < _len; i++) {
							conData[i] = userKeyArr[i] + ':' + data[k][userKeyArr[i]];
						}
						_userData[k] = conData.join('$$');
					}
					_userData = _userData.join('#');
					res.write(_userData,function () {
						eventsEmitter.emit('finishOne')
					})
				})
				dbo.collection('comments', {useNewUrlParser: true}).find({}).toArray(function (err, data) {
					for (let k = 0, kLen = data.length; k < kLen; k++) {
						let commentKeyArr = Object.keys(data[k]);
						// console.log(Object.entries(data[0]))
						let _len = commentKeyArr.length;
						for (let i = 0; i < _len; i++) {
							_commentData[i] = commentKeyArr[i] + ':' + data[k][commentKeyArr[i]];
						}
					}
					_commentData = _commentData.join('#');
					res.write(_commentData,function () {
						eventsEmitter.emit('finishOne')
					})
				})

				eventsEmitter.on('finishOne',function () {
					_finishNum++;
					if(_finishNum >= 3){
						eventsEmitter.emit('finishAll');
					}
				})
				eventsEmitter.on('finishAll',function () {
					res.end()
				});
				// dbo.collection('users')
				// 	.find().toArray(function (err, result) {
				// 	if (err) throw err;
				// 	db.close()
				// 	res.write(result);
				// });
				// dbo.collection('comments')
				// 	.find().toArray(function (err, result) {
				// 	if (err) throw err;
				// 	db.close()
				// 	res.write(result);
				// });
			}
		)


	}


}).listen(1204);


//出现的问题:Cannot find module 'E:\web_learning\myblog\nodejs-blog\demofavicon.ico'
// 说明：就是说没有找到nodejs-blog下的ico文件；
//解决： 两种思路：1、在req.url获取请求时判断，是请求ico时，结束不操作；2、是添加一个ico图标
//
// 出现的问题2：Cannot set headers after they are sent to the client
// 说明：出现这种情况是说明浏览器请求一次后，服务器却返回了两次或以上的响应；因为代码中存在异步回调，不处理好就会出现；
// 解决：在每次请求处理中，一旦服务器返回响应，就及时的使用return；用以结束当次服务器的响应；

//出现的问题3：页面出来了，但是样式没有；但是没有报错
//说明：css样式表没有解析，查看后分析为fs.readFile的第一个参数为固定的地址，一直解析的就是html，css没有解析；
//解决：把fs.readFile第一个参数设置为_pathname;

//出现的问题4：no such file or directory, open 'G:\TanZhou\Task\newBlog\newviews\index.html'
//说明，没有找到该文件或者目录；
