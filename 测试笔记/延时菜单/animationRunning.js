var _runStyle = [
		'Linear', 'Quad', 'Cubic', 'Quart', 'Quint', 'Sine', 'Expo', 'Circ', 'Bounce'
	],
	_runType = [
		'easeIn', 'easeOut', 'easeInOut'
	],
	timingFn = function(){};
	attrValue = '';


//根据时间来设置动画
//需要获取的值有，1、节点对象；2、需要修改的参数；3、总共花费时间；4、回调函数
/*
* attr是一个对象，要传入的格式为
* 			{
* 				width：100，
* 				height:100,
* 				transform: {
// 					start: function () {
// 						return {
// 							rotateX: {
// 								start: 0,
// 								change: 180
// 							},
// 							rotateY: {
// 								start: 360,
// 								change: 60
// 						}
// 					},
					up: function (attr, key, time) {
// 						attrValue = '';
// 						for (var attrKey in attr) {
// 							var _value = getStep(time, attr[attrKey].start, attr[attrKey].change, animationTime.duration);
// 								attrValue += attrKey + '(' + _value + 'deg)';  //这里应该是开始加上变化的角度
// 								this.style[key] = attrValue;
// 						}
// 					}
// 				}
* 			}
* 	animationTime传入格式：
* 	{
* 		duration: 1000,       //动画时间
	* delay: 1000,            //延时时间
	* _runStyle: 8,   //1为匀速
	* _runType: 2,
	*
	* }
*
* */

function animationRunning(ele, attr, animationTime, callback) {
	console.log(animationTime);
	if (!_runStyle[animationTime._runStyle]) {             //如果运行方式不存在;则设置为默认。
		console.log('参数设置错误，默认匀速运动');
		animationTime._runStyle = 0;
	}

	if (_runStyle[animationTime._runStyle] === 'Linear') {
		timingFn = Tween.Linear;
	} else {
		switch (animationTime._runType) {
			case 0:
				timingFn = Tween[_runStyle[animationTime._runStyle]].easeIn;
			case 1:
				timingFn =  Tween[_runStyle[animationTime._runStyle]].easeOut;
			case 2:
				timingFn =  Tween[_runStyle[animationTime._runStyle]].easeInOut;
			default:
				timingFn = Tween.Linear; //当设置参数为错误的时候，默认为匀速
		}
	}

	// 获取最开始时间
	var startData = new Date().getTime();
	//用于存放数据开始及结束的值
	var attrVal = {},//每次都要清空，否则之前的参数还是会出现
		fnAttr = {};        //存放的都是特殊样式中的样式和值。
	// 获取初始值,并保存
	for (var key in attr) {
		if (typeof attr[key] === "object") {
			//遍历要添加的值，存入对象中。
			for (var attrKey in attr[key].start()) {
				fnAttr[attrKey] = attr[key].start()[attrKey];
			}
			attrVal[key] = attr[key].up.bind(ele, fnAttr);   //把特殊对象的值传入。

		} else {
			var _start = parseFloat(getStyle(ele)[key]) || 0;
			var _change = attr[key] - parseFloat(getStyle(ele)[key]);
			attrVal[key] = {                                     //开始值和结束值，如果设置为改变值
				start: _start,  //如果获取初始值没有则为0
				end: attr[key],                                 //结束值
				change: _change
			}
		}
	}
	fn();
	//动画函数
	function fn() {
		if (animationTime.delay > 0) {       //首先要判断是否有延迟,如果设置了延迟为0，-1之类的也会出现错误，所以要大于0
			(function nullFn() {
				if (new Date().getTime() - startData < animationTime.delay) {
					requestAnimationFrame(nullFn);
				} else {
					startData = new Date().getTime();   //获取的是延时过后开始的时间。
					run(); //动画运行方法
				}
			})();
		} else {
			run();
		}
	}
	function run() {
		//时间比例，已过时间/总时间 = 已过路程/ 总路程
		var spendTime = new Date().getTime() - startData;
		// 当时间比例大于等于1时，就说明时间已过最大值
		if (spendTime >= animationTime.duration) {
			spendTime = animationTime.duration;
			setStyle(ele, attrVal, spendTime,animationTime.duration);
			callback && callback();
		} else {
			setStyle(ele, attrVal, spendTime,animationTime.duration);
			requestAnimationFrame(run);
		}
	}
}

//设置参数，传入要设置的节点，以及要设置的属性
function setStyle(ele, attrval, spendTime,duration) {
	for (var key in attrval) {
		if (typeof attrval[key] === "function") {
			attrval[key](key, spendTime);
		} else {
			var em = 'px';
			if (key === 'opacity') {
				em = '';
			}
			ele.style[key] = timingFn(spendTime, attrval[key].start, attrval[key].change, duration) + em;
		}
	}
}



//获取初始样式
function getStyle(ele) {
	return ele.currentStyle || getComputedStyle(ele);
}