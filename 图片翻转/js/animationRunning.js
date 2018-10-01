var _runStyle = [
		'Linear', 'Quad', 'Cubic', 'Quart', 'Quint', 'Sine', 'Expo', 'Circ', 'Bounce'
	],
	_runType = [
		'easeIn', 'easeOut', 'easeInOut'
	];


//根据时间来设置动画
//需要获取的值有，1、节点对象；2、修改的参数对象；3、总共花费时间；4、回调函数
function animationRunning(ele, attr, animationTime, callback) {

	if (!_runStyle[animationTime._runStyle]) {             //如果运行方式不存在;则设置为默认。
		animationTime._runStyle = 0;
	}
	// 获取最开始时间
	var startData = new Date().getTime();
	//用于存放要变化的数据的开始及结束的值
	var attrVal = {},//每次都要清空，否则之前的参数还是会出现
		_strarSpe,
		_strarSpeList,
		fnAttr = {};        //存放的都是特殊样式中的样式和值。
	// 获取初始值,并保存
	for (var key in attr) {
		if (typeof attr[key] === "object") {

			//往fnAttr中传入特殊样式的键和值。
			if (ele.style[key]) {
				_strarSpeList = ele.style[key].split(' ');
			} else {
				_strarSpe = 0;
			}
			for (var attrKey in attr[key]) {				//key为transform
				if (_strarSpeList) {
					for (let i = 0, iL = _strarSpeList.length; i < iL; i++) {
						if (!_strarSpeList[i].lastIndexOf(attrKey)) {		//如果当前查到了就获取值
							_strarSpe = /\d+/.exec(_strarSpeList[i])[0];
						}
					}
				}

				fnAttr[attrKey] = {};
				fnAttr[attrKey].start = _strarSpe;
				fnAttr[attrKey].end = attr[key][attrKey];		//最后的结果
				fnAttr[attrKey].change = fnAttr[attrKey].end - _strarSpe
			}
			attrVal[key] = fnAttr
			//把特殊对象的值传入。

		} else {
			var _start = parseFloat(getStyle(ele)[key]) || 0;
			var _change = attr[key] - _start;
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
		var time = new Date().getTime() - startData;
		// 当时间比例大于等于1时，就说明时间已过最大值
		if (time >= animationTime.duration) {
			setStyle(ele, attrVal, animationTime.duration, animationTime);
			callback && callback.call(ele);//结束后执行。
		} else {
			setStyle(ele, attrVal, time, animationTime);
			requestAnimationFrame(run);
		}
	}
}

//设置参数，传入要设置的节点，以及要设置的属性
function setStyle(ele, attrval, time, animationTime) {
	for (var key in attrval) {
		if (typeof attrval[key] === "function") {
			attrval[key](key, time, animationTime);
		} else if (key === 'transform') {
			var nowStyle = '';
			for (var val in attrval[key]) {
				var _change = time * attrval[key][val].change / animationTime.duration

				var nowVal = `(${attrval[key][val].start*1 + _change }deg) `
				console.log(typeof attrval[key][val].start)
				nowStyle += val + nowVal
			}
			ele.style[key] = nowStyle
		} else {
			var em = 'px';
			if (key === 'opacity') {
				em = '';
			}
			ele.style[key] = getStep(time, attrval[key].start, attrval[key].change, animationTime) + em;
		}
	}
}

//根据属性获取值,
function getStep(goTime, startValue, changeValue, animationTime) {
	if (_runStyle[animationTime._runStyle] === 'Linear') {
		return Tween[_runStyle[animationTime._runStyle]](goTime, startValue, changeValue, animationTime.duration,);
	} else {
		switch (animationTime._runType) {
			case 0:
				return Tween[_runStyle[animationTime._runStyle]].easeIn(goTime, startValue, changeValue, animationTime.duration,);
			case 1:
				return Tween[_runStyle[animationTime._runStyle]].easeOut(goTime, startValue, changeValue, animationTime.duration,);
			case 2:
				return Tween[_runStyle[animationTime._runStyle]].easeInOut(goTime, startValue, changeValue, animationTime.duration,);
			default:
				console.log(goTime, startValue, changeValue, animationTime.duration,)
				return Tween.Linear(goTime, startValue, changeValue, animationTime.duration,); //当设置参数为错误的时候，默认为匀速
		}
	}
}

//获取初始样式
function getStyle(ele) {
	return ele.currentStyle || getComputedStyle(ele);
}


//返回n~m的数
function randomNum(n, m) {
	if (n > m) {
		n = n + m;
		m = n - m;
		n = n - m;
	}
	return Math.floor(Math.random() * (m - n + 1)) + n;
}