
function ge()
{var ea;for(var i=0;i<arguments.length;i++){var e=arguments[i];if(typeof e=='string')
e=document.getElementById(e);if(arguments.length==1)
return e;if(!ea)
ea=new Array();ea[ea.length]=e;}
return ea;}
function show()
{for(var i=0;i<arguments.length;i++){var element=ge(arguments[i]);if(element&&element.style)element.style.display='';}
return false;}
function hide()
{for(var i=0;i<arguments.length;i++){var element=ge(arguments[i]);if(element&&element.style)element.style.display='none';}
return false;}
function shown(el){el=ge(el);return(el.style.display!='none');}
function toggle()
{for(var i=0;i<arguments.length;i++){var element=ge(arguments[i]);element.style.display=(element.style.display=='block')?'none':'block';}
return false;}
function remove_node(node)
{if(node.removeNode)
node.removeNode(true);else{for(var i=node.childNodes.length-1;i>=0;i--)
remove_node(node.childNodes[i]);node.parentNode.removeChild(node);}
return null;}
function has_css_class_name(elem,cname){return(elem&&cname)?new RegExp('\\b'+trim(cname)+'\\b').test(elem.className):false;}
function add_css_class_name(elem,cname){if(elem&&cname){if(elem.className){if(has_css_class_name(elem,cname)){return false;}else{elem.className+=' '+trim(cname);return true;}}else{elem.className=cname;return true;}}else{return false;}}
function remove_css_class_name(elem,cname){if(elem&&cname&&elem.className){cname=trim(cname);var old=elem.className;elem.className=elem.className.replace(new RegExp('\\b'+cname+'\\b'),'');return elem.className!=old;}else{return false;}}
var KEYS={BACKSPACE:8,TAB:9,RETURN:13,ESC:27,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46};function mouseX(event)
{return event.pageX||(event.clientX+
(document.documentElement.scrollLeft||document.body.scrollLeft));}
function mouseY(event)
{return event.pageY||(event.clientY+
(document.documentElement.scrollTop||document.body.scrollTop));}
function pageScrollX()
{return document.body.scrollLeft||document.documentElement.scrollLeft;}
function pageScrollY()
{return document.body.scrollTop||document.documentElement.scrollTop;}
function elementX(obj)
{var curleft=0;if(obj.offsetParent){while(obj.offsetParent){curleft+=obj.offsetLeft;obj=obj.offsetParent;}}
else if(obj.x)
curleft+=obj.x;return curleft;}
function elementY(obj)
{var curtop=0;if(obj.offsetParent){while(obj.offsetParent){curtop+=obj.offsetTop;obj=obj.offsetParent;}}
else if(obj.y)
curtop+=obj.y;return curtop;}
function onloadRegister(handler){if(window.onload){var old=window.onload;window.onload=function(){old();handler();};}
else{window.onload=handler;}}
function addEvent(obj,type,fn,name_hash)
{if(obj.addEventListener)
obj.addEventListener(type,fn,false);else if(obj.attachEvent)
{obj["e"+type+fn+name_hash]=fn;obj[type+fn+name_hash]=function(){obj["e"+type+fn+name_hash](window.event);}
obj.attachEvent("on"+type,obj[type+fn+name_hash]);}}
function removeEvent(obj,type,fn,name_hash)
{if(obj.removeEventListener)
obj.removeEventListener(type,fn,false);else if(obj.detachEvent)
{obj.detachEvent("on"+type,obj[type+fn+name_hash]);obj[type+fn+name_hash]=null;obj["e"+type+fn+name_hash]=null;}}
function placeholderSetup(id){var el=ge(id);if(!el)return;var ph=el.getAttribute("placeholder");if(ph&&ph!=""){el.value=ph;el.style.color='#777';el.is_focused=0;addEvent(el,'focus',placeholderFocus);addEvent(el,'blur',placeholderBlur);}}
function placeholderFocus(){if(!this.is_focused){this.is_focused=1;this.value='';this.style.color='#000';var rs=this.getAttribute("radioselect");if(rs&&rs!=""){var re=document.getElementById(rs);if(!re){return;}
if(re.type!='radio')return;re.checked=true;}}}
function placeholderBlur(){var ph=this.getAttribute("placeholder")
if(this.is_focused&&ph&&this.value==""){this.is_focused=0;this.value=ph;this.style.color='#777';}}
function optional_drop_down_menu(arrow,link,menu,event,arrow_class,arrow_old_class)
{if(menu.style.display=='none'){menu.style.display='block';var old_arrow_classname=arrow_old_class?arrow_old_class:arrow.className;if(link){link.className='active';}
arrow.className=arrow_class?arrow_class:'global_menu_arrow_active';var justChanged=true;var shim=ge(menu.id+'_iframe');if(shim){shim.style.top=menu.style.top;shim.style.right=menu.style.right;shim.style.display='block';shim.style.width=(menu.offsetWidth+2)+'px';shim.style.height=(menu.offsetHeight+2)+'px';}
menu.offclick=function(e){if(!justChanged){hide(this);if(link){link.className='';}
arrow.className=old_arrow_classname;var shim=ge(menu.id+'_iframe');if(shim){shim.style.display='none';shim.style.width=menu.offsetWidth+'px';shim.style.height=menu.offsetHeight+'px';}
removeEvent(document,'click',this.offclick,menu.id);}else{justChanged=false;}}.bind(menu);addEvent(document,'click',menu.offclick,menu.id);}
return false;}
function position_app_switcher(){var switcher=ge('app_switcher');var menu=ge('app_switcher_menu');menu.style.top=(switcher.offsetHeight-1)+'px';menu.style.right='0px';}
function htmlspecialchars(text){return text?text.toString().replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/'/g,'&#039;').replace(/</g,'&lt;').replace(/>/g,'&gt;'):'';}
function escape_js_quotes(text){if(!text){return;}
return text.replace(/\\/g,'\\\\').replace(/\n/g,'\\n').replace(/\r/g,'\\r').replace(/"/g,'\\x22').replace(/'/g,'\\\'').replace(/</g,'\\x3c').replace(/>/g,'\\x3e').replace(/&/g,'\\x26');}
function trim(str){var delim=arguments.length>1?arguments[1]:' ';for(var i=0,c=str.length-delim.length;i<=c;i+=delim.length){if(str.substring(i,i+delim.length)!=delim){break;}}
for(var j=str.length,c=Math.max(i,delim.length-1);j>c;j-=delim.length){if(str.substring(j-delim.length,j)!=delim){break;}}
return str.substring(i,j);}
function escapeURI(u)
{if(encodeURIComponent){return encodeURIComponent(u);}
if(escape){return escape(u);}}
function goURI(href){window.location.href=href;}
function is_email(email){return/^[\w!.%+]+@[\w]+(?:\.[\w]+)+$/.test(email);}
function getViewportWidth(){var width=0;if(document.documentElement&&document.documentElement.clientWidth){width=document.documentElement.clientWidth;}
else if(document.body&&document.body.clientWidth){width=document.body.clientWidth;}
else if(window.innerWidth){width=window.innerWidth-18;}
return width;};function getViewportHeight(){var height=0;if(document.documentElement&&document.documentElement.clientHeight){height=document.documentElement.clientHeight;}
else if(document.body&&document.body.clientHeight){height=document.body.clientHeight;}
else if(window.innerHeight){height=window.innerHeight-18;}
return height;};function getPageScrollHeight(){if(typeof(window.pageYOffset)=='number'){height=window.pageYOffset;}else if(document.body&&document.body.scrollTop){height=document.body.scrollTop;}else if(document.documentElement&&document.documentElement.scrollTop){height=document.documentElement.scrollTop;}
return height;};function getRadioFormValue(obj){for(i=0;i<obj.length;i++){if(obj[i].checked){return obj[i].value;}}
return null;}
function checkAgree(){if(document.frm.pic.value){if(document.frm.agree.checked){document.frm.submit();}else{show("error");}}}
function isIE(){return(navigator.userAgent.toLowerCase().indexOf("msie")!=-1);}
function isSafari(){return(navigator.userAgent.indexOf("Safari")!=-1);}
function getTableRowShownDisplayProperty(){if(isIE()){return'inline';}else{return'table-row';}}
function showTableRow()
{for(var i=0;i<arguments.length;i++){var element=ge(arguments[i]);if(element&&element.style)element.style.display=getTableRowShownDisplayProperty();}
return false;}
function getParentRow(el){el=ge(el);while(el.tagName&&el.tagName!="TR"){el=el.parentNode;}
return el;}
function stopPropagation(e){if(!e)var e=window.event;e.cancelBubble=true;if(e.stopPropagation){e.stopPropagation();}}
function show_standard_status(status){s=ge('standard_status');if(s){var header=s.firstChild;header.innerHTML=status;show('standard_status');}}
function hide_standard_status(){s=ge('standard_status');if(s){hide('standard_status');}}
function remove_node(node){if(node.removeNode)
node.removeNode(true);else{for(var i=node.childNodes.length-1;i>=0;i--)
remove_node(node.childNodes[i]);node.parentNode.removeChild(node);}
return null;}
function adjustImage(obj,stop_word,max){var pn=obj.parentNode;if(stop_word==null)
stop_word='note_content';if(max==null){while(pn.className.indexOf(stop_word)==-1)
pn=pn.parentNode;if(pn.offsetWidth)
max=pn.offsetWidth;else
max=400;}
if(navigator.userAgent.indexOf('AppleWebKit/4')==-1){obj.style.position='absolute';obj.style.left=obj.style.top='-32000px';}
obj.className=obj.className.replace('img_loading','img_ready');if(obj.width>max){if(window.ActiveXObject){try{var img_div=document.createElement('div');img_div.style.filter='progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+obj.src.replace('"','%22')+'", sizingMethod="scale")';img_div.style.width=max+'px';img_div.style.height=((max/obj.width)*obj.height)+'px';if(obj.parentNode.tagName=='A')
img_div.style.cursor='pointer';obj.parentNode.insertBefore(img_div,obj);obj.removeNode(true);}
catch(e){obj.style.width=max+'px';}}
else
obj.style.width=max+'px';}
obj.style.left=obj.style.top=obj.style.position='';}
function set_opacity(obj,opacity){try{obj.style.opacity=(opacity==1?'':opacity);obj.style.filter=(opacity==1?'':'alpha(opacity='+opacity*100+')');}
catch(e){}
obj.setAttribute('opacity',opacity);}
function get_opacity(obj){return obj.opacity?obj.opacity:1;}
function focus_login(){var email=ge("email");var pass=ge("pass");var dologin=ge("doquicklogin");if(email&&pass){if(email.value!=""&&pass.value==""){pass.focus();}else if(email.value==""){email.focus();}else if(email.value!=""&&pass.value!=""){dologin.focus();}}}
function array_indexOf(arr,val,index){if(!index){index=0;}
for(var i=index;i<arr.length;i++){if(arr[i]==val){return i;}}
return-1;}
function __super_class(obj){this.__super=obj;this.__parent=obj.prototype.parent;}
__super_class.prototype.__super_method=function(method,pointer){var __pointer=pointer;this[method]=function(){var __parent=this.__context.parent;this.__context.__parents.push(__parent);this.__context.parent=__parent?__parent.__parent:null;var __ret=__pointer.apply(this.__context,arguments);this.__context.parent=__parent;this.__context.__parents.pop();__parent=null;return __ret;};}
__super_class.prototype.__overridden_method=function(method,pointer){var __pointer=pointer;return function(){if((typeof this.__parents=='undefined')||!this.__parents.length){return __pointer.apply(this,arguments);}
else{var __parent=this.parent;this.parent=this.__parents[0];var __ret=__pointer.apply(this,arguments);this.parent=__parent;__parent=null;return __ret;}}}
__super_class.prototype.construct=function(context){this.__context=context;this.__context.__parents=[];if(typeof this.__context.__prototype.__overridden=='undefined'){this.__context.__prototype.__overridden=true;for(var i in this.__context.__prototype){if((typeof this.__context.__prototype[i]=='function')&&this.__context.__prototype[i]!=this.__super.prototype[i]){this.__context.__prototype[i]=this.__overridden_method(i,this.__context.__prototype[i]);}}}
var a=new Array();for(var i=1;i<arguments.length;i++){a.push(arguments[i]);}
this.__context.parent=this.__parent;var __ret=this.__super.apply(context,a);this.__context.parent=this;return __ret;}
Function.prototype.bind=function(context){var __method=this;return function(){return __method.apply(context,arguments);}}
Function.prototype.extend=function(obj){this.prototype.parent=new __super_class(obj);this.prototype.__prototype=this.prototype;for(var i in obj.prototype){if(typeof obj.prototype[i]=='function'){this.prototype[i]=obj.prototype[i];this.prototype.parent.__super_method(i,obj.prototype[i]);}
else if(i!='parent'){this.prototype[i]=obj.prototype[i];}}}
function dp(object)
{var descString="";for(var value in object)
descString+=(value+" => "+object[value]+"\n");if(descString!="")
alert(descString);else
alert(object);}
function toggleInlineFlyer(toggler){if(toggler.innerHTML=='hide flyer'){toggler.innerHTML='show flyer';}else{toggler.innerHTML='hide flyer';}
toggle('inline_flyer_content');}
function mediaHeaderPictureLoad(image,size)
{var w=image.offsetWidth;var h=image.offsetHeight;var ratio=size/h;image.style.height=size+'px';image.style.width=(ratio*w)+'px';image.style.visibility='visible';}
function adClick(id)
{ajax=new Ajax();ajax.get('ajax/redirect.php',{'id':id},true);return true;}
function Ajax(doneHandler,failHandler)
{newAjax=this;this.onDone=doneHandler;this.onFail=failHandler;this.transport=this.getTransport();this.transport.onreadystatechange=ajaxTrampoline(this);}
Ajax.prototype.get=function(uri,query,force_sync)
{force_sync=force_sync||false;if(typeof query!='string')
query=ajaxArrayToQueryString(query);fullURI=uri+(query?('?'+query):'');this.transport.open('GET',fullURI,!force_sync);this.transport.send('');}
Ajax.prototype.post=function(uri,data,force_sync,no_post_form_id)
{force_sync=force_sync||false;no_post_form_id=no_post_form_id||false;if(typeof data!='string'){data=ajaxArrayToQueryString(data);}
if(!no_post_form_id){var post_form_id=ge('post_form_id');if(post_form_id){data+='&post_form_id='+post_form_id.value;}}
this.transport.open('POST',uri,!force_sync);this.transport.setRequestHeader("Content-Type","application/x-www-form-urlencoded");this.transport.send(data);}
Ajax.prototype.stateDispatch=function()
{try{if(this.transport.readyState==1&&this.showLoad)
ajaxShowLoadIndicator();if(this.transport.readyState==4){if(this.showLoad)
ajaxHideLoadIndicator();if(this.transport.status>=200&&this.transport.status<300&&this.transport.responseText.length>0){try{if(this.onDone)this.onDone(this,this.transport.responseText);}catch(tempError){console?console.error(tempError):false;}}else{try{if(this.onFail)this.onFail(this);}catch(tempError){console?console.error(tempError):false;}}}}catch(error){if(this.onFail)this.onFail(this);}}
Ajax.prototype.getTransport=function()
{var ajax=null;try{ajax=new XMLHttpRequest();}
catch(e){ajax=null;}
try{if(!ajax)ajax=new ActiveXObject("Msxml2.XMLHTTP");}
catch(e){ajax=null;}
try{if(!ajax)ajax=new ActiveXObject("Microsoft.XMLHTTP");}
catch(e){ajax=null;}
return ajax;}
function ajaxTrampoline(ajaxObject)
{return function(){ajaxObject.stateDispatch();};}
function ajaxArrayToQueryString(query){var params=[];for(var key in query){if(typeof query[key]=='object'){for(var i=0;i<query[key].length;i++){params.push(encodeURIComponent(key)+'[]='+encodeURIComponent(query[key][i]));}}else{params.push(encodeURIComponent(key)+'='+encodeURIComponent(query[key]));}}
return params.join('&');}
var ajaxLoadIndicatorRefCount=0;function ajaxShowLoadIndicator()
{indicatorDiv=ge('ajaxLoadIndicator');if(!indicatorDiv){indicatorDiv=document.createElement("div");indicatorDiv.id='ajaxLoadIndicator';indicatorDiv.innerHTML='Loading';indicatorDiv.className='ajaxLoadIndicator';document.body.appendChild(indicatorDiv);}
indicatorDiv.style.top=(5+pageScrollY())+'px';indicatorDiv.style.left=(5+pageScrollX())+'px';indicatorDiv.style.display='block';ajaxLoadIndicatorRefCount++;}
function ajaxHideLoadIndicator()
{ajaxLoadIndicatorRefCount--;if(ajaxLoadIndicatorRefCount==0)
ge('ajaxLoadIndicator').style.display='';}