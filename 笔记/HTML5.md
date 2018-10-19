#HTML5
>####HTML5的新特性：
>1. 用于绘画的canvas元素
>2. 用于媒介回放的video和audio元素
>3. 对本地离线存储更好的支持
>4. 新的特殊内容元素：article、footer、header、nav、section
>5. 新的表单控件：calendar、date、time、email、ur、search
>>#####特性的主要体现：
>1. 提高可用性和改进用户的友好体验；
>2. 标签的语义化；
>3. 更多的多媒体元素
>4. 可以很好的替代flash和silverlight
>5. 对涉及网站的抓取和索引时，对SEO比较友好；
>6. 大量应用于移动应用和游戏

>####HTML5的优势：
>1. webStorage:比cookies更大、更有弹性的缓存；
>2. web SQL database：web端的SQL数据库；
>3. Indexed DB:key-value的本地数据库；
>4. Application Cache:将本地常用的页面Cache起来；
>5. WebSocket:实时的和socket联机；
>6. web Workers:以往的javascript都是single thread,透过workers可以有多个运算；
>7. notification:原生的提示信息；
>8. dragn-drop:Html元素的拖拉；
>9. File API:读取用户本机计算机的数据；
>10. geolocation:地理定位
>11. device orientation:设备方向，即手持装置的方向；
>12. speech input:语音输入；
>13. New tags:新的标签，更具语义化；
>14. microData:加入语义的数据让搜索引擎等网站可以正确的显示；
>15. Form type:更多的表单控件类型；
>16. Audio和Video：影片和音乐的原生播放支持；
>17. Canvas的绘图功能支持；

>####旧标签的更改：
>1. `<!doctype html>`
>2. `<meat charset='utf-8'>`
>3. `<link rel='stylesheet' src='index.css'/>`
>4. `script可以不用写type属性；<script></script>`

>####新的全局属性：
>1. contenteditable:要赋布尔值，表示是否允许修改标签内容；
>2. hidden：直接写在标签中，表示隐藏元素；

####废弃的标签：
>#####1. 说明：
>原有的一些html标签造成的效果和表现混淆，所以在HTML5中废弃了，不建议使用；
>#####2. 废弃的标签：
>big center font u s strike frame frameset noframes marquee


####新增的标签：
>####article标签：
>>######说明：
>1. 其字面意思为‘文章’.在web页面表现为独立的内容。如一段名言，一篇新闻，一篇评论，一段联系方式；
>2. 其代码是独立的、完整的相关内容块；
>3. 一般来说article会有header部分，有时也有footer;

>####section标签：
>######说明：
>1. 其字面一是为‘块’，‘部分’。在html5中表现为部分、块、模块；
>2. 主要作用为对页面内容进行分块，对文章进行分段；

>####nav标签：
>>######说明：
>1. 页面导航的链接组；
>2. 放置主要的链接；
>3. 适用场合:传统的顶部导航、商城的左侧导航条、页面的分页部分；

>####aside标签：
>>######说明：
>1. 其字面意思为旁边.
>2. 可以跟页面内容相关，也可以是独立的内容；
>3. 常用于侧边广告、引用、侧边栏；

>####time标签：
>>######说明：
>1. 用于定义元素的时间、日期；
>2. 页面中不可见；主要为了搜索引擎生成更智能的搜索结果；
>>######标签属性：
>1. datatime规定时间，否则有内容给定时间；
>2. pubdate:指示time元素内的日期、时间是文档（或最近的<article>元素）发布的日期；

>####header标签：
>>######说明：
>1. 字面意思为‘头部’
>2. 用于页头、页眉、文档头；

>####footer标签：
>>######说明：
>1. 字面意思为‘脚部’
>2. 用于页脚，结尾；
>3. 可以包含该区域相关的作者信息、相关文档的链接、版权信息、导航、附录、索引、长的版本记录、冗长的许可协议、其他诸如此类的内容等；

>####address标签：
>>######说明：
>1. 字面意思为‘地址’，但是其存放的是联系方式，而不仅仅是地址；
>2. 文档或文章作者或者拥有者的联系方式；

>####code标签：
>>######说明：
>1. 字面意思为‘代码’，
>2. 用于标识程序代码；

>####mark标签：
>>######说明：
>1. 字面意思为‘标记’
>2. 用于突出显示文本；
>3. 其有个默认的背景颜色；chrome为yellow;

>####ins标签：
>>######说明：
>1. 定义文档中的被插入的文本；
>2. 相当于有下划线的文本；

>####del标签：
>>######说明：
>1. 定义文档中被删除的文本；
>2. 相当于添加了删除线的文本；

>####optgroup标签：
>>######说明：
>1. 字面意思为‘选项组’。
>2. 用于对select中的option选项进行分组；

>####progress标签：
>>######说明：
>1. 字面意思为‘进步、增长’
>2. 用于标识任务的进度进程；
>>######标签属性：
>1. max:进度最大值；
>2. value:进度当前值；

>####meter标签：
>>######说明：
>1. 字面意思为‘计量器’
>2. 用于度量给定范围内的数据
>>######标签属性：
>1. min:规定范围的最小值
>2. max:规定范围的最大值；
>3. low:视为低值的范围；
>4. high:视为高值的范围
>5. value:度量的当前值；

###新增的表单类型：
>1. email类型：输入必须为email格式的内容，在提交时会自动验证email域内的值，不正确弹出提示；
>2. url类型：输入必须为url格式的内容，在提交时会自动验证url域内的值，不正确弹出提示；
>3. number类型：输入必须为数值的文本框；其包含标签属性：min最小值，max最大值，step间隔，value默认值；在提交时会自动验证，是否为最小值和最大值的范围，是否为最小值加上数倍的间隔数的值，不是将提示；
>4. range类型：指定范围内的数字，表现形式为滑块；min最小值，max最大值，step间隔，value默认值；
>5. date类型：日期文本框；
>6. week类型：星期文本框；
>7. time类型：时间文本框；
>8. datetime-local:日期时间文本框；
>9. search:搜索文本框；
>10. tel:电话文本框；
>11. color:颜色文本框；

###新增的表单标签：
>1. datelist:用于定义选项列表，用于输入自动匹配；

###新增的表单属性:
>1. autofocus:自动获取焦点，可以写属性值，也可以不写；
>2. form:用于在表单提交时，把不属于表单标签的标签也提交；form值为form；
>3. mutiple:用于允许用户设置多个文件，一般在type='file'中使用，用于上传多个文件；
>4. placeholder:用于设置文本框提示信息；
>5. pattern:用于在表单提交时，验证表单是否符合规则；写入正则表达式用以验证；
>6. required:用于在表单提交时，验证表单不为空的情况；空的时候弹出提示；

##Canvas
>######说明：
>1. 标签定义图形，比如图表和其他图像；
>2. 标签只是图形容器，必须使用脚本来绘制；
>3. 其只是一个标签元素，自己没有行为；其把绘图的API展现给了客户端JavaScript以使脚本能够把想回绘制的东西绘制到一块画布上，其拥有绘制路径，矩形，圆，字符以及图像等功能；
>4. 其dom对象上的getContext方法，返回一个用于在画布上绘画的环境；其参数为'2d'，写法:`var context = cv.getContext('2d');`
>>1. 其方法和属性都是在其环境对象上运行；
>2. `context.fillRect(x,y,width,height)  绘制被填充的矩形`
>3. `context.strokeRect(x,y,width,height) 绘制无填充的矩形`
>4. `context.clearRect(x,y,width,height)  在给定的矩形中清除指定的像素`
>5. `context.fillStyle = '#ff0'  设置或者返回填充绘画的颜色、渐变、模式`
>6. `context.strokeStyle='green'  设置或返回笔触的颜色、渐变、模式`
>7. `context.lineWidth = 10      设置或者返回当前的线条宽度`
>8. `context.lineJoin = '边界类型'  即两条线相交时的拐角类型，bevel:斜角；round:圆角；miter：尖角；`
>9. `context.beginPath()  开始一条路径，或重置当前路径;相当于告诉电脑我开始画图了`
>10. `context.closePaht()  创造从当前位置到起始位置的路径（闭合路径)`
>11. `context.moveTo(x,y)    把路径移动到画布中的指定点，不创建路径；相当于告诉电脑我从哪个位置开始下笔`
>12. `context.lineTo(x,y)    添加一个新点，创建从该点到最后指定点的线条`
>13. `context.fill()      填充当前绘图`
>14. `context.stroke()    绘制已经定义的路径（连线路径）`
>15. `context.save()      保存当前环境的状态`
>16. `context.restore()   返回之前保存过的路径属性和状态`
>17. `context.scale(scaleWidth,scaleheight) 缩放处理1=100%`
>18. `context.translate(x,y)   图形位置处理,相当于把画布重新挪一个位置`
>19. `context.rotate(angle)    把画布根据基点(默认为画布中心)旋转angle的角度`
>20. `context.arc(x,y,r,sAngle,eAngle,counterclockwise)   创建弧/曲线(用于创建圆或者部分圆`
>>>其中x,为圆中心的x坐标；
y为圆中心的y坐标; r 为圆的半径；
sAngle为开始的起始角；以弧度计；弧的圆形的三点钟方向为0
eAngle为结束的结束角；以弧度计；
counterclockwise为选择方向，可选：false顺时针 true逆时针

>>######文本控制：
>1. `context.font = '40px Aral' 文本属性`
>2. `context.fillText(text,x,y,maxWidth) 在画布上绘制‘被填充’的文字`
>3. `context.strokeText(text,x,y,maxWidth) 在画布上绘制无填充的文字`
>4. `context.textAlign='left | center | right' 设置对齐方式`
>5. `context.textBaseline = 'top | middle | bottom' 设置文字基线`
>6. `context.measureText(text)     获取文本宽度`

>>######图像控制：
>1. `context.drawImage(img,画布x坐标，画布y坐标)  在画布上定位图像`
>2. `context.drawImage(img,画布x坐标，画布y坐标，图片width,图片height) 在画布上定位图片，并设置图片大小`
>3. `context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height) 剪切图片后缩放图片粘贴到规定位置`
>>img为规定要使用的图片，视频，画布；sx,可选，开始剪切的x坐标；sy,可选，开始剪切的y坐标；swidth,可选，剪切的宽度；sheight，可选，剪切的高度；x,可选，剪切后放置的位置；y,可选，剪切后防止的位置；width/height,可选，剪切后的缩放宽高；
>4. `context.createPattern(image,'repeat|repeat-x|repeat-y|no-repeat') 在水平或者垂直方向复制图片`
>5. `context.getImageData(x,y,width,height)   获取画布矩形区域的像素信息`
>>返回的是image对象的data属性，该对象包含指定的imageData对象的图像数据，对于imageData对象的每个像素，都包含四个方面的信息，即rgba;
>6. `context.putImageData(imgData,x,y,dirtyX,dirtyY,dirtyWidth,dirtyHeight); 把图片数据（从指定的imagesData对象）放回画布`
>>参数说明：imgData：规定要放回画布的imageData对象；x/y,在画布上放置图像的位置；

##音频和视频
>####audio标签
>1. 说明：网页嵌入音频文件的标准；
>2. 属性：
>>1. controls 显示控制台；
>2. loop 循环播放；
>3. autoplay 自动播放；

>####video标签
>1. 说明：网页嵌入视频的标准；
>2. 属性：
>>1. controls 显示控制条；
>2. loop 循环播放；
>3. autoplay 自动播放
>4. currentTime 设置或返回音频、视频当前播放位置（以秒来计算)
>5. poster 视频封面

>控制方法:
>>1. `media.currentSrc 返回当前资源的rul`
>2. `Media.src = url 返回或者设置当前资源的URL`
>3. `media.currentTime 返回或设置当前资源的播放位置`
>4. `Media.duration 返回当前音频、视频的长度`
>5. `media.paused 是否暂停`
>6. `media.played 是否播放`
>7. `media.autoplay 是否自动播放`
>8. `media.loop 是否循环播放`
>9. `media.play() 播放`
>10. `Media.pause() 暂停`
>11. `media.volume=value 设置音量，介于0.0到1.0之间；`
>12. `Media.muted = true | false 是否静音 `

##web stroage存储
>######说明：
>1. web stroage和cookie和session类似，其有分两类：sessionStroage和locationStroage；
>2. sessionStroage在关闭浏览器后过期，而locationStroage则不会过期，并且没有过期时间；
>######特点：
>1. 容量大，有5M~10M;考虑时以5M来考虑；
>2. 不会随着会话来传输
>3. 接口丰富，读取和写入都方便；
>4. 需要在http协议下使用；
>#####SessionStroage操作
>1. `sessionStroage.setItem(key,value)  存储数据`
>2. `sessionStroage.getItem(key)     根据key获取保存在本地对应的值`
>3. `sessionStroage.remove(key)     根据key查找存储在本地的数据，并删除`
>4. `sessionStroage.length       获取保存在sessionStroage的项目数`
>5. `sessionStroage.clear        清空sessionStroage`
>#####locatioinStroage操作
>1. `locatioinStroage.setItem(key,value) 存储数据·`
>2. `locationStroage.getItem(key)        获取key对应的值`
>3. `locationStroage.removeItem(key)     删除key对应的数据`
>4. `locationStroage.length       获取保存在locationStroage的项目数`
>5. `locationStroage.clear        清空locationStroage`


