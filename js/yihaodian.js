$(function(){
	//搜索框商品选项切换
	var searchbox=$('.searchbox')[0];
	var searchleft=$('.search-left')[0];
	var searchleftp=$('p',searchleft);
	var searchlefti=$('i',searchleft)[0];
	for(var i=0;i<searchleftp.length;i++){
		searchleftp[i].index=i;
		searchleftp[i].onmouseover=function(){
			searchleftp[this.index].style.color='#c40000';
		}
		searchleftp[i].onmouseout=function(){
			searchleftp[this.index].style.color='#333';
		}
		searchleftp[1].onclick=function(){
			var searchleftp1=searchleftp[1].innerHTML;
			searchleftp[1].innerHTML=searchleftp[0].innerHTML;
			searchleftp[0].innerHTML=searchleftp1;
		}
	}
	searchleft.onmouseover=function(){
		searchlefti.style.backgroundPosition='-235px -70px';
		searchbox.style.overflow='visible';
	}
	searchleft.onmouseout=function(){
		searchlefti.style.backgroundPosition='-235px -60px';
		searchbox.style.overflow='hidden';
	}

	//购物车下拉
	var headright3=$('.head-right3')[0];
	var headright3xiala=$('.head-right3-xiala')[0];
	headright3.onmouseover=function(){
		headright3xiala.style.display='block';
	}
	headright3.onmouseout=function(){
		headright3xiala.style.display='none';
	}

	//送货至下拉
	var topleftright=$('.top-left-right')[0];
	var chengshi=$('#chengshi');
	var chengshitext=$('span',chengshi)[0];
	var songhuoxiala=$('.songhuo-xiala')[0];
	var chengshixuanze=$('dd',songhuoxiala);
	chengshi.onmouseover=function(){
		songhuoxiala.style.display='block';
		chengshi.style.backgroundPosition='right -78px';
	}
	chengshi.onmouseout=function(){
		songhuoxiala.style.display='none';
		chengshi.style.backgroundPosition='right 7px';
	}
	for(var i=0;i<chengshixuanze.length;i++){
		chengshixuanze[i].index=i;
		chengshixuanze[i].onclick=function(){
			chengshitext.innerHTML=chengshixuanze[this.index].innerHTML;
			songhuoxiala.style.display='none';
		}
	}

	//top right下拉
	var toprightcon=$('.top-right-con');
	var trcxiala=$('.trc-xiala');
	var topxiajiantou=$('.top-xiajiantou');
	for(var i=0;i<toprightcon.length;i++){
		toprightcon[i].index=i;
		toprightcon[i].onmouseover=function(){
			trcxiala[this.index].style.display='block';
			topxiajiantou[this.index].style.backgroundPosition='right -285px';
		}
		toprightcon[i].onmouseout=function(){
			trcxiala[this.index].style.display='none';
			topxiajiantou[this.index].style.backgroundPosition='right -255px';
		}
	}

	//微信下拉
	var weixin=$('#weixin');
	var weixinxiala=$('.weixin-xiala')[0];
	weixin.onmouseover=function(){
		weixinxiala.style.display='block';
	}
	weixin.onmouseout=function(){
		weixinxiala.style.display='none';
	}

	//登录下拉
	var topleftlogin=$('.top-left-login')[0];
	var tllxiala=$('.tll-xiala')[0];
	var loginxia=$('#loginxia');
	topleftlogin.onmouseover=function(){
		tllxiala.style.display='block';
		topleftlogin.style.borderBottom='none';
		loginxia.style.backgroundPosition='-60px -870px';
	}
	topleftlogin.onmouseout=function(){
		tllxiala.style.display='none';
		topleftlogin.style.borderBottom='1px solid #f0f0f0';
		loginxia.style.backgroundPosition='0 -870px';
	}

	//banner轮播
	var bannercenter=$('.bannercenter')[0];
	var bcimgs=$('.bc-imgs');
	var bcbtn=$('.bc-btn')[0];
	var bcbtns=$('li',bcbtn);
	var bcjiantouleft=$('.bc-jiantou-left')[0];
	var bcjiantouright=$('.bc-jiantou-right')[0];
	var num=0;
	var bannerbox=$('.bannerbox')[0];
	var bgArr=['#f3ead9','#6d0157','#ff3d00','#1672ed','#1672ed','#280b7f','#43b8fd','#ca050c'];
	function move(type){
		if(type=='r'){
			if(num==bcimgs.length-1){
				num=0;
			}else{
				num++
			}
		}else if(type=='l'){
			if(num==0){
				num=bcimgs.length-1;
			}else{
				num--
			}
		}
		for(var i=0;i<bcimgs.length;i++){
			bcimgs[i].style.opacity='0';
		}
		for(var j=0;j<bcbtns.length;j++){
			bcbtns[j].style.backgroundColor='#ccc';
		}
		bcbtns[num].style.backgroundColor='#ff3c3c';
		bannerbox.style.backgroundColor=bgArr[num];
		animate(bcimgs[num],{opacity:1},200);
	}
	var t1=setInterval(function(){
		move('r');
	},3000);
	bannercenter.onmouseover=function(){
		clearInterval(t1);
		bcjiantouleft.style.display='block';
		bcjiantouright.style.display='block';
	}
	bannercenter.onmouseout=function(){
		t1=setInterval(function(){
			move('r');
		},3000);
		bcjiantouleft.style.display='none';
		bcjiantouright.style.display='none';
	}
	for(var i=0;i<bcbtns.length;i++){
		bcbtns[i].index=i;
		bcbtns[i].onmouseover=function(){
			for(var j=0;j<bcbtns.length;j++){
				bcimgs[j].style.opacity='0';
				bcbtns[j].style.backgroundColor='#ccc';
			}
			bcbtns[this.index].style.backgroundColor='#ff3c3c';
			animate(bcimgs[this.index],{opacity:1},200);
			bannerbox.style.backgroundColor=bgArr[this.index];
			num=this.index;
		}
	}
	bcjiantouleft.onclick=function(){
		move('l');
	}
	bcjiantouright.onclick=function(){
		move('r');
	}

	//8楼左轮播
	var leftlunbo=$('.leftlunbo')[0];
	var llul=$('ul',leftlunbo)[0];
	var lljiantoul=$('.ll-jiantoul')[0];
	var lljiantour=$('.ll-jiantour')[0];
	function llmove(type1){
		var ol=llul.offsetLeft;
		var first=getFirst(llul);
		var last=getLast(llul);
		if(type1=='r'){
			animate(llul,{left:-100},function(){
				llul.appendChild(first);
				llul.style.left=0;
			})
		}else if(type1=='l'){
			last.style.width=0;
			llul.insertBefore(last,first);
			animate(last,{width:100});
		}
	}
	var t2=setInterval(function(){
		llmove('r');
	},3000);
	leftlunbo.onmouseover=lljiantoul.onmouseover=lljiantour.onmouseover=function(){
		clearInterval(t2);
	}
	leftlunbo.onmouseout=lljiantoul.onmouseout=lljiantour.onmouseout=function(){
		t2=setInterval(function(){
		llmove('r');
	},3000);
	}
	lljiantoul.onclick=function(){
		llmove('l');
	}
	lljiantour.onclick=function(){
		llmove('r')
	}

	//楼层轮播
	function lcmove(numb){
		var f1cmiddle=$('.f1c-middle')[numb];
		var lclunbo=$('.lclunbo')[numb];
		var lclbbox=$('.lclbbox')[numb];
		var lclblis=$('li',lclbbox);
		var lclbbtns=$('div',lclbbox);
		var imgnum=1;
		function lclbmove(){
			for(var i=0;i<lclbbtns.length;i++){
				lclbbtns[i].style.width=0;
			}
			if(imgnum<=2){
				animate(lclunbo,{left:-330*imgnum});
				lclbbtns[imgnum].style.width='30px';
				imgnum++;
			}else{
				animate(lclunbo,{left:0});
				lclbbtns[0].style.width='30px';
				imgnum=1;
			}
		}
		var t3=setInterval(lclbmove,4000);
		f1cmiddle.onmouseover=function(){
			clearInterval(t3);
		}
		f1cmiddle.onmouseout=function(){
			t3=setInterval(lclbmove,4000);
		}
		for(var i=0;i<lclblis.length;i++){
			lclblis[i].index=i;
			lclblis[i].onmouseover=function(){
				for(var j=0;j<lclbbtns.length;j++){
					lclbbtns[j].style.width=0;
				}
				lclbbtns[this.index].style.width='30px';
				imgnum=this.index;
				animate(lclunbo,{left:-330*imgnum});
			}
		}
	}
	for(var i=0;i<8;i++){
		lcmove(i);
	}

	//右侧楼层跳转及按需加载
    var floors=$(". jumplc");
	var lcjump=$(".lctz")[0];
    var lcbtn=$("li",lcjump);
    var lcps=$('.lcfont');
    var ch1=document.documentElement.clientHeight;
    for(var i=0;i<lcbtn.length;i++){
        lcbtn[i].index=i;
        lcbtn[i].onclick=function(){
            var obj=document.documentElement.scrollTop?document.documentElement:document.body;
            animate(obj,{scrollTop:floors[this.index].t});
        }
    }
    window.onscroll=function(){
    	var scrollT=getScrolltop();
    	if(scrollT>=600){
	    	lcjump.style.display="block";
		}else{
	   		lcjump.style.display="none";
		}
    	for(var i=0;i<floors.length;i++){
        	floors[i].t=floors[i].offsetTop;
        	if(floors[i].t<scrollT+1){
        		for(var j=0;j<lcps.length;j++){
           			lcps[j].style.display="none";
        		}
        	lcps[i].style.display="block";
        	}
    	}
    	for(var i=0;i<floors.length;i++){
			if(floors[i].offsetTop<scrollT+ch1){
				var imgs1=$("img",floors[i]);
				for(var j=0;j<imgs1.length;j++){
					imgs1[j].src=imgs1[j].getAttribute("aa");
				}
			}
		}
    }

    //banner左边二级
    var bannerleft=$('.bannerleft')[0];
    var bannerlis=$('li',bannerleft);
    var erjis=$('.erji');
    for(var i=0;i<bannerlis.length;i++){
    	bannerlis[i].index=i;
    	bannerlis[i].onmouseover=function(){
    		erjis[this.index].style.display='block';
    		bannerlis[this.index].style.backgroundColor='#851515';
    	}
    	bannerlis[i].onmouseout=function(){
    		erjis[this.index].style.display='none';
    		bannerlis[this.index].style.backgroundColor='#c23131';
    	}
    }

    //闪购tab
    var f11con=$('.f11-con')[0];
    var f11uls=$('ul',f11con);
    var tabbtns=$('.tabbtn');
    for(var i=0;i<tabbtns.length;i++){
    	tabbtns[i].index=i;
    	tabbtns[i].onclick=function(){
    		for(var j=0;j<f11uls.length;j++){
    			f11uls[j].style.zIndex='1';
    			tabbtns[j].style.cssText='font-weight: normal;color: #666;text-decoration:none';
    		}
    		f11uls[this.index].style.zIndex='3';
    		tabbtns[this.index].style.cssText='font-weight: bold;color: #cea145;text-decoration:underline';
    	}
    }
})	