var birds=document.getElementById('birds');
var birds_h=birds.offsetHeight;//获取小鸟的高度
var birds_w=birds.offsetWidth;//获取小鸟的宽度
// alert("h:"+birds_h+';w:'+birds_w);
var birds_l=birds.offsetLeft;
var birds_t=birds.offsetTop;//获取在页面的坐标。
// alert('t:'+birds_t+";l:"+birds_l);
var W_width=window.innerWidth;//获取窗口大小
var W_Height=window.innerHeight;
// alert(W_width);
var speed=20;
var key_fx=37;

document.onkeydown=function(even){
    var key=even.keyCode;//获取所点击案件的code值。
    birds.className='fx_'+key;
    // alert(key);
    switch (key) {
        case 37://左
            birds_l-=speed;
            birds.style.marginLeft=birds_l+'px';
            // alert( birds.style.marginLeft);
            if(birds_l<=-birds_w){
                birds_l=W_width;
            }
            break;
        case 38://上
            birds_t-=speed;
            birds.style.marginTop=birds_t+'px';
            if(birds_t<=-birds_h){//当小鸟的top值小于负的它的高度时，top为窗口高度
                birds_t=W_Height;
            }
            break;
        case 39://右
            birds_l+=speed;
            birds.style.marginLeft=birds_l+'px';
            
            if(birds_l>=W_width){
                birds_l=-birds_w;
            }
            break;
        case 40://下
            birds_t+=speed;
            birds.style.marginTop=birds_t+'px';
            if(birds_t>=W_Height){//当小鸟的top值大于负的它的高度时，top为窗口高度
                birds_t=-birds_h;
            }
            break;
        default:
            break;
    }
}