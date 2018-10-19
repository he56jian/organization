##CSS3
####新增的元素选择器:
>1. ele>ele  div>p  div下面的所有子级p标签
>2. ele1~ele2 div~p 选择所有前面有div的所有p标签
>3. ele+ele   div+p 选择前面紧挨着div的所有p标签
####属性选择器：
>1. [attribute]  [target]  选择所有带有target属性的标签
>2. [attribute=value]  [target=_blank]  选择所有有target='_blank'的元素
>3. [attribute^=value]  a[src^='http']  选择所有src属性值以http开头的a标签；
>4. [attribute$=value]  a[src$='.pdf']  选择所有src属性值以.pdf结尾的a标签；
>5. [attribute*=value]  a[src*='abc']   选择所有src属性值包含子字符串‘abc’的所有a标签；
####伪类选择器：
>1. :root  :root   选择文档的根元素
>2. ：empty  p:empty  选择所有没有子元素的p标签（包括文本节点）
>3. ：target a:target 选择当前活动的a标签
>4. ：：selection  选择被用户选取的元素部分；
>5. ：not(selector) :not(p)  选择所有非p标签的所有标签；
####文本选择器：
>1. :first-letter   p:first-letter   选择每个p标签的首字母
>2. ：first-line    P:first-line     选择每个p标签的首行
>3. ：before        p:before         在每个p标签前插入内容
>4. ：after         p：after         在每个p标签后面插入内容
####表单选择器：
>1. :focus      input:focus     选择获取焦点的input元素
>2. :enabled     input:enabled  选择每个启用的input元素
>3. ：disabled    input:disabled  选择每个禁用的input元素
>4. ：checked      input:checked  选择每个被选中的input元素；
####子类选择器：
>1. :first-of-type  p:first-of-type  选择属于其父元素的首个p元素下的所有p标签；
>2. ：last-of-type  p:last-of-type   选择属于其父元素下的最后一个p元素下的所有p标签；
>3. ：only-of-type  p:only-of-type   选择属于其父元素下唯一的p元素下的所有p标签；
>4. ：only-child    P:only-child     选取属于其父元素的唯一子元素下的所有p标签；
>5. ：nth-child(n)  p:nth-child(2)   选择属于其父元素下的第二个子元素下的所有p标签；
>6. ：nth-last-child(n)  p:nth-last-child(2)  选择属于其父元素下倒数第二个元素下的p
>7. :nth-of-type(n)   p:nth-of-type(2) 选择属于其父元素下的第二个元素下的所有p
>8. ：nth-last-of-type(n)  p:nth-last-of-type(2) 选择属于其父元素下的倒数第二个元素下的所有p标签；
>9. ：last-child    P:last-child   选择属于其父元素下的最后一个子元素的所有p标签；
>10. ：first-child  p:first-child  选择属于其父元素下的第一个子元素的所有p标签；
###RGBA的颜色设置
>说明：多了透明度的设置；
###字体单位：
>####px:
>>使用具体像素为单位,好处是比较精确；但是在浏览器缩放时浏览页面会处于异常；
>####em：
>>em是以父级大小为参考的单位，好处是字体可以自适应，但是父级元素标签发送改变时字体大小也变得不确定；
>####rem:
>>rem是相对于根元素html标签的，这样意味着只需要在根元素确定一个参考值就可以了；
###文字样式：
>text-overflow：规定文本超出包裹元素时发生的事；
>>clip表示直接裁剪；string表示用给定的字符串代表被裁减的字符；ellipsis表示用省略号表示；

>text-shadow：向文本添加阴影
>>写法：h-shadow v-shadow blur color;
>>分别表示：h-shadow为水平阴影的位置；v-shadow为垂直阴影的位置；blur为模糊距离；color为阴影颜色；
###其他属性：
>box-shadow:向盒子添加阴影；
>>写法：`box-shadow:h-shadow v-shadow blur spread color;` 
>>属性值：h-shadow为水平阴影的位置；v-shadow为垂直阴影的位置；blur为模糊距离；spread为阴影的尺寸；color为阴影的颜色，最后可以加一个inset表示内部阴影（默认为外部阴影）；

>min-width:盒子最小可以接受宽度；

>max-width:盒子最大可以接受宽度；

>min-height:盒子最小可以接受的高度；

>max-height:盒子最大可以接受的高度；

>box-sizing:盒子模式；
>>content-box:正常盒子，border和padding不计算如width内；
>>border-box:怪异模式，border和padding计算入width内；

>background-size:规定背景图片的尺寸；

>outline:轮廓线；只有能获取的焦点的元素才拥有
>>1. 其是绘制在元素周围的一条线，位于边框边缘的外围，可以起到突出元素的作用；
>2. 其不占据空间尺寸；
>3. 只有在获取焦点或者激活时呈现
>4. 属性值：
>>outline-width:规定边框的宽度；
>>outline-color:规定边框的颜色；
>>outline-style:规定边框的样式；

>linear-gradient:线性渐变；
>>其是background-color的一个属性；详细写在css文档里；
####文章分栏
>colum-width 栏宽

>colum-count 列宽

>colum-gap 列间距

>colum-rule 分隔线


##响应式设计
>######说明:
>css3提供了更加强大的media queries,你可以针对不同media类型设置表达式，根据不同条件设置不同的样式；它可以在不修改页面内容的情况下，为不同设备提供不同的样式效果；

>######使用:
>1. 在标签中的media属性中添加（min-width）或者（max-width)使用前的判断语句；
>2. 在样式表中添加@media 后面跟上选择语句对各个设备各种条件进行选择；
>3. 其语句主要放在link标签中；
>4. 其有几个关键字：only、and、not

###transition过渡
>######简写模式：
>`transition:transition-property transition-duration transition-timing-function transition-delay`
>>1. transition-property:指明要过渡的属性；值为none(没有属性改变);all(默认);indent(元素属性名);
>>2. transition-duration:指明元素转换过程的持续时间；单位为s或者ms
>>3. transition-delay:指明过度开始执行前的延迟时间；
>>4. transition-timing-function:根据时间的推进去改变的属性值的变换率；
>>>常见值为ease(逐渐变慢)/linear(匀速)/ease-in(加速)/ease-out(减速)/ease-in-out(加速然后减速)/贝赛尔曲线
###transform变形
>######简写模式：
>`transform:rotate | scale | skew| translate`
>######说明：
>1. rotate(<angle>)：指定一个2D旋转，正数顺时针，负数逆时针；
>2. translate(x,y):设置移动效果
>3. scale(number,number):缩放效果
>4. skew(angle,angle) 扭曲效果；

>transform-origin:设置旋转元素的基点位置；

###animation动画：
>######说明：
>1. 它和transition过渡的区别，为一个为自动触发，一个要人为触发；
>2. 它只应用在页面上已存在的dom元素；
>######@keyframes:动画关键帧；
>它和animation配合使用；用来安排动画过程；
>######简写:
>`animatin: name duration timing-function delay itration-count direction`
>>1. name为动画的名称，用来和@keyframs的name挂钩；
>2. duration为动画播放时间；
>3. timing-function:动画变化方式，和过度的transition-timing-function类似；
>4. delay：延时时间；
>5. itration-cout :循环次数；默认为1，infinite为无限循环；
>6. direction:设置是否应该反向播放动画；设置alternate则为奇数正常播放，偶数反转；

>animation-play-state:设置元素动画的播放状态；running为正在运动，paused为暂停；

##弹性盒子模型：
>######说明：
>1. 用来对盒状模型提供最大的灵活性；
>2. 任意的容器都可以指定为Flex布局；
>3. 采用flex布局的元素，称为容器，其子元素自动成为容器成员，称为项目；
>4. 容器默认存在两条轴线：主轴和交叉轴；默认主轴为从左到右；
>######属性：
>flex-direction:设置主轴方向（决定了项目的排列)
>>row(默认):水平从左向右；row-reverse:水平从右向左；colum:垂直从上向下；colum-reverse:垂直从下至上；

>flex-wrap:默认情况，项目都排列在一条轴线上，flex-wrap属性定义，当一条轴线放不下时，是否换行；
>>nowrap(默认):不换行；wrap:换行，第一行在上；wrap-reverse:换行，第一行在下；

>justifity-content:定义项目在主轴方向上的对齐方式；
>>flex-start(默认):左对齐，flex-end:右对齐；center:居中；space-between:两端对齐，项目间间隔相等，和边框间距为0；space-around:每个项目两端的间距相等，和边框有间距；

>align-items:设置项目在交叉轴的对齐方式；
>>flex-start(默认):交叉轴的起点对齐；flex-end:交叉轴的终点对齐；center:交叉轴的居中对齐；baseline:项目的第一行文字的基线对齐；stretch(默认):如果项目未设置高度或者设为auto,将占据整个容器高度；

>align-content:定义了多条交叉轴的对齐方式；（如果只有一条交叉轴，该属性不起作用）
>>flex-start:与交叉轴的起点对齐；flex-end:与交叉轴的终点对齐；center:与交叉轴的中点对齐；space-between:与交叉轴的两端对齐，与边框间距为0，项目之间的间距相等；space-around:与交叉轴的两端对齐，每个项目的间距都相等；

>order:项目中的属性；定义项目间的排列顺序；数值越小，排列越靠前，默认为0；