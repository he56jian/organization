

/**
 * 获取样式
 * @param ele 需要操作的节点。
 * @returns 返回节点对象的实时样式表。
 */
function getStyle(ele) {
	return ele.currentStyle || getComputedStyle(ele);   //兼容IE写法
}

/**
 * 获取n~m的随机数
 * @param n
 * @param m
 * @returns 返回n~m的随机数
 */
function randomNum(n, m) {
	if (n > m) {
		swapNum(n, m);
	}
	return Math.floor(Math.random() * (m - n + 1)) + n;
}


/**
 * n和m的数值替换
 * @param n
 * @param m
 * @returns 返回交换后的对象。 
 */
function swapNum(n, m) {
	if (typeof n === "number" && typeof m === 'number') {
		n = n + m;
		m = n - m;
		n = n - m;
		return {
			n: n,
			m: m
		}
	}

}


/**
 * 添加事件监听
 * @param ele 操作的节点
 * @param eventType 操作的触发事件类型
 * @param eventFn 执行函数
 * @param isCapture 是否冒泡;
 */
function eventBind(ele, eventType, eventFn, isCapture) {
	var fn = function () {
		eventFn.call(this);
	};
	var eventTypeList = eventType.split(',');
	for (var evtT = 0, evtL = eventTypeList.length; evtT < evtL; evtT++) {
		eventType = eventTypeList[evtT];
		//如果是主流浏览器
		if (window.addEventListener) {
			ele.addEventListener(eventType, fn, isCapture);
		} else {
			//如果是IE低版本
			ele.attachEvent('on' + eventType, fn);
		}
		if (!ele._evenHandler) {          //如果是第一次执行，则创建ele._eventHandler为json数据类型
			ele._evenHandler = {};
		}
		if (!ele._evenHandler[eventType]) {      //如果是第一次执行，创建ele._evenHandler[eventType]为数组对象。
			ele._evenHandler[eventType] = [];
		}
		ele._evenHandler[eventType].push(fn);       //把每次的执行函数都存入ele._evenHandler[eventType] 中
	}
return fn;

}

/**
 * 解除事件监听
 * @param ele 操作的节点
 * @param eventType 操作的触发事件类型
 * @param eventFn 执行函数
 * @param isCapture 是否冒泡;
 */
function unEventBind(ele, eventType, eventFn, isCapture) {
	//如果是主流浏览器
	if (ele.addEventListener) {
		ele.removeEventListener(eventType, eventFn, isCapture);
	} else {
		//如果是IE低版本
		ele.detachEvent('on' + eventType, eventFn);
	}
}


/**
 * 一次性事件
 * @param ele
 * @param eventType
 * @param fn
 * @param isCapture
 */
function onceEvent(ele, eventType, fn, isCapture) {
	var handlerFn = eventBind(ele,eventType,function (e) {
		var e = e || window.event;
		fn.call(this,e);
		console.log(ele,e.type,handlerFn,isCapture);
		unEventBindOne(ele,e.type,handlerFn,isCapture);
	},isCapture);

}




/**
 * 取消事件传递
 * event 传递的要取消事件传递的事件对象
 */
function cancelEventTransmit(event) {
	var event = getEvent(event);
	if(event.stopPropagation){				//在主流浏览器中存在冒泡和捕获传递方式，所以使用event.stopProagation()方法取消事件的传递。
		event.stopPropagation();
	}else if(!event.cancelBubble){			//IE 中事件传递方式只有为冒泡传递，或者不传递。默认event.cancelBubble=false，为冒泡。
		event.cancelBubble = true;
	}
}


/**
 * 取消默认行为
 * event 传递的要取消事件传递的事件对象
 */
function cancelDefault(event) {
	var event = getEvent(event);
	if (event.preventDefault) {//如果是主流浏览器，则存在event.preventDefault方法存在。
		event.preventDefault();
	} else if (event.returnValue) {
		event.returnValue = false;
		console.log(event.returnValue );
	}
}

/**
 * 取消滚轮事件
 * 由于滚轮事件在（IE、谷歌）、火狐的表现是不一样的
 * ele 指定要添加事件的对象
 * fn 滚轮事件触发后的执行函数
 * bool 是否传递事件。
 *
 *
 */
function scrollEvent(ele,fn,bool) {
	if(ele.addEventListener){   //如果为主流浏览器
		if(ele.onmousewheel === undefined){					//由于火狐和其他主流浏览器的表现不一致。所以这里还要判断是否为火狐
			ele.addEventListener('DOMMouseScroll',fn,bool);			//火狐浏览器
		}else{
			ele.addEventListener('mousewheel',fn,bool);				//其他主流浏览器
		}
	}else if(ele.attachEvent){															//IE浏览器
		ele.attachEvent('onmousewheel',function () {
			fn.call(ele);
		});								//为什么不能直接写fn，因为如果写了fn,则在函数fn中this指向window。需要this指向ele节点。但是使用call会直接执行。所以要用函数包起来。
		//不能写bind,是因为在IE中没有bind。
	}
}

/**
 * 获取滚动数据对象
 * @param ele 当前节点，用于判断当前是哪个浏览器。
 * @param event 事件对象
 * @returns {{scrollDirection: string, scrollExtent: number}}
 */

function getScrollData(ele,event) {
	var event = getEvent(event);
	var scrollDirection = '' ,//滚动方向
		scrollExtent = 0;	     //滚动程度
	if(ele.addEventListener){   //如果为主流浏览器
		if(ele.onmousewheel === undefined){					//由于火狐和其他主流浏览器的表现不一致。所以这里还要判断是否为火狐
			scrollExtent = event.detail/3;
			scrollDirection =(scrollExtent > 0 ? 'bot':'top');		//如果向下滚动为bot
		}else{
			scrollExtent = event.wheelDelta /120;			//其他主流浏览器
			scrollDirection =(scrollExtent > 0 ? 'top':'bot');
		}
	}else if(ele.attachEvent){															//IE浏览器
		scrollExtent = event.wheelDelta /120;
		scrollDirection =(scrollExtent > 0 ? 'top':'bot');
	}
	return {
		scrollDirection:scrollDirection,
		scrollExtent:scrollExtent
	}
}

/**
 * 获取事件对象
 * @param e 事件对象
 */

function getEvent(event) {
	return event || window.event;

}

/**
 *
 * @param ele 要遍历的对象
 * @param fn  遍历后执行的数据
 */

function ergodic(ele,fn) {
	if(ele.valueOf() === Object){			//如果需要遍历的是对象
		var _eleLenght = ele.length;
		for(var i = 0;i < _length;i++){
			fn.call(this,i);
		}
	}

}