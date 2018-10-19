window.onload = function () {
//先获取节点
	var oBanner = document.getElementById('banner1'),
		oBannerMain = oBanner.getElementsByClassName('banner1_main')[0],
		oBannerPos = oBanner.getElementsByClassName('banner1_pos')[0],
		oPicLi = oBannerMain.getElementsByTagName('li'),
		oPosLi = oBannerPos.getElementsByTagName('li');
//定义运动的变量
	var _length = oPicLi.length,
		_width = oBanner.offsetWidth,
		index = 0,
		_timer,
		_status = true;

	//轮播广告开始
	//赋值一份
	oBannerMain.innerHTML += oBannerMain.innerHTML;
	//添加点到轮播图中。
	for (var i = 0; i < _length; i++) {
		//创建节点
		var thatLi = document.createElement('li');//可以添加事件 添加
		thatLi.index = i;
		thatLi.onclick = function () {
			if (_status) {
				_status = false;
				clearTimeout(_timer);
				//上一个点击的比当前点击的大时。即index = 5; this.index =1;
				if (index !== this.index) {			//当点击的不是当前的值时
					oPosLi[index].className = '';
					console.log(index - 1, oPosLi[index - 1]);
					index = this.index;
					oPosLi[index].className = 'on';
					animation(oBannerMain, {
						left: index * -_width,
					}, {
						duration: 500
					}, function () {
						if (index === _length + 1) {				//当下一个为最后一个时
							oBannerMain.style.left = 0;
							index = 1;
						}
						_status = true;
						_timer = setTimeout(move, 1000);
					});
				} else {
					_status = true;
					_timer = setTimeout(move, 1000);
				}
			}
		}
		//添加到ul节点中
		oBannerPos.appendChild(thatLi);
	}
	oPosLi[0].className = 'on';
	setTimeout(move, 1000);

	//循环函数
	function move() {
		if (_status) {
			index++;
			_status = false;
			clearTimeout(_timer);
			animation(oBannerMain, {
				left: index * -_width,
			}, {
				duration: 500
			}, function () {
				if (index === _length) {			//当轮播到下次的第一张图时，指针指向第二个。
					oBannerMain.style.left = 0;
					index = 0;
					oPosLi[_length - 1].className = '';
				} else {
					oPosLi[index - 1].className = '';
				}
				oPosLi[index % _length].className = 'on';
				_status = true;
				_timer = setTimeout(move, 1000);
			});
		}
	}

	//轮播广告结束

//导师轮播
	var oTeaContent = document.getElementsByClassName('tea-content')[0],		//最外层的盒子
		oTeaContentItem = document.getElementsByClassName('tea-content-item')[0];		//包含所有图片的盒子
	var _oPosLi = document.getElementsByClassName('tea-content-pos')[0].getElementsByTagName('li');
	_oPosLi[0].className = 'on';			//初始化
	var _liIndex = 0,
		status = true;
	move2(status, oTeaContent, oTeaContentItem, _oPosLi);

	function move2(status, faEle, ele, oLi) {
		var _moveWidth = faEle.offsetWidth;
		ergodic(oLi, function (i) {
			this.index = i;
			oLi[i].onclick = function () {
				if (status) {
					status = false;
					oLi[_liIndex].className = '';
					this.className = 'on';
					animation(ele, {
						left: i * -_moveWidth
					}, {
						duration: 1000
					}, function () {
						status = true;
						_liIndex = this.index;
					}.bind(this));
				}
			}
		});
	}


	//更多大咖导师
	var oTeaMore = document.getElementsByClassName('tea-more')[0];
	oTeaMore.style.top = '10px';
	oTeaMore.onmouseenter = function () {
		animation(this, {
			top: 0
		}, {
			duration: 300
		});
	}
	oTeaMore.onmouseleave = function () {
		animation(this, {
			top: 20
		}, {
			duration: 300
		});
	}


	//立即咨询
	var _atOnce = document.getElementsByClassName('atonce')[0];
	_atOnce.style.top = '10px';
	_atOnce.onmouseenter = function () {
		animation(this, {
			top: 0
		}, {
			duration: 300
		});
	}
	_atOnce.onmouseleave = function () {
		animation(this, {
			top: 10
		}, {
			duration: 300
		});
	}


	//合作平台展示
	var oPlatformItem = document.getElementsByClassName('pla-other-right-title')[0].getElementsByTagName('span'),
		_oPlatItemMain = document.getElementsByClassName('pla-other-right-item')[0],
		_platMain = _oPlatItemMain.getElementsByTagName('ul')[0],
		_platWidth = _platMain.offsetWidth;
	oPlatformItem[0].className = 'on';
	ergodic(oPlatformItem, function (i) {
		this.index = i;
		this.onmouseenter = function () {
			this.className = 'on';
			oPlatformItem[1 - i].className = '';
			animation(_oPlatItemMain, {
				left: i * -_platWidth
			}, {
				duration: 500
			});

		}

	});

//基地展示
	var oFothead = document.getElementsByClassName('foot-item3-header')[0].getElementsByTagName('span');
	var oFotMain = document.getElementsByClassName('foot-item3-main')[0].getElementsByTagName('div');
	ergodic(oFothead, function (i) {
		this.onmouseenter = function () {
			this.className = 'on';
			oFothead[1 - i].className = '';
			oFotMain[i].className = 'show';
			oFotMain[1 - i].className = 'hid';
		}
	});

// 热点咨询广告
	var oFotBan = document.getElementsByClassName('foot-item1-banner')[0],
		oFotBanWidth = oFotBan.offsetWidth,
		_oFotBanIndex = 1,
		_ForStatus = true,
		_ForTimer,
		oFotBanPic = oFotBan.getElementsByClassName('foot-item1-ban-pic')[0].getElementsByTagName('ul')[0],
		_oFotBanLength = oFotBanPic.getElementsByTagName('li').length,
		oFotBanPosLi = document.getElementsByClassName('foot-item1-ban-pos')[0].getElementsByTagName('li');
	oFotBanPic.innerHTML += oFotBanPic.innerHTML;

	// cirRun();

	function cirRun() {
		if (_ForStatus) {
			_ForStatus = false;// cancelAnimationFrame(_ForTimer);
			console.log(_ForStatus);
			animation(oFotBanPic, {
				left: _oFotBanIndex * -oFotBanWidth
			}, {
				duration: 500,
				delay: 1000
			}, function () {
				console.log(1);
				if (_oFotBanIndex === 0) {
					oFotBanPosLi[_oFotBanIndex - 1] = '';
				}
				oFotBanPosLi[_oFotBanIndex - 1].className = '';
				oFotBanPosLi[_oFotBanIndex % _oFotBanLength].className = 'on';
				_oFotBanIndex++;
				if (_oFotBanIndex > _oFotBanLength) {			//当轮播到下次的第一张图时，指针指向第二个。
					oFotBanPic.style.left = 0;
					_oFotBanIndex = 1;
				}
				_ForStatus = true;
				console.log(_ForStatus);
				cirRun();
			});
		}
	}

	ergodic(oFotBanPosLi, function (i) {
		this.onclick = function () {
			console.log(_ForStatus);
			if(_ForStatus){
				_ForStatus = false;
				_ForTimer = animation(oFotBanPic, {
					left: i * -oFotBanWidth
				}, {
					duration: 500,
				}, function () {
					oFotBanPosLi[_oFotBanIndex - 1].className = '';
					_oFotBanIndex = i + 1;
					this.className = 'on';
					_ForStatus = true;
					cirRun();
				}.call(this));
			}
		}
	})

}

//遍历
function ergodic(ele, fn) {
	var _oLiLength = ele.length;
	for (var i = 0; i < _oLiLength; i++) {
		fn.call(ele[i], i);
	}
}


//设置样式
function setStyle(ele, attr, now, duration, timingFn) {
	for (var key in attr) {
		if (typeof attr[key] === 'function') {
			attr[key](now, duration, key, timingFn);
		} else {
			//默认px单位
			var em = 'px';
			if (key === 'opacity') {
				//如果是渐变属性
				em = '';
			}
			ele.style[key] = timingFn(now, attr[key].start, attr[key].change, duration) + em;
		}
	}


}

//获取最终样式
function getStyle(ele) {
	return ele.currentStyle || getComputedStyle(ele);
}