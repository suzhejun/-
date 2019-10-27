// ==UserScript==
// @namespace    苏柘
// ==/UserScript==

(function() {
    'use strict';
    var content = document.getElementsByTagName('html')[0].innerHTML;
    var regExp = /(?<=playAddr: ").+(?=")/;
    var url = content.match(regExp)[0];
    url = url.replace('playwm', 'play');
    url = url.replace('=0', '=1');
    var url1 = "http://193.112.25.115:8000/douyin?url=";
    url1 = url1 + url;

    var button = document.createElement("input"); //创建一个input对象（提示框按钮）
    button.setAttribute("type", "button");
    button.setAttribute("id", "button1");
    button.setAttribute("value", "无水印下载");
    button.style.width = "160px";
    button.style.align = "center";
    button.style.marginLeft = "500px";
    button.style.marginBottom = "20px";
    button.style.background = "#fc0156";
    button.style.border = "1px solid " + "#b46300";//52
    button.style.color = "white";
    var x = document.getElementById("pageletReflowVideo");
    x.appendChild(button);

  	var btn = document.getElementById("button1");
	btn.addEventListener('click',function(){
			window.open(url1);
		},false)


  //  window.open(url1);




})();