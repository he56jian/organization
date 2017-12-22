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
            tc("恭喜获得五等奖！");
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