

const _headLogin = document.getElementsByClassName('head-login')[0],
	  _headReg = document.getElementsByClassName('head-reg')[0];
const url = window.location.href;

ajax({
	type:'POST',
	url:url,
	success:function (data) {
		console.log(data)
	}
})