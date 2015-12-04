	var timedelay = 50;
	var timer = 0;
	var m_loop;
	var m_loop2;
	var m_loop3;
	var m_loop4;
	var m_loop5;
	var m_loop6;
	var m_loop7;
	var temp = 94;
	var temp2 = 0;
	var objshow;
	var num;
	var obj1 = [{imgsrc:'src/shu.jpg',achievename:'外星飞机王',achievetext:'持续撸管4小时',isnew:'0'},{imgsrc:'src/shu.jpg',achievename:'外星飞机霸',achievetext:'持续撸管8小时',isnew:'0'},{imgsrc:'src/chengjiu/01.jpg',achievename:'外星飞机帝',achievetext:'持续撸管10小时',isnew:'-1'},{imgsrc:'src/chengjiu/07.jpg',achievename:'小花花',achievetext:'蜀都赋离开范德萨',isnew:'1'},{imgsrc:'src/shu.jpg',achievename:'外星飞机帝',achievetext:'持续撸管12小时',isnew:'0'},{imgsrc:'src/jiangbei.jpg',achievename:'萌杰',achievetext:'撸出血',isnew:'1'}]
	var obj2 = {username:'萌杰',userlevel:'10',text1:'19/20',text2:'5/5',text3:'5/6',text4:'9/9',imgsrc:'src/tou.jpg'};
	function mode1(){
		document.getElementById('achieve1').style.textShadow = "1px 0 0 #FFD700, 0 1px 0 #FFD700, 0 -1px 0 #FFD700, -1px 0 0 #FFD700, 1px 0 1px #FFD700, 0 1px 1px #FFD700, 0 -1px 1px #FFD700, -1px 0 1px #FFD700";
		document.getElementById('achieve2').style.textShadow = "";
		document.getElementById('achieve3').style.textShadow = "";
	}
	function mode2(){
		document.getElementById('achieve2').style.textShadow = "1px 0 0 #FFD700, 0 1px 0 #FFD700, 0 -1px 0 #FFD700, -1px 0 0 #FFD700, 1px 0 1px #FFD700, 0 1px 1px #FFD700, 0 -1px 1px #FFD700, -1px 0 1px #FFD700";
		document.getElementById('achieve1').style.textShadow = "";
		document.getElementById('achieve3').style.textShadow = "";
	}
	function mode3(){
		document.getElementById('achieve3').style.textShadow = "1px 0 0 #FFD700, 0 1px 0 #FFD700, 0 -1px 0 #FFD700, -1px 0 0 #FFD700, 1px 0 1px #FFD700, 0 1px 1px #FFD700, 0 -1px 1px #FFD700, -1px 0 1px #FFD700";
		document.getElementById('achieve2').style.textShadow = "";
		document.getElementById('achieve1').style.textShadow = "";
	}
	mode1();
	getinfo(obj2);//you should delete this line after your work\n
	
	//getmode1(obj1);//just for fun\n
	
	//you should modify these '???'\n
	//$.ajax({
	//		url: '???',
	//		type: 'POST',
	//		datatype: 'json',
	//		data: {
	//			number: 0,
	//			csrfmiddlewaretoken: '???'
	//		},
	//		success: getinfo(),
	//		error: function (xhr, errmsg, err) {
	//			alert('debug2');
	//			alert(xhr.status + ': ' + xhr.responseText);
	//		}
	//	})
	function getmode1(json) {
		document.getElementById('box3').innerHTML="";
		num = 0;
		a = new Array();
        for (i in json){
			if (json[i].isnew != -1){
				str = "<div class = 'divchengjiu'><div class = 'divchengjiuimg'><img src = "+json[i].imgsrc
				+" class = 'achieveimg'/></div><div class = 'div_text_1'><p class = 'test4'>"+json[i].achievename
				+"</p></div><div class = 'div_text_2'><p class = 'test5'>"+json[i].achievetext+"</p></div></div>";
				$('#box3').append(str);
			}
			else{
				str = "<div class = 'divchengjiu'><div class = 'divchengjiuimg'><img src = "+json[i].imgsrc
				+" class = 'achieveimggrey'/></div><div class = 'div_text_1'><p class = 'test4'>"+json[i].achievename
				+"</p></div><div class = 'div_text_2'><p class = 'test5'>"+json[i].achievetext+"</p></div></div>";
				$('#box3').append(str);
			}
        }
		for (i in json){
			if (json[i].isnew != 1)
				continue;
			a[num] = i;
			num++;
			setTimeout(function(){showachievement(json[a[num]])},timer);
			timer+=14.5*1000;
		}
		timer = 0;
		num = 0;
		setTimeout(function(){num = 0},timer+14500);
    }
	function getinfo(json){
		document.getElementById('namediv').innerHTML="";
		str = "<p class='test2'>"+json.username+"--Lv"+json.userlevel+"</p><p class='test2'>已完成"+json.text1+"</p>"
		$('#namediv').append(str);
		document.getElementById('achieve1').innerHTML="";
		str = "<p class='test2'>运动成就</p><p class='test2'>"+json.text2+"</p>";
		$('#achieve1').append(str);
		document.getElementById('achieve2').innerHTML="";
		str = "<p class='test2'>睡眠成就</p><p class='test2'>"+json.text3+"</p>";
		$('#achieve2').append(str);
		document.getElementById('achieve3').innerHTML="";
		str = "<p class='test2'>堕落成就</p><p class='test2'>"+json.text4+"</p>";
		$('#achieve3').append(str);
		document.getElementById('toucontainer').innerHTML="";
		str = "<img src="+json.imgsrc+" class = 'tou'/>";
		$('#toucontainer').append(str);
	}
	$('#achieve1').click(function(){
		mode1();
		$.ajax({
			url: '???',
			type: 'POST',
			datatype: 'json',
			data: {
				number: 1,
				csrfmiddlewaretoken: '???'
			},
			success: getmode1(),
			error: function (xhr, errmsg, err) {
				alert('debug1');
				alert(xhr.status + ': ' + xhr.responseText);
			}
		})
	})
	$('#achieve2').click(function(){
		mode2();
		$.ajax({
			url: '???',
			type: 'POST',
			datatype: 'json',
			data: {
				number: 2,
				csrfmiddlewaretoken: '???'
			},
			success: getmode1(),
			error: function (xhr, errmsg, err) {
				alert('debug2');
				alert(xhr.status + ': ' + xhr.responseText);
			}
		})
	})
	$('#achieve3').click(function(){
		mode3();
		$.ajax({
			url: '???',
			type: 'POST',
			datatype: 'json',
			data: {
				number: 3,
				csrfmiddlewaretoken: '???'
			},
			success: getmode1(),
			error: function (xhr, errmsg, err) {
				alert('debug3');
				alert(xhr.status + ': ' + xhr.responseText);
			}
		})
	})
	function showachievement(obj){
		document.getElementById("box3").innerHTML+= "<div id = 'divshow' class = 'divshow'><div id = 'divshowimg' class = 'divshowimg'><img src = '"+obj.imgsrc+"' class = 'achieveimg2'/></div></div>";
		document.getElementById("box3").innerHTML+= "<div id = 'divword' class = 'divword'><p class = 'test6'>获得成就："+obj.achievename+"</p></div>"
		document.getElementById("box3").innerHTML+= "<div id = 'divlight' class = 'divlight'><div id = 'lightcontainer' class = 'lightcontainer'><img src = 'src/light.png' class = 'lightimg'/></div></div>"
		document.getElementById("divshow").innerHTML += "<div id = 'divbackimg1' class = 'divbackimg1'><img src = 'src/test1.png' class = 'backimg'/></div>";
		document.getElementById("divshow").innerHTML += "<div id = 'divbackimg2' class = 'divbackimg2'><img src = 'src/test2.png' class = 'backimg'/></div>";
		document.getElementById("divshow").innerHTML += "<div id = 'divbackimg3' class = 'divbackimg3'><img src = 'src/test3.png' class = 'backimg'/></div>";
		m_loop = setInterval("uptheshow()",timedelay);
		m_loop2 =setInterval("changebackimg()",300);
		num++;
	}
	
	function uptheshow(){
		temp-= 2;
		if (temp < 20){
			clearInterval(m_loop);
			temp = 0;
			m_loop3 = setInterval("getsmall()",timedelay);
			return;
		}
		document.getElementById('divshow').style.top = temp+"%";
	}
	function getsmall(){
		if (temp >= 25){
			clearInterval(m_loop3);
			temp = 0;
			document.getElementById('divword').style.display = "block";
			m_loop5 = setInterval("wordshow()",timedelay);
			return;
		}
		temp++;
		document.getElementById('divshowimg').style.left = 25-0.9*temp+"%";
		document.getElementById('divbackimg1').style.left = 25-0.9*temp+"%";
		document.getElementById('divbackimg2').style.left = 25-0.9*temp+"%";
		document.getElementById('divbackimg3').style.left = 25-0.9*temp+"%";
		document.getElementById('divshowimg').style.width = 50-temp+"%";
		document.getElementById('divbackimg1').style.width = 50-temp+"%";
		document.getElementById('divbackimg2').style.width = 50-temp+"%";
		document.getElementById('divbackimg3').style.width = 50-temp+"%";
		document.getElementById('divshowimg').style.top = temp+"%";
		document.getElementById('divbackimg1').style.top = -68+2.3*temp+"%";
		document.getElementById('divbackimg2').style.top = -68+2.3*temp+"%";
		document.getElementById('divbackimg3').style.top = -68+2.3*temp+"%";
	}
	function wordshow(){
		temp+=2.5;
		if (temp >= 120){
			clearInterval(m_loop5);
			temp = 0;
			m_loop6 = setInterval("wordshine()",timedelay);
			document.getElementById('divlight').style.display = "block";
			return;
		}
		document.getElementById('divword').style.opacity = temp/100;
	}
	function wordshine(){
		temp++;
		if (temp > 50){
			clearInterval(m_loop6);
			temp = 0;
			m_loop7 = setInterval("worddisappear()",timedelay);
			document.getElementById('divlight').style.display = "none";
			document.getElementById('lightcontainer').style.left = "0%";
			return;
		}
		document.getElementById('lightcontainer').style.left = 6*temp+"%";
	}
	function worddisappear(){
	var dom
		temp+=2.5;
		if (temp >= 100){
			dom = document.getElementById("divshow");
			dom.parentNode.removeChild(dom);
			temp = 94;
			clearInterval(m_loop2);
			clearInterval(m_loop7);
			dom = document.getElementById("divword");
			dom.parentNode.removeChild(dom);
			dom = document.getElementById("divlight");
			dom.parentNode.removeChild(dom);
			return;
		}
		document.getElementById('divshow').style.opacity = 1 - temp/100;
		document.getElementById('divword').style.opacity = 1 - temp/100;
	}
	function changebackimg(){
		temp2++;
		if (temp2 % 3 == 0){
			document.getElementById("divbackimg1").style.display = "block";	
			document.getElementById("divbackimg2").style.display = "none";	
			document.getElementById("divbackimg3").style.display = "none";	
		}
		else if (temp2 % 3 == 1){
			document.getElementById("divbackimg1").style.display = "none";	
			document.getElementById("divbackimg2").style.display = "block";	
			document.getElementById("divbackimg3").style.display = "none";	
		}
		else if (temp2 % 3 == 2){
			document.getElementById("divbackimg1").style.display = "none";	
			document.getElementById("divbackimg2").style.display = "none";	
			document.getElementById("divbackimg3").style.display = "block";	
		}
		if (temp2 >= 200000){
			clearInterval(m_loop2);
		}
	}
	setTimeout("getmode1(obj1)",3000);