<<<<<<< HEAD
var zz=document.getElementsByClassName('zz')[0];
document.get
var state=0;//设置状态，0为没动，1为转动。2为不在0位置。
zz.onclick=function(){
    if(state==0){
        zz.className='zz kq';//当当前状态静止时，添加class，转动。
        state=1;
    }else if(state==1){  
        zz.className='zz pause';
		var jd=jiaodu(zz);
		jl(jd);
		
        state=0;
        
    }
    
};
=======

// 可以使用随机数，点击后就从0开始转到随机数。
var zz=document.getElementById('zz');
var kq=document.getElementsByClassName('kq')[0];
var mas=document.getElementById('center_massage');
var state=0;//设置状态，0为没动，1为转动。2为不在0位置。

    zz.onclick=function(){
        if(state==0){
            zz.className='kq';//当当前状态静止时，添加class，转动。
           
            state=1;
        }else if(state==1){  //
            zz.className='pause';
            var jd=jiaodu(zz); //获取旋转的角度。
            jl(jd);  
            state=0;
        }
        
    };


>>>>>>> 626910da5d4c0c3f61f14398963b5938ce55c2d4


//通过矩阵获取角度,网上找的http://www.cnblogs.com/qwguo/p/6678830.html
function jiaodu(transfrom){
    var st = window.getComputedStyle(transfrom, null);
    var tr = st.getPropertyValue("-webkit-transform") ||
    st.getPropertyValue("-moz-transform") ||
    st.getPropertyValue("-ms-transform") ||
    st.getPropertyValue("-o-transform") ||
    st.getPropertyValue("transform") ||
    "FAIL";
    // With rotate(30deg)...
    // matrix(0.866025, 0.5, -0.5, 0.866025, 0px, 0px)
    console.log('Matrix: ' + tr);
    // rotation matrix - http://en.wikipedia.org/wiki/Rotation_matrix
    var values = tr.split('(')[1].split(')')[0].split(',');
    var a = values[0];
    var b = values[1];
    var c = values[2];
    var d = values[3];
    var scale = Math.sqrt(a * a + b * b);
    console.log('Scale: ' + scale);
    // arc sin, convert from radians to degrees, round
    var sin = b / scale;
    // next line works for 30deg but not 130deg (returns 50);
    // var angle = Math.round(Math.asin(sin) * (180/Math.PI));
    var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
    console.log('Rotate: ' + angle + 'deg');
    return angle;
}
//获取角度结束

//弹出奖励
function jl(jd){
        if(jd>=0 && jd<20){
<<<<<<< HEAD
            tc("恭喜获得五等奖！");
=======
            alert("恭喜获得五等奖！");
            return;
>>>>>>> 626910da5d4c0c3f61f14398963b5938ce55c2d4
        }else if(jd>=20 && jd<46){
            tc("恭喜获得六等奖！");
        }else if(jd>=46 && jd<56){
            alert("恭喜获得二等奖！");
        }else if(jd>=56 && jd<85){
            alert("恭喜获得幸运奖！");
        }else if(jd>=85 && jd<99){
            alert("恭喜获得四等奖！");
        }else if(jd>=99 && jd<132){
            alert("恭喜获得谢谢惠顾！");
        }else if(jd>=132 && jd<148){
            alert("恭喜获得三等奖！");
        }else if(jd>=148 && jd<173){
            alert("恭喜获得六等奖！");
        }else if(jd>=173 && jd<-155){
            alert("恭喜获得幸运奖！");
        }else if(jd>=-155 && jd<-147){
            alert("恭喜获得二等奖！");
        }else if(jd>=-147 && jd<-126){
            alert("恭喜获得五等奖！");
        }else if(jd>=-126 && jd<-101){
            alert("恭喜获得六等奖！");
        }else if(jd>=-101 && jd<-86){
            alert("恭喜获得四等奖！");
        }else if(jd>=-86 && jd<-70){
            alert("恭喜获得三等奖！");
        }else if(jd>=-70 && jd<-37){
            alert("恭喜获得谢谢惠顾！");
        }else if(jd>=-37 && jd<-29){
            alert("恭喜获得一等奖！");
        }else if(jd>=-29 && jd<0){
            alert("恭喜获得幸运奖！");
        }
      
}
//弹出奖励结束



//自定义alert窗口
window.alert = function(str)
{
    var shield = document.createElement("DIV");//创建一个边框div.其中id=shield;position=absolute;
    shield.id = "shield"; 
    shield.style.position = "absolute";
    shield.style.left = "50%";
    shield.style.top = "50%";
    shield.style.width = "280px";
    shield.style.height = "150px";
    shield.style.marginLeft = "-140px";
    shield.style.marginTop = "-110px";//设置居中,宽高为280*150
    shield.style.zIndex = "25";//层级为25.

    var alertFram = document.createElement("DIV");//创建一个显示中间汉字的div,
    alertFram.id="alertFram";
    alertFram.style.position = "absolute";
    alertFram.style.width = "280px";
    alertFram.style.height = "150px";
    alertFram.style.left = "50%";
    alertFram.style.top = "50%";
    alertFram.style.marginLeft = "-140px";
    alertFram.style.marginTop = "-110px";
    alertFram.style.textAlign = "center";//设置文字居中.
    alertFram.style.lineHeight = "150px";//设置行高,居中.
    alertFram.style.zIndex = "300";

    // 设置内容样式
    strHtml = "<ul style=\"list-style:none;margin:0px;padding:0px;width:100%\">\n";
    // strHtml += " <li style=\"background:#626262;text-align:left;padding-left:20px;font-size:14px;font-weight:bold;height:25px;line-height:25px;border:1px solid #F9CADE;color:white\">[自定义alert]</li>\n";
    strHtml += " <li style=\"background:#626262;text-align:center;font-size:22px;height:95px;line-height:105px;color:red;\">"+str+"\n";
    strHtml += "<input type=\"button\" value=\"确 定\" onclick=\"Ok()\" style=\"width:80px;height:20px;background:#626262;color:white;border:1px solid white;border-radius:5px;font-size:14px;line-height:20px;outline:none;margin-top: 4px\"/></li>\n";
    strHtml += "</ul>\n";
    // 设置内容样式结束

    alertFram.innerHTML = strHtml;
    document.body.appendChild(alertFram);
    document.body.appendChild(shield);
    this.Ok = function(){//设置显示还是隐藏.
        alertFram.style.display = "none";
        shield.style.display = "none";
    }
    zz.focus();//指针获取焦点.
    // document.body.onselectstart = function(){return false;};
}
// 自定义alert结束