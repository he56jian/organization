# Node.js
node.js是一个单线程，基于事件驱动，非阻塞式的异步编程方式；
它适用于高并发（即时通讯）I/O密集型;
前端不适合用同步方法，因为受到浏览器的限制，没有权利直接操作文件，在读取的时候通常都是读取服务器端的，都是去加载服务器端的模块、网络I/O、其他耗时操作；
node把所有的行为都定义为事件；
Node.js的运行都是在命令行中运行的；并且都要在当前文件夹目录下；
node.js是基于common.js规范的
> ####common.js规范：
>1. 在任何地方都能用js实现；
>2. 一个独立的文件就是一个独立的模块；
>3. 在js中，如果1.js调用2.js,那么1.js里的全局和2.js的全局合并；
>
###npm 
> ####说明:
>1. 对包的管理，对包的实现
2. 各个功能都能在npm里查找到；
3. 各个模块都存在www.npmjs.com服务器中
4. 其在node.js配置好后，自动配置；
> ####操作:
>1. 连续按两次ctrl+c ：退出node命令行
> 2. cls:清空命令行
>3. 执行node应用：node demo.js/demo
>4. 输入npm help： 查看npm相关命令
>5. npm -l ：显示支持的命令
>6. common的项目管理，入口文件：package.json(每个类都有，里面有对项目的描述）
>>package.json里面有个dependencies属性，其里面为项目所用到的所有依赖，如果原本就存在依赖，在初始化时会自动安装（或者npm i自动安装）；如果后期安装的模块，也会出现在该属性里；
>7. npm init ：初始化环境（默认就好,后期可在package.json中修改）
    >>######其中参数:
    package name:包名，默认为demo
    version:版本号
    description:描述
    entry point: 入口文件
    test command:
    git repository:仓库地址
>8. npm init -y ：初始化环境（直接使用默认值）
>9. npm install 模块名 -g :全局安装模块；可简写成npm i 模块名 -g(它会自动创建node-modules,里面放的都是依赖的模块)
    >>> 依赖分为开发时使用的依赖和上线后使用的依赖；
    使用-g，表示开发时使用的依赖；
    使用-s,表示只在项目上线后用的依赖；（生成环境使用的依赖）即在使用时才加载；
    可以使用 npm i 模块1 模块2 -g同时安装多个模块；
    >>注意:
    >>>由于npm模块的官网时国外的，有点慢；所有可以用淘宝镜像；
    要先npm i -g cnpm -registry=https://registry.npm.taobao.org,然后后面时候时，直接cnpm就行； 
>10. npm i -g nodemon 用于处理每次修改服务器文件，都要重新启动服务；
###require()  方法用于导入模块；
> ####使用：
>1. const Koa = require('koa');
2. const app = new Koa();
使用require请求模块koa,返回一个构造函数，使用new执行并生成实例；

> ####注意：
>1. 在node.js里的模块，每个模块的全局都不共享，可以限制传递的参数数据；因为它返回的值是自定义的对外公开数据；
2. 模块里面的数据不会自动导出；可以使用global.str = 1,挂载全局遍历str;
其中global是定义全局唯一的方法；
3. 其导入本地的自定义模块文件时，要带./表示当前目录，只有node里规定的模块可以不用；如果导入的是.js文件，其后缀可以不写;
4. 在require导入时，不加./，默认为核心模块（即node自带的模块）；其解析器不在当前文件夹中寻找，回到核心模块中查找；
4. 在导入的时候，把导入的文件全部包装到一个函数里，全变成了局部变量；
5. 在导入的时候，默认读取的就是参数文件下面的module.exprots对象，其值module.exports为返回的值，其本质是一个对象，每个模块都有变量module.exports；如果写多个，前面的会被覆盖；
6. 在文件内部一般都有默认的全局exports,指向了module.exports的引用；所以可以用exports.str = 1;把module.exports.str传出去；

###setImmediate()方法
> ####说明
>1. 其接收一个参数，在node.js事件循环到当前回合结束时，要调用的函数；其是异步的；

注意：
> 1. promise里的then是异步的，而promise.resolve()是同步的；
2. process.nextTick()接收一个回调，其回调在同步完后执行，也是异步执行；
3. node通过事件循环，把所有信息都当作事件处理；
    i. 第一步相当于声明 while循环（无限循环）
    ii. 放入事件队列：
      macro-task: script(同步代码）> settimeout()/setinterval() > setImmediate() > I/O
      micro-task: process.nextTick > promise.then 
    iii. 其事件队列都是同步的，只有其回调是异步的；
4. 其解析的顺序：
    i. script全部代码或者一个单独的macro-tack事件；
    ii. 处理所有micro-task队列里的所有事件；
    每执行macro-task里的一个事件，就会处理所有micro-task事件；
    
事件观察者：idle观察者 > I/O观察者 > check观察者
###node核心模块
>####events事件模块：
使用:
> ```javascript
  const Events = require('events').EventEmitter //它是一个接口，部署了一个观察者模式，发布订阅者模式；
  const eventsEmitter = new Events          //构造函数创建实例
  eventsEmitter.on('someEvents',fn);        //自定义事件someEvents的监听
  eventsEmitter.emit('someEvents')      //触发自定义someEvents事件；
>```
注意：
想要其他类具备该方法，可以通过Fn.prototype.__proto__ = eventEmitter.prototype
newListener事件：绑定一个新的事件监听，就会触发；要加on;
removeListener事件：监听解绑事件；
off 删除事件 相当于removeListener；
once 一次性事件
getMaxListeners()   返回当前的最大监听器的限制值；超出设置会有警告，也会执行；
setMaxListeners(2） 设置最大监听器的限制数为2；
listeners('name')   对应事件监听器组成的数组副本
>####path模块
说明:用于解析url里？后面的数据；
写法：
>```javascript
    const path = require('path');
    //全局变量：__dirname 返回当前文件所属文件夹路径，绝对路径
    //全局变量：__filename: 返回当前文件的路径
    path.join('a','b')  //拼接目录，a为父级，b为子级目录；其兼容性良好，能识别不同系统并拼接；
    path.resolve( ) //返回绝对路径；
    path.parse(__filename)  //格式化__filename转成对象；
>```
>####url模块:
说明：其时有格式的；存在两套规则，一套node实现的，一套参照whatwg Api规范实现；
使用：
>```javascript
const {URL} = require('url')    //解析require('url')对象下面的URL对象；
const myUrl = new URL() //使用构造函数创建实例
/*
  传入的参数为要解析的地址；  
  myURL为一个URL对象；
  其值：
  href为全地址；
  origin为协议+主机名
  protocol为协议
  username:为用户名
  password：为密码
  host:主机名
  hostName:主机名
  post:端口号，默认为80
  pathname:路由名字
  search:对路由请求时传递的参数
 >*/
 //重新实现
 const urk = require('url')
 const mUrk = urk.parse('parm')
 url.resolve(from,to)
 const {resolve} = require('url')
 resolve('/usr/local','node')       // /usr/node
 resolve('/usr/local/','node')      // /usr/local/node
 resolve('/usr/local','../node')    //  /node
 //如果后面的参数为绝对路径，直接返回
 //如果前面的参数为协议+主机名，则为根目录
>```
>####querystring
说明：查询字符串；
用法：
>```javascript
const qs = require('querystring')
qs.parse(myURL.search)          //把路由请求时传递的参数对象转成map
//注意，它不会切除第一个？
qs.stringify(obj[,sep[,eq[,options]]])
    //obj：要序列化成URL查询字符串的对象
    //seP:用于界定查询字符串中键值对的子字符串，默认为‘&’
    //eq:用于界定查询字符串中键与值的子字符串，默认为‘=’
    //里面的属性corge代表分割符，默认为&
>```
>####assert模块
说明：用于判断是表达式的值是否和期望值一致；如果表达式得到的不是期望的值会报错；如果得到期望的值，正常执行
创建：
>```
    const assert = require('assert');
>```
使用：
assert()接收三个参数：
>1. 表达式；
2. 如果第一个参数的布尔值不为true,则输出报错信息；
assert.ok()和assert一样；
assert.equal(表达式，预期值，报错信息）     //其使用的是==，不是严格等于，数与true比较都是转成数字；
assert.noEqual(表达式，预期值，报错信息）   //不等于
assert.strictEqual(表达式，预期值，报错信息） //严格等于
assert.notStrictEqual(表达式，预期值，报错信息） //不严格等于
assert.deepEqual(表达式，预期值，报错信息）  //两个对象的属性一一相等，值相等；（不严格等于）
>####crypto
说明：用于对明文的加密
使用：
>```javascript
const crypto = require('crypto')
crypto.getHashes()          //获取哈希加密的方式
const KEY = 'password'
const obj = crypto.createHash('md5')        //生成md5的加密对象
obj.update(KEY)     //使用md5加密对象对KEY进行加密
const password = obj.digest()   //输出加密后的密码，只能输出一次
//加参数选择输入方式，base64 64位，hex 16进制；
>```
>####fs模块
说明：用于操作文件系统，I/O操作很耗时
使用：
>```
const fs = require('fs')
fs.readFile('./x.txt',function(err,data){}) //异步方法；
fs.readFileSync('./Y.txt')      //同步不需要回调，在第二个参数中可以指定编码集，也可以忽略；第一个参数为文件路径；
fs.writeFile('./2.txt',data,function(err){ //写入只有一个形参}
//往2.txt文件中写入data,如果没有2.txt则创建
fs.existsSync(path)     //判断路径是否存在；
fs.mkdir('./text',mode,function(err){}) //创建目录文件夹，mode为权限（O0777）
fs.readdir('./node',(err,data）=>{data 为当前文件夹下文件的集合}
//读取固定文件夹下的所有文件
fs.watchFile('./node/1.txt',(c,p)=>{//p为修改前的数据，c为修改后的数据}     //监听文件改变事件；
const stat = fs.statSync('./node')
stat.isDirectory()  //判断当前路径是否为目录（即是否为文件夹）
stat.isfile()       //判断当前路径是否为文件；
>```
>####stream流模块
说明：异步回调在处理长时耗时时，要等处理完了才能处理回调，要的时间比较久；stream可以边读边处理；
注意：因为fs本身继承了stream流，所以可以调用其方法；
写法：
>```
const fs = require('fs');
const re = fs.createReadStream()        //创建读取流
//参数一为文件地址；
//流体有两种状态：暂停（默认状态），释放（read.resume())
re.resume()         //让数据流动
re.on('end',()=>{ //读取结束事件}）
re.setEncoding('utf-8')     //把流的编码格式设置为utf8
re.on('data',(data=>{ data 数据默认为2进制} 
//是多次触发的，使流从暂停变成释放状态，并且可以获取相应是否的数据；
const write = fs.createWriteStream('2.txt') //获取写入流
re.pipe(write)  //完成文件的复制，把re的数据通过一根管子源源不断的输入write;
const Readable = require('stream').Readable //创建一个可读流对象的构造函数
const rs = new Readable     //实例化一个可读取流对象；
rs.push(data)               //往流中填充数据data
rs.push(null)           //把流关闭，不能push
process.stdout标准输出的对象，stream的子类；用于控制台输出；
>```
>####util模块
说明：工具类模块
使用：
util.type.isDate(日期对象)  用于判断参数是否为日期对象
util.type.isBooleanObject(value):   用于判断是否为布尔值对象；
>####https
说明：https是一种加密服务，比http多一个密钥；
使用：
>```
const http = require('http')
const server = http.createServer((req,res)=>{ }
/*
    在其回调函数中，参数req为请求体对象，res为响应；
    从浏览器输入网站，把请求发到对应的后台时，该请求信息被node封装成了request请求提对象，即req,跟请求相关的都放在req中；
    而后台返回给客户端的数据为res对象；
    使用res.end()结束响应，把这一次会话结束，不加上这句，会导致网页一直在响应，接收不到数据；该方法只能调用一次；
    res.writeHead()     设置响应参数
        第一个参数：http状态码；
        第二个参数：是一个对象{'content-Type':'text/plain;charset=utf-8'}    //设置返回数据类型，当前为纯文本，text/html是html文本
    在res.end()中参数可传字符串或buffer对象（二进制对象），用于最后输出；在res.end()执行后，当前上下文就结束，后面的函数就没有意义，不再运行；
    访问的地址、路径、url称为路由；
    /表示根目录，主机+端口；其后面的为路由
    req.url    获取路由
    req.method  请求方式
    req.headers 请求头信息
    在请求头中'content-Type':'text/html;charset=utf-8'使res.write里的数据按照html方式解析；
    使用http.createServer创建请求时，会请求两次，一次是内容，一次是图标；
    如果想使用html作为页面输出，可以使用fs读取文件数据，再写出
    fs.readFile('index.html','utf8',(err,data)=>{
        re.write(data)；
        rs.end();
    }
    因为res/req都是继承与stream对象，所以可以用流方式，使用管道把html文件流到res;
    跨域请求不成功，是由于浏览器的原有，出于安全考虑，中途切断数据；其会在请求头和响应头中查找access-Control-Allow-Origin，即允许的源，允许的地址，允许请求服务器的地址，而服务器端没有设置对应的response里发出的请求的源，后台的响应头里允许的源地址如果没有包含请求头里的源地址，就偶然跨域；
    解决：跨域在服务器端设置cors跨域
        res.setHeader('Access-ControlAllow-Origin','*')
        在服务器端发起请求：
        const httpReq = require('http').resquest    //获取请求对象
        const req = httpReq({
            host：‘http://localhost’,
            port:3001,
            method:'GET',
            path:'/'
        },res=>{处理函数})
*/
server.listen(3000,host)    //开启监听端口，host可不写；
>```







###koa
> 说明：koa是一个框架，用于帮助node搭建服务器；
> 步骤：
创建如下代码:
>```javascript
const Koa = require('koa');
const app = new Koa
app.use(async (ctx) =>{
    ctx.body='这是后天返回的数据'
});
app.listen(3000)
```
2.命令行中运行node app启动服务器；
3.在浏览器中输入主机:3000 
    
    





---

在此输入正文




