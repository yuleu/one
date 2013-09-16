// ==UserScript==
// @name           Untie URL(ReShortUrl)
// @author         Yulei
// @namespace      Yuleigq@gmail.com
// @description    Untie URL/Shortlink(Restore URL/Shortlink),ReURL.
// @version        1.01.16
// @create         2013-09-14
// @lastmodified   2013-09-16
// @include        http://*
// @include        https://*
// @exclude        http://192.168.*
// @copyright      2013+, Yulei
// @run-at         document-end
// @grant			GM_xmlhttpRequest
// @grant			GM_setClipboard
// @grant			GM_setValue
// @grant			GM_getValue
// @grant			GM_registerMenuCommand
// @icon			http://i.imgur.com/T7MbB5H.png
// @updateURL      https://
// @downloadURL    http://www.yulei.pw/#u
// ==/UserScript==

(function() {
var _Q=function(d) {return document.querySelector(d)};
    function Yyu(t){return t.getAttribute('Yu')}
    function Yx(e){var YD=_Q('#YDn');var YY=111;if (!window.chrome)YY=151;YD.style.top=e.screenY-YY+"px";YD.style.left=e.screenX-20+"px";YD.style.display='';}
var Yod= !GM_getValue('YUL') ? "HEAD" : "GET";
window.setTimeout(function(){ //延迟1秒，避免压力山大
var l=document.links,k=l.length;
for (var i=0; i<k; i++){
    if (l[i].href){
        l[i].addEventListener("mouseover",function(e){ var t=this;
    if (!/^#|^ja/i.test(t.href)){ if (Yyu(t)){_Q('#YNd').href=_Q('#YNd').innerHTML=Yyu(t);Yx(e);}else{
  GM_xmlhttpRequest({
  url: t.href,
  method: Yod,
  onload: function(y) {
      if (y.status<1){t.title="此网站挂了！"}
      if (y.status == '404' || y.status == '403'){t.title="40X啦，找不到你的！"} 
      if (y.finalUrl != t.href){ Yx(e);
        var TUrl=y.finalUrl=='/' ? 'http://'+t.href.split('/')[2] : y.finalUrl;
        _Q('#YNd').href=_Q('#YNd').innerHTML=TUrl;
        if(!Yyu(t)){t.title+='\n你打开后的地址(源地址)为：\n'+y.finalUrl;t.style.color='red';t.setAttribute('Yu',TUrl)}}
  }
  }); t.addEventListener("mouseout",function(e){_Q('#YDn').style.display='none'});}}
      },false);
    }
}
},1000);
var aa=document.createElement('div');aa.id="YDn";
    aa.setAttribute('style','width:auto;z-index:9999;display:none;position:fixed;border:1px solid #D2DF1D;max-width:80%;margin:0px 0px 38px;background-color:#E0E967;opacity:0.85;border-radius:10px 10px 20px;transition:all 1s ease-out;-webkit-transition:all 1s ease-out;box-shadow:3px 3px 2px Silver;');
document.body.appendChild(aa);
    aa.innerHTML='<i>你打开后的地址(源地址)为：</i><br><div style="overflow:hidden;width:98%"><a id="YNd" target="_blank" style="color:#1F76B0" title="点击直接新标签打开 - [By Yulei]"></a></div><b style="font-family:Tahoma,Verdana,Arial;transform: rotate(-90deg);-webkit-transform: rotate(-90deg);position:absolute;width:0px;left:10px;bottom:-21px;color:#D2DF1D;">∠</b>';
    aa.onmouseover=function(){this.style.display=''};aa.onmouseout=function(){this.style.display='none'}

function Yok() {
    GM_setValue('YUL','ok');location.reload();
}
function Ygk() {
    GM_setValue('YUL',false);location.reload();
}
    GM_registerMenuCommand('打开多重源',Yok);
    GM_registerMenuCommand('关闭多重源',Ygk);


})();

 /* （支持：Chromes29(TM)、Firefox23(SI、GM)、Opera15(TM)；） 
*
 *主旨：简化流程、节省时间，改善体验。（化复杂的步骤为简，节约大量宝贵的时间浪费！）生存有道，放过别人也是放过自己。
  *  UURL.user.js短网址(短链接)还原(解析)长网址,解短网址/链接. 重定向/跳转终结！302
   * 解网址 -|- by Yulei 本脚本只作学习研究参考用，版权所有 不得滥用、商用、它用，后果自负
    */
