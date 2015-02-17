(function e(b,g,d){function c(k,i){if(!g[k]){if(!b[k]){var h=typeof require=="function"&&require;
if(!i&&h){return h(k,!0)}if(a){return a(k,!0)}throw new Error("Cannot find module '"+k+"'")
}var j=g[k]={exports:{}};b[k][0].call(j.exports,function(l){var m=b[k][1][l];return c(m?m:l)
},j,j.exports,e,b,g,d)}return g[k].exports}var a=typeof require=="function"&&require;
for(var f=0;f<d.length;f++){c(d[f])}return c})({1:[function(b,c,a){c.exports={ambient:[{platform:"desktop",browser:"safari",type:"flow"},{platform:"desktop",browser:"chrome",type:"flow"},{platform:"desktop",browser:"firefox",type:"flow"},{platform:"desktop",browser:"ie",min_browser_version:9,type:"flow"},{platform:"tablet",browser:"safari mobile",min_browser_version:8,type:"flow"},{platform:"handheld",browser:"safari mobile",min_browser_version:8,type:"flow"}],ambient_then_scrollable:[{platform:"desktop",browser:"safari",type:"h264"},{platform:"desktop",browser:"chrome",type:"h264"},{platform:"desktop",browser:"firefox",type:"flow"},{platform:"desktop",browser:"ie",min_browser_version:9,type:"h264"},{platform:"tablet",browser:"safari mobile",min_browser_version:8,type:"flow"},{platform:"handheld",browser:"safari mobile",min_browser_version:8,type:"flow"}],basic:[{platform:"desktop",browser:"safari",type:"flow"},{platform:"desktop",browser:"chrome",type:"flow"},{platform:"desktop",browser:"firefox",type:"flow"},{platform:"desktop",browser:"ie",min_browser_version:9,type:"flow"},{platform:"tablet",browser:"safari mobile",min_browser_version:8,type:"flow"},{platform:"handheld",browser:"safari mobile",min_browser_version:8,type:"flow"}],click_to_play:[{platform:"desktop",browser:"safari",type:"flow"},{platform:"desktop",browser:"chrome",type:"flow"},{platform:"desktop",browser:"firefox",type:"flow"},{platform:"desktop",browser:"ie",min_browser_version:9,type:"flow"},{platform:"tablet",browser:"safari mobile",min_browser_version:8,type:"flow"},{platform:"handheld",browser:"safari mobile",min_browser_version:8,type:"flow"}],scrollable:[{platform:"desktop",browser:"safari",type:"h264"},{platform:"desktop",browser:"chrome",type:"h264"},{platform:"desktop",browser:"firefox",type:"flow"},{platform:"desktop",browser:"ie",min_browser_version:9,type:"h264"}],scrubbable:[{platform:"desktop",browser:"safari",type:"h264"},{platform:"desktop",browser:"chrome",type:"h264"},{platform:"desktop",browser:"firefox",type:"flow"},{platform:"desktop",browser:"ie",min_browser_version:9,type:"h264"},{platform:"tablet",browser:"safari mobile",type:"flow"},{platform:"handheld",browser:"safari mobile",type:"flow"}],sizes:[{retina:true,min_viewport_width:1024,type:"large_2x"},{retina:false,min_viewport_width:1024,type:"large"},{retina:true,min_viewport_width:768,type:"medium_2x"},{retina:false,min_viewport_width:768,type:"medium"},{min_viewport_width:0,type:"xsmall_2x"},{platform:"desktop",retina:true,min_viewport_width:1024,type:"large_2x"},{platform:"desktop",retina:false,min_viewport_width:1024,type:"large"},{platform:"desktop",retina:true,min_viewport_width:0,type:"medium_2x"},{platform:"desktop",retina:false,min_viewport_width:0,type:"medium"},{platform:"tablet",retina:true,min_viewport_width:1024,type:"large"}]}
},{}],2:[function(b,c,a){c.exports={SharedInstance:b("./ac-shared-instance/SharedInstance")}
},{"./ac-shared-instance/SharedInstance":3}],3:[function(d,h,c){var i=window,g="AC",a="SharedInstance",f=i[g];
var b=(function(){var j={};return{get:function(l,k){var m=null;if(j[l]&&j[l][k]){m=j[l][k]
}return m},set:function(m,k,l){if(!j[m]){j[m]={}}if(typeof l==="function"){j[m][k]=new l()
}else{j[m][k]=l}return j[m][k]},share:function(m,k,l){var n=this.get(m,k);if(!n){n=this.set(m,k,l)
}return n},remove:function(l,k){var m=typeof k;if(m==="string"||m==="number"){if(!j[l]||!j[l][k]){return
}j[l][k]=null;return}if(j[l]){j[l]=null}}}}());if(!f){f=i[g]={}}if(!f[a]){f[a]=b
}h.exports=f[a]},{}],4:[function(d,f,c){var b=d("./ac-dom-nodes/helpers/nodeTypes");
var g;var a={createDocumentFragment:d("./ac-dom-nodes/createDocumentFragment"),filterByNodeType:d("./ac-dom-nodes/filterByNodeType"),insertAfter:d("./ac-dom-nodes/insertAfter"),insertBefore:d("./ac-dom-nodes/insertBefore"),insertFirstChild:d("./ac-dom-nodes/insertFirstChild"),insertLastChild:d("./ac-dom-nodes/insertLastChild"),isComment:d("./ac-dom-nodes/isComment"),isDocument:d("./ac-dom-nodes/isDocument"),isDocumentFragment:d("./ac-dom-nodes/isDocumentFragment"),isDocumentType:d("./ac-dom-nodes/isDocumentType"),isElement:d("./ac-dom-nodes/isElement"),isNode:d("./ac-dom-nodes/isNode"),isNodeList:d("./ac-dom-nodes/isNodeList"),isTextNode:d("./ac-dom-nodes/isTextNode"),remove:d("./ac-dom-nodes/remove"),replace:d("./ac-dom-nodes/replace")};
for(g in b){a[g]=b[g]}f.exports=a},{"./ac-dom-nodes/createDocumentFragment":5,"./ac-dom-nodes/filterByNodeType":6,"./ac-dom-nodes/helpers/nodeTypes":8,"./ac-dom-nodes/insertAfter":10,"./ac-dom-nodes/insertBefore":11,"./ac-dom-nodes/insertFirstChild":12,"./ac-dom-nodes/insertLastChild":13,"./ac-dom-nodes/isComment":14,"./ac-dom-nodes/isDocument":15,"./ac-dom-nodes/isDocumentFragment":16,"./ac-dom-nodes/isDocumentType":17,"./ac-dom-nodes/isElement":18,"./ac-dom-nodes/isNode":19,"./ac-dom-nodes/isNodeList":20,"./ac-dom-nodes/isTextNode":21,"./ac-dom-nodes/remove":22,"./ac-dom-nodes/replace":23}],5:[function(c,d,b){d.exports=function a(g){var f=document.createDocumentFragment();
var h;if(g){h=document.createElement("div");h.innerHTML=g;while(h.firstChild){f.appendChild(h.firstChild)
}}return f}},{}],6:[function(d,f,c){var g=d("./helpers/isNodeType");var a=d("./helpers/nodeTypes").ELEMENT_NODE;
f.exports=function b(i,h){h=h||a;i=Array.prototype.slice.call(i);return i.filter(function(j){return g(j,h)
})}},{"./helpers/isNodeType":7,"./helpers/nodeTypes":8}],7:[function(b,c,a){var d=b("../isNode");
c.exports=function f(h,g){if(!d(h)){return false}if(typeof g==="number"){return(h.nodeType===g)
}return(g.indexOf(h.nodeType)!==-1)}},{"../isNode":19}],8:[function(b,c,a){c.exports={ELEMENT_NODE:1,TEXT_NODE:3,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11}
},{}],9:[function(f,c,h){var g=f("./nodeTypes");var b=f("./isNodeType");var j=[g.ELEMENT_NODE,g.TEXT_NODE,g.COMMENT_NODE,g.DOCUMENT_FRAGMENT_NODE];
var d=" must be an Element, TextNode, Comment, or Document Fragment";var m=[g.ELEMENT_NODE,g.TEXT_NODE,g.COMMENT_NODE];
var i=" must be an Element, TextNode, or Comment";var k=[g.ELEMENT_NODE,g.DOCUMENT_FRAGMENT_NODE];
var l=" must be an Element, or Document Fragment";var a=" must have a parentNode";
c.exports={parentNode:function(n,q,p,o){o=o||"target";if((n||q)&&!b(n,k)){throw new TypeError(p+": "+o+l)
}},childNode:function(n,q,p,o){o=o||"target";if(!n&&!q){return}if(!b(n,m)){throw new TypeError(p+": "+o+i)
}},insertNode:function(n,q,p,o){o=o||"node";if(!n&&!q){return}if(!b(n,j)){throw new TypeError(p+": "+o+d)
}},hasParentNode:function(n,p,o){o=o||"target";if(!n.parentNode){throw new TypeError(p+": "+o+a)
}}}},{"./isNodeType":7,"./nodeTypes":8}],10:[function(b,c,a){var f=b("./helpers/validate");
c.exports=function d(g,h){f.insertNode(g,true,"insertAfter");f.childNode(h,true,"insertAfter");
f.hasParentNode(h,"insertAfter");if(!h.nextSibling){return h.parentNode.appendChild(g)
}return h.parentNode.insertBefore(g,h.nextSibling)}},{"./helpers/validate":9}],11:[function(c,d,a){var f=c("./helpers/validate");
d.exports=function b(g,h){f.insertNode(g,true,"insertBefore");f.childNode(h,true,"insertBefore");
f.hasParentNode(h,"insertBefore");return h.parentNode.insertBefore(g,h)}},{"./helpers/validate":9}],12:[function(c,d,b){var f=c("./helpers/validate");
d.exports=function a(g,h){f.insertNode(g,true,"insertFirstChild");f.parentNode(h,true,"insertFirstChild");
if(!h.firstChild){return h.appendChild(g)}return h.insertBefore(g,h.firstChild)
}},{"./helpers/validate":9}],13:[function(b,c,a){var d=b("./helpers/validate");
c.exports=function f(g,h){d.insertNode(g,true,"insertLastChild");d.parentNode(h,true,"insertLastChild");
return h.appendChild(g)}},{"./helpers/validate":9}],14:[function(c,d,a){var g=c("./helpers/isNodeType");
var f=c("./helpers/nodeTypes").COMMENT_NODE;d.exports=function b(h){return g(h,f)
}},{"./helpers/isNodeType":7,"./helpers/nodeTypes":8}],15:[function(c,d,b){var g=c("./helpers/isNodeType");
var a=c("./helpers/nodeTypes").DOCUMENT_NODE;d.exports=function f(h){return g(h,a)
}},{"./helpers/isNodeType":7,"./helpers/nodeTypes":8}],16:[function(c,d,b){var g=c("./helpers/isNodeType");
var a=c("./helpers/nodeTypes").DOCUMENT_FRAGMENT_NODE;d.exports=function f(h){return g(h,a)
}},{"./helpers/isNodeType":7,"./helpers/nodeTypes":8}],17:[function(b,c,a){var g=b("./helpers/isNodeType");
var f=b("./helpers/nodeTypes").DOCUMENT_TYPE_NODE;c.exports=function d(h){return g(h,f)
}},{"./helpers/isNodeType":7,"./helpers/nodeTypes":8}],18:[function(c,d,b){var g=c("./helpers/isNodeType");
var a=c("./helpers/nodeTypes").ELEMENT_NODE;d.exports=function f(h){return g(h,a)
}},{"./helpers/isNodeType":7,"./helpers/nodeTypes":8}],19:[function(b,c,a){c.exports=function d(f){return !!(f&&f.nodeType)
}},{}],20:[function(c,d,b){var f=/^\[object (HTMLCollection|NodeList|Object)\]$/;
d.exports=function a(g){if(!g){return false}if(typeof g.length!=="number"){return false
}if(typeof g[0]==="object"&&(!g[0]||!g[0].nodeType)){return false}return f.test(Object.prototype.toString.call(g))
}},{}],21:[function(c,d,a){var g=c("./helpers/isNodeType");var b=c("./helpers/nodeTypes").TEXT_NODE;
d.exports=function f(h){return g(h,b)}},{"./helpers/isNodeType":7,"./helpers/nodeTypes":8}],22:[function(c,d,b){var f=c("./helpers/validate");
d.exports=function a(g){f.childNode(g,true,"remove");if(!g.parentNode){return g
}return g.parentNode.removeChild(g)}},{"./helpers/validate":9}],23:[function(b,d,a){var f=b("./helpers/validate");
d.exports=function c(g,h){f.insertNode(g,true,"insertFirstChild","newNode");f.childNode(h,true,"insertFirstChild","oldNode");
f.hasParentNode(h,"insertFirstChild","oldNode");return h.parentNode.replaceChild(g,h)
}},{"./helpers/validate":9}],24:[function(b,c,a){var d={querySelector:b("./ac-dom-traversal/querySelector"),querySelectorAll:b("./ac-dom-traversal/querySelectorAll"),ancestor:b("./ac-dom-traversal/ancestor"),ancestors:b("./ac-dom-traversal/ancestors"),children:b("./ac-dom-traversal/children"),firstChild:b("./ac-dom-traversal/firstChild"),lastChild:b("./ac-dom-traversal/lastChild"),siblings:b("./ac-dom-traversal/siblings"),nextSibling:b("./ac-dom-traversal/nextSibling"),nextSiblings:b("./ac-dom-traversal/nextSiblings"),previousSibling:b("./ac-dom-traversal/previousSibling"),previousSiblings:b("./ac-dom-traversal/previousSiblings"),filterBySelector:b("./ac-dom-traversal/filterBySelector"),matchesSelector:b("./ac-dom-traversal/matchesSelector")};
b("./ac-dom-traversal/shims/ie")(d);c.exports=d},{"./ac-dom-traversal/ancestor":25,"./ac-dom-traversal/ancestors":26,"./ac-dom-traversal/children":27,"./ac-dom-traversal/filterBySelector":28,"./ac-dom-traversal/firstChild":29,"./ac-dom-traversal/lastChild":32,"./ac-dom-traversal/matchesSelector":33,"./ac-dom-traversal/nextSibling":34,"./ac-dom-traversal/nextSiblings":35,"./ac-dom-traversal/previousSibling":36,"./ac-dom-traversal/previousSiblings":37,"./ac-dom-traversal/querySelector":38,"./ac-dom-traversal/querySelectorAll":39,"./ac-dom-traversal/shims/ie":40,"./ac-dom-traversal/siblings":41}],25:[function(d,g,c){var a=d("ac-dom-nodes");
var b=d("./matchesSelector");var h=d("./helpers/validate");g.exports=function f(j,i){h.childNode(j,true,"ancestors");
h.selector(i,false,"ancestors");if(j!==document.body){while((j=j.parentNode)&&a.isElement(j)){if(!i||b(j,i)){return j
}if(j===document.body){break}}}return null}},{"./helpers/validate":31,"./matchesSelector":33,"ac-dom-nodes":4}],26:[function(d,f,c){var a=d("ac-dom-nodes");
var b=d("./matchesSelector");var h=d("./helpers/validate");f.exports=function g(k,i){var j=[];
h.childNode(k,true,"ancestors");h.selector(i,false,"ancestors");if(k!==document.body){while((k=k.parentNode)&&a.isElement(k)){if(!i||b(k,i)){j.push(k)
}if(k===document.body){break}}}return j}},{"./helpers/validate":31,"./matchesSelector":33,"ac-dom-nodes":4}],27:[function(d,g,c){var a=d("ac-dom-nodes");
var b=d("./filterBySelector");var h=d("./helpers/validate");g.exports=function f(k,i){var j;
h.parentNode(k,true,"children");h.selector(i,false,"children");j=k.children||k.childNodes;
j=a.filterByNodeType(j);if(i){j=b(j,i)}return j}},{"./filterBySelector":28,"./helpers/validate":31,"ac-dom-nodes":4}],28:[function(d,f,c){var b=d("./matchesSelector");
var g=d("./helpers/validate");f.exports=function a(i,h){g.selector(h,true,"filterBySelector");
i=Array.prototype.slice.call(i);return i.filter(function(j){return b(j,h)})}},{"./helpers/validate":31,"./matchesSelector":33}],29:[function(b,d,a){var c=b("./children");
var g=b("./helpers/validate");d.exports=function f(j,h){var i;g.parentNode(j,true,"firstChild");
g.selector(h,false,"firstChild");if(j.firstElementChild&&!h){return j.firstElementChild
}i=c(j,h);if(i.length){return i[0]}return null}},{"./children":27,"./helpers/validate":31}],30:[function(b,c,a){c.exports=window.Element?(function(d){return d.matches||d.matchesSelector||d.webkitMatchesSelector||d.mozMatchesSelector||d.msMatchesSelector||d.oMatchesSelector
}(Element.prototype)):null},{}],31:[function(d,b,f){var j=d("ac-dom-nodes");var a=function(m,l){if(!j.isNode(m)){return false
}if(typeof l==="number"){return(m.nodeType===l)}return(l.indexOf(m.nodeType)!==-1)
};var h=[j.ELEMENT_NODE,j.DOCUMENT_NODE,j.DOCUMENT_FRAGMENT_NODE];var i=" must be an Element, Document, or Document Fragment";
var k=[j.ELEMENT_NODE,j.TEXT_NODE,j.COMMENT_NODE];var g=" must be an Element, TextNode, or Comment";
var c=" must be a string";b.exports={parentNode:function(l,o,n,m){m=m||"node";if((l||o)&&!a(l,h)){throw new TypeError(n+": "+m+i)
}},childNode:function(l,o,n,m){m=m||"node";if(!l&&!o){return}if(!a(l,k)){throw new TypeError(n+": "+m+g)
}},selector:function(l,o,n,m){m=m||"selector";if((l||o)&&typeof l!=="string"){throw new TypeError(n+": "+m+c)
}}}},{"ac-dom-nodes":4}],32:[function(b,d,a){var c=b("./children");var g=b("./helpers/validate");
d.exports=function f(j,h){var i;g.parentNode(j,true,"lastChild");g.selector(h,false,"lastChild");
if(j.lastElementChild&&!h){return j.lastElementChild}i=c(j,h);if(i.length){return i[i.length-1]
}return null}},{"./children":27,"./helpers/validate":31}],33:[function(f,g,d){var b=f("ac-dom-nodes");
var a=f("./helpers/nativeMatches");var h=f("./helpers/validate");g.exports=function c(j,i){h.selector(i,true,"matchesSelector");
return b.isElement(j)?a.call(j,i):false}},{"./helpers/nativeMatches":30,"./helpers/validate":31,"ac-dom-nodes":4}],34:[function(d,f,c){var a=d("ac-dom-nodes");
var b=d("./matchesSelector");var h=d("./helpers/validate");f.exports=function g(j,i){h.childNode(j,true,"nextSibling");
h.selector(i,false,"nextSibling");if(j.nextElementSibling&&!i){return j.nextElementSibling
}while(j=j.nextSibling){if(a.isElement(j)){if(!i||b(j,i)){return j}}}return null
}},{"./helpers/validate":31,"./matchesSelector":33,"ac-dom-nodes":4}],35:[function(f,g,c){var a=f("ac-dom-nodes");
var b=f("./matchesSelector");var h=f("./helpers/validate");g.exports=function d(k,i){var j=[];
h.childNode(k,true,"nextSiblings");h.selector(i,false,"nextSiblings");while(k=k.nextSibling){if(a.isElement(k)){if(!i||b(k,i)){j.push(k)
}}}return j}},{"./helpers/validate":31,"./matchesSelector":33,"ac-dom-nodes":4}],36:[function(d,f,c){var a=d("ac-dom-nodes");
var b=d("./matchesSelector");var h=d("./helpers/validate");f.exports=function g(j,i){h.childNode(j,true,"previousSibling");
h.selector(i,false,"previousSibling");if(j.previousElementSibling&&!i){return j.previousElementSibling
}while(j=j.previousSibling){if(a.isElement(j)){if(!i||b(j,i)){return j}}}return null
}},{"./helpers/validate":31,"./matchesSelector":33,"ac-dom-nodes":4}],37:[function(d,f,c){var a=d("ac-dom-nodes");
var b=d("./matchesSelector");var h=d("./helpers/validate");f.exports=function g(k,i){var j=[];
h.childNode(k,true,"previousSiblings");h.selector(i,false,"previousSiblings");while(k=k.previousSibling){if(a.isElement(k)){if(!i||b(k,i)){j.push(k)
}}}return j.reverse()}},{"./helpers/validate":31,"./matchesSelector":33,"ac-dom-nodes":4}],38:[function(b,c,a){var f=b("./helpers/validate");
c.exports=function d(g,h){h=h||document;f.parentNode(h,true,"querySelector","context");
f.selector(g,true,"querySelector");return h.querySelector(g)}},{"./helpers/validate":31}],39:[function(b,c,a){var f=b("./helpers/validate");
c.exports=function d(g,h){h=h||document;f.parentNode(h,true,"querySelectorAll","context");
f.selector(g,true,"querySelectorAll");return Array.prototype.slice.call(h.querySelectorAll(g))
}},{"./helpers/validate":31}],40:[function(d,f,c){var g=d("../vendor/sizzle/sizzle");
var b=d("ac-dom-nodes");var a=d("../helpers/nativeMatches");var h=d("../helpers/validate");
f.exports=function(j,i){if(i||!("querySelectorAll" in document)){j.querySelectorAll=function(k,m){var l;
var n;m=m||document;h.parentNode(m,true,"querySelectorAll","context");h.selector(k,true,"querySelectorAll");
if(b.isDocumentFragment(m)){l=j.children(m);n=[];l.forEach(function(p){var o;if(g.matchesSelector(p,k)){n.push(p)
}o=g(k,p);if(o.length){n=n.concat(o)}});return n}return g(k,m)};j.querySelector=function(l,m){var k;
m=m||document;h.parentNode(m,true,"querySelector","context");h.selector(l,true,"querySelector");
k=j.querySelectorAll(l,m);return k.length?k[0]:null}}if(i||!a){j.matchesSelector=function(l,k){return g.matchesSelector(l,k)
}}}},{"../helpers/nativeMatches":30,"../helpers/validate":31,"../vendor/sizzle/sizzle":42,"ac-dom-nodes":4}],41:[function(b,d,a){var c=b("./children");
var g=b("./helpers/validate");d.exports=function f(j,h){var i=[];g.childNode(j,true,"siblings");
g.selector(h,false,"siblings");if(j.parentNode){i=c(j.parentNode,h);i=i.filter(function(k){return(k!==j)
})}return i}},{"./children":27,"./helpers/validate":31}],42:[function(b,c,a){
/*!
 * Sizzle CSS Selector Engine
 *  Copyright 2012, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(ad,v){var ai,D,u,h,n,l=ad.document,o=l.documentElement,L="undefined",p=false,m=true,t=0,y=[].slice,ah=[].push,al=("sizcache"+Math.random()).replace(".",""),O="[\\x20\\t\\r\\n\\f]",x="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])",w="(?:[\\w#_-]|[^\\x00-\\xa0]|\\\\.)",aq="([*^$|!~]?=)",aa="\\["+O+"*("+x+"+)"+O+"*(?:"+aq+O+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+w+"+)|)|)"+O+"*\\]",ar=":("+x+"+)(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|(.*))\\)|)",Q=":(nth|eq|gt|lt|first|last|even|odd)(?:\\((\\d*)\\)|)(?=[^-]|$)",s=O+"*([\\x20\\t\\r\\n\\f>+~])"+O+"*",r="(?=[^\\x20\\t\\r\\n\\f])(?:\\\\.|"+aa+"|"+ar.replace(2,7)+"|[^\\\\(),])+",aj=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),U=new RegExp("^"+s),I=new RegExp(r+"?(?="+O+"*,|$)","g"),Y=new RegExp("^(?:(?!,)(?:(?:^|,)"+O+"*"+r+")*?|"+O+"*(.*?))(\\)|$)"),ao=new RegExp(r.slice(19,-6)+"\\x20\\t\\r\\n\\f>+~])+|"+s,"g"),Z=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,ae=/[\x20\t\r\n\f]*[+~]/,am=/:not\($/,E=/h\d/i,ab=/input|select|textarea|button/i,H=/\\(?!\\)/g,T={ID:new RegExp("^#("+x+"+)"),CLASS:new RegExp("^\\.("+x+"+)"),NAME:new RegExp("^\\[name=['\"]?("+x+"+)['\"]?\\]"),TAG:new RegExp("^("+x.replace("[-","[-\\*")+"+)"),ATTR:new RegExp("^"+aa),PSEUDO:new RegExp("^"+ar),CHILD:new RegExp("^:(only|nth|last|first)-child(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),POS:new RegExp(Q,"ig"),needsContext:new RegExp("^"+O+"*[>+~]|"+Q,"i")},ag={},F=[],A={},J=[],an=function(at){at.sizzleFilter=true;
return at},i=function(at){return function(au){return au.nodeName.toLowerCase()==="input"&&au.type===at
}},G=function(at){return function(av){var au=av.nodeName.toLowerCase();return(au==="input"||au==="button")&&av.type===at
}},W=function(at){var au=false,aw=l.createElement("div");try{au=at(aw)}catch(av){}aw=null;
return au},C=W(function(au){au.innerHTML="<select></select>";var at=typeof au.lastChild.getAttribute("multiple");
return at!=="boolean"&&at!=="string"}),f=W(function(au){au.id=al+0;au.innerHTML="<a name='"+al+"'></a><div name='"+al+"'></div>";
o.insertBefore(au,o.firstChild);var at=l.getElementsByName&&l.getElementsByName(al).length===2+l.getElementsByName(al+0).length;
n=!l.getElementById(al);o.removeChild(au);return at}),k=W(function(at){at.appendChild(l.createComment(""));
return at.getElementsByTagName("*").length===0}),S=W(function(at){at.innerHTML="<a href='#'></a>";
return at.firstChild&&typeof at.firstChild.getAttribute!==L&&at.firstChild.getAttribute("href")==="#"
}),R=W(function(at){at.innerHTML="<div class='hidden e'></div><div class='hidden'></div>";
if(!at.getElementsByClassName||at.getElementsByClassName("e").length===0){return false
}at.lastChild.className="e";return at.getElementsByClassName("e").length!==1});
var ac=function(aw,at,ay,aB){ay=ay||[];at=at||l;var az,au,aA,av,ax=at.nodeType;
if(ax!==1&&ax!==9){return[]}if(!aw||typeof aw!=="string"){return ay}aA=z(at);if(!aA&&!aB){if((az=Z.exec(aw))){if((av=az[1])){if(ax===9){au=at.getElementById(av);
if(au&&au.parentNode){if(au.id===av){ay.push(au);return ay}}else{return ay}}else{if(at.ownerDocument&&(au=at.ownerDocument.getElementById(av))&&P(at,au)&&au.id===av){ay.push(au);
return ay}}}else{if(az[2]){ah.apply(ay,y.call(at.getElementsByTagName(aw),0));return ay
}else{if((av=az[3])&&R&&at.getElementsByClassName){ah.apply(ay,y.call(at.getElementsByClassName(av),0));
return ay}}}}}return ak(aw,at,ay,aB,aA)};var V=ac.selectors={cacheLength:50,match:T,order:["ID","TAG"],attrHandle:{},createPseudo:an,find:{ID:n?function(aw,av,au){if(typeof av.getElementById!==L&&!au){var at=av.getElementById(aw);
return at&&at.parentNode?[at]:[]}}:function(aw,av,au){if(typeof av.getElementById!==L&&!au){var at=av.getElementById(aw);
return at?at.id===aw||typeof at.getAttributeNode!==L&&at.getAttributeNode("id").value===aw?[at]:v:[]
}},TAG:k?function(at,au){if(typeof au.getElementsByTagName!==L){return au.getElementsByTagName(at)
}}:function(at,ax){var aw=ax.getElementsByTagName(at);if(at==="*"){var ay,av=[],au=0;
for(;(ay=aw[au]);au++){if(ay.nodeType===1){av.push(ay)}}return av}return aw}},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(at){at[1]=at[1].replace(H,"");
at[3]=(at[4]||at[5]||"").replace(H,"");if(at[2]==="~="){at[3]=" "+at[3]+" "}return at.slice(0,4)
},CHILD:function(at){at[1]=at[1].toLowerCase();if(at[1]==="nth"){if(!at[2]){ac.error(at[0])
}at[3]=+(at[3]?at[4]+(at[5]||1):2*(at[2]==="even"||at[2]==="odd"));at[4]=+((at[6]+at[7])||at[2]==="odd")
}else{if(at[2]){ac.error(at[0])}}return at},PSEUDO:function(at){var au,av=at[4];
if(T.CHILD.test(at[0])){return null}if(av&&(au=Y.exec(av))&&au.pop()){at[0]=at[0].slice(0,au[0].length-av.length-1);
av=au[0].slice(0,-1)}at.splice(2,3,av||at[3]);return at}},filter:{ID:n?function(at){at=at.replace(H,"");
return function(au){return au.getAttribute("id")===at}}:function(at){at=at.replace(H,"");
return function(av){var au=typeof av.getAttributeNode!==L&&av.getAttributeNode("id");
return au&&au.value===at}},TAG:function(at){if(at==="*"){return function(){return true
}}at=at.replace(H,"").toLowerCase();return function(au){return au.nodeName&&au.nodeName.toLowerCase()===at
}},CLASS:function(at){var au=ag[at];if(!au){au=ag[at]=new RegExp("(^|"+O+")"+at+"("+O+"|$)");
F.push(at);if(F.length>V.cacheLength){delete ag[F.shift()]}}return function(av){return au.test(av.className||(typeof av.getAttribute!==L&&av.getAttribute("class"))||"")
}},ATTR:function(av,au,at){if(!au){return function(aw){return ac.attr(aw,av)!=null
}}return function(ax){var aw=ac.attr(ax,av),ay=aw+"";if(aw==null){return au==="!="
}switch(au){case"=":return ay===at;case"!=":return ay!==at;case"^=":return at&&ay.indexOf(at)===0;
case"*=":return at&&ay.indexOf(at)>-1;case"$=":return at&&ay.substr(ay.length-at.length)===at;
case"~=":return(" "+ay+" ").indexOf(at)>-1;case"|=":return ay===at||ay.substr(0,at.length+1)===at+"-"
}}},CHILD:function(au,aw,ax,av){if(au==="nth"){var at=t++;return function(aB){var ay,aC,aA=0,az=aB;
if(ax===1&&av===0){return true}ay=aB.parentNode;if(ay&&(ay[al]!==at||!aB.sizset)){for(az=ay.firstChild;
az;az=az.nextSibling){if(az.nodeType===1){az.sizset=++aA;if(az===aB){break}}}ay[al]=at
}aC=aB.sizset-av;if(ax===0){return aC===0}else{return(aC%ax===0&&aC/ax>=0)}}}return function(az){var ay=az;
switch(au){case"only":case"first":while((ay=ay.previousSibling)){if(ay.nodeType===1){return false
}}if(au==="first"){return true}ay=az;case"last":while((ay=ay.nextSibling)){if(ay.nodeType===1){return false
}}return true}}},PSEUDO:function(ax,aw,au,at){var av=V.pseudos[ax]||V.pseudos[ax.toLowerCase()];
if(!av){ac.error("unsupported pseudo: "+ax)}if(!av.sizzleFilter){return av}return av(aw,au,at)
}},pseudos:{not:an(function(at,av,au){var aw=q(at.replace(aj,"$1"),av,au);return function(ax){return !aw(ax)
}}),enabled:function(at){return at.disabled===false},disabled:function(at){return at.disabled===true
},checked:function(at){var au=at.nodeName.toLowerCase();return(au==="input"&&!!at.checked)||(au==="option"&&!!at.selected)
},selected:function(at){if(at.parentNode){at.parentNode.selectedIndex}return at.selected===true
},parent:function(at){return !!at.firstChild},empty:function(at){return !at.firstChild
},contains:an(function(at){return function(au){return(au.textContent||au.innerText||d(au)).indexOf(at)>-1
}}),has:an(function(at){return function(au){return ac(at,au).length>0}}),header:function(at){return E.test(at.nodeName)
},text:function(av){var au,at;return av.nodeName.toLowerCase()==="input"&&(au=av.type)==="text"&&((at=av.getAttribute("type"))==null||at.toLowerCase()===au)
},radio:i("radio"),checkbox:i("checkbox"),file:i("file"),password:i("password"),image:i("image"),submit:G("submit"),reset:G("reset"),button:function(au){var at=au.nodeName.toLowerCase();
return at==="input"&&au.type==="button"||at==="button"},input:function(at){return ab.test(at.nodeName)
},focus:function(at){var au=at.ownerDocument;return at===au.activeElement&&(!au.hasFocus||au.hasFocus())&&!!(at.type||at.href)
},active:function(at){return at===at.ownerDocument.activeElement}},setFilters:{first:function(av,au,at){return at?av.slice(1):[av[0]]
},last:function(aw,av,au){var at=aw.pop();return au?aw:[at]},even:function(ay,ax,aw){var av=[],au=aw?1:0,at=ay.length;
for(;au<at;au=au+2){av.push(ay[au])}return av},odd:function(ay,ax,aw){var av=[],au=aw?0:1,at=ay.length;
for(;au<at;au=au+2){av.push(ay[au])}return av},lt:function(av,au,at){return at?av.slice(+au):av.slice(0,+au)
},gt:function(av,au,at){return at?av.slice(0,+au+1):av.slice(+au+1)},eq:function(aw,av,au){var at=aw.splice(+av,1);
return au?aw:at}}};V.setFilters.nth=V.setFilters.eq;V.filters=V.pseudos;if(!S){V.attrHandle={href:function(at){return at.getAttribute("href",2)
},type:function(at){return at.getAttribute("type")}}}if(f){V.order.push("NAME");
V.find.NAME=function(at,au){if(typeof au.getElementsByName!==L){return au.getElementsByName(at)
}}}if(R){V.order.splice(1,0,"CLASS");V.find.CLASS=function(av,au,at){if(typeof au.getElementsByClassName!==L&&!at){return au.getElementsByClassName(av)
}}}try{y.call(o.childNodes,0)[0].nodeType}catch(ap){y=function(au){var av,at=[];
for(;(av=this[au]);au++){at.push(av)}return at}}var z=ac.isXML=function(at){var au=at&&(at.ownerDocument||at).documentElement;
return au?au.nodeName!=="HTML":false};var P=ac.contains=o.compareDocumentPosition?function(au,at){return !!(au.compareDocumentPosition(at)&16)
}:o.contains?function(au,at){var aw=au.nodeType===9?au.documentElement:au,av=at.parentNode;
return au===av||!!(av&&av.nodeType===1&&aw.contains&&aw.contains(av))}:function(au,at){while((at=at.parentNode)){if(at===au){return true
}}return false};var d=ac.getText=function(ax){var aw,au="",av=0,at=ax.nodeType;
if(at){if(at===1||at===9||at===11){if(typeof ax.textContent==="string"){return ax.textContent
}else{for(ax=ax.firstChild;ax;ax=ax.nextSibling){au+=d(ax)}}}else{if(at===3||at===4){return ax.nodeValue
}}}else{for(;(aw=ax[av]);av++){au+=d(aw)}}return au};ac.attr=function(aw,av){var at,au=z(aw);
if(!au){av=av.toLowerCase()}if(V.attrHandle[av]){return V.attrHandle[av](aw)}if(C||au){return aw.getAttribute(av)
}at=aw.getAttributeNode(av);return at?typeof aw[av]==="boolean"?aw[av]?av:null:at.specified?at.value:null:null
};ac.error=function(at){throw new Error("Syntax error, unrecognized expression: "+at)
};[0,0].sort(function(){return(m=0)});if(o.compareDocumentPosition){u=function(au,at){if(au===at){p=true;
return 0}return(!au.compareDocumentPosition||!at.compareDocumentPosition?au.compareDocumentPosition:au.compareDocumentPosition(at)&4)?-1:1
}}else{u=function(aB,aA){if(aB===aA){p=true;return 0}else{if(aB.sourceIndex&&aA.sourceIndex){return aB.sourceIndex-aA.sourceIndex
}}var ay,au,av=[],at=[],ax=aB.parentNode,az=aA.parentNode,aC=ax;if(ax===az){return h(aB,aA)
}else{if(!ax){return -1}else{if(!az){return 1}}}while(aC){av.unshift(aC);aC=aC.parentNode
}aC=az;while(aC){at.unshift(aC);aC=aC.parentNode}ay=av.length;au=at.length;for(var aw=0;
aw<ay&&aw<au;aw++){if(av[aw]!==at[aw]){return h(av[aw],at[aw])}}return aw===ay?h(aB,at[aw],-1):h(av[aw],aA,1)
};h=function(au,at,av){if(au===at){return av}var aw=au.nextSibling;while(aw){if(aw===at){return -1
}aw=aw.nextSibling}return 1}}ac.uniqueSort=function(au){var av,at=1;if(u){p=m;au.sort(u);
if(p){for(;(av=au[at]);at++){if(av===au[at-1]){au.splice(at--,1)}}}}return au};
function B(au,ay,ax,av){var aw=0,at=ay.length;for(;aw<at;aw++){ac(au,ay[aw],ax,av)
}}function X(at,av,az,aA,au,ay){var aw,ax=V.setFilters[av.toLowerCase()];if(!ax){ac.error(av)
}if(at||!(aw=au)){B(at||"*",aA,(aw=[]),au)}return aw.length>0?ax(aw,az,ay):[]}function af(aD,at,aB,av,aH){var ay,au,ax,aJ,aA,aI,aC,aG,aE=0,aF=aH.length,aw=T.POS,az=new RegExp("^"+aw.source+"(?!"+O+")","i"),aK=function(){var aM=1,aL=arguments.length-2;
for(;aM<aL;aM++){if(arguments[aM]===v){ay[aM]=v}}};for(;aE<aF;aE++){aw.exec("");
aD=aH[aE];aJ=[];ax=0;aA=av;while((ay=aw.exec(aD))){aG=aw.lastIndex=ay.index+ay[0].length;
if(aG>ax){aC=aD.slice(ax,ay.index);ax=aG;aI=[at];if(U.test(aC)){if(aA){aI=aA}aA=av
}if((au=am.test(aC))){aC=aC.slice(0,-5).replace(U,"$&*")}if(ay.length>1){ay[0].replace(az,aK)
}aA=X(aC,ay[1],ay[2],aI,aA,au)}}if(aA){aJ=aJ.concat(aA);if((aC=aD.slice(ax))&&aC!==")"){B(aC,aJ,aB,av)
}else{ah.apply(aB,aJ)}}else{ac(aD,at,aB,av)}}return aF===1?aB:ac.uniqueSort(aB)
}function g(az,av,aC){var aE,aD,aF,ax=[],aA=0,aB=Y.exec(az),au=!aB.pop()&&!aB.pop(),aG=au&&az.match(I)||[""],at=V.preFilter,aw=V.filter,ay=!aC&&av!==l;
for(;(aD=aG[aA])!=null&&au;aA++){ax.push(aE=[]);if(ay){aD=" "+aD}while(aD){au=false;
if((aB=U.exec(aD))){aD=aD.slice(aB[0].length);au=aE.push({part:aB.pop().replace(aj," "),captures:aB})
}for(aF in aw){if((aB=T[aF].exec(aD))&&(!at[aF]||(aB=at[aF](aB,av,aC)))){aD=aD.slice(aB.shift().length);
au=aE.push({part:aF,captures:aB})}}if(!au){break}}}if(!au){ac.error(az)}return ax
}function M(ax,aw,av){var at=aw.dir,au=t++;if(!ax){ax=function(ay){return ay===av
}}return aw.first?function(az,ay){while((az=az[at])){if(az.nodeType===1){return ax(az,ay)&&az
}}}:function(aA,az){var ay,aB=au+"."+D,aC=aB+"."+ai;while((aA=aA[at])){if(aA.nodeType===1){if((ay=aA[al])===aC){return false
}else{if(typeof ay==="string"&&ay.indexOf(aB)===0){if(aA.sizset){return aA}}else{aA[al]=aC;
if(ax(aA,az)){aA.sizset=true;return aA}aA.sizset=false}}}}}}function K(at,au){return at?function(ax,aw){var av=au(ax,aw);
return av&&at(av===true?ax:av,aw)}:au}function N(ay,aw,at){var av,ax,au=0;for(;
(av=ay[au]);au++){if(V.relative[av.part]){ax=M(ax,V.relative[av.part],aw)}else{av.captures.push(aw,at);
ax=K(ax,V.filter[av.part].apply(null,av.captures))}}return ax}function j(at){return function(aw,av){var ax,au=0;
for(;(ax=at[au]);au++){if(ax(aw,av)){return true}}return false}}var q=ac.compile=function(at,aw,au){var az,ay,av,ax=A[at];
if(ax&&ax.context===aw){ax.dirruns++;return ax}ay=g(at,aw,au);for(av=0;(az=ay[av]);
av++){ay[av]=N(az,aw,au)}ax=A[at]=j(ay);ax.context=aw;ax.runs=ax.dirruns=0;J.push(at);
if(J.length>V.cacheLength){delete A[J.shift()]}return ax};ac.matches=function(au,at){return ac(au,null,null,at)
};ac.matchesSelector=function(at,au){return ac(au,null,null,[at]).length>0};var ak=function(ax,au,az,aD,aC){ax=ax.replace(aj,"$1");
var at,aE,aA,aF,av,aw,aH,aI,ay,aB=ax.match(I),aG=ax.match(ao),aJ=au.nodeType;if(T.POS.test(ax)){return af(ax,au,az,aD,aB)
}if(aD){at=y.call(aD,0)}else{if(aB&&aB.length===1){if(aG.length>1&&aJ===9&&!aC&&(aB=T.ID.exec(aG[0]))){au=V.find.ID(aB[1],au,aC)[0];
if(!au){return az}ax=ax.slice(aG.shift().length)}aI=((aB=ae.exec(aG[0]))&&!aB.index&&au.parentNode)||au;
ay=aG.pop();aw=ay.split(":not")[0];for(aA=0,aF=V.order.length;aA<aF;aA++){aH=V.order[aA];
if((aB=T[aH].exec(aw))){at=V.find[aH]((aB[1]||"").replace(H,""),aI,aC);if(at==null){continue
}if(aw===ay){ax=ax.slice(0,ax.length-ay.length)+aw.replace(T[aH],"");if(!ax){ah.apply(az,y.call(at,0))
}}break}}}}if(ax){aE=q(ax,au,aC);D=aE.dirruns;if(at==null){at=V.find.TAG("*",(ae.test(ax)&&au.parentNode)||au)
}for(aA=0;(av=at[aA]);aA++){ai=aE.runs++;if(aE(av,au)){az.push(av)}}}return az};
if(l.querySelectorAll){(function(){var ay,az=ak,ax=/'|\\/g,av=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,au=[],at=[":active"],aw=o.matchesSelector||o.mozMatchesSelector||o.webkitMatchesSelector||o.oMatchesSelector||o.msMatchesSelector;
W(function(aA){aA.innerHTML="<select><option selected></option></select>";if(!aA.querySelectorAll("[selected]").length){au.push("\\["+O+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)")
}if(!aA.querySelectorAll(":checked").length){au.push(":checked")}});W(function(aA){aA.innerHTML="<p test=''></p>";
if(aA.querySelectorAll("[test^='']").length){au.push("[*^$]="+O+"*(?:\"\"|'')")
}aA.innerHTML="<input type='hidden'>";if(!aA.querySelectorAll(":enabled").length){au.push(":enabled",":disabled")
}});au=au.length&&new RegExp(au.join("|"));ak=function(aF,aB,aG,aI,aH){if(!aI&&!aH&&(!au||!au.test(aF))){if(aB.nodeType===9){try{ah.apply(aG,y.call(aB.querySelectorAll(aF),0));
return aG}catch(aE){}}else{if(aB.nodeType===1&&aB.nodeName.toLowerCase()!=="object"){var aD=aB.getAttribute("id"),aA=aD||al,aC=ae.test(aF)&&aB.parentNode||aB;
if(aD){aA=aA.replace(ax,"\\$&")}else{aB.setAttribute("id",aA)}try{ah.apply(aG,y.call(aC.querySelectorAll(aF.replace(I,"[id='"+aA+"'] $&")),0));
return aG}catch(aE){}finally{if(!aD){aB.removeAttribute("id")}}}}}return az(aF,aB,aG,aI,aH)
};if(aw){W(function(aB){ay=aw.call(aB,"div");try{aw.call(aB,"[test!='']:sizzle");
at.push(V.match.PSEUDO)}catch(aA){}});at=new RegExp(at.join("|"));ac.matchesSelector=function(aB,aD){aD=aD.replace(av,"='$1']");
if(!z(aB)&&!at.test(aD)&&(!au||!au.test(aD))){try{var aA=aw.call(aB,aD);if(aA||ay||aB.document&&aB.document.nodeType!==11){return aA
}}catch(aC){}}return ac(aD,null,null,[aB]).length>0}}})()}if(typeof c==="object"&&c.exports){c.exports=ac
}else{ad.Sizzle=ac}})(window)},{}],43:[function(b,c,a){c.exports={DOMEmitter:b("./ac-dom-emitter/DOMEmitter")}
},{"./ac-dom-emitter/DOMEmitter":44}],44:[function(c,b,d){var f;var j=c("ac-event-emitter").EventEmitter,g=c("ac-dom-events"),a=c("ac-dom-traversal");
var i="dom-emitter";function h(k){if(k===null){return}this.el=k;this._bindings={};
this._delegateFuncs={};this._eventEmitter=new j()}f=h.prototype;f._parseEventNames=function(k){if(!k){return[k]
}return k.split(" ")};f._onListenerEvent=function(l,k){this.trigger(l,k,false)};
f._setListener=function(k){this._bindings[k]=this._onListenerEvent.bind(this,k);
g.addEventListener(this.el,k,this._bindings[k])};f._removeListener=function(k){g.removeEventListener(this.el,k,this._bindings[k]);
this._bindings[k]=null};f._triggerInternalEvent=function(k,l){this.trigger(i+":"+k,l)
};f._normalizeArgumentsAndCall=function(k,m){var q={};if(k.length===0){m.call(this,q);
return}if(typeof k[0]==="string"||k[0]===null){k=this._cleanStringData(k);q.events=k[0];
if(typeof k[1]==="string"){q.delegateQuery=k[1];q.callback=k[2];q.context=k[3]}else{q.callback=k[1];
q.context=k[2]}m.call(this,q);return}var l,o,p=":",n=k[0];for(l in n){if(n.hasOwnProperty(l)){q={};
o=this._cleanStringData(l.split(p));q.events=o[0];q.delegateQuery=o[1];q.callback=n[l];
q.context=k[1];m.call(this,q)}}};f._registerDelegateFunc=function(m,o,p,k,n){var l=this._delegateFunc.bind(this,m,o,p,n);
this._delegateFuncs[o]=this._delegateFuncs[o]||{};this._delegateFuncs[o][m]=this._delegateFuncs[o][m]||[];
this._delegateFuncs[o][m].push({func:k,context:n,delegateFunc:l});return l};f._cleanStringData=function(n){var m=false;
if(typeof n==="string"){n=[n];m=true}var l=[],p,r,q,o,k=n.length;for(p=0;p<k;p++){r=n[p];
if(typeof r==="string"){if(r===""||r===" "){continue}q=r.length;while(r[0]===" "){r=r.slice(1,q);
q--}while(r[q-1]===" "){r=r.slice(0,q-1);q--}}l.push(r)}if(m){return l[0]}return l
};f._unregisterDelegateFunc=function(m,p,k,o){if(!this._delegateFuncs[p]||!this._delegateFuncs[p][m]){return
}var n=this._getDelegateFuncBindingIdx(m,p,k,o),l;if(n>-1){l=this._delegateFuncs[p][m][n].delegateFunc;
this._delegateFuncs[p][m].splice(n,1);if(this._delegateFuncs[p][m].length===0){this._delegateFuncs[p][m]=null
}}return l};f._unregisterDelegateFuncs=function(k,m){if(!this._delegateFuncs[m]){return
}if(k!==null&&!this._delegateFuncs[m][k]){return}if(k===null){var l;for(l in this._delegateFuncs[m]){if(this._delegateFuncs[m].hasOwnProperty(l)){this._unbindDelegateFunc(l,m)
}}return}this._unbindDelegateFunc(k,m)};f._unbindDelegateFunc=function(k,m){var n,o,l=0;
while(this._delegateFuncs[m][k]&&this._delegateFuncs[m][k][l]){n=this._delegateFuncs[m][k][l];
o=this._delegateFuncs[m][k][l].length;this._off({events:k,delegateQuery:m,callback:n.func,context:n.context});
if(this._delegateFuncs[m][k]&&o===this._delegateFuncs[m][k].length){l++}}n=o=null
};f._unregisterDelegateFuncsByEvent=function(k){var l;for(l in this._delegateFuncs){if(this._delegateFuncs.hasOwnProperty(l)){this._unregisterDelegateFuncs(k,l)
}}};f._delegateFunc=function(k,o,q,m,p){if(a.matchesSelector(g.target(p),o)){var l=Array.prototype.slice.call(arguments,0),n=l.slice(4,l.length);
m=m||window;if(typeof p.detail==="object"){n[0]=p.detail}q.call(m,n)}};f.on=function(){this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments,0),this._on);
return this};f.once=function(){this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments,0),this._once);
return this};f.off=function(){this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments,0),this._off);
return this};f._on=function(o){var l=o.events,p=o.callback,n=o.delegateQuery,m=o.context,k=o.unboundCallback||p;
l=this._parseEventNames(l);l.forEach(function(u,q,s,t,r){if(!this.has(r)){this._setListener(r)
}if(typeof t==="string"){u=this._registerDelegateFunc(r,t,u,q,s)}this._triggerInternalEvent("willon",{evt:r,callback:u,context:s,delegateQuery:t});
this._eventEmitter.on(r,u,s);this._triggerInternalEvent("didon",{evt:r,callback:u,context:s,delegateQuery:t})
}.bind(this,p,k,m,n));l=p=k=n=m=null};f._off=function(p){var l=p.events,q=p.callback,o=p.delegateQuery,n=p.context,k=p.unboundCallback||q;
if(typeof l==="undefined"){this._eventEmitter.off();var m;for(m in this._bindings){if(this._bindings.hasOwnProperty(m)){this._removeListener(m)
}}for(m in this._delegateFuncs){if(this._delegateFuncs.hasOwnProperty(m)){this._delegateFuncs[m]=null
}}return}l=this._parseEventNames(l);l.forEach(function(v,r,t,u,s){if(typeof u==="string"&&typeof r==="function"){v=this._unregisterDelegateFunc(s,u,r,t);
if(!v){return}}if(typeof u==="string"&&typeof v==="undefined"){this._unregisterDelegateFuncs(s,u);
return}if(typeof s==="string"&&typeof v==="undefined"){this._unregisterDelegateFuncsByEvent(s);
if(typeof u==="string"){return}}this._triggerInternalEvent("willoff",{evt:s,callback:v,context:t,delegateQuery:u});
this._eventEmitter.off(s,v,t);this._triggerInternalEvent("didoff",{evt:s,callback:v,context:t,delegateQuery:u});
if(!this.has(s)){this._removeListener(s)}}.bind(this,q,k,n,o));l=q=k=o=n=null};
f._once=function(n){var k=n.events,o=n.callback,m=n.delegateQuery,l=n.context;k=this._parseEventNames(k);
k.forEach(function(s,q,r,p){if(typeof r==="string"){return this._handleDelegateOnce(p,s,q,r)
}if(!this.has(p)){this._setListener(p)}this._triggerInternalEvent("willonce",{evt:p,callback:s,context:q,delegateQuery:r});
this._eventEmitter.once.call(this,p,s,q);this._triggerInternalEvent("didonce",{evt:p,callback:s,context:q,delegateQuery:r})
}.bind(this,o,l,m));k=o=m=l=null};f._handleDelegateOnce=function(k,n,l,m){this._triggerInternalEvent("willonce",{evt:k,callback:n,context:l,delegateQuery:m});
this._on({events:k,context:l,delegateQuery:m,callback:this._getDelegateOnceCallback.bind(this,k,n,l,m),unboundCallback:n});
this._triggerInternalEvent("didonce",{evt:k,callback:n,context:l,delegateQuery:m});
return this};f._getDelegateOnceCallback=function(k,p,m,o){var l=Array.prototype.slice.call(arguments,0),n=l.slice(4,l.length);
p.apply(m,n);this._off({events:k,delegateQuery:o,callback:p,context:m})};f._getDelegateFuncBindingIdx=function(r,o,m,k,s){var q=-1;
if(this._delegateFuncs[o]&&this._delegateFuncs[o][r]){var n,l,p=this._delegateFuncs[o][r].length;
for(n=0;n<p;n++){l=this._delegateFuncs[o][r][n];if(s&&typeof m==="undefined"){m=l.func
}if(l.func===m&&l.context===k){q=n;break}}}return q};f._triggerDelegateEvents=function(n,p,q){var m=a.querySelectorAll(p,this.el);
var o,r,k=m.length;for(o=0;o<k;o++){r=m[o];if(document.createEvent){r.dispatchEvent(new CustomEvent(n,{bubbles:true,cancelable:false,detail:q}))
}else{var l=document.createEventObject();l.detail=q;r.fireEvent("on"+n,l)}return r
}};f.has=function(k,p,o,m){var n,q;if(typeof p==="string"){n=p;q=o}else{q=p;m=o
}if(n){var l=this._getDelegateFuncBindingIdx(k,n,q,m,true);if(l>-1){return true
}return false}if(this._eventEmitter&&this._eventEmitter.has.apply(this._eventEmitter,arguments)){return true
}return false};f.trigger=function(l,k,m,p){l=this._parseEventNames(l);var n,o;if(typeof k==="string"){n=this._cleanStringData(k);
o=m}else{o=k;p=m}l=this._cleanStringData(l);l.forEach(function(r,s,t,q){if(r){this._triggerDelegateEvents(q,r,s);
return}this._eventEmitter.trigger(q,s,t)}.bind(this,n,o,p));return this};f.propagateTo=function(k,l){this._eventEmitter.propagateTo(k,l);
return this};f.stopPropagatingTo=function(k){this._eventEmitter.stopPropagatingTo(k);
return this};f.destroy=function(){this._triggerInternalEvent("willdestroy");this.off();
this.el=this._eventEmitter=this._bindings=this._delegateFuncs=null};b.exports=h
},{"ac-dom-events":71,"ac-dom-traversal":24,"ac-event-emitter":false}],45:[function(b,c,a){c.exports={WindowDelegate:b("./ac-window-delegate/WindowDelegate"),WindowDelegateOptimizer:b("./ac-window-delegate/WindowDelegateOptimizer"),WindowDelegateCustomEvent:b("./ac-window-delegate/WindowDelegateCustomEvent")}
},{"./ac-window-delegate/WindowDelegate":48,"./ac-window-delegate/WindowDelegateCustomEvent":49,"./ac-window-delegate/WindowDelegateOptimizer":50}],46:[function(b,c,a){var f=b("ac-event-emitter").EventEmitter;
var g=function(){this._emitter=new f();this._customEvents={}};var d=g.prototype;
d.on=function(h,j,i){this._activateCustomEvents(h);this._emitterOn.apply(this,arguments);
return this};d.once=function(h,j,i){this._emitterOnce.apply(this,arguments);return this
};d.off=function(h,j,i){this._emitterOff.apply(this,arguments);this._deactivateCustomEvents(h);
return this};d.has=function(h,j,i){return this._emitter.has.apply(this._emitter,arguments)
};d.trigger=function(){this._emitter.trigger.apply(this._emitter,arguments);return this
};d.propagateTo=function(){this._emitter.propagateTo.apply(this._emitter,arguments);
return this};d.stopPropagatingTo=function(){this._emitter.stopPropagatingTo.apply(this._emitter,arguments);
return this};d.add=function(h){this._customEvents[h.name]=h};d.canHandleCustomEvent=function(h){return this._customEvents.hasOwnProperty(h)
};d.isHandlingCustomEvent=function(h){if(this._customEvents[h]&&this._customEvents[h].active){return true
}return false};d._activateCustomEvents=function(l){var j=l.split(" "),k,m,h=j.length;
for(m=0;m<h;m++){k=j[m];if(this._customEvents[k]&&!this._customEvents[k].active){this._customEvents[k].initialize();
this._customEvents[k].active=true}}};d._deactivateCustomEvents=function(k){var l;
if(!k||k.length===0){for(l in this._customEvents){if(this._customEvents.hasOwnProperty(l)){this._deactivateCustomEvent(l)
}}return}var j=k.split(" "),h=j.length;for(l=0;l<h;l++){this._deactivateCustomEvent(j[l])
}};d._deactivateCustomEvent=function(h){if(!this.has(h)&&this._customEvents[h]&&this._customEvents[h].active){this._customEvents[h].deinitialize();
this._customEvents[h].active=false}};d._emitterOn=function(){this._emitter.on.apply(this._emitter,arguments)
};d._emitterOnce=function(){this._emitter.once.apply(this._emitter,arguments)};
d._emitterOff=function(){this._emitter.off.apply(this._emitter,arguments)};c.exports=g
},{"ac-event-emitter":false}],47:[function(b,c,a){var g=b("ac-event-emitter").EventEmitter;
var f;var d=function(h){g.call(this);this.optimizers=h;this._events={};this._properties={};
this._initialize()};f=d.prototype=new g(null);f.canOptimizeEvent=function(h){return this._events.hasOwnProperty(h)
};f.canOptimizeProperty=function(h){return this._properties.hasOwnProperty(h)};
f.isOptimizingEvent=function(h){if(this._events[h]&&this._events[h].active){return true
}return false};f.isOptimizingProperty=function(h){if(this._properties[h]&&this._properties[h].active){return true
}return false};f.add=function(h){this._setOptimizerEvents(h);this._setOptimizerProperties(h);
h.on("update",this._onUpdate,this);h.on("activate",this._onActivate,this);h.on("deactivate",this._onDeactivate,this)
};f.get=function(h){if(this.isOptimizingProperty(h)){return this._properties[h].value
}return null};f.set=function(i,h){if(!this._properties[i]){return false}this._properties[i].value=h;
return this};f.getOptimizerByEvent=function(h){if(this._events[h]){return this._events[h]
}return null};f._initialize=function(){var j,h;for(j in this.optimizers){if(this.optimizers.hasOwnProperty(j)){this.add(this.optimizers[j])
}}};f._onUpdate=function(h){this.set(h.prop,h.val)};f._onActivate=function(j){var k=j.propertyNames,l,h=k.length;
for(l=0;l<h;l++){this._properties[k[l]].active=true}};f._onDeactivate=function(j){var k=j.propertyNames,l,h=k.length;
for(l=0;l<h;l++){this._properties[k[l]].active=false}};f._setOptimizerEvents=function(j){var l,k=j.eventNames,h=k.length;
for(l=0;l<h;l++){this._setOptimizerEvent(k[l],j)}};f._setOptimizerEvent=function(i,h){if(this._events[i]){return
}this._events[i]=h};f._setOptimizerProperties=function(k){var l,j=k.propertyNames,h=j.length;
for(l=0;l<h;l++){this._setOptimizerProperty(j[l])}};f._setOptimizerProperty=function(h){if(this._properties.hasOwnProperty(h)){return
}this._properties[h]={};this._properties[h].active=false;this._properties[h].value=null
};c.exports=d},{"ac-event-emitter":false}],48:[function(d,b,g){var i;var c=d("ac-shared-instance").SharedInstance,l=d("ac-dom-emitter").DOMEmitter,j=d("./OptimizerController"),f=d("./CustomEventController"),h=d("./queries/queries"),m=d("./optimizers/optimizers");
var k="ac-window-delegate:WindowDelegate",a="2.0.1";function n(){this._emitter=new l(window);
this._controllers={optimizer:new j(m),customEvent:new f()};var o;for(o in h){if(h.hasOwnProperty(o)){this[o]=this._getProperty.bind(this,o);
h[o]=h[o].bind(this)}}this._bindEvents()}i=n.prototype;i.on=function(o,r,p){var q=this._seperateCustomEvents(o);
this._optimizeEvents(q.standardEvents);this._customEventOn(q.customEvents,r,p);
this._emitterOn.apply(this,arguments);return this};i.once=function(o,r,p){var q=this._seperateCustomEvents(o);
this._optimizeEvents(q.standardEvents);this._customEventOnce(q.customEvents,r,p);
this._emitterOnce.apply(this,arguments);return this};i.off=function(p,u,q){var t=this._seperateCustomEvents(p),r=false;
if(!p){r=true}this._customEventOff(t.customEvents,u,q,r);this._emitterOff.apply(this,arguments);
if(r){try{var o;for(o in this._controllers.optimizer._events){if(this._controllers.optimizer._events.hasOwnProperty(o)&&this._shouldDeoptimizeEvent(o,true)){this._deoptimizeEvent(o)
}}this._bindEvents()}catch(s){}}return this};i.has=function(o,q,p){return this._emitter.has.apply(this._emitter,arguments)
};i.trigger=function(){this._emitter.trigger.apply(this._emitter,arguments);return this
};i.propagateTo=function(){this._emitter.propagateTo.apply(this._emitter,arguments);
return this};i.stopPropagatingTo=function(){this._emitter.stopPropagatingTo.apply(this._emitter,arguments);
return this};i.addOptimizer=function(o){this._controllers.optimizer.add(o);return this
};i.addCustomEvent=function(o){this._controllers.customEvent.add(o);return this
};i._emitterOn=function(){this._emitter.on.apply(this._emitter,arguments)};i._emitterOnce=function(){this._emitter.once.apply(this._emitter,arguments)
};i._emitterOff=function(){this._emitter.off.apply(this._emitter,arguments)};i._onEventUnbound=function(p){var o=p.evt;
if(this._shouldDeoptimizeEvent(o)){this._deoptimizeEvent(o)}};i._customEventOn=function(o,q,p){if(o.length===0){return
}this._controllers.customEvent.on(o.join(" "),q,p)};i._customEventOnce=function(o,q,p){if(o.length===0){return
}this._controllers.customEvent.once(o.join(" "),q,p)};i._customEventOff=function(o,r,p,q){if(!q&&o.length===0){return
}if(q&&o.length===0){this._controllers.customEvent.off();return}this._controllers.customEvent.off(o.join(" "),r,p)
};i._getProperty=function(q,o){var p=null;if(!o){p=this._getOptimizedValue(q)}if(p===null){p=h[q].call(this,o)
}return p};i._optimizeEvents=function(q){var p,r,o=q.length;for(r=0;r<o;r++){p=q[r];
if(this._shouldOptimizeEvent(p)){this._optimizeEvent(p)}}};i._shouldOptimizeEvent=function(o){if(this._controllers.optimizer.canOptimizeEvent(o)&&!this._controllers.optimizer.isOptimizingEvent(o)){return true
}return false};i._shouldDeoptimizeEvent=function(o,p){if(this._controllers.optimizer.isOptimizingEvent(o)&&(p||this._emitter._eventEmitter._events[o].length<=1)){return true
}return false};i._optimizeEvent=function(p){var o=this._controllers.optimizer.getOptimizerByEvent(p);
o.activate();this._emitterOn(p,o.callback,o)};i._deoptimizeEvent=function(p){var o=this._controllers.optimizer.getOptimizerByEvent(p);
o.deactivate();this._emitterOff(p,o.callback,o)};i._getOptimizedValue=function(o){return this._controllers.optimizer.get(o)
};i._seperateCustomEvents=function(s){var p={customEvents:[],standardEvents:[]};
if(typeof s==="string"){var t=s.split(" "),q,r,o=t.length;for(r=0;r<o;r++){q=t[r];
if(this._controllers.customEvent.canHandleCustomEvent(q)){p.customEvents.push(q)
}else{p.standardEvents.push(q)}}}return p};i._bindEvents=function(){this._emitter.on("dom-emitter:didoff",this._onEventUnbound,this)
};b.exports=c.share(k,a,n)},{"./CustomEventController":46,"./OptimizerController":47,"./optimizers/optimizers":53,"./queries/queries":62,"ac-dom-emitter":43,"ac-shared-instance":2}],49:[function(c,d,a){var g=c("ac-event-emitter").EventEmitter;
function b(h,j,i){g.call(this);this.name=h;this.active=false;this._initializeFunc=j;
this._deinitializeFunc=i}var f=b.prototype=new g(null);f.initialize=function(){if(this._initializeFunc){this._initializeFunc()
}return this};f.deinitialize=function(){if(this._deinitializeFunc){this._deinitializeFunc()
}return this};d.exports=b},{"ac-event-emitter":false}],50:[function(c,d,b){var g=c("ac-event-emitter").EventEmitter;
function a(h,i){g.call(this);this.active=false;this.eventNames=h.eventNames;this.propertyNames=h.propertyNames;
this.options=h.options||{};this.callback=i}var f=a.prototype=new g(null);f.update=function(i,h){this.trigger("update",{prop:i,val:h})
};f.activate=function(){this.active=true;this.trigger("activate",this)};f.deactivate=function(){this.active=false;
this.trigger("deactivate",this)};d.exports=a},{"ac-event-emitter":false}],51:[function(f,g,b){var a=f("../../WindowDelegateOptimizer"),d=f("../../queries/queries");
var c={eventNames:["resize"],propertyNames:["clientWidth","clientHeight","innerWidth","innerHeight"]};
var h=new a(c,function(m){var l,k=c.propertyNames,j=k.length;for(l=0;l<j;l++){this.update(k[l],d[k[l]](true))
}});g.exports=h},{"../../WindowDelegateOptimizer":50,"../../queries/queries":62}],52:[function(g,h,b){var a=g("../../WindowDelegateOptimizer"),f=g("../../queries/queries");
var d={eventNames:["scroll"],propertyNames:["scrollX","scrollY","maxScrollX","maxScrollY"]};
var c=new a(d,function(m){var l,k=d.propertyNames,j=k.length;for(l=0;l<j;l++){this.update(k[l],f[k[l]](true))
}});h.exports=c},{"../../WindowDelegateOptimizer":50,"../../queries/queries":62}],53:[function(d,f,b){var c=d("./events/resize"),a=d("./events/scroll");
f.exports=[c,a]},{"./events/resize":51,"./events/scroll":52}],54:[function(b,c,a){var d=function(f){return document.documentElement.clientHeight
};c.exports=d},{}],55:[function(b,c,a){var d=function(f){return document.documentElement.clientWidth
};c.exports=d},{}],56:[function(b,d,a){var c=function(f){return window.innerHeight||this.clientHeight(f)
};d.exports=c},{}],57:[function(b,c,a){var d=function(f){return window.innerWidth||this.clientWidth(f)
};c.exports=d},{}],58:[function(c,d,a){var b=function(f){return document.body.scrollWidth-this.innerWidth()
};d.exports=b},{}],59:[function(c,d,b){var a=function(f){return document.body.scrollHeight-this.innerHeight()
};d.exports=a},{}],60:[function(b,c,a){var d=function(f){var h=window.pageXOffset;
if(!h){var g=document.documentElement||document.body.parentNode||document.body;
h=g.scrollLeft}return h};c.exports=d},{}],61:[function(b,c,a){var d=function(f){var h=window.pageYOffset;
if(!h){var g=document.documentElement||document.body.parentNode||document.body;
h=g.scrollTop}return h};c.exports=d},{}],62:[function(i,g,k){var b=i("./methods/innerWidth"),j=i("./methods/innerHeight"),d=i("./methods/clientWidth"),l=i("./methods/clientHeight"),c=i("./methods/scrollX"),a=i("./methods/scrollY"),h=i("./methods/maxScrollX"),f=i("./methods/maxScrollY");
g.exports={innerWidth:b,innerHeight:j,clientWidth:d,clientHeight:l,scrollX:c,scrollY:a,maxScrollX:h,maxScrollY:f}
},{"./methods/clientHeight":54,"./methods/clientWidth":55,"./methods/innerHeight":56,"./methods/innerWidth":57,"./methods/maxScrollX":58,"./methods/maxScrollY":59,"./methods/scrollX":60,"./methods/scrollY":61}],63:[function(b,c,a){c.exports={BreakpointsDelegate:b("./ac-breakpoints-delegate/BreakpointsDelegate")}
},{"./ac-breakpoints-delegate/BreakpointsDelegate":64}],64:[function(f,b,i){var d=f("ac-shared-instance").SharedInstance,g=f("ac-object"),p=f("ac-window-delegate").WindowDelegate,c=f("ac-window-delegate").WindowDelegateCustomEvent,o=f("ac-event-emitter").EventEmitter;
var l="ac-breakpoints-delegate:BreakpointsDelegate",a="1.0.1";var m="breakpoint",n="resize orientationchange";
var h={small:{width:0,maxDeviceWidth:768},medium:{width:736},large:{width:1025,oldIE:true},xlarge:{width:1442}};
function k(q){this.breakpoints=g.clone(h);this._customEvent=new c(m,this._onBreakpointListenerAdded.bind(this),this._onBreakpointListenerRemoved.bind(this));
this.initialize()}var j=k.prototype;j.initialize=function(){this._breakpoint=null;
this._lastBreakpoint=null;this._handleOldIE();this._handleDevices();this._breakpointOrder=this._setBreakpointOrder();
if(!this._isOldIE){this._handleResize()}};j.getCustomEvent=function(){return this._customEvent
};j.getBreakpoint=function(){if(!this._customEvent.active){this._handleResize()
}return this._breakpoint};j._handleResize=function(){var u=p.innerWidth(),v;var t,s,r,q=this._breakpointOrder.length;
for(t=0;t<q;t++){s=this._breakpointOrder[t];r=this.breakpoints[s];if(r.width>u){break
}}if(t>0){t=t-1}v=this.breakpoints[this._breakpointOrder[t]];if(!this._breakpoint){this._breakpoint=v;
return}if(v.name===this._breakpoint.name){return}this._lastBreakpoint=this._breakpoint;
this._breakpoint=v;p.trigger(m,{incoming:this._breakpoint,outgoing:this._lastBreakpoint})
};j._setBreakpointOrder=function(){var r=[],q=[],s;for(s in this.breakpoints){if(this.breakpoints.hasOwnProperty(s)){this.breakpoints[s].name=s;
r.push(this.breakpoints[s].width)}}r.sort(function(u,t){return u-t});r.forEach(function(u){var t;
for(t in this.breakpoints){if(this.breakpoints.hasOwnProperty(t)){if(this.breakpoints[t].width===u){q.push(t)
}}}}.bind(this));return q};j._handleOldIE=function(){var q=document.documentElement,r="oldie";
if(q.className.indexOf("no-"+r)>-1||q.className.indexOf(r)===-1){return}this._breakpoint=this.breakpoints.large;
this._isOldIE=true;this._replaceBreakpoints(function(s){return s.oldIE===true})
};j._handleDevices=function(){this._replaceBreakpoints(function(q){if(typeof q.maxDeviceWidth!=="number"){return true
}if(window.screen&&window.screen.width<=q.maxDeviceWidth){return true}return false
})};j._replaceBreakpoints=function(t){var r,s={},q;for(r in this.breakpoints){if(this.breakpoints.hasOwnProperty(r)){q=this.breakpoints[r];
if(t(q)){s[r]=g.clone(this.breakpoints[r])}}}this.breakpoints=s};j._onBreakpointListenerAdded=function(){p.on(n,this._handleResize,this)
};j._onBreakpointListenerRemoved=function(){p.off(n,this._handleResize,this)};b.exports=d.share(l,a,k)
},{"ac-event-emitter":false,"ac-object":346,"ac-shared-instance":2,"ac-window-delegate":45}],65:[function(d,f,b){var g=d("./ac-browser/BrowserData");
var a=/applewebkit/i;var h=d("./ac-browser/IE");var c=g.create();c.isWebKit=function(i){var j=i||window.navigator.userAgent;
return j?!!a.test(j):false};c.lowerCaseUserAgent=navigator.userAgent.toLowerCase();
if(c.name==="IE"){c.IE={documentMode:h.getDocumentMode()}}f.exports=c},{"./ac-browser/BrowserData":66,"./ac-browser/IE":67}],66:[function(b,c,a){var d=b("./data");
function f(){}f.prototype={__getBrowserVersion:function(h,i){var g;if(!h||!i){return
}var j=d.browser.filter(function(k){return k.identity===i});j.some(function(m){var k=m.versionSearch||i;
var l=h.indexOf(k);if(l>-1){g=parseFloat(h.substring(l+k.length+1));return true
}});return g},__getName:function(g){return this.__getIdentityStringFromArray(g)
},__getIdentity:function(g){if(g.string){return this.__matchSubString(g)}else{if(g.prop){return g.identity
}}},__getIdentityStringFromArray:function(g){for(var k=0,h=g.length,j;k<h;k++){j=this.__getIdentity(g[k]);
if(j){return j}}},__getOS:function(g){return this.__getIdentityStringFromArray(g)
},__getOSVersion:function(i,l){if(!i||!l){return}var k=d.os.filter(function(m){return m.identity===l
})[0];var g=k.versionSearch||l;var j=new RegExp(g+" ([\\d_\\.]+)","i");var h=i.match(j);
if(h!==null){return h[1].replace(/_/g,".")}},__matchSubString:function(h){var g=h.subString;
if(g){var i=g.test?!!g.test(h.string):h.string.indexOf(g)>-1;if(i){return h.identity
}}}};f.create=function(){var g=new f();var h={};h.name=g.__getName(d.browser);h.version=g.__getBrowserVersion(d.versionString,h.name);
h.os=g.__getOS(d.os);h.osVersion=g.__getOSVersion(d.versionString,h.os);return h
};c.exports=f},{"./data":68}],67:[function(b,c,a){c.exports={getDocumentMode:function(){var d;
if(document.documentMode){d=parseInt(document.documentMode,10)}else{d=5;if(document.compatMode){if(document.compatMode==="CSS1Compat"){d=7
}}}return d}}},{}],68:[function(b,c,a){c.exports={browser:[{string:window.navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:window.navigator.userAgent,subString:/silk/i,identity:"Silk"},{string:window.navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:window.navigator.userAgent,subString:/mobile\/[^\s]*\ssafari\//i,identity:"Safari Mobile",versionSearch:"Version"},{string:window.navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera",versionSearch:"Version"},{string:window.navigator.vendor,subString:"iCab",identity:"iCab"},{string:window.navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:window.navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:window.navigator.vendor,subString:"Camino",identity:"Camino"},{string:window.navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:window.navigator.userAgent,subString:"MSIE",identity:"IE",versionSearch:"MSIE"},{string:window.navigator.userAgent,subString:"Trident",identity:"IE",versionSearch:"rv"},{string:window.navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:window.navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],os:[{string:window.navigator.platform,subString:"Win",identity:"Windows",versionSearch:"Windows NT"},{string:window.navigator.platform,subString:"Mac",identity:"OS X"},{string:window.navigator.userAgent,subString:"iPhone",identity:"iOS",versionSearch:"iPhone OS"},{string:window.navigator.userAgent,subString:"iPad",identity:"iOS",versionSearch:"CPU OS"},{string:window.navigator.userAgent,subString:/android/i,identity:"Android"},{string:window.navigator.platform,subString:"Linux",identity:"Linux"}],versionString:window.navigator.userAgent||window.navigator.appVersion||undefined}
},{}],69:[function(b,c,a){c.exports.DOMEmitter=b("./ac-dom-emitter/DOMEmitter")
},{"./ac-dom-emitter/DOMEmitter":70}],70:[function(b,c,a){var f;var d=b("ac-event-emitter").EventEmitter;
function g(h){if(h===null){return}this.el=h;this._bindings={};this._eventEmitter=new d()
}f=g.prototype;f._parseEventNames=function(h){if(!h){return[h]}return h.split(" ")
};f._onListenerEvent=function(i,h){this.trigger(i,h,false)};f._setListener=function(h){this._bindings[h]=this._onListenerEvent.bind(this,h);
this._addEventListener(h,this._bindings[h])};f._removeListener=function(h){this._removeEventListener(h,this._bindings[h]);
delete this._bindings[h]};f._addEventListener=function(i,j,h){if(this.el.addEventListener){this.el.addEventListener(i,j,h)
}else{if(this.el.attachEvent){this.el.attachEvent("on"+i,j)}else{target["on"+i]=j
}}return this};f._removeEventListener=function(i,j,h){if(this.el.removeEventListener){this.el.removeEventListener(i,j,h)
}else{this.el.detachEvent("on"+i,j)}return this};f.on=function(h,j,i){h=this._parseEventNames(h);
h.forEach(function(m,l,k){if(!this.has(k)){this._setListener(k)}this._eventEmitter.on(k,m,l)
}.bind(this,j,i));return this};f.off=function(h,k,j){var i=Array.prototype.slice.call(arguments,0);
h=this._parseEventNames(h);h.forEach(function(p,o,m,l){if(m.length===0){this._eventEmitter.off();
var n;for(n in this._bindings){if(this._bindings.hasOwnProperty(n)){this._removeListener(n)
}}return}this._eventEmitter.off(l,p,o);if(!this.has(l)){this._removeListener(l)
}}.bind(this,k,j,i));return this};f.once=function(h,j,i){h=this._parseEventNames(h);
h.forEach(function(m,l,k){if(!this.has(k)){this._setListener(k)}this._eventEmitter.once.call(this,k,m,l)
}.bind(this,j,i));return this};f.has=function(h){if(this._eventEmitter&&this._eventEmitter.has(h)){return true
}return false};f.trigger=function(h,i,j){h=this._parseEventNames(h);h.forEach(function(l,m,k){this._eventEmitter.trigger(k,l,m)
}.bind(this,i,j));return this};f.destroy=function(){this.off();this.el=this._eventEmitter=this._bindings=null
};c.exports=g},{"ac-event-emitter":false}],71:[function(b,d,a){var c={};c.addEventListener=function(j,h,i,g){if(j.addEventListener){j.addEventListener(h,i,g)
}else{if(j.attachEvent){j.attachEvent("on"+h,i)}else{j["on"+h]=i}}return j};c.dispatchEvent=function(h,g){if(document.createEvent){h.dispatchEvent(new CustomEvent(g))
}else{h.fireEvent("on"+g,document.createEventObject())}return h};c.removeEventListener=function(j,h,i,g){if(j.removeEventListener){j.removeEventListener(h,i,g)
}else{j.detachEvent("on"+h,i)}return j};var f=/^(webkit|moz|ms|o)/i;c.addVendorPrefixEventListener=function(j,h,i,g){if(f.test(h)){h=h.replace(f,"")
}else{h=h.charAt(0).toUpperCase()+h.slice(1)}if(/WebKit/i.test(window.navigator.userAgent)){return c.addEventListener(j,"webkit"+h,i,g)
}else{if(/Opera/i.test(window.navigator.userAgent)){return c.addEventListener(j,"O"+h,i,g)
}else{if(/Gecko/i.test(window.navigator.userAgent)){return c.addEventListener(j,h.toLowerCase(),i,g)
}else{h=h.charAt(0).toLowerCase()+h.slice(1);return c.addEventListener(j,h,i,g)
}}}};c.removeVendorPrefixEventListener=function(j,h,i,g){if(f.test(h)){h=h.replace(f,"")
}else{h=h.charAt(0).toUpperCase()+h.slice(1)}c.removeEventListener(j,"webkit"+h,i,g);
c.removeEventListener(j,"O"+h,i,g);c.removeEventListener(j,h.toLowerCase(),i,g);
h=h.charAt(0).toLowerCase()+h.slice(1);return c.removeEventListener(j,h,i,g)};c.stop=function(g){if(!g){g=window.event
}if(g.stopPropagation){g.stopPropagation()}else{g.cancelBubble=true}if(g.preventDefault){g.preventDefault()
}g.stopped=true;g.returnValue=false};c.target=function(g){return(typeof g.target!=="undefined")?g.target:g.srcElement
};d.exports=c},{}],72:[function(b,c,a){c.exports={flatten:b("./ac-array/flatten"),intersection:b("./ac-array/intersection"),toArray:b("./ac-array/toArray"),union:b("./ac-array/union"),unique:b("./ac-array/unique"),without:b("./ac-array/without")}
},{"./ac-array/flatten":73,"./ac-array/intersection":74,"./ac-array/toArray":75,"./ac-array/union":76,"./ac-array/unique":77,"./ac-array/without":78}],73:[function(b,c,a){c.exports=function d(h){var f=[];
var g=function(i){if(Array.isArray(i)){i.forEach(g)}else{f.push(i)}};h.forEach(g);
return f}},{}],74:[function(b,c,a){c.exports=function d(n){if(!n){return[]}var m=arguments.length;
var k=0;var g=n.length;var f=[];var l;for(k;k<g;k++){l=n[k];if(f.indexOf(l)>-1){continue
}for(var h=1;h<m;h++){if(arguments[h].indexOf(l)<0){break}}if(h===m){f.push(l)}}return f
}},{}],75:[function(b,d,a){d.exports=function c(f){return Array.prototype.slice.call(f)
}},{}],76:[function(b,c,a){var g=b("./flatten");var f=b("./unique");c.exports=function d(h){return f(g(Array.prototype.slice.call(arguments)))
}},{"./flatten":73,"./unique":77}],77:[function(b,c,a){c.exports=function d(g){var f=function(h,i){if(h.indexOf(i)<0){h.push(i)
}return h};return g.reduce(f,[])}},{}],78:[function(b,d,a){d.exports=function c(f,n,m){var k;
var h=f.indexOf(n);var l=f.length;if(h>=0){if(m){k=f.slice(0,l);var j,g=0;for(j=h;
j<l;j++){if(f[j]===n){k.splice(j-g,1);g++}}}else{if(h===(l-1)){k=f.slice(0,(l-1))
}else{if(h===0){k=f.slice(1)}else{k=f.slice(0,h);k=k.concat(f.slice(h+1))}}}}else{return f
}return k}},{}],79:[function(c,d,b){var a=c("./ac-dom-styles/vendorTransformHelper");
var f={};f.setStyle=function(h,i){var g;var j;var k;if((typeof i!=="string"&&typeof i!=="object")||Array.isArray(i)){throw new TypeError("styles argument must be either an object or a string")
}g=f.setStyle.__explodeStyleStringToObject(i);for(k in g){if(g.hasOwnProperty(k)){j=k.replace(/-(\w)/g,f.setStyle.__camelCaseReplace);
f.setStyle.__setStyle(h,j,g,g[k])}}return h};f.setStyle.__explodeStyleStringToObject=function(l){var j=(typeof l==="object")?l:{};
var m;var k;var g;var h;if(typeof l==="string"){m=l.split(";");g=m.length;for(h=0;
h<g;h+=1){k=m[h].indexOf(":");if(k>0){j[m[h].substr(0,k).trim()]=m[h].substr(k+1).trim()
}}}return j};f.setStyle.__setStyle=function(i,j,h,g){if(typeof i.style[j]!=="undefined"){i.style[j]=g
}};f.setStyle.__camelCaseReplace=function(h,i,j,g){return(j===0)&&(g.substr(1,3)!=="moz")?i:i.toUpperCase()
};f.getStyle=function(h,j,g){var i;j=j.replace(/-(\w)/g,f.setStyle.__camelCaseReplace);
j=(j==="float")?"cssFloat":j;g=g||window.getComputedStyle(h,null);i=g?g[j]:null;
if(j==="opacity"){return i?parseFloat(i):1}return i==="auto"?null:i};f.setVendorPrefixStyle=function(g,j,i){if(typeof j!=="string"){throw new TypeError("ac-dom-styles.setVendorPrefixStyle: property must be a string")
}if(typeof i!=="string"&&typeof i!=="number"){throw new TypeError("ac-dom-styles.setVendorPrefixStyle: value must be a string or a number")
}var h=["","webkit","Moz","ms","O"];var l;var k;i+="";j=j.replace(/-(webkit|moz|ms|o)-/i,"");
j=j.replace(/^(webkit|Moz|ms|O)/,"");j=j.charAt(0).toLowerCase()+j.slice(1);j=j.replace(/-(\w)/,function(m,n){return n.toUpperCase()
});i=i.replace(/-(webkit|moz|ms|o)-/,"-vendor-");h.forEach(function(m){l=(m==="")?j:m+j.charAt(0).toUpperCase()+j.slice(1);
k=(m==="")?i.replace("-vendor-",""):i.replace("-vendor-","-"+m.charAt(0).toLowerCase()+m.slice(1)+"-");
if(l in g.style){f.setStyle(g,l+":"+k)}})};f.getVendorPrefixStyle=function(h,j){if(typeof j!=="string"){throw new TypeError("ac-dom-styles.getVendorPrefixStyle: property must be a string")
}var i=["","webkit","Moz","ms","O"];var g;j=j.replace(/-(webkit|moz|ms|o)-/i,"");
j=j.replace(/^(webkit|Moz|ms|O)/,"").charAt(0).toLowerCase()+j.slice(1);j=j.replace(/-(\w)/,function(k,l){return l.toUpperCase()
});i.some(function(l,k){var m=(l==="")?j:l+j.charAt(0).toUpperCase()+j.slice(1);
if(m in h.style){g=f.getStyle(h,m);return true}});return g};f.setVendorPrefixTransform=function(g,h){if((typeof h!=="string"&&typeof h!=="object")||Array.isArray(h)||h===null){throw new TypeError("ac-dom-styles.setVendorPrefixTransform: transformFunctions argument must be either an object or a string")
}f.setVendorPrefixStyle(g,"transform",a.convert2dFunctions(h))};c("./ac-dom-styles/ie")(f);
d.exports=f},{"./ac-dom-styles/ie":80,"./ac-dom-styles/vendorTransformHelper":81}],80:[function(b,c,a){c.exports=function(d){if(typeof window.getComputedStyle!=="function"){d.getStyle=function(i,h,g){var f;
var j;g=g||i.currentStyle;if(g){h=h.replace(/-(\w)/g,d.setStyle.__camelCaseReplace);
h=h==="float"?"styleFloat":h;j=g[h]||null;return j==="auto"?null:j}}}}},{}],81:[function(c,d,b){var a={__objectifiedFunctions:{},__paramMaps:{translate:"p1, p2, 0",translateX:"p1, 0, 0",translateY:"0, p1, 0",scale:"p1, p2, 1",scaleX:"p1, 1, 1",scaleY:"1, p1, 1",rotate:"0, 0, 1, p1",matrix:"p1, p2, 0, 0, p3, p4, 0, 0, 0, 0, 1, 0, p5, p6, 0, 1"},convert2dFunctions:function(g){var f;
this.__init(g);for(var h in this.__objectifiedFunctions){if(this.__objectifiedFunctions.hasOwnProperty(h)){f=this.__objectifiedFunctions[h].replace(" ","").split(",");
if(h in this.__paramMaps){for(var i in this.__paramMaps){if(h===i){this.valuesToSet.push(this.__stripFunctionAxis(h)+"3d("+this.__map2DTransformParams(f,this.__paramMaps[h])+")")
}}}else{this.valuesToSet.push(h+"("+this.__objectifiedFunctions[h]+")")}}}return this.valuesToSet.join(" ")
},__init:function(f){this.valuesToSet=[];this.__objectifiedFunctions=(typeof f==="object")?f:{};
if(typeof f==="string"){this.__objectifiedFunctions=this.__objectifyFunctionString(f)
}},__map2DTransformParams:function(f,g){f.forEach(function(j,h){g=g.replace("p"+(h+1),j)
});return g},__splitFunctionStringToArray:function(f){return f.match(/[\w]+\(.+?\)/g)
},__splitFunctionNameAndParams:function(f){return f.match(/(.*)\((.*)\)/)},__stripFunctionAxis:function(f){return f.match(/([a-z]+)(|X|Y)$/)[1]
},__objectifyFunctionString:function(f){var g=this;var h;this.__splitFunctionStringToArray(f).forEach(function(i){h=g.__splitFunctionNameAndParams(i);
g.__objectifiedFunctions[h[1]]=h[2]});return this.__objectifiedFunctions}};d.exports=a
},{}],82:[function(b,c,a){var g=b("ac-dom-styles");var h={};var f=function(){return{x:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft,y:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop}
};var d=function(){return{height:window.innerHeight||document.documentElement.clientHeight,width:window.innerWidth||document.documentElement.clientWidth}
};h.cumulativeOffset=function(j){var k=h.getBoundingBox(j);var i=f();var l=[k.top+i.y,k.left+i.x];
l.top=l[0];l.left=l[1];return l};h.getBoundingBox=function(k){var l=k.getBoundingClientRect();
var j=l.width||l.right-l.left;var i=l.height||l.bottom-l.top;return{top:l.top,right:l.right,bottom:l.bottom,left:l.left,width:j,height:i}
};h.getInnerDimensions=function(n){var o=h.getBoundingBox(n);var m=o.width;var i=o.height;
var l;var j;var k=window.getComputedStyle?window.getComputedStyle(n,null):null;
["padding","border"].forEach(function(p){["Top","Right","Bottom","Left"].forEach(function(q){l=p==="border"?p+q+"Width":p+q;
j=parseFloat(g.getStyle(n,l,k));j=isNaN(j)?0:j;if(q==="Right"||q==="Left"){m-=j
}if(q==="Top"||q==="Bottom"){i-=j}})});return{width:m,height:i}};h.getOuterDimensions=function(l){var n=h.getBoundingBox(l);
var k=n.width;var i=n.height;var m;var j=window.getComputedStyle?window.getComputedStyle(l,null):null;
["margin"].forEach(function(o){["Top","Right","Bottom","Left"].forEach(function(p){m=parseFloat(g.getStyle(l,o+p,j));
m=isNaN(m)?0:m;if(p==="Right"||p==="Left"){k+=m}if(p==="Top"||p==="Bottom"){i+=m
}})});return{width:k,height:i}};h.pixelsInViewport=function(k,j){var l;var m=d();
j=j||h.getBoundingBox(k);var i=j.top;if(i>=0){l=m.height-i;if(l>j.height){l=j.height
}}else{l=j.height+i}if(l<0){l=0}if(l>m.height){l=m.height}return l};h.percentInViewport=function(j){var i=h.getBoundingBox(j);
var k=h.pixelsInViewport(j,i);return k/i.height};h.isInViewport=function(k,j){var i=h.percentInViewport(k);
if(typeof j!=="number"||1<j||j<0){j=0}return(i>j||i===1)};b("./ac-dom-metrics/ie")(h);
c.exports=h},{"./ac-dom-metrics/ie":83,"ac-dom-styles":79}],83:[function(b,c,a){c.exports=function(d){if(!("getBoundingClientRect" in document.createElement("_"))){d.getBoundingBox=function(h){var j=h.offsetLeft;
var i=h.offsetTop;var g=h.offsetWidth;var f=h.offsetHeight;return{top:i,right:j+g,bottom:i+f,left:j,width:g,height:f}
}}}},{}],84:[function(b,c,a){c.exports=b(4)},{"./ac-dom-nodes/createDocumentFragment":85,"./ac-dom-nodes/filterByNodeType":86,"./ac-dom-nodes/helpers/nodeTypes":88,"./ac-dom-nodes/insertAfter":90,"./ac-dom-nodes/insertBefore":91,"./ac-dom-nodes/insertFirstChild":92,"./ac-dom-nodes/insertLastChild":93,"./ac-dom-nodes/isComment":94,"./ac-dom-nodes/isDocument":95,"./ac-dom-nodes/isDocumentFragment":96,"./ac-dom-nodes/isDocumentType":97,"./ac-dom-nodes/isElement":98,"./ac-dom-nodes/isNode":99,"./ac-dom-nodes/isNodeList":100,"./ac-dom-nodes/isTextNode":101,"./ac-dom-nodes/remove":102,"./ac-dom-nodes/replace":103}],85:[function(b,c,a){c.exports=b(5)
},{}],86:[function(b,c,a){c.exports=b(6)},{"./helpers/isNodeType":87,"./helpers/nodeTypes":88}],87:[function(b,c,a){c.exports=b(7)
},{"../isNode":99}],88:[function(b,c,a){c.exports=b(8)},{}],89:[function(b,c,a){c.exports=b(9)
},{"./isNodeType":87,"./nodeTypes":88}],90:[function(b,c,a){c.exports=b(10)},{"./helpers/validate":89}],91:[function(b,c,a){c.exports=b(11)
},{"./helpers/validate":89}],92:[function(b,c,a){c.exports=b(12)},{"./helpers/validate":89}],93:[function(b,c,a){c.exports=b(13)
},{"./helpers/validate":89}],94:[function(b,c,a){c.exports=b(14)},{"./helpers/isNodeType":87,"./helpers/nodeTypes":88}],95:[function(b,c,a){c.exports=b(15)
},{"./helpers/isNodeType":87,"./helpers/nodeTypes":88}],96:[function(b,c,a){c.exports=b(16)
},{"./helpers/isNodeType":87,"./helpers/nodeTypes":88}],97:[function(b,c,a){c.exports=b(17)
},{"./helpers/isNodeType":87,"./helpers/nodeTypes":88}],98:[function(b,c,a){c.exports=b(18)
},{"./helpers/isNodeType":87,"./helpers/nodeTypes":88}],99:[function(b,c,a){c.exports=b(19)
},{}],100:[function(b,c,a){c.exports=b(20)},{}],101:[function(b,c,a){c.exports=b(21)
},{"./helpers/isNodeType":87,"./helpers/nodeTypes":88}],102:[function(b,c,a){c.exports=b(22)
},{"./helpers/validate":89}],103:[function(b,c,a){c.exports=b(23)},{"./helpers/validate":89}],104:[function(b,c,a){c.exports=b(24)
},{"./ac-dom-traversal/ancestor":105,"./ac-dom-traversal/ancestors":106,"./ac-dom-traversal/children":107,"./ac-dom-traversal/filterBySelector":108,"./ac-dom-traversal/firstChild":109,"./ac-dom-traversal/lastChild":112,"./ac-dom-traversal/matchesSelector":113,"./ac-dom-traversal/nextSibling":114,"./ac-dom-traversal/nextSiblings":115,"./ac-dom-traversal/previousSibling":116,"./ac-dom-traversal/previousSiblings":117,"./ac-dom-traversal/querySelector":118,"./ac-dom-traversal/querySelectorAll":119,"./ac-dom-traversal/shims/ie":120,"./ac-dom-traversal/siblings":121}],105:[function(b,c,a){c.exports=b(25)
},{"./helpers/validate":111,"./matchesSelector":113,"ac-dom-nodes":84}],106:[function(b,c,a){c.exports=b(26)
},{"./helpers/validate":111,"./matchesSelector":113,"ac-dom-nodes":84}],107:[function(b,c,a){c.exports=b(27)
},{"./filterBySelector":108,"./helpers/validate":111,"ac-dom-nodes":84}],108:[function(b,c,a){c.exports=b(28)
},{"./helpers/validate":111,"./matchesSelector":113}],109:[function(b,c,a){c.exports=b(29)
},{"./children":107,"./helpers/validate":111}],110:[function(b,c,a){c.exports=b(30)
},{}],111:[function(b,c,a){c.exports=b(31)},{"ac-dom-nodes":84}],112:[function(b,c,a){c.exports=b(32)
},{"./children":107,"./helpers/validate":111}],113:[function(b,c,a){c.exports=b(33)
},{"./helpers/nativeMatches":110,"./helpers/validate":111,"ac-dom-nodes":84}],114:[function(b,c,a){c.exports=b(34)
},{"./helpers/validate":111,"./matchesSelector":113,"ac-dom-nodes":84}],115:[function(b,c,a){c.exports=b(35)
},{"./helpers/validate":111,"./matchesSelector":113,"ac-dom-nodes":84}],116:[function(b,c,a){c.exports=b(36)
},{"./helpers/validate":111,"./matchesSelector":113,"ac-dom-nodes":84}],117:[function(b,c,a){c.exports=b(37)
},{"./helpers/validate":111,"./matchesSelector":113,"ac-dom-nodes":84}],118:[function(b,c,a){c.exports=b(38)
},{"./helpers/validate":111}],119:[function(b,c,a){c.exports=b(39)},{"./helpers/validate":111}],120:[function(b,c,a){c.exports=b(40)
},{"../helpers/nativeMatches":110,"../helpers/validate":111,"../vendor/sizzle/sizzle":122,"ac-dom-nodes":84}],121:[function(b,c,a){c.exports=b(41)
},{"./children":107,"./helpers/validate":111}],122:[function(b,c,a){c.exports=b(42)
},{}],123:[function(b,c,a){c.exports=b(43)},{"./ac-dom-emitter/DOMEmitter":124}],124:[function(b,c,a){c.exports=b(44)
},{"ac-dom-events":71,"ac-dom-traversal":104,"ac-event-emitter":false}],125:[function(b,c,a){c.exports=b(2)
},{"./ac-shared-instance/SharedInstance":126}],126:[function(b,c,a){c.exports=b(3)
},{}],127:[function(b,c,a){c.exports=b(45)},{"./ac-window-delegate/WindowDelegate":130,"./ac-window-delegate/WindowDelegateCustomEvent":131,"./ac-window-delegate/WindowDelegateOptimizer":132}],128:[function(b,c,a){c.exports=b(46)
},{"ac-event-emitter":false}],129:[function(b,c,a){c.exports=b(47)},{"ac-event-emitter":false}],130:[function(b,c,a){c.exports=b(48)
},{"./CustomEventController":128,"./OptimizerController":129,"./optimizers/optimizers":135,"./queries/queries":144,"ac-dom-emitter":123,"ac-shared-instance":125}],131:[function(b,c,a){c.exports=b(49)
},{"ac-event-emitter":false}],132:[function(b,c,a){c.exports=b(50)},{"ac-event-emitter":false}],133:[function(b,c,a){c.exports=b(51)
},{"../../WindowDelegateOptimizer":132,"../../queries/queries":144}],134:[function(b,c,a){c.exports=b(52)
},{"../../WindowDelegateOptimizer":132,"../../queries/queries":144}],135:[function(b,c,a){c.exports=b(53)
},{"./events/resize":133,"./events/scroll":134}],136:[function(b,c,a){c.exports=b(54)
},{}],137:[function(b,c,a){c.exports=b(55)},{}],138:[function(b,c,a){c.exports=b(56)
},{}],139:[function(b,c,a){c.exports=b(57)},{}],140:[function(b,c,a){c.exports=b(58)
},{}],141:[function(b,c,a){c.exports=b(59)},{}],142:[function(b,c,a){c.exports=b(60)
},{}],143:[function(b,c,a){c.exports=b(61)},{}],144:[function(b,c,a){c.exports=b(62)
},{"./methods/clientHeight":136,"./methods/clientWidth":137,"./methods/innerHeight":138,"./methods/innerWidth":139,"./methods/maxScrollX":140,"./methods/maxScrollY":141,"./methods/scrollX":142,"./methods/scrollY":143}],145:[function(b,c,a){var d=b("./ac-element-tracker/ElementTracker");
c.exports=new d();c.exports.ElementTracker=d},{"./ac-element-tracker/ElementTracker":146}],146:[function(d,c,h){var i;
var g=d("ac-object");var k=d("ac-dom-nodes");var a=d("ac-dom-metrics");var l=d("ac-array");
var n=d("ac-window-delegate").WindowDelegate;var j=d("./TrackedElement");var o=d("ac-event-emitter").EventEmitter;
var f={autoStart:false};function b(q,p){this.options=g.clone(f);this.options=typeof p==="object"?g.extend(this.options,p):this.options;
this.windowDelegate=n;this.tracking=false;this.elements=[];if(q&&(Array.isArray(q)||k.isNodeList(q)||k.isElement(q))){this.addElements(q)
}if(this.options.autoStart){this.start()}}i=b.prototype=g.create(o.prototype);var m=/^\[object (HTMLCollection|NodeList|Object)\]$/;
i._registerElements=function(p){p=[].concat(p);p.forEach(function(r){if(this._elementInDOM(r)){var q=new j(r);
q.offsetTop=q.element.offsetTop;this.elements.push(q)}},this)};i._registerTrackedElements=function(p){var q=[].concat(p);
q.forEach(function(r){if(this._elementInDOM(r.element)){r.offsetTop=r.element.offsetTop;
this.elements.push(r)}},this)};i._elementInDOM=function(r){var q=false;var p=document.getElementsByTagName("body")[0];
if(k.isElement(r)&&p.contains(r)){q=true}return q};i._onVPChange=function(){this.elements.forEach(function(p){this.refreshElementState(p)
},this)};i._elementPercentInView=function(p){return p.pixelsInView/p.height};i._elementPixelsInView=function(q){var t=0;
var s=q.top;var r=q.bottom;var p=this.windowDelegate.innerHeight();if(s<=0&&r>=p){t=p
}else{if(s>=0&&s<p&&r>p){t=p-s}else{if(s<0&&(r<p&&r>=0)){t=q.bottom}else{if(s>=0&&r<=p){t=q.height
}}}}return t};i._ifInView=function(p,q){if(!q){p.trigger("enterview",p)}};i._ifAlreadyInView=function(p){if(!p.inView){p.trigger("exitview",p)
}};i.addElements=function(p){p=k.isNodeList(p)?l.toArray(p):[].concat(p);p.forEach(function(q){this.addElement(q)
},this)};i.addElement=function(q){var p;if(k.isElement(q)){p=new j(q);this._registerTrackedElements(p)
}return p};i.removeElement=function(r){var q=[];var p;this.elements.forEach(function(s,t){if(s===r||s.element===r){q.push(t)
}});p=this.elements.filter(function(t,s){return q.indexOf(s)<0?true:false});this.elements=p
};i.stop=function(){if(this.tracking===true){this.tracking=false;this.windowDelegate.off("scroll resize orientationchange",this._onVPChange)
}};i.start=function(){if(this.tracking===false){this.tracking=true;this.windowDelegate.on("scroll resize orientationchange",this._onVPChange,this);
this.refreshAllElementStates()}};i.refreshAllElementStates=function(){this.elements.forEach(function(p){this.refreshElementState(p)
},this)};i.refreshElementState=function(p){var q=a.getBoundingBox(p.element);var r=p.inView;
p=g.extend(p,q);p.pixelsInView=this._elementPixelsInView(p);p.percentInView=this._elementPercentInView(p);
p.inView=p.pixelsInView>0;if(p.inView){this._ifInView(p,r)}if(r){this._ifAlreadyInView(p)
}return p};c.exports=b},{"./TrackedElement":147,"ac-array":72,"ac-dom-metrics":82,"ac-dom-nodes":84,"ac-event-emitter":false,"ac-object":346,"ac-window-delegate":127}],147:[function(d,f,c){var g;
var i=d("ac-dom-emitter").DOMEmitter;var a=d("ac-dom-nodes");var b=d("ac-object");
function h(j){if(a.isElement(j)){this.element=j}else{throw new TypeError("TrackedElement: "+j+" is not a valid DOM element")
}this.inView=false;this.percentInView=0;this.pixelsInView=0;this.offsetTop=0;this.top=0;
this.right=0;this.bottom=0;this.left=0;this.width=0;this.height=0;i.call(this,j)
}g=h.prototype=b.create(i.prototype);f.exports=h},{"ac-dom-emitter":69,"ac-dom-nodes":84,"ac-object":346}],148:[function(b,d,a){var c=b("./ac-element-engagement/ElementEngagement");
d.exports=new c();d.exports.ElementEngagement=c},{"./ac-element-engagement/ElementEngagement":149}],149:[function(c,b,f){var g;
var d=c("ac-object");var h=c("ac-element-tracker").ElementTracker;var j={timeToEngage:500,inViewThreshold:0.75,stopOnEngaged:true};
var i={thresholdEnterTime:0,thresholdExitTime:0,inThreshold:false,engaged:false,tracking:true};
var a=function(){h.call(this)};g=a.prototype=d.create(h.prototype);g._decorateTrackedElement=function(l,k){var m;
m=d.defaults(j,k||{});d.extend(l,m);d.extend(l,i)};g._attachElementListeners=function(k){k.on("thresholdenter",this._thresholdEnter,this);
k.on("thresholdexit",this._thresholdExit,this);k.on("enterview",this._enterView,this);
k.on("exitview",this._exitView,this)};g._removeElementListeners=function(k){k.off("thresholdenter",this._thresholdEnter);
k.off("thresholdexit",this._thresholdExit);k.off("enterview",this._enterView);k.off("exitview",this._exitView)
};g._attachAllElementListeners=function(){this.elements.forEach(function(k){if(!k.stopOnEngaged){this._attachElementListeners(k)
}else{if(!k.engaged){this._attachElementListeners(k)}}},this)};g._removeAllElementListeners=function(){this.elements.forEach(function(k){this._removeElementListeners(k)
},this)};g._elementInViewPastThreshold=function(m){var k=this.windowDelegate.innerHeight();
var l=false;if(m.pixelsInView===k){l=true}else{l=(m.percentInView>m.inViewThreshold)
}return l};g._ifInView=function(k,m){var l=k.inThreshold;h.prototype._ifInView.apply(this,arguments);
if(!l&&this._elementInViewPastThreshold(k)){k.inThreshold=true;k.trigger("thresholdenter",k);
if(typeof k.timeToEngage==="number"&&k.timeToEngage>=0){k.engagedTimeout=window.setTimeout(this._engaged.bind(this,k),k.timeToEngage)
}}};g._ifAlreadyInView=function(k){var l=k.inThreshold;h.prototype._ifAlreadyInView.apply(this,arguments);
if(l&&!this._elementInViewPastThreshold(k)){k.inThreshold=false;k.trigger("thresholdexit",k);
if(k.engagedTimeout){window.clearTimeout(k.engagedTimeout);k.engagedTimeout=null
}}};g._engaged=function(k){k.engagedTimeout=null;this._elementEngaged(k);k.trigger("engaged",k);
this.trigger("engaged",k)};g._thresholdEnter=function(k){k.thresholdEnterTime=Date.now();
k.thresholdExitTime=0;this.trigger("thresholdenter",k)};g._thresholdExit=function(k){k.thresholdExitTime=Date.now();
this.trigger("thresholdexit",k)};g._enterView=function(k){this.trigger("enterview",k)
};g._exitView=function(k){this.trigger("exitview",k)};g._elementEngaged=function(k){k.engaged=true;
if(k.stopOnEngaged){this.stop(k)}};g.stop=function(k){if(this.tracking&&!k){this._removeAllElementListeners();
h.prototype.stop.call(this)}if(k&&k.tracking){k.tracking=false;this._removeElementListeners(k)
}};g.start=function(k){if(!k){this._attachAllElementListeners()}if(k&&!k.tracking){if(!k.stopOnEngaged){k.tracking=true;
this._attachElementListeners(k)}else{if(!k.engaged){k.tracking=true;this._attachElementListeners(k)
}}}if(!this.tracking){h.prototype.start.call(this)}else{this.refreshAllElementStates()
}};g.addElement=function(m,k){var l=h.prototype.addElement.call(this,m);this._decorateTrackedElement(l,k);
return l};g.addElements=function(l,k){[].forEach.call(l,function(m){this.addElement(m,k)
},this)};b.exports=a},{"ac-element-tracker":145,"ac-object":346}],150:[function(b,c,a){var d=b("./ac-experience-reporter/ExperienceReporter");
c.exports=new d();c.exports.ExperienceReporter=d},{"./ac-experience-reporter/ExperienceReporter":152}],151:[function(b,d,a){var c=function(h,g){this._data=h;
this._environment=g;this.experienceObject=this._matchExperienceToEnvironment()||{};
this.experience=this.experienceObject.type||"static";return this};var f=c.prototype;
f._matchExperienceToEnvironment=function(){var g=false;var h=this._filterByEnvironment();
if(h.length>0){g=h.length===1?h[0]:this._filterBySpecificity(h)}return g};f._filterByEnvironment=function(){var g=this._data.filter(function(i){var h=false;
for(var j in i){if(j!=="type"&&i.hasOwnProperty(j)){if(/^min_/.test(j)){h=this._environment[j.replace(/^min_/,"")]>=i[j]
}else{if(/^max_/.test(j)){h=this._environment[j.replace(/^max_/,"")]<=i[j]}else{h=i[j]===this._environment[j]
}}if(!h){break}}}return h},this);return g};f._filterBySpecificity=function(j){var i=j;
var g=0;var h=[];i.forEach(function(l){var k=Object.keys(l).length;g=k>g?k:g});
i.forEach(function(l){var k=Object.keys(l).length;if(k===g){h.push(l)}});return h[0]
};d.exports=c},{}],152:[function(c,a,f){var i=c("ac-browser");var d=c("ac-feature");
var h=c("../utils/castToFloat");var b=c("./ExperienceObject");function j(){this._environment=this._setEnvironment()
}var g=j.prototype;g.newExperience=function(k){k.forEach(function(l){var m;for(m in l){if(l.hasOwnProperty(m)){if(/(^(min_|max_))|((_version|_width|_height)$)/.test(m)){l[m]=h(l[m])
}}}});return new b(k,this._environment)};g.getEnvironment=function(){return this._environment
};g._setEnvironment=function(){var k={platform:this._setPlatform(),os:i.os.toLowerCase(),os_version:h(i.osVersion),browser:i.name.toLowerCase(),browser_version:h(i.version),retina:d.isRetina(),viewport_width:window.innerWidth,viewport_height:window.innerHeight};
return k};g._setPlatform=function(){var k="desktop";if(d.isTablet()){k="tablet"
}else{if(d.isHandheld()){k="handheld"}}return k};a.exports=j},{"../utils/castToFloat":153,"./ExperienceObject":151,"ac-browser":65,"ac-feature":154}],153:[function(c,d,b){d.exports=function a(f){return window.parseFloat(f,10)
}},{}],154:[function(c,f,b){var d={cssPropertyAvailable:c("./ac-feature/cssPropertyAvailable"),localStorageAvailable:c("./ac-feature/localStorageAvailable")};
var a=Object.prototype.hasOwnProperty;d.threeDTransformsAvailable=function(){if(typeof this._threeDTransformsAvailable!=="undefined"){return this._threeDTransformsAvailable
}var i,g;try{this._threeDTransformsAvailable=false;if(a.call(window,"styleMedia")){this._threeDTransformsAvailable=window.styleMedia.matchMedium("(-webkit-transform-3d)")
}else{if(a.call(window,"media")){this._threeDTransformsAvailable=window.media.matchMedium("(-webkit-transform-3d)")
}}if(!this._threeDTransformsAvailable){if(!(g=document.getElementById("supportsThreeDStyle"))){g=document.createElement("style");
g.id="supportsThreeDStyle";g.textContent="@media (transform-3d),(-o-transform-3d),(-moz-transform-3d),(-ms-transform-3d),(-webkit-transform-3d) { #supportsThreeD { height:3px } }";
document.querySelector("head").appendChild(g)}if(!(i=document.querySelector("#supportsThreeD"))){i=document.createElement("div");
i.id="supportsThreeD";document.body.appendChild(i)}this._threeDTransformsAvailable=(i.offsetHeight===3)||g.style.MozTransform!==undefined||g.style.WebkitTransform!==undefined
}return this._threeDTransformsAvailable}catch(h){return false}};d.canvasAvailable=function(){if(typeof this._canvasAvailable!=="undefined"){return this._canvasAvailable
}var g=document.createElement("canvas");this._canvasAvailable=!!(typeof g.getContext==="function"&&g.getContext("2d"));
return this._canvasAvailable};d.sessionStorageAvailable=function(){if(typeof this._sessionStorageAvailable!=="undefined"){return this._sessionStorageAvailable
}try{if(typeof window.sessionStorage!=="undefined"&&typeof window.sessionStorage.setItem==="function"){window.sessionStorage.setItem("ac_browser_detect","test");
this._sessionStorageAvailable=true;window.sessionStorage.removeItem("ac_browser_detect","test")
}else{this._sessionStorageAvailable=false}}catch(g){this._sessionStorageAvailable=false
}return this._sessionStorageAvailable};d.cookiesAvailable=function(){if(typeof this._cookiesAvailable!=="undefined"){return this._cookiesAvailable
}this._cookiesAvailable=(a.call(document,"cookie")&&!!navigator.cookieEnabled)?true:false;
return this._cookiesAvailable};d.__normalizedScreenWidth=function(){if(typeof window.orientation==="undefined"){return window.screen.width
}return window.screen.width<window.screen.height?window.screen.width:window.screen.height
};d.touchAvailable=function(){return !!(("ontouchstart" in window)||window.DocumentTouch&&document instanceof window.DocumentTouch)
};d.isDesktop=function(){if(!this.touchAvailable()&&!window.orientation){return true
}return false};d.isHandheld=function(){return !this.isDesktop()&&!this.isTablet()
};d.isTablet=function(){return !this.isDesktop()&&this.__normalizedScreenWidth()>480
};d.isRetina=function(){var g=["min-device-pixel-ratio:1.5","-webkit-min-device-pixel-ratio:1.5","min-resolution:1.5dppx","min-resolution:144dpi","min--moz-device-pixel-ratio:1.5"];
var h;if(window.devicePixelRatio!==undefined){if(window.devicePixelRatio>=1.5){return true
}}else{for(h=0;h<g.length;h+=1){if(window.matchMedia("("+g[h]+")").matches===true){return true
}}}return false};d.svgAvailable=function(){return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")
};f.exports=d},{"./ac-feature/cssPropertyAvailable":155,"./ac-feature/localStorageAvailable":156}],155:[function(c,f,b){var g=null;
var h=null;var a=null;var d=null;f.exports=function(s){if(g===null){g=document.createElement("browserdetect").style
}if(h===null){h=["-webkit-","-moz-","-o-","-ms-","-khtml-",""]}if(a===null){a=["Webkit","Moz","O","ms","Khtml",""]
}if(d===null){d={}}s=s.replace(/([A-Z]+)([A-Z][a-z])/g,"$1\\-$2").replace(/([a-z\d])([A-Z])/g,"$1\\-$2").replace(/^(\-*webkit|\-*moz|\-*o|\-*ms|\-*khtml)\-/,"").toLowerCase();
switch(s){case"gradient":if(d.gradient!==undefined){return d.gradient}s="background-image:";
var q="gradient(linear,left top,right bottom,from(#9f9),to(white));";var p="linear-gradient(left top,#9f9, white);";
g.cssText=(s+h.join(q+s)+h.join(p+s)).slice(0,-s.length);d.gradient=(g.backgroundImage.indexOf("gradient")!==-1);
return d.gradient;case"inset-box-shadow":if(d["inset-box-shadow"]!==undefined){return d["inset-box-shadow"]
}s="box-shadow:";var r="#fff 0 1px 1px inset;";g.cssText=h.join(s+r);d["inset-box-shadow"]=(g.cssText.indexOf("inset")!==-1);
return d["inset-box-shadow"];default:var o=s.split("-");var k=o.length;var n;var m;
var l;if(o.length>0){s=o[0];for(m=1;m<k;m+=1){s+=o[m].substr(0,1).toUpperCase()+o[m].substr(1)
}}n=s.substr(0,1).toUpperCase()+s.substr(1);if(d[s]!==undefined){return d[s]}for(l=a.length-1;
l>=0;l-=1){if(g[a[l]+s]!==undefined||g[a[l]+n]!==undefined){d[s]=true;return true
}}return false}}},{}],156:[function(d,f,b){var a=null;f.exports=function c(){if(a===null){a=!!(window.localStorage&&window.localStorage.non_existent!==null)
}return a}},{}],157:[function(b,c,a){a.Clock=b("./ac-animation-sequencer/Clock");
a.PlayerMonitor=b("./ac-animation-sequencer/PlayerMonitor");a.Timeline=b("./ac-animation-sequencer/Timeline");
a.Tween=b("./ac-animation-sequencer/Tween");a.BasicPlayer=b("./ac-animation-sequencer/player/BasicPlayer");
a.MediaPlayer=b("./ac-animation-sequencer/player/MediaPlayer");a.Pause=b("./ac-animation-sequencer/controllers/Pause");
a.MediaGroup=b("./ac-animation-sequencer/controllers/MediaGroup");a.BaseClip=b("./ac-animation-sequencer/clip/BaseClip");
a.CompositeClip=b("./ac-animation-sequencer/clip/CompositeClip");a.TimedClip=b("./ac-animation-sequencer/clip/TimedClip");
a.TweenClip=b("./ac-animation-sequencer/clip/TweenClip");a.ElementClip=b("./ac-animation-sequencer/clip/ElementClip");
a.VideoClip=b("./ac-animation-sequencer/clip/VideoClip");a.ReversibleVideo=b("./ac-animation-sequencer/adapters/ReversibleVideo")
},{"./ac-animation-sequencer/Clock":158,"./ac-animation-sequencer/PlayerMonitor":159,"./ac-animation-sequencer/Timeline":160,"./ac-animation-sequencer/Tween":161,"./ac-animation-sequencer/adapters/ReversibleVideo":164,"./ac-animation-sequencer/clip/BaseClip":165,"./ac-animation-sequencer/clip/CompositeClip":166,"./ac-animation-sequencer/clip/ElementClip":167,"./ac-animation-sequencer/clip/TimedClip":168,"./ac-animation-sequencer/clip/TweenClip":169,"./ac-animation-sequencer/clip/VideoClip":170,"./ac-animation-sequencer/controllers/MediaGroup":171,"./ac-animation-sequencer/controllers/Pause":172,"./ac-animation-sequencer/player/BasicPlayer":173,"./ac-animation-sequencer/player/MediaPlayer":174}],158:[function(b,c,a){function f(){this._currentTimeMS=0;
this._playbackRate=1;this._paused=true;this._resetStartTime()}var d=f.prototype;
d._updateCurrentTime=function(){var h,g=Date.now();if(this._paused){h=0}else{h=(g-this._startTime)
}this._currentTimeMS+=(h*this._playbackRate);this._startTime=g};d._resetStartTime=function(){this._startTime=Date.now()
};d.play=function(){this._resetStartTime();this._paused=false;return this};d.pause=function(){this._updateCurrentTime();
this._paused=true;return this};d.isPaused=function(){return this._paused};d.getCurrentTime=function(){this._updateCurrentTime();
return this._currentTimeMS/1000};d.setCurrentTime=function(g){if(isNaN(g)){return
}this._resetStartTime();this._currentTimeMS=g*1000};d.getPlaybackRate=function(){return this._playbackRate
};d.setPlaybackRate=function(g){if(isNaN(g)){return}this._playbackRate=g};c.exports=f
},{}],159:[function(c,f,a){var h=c("ac-event-emitter").EventEmitter;var b=c("./vendor/utils");
function d(j,k,i){i=(Array.isArray(k)?i:k)||{};k=(Array.isArray(k)?k:[]);this._player=j;
this._isMonitoring=true;this._times=[0];this._previous=0;this._currentTimeIndex=0;
this._options=b.defaults({active:true,readyEvent:"canplaythrough",autoInit:false},i);
if(this._options.autoInit){this.addPlayerListener(this._options.readyEvent,this._init.bind(this,k))
}}var g=d.prototype=new h();g.addPlayerListener=function(j,i){if(typeof this._player.addEventListener==="function"){this._player.addEventListener(j,i)
}else{if(typeof this._player.on==="function"){this._player.on(j,i)}}};g._init=function(i){if(this._initialized){return
}this.addTime(this._player.duration);if(i&&i.length){i.forEach(this.addTime.bind(this))
}this._resetNextTimes();this._attachEvents();if(this._options.active){this._listen()
}this.trigger("ready");this._initialized=true};g._attachEvents=function(){this.addPlayerListener("play",this._handlePlay.bind(this));
if(!this._options.active){this.addPlayerListener("timeupdate",this._listen.bind(this))
}this.addPlayerListener("seeking",this._handleSeek.bind(this));this.addPlayerListener("ratechange",this._handleRateChange.bind(this))
};g.addTime=function(i,j){i=parseFloat(i);if(isNaN(i)){throw new TypeError('Invalid time "'+i+'", expected Number"')
}if(this._times.indexOf(i)===-1){this._times.push(i);this._times.sort(function(l,k){return l-k
})}if(typeof j==="function"){this.on("time:"+i,j)}this._resetNextTimes()};g._handleSeek=function(){var j=this._player.currentTime;
var i=this._times.indexOf(j);this._currentTimeIndex=(i!==-1)?i:this._calcCurrentTimeIndex(j);
this._resetNextTimes()};g._handlePlay=function(){this._resetNextTimes();this._listen()
};g._handleRateChange=function(){var j=this._player.currentTime;var k=j===this._player.duration;
var i=this._times.indexOf(j)!==-1;this._currentTimeIndex=(k||i)?this._currentTimeIndex:this._calcCurrentTimeIndex(j);
this._resetNextTimes()};g._resetNextTimes=function(){var i=this._calcNextTimeIndex(this._currentTimeIndex);
if(b.isNum(i)){this._nextTimeIndex=i;this._nextTimePoint=this._times[i]}};g._calcCurrentTimeIndex=function(m){var j,l,k,i;
k=this._calcTimeIndices(m);l=k[0];j=k[1];i=(this._forwards())?l:j;return(this._validTimeIndex(i))?i:null
};g._validTimeIndex=function(i){return(0<=i&&i<=this._times.length-1)};g._calcNextTimeIndex=function(i){var j=i+((this._forwards())?1:-1);
return(this._validTimeIndex(j))?j:null};g._calcTimeIndices=function(j){var i=this._times.reduce(function(l,m,k){return(j>=this._times[l+1])?k:l
}.bind(this),0);return[i,i+1]};g._reachedNextTime=function(m){var l=this._forwards();
var j=this._nextTimePoint;var k=!this._player.paused||m===0||m===this._player.duration;
var n=l&&m>=j;var i=!l&&m<=j;return k&&(n||i)};g._forwards=function(){return this._player.playbackRate>0
};g._listen=function(){var j=this._player.currentTime;var i=this._previous;var k=this._reachedNextTime(j);
if(k){this._enterTimePoint(i)}this._previous=j;if(this._options.active&&!this._player.paused){window.requestAnimationFrame(this._listen.bind(this))
}};g._enterTimePoint=function(j){var i=this._calcNextTimeIndex(this._currentTimeIndex);
if(!b.isNum(i)){return}var k=this._times[i];this.trigger("time:"+k,{previous:j,next:this._player.currentTime,requested:k});
this._currentTimeIndex=i;this._resetNextTimes()};f.exports=d},{"./vendor/utils":177,"ac-event-emitter":false}],160:[function(b,c,a){var i=b("./clip/CompositeClip");
var h=b("./clip/TimedClip");var g="Invalid duration for the following clip; must be number greater than or equal to zero (0)";
var f='Invalid clip type: "';var d={clipTypes:{Tween:b("./clip/TweenClip"),Element:b("./clip/ElementClip")},create:function(j){if(this.validTimeline(j)){return this._buildTimeline(j)
}if(this.debug&&console&&typeof console.warn==="function"){console.warn("Timeline: invalid timeline data:",j)
}return null},validTimeline:function(j){return Array.isArray(j)&&j.every(this._validClip.bind(this))
},_getClipType:function(j){if(typeof j==="string"&&this.clipTypes[j]){j=this.clipTypes[j]
}if(this._isValidClipType(j)){return j}return false},_isValidClipType:function(j){return(j&&j.create)
},_validate:function(){return true},_buildTimeline:function(k){var j=k.map(this._createTimedClip.bind(this));
return new i(j)},_createTimedClip:function(k){var j=this._getClipType(k.clip);return new h(j.create(k),k)
},_validClip:function(m){var l;var j=this._getClipType(m.clip);var k=this._validDuration(m);
if(!j){throw new TypeError(f+m.clip+'"\n\n'+JSON.stringify(m))}l=j.validate||this._validate;
return k&&l(m)},_validDuration:function(k){var l=k.duration;var j=typeof l==="number"&&l>0;
if(!j){throw new TypeError(g+"\n\n"+JSON.stringify(k))}return j}};c.exports=d},{"./clip/CompositeClip":166,"./clip/ElementClip":167,"./clip/TimedClip":168,"./clip/TweenClip":169}],161:[function(b,a,d){var i=b("./vendor/KeySpline");
var g=b("./vendor/EasingFunctions");var k="Easing option must be one of: String, Array[Number:4], or Function. Given: ";
var c="KeySpline easing expected an array of exactly four (4) numbers, given: ";
var j=b("./vendor/utils");function h(l){l=l||{};j.defaultProps(this,h.defaults,l);
this._easingFunction=this._createEasing(this.easing)}h.defaults={from:0,to:1,duration:1,easing:"linear"};
var f=h.prototype;f._createEasing=function(l){var m;if(typeof l==="string"){m=this._createPredefinedEasing(l)
}else{if(Array.isArray(l)){m=this._createBezierEasing(l)}else{if(typeof l==="function"){m=l
}else{throw new TypeError(k+l)}}}return m};f._createBezierEasing=function(l){var n;
var o=l;var m=l.every(function(p){return(typeof p==="number")});if(l.length!==4||!m){throw new TypeError(c+l)
}n=new i(o[0],o[1],o[2],o[3]);return function(p,s,r,q){return s+n.get(p/q)*r}};
f._createPredefinedEasing=function(n){var m=g[n];var l="";if(!m){l+='Easing function "'+m;
l+='" not recognized among the following: ';l+=Object.keys(g).join(", ");throw new Error(l)
}return m};f._getInterpolatedValue=function(l,o,n,m){return this._easingFunction(l,o,n,m)
};f.valueAtLocation=function(m){if(m<0||m>1){return null}var l=this.duration*m;
return this.valueAtTime(l)};f.valueAtPercent=function(l){if(l<0||l>100){return null
}return this.valueAtLocation(l/100)};f.valueAtTime=function(l){if(l<0||l>this.duration){return null
}return this._getInterpolatedValue(l,this.from,this.to-this.from,this.duration)
};a.exports=h},{"./vendor/EasingFunctions":175,"./vendor/KeySpline":176,"./vendor/utils":177}],162:[function(c,d,b){function a(g){this._media=g
}var f=a.prototype;f.on=function(){this._media.addEventListener.apply(this._media,arguments)
};f.off=function(){this._media.removeEventListener.apply(this._media,arguments)
};f.getCurrentTime=function(){return this._media.currentTime};f.setCurrentTime=function(g){this._media.currentTime=g
};f.getDuration=function(){return this._media.duration};f.getPlaybackRate=function(){return this._media.playbackRate
};f.setPlaybackRate=function(g){this._media.playbackRate=g};d.exports=a},{}],163:[function(c,d,a){if(typeof Object.defineProperties!=="function"){return
}var g=c("ac-event-emitter").EventEmitter;function b(h){this._player=h}var f=b.prototype=new g();
f.addEventListener=function(){this._player.on.apply(this._player,arguments)};f.removeEventListener=function(){this._player.on.apply(this._player,arguments)
};f.play=function(){this._player.play.apply(this._player,arguments)};f.pause=function(){this._player.pause.apply(this._player,arguments)
};Object.defineProperties(b.prototype,{paused:{get:function(){return this._player.isPaused()
},set:function(h){this._player.setPaused(h)}},currentTime:{get:function(){return this._player.getCurrentTime()
},set:function(h){this._player.setCurrentTime(h)}},duration:{get:function(){return this._player.getDuration()
}},playbackRate:{get:function(){return this._player.getPlaybackRate()},set:function(h){this.trigger("ratechange",{rate:h});
this._player.setPlaybackRate(h)}}});d.exports=b},{"ac-event-emitter":false}],164:[function(b,c,a){if(typeof Object.defineProperties!=="function"){return
}var f=b("ac-event-emitter").EventEmitter;function g(h){this._media=h;this._lastTime=null;
g.passThroughEvents.forEach(this.passThroughEvent.bind(this));g.interceptedEvents.forEach(this.interceptEvent.bind(this))
}g.interceptedEvents=["seeking","play"];g.passThroughEvents=["abort","canplay","canplaythrough","durationchange","emptied","ended","error","loadeddata","loadedmetadata","loadstart","mozaudioavailable","pause","playing","progress","ratechange","seeked","suspend","timeupdate","volumechange","waiting"];
var d=g.prototype=new f();d.addEventListener=function(h){var i=g.passThroughEvents;
if(i.indexOf(h)>-1){this._media.addEventListener.apply(this._media,arguments)}else{this.on.apply(this,arguments)
}};d.removeEventListener=function(h){var i=g.passThroughEvents;if(i.indexOf(h)>-1){this._media.removeEventListener.apply(this._media,arguments)
}else{this.off.apply(this,arguments)}};d.passThroughEvent=function(h){this._media.addEventListener(h,this._passThrough.bind(this))
};d.interceptEvent=function(h){var i=this["_on"+h];if(typeof i!=="undefined"){this._media.addEventListener(h,i.bind(this))
}};d._passThrough=function(h){this.trigger(h.type,h)};d._onseeking=function(){if(!this._playing){this.trigger("seeking")
}};d._onplay=function(){this.trigger("play")};d.play=function(){if(this.playbackRate<0){this._playing=true;
this._lastTime=null;window.requestAnimationFrame(this._update.bind(this));this.trigger("play")
}else{this._media.play()}};d.load=function(){this._media.load()};d._stop=function(h){h.preventDefault();
h.stopPropagation()};d._update=function(i){var j=i-(this._lastTime||i);var h=this._media.currentTime+((j*this.playbackRate)/1000);
if(h<=0){this._media.currentTime=0;this._playing=false;this.trigger("returned",{type:"returned"})
}else{this._media.currentTime=h;this.trigger("timeupdate",{type:"timeupdate"})}this._lastTime=i;
if(this._playing){window.requestAnimationFrame(this._update.bind(this))}};d.pause=function(){this._playing=false;
this._media.pause()};Object.defineProperties(g.prototype,{currentTime:{get:function(){return this._media.currentTime
},set:function(h){this._media.currentTime=h}},duration:{get:function(){return this._media.duration
}},buffered:{get:function(){return this._media.buffered}},playbackRate:{get:function(){return this._media.playbackRate
},set:function(h){this._media.playbackRate=h}},paused:{get:function(){return !this._playing&&this._media.paused
},set:function(h){this._media.paused=h}}});c.exports=g},{"ac-event-emitter":false}],165:[function(b,a,d){var h=b("../vendor/KeySpline");
var i=b("ac-style-renderer").LogRenderer;var g=b("../vendor/EasingFunctions");var l="Easing option must be one of: String, Array[Number:4], or Function. Given: ";
var c="KeySpline easing expected an array of exactly four (4) numbers, given: ";
var k=b("ac-event-emitter").EventEmitter;function j(n,m){this.options=m||{};this._renderer=this.options.renderer||i;
this._duration=n;this._currentTime=0;this._easingFunction=this._createEasing(this.options.easing||j.DEFAULT_EASING)
}j.DEFAULT_EASING="linear";var f=j.prototype=new k();f._createEasing=function(m){var n;
if(typeof m==="string"){n=this._createPredefinedEasing(m)}else{if(Array.isArray(m)){n=this._createBezierEasing(m)
}else{if(typeof m==="function"){n=m}else{throw new TypeError(l+m)}}}return n};f._createBezierEasing=function(m){var o;
var p=m;var n=m.every(function(q){return(typeof q==="number")});if(m.length!==4||!n){throw new TypeError(c+m)
}o=new h(p[0],p[1],p[2],p[3]);return function(q,t,s,r){return o.get(q/r)*s}};f._createPredefinedEasing=function(o){var n=g[o];
var m="";if(!n){m+='Easing function "'+n;m+='" not recognized among the following: ';
m+=Object.keys(g).join(", ");throw new Error(m)}return n};f._getInterpolatedValue=function(m,p,o,n){return this._easingFunction(m,p,o,n)
};f.getDuration=function(){return this._duration};f.getCurrentTime=function(){return this._currentTime
};f.setCurrentTime=function(m){this._currentTime=m;this.update()};f.getPlaybackRate=function(){return this._playbackRate
};f.setPlaybackRate=function(m){this._playbackRate=m};f.update=function(){};a.exports=j
},{"../vendor/EasingFunctions":175,"../vendor/KeySpline":176,"ac-event-emitter":false,"ac-style-renderer":205}],166:[function(b,c,a){var g=b("./TimedClip");
function f(h){if(h&&h.length){this._clips=h.map(this._ensureTimedClip);this._duration=this._calcDuration()
}}var d=f.prototype;d._calcDuration=function(h){h=h||this._clips;var i=h.reduce(function(k,l){var j=l.getStartDelay()+l.getDuration();
return(j>k)?j:k},0);return i};d._ensureTimedClip=function(h){if(!(h instanceof g)){h=new g(h)
}return h};d._getLocalTime=function(h,i){return i-h.getStartDelay()};d._getEligibleClips=function(){return this._clips
};d.addClip=function(h){h=this._ensureTimedClip(h);this._clips.push(h);this._duration=this._calcDuration()
};d.on=function(){var h=arguments;this._clips.forEach(function(i){i.on.apply(i,h)
})};d.off=function(){var h=arguments;this._clips.forEach(function(i){i.off.apply(i,h)
})};d.trigger=function(){var h=arguments;this._clips.forEach(function(i){i.trigger.apply(i,h)
})};d.setEasingDirection=function(h){this._clips.forEach(function(i){i.setEasingDirection(h)
})};d.getDuration=function(){return this._duration};d.getCurrentTime=function(){return this._currentTime
};d.setCurrentTime=function(j,i){var h=this._getEligibleClips();if(!h||!h.length){return
}h.forEach(function(k){var l=this._getLocalTime(k,j);k.setCurrentTime(l,i)}.bind(this))
};d.getPlaybackRate=function(){return this._playbackRate};d.setPlaybackRate=function(h){if(isNaN(h)){return
}this._playbackRate=h};c.exports=f},{"./TimedClip":168}],167:[function(c,a,d){var j=c("../vendor/utils");
var h=c("../Tween");var k=c("./BaseClip");var i=c("ac-style-renderer").InlineStyleRenderer;
var b="Invalid element or selector: ";function g(l){l=j.defaults(g.DEFAULTS,l);
this.props=l.props||[];if(l.selector||typeof l.element==="string"){this.el=document.querySelector(l.selector||l.element)
}else{this.el=l.element}if(!this.el||!this.el.nodeType||this.el.nodeType!==1){throw new TypeError(b+l.element)
}if(!l.renderer){this.renderer=i}k.call(this,l.duration,l);this._initProps()}g.DEFAULTS={props:[],selector:null,element:".default_selector",renderer:i,duration:1};
g.create=function(l){return new g(l)};g.validate=function(m){var l="selector" in m||"element" in m;
return l};var f=g.prototype=new k();f._initProps=function(){this.props.forEach(function(l){l.tween=this._createTween({easing:l.easing||k.DEFAULT_EASING,from:l.from,to:l.to,duration:this.getDuration()})
}.bind(this))};f._createTween=function(l){return new h(l)};f.update=function(m){if(this.props.length<1){return
}var l=this.props.map(function(q){var o=q.tween;var n=q.units;var p=o.valueAtTime(m);
p=(n?(p+n):p);return{prop:q.property,value:p}});this._renderer.render(this.el,l);
this.trigger("tween_update",{el:this.el,context:l})};f.getCurrentTime=function(){return this._currentTime
};f.setCurrentTime=function(l){if(l<0||l>this.getDuration()){return}this._currentTime=l;
this.update(this._currentTime)};a.exports=g},{"../Tween":161,"../vendor/utils":177,"./BaseClip":165,"ac-style-renderer":205}],168:[function(c,d,a){var b=c("../vendor/utils");
function g(i,h){h=b.defaults(g.DEFAULTS,(h||{}));this._clip=i;this._startDelay=h.startDelay||0;
this._loop=h.loop||false;this._fill=h.fill||"none"}g.DEFAULTS={fill:"none",loop:false,startDelay:0};
g.FILL_MODES=["none","forwards","backwards","both"];var f=g.prototype;f._show=function(){if(this._isHidden){this._isHidden=false;
this._clip.show()}};f._applyFill=function(n){if(this.getFill()==="none"){return
}var m=this.getDuration();var k=n>m;var j=this.getFill();var i=k&&j==="forwards";
var h=!k&&j==="backwards";var l=j==="both"||i||h;if(l){this._clip.setCurrentTime((k)?m:0)
}};f._hide=function(){if(!this._isHidden){this._isHidden=true;this._clip.hide()
}};f.setEasingDirection=function(h){return this._clip.setEasingDirection(h)};f.on=function(){this._clip.on.apply(this._clip,arguments)
};f.off=function(){this._clip.off.apply(this._clip,arguments)};f.trigger=function(){this._clip.trigger.apply(this._clip,arguments)
};f.getCurrentTime=function(){return this._currentTime};f.setCurrentTime=function(i,h){if(i<0||i>this.getDuration()){this._clip.inEffect=false;
this._applyFill(i)}else{this._clip.inEffect=true;this._clip.setCurrentTime(i,h)
}};f.getDuration=function(){return this._clip.getDuration()};f.getStartDelay=function(){return this._startDelay
};f.setStartDelay=function(h){if(b.isNum(h)){this._startDelay=h}};f.getLoop=function(){return this._loop
};f.setLoop=function(h){this._loop=!!h};f.getFill=function(){return this._fill};
f.setFill=function(i){var h=g.FILL_MODES;if(h.indexOf(i.toLowerCase())!==-1){this._fill=i
}};d.exports=g},{"../vendor/utils":177}],169:[function(c,d,b){var g=c("./BaseClip");
function a(j,i,h){if(typeof j==="object"){h=j;j=h.duration;i=h.props}g.call(this,j,h);
this.props=i||[];this._initializePropEasing();this._lastComputedTime=0;this._easingDirection=1
}a.create=function(h){return new a(h.duration,h.props)};a.validate=function(h){return(Array.isArray(h.props)&&h.props.length>0)
};a.DEFAULT_EASING="linear";var f=a.prototype=new g();f._initializePropEasing=function(){this.props.forEach(function(h){h.easing=this._createEasing(h.easing||g.DEFAULT_EASING)
}.bind(this))};f.setEasingDirection=function(h){this._easingDirection=h};f.update=function(k){var i=(this._easingDirection===-1);
if(this.options.reverseEase!==true){i=false}var j=this.getDuration(),h={};if(this.props.length<1){return
}this.props.forEach(function(n){var m;var l=n.property;if(i){m=n.easing(this.getDuration()-k,n.to,-(n.to-n.from),j)
}else{m=n.easing(k,n.from,(n.to-n.from),j)}h[l]=m}.bind(this));this.trigger("tween_update",h)
};f.getCurrentTime=function(){return this._currentTime};f.setCurrentTime=function(h){if(h<0){h=0
}if(h>this.getDuration()){h=this.getDuration()}if(h<0||h>this.getDuration()){return
}this._currentTime=h;this.update(this._currentTime)};d.exports=a},{"./BaseClip":165}],170:[function(c,d,b){var a=c("../adapters/MediaAsClip");
function f(h,g){if(console){console.warn("VideoClip deprecated, please use adapters/MediaAsClip.")
}return new a(h,g)}d.exports=f},{"../adapters/MediaAsClip":162}],171:[function(c,d,a){if(typeof Object.defineProperties!=="function"){return
}var h=c("ac-event-emitter").EventEmitter;var i=c("../Clock");var b=c("../vendor/utils");
function g(){var j=[].slice.call(arguments);this._mediaElements=j.filter(this._validateMediaElements);
this._clock=new i()}var f=g.prototype=new h();f.addEventListener=f.on;f.removeEventListener=f.off;
f._validateMediaElements=function(j){return(typeof j.play==="function")&&(typeof j.pause==="function")
};f._updateCurrentTime=function(j){this._lastTime=this._clock.currentTime;this._mediaElements.forEach(function(k){k.currentTime=j
})};f._isValidTime=function(j){return(0<=j)&&(j<=this.duration)};f.play=function(){this.paused=false;
this._clock.play();b.invoke(this._mediaElements,"play");this.trigger("play")};f.pause=function(){this.paused=true;
this._clock.pause();b.invoke(this._mediaElements,"pause");this.trigger("pause")
};Object.defineProperties(g.prototype,{paused:{get:function(){return this._paused
},set:function(j){this._paused=!!j}},currentTime:{get:function(){return this._clock.getCurrentTime()
},set:function(j){if(this._isValidTime(j)){this.trigger("seeking",{time:j});this._updateCurrentTime(j);
this.trigger("seeked",{time:j})}}},playbackRate:{get:function(){return this._clock.getPlaybackRate()
},set:function(j){if(!b.isNum(j)){return}this._clock.setPlaybackRate(j);this._mediaElements.forEach(function(k){k.playbackRate=j
});this.trigger("ratechange",{rate:j})}},duration:{get:function(){return this._duration
},set:function(j){this._duration=j}}});d.exports=g},{"../Clock":158,"../vendor/utils":177,"ac-event-emitter":false}],172:[function(b,d,a){var h=b("ac-event-emitter").EventEmitter;
var c=b("../PlayerMonitor");function f(k,i,j){j=j||{};this._player=k;this._monitor=new c(this._player,j);
this._monitor.on("ready",this._initPauses.bind(this,i));this._previousPauseIndex=0;
this._player.addEventListener("play",this._exitPause.bind(this),false)}var g=f.prototype=new h();
g._initPauses=function(i){this._pauses=this._processPauses(i);this._attachPauses(this._pauses)
};g._processPauses=function(i){i=i.filter(function(j){return(0<j)&&(j<this._player.duration)
}.bind(this));i=i.sort(function(k,j){return k-j});if(i[0]!==0){i.unshift(0)}if(i[i.length-1]!==this._player.duration){i.push(this._player.duration)
}return i};g._attachPauses=function(i){i.forEach(function(j){this._monitor.addTime(j,this._enterPause.bind(this))
}.bind(this))};g._enterPause=function(l){var j=l.requested;var i=this._previousPauseIndex;
var k=this._pauses.indexOf(j);if(i===k){return}this._atPausePoint=true;this._player.pause();
this._player.currentTime=j;this.trigger("pauseenter",{from:i,to:k});this._previousPauseIndex=k
};g._exitPause=function(){var k=this._player.currentTime;var j=this._forwards();
var l=j&&k===this._player.duration;var i=!j&&k===0;if(this._atPausePoint&&!(l||i)){this._atPausePoint=false;
this.trigger("pauseexit",{from:this._previousPauseIndex,to:this._calcNextPauseIndex()})
}};g._forwards=function(){return this._player.playbackRate>0};g._calcNextPauseIndex=function(){var i=this._previousPauseIndex;
var j=this._forwards();return i+((j)?1:-1)};d.exports=f},{"../PlayerMonitor":159,"ac-event-emitter":false}],173:[function(d,f,b){var h=d("ac-event-emitter").EventEmitter;
var i=d("../Clock");var c=d("../adapters/PlayerAsMedia");function a(k,j){j=j||{};
if(!k){throw new TypeError("BasicPlayer: Invalid clip provided",k)}this._clip=k;
this._paused=true;this.setClock(j.clock||new i());window.setTimeout(this._triggerStart.bind(this),0)
}var g=a.prototype=new h();g.addEventListener=g.on;g.removeEventListener=g.off;
g.play=function(){this._paused=false;this._clock.play();this._update();this.trigger("play")
};g.pause=function(){this.setPaused(true);this._clock.pause();this.trigger("pause")
};g._triggerStart=function(){this.trigger("canplay");this.trigger("canplaythrough")
};g._updateCurrentTime=function(j){this._clock.setCurrentTime(j);this._lastTime=this._clip.setCurrentTime(j)
};g._update=function(){var m=this._clock.getCurrentTime();var n=this.getDuration();
var l=this._clock.getPlaybackRate();var k=l>0;var o=k&&m>=n;var j=!k&&m<=0;if(o||j){m=(o)?n:0;
this.pause();this._updateCurrentTime(m)}this.trigger("timeupdate",{previous:this._lastTime,time:m});
if(o){this.trigger("ended")}if(j){this.trigger("returned")}if(!this.isPaused()){this._updateCurrentTime(m);
window.requestAnimationFrame(this._update.bind(this))}};g._isValidTime=function(j){return(0<=j)&&(j<=this.getDuration())
};g.asMedia=function(){return new c(this)};g.isPaused=function(){return this._paused
};g.setPaused=function(j){this._paused=!!j};g.getCurrentTime=function(){return this._clock.getCurrentTime()
};g.setCurrentTime=function(j){if(this._isValidTime(j)){this.trigger("seeking",{time:j});
this._updateCurrentTime(j);this.trigger("seeked",{time:j})}};g.getPlaybackRate=function(){return this._clock.getPlaybackRate()
};g.setPlaybackRate=function(j){this._clock.setPlaybackRate(j);this.trigger("ratechange",{rate:j})
};g.getDuration=function(){return this._clip.getDuration()};g.setClock=function(j){this._clock=j
};g.getClock=function(){return this._clock};f.exports=a},{"../Clock":158,"../adapters/PlayerAsMedia":163,"ac-event-emitter":false}],174:[function(d,f,c){var b=d("./BasicPlayer");
function a(h,g){var i=new b(h,g);if(console){console.warn("MediaPlayer module deprecated, please use adapters/PlayerAsMedia or #toMedia method on instances of BasicPlayer")
}return i.asMedia()}f.exports=a},{"./BasicPlayer":173}],175:[function(q,d,J){var w={linear:function E(N,L,M,K){return M*N/K+L
},easeInQuad:function n(N,L,M,K){return M*(N/=K)*N+L},easeOutQuad:function b(N,L,M,K){return -M*(N/=K)*(N-2)+L
},easeInOutQuad:function x(N,L,M,K){if((N/=K/2)<1){return M/2*N*N+L}return -M/2*((--N)*(N-2)-1)+L
},easeInCubic:function t(N,L,M,K){return M*(N/=K)*N*N+L},easeOutCubic:function i(N,L,M,K){return M*((N=N/K-1)*N*N+1)+L
},easeInOutCubic:function h(N,L,M,K){if((N/=K/2)<1){return M/2*N*N*N+L}return M/2*((N-=2)*N*N+2)+L
},easeInQuart:function j(N,L,M,K){return M*(N/=K)*N*N*N+L},easeOutQuart:function I(N,L,M,K){return -M*((N=N/K-1)*N*N*N-1)+L
},easeInOutQuart:function G(N,L,M,K){if((N/=K/2)<1){return M/2*N*N*N*N+L}return -M/2*((N-=2)*N*N*N-2)+L
},easeInQuint:function m(N,L,M,K){return M*(N/=K)*N*N*N*N+L},easeOutQuint:function a(N,L,M,K){return M*((N=N/K-1)*N*N*N*N+1)+L
},easeInOutQuint:function H(N,L,M,K){if((N/=K/2)<1){return M/2*N*N*N*N*N+L}return M/2*((N-=2)*N*N*N*N+2)+L
},easeInSine:function r(N,L,M,K){return -M*Math.cos(N/K*(Math.PI/2))+M+L},easeOutSine:function f(N,L,M,K){return M*Math.sin(N/K*(Math.PI/2))+L
},easeInOutSine:function A(N,L,M,K){return -M/2*(Math.cos(Math.PI*N/K)-1)+L},easeInExpo:function c(N,L,M,K){return(N===0)?L:M*Math.pow(2,10*(N/K-1))+L
},easeOutExpo:function D(N,L,M,K){return(N===K)?L+M:M*(-Math.pow(2,-10*N/K)+1)+L
},easeInOutExpo:function p(N,L,M,K){if(N===0){return L}if(N===K){return L+M}if((N/=K/2)<1){return M/2*Math.pow(2,10*(N-1))+L
}return M/2*(-Math.pow(2,-10*--N)+2)+L},easeInCirc:function s(N,L,M,K){return -M*(Math.sqrt(1-(N/=K)*N)-1)+L
},easeOutCirc:function g(N,L,M,K){return M*Math.sqrt(1-(N=N/K-1)*N)+L},easeInOutCirc:function B(N,L,M,K){if((N/=K/2)<1){return -M/2*(Math.sqrt(1-N*N)-1)+L
}return M/2*(Math.sqrt(1-(N-=2)*N)+1)+L},easeInElastic:function z(O,Q,M,P){var L=1.70158;
var N=0;var K=M;if(O===0){return Q}if((O/=P)===1){return Q+M}if(!N){N=P*0.3}if(K<Math.abs(M)){K=M;
L=N/4}else{L=N/(2*Math.PI)*Math.asin(M/K)}return -(K*Math.pow(2,10*(O-=1))*Math.sin((O*P-L)*(2*Math.PI)/N))+Q
},easeOutElastic:function y(O,Q,M,P){var L=1.70158;var N=0;var K=M;if(O===0){return Q
}if((O/=P)===1){return Q+M}if(!N){N=P*0.3}if(K<Math.abs(M)){K=M;L=N/4}else{L=N/(2*Math.PI)*Math.asin(M/K)
}return K*Math.pow(2,-10*O)*Math.sin((O*P-L)*(2*Math.PI)/N)+M+Q},easeInOutElastic:function C(O,Q,M,P){var L=1.70158;
var N=0;var K=M;if(O===0){return Q}if((O/=P/2)===2){return Q+M}if(!N){N=P*(0.3*1.5)
}if(K<Math.abs(M)){K=M;L=N/4}else{L=N/(2*Math.PI)*Math.asin(M/K)}if(O<1){return -0.5*(K*Math.pow(2,10*(O-=1))*Math.sin((O*P-L)*(2*Math.PI)/N))+Q
}return K*Math.pow(2,-10*(O-=1))*Math.sin((O*P-L)*(2*Math.PI)/N)*0.5+M+Q},easeInBack:function v(N,K,M,O,L){if(L===undefined){L=1.70158
}return M*(N/=O)*N*((L+1)*N-L)+K},easeOutBack:function l(N,K,M,O,L){if(L===undefined){L=1.70158
}return M*((N=N/O-1)*N*((L+1)*N+L)+1)+K},easeInOutBack:function F(N,K,M,O,L){if(L===undefined){L=1.70158
}if((N/=O/2)<1){return M/2*(N*N*(((L*=(1.525))+1)*N-L))+K}return M/2*((N-=2)*N*(((L*=(1.525))+1)*N+L)+2)+K
},easeInBounce:function u(N,L,M,K){return M-w.easeOutBounce(K-N,0,M,K)+L},easeOutBounce:function k(N,L,M,K){if((N/=K)<(1/2.75)){return M*(7.5625*N*N)+L
}else{if(N<(2/2.75)){return M*(7.5625*(N-=(1.5/2.75))*N+0.75)+L}else{if(N<(2.5/2.75)){return M*(7.5625*(N-=(2.25/2.75))*N+0.9375)+L
}else{return M*(7.5625*(N-=(2.625/2.75))*N+0.984375)+L}}}},easeInOutBounce:function o(N,L,M,K){if(N<K/2){return w.easeInBounce(N*2,0,M,K)*0.5+L
}return w.easeOutBounce(N*2-K,0,M,K)*0.5+M*0.5+L}};d.exports=w},{}],176:[function(b,c,a){
/*! MIT License
 *
 * KeySpline - use bezier curve for transition easing function
 * Copyright (c) 2012 Gaetan Renaudeau <renaudeau.gaetan@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */
function d(o,l,n,j){this.get=function(p){if(o===l&&n===j){return p
}return g(k(p),l,j)};function i(p,q){return 1-3*q+3*p}function h(p,q){return 3*q-6*p
}function f(p){return 3*p}function g(r,p,q){return((i(p,q)*r+h(p,q))*r+f(p))*r}function m(r,p,q){return 3*i(p,q)*r*r+2*h(p,q)*r+f(p)
}function k(s){var q=s;for(var r=0;r<4;++r){var t=m(q,o,n);if(t===0){return q}var p=g(q,o,n)-s;
q-=p/t}return q}}c.exports=d},{}],177:[function(b,c,a){c.exports={isNum:function(d){return typeof d==="number"
},isArray:function(f){var d=Object.prototype.toString;return d.call(f)==="[object Array]"
},addClass:function(d,f){d.classList.add(f)},removeClass:function(d,f){d.classList.remove(f)
},hasClass:function(d,f){return d.contains(f)},defaults:function(g,f){var d={};
f=f||{};for(var h in g){if(g.hasOwnProperty(h)){d[h]=(f[h]!=null)?f[h]:g[h]}}return d
},defaultProps:function(h,g,d){var f=this.defaults(g,d);for(var i in f){if(f.hasOwnProperty(i)){h[i]=f[i]
}}},invoke:function(g,d){var f=[].slice.call(arguments,2);if(!Array.isArray(g)){throw new Error("List is not an array")
}g.forEach(function(h){var i=h[d];if(i&&typeof i==="function"){i.apply(h,f)}})}}
},{}],178:[function(i,c,x){var s=Object.prototype.toString;var l=Object.prototype.hasOwnProperty;
var b=typeof Array.prototype.indexOf==="function"?function(z,A){return z.indexOf(A)
}:function(z,B){for(var A=0;A<z.length;A++){if(z[A]===B){return A}}return -1};var k=Array.isArray||function(z){return s.call(z)=="[object Array]"
};var v=Object.keys||function(B){var z=[];for(var A in B){if(B.hasOwnProperty(A)){z.push(A)
}}return z};var u=typeof Array.prototype.forEach==="function"?function(z,A){return z.forEach(A)
}:function(z,B){for(var A=0;A<z.length;A++){B(z[A])}};var m=function(z,D,A){if(typeof z.reduce==="function"){return z.reduce(D,A)
}var C=A;for(var B=0;B<z.length;B++){C=D(C,z[B])}return C};var y=/^[0-9]+$/;function d(C,B){if(C[B].length==0){return C[B]={}
}var A={};for(var z in C[B]){if(l.call(C[B],z)){A[z]=C[B][z]}}C[B]=A;return A}function q(D,B,A,E){var z=D.shift();
if(l.call(Object.prototype,A)){return}if(!z){if(k(B[A])){B[A].push(E)}else{if("object"==typeof B[A]){B[A]=E
}else{if("undefined"==typeof B[A]){B[A]=E}else{B[A]=[B[A],E]}}}}else{var C=B[A]=B[A]||[];
if("]"==z){if(k(C)){if(""!=E){C.push(E)}}else{if("object"==typeof C){C[v(C).length]=E
}else{C=B[A]=[B[A],E]}}}else{if(~b(z,"]")){z=z.substr(0,z.length-1);if(!y.test(z)&&k(C)){C=d(B,A)
}q(D,C,z,E)}else{if(!y.test(z)&&k(C)){C=d(B,A)}q(D,C,z,E)}}}}function f(D,C,G){if(~b(C,"]")){var F=C.split("["),z=F.length,E=z-1;
q(F,D,"base",G)}else{if(!y.test(C)&&k(D.base)){var B={};for(var A in D.base){B[A]=D.base[A]
}D.base=B}n(D.base,C,G)}return D}function o(C){if("object"!=typeof C){return C}if(k(C)){var z=[];
for(var B in C){if(l.call(C,B)){z.push(C[B])}}return z}for(var A in C){C[A]=o(C[A])
}return C}function g(A){var z={base:{}};u(v(A),function(B){f(z,B,A[B])});return o(z.base)
}function h(A){var z=m(String(A).split("&"),function(B,F){var G=b(F,"="),E=t(F),C=F.substr(0,E||G),D=F.substr(E||G,F.length),D=D.substr(b(D,"=")+1,D.length);
if(""==C){C=F,D=""}if(""==C){return B}return f(B,p(C),p(D))},{base:{}}).base;return o(z)
}x.parse=function(z){if(null==z||""==z){return{}}return"object"==typeof z?g(z):h(z)
};var r=x.stringify=function(A,z){if(k(A)){return j(A,z)}else{if("[object Object]"==s.call(A)){return w(A,z)
}else{if("string"==typeof A){return a(A,z)}else{return z+"="+encodeURIComponent(String(A))
}}}};function a(A,z){if(!z){throw new TypeError("stringify expects an object")}return z+"="+encodeURIComponent(A)
}function j(z,C){var A=[];if(!C){throw new TypeError("stringify expects an object")
}for(var B=0;B<z.length;B++){A.push(r(z[B],C+"["+B+"]"))}return A.join("&")}function w(F,E){var A=[],D=v(F),C;
for(var B=0,z=D.length;B<z;++B){C=D[B];if(""==C){continue}if(null==F[C]){A.push(encodeURIComponent(C)+"=")
}else{A.push(r(F[C],E?E+"["+encodeURIComponent(C)+"]":encodeURIComponent(C)))}}return A.join("&")
}function n(B,A,C){var z=B[A];if(l.call(Object.prototype,A)){return}if(undefined===z){B[A]=C
}else{if(k(z)){z.push(C)}else{B[A]=[z,C]}}}function t(C){var z=C.length,B,D;for(var A=0;
A<z;++A){D=C[A];if("]"==D){B=false}if("["==D){B=true}if("="==D&&!B){return A}}}function p(A){try{return decodeURIComponent(A.replace(/\+/g," "))
}catch(z){return A}}},{}],179:[function(b,c,a){c.exports={clone:b("./ac-object/clone"),defaults:b("./ac-object/defaults"),extend:b("./ac-object/extend"),getPrototypeOf:b("./ac-object/getPrototypeOf"),isEmpty:b("./ac-object/isEmpty"),toQueryParameters:b("./ac-object/toQueryParameters")}
},{"./ac-object/clone":180,"./ac-object/defaults":181,"./ac-object/extend":182,"./ac-object/getPrototypeOf":183,"./ac-object/isEmpty":184,"./ac-object/toQueryParameters":185}],180:[function(b,c,a){var f=b("./extend");
c.exports=function d(g){return f({},g)}},{"./extend":182}],181:[function(b,c,a){var f=b("./extend");
c.exports=function d(h,g){if(typeof h!=="object"||typeof g!=="object"){throw new TypeError("defaults: must provide a defaults and options object")
}return f({},h,g)}},{"./extend":182}],182:[function(c,d,b){var a=Object.prototype.hasOwnProperty;
d.exports=function f(){var h;var g;if(arguments.length<2){h=[{},arguments[0]]}else{h=[].slice.call(arguments)
}g=h.shift();h.forEach(function(j){if(j!=null){for(var i in j){if(a.call(j,i)){g[i]=j[i]
}}}});return g}},{}],183:[function(c,d,b){var a=Object.prototype.hasOwnProperty;
d.exports=function f(i){if(Object.getPrototypeOf){return Object.getPrototypeOf(i)
}else{if(typeof i!=="object"){throw new Error("Requested prototype of a value that is not an object.")
}else{if(typeof this.__proto__==="object"){return i.__proto__}else{var g=i.constructor;
var h;if(a.call(i,"constructor")){h=g;if(!(delete i.constructor)){return null}g=i.constructor;
i.constructor=h}return g?g.prototype:null}}}}},{}],184:[function(c,d,b){var a=Object.prototype.hasOwnProperty;
d.exports=function f(g){var h;if(typeof g!=="object"){throw new TypeError("ac-base.Object.isEmpty : Invalid parameter - expected object")
}for(h in g){if(a.call(g,h)){return false}}return true}},{}],185:[function(c,f,b){var a=c("qs");
f.exports=function d(g){if(typeof g!=="object"){throw new TypeError("toQueryParameters error: argument is not an object")
}return a.stringify(g)}},{qs:178}],186:[function(b,c,a){c.exports.WindowDelegate=b("./window-delegate/WindowDelegate");
c.exports.windowEmitter=b("./window-delegate/windowEmitter")},{"./window-delegate/WindowDelegate":187,"./window-delegate/windowEmitter":188}],187:[function(c,f,a){var g;
var b=c("./windowEmitter");function d(){this._emitter=b;this._setWindowDimensionValues();
this._setScrollValues();this.on("resize",this._setWindowDimensionValues.bind(this));
this.on("scroll",this._setScrollValues.bind(this));this.on("touchstart",this._touchScrollStart.bind(this));
this.on("touchend",this._setZoomValues.bind(this))}g=d.prototype;g.on=function(){this._emitter.on.apply(this._emitter,arguments);
return this};g.once=function(){this._emitter.once.apply(this._emitter,arguments);
return this};g.off=function(){this._emitter.off.apply(this._emitter,arguments);
return this};g.has=function(){return this._emitter.has.apply(this._emitter,arguments)
};g.trigger=function(){this._emitter.trigger.apply(this._emitter,arguments);return this
};g.propagateTo=function(){this._emitter.propagateTo.apply(this._emitter,arguments);
return this};g.stopPropagatingTo=function(){this._emitter.stopPropagatingTo.apply(this._emitter,arguments);
return this};g.isZoomed=function(){return this.clientWidth>this.innerWidth};g._setWindowDimensionValues=function(){this.clientWidth=document.documentElement.clientWidth;
this.clientHeight=document.documentElement.clientHeight;this.innerWidth=window.innerWidth||this.clientWidth;
this.innerHeight=window.innerHeight||this.clientHeight};g._setZoomValues=function(){var h=this.innerWidth;
this.innerWidth=window.innerWidth;if(h!==this.innerWidth){this.innerHeight=window.innerHeight;
this.trigger("zoom");if(h<this.innerWidth){this.trigger("zoomIn")}else{this.trigger("zoomOut")
}}else{setTimeout(this._setZoomValues.bind(this),500)}};g._updateScrollX=function(){this.scrollX=(window.pageXOffset!==undefined)?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft;
this.maxScrollX=document.body.scrollWidth-this.innerWidth;return this.scrollX};
g._updateScrollY=function(){this.scrollY=(window.pageYOffset!==undefined)?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;
this.maxScrollY=document.body.scrollHeight-this.innerHeight;return this.scrollY
};g._setScrollValues=function(){var i=this.scrollX,h=this.scrollY;this._updateScrollX();
this._updateScrollY();if(this.scrollX!==i){this.trigger("scrollX")}if(this.scrollY!==h){this.trigger("scrollY")
}this._scrollStop()};g._scrollStop=function(){if(typeof window.ontouchstart==="undefined"){if(this._scrollStopTimer){clearTimeout(this._scrollStopTimer)
}this._scrollStopTimer=setTimeout(function(){clearTimeout(this._scrollStopTimer);
this.trigger("scrollStop")}.bind(this),300)}};g._touchScrollStart=function(){this._updateScrollX();
this._updateScrollY();this.once("touchend",this._touchScrollStop.bind(this,this.scrollX,this.scrollY))
};g._touchScrollStop=function(i,h,j){this._updateScrollX();this._updateScrollY();
if(i!==this.scrollX||h!==this.scrollY){setTimeout(this._touchScrollStop.bind(this,this.scrollX,this.scrollY,true),300)
}else{if(j){this.trigger("scrollStop")}}};f.exports=new d()},{"./windowEmitter":188}],188:[function(b,c,a){var d=b("ac-dom-emitter").DOMEmitter;
c.exports=new d(window)},{"ac-dom-emitter":69}],189:[function(b,c,a){var d=b("./ac-element-tracker/ElementTracker");
c.exports=new d();c.exports.ElementTracker=d},{"./ac-element-tracker/ElementTracker":190}],190:[function(c,b,g){var h;
var f=c("ac-object");var i=c("ac-base").Element;var k=c("ac-base").Array;var m=c("window-delegate").WindowDelegate;
var j=c("./TrackedElement");var d={autoStart:false};function a(o,n){this.options=f.clone(d);
this.options=typeof n==="object"?f.extend(this.options,n):this.options;this.windowDelegate=m;
this.tracking=false;this.elements=[];if(o&&(Array.isArray(o)||this._isNodeList(o)||i.isElement(o))){this.addElements(o)
}if(this.options.autoStart===true){this.start()}}h=a.prototype;var l=/^\[object (HTMLCollection|NodeList|Object)\]$/;
h._isNodeList=function(n){if(!n){return false}if(typeof n.length!=="number"){return false
}if(typeof n[0]==="object"&&(!n[0]||!n[0].nodeType)){return false}return l.test(Object.prototype.toString.call(n))
};h._registerElements=function(n){n=[].concat(n);n.forEach(function(p){if(this._elementInDOM(p)){var o=new j(p);
o.offsetTop=o.element.offsetTop;this.elements.push(o)}},this)};h._registerTrackedElementObjects=function(o){var n=[].concat(o);
n.forEach(function(p){if(this._elementInDOM(p.element)){p.offsetTop=p.element.offsetTop;
this.elements.push(p)}},this)};h._elementInDOM=function(p){var o=false;var n=document.getElementsByTagName("body")[0];
if(i.isElement(p)&&n.contains(p)){o=true}return o};h._onScroll=function(){this.elements.forEach(function(n){this.refreshElementState(n)
},this)};h._onResize=function(){this.elements.forEach(function(n){this.refreshElementState(n)
},this)};h._elementPercentInView=function(n){return n.pixelsInView/n.height};h._elementPixelsInView=function(o){var r=0;
var q=o.top;var p=o.bottom;var n=this.windowDelegate.innerHeight;if(q<=0&&p>=n){r=n
}else{if(q>=0&&q<n&&p>n){r=n-q}else{if(q<0&&(p<n&&p>=0)){r=o.bottom}else{if(q>=0&&p<=n){r=o.height
}}}}return r};h._isElementOrObject=function(n){return n&&(i.isElement(n)||(typeof n==="object"&&!Array.isArray(n)&&!this._isNodeList(n)))
};h._ifInView=function(n,p,o){if(!p){n.trigger("enterview",n)}if(!o&&n.percentInView>n.inViewThreshold){n.inThreshold=true;
n.trigger("thresholdenter",n)}};h._ifAlreadyInView=function(n,o){if(!n.inView){n.trigger("exitview",n)
}if(o&&n.percentInView<n.inViewThreshold){n.inThreshold=false;n.trigger("thresholdexit",n)
}};h.addElements=function(n){n=this._isNodeList(n)?k.toArray(n):[].concat(n);n.forEach(function(o){this.addElement(o)
},this)};h.addElement=function(o){var n;if(this._isElementOrObject(o)){n=new j(o);
this._registerTrackedElementObjects(n)}else{throw new TypeError("ElementTracker.addElement: "+o+"must be a valid Element or Object")
}return n};h.removeElement=function(p){var o=[];var n;this.elements.forEach(function(q,r){if(q===p||q.element===p){o.push(r)
}});n=this.elements.filter(function(r,q){return o.indexOf(q)<0?true:false});this.elements=n
};h.stop=function(){if(this.tracking===true){this.tracking=false;this.windowDelegate.off("scroll",this._onScroll);
this.windowDelegate.off("resize",this._onResize)}};h.start=function(){if(this.tracking===false){this.tracking=true;
this.windowDelegate.on("scroll",this._onScroll,this);this.windowDelegate.on("resize",this._onResize,this);
this.refreshAllElementStates()}};h.refreshAllElementStates=function(){this.elements.forEach(function(n){this.refreshElementState(n)
},this)};h.refreshElementState=function(n){var p=i.getBoundingBox(n.element);var q=n.inView;
var o=n.inThreshold;n=f.extend(n,p);n.pixelsInView=this._elementPixelsInView(n);
n.percentInView=this._elementPercentInView(n);n.inView=n.pixelsInView>0;if(n.inView){this._ifInView(n,q,o)
}if(q){this._ifAlreadyInView(n,o)}return n};b.exports=a},{"./TrackedElement":191,"ac-base":false,"ac-object":179,"window-delegate":186}],191:[function(b,c,a){var d;
var h=b("ac-dom-emitter").DOMEmitter;var g={inViewThreshold:0.75};function f(j){var i={};
var k;if(j.nodeType&&j.nodeType>0){i.element=j}else{i=j}for(k in g){this[k]=g[k]
}for(k in i){this[k]=i[k]}this.inView=false;this.inThreshold=false;this.percentInView=0;
this.pixelsInView=0;this.offsetTop=0;this.top=0;this.right=0;this.bottom=0;this.left=0;
this.width=0;this.height=0;h.call(this,i.element)}d=f.prototype=new h(null);c.exports=f
},{"ac-dom-emitter":69}],192:[function(c,d,b){var a=c("./ac-keyboard/Keyboard");
d.exports=new a();d.exports.Keyboard=a;d.exports.keys=c("./ac-keyboard/keymap")
},{"./ac-keyboard/Keyboard":194,"./ac-keyboard/keymap":195}],193:[function(d,f,b){var c=d("ac-base").Object;
var a=["keyLocation"];function g(h){this.originalEvent=h;for(var i in h){if(typeof h[i]!=="function"&&a.indexOf(i)===-1){this[i]=h[i]
}}this.location=(this.originalEvent.keyLocation===undefined)?this.originalEvent.location:this.originalEvent.keyLocation
}g.prototype={preventDefault:function(){if(typeof this.originalEvent.preventDefault!=="function"){this.originalEvent.returnValue=false;
return}return this.originalEvent.preventDefault()},stopPropagation:function(){return this.originalEvent.stopPropagation()
}};f.exports=g},{"ac-base":false}],194:[function(f,c,h){var j=f("ac-base").Element;
var g=f("./KeyEvent");var n=f("ac-event-emitter").EventEmitter;var k=f("./keymap");
var l=0;var d=1;var a=2;var m=3;var i;function b(){this._keysDown=[];this._keyDownEmitter=new n();
this._keyUpEmitter=new n();j.addEventListener(document,"keydown",this._DOMKeyDown.bind(this),true);
j.addEventListener(document,"keyup",this._DOMKeyUp.bind(this),true);this._listening=[]
}i=b.prototype;i._castEventNameNumberToString=function(o){if(typeof o==="number"){return o.toString()
}return o};i._DOMKeyDown=function(p){var o=this._normalizeKeyboardEvent(p);var q=o.keyCode;
this._trackKeyDown(q);this._keyDownEmitter.trigger(q.toString(),o)};i._DOMKeyUp=function(p){var o=this._normalizeKeyboardEvent(p);
var q=o.keyCode;this._trackKeyUp(q);this._keyUpEmitter.trigger(q.toString(),o)};
i.addKeyDown=function(){var o=Array.prototype.slice.call(arguments);var p=o.shift();
if(p===undefined){throw new TypeError('Could not listen for keyup event on "'+p+'"')
}p=this._castEventNameNumberToString(p);return this._keyDownEmitter.on.apply(this._keyDownEmitter,[p].concat(o))
};i.addKeyUp=function(){var o=Array.prototype.slice.call(arguments);var p=o.shift();
if(p===undefined){throw new TypeError('Could not listen for keyup event on "'+p+'"')
}p=this._castEventNameNumberToString(p);return this._keyUpEmitter.on.apply(this._keyUpEmitter,[p].concat(o))
};i.removeKeyDown=function(){var o=Array.prototype.slice.call(arguments);var p=o.shift();
p=this._castEventNameNumberToString(p);return this._keyDownEmitter.off.apply(this._keyDownEmitter,[p].concat(o))
};i.removeKeyUp=function(){var o=Array.prototype.slice.call(arguments);var p=o.shift();
p=this._castEventNameNumberToString(p);return this._keyUpEmitter.off.apply(this._keyUpEmitter,[p].concat(o))
};i.isDown=function(o){return(this._keysDown.indexOf(o)!==-1)};i.isUp=function(o){return !this.isDown(o)
};i._trackKeyUp=function(p){var o=this._keysDown.indexOf(p);if(o!==-1){this._keysDown.splice(o,1)
}};i._trackKeyDown=function(o){if(this._keysDown.indexOf(o)===-1){this._keysDown.push(o)
}};i._normalizeKeyboardEvent=function(o){return new g(o)};c.exports=b},{"./KeyEvent":193,"./keymap":195,"ac-base":false,"ac-event-emitter":false}],195:[function(b,c,a){c.exports={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CONTROL:17,ALT:18,COMMAND:91,CAPSLOCK:20,ESCAPE:27,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,NUMPAD_ZERO:96,NUMPAD_ONE:97,NUMPAD_TWO:98,NUMPAD_THREE:99,NUMPAD_FOUR:100,NUMPAD_FIVE:101,NUMPAD_SIX:102,NUMPAD_SEVEN:103,NUMPAD_EIGHT:104,NUMPAD_NINE:105,NUMPAD_ASTERISK:106,NUMPAD_PLUS:107,NUMPAD_DASH:109,NUMPAD_DOT:110,NUMPAD_SLASH:111,NUMPAD_EQUALS:187,TICK:192,LEFT_BRACKET:219,RIGHT_BRACKET:221,BACKSLASH:220,SEMICOLON:186,APOSTRAPHE:222,SPACEBAR:32,CLEAR:12,COMMA:188,DOT:190,SLASH:191}
},{}],196:[function(b,c,a){a.ScrollView=b("./ac-scrollview/ScrollView");a.MouseWheel=b("./ac-scrollview/input/MouseWheel");
a.ScrollBounds=b("./ac-scrollview/ScrollBounds");a.Y_AXIS="y";a.X_AXIS="x"},{"./ac-scrollview/ScrollBounds":198,"./ac-scrollview/ScrollView":199,"./ac-scrollview/input/MouseWheel":202}],197:[function(c,d,a){var b=c("ac-base").Object;
function f(g,h){this._parent=g;this._axis=h;this._inputs=[];this._startTouchMove=null;
this._shouldTouchEnd=false;this._checkToPreventDefault=false}f.prototype={_calculateTouchAngles:function(){var n={x:0,y:0};
var i=this._inputs[this._inputs.length-1];var k=this._inputs[0];var g=i.x-k.x;var m=i.y-k.y;
var l=Math.sqrt(g*g+m*m);if(l===0){return false}var j=Math.asin(m/l);var h=Math.acos(g/l);
n.x=j*(180/Math.PI);n.y=h*(180/Math.PI);n.y-=90;return n},inputStart:function(g,j,h,i){this._inputs=[{x:g,y:j}];
this._startTouchMove={x:g,y:j,timeStamp:h,e:i};this._shouldTouchEnd=false;this._checkToPreventDefault=true
},inputMove:function(g,n,j,k){this._inputs[1]={x:g,y:n};var h=45;var i=-h;var m=this._calculateTouchAngles();
var l=m[this._axis];if(l<=h&&l>=i||this._checkToPreventDefault===false){this._shouldTouchEnd=true;
this._checkToPreventDefault=false;if(this._startTouchMove!==null){this._parent.inputStart(this._startTouchMove.x,this._startTouchMove.y,this._startTouchMove.timeStamp,this._startTouchMove.e);
this._startTouchMove=null}k.preventDefault();this._parent.inputMove.apply(this._parent,arguments)
}},inputEnd:function(g,h){if(this._shouldTouchEnd===true){this._checkToPreventDefault=true;
this._parent.inputEnd.apply(this._parent,arguments)}},on:function(){return this._parent.on.apply(this._parent,arguments)
},off:function(){return this._parent.off.apply(this._parent,arguments)},trigger:function(){return this._parent.trigger.apply(this._parent,arguments)
},once:function(){return this._parent.once.apply(this._parent,arguments)}};d.exports=f
},{"ac-base":false}],198:[function(d,f,b){var c=d("ac-base").Object;function a(k,j,h,g){var i={maxPerSwipe:1,axis:"x"};
this.options=c.extend(i,g||{});this._grid=h;this._scrollInertia=k;this._scrollView=this._scrollInertia.getScrollView();
this._runningIndex=j;this._axisString=(this.options.axis==="x")?"left":"top"}a.prototype={calculateTargetIndex:function(){var g=(this._axisString==="left")?this._scrollView.getTouchContainerWidth():this._scrollView.getTouchContainerHeight();
var i=Math.round(this._scrollInertia.calculateFinalInertiaPosition()[this._axisString]/g);
var h=this._runningIndex;var j=(i-h);if(j>0&&i>h+this.options.maxPerSwipe){i=h+this.options.maxPerSwipe
}else{if(j<0&&i<h-this.options.maxPerSwipe){i=h-this.options.maxPerSwipe}}if(j>0&&i>this._grid[this._axisString].length-1){i=this._grid[this._axisString].length-1
}else{if(j<0&&i<0){i=0}}return i},calculateFuturePositions:function(){var g=this.calculateTargetIndex();
return{left:g*this._scrollView.getTouchContainerWidth(),top:g*this._scrollView.getTouchContainerHeight()}
}};f.exports=a},{"ac-base":false}],199:[function(c,b,h){var d=c("ac-base").Object;
var k=c("ac-base").Element;var o=c("ac-event-emitter").EventEmitter;var n=c("./TouchInertia");
var m=c("./input/MouseWheel");var l=c("./input/Touch");var j=c("./input/Input");
var i=c("./InputPreventDefault");var a=c("./model/Scroll");var f={startBounceDistance:0,endBounceDistance:0,axis:"y",touch:true,mouseWheel:false,mouse:false,preventDefault:true};
function g(q,p){this.options=d.extend(d.clone(f),p||{});this._element=q;this._touchContainerWidth=(typeof this.options.containerWidth==="number")?this.options.containerWidth:q.offsetWidth;
this._touchContainerHeight=(this.options.containerHeight||q.offsetHeight);this._innerScrollWidth=(this.options.innerWidth||q.offsetWidth)+this.options.startBounceDistance+this.options.endBounceDistance;
this._innerScrollHeight=(this.options.innerHeight||q.offsetHeight)+this.options.startBounceDistance+this.options.endBounceDistance;
this._scroll=new a();this._scrollPositions=[];this._inputNormalize=new j(this._scroll);
this._inputNormalize=new i(this._inputNormalize,this.options.axis);this._inputNormalize.on("input_start",this.inputStart,this);
this._inputNormalize.on("input_move",this.inputMove,this);this._inputNormalize.on("input_end",this.inputEnd,this);
if(this.options.touch===true){this._touch=new l(this._inputNormalize,q);this._touch.bindDOMEvents()
}if(this.options.mouseWheel===true){this._mouseWheel=new m(this._inputNormalize,q);
this._mouseWheel.bindDOMEvents()}}g.prototype={};g.prototype.__playInertia=function(q){var p=q.calculateInertiaPositions();
var r=function(t){var s=p[t];if(s===undefined||this._down===true){return}this._scroll.scrollTo(s.left,s.top);
window.requestAnimationFrame(function(){r(t+1)})}.bind(this);r(0)};g.prototype.getTouchContainerHeight=function(){return this._touchContainerHeight
};g.prototype.getTouchContainerWidth=function(){return this._touchContainerWidth
};g.prototype.setInnerWidth=function(p){this._innerScrollWidth=p;return this};g.prototype.setInnerHeight=function(p){this._innerScrollHeight=p;
return this};g.prototype.getInnerScrollWidth=function(){return this._innerScrollWidth
};g.prototype.getInnerScrollHeight=function(){return this._innerScrollHeight};g.prototype.getScrollYDistance=function(){var p=this.getInnerScrollHeight()-this.getTouchContainerHeight()-(this.options.startBounceDistance+this.options.endBounceDistance);
if(p<0){p=0}return p};g.prototype.getScrollXDistance=function(){var p=this.getInnerScrollWidth()-this.getTouchContainerWidth()-(this.options.startBounceDistance+this.options.endBounceDistance);
if(p<0){p=0}return p};g.prototype.inputStart=function(p,s,r,q){this._down=true;
this.trigger("scrollStart",{originalEvent:q,timeStamp:r})};g.prototype.inputMove=function(q){var p=q.scrollLeft;
var r=q.scrollTop;if(q.originalEvent.type==="mousewheel"){if(r>this.getScrollYDistance()){r=this.getScrollYDistance()
}else{if(r<0){r=0}}if(p>this.getScrollXDistance()){p=this.getScrollXDistance()}else{if(p<0){p=0
}}}this._scrollPositions.push({left:p,top:r,timeStamp:q.timeStamp});this._scroll.scrollTo(p,r)
};g.prototype.inputEnd=function(r){var v=true;var q=this._scrollPositions;var w=[];
var t=this._scrollPositions[this._scrollPositions.length-1];var s=r.timeStamp;if(t===null){return
}for(var u=0;u<q.length;u+=1){w[w.length]=q[u].left;w[w.length]=q[u].top;w[w.length]=q[u].timeStamp
}var p=new n(this,{left:this._scroll.scrollLeft,top:this._scroll.scrollTop},w,t.timeStamp,s);
this._down=false;this.trigger("inertiaStart",{originalEvent:r,originalEventName:"touchend",inertia:p,position:{left:this._scroll.scrollLeft,top:this._scroll.scrollTop},velocity:p.calculateVelocity(),preventDefault:function(){v=false
}});if(v===true){this.__playInertia(p)}this._scrollPositions=[]};g.prototype.once=function(){return this._scroll.once.apply(this._scroll,arguments)
};g.prototype.on=function(){return this._scroll.on.apply(this._scroll,arguments)
};g.prototype.off=function(){return this._scroll.off.apply(this._scroll,arguments)
};g.prototype.trigger=function(){return this._scroll.trigger.apply(this._scroll,arguments)
};g.prototype.scrollTo=function(q,p){return this._scroll.scrollTo(q,p)};b.exports=g
},{"./InputPreventDefault":197,"./TouchInertia":200,"./input/Input":201,"./input/MouseWheel":202,"./input/Touch":203,"./model/Scroll":204,"ac-base":false,"ac-event-emitter":false}],200:[function(d,f,b){var c=d("ac-base").Object;
function a(i,l,g,k,h,j){var m={frictionCoefficient:0.95,minFrictionVelocity:0.1};
this.options=c.extend(m,j||{});this._scrollView=i;this._currentPosition=l;this.__scrollLeft=this._currentPosition.left;
this.__scrollTop=this._currentPosition.top;this._positions=g;this._lastTouchMove=k;
this._timeStamp=h;this._frameRate=(1000/60)}a.prototype={__stepThroughFriction:function(m,l){var n=m+this._frictionVelocityX;
var k=l+this._frictionVelocityY;if(Math.abs(this._frictionVelocityX)<=this.options.minFrictionVelocity){n=m
}if(Math.abs(this._frictionVelocityY)<=this.options.minFrictionVelocity){k=l}this._frictionVelocityX*=this.options.frictionCoefficient;
this._frictionVelocityY*=this.options.frictionCoefficient;var h=0;var g=0;var j=0.03;
var i=0.08;if(n<this._minScrollLeft){h=this._minScrollLeft-n}else{if(n>this._maxScrollLeft){h=this._maxScrollLeft-n
}}if(k<this._minScrollTop){g=this._minScrollTop-k}else{if(k>this._maxScrollTop){g=this._maxScrollTop-k
}}if(h!==0){if(h*this._frictionVelocityX<=0){this._frictionVelocityX+=h*j}else{this._frictionVelocityX=h*i
}}if(g!==0){if(g*this._frictionVelocityY<=0){this._frictionVelocityY+=g*j}else{this._frictionVelocityY=g*i
}}return{left:n,top:k}},getScrollView:function(){return this._scrollView},calculateInertiaDuration:function(){var g=this.calculateInertiaPositions();
return g.length*this._frameRate},calculateVelocity:function(){var m=this._positions;
var h=m.length-1;var n=h;for(var l=h;l>0&&m[l]>(this._lastTouchMove-100);l-=3){n=l
}var p=m[h]-m[n];var g=this.__scrollLeft-(m[n-2]);var o=this.__scrollTop-(m[n-1]);
var j=g/p*this._frameRate;var k=o/p*this._frameRate;if((this._timeStamp-this._lastTouchMove)>=100){j=0;
k=0}if(isNaN(j)){j=0}if(isNaN(k)){k=0}return{left:j,top:k}},calculateInertiaPositions:function(){this._minScrollLeft=0;
this._minScrollTop=0;this._maxScrollLeft=this._scrollView.getScrollXDistance();
this._maxScrollTop=this._scrollView.getScrollYDistance();var g=this._positions;
var m=[];var j=this.calculateVelocity();this._frictionVelocityX=j.left;this._frictionVelocityY=j.top;
var l=this.__scrollLeft;var k=this.__scrollTop;var h;var i=0;if(Math.abs(this._frictionVelocityX)<this.options.minFrictionVelocity&&Math.abs(this._frictionVelocityY)<this.options.minFrictionVelocity){h=this.__stepThroughFriction(l,k)
}while((Math.abs(this._frictionVelocityX)>=this.options.minFrictionVelocity||Math.abs(this._frictionVelocityY)>=this.options.minFrictionVelocity)){h=this.__stepThroughFriction(l,k);
l=h.left;k=h.top;m.push(h)}if(l<this._minScrollLeft){l=this._minScrollLeft}else{if(l>this._maxScrollLeft){l=this._maxScrollLeft
}}if(k<this._minScrollTop){k=this._minScrollTop}else{if(k>this._maxScrollTop){k=this._maxScrollTop
}}m[m.length-1]={left:l,top:k};return m},calculateFinalInertiaPosition:function(){var g=this.calculateInertiaPositions();
if(g.length===0){return{left:this.__scrollLeft,top:this.__scrollTop}}return g[g.length-1]
}};f.exports=a},{"ac-base":false}],201:[function(b,c,a){var f=b("ac-event-emitter").EventEmitter;
function g(h){this._startingInputPosition=null;this._lastInputPosition=null;this._inputPositions=[];
this._scroll=h}var d=g.prototype=new f();d.inputStart=function(h,l,j,i){var k={x:h,y:l,timeStamp:j};
this._inputPositions.push(k);this._startingInputPosition=k;this.trigger("input_start",{timeStamp:j,originalEvent:i})
};d.inputMove=function(h,m,k,i){var l={x:h,y:m,timeStamp:k};this._inputPositions.push(l);
this._lastInputPosition=l;var j=this.getScrollValues();this.trigger("input_move",{scrollLeft:j.x,scrollTop:j.y,timeStamp:k,originalEvent:i})
};d.inputEnd=function(i,h){this.trigger("input_end",{lastInputPosition:this._lastInputPosition,inputPositions:this._inputPositions.slice(),timeStamp:i,originalEvent:h});
this._inputPositions=[];this._lastInputPosition=null};d.getScrollValues=function(){var j=this._inputPositions[this._inputPositions.length-2];
var i=(j.x-this._lastInputPosition.x)+this._scroll.scrollLeft;var h=(j.y-this._lastInputPosition.y)+this._scroll.scrollTop;
return{x:i,y:h}};c.exports=g},{"ac-event-emitter":false}],202:[function(d,f,b){var g=d("ac-base").Element;
var c=d("ac-base").Object;function a(h,i){this._inputController=h;this._element=i;
this._scrollTop=0;this._scrollLeft=0;this._timeout=null;this._hasStarted=false;
this._boundMouseWheelComplete=this.mouseWheelComplete.bind(this);this._lastEvent=null;
this._velocities=[]}a.prototype={mouseWheelComplete:function(){this._scrollTop=0;
this._scrollLeft=0;this._hasStarted=false;this._inputController.inputEnd(new Date().getTime(),this._lastEvent);
this._lastEvent=null},onMouseWheel:function(k){var i;var h;var j;if(this._hasStarted===false){this._inputController.inputStart(this._scrollLeft,this._scrollTop,k.timeStamp,k);
this._hasStarted=true}i=this._scrollTop+k.wheelDeltaY;h=this._scrollLeft+k.wheelDeltaX;
this._lastEvent=c.clone(k);this._scrollTop=i;this._scrollLeft=h;this._inputController.inputMove(this._scrollLeft,this._scrollTop,k.timeStamp,k);
window.clearTimeout(this._timeout);this._timeout=window.setTimeout(this._boundMouseWheelComplete,100)
},bindDOMEvents:function(){g.addEventListener(this._element,"mousewheel",this.onMouseWheel.bind(this))
}};f.exports=a},{"ac-base":false}],203:[function(c,d,a){var f=c("ac-base").Element;
function b(g,h){this._input=g;this._element=h}b.prototype={bindDOMEvents:function(){var g=this._input;
var h=this._element;f.addEventListener(h,"touchstart",function(i){if(i.touches&&i.touches[0]&&i.touches[0].target&&i.touches[0].target.tagName.match(/input|textarea|select/i)){return
}g.inputStart(i.touches[0].pageX,i.touches[0].pageY,i.timeStamp,i)},false);f.addEventListener(h,"touchmove",function(i){g.inputMove(i.touches[0].pageX,i.touches[0].pageY,i.timeStamp,i)
},false);f.addEventListener(h,"touchend",function(i){g.inputEnd(i.timeStamp,i)},false);
f.addEventListener(h,"touchcancel",function(i){g.inputEnd(i.timeStamp,i)},false)
}};d.exports=b},{"ac-base":false}],204:[function(b,c,a){var f=b("ac-event-emitter").EventEmitter;
function g(){this.scrollLeft=0;this.scrollTop=0}var d=g.prototype=new f();d.scrollTo=function(i,h){if(i===this.scrollLeft&&h===this.scrollTop){return
}this.scrollLeft=i;this.scrollTop=h;this.trigger("scroll",{scrollTop:h,scrollLeft:i})
};c.exports=g},{"ac-event-emitter":false}],205:[function(b,c,a){c.exports.InlineStyleRenderer=b("./ac-style-renderer/InlineStyleRenderer");
c.exports.LogRenderer=b("./ac-style-renderer/LogRenderer")},{"./ac-style-renderer/InlineStyleRenderer":206,"./ac-style-renderer/LogRenderer":207}],206:[function(d,f,c){var a=(function(){var h,g;
if(a){return}g=document.createElement("div");h=["transform","webkitTransform","MozTransform","msTransform","oTransform"];
h.some(function(i){if(i in g.style){a=i;return true}});return a})();var b={transformFunctions:["none","matrix","translate","translateX","translateY","scale","scaleX","scaleY","rotate","skewX","skewY","matrix3d","translate3d","translateZ","scale3d","scaleZ","rotate3d","rotateX","rotateY","rotateZ","perspective"],render:function(i,g){var h=this._parseProps(g);
h.forEach(function(j){i.style[j.prop]=j.value})},_mergeTransformProps:function(g){var h=g.reduce(this._partialPropValue.bind(this),"");
return{prop:a,value:h}},_partialPropValue:function(h,i){var j=this._parseTransformFunction(i.prop);
var g=[h," ",j,"(",i.value,")"].join("");return g},_parseTransformFunction:function(g){return g.replace("transform-","")
},_isTransformFunction:function(g){return this.transformFunctions.indexOf(g)!==-1
},_parseProps:function(l){var k=[];var j=[];var n;var m;var o;for(var h=0,g=l.length;
h<g;h++){o=l[h];n=this._isTransformFunction(o.prop);[].push.call(n?j:k,o)}if(j.length){m=this._mergeTransformProps(j);
k.push(m)}return k}};f.exports=b},{}],207:[function(b,c,a){c.exports={render:function(g,f){var d=(arguments.length<2)?g:f;
console.log(d)}}},{}],208:[function(b,c,a){a.Gallery=b("./ac-gallery/Gallery");
a.builder=b("./ac-gallery/builder");a.Trigger=b("./ac-gallery/controller/Trigger");
a.MediaSegue=b("./ac-gallery/segue/MediaSegue");a.MediaRenderer=b("./ac-gallery/segue/media/MediaRenderer");
a.AnimationSequenceSegue=b("./ac-gallery/segue/AnimationSequence");a.CSSTransitionSegue=b("./ac-gallery/segue/CSSTransition");
a.FadeInCSSTransition=b("./ac-gallery/segue/FadeInCSSTransition");a.fadeInKeyframesGenerator=b("./ac-gallery/keyframe/fadeInKeyframesGenerator");
a.crossFadeKeyframesGenerator=b("./ac-gallery/keyframe/crossFadeKeyframesGenerator");
a.showHideKeyframesGenerator=b("./ac-gallery/keyframe/showHideKeyframesGenerator");
a.horizontalSliderKeyframesGenerator=b("./ac-gallery/keyframe/horizontalSliderKeyframesGenerator");
a.Touch=b("./ac-gallery/controller/Touch")},{"./ac-gallery/Gallery":209,"./ac-gallery/builder":210,"./ac-gallery/controller/Touch":211,"./ac-gallery/controller/Trigger":212,"./ac-gallery/keyframe/crossFadeKeyframesGenerator":220,"./ac-gallery/keyframe/fadeInKeyframesGenerator":221,"./ac-gallery/keyframe/horizontalSliderKeyframesGenerator":222,"./ac-gallery/keyframe/showHideKeyframesGenerator":223,"./ac-gallery/segue/AnimationSequence":227,"./ac-gallery/segue/CSSTransition":228,"./ac-gallery/segue/FadeInCSSTransition":229,"./ac-gallery/segue/MediaSegue":230,"./ac-gallery/segue/media/MediaRenderer":233}],209:[function(b,a,g){var j=b("ac-deferred").Deferred;
var l=b("ac-event-emitter").EventEmitter;var c=b("ac-base").Object;var f=b("./generator/Timeline");
var k=b("./segue/Segue");var d={transitionDuration:0.4,transitionEasing:"linear",locks:true,endless:false};
function i(q,m){var p;m=m||{};if(!q){throw new TypeError("Could not create gallery, no keyframes were specified")
}this._keyboard=null;p=c.clone(d);this.setOptions(c.extend(p,m),{replace:true});
if(this.options.keyboard){this.setKeyboard(this.options.keyboard)}this._keyframes=q;
this._selected=0;this._locked=false;var o=this.getTransitionDuration();var n=k.create({duration:0});
this._keyframes[0].draw()}var h=i.prototype=new l();h.setOptions=function(n,m){m=m||{};
if(m.replace===true){this.options=n}else{this.options=c.extend(this.options,n)}return this
};h.getSelectedKeyframe=function(){return this._keyframes[this._selected]};h.getSelected=function(){return this.getSelectedKeyframe.apply(this,arguments)
};h.getKeyframes=function(){return this._keyframes};h.getKeyframeIndex=function(m){return this._keyframes.indexOf(m)
};h.addKeyframe=function(n,m){m=m||{};if(typeof m.index!=="number"){this._keyframes.push(n)
}else{this._keyframes.splice(m.index,0,n)}this._trigger("keyframeAdd",{keyframe:n,index:this.getKeyframeIndex(n)},m);
return this};h.removeKeyframe=function(n,m){var o;m=m||{};if(this.getSelected()===n){throw new Error("Could not remove keyframe, it is the current selected Keyframe instance.")
}o=this.getKeyframeIndex(n);this._keyframes.splice(o,1);this._trigger("keyframeRemove",{keyframe:n,index:o},m);
return this};h.containsKeyframe=function(m){return(this._keyframes.indexOf(m)!==-1)
};h.numKeyframes=function(){return this._keyframes.length};h.eachKeyframe=function(n,m){this._keyframes.forEach(function(){n.apply(m,arguments)
});return this};h.getNext=function(){var m=this.getSelectedIndex()+1;var n;if(this.isEndless()===true&&m===this.numKeyframes()){m=0
}n=this._keyframes[m];if(n===undefined){n=null}return n};h.getPrevious=function(){var m=this.getSelectedIndex()-1;
var n;if(this.isEndless()===true&&m<0){m=this.numKeyframes()-1}n=this._keyframes[m];
if(n===undefined){n=null}return n};h.getSelectedIndex=function(){return this._selected
};h.showNext=function(m){var p=new j();var o=this.getNext();var n=p.promise();if(o!==null){n=this.show(o,m)
}else{p.reject()}return n};h.showPrevious=function(m){var p=new j();var n=this.getPrevious();
var o=p.promise();if(n!==null){o=this.show(n,m)}else{p.reject()}return o};h.showFirst=function(m){var n=this.getFirst();
return this.show(n,m)};h.showLast=function(m){return this.show(this.getLast(),m)
};h.getLastIndex=function(){return this._keyframes.length-1};h.getLast=function(){return this._keyframes[this.getLastIndex()]
};h._trigger=function(m,o,n){if(n.silent===true){return}o.target=this;this.trigger(m,o)
};h.getTransitionDuration=function(){return this.options.transitionDuration};h.setTransitionDuration=function(o,n){var m=this.options.transitionDuration;
this.options.transitionDuration=o;this._trigger("transition-duration-change",{previous:m,duration:o},n||{})
};h.setTransitionEasing=function(o,m){var n=this.options.transitionEasing;this.options.transitionEasing=o;
this._trigger("transition-easing-change",{previous:n,easing:o},m||{})};h.toTimeline=function(o,n){var m=new f(this,o,n);
return m.getTimeline()};h.getFirst=function(){return this._keyframes[0]};h.getLocked=function(){return this._locked
};h.isLocked=function(){return this.getLocked()};h.setLocked=function(m){this._locked=m;
return this._locked};h.getEngaged=function(){return this._engaged};h.setEngaged=function(m){this._engaged=m;
return this._engaged};h.isEndless=function(){return this.options.endless};h.show=function(q,o){var t=new j();
var n;var m;var p;var r=k.create({duration:this.options.transitionDuration,easing:this.options.transitionEasing});
var s=t.promise();o=o||{};if(this.options.locks===true&&this.isLocked()===true){t.reject();
return s}this._locked=true;n=this._keyframes[this._selected];if(typeof q==="number"){m=this._keyframes[q]
}else{if(typeof q==="string"){m=this._keyframes.filter(function(u){return(u.id===q)
})[0]}else{m=q}}if(m===null){throw new TypeError('Could not show Keyframe with supplied query. Query "'+q+'" returned no items.')
}else{if(m===n){t.resolve();this._locked=false;return s}}p=c.extend({outgoing:n,incoming:m},o);
this._trigger("willShow",p,o);if(o.useTransition===false){s=s.then(this._afterShow.bind(this,n,m,p,o));
t.resolve();return s}return r.play(n,m).then(this._afterShow.bind(this,n,m,p,o))
};h.hasKeyboard=function(){return this._keyboard!==null};h.getKeyboard=function(){return this._keyboard
};h.setKeyboard=function(m){if(this._keyboard!==null){this._keyboard.removeKeyDown();
this._keyboard.removeKeyUp()}this._keyboard=m;return this};h.keyboardAddKeyDown=function(){this._keyboard.addKeyDown.apply(this._keyboard,arguments);
return this};h.keyboardAddKeyUp=function(){this._keyboard.addKeyUp.apply(this._keyboard,arguments);
return this};h.keyboardRemoveKeyDown=function(){this._keyboard.removeKeyDown.apply(this._keyboard,arguments);
return this};h.keyboardRemoveKeyUp=function(){this._keyboard.removeKeyUp.apply(this._keyboard,arguments);
return this};h.showPrevious=function(m){var p=new j();var n=this.getPrevious();
var o=p.promise();if(n!==null){o=this.show(n,m)}else{p.reject()}return o};h._afterShow=function(o,m,p,n){this.eachKeyframe(function(r,q){if(r.id===m.id){this._selected=q
}},this);this._locked=false;return this._trigger("didShow",p,n)};a.exports=i},{"./generator/Timeline":213,"./segue/Segue":231,"ac-base":false,"ac-event-emitter":false}],210:[function(j,b,y){var z=j("ac-base").Object;
var x=j("ac-base").Element;var l=j("ac-base").Environment;var s=j("ac-keyboard");
var g=j("ac-keyframe").Keyframe;var k;try{k=j("ac-analytics").observer.Gallery}catch(t){}var p=j("./Gallery");
var d=j("./controller/Trigger");var h=j("./observer/TriggerPainter");var i=j("./observer/PreviousNextTriggerPainter");
var a=j("./observer/ElementTracker");var w=j("./keyboard/defaultMap");var r=j("./keyframe/crossFadeKeyframesGenerator");
var m=j("./keyframe/showHideKeyframesGenerator");var f=j("./touch/builder");var c="Could not create gallery: there are both custom keyframes and keyframe elements specified";
var q="Could not create gallery: there are no keyframes or elements to generate keyframes from";
var o="Could not create gallery: there is no touch element, but requested touches to be turned on";
var v="Could not create gallery: triggerSelector should be a string";var u={locks:true,shouldUseKeyboard:true,keyboardMap:w};
b.exports=function n(J){J=J||{};J=z.extend(z.clone(u),J);var D=J.keyframes||[];
var G=J.keyframeElements||[];var L=J.shouldUseKeyboard||true;var E,K,C,A,H,B,I,F;
if(J.keyframes&&J.keyframeElements){throw new Error(c)}if(!D||D.length===0){if(G.length===0){throw new Error(q)
}else{G=Array.prototype.slice.call(G);if(l.Feature.cssPropertyAvailable("opacity")&&l.Feature.cssPropertyAvailable("transition")){D=r(G)
}else{D=m(G)}}}J.keyboard=J.keyboard||new s.Keyboard();if(J.shouldUseKeyboard!==true){J.keyboard=undefined
}K=new p(D,J);if(K.hasKeyboard()){K.keyboardAddKeyDown(J.keyboardMap,K)}if(x.isElement(J.engagementElement)){B=new a(K,J.engagementElement)
}if(J.triggerSelector){if(typeof J.triggerSelector!=="string"){throw new Error(v)
}else{C=new d({gallery:K,el:J.triggerSelector});A=(J.activeTriggerClassname)?new h(K,J.triggerSelector,J.activeTriggerClassname):new h(K,J.triggerSelector);
K.on("willShow",A._paint,A);if(!K.isEndless()){H=new i(A);K.on("willShow",H._paint,H)
}}}if(J.touch){if(l.Feature.touchAvailable()&&J.touch!==false){if(!x.isElement(J.touchElement)){throw new Error(o)
}else{I=f(J.touchElement,K,J)}}}if(typeof k==="function"){F=new k(K,((typeof J.analytics==="object")?J.analytics:{}))
}E={gallery:K,elementTracker:B,trigger:C,triggerPainter:A,touchController:I,analytics:F};
return E}},{"./Gallery":209,"./controller/Trigger":212,"./keyboard/defaultMap":219,"./keyframe/crossFadeKeyframesGenerator":220,"./keyframe/showHideKeyframesGenerator":223,"./observer/ElementTracker":224,"./observer/PreviousNextTriggerPainter":225,"./observer/TriggerPainter":226,"./touch/builder":236,"ac-base":false,"ac-keyboard":192,"ac-keyframe":272}],211:[function(f,c,i){var g=f("ac-base").Object;
var h=f("ac-scrollview").ScrollView;var l=f("./../touch/TimelineRenderer");var a=f("ac-animation-sequencer").BasicPlayer;
var m=f("ac-animation-sequencer").TweenClip;var j=f("ac-base").EasingFunctions;
var k=f("ac-scrollview").ScrollBounds;var b=f("./../touch/GalleryGrid");function d(p,n,o){var q={axis:"x",scrollVelocity:1};
this._element=p;this.options=g.extend(q,o||{});this._gallery=n;this._axisString=(this.options.axis==="x")?"left":"top";
if(!this._gallery){throw new TypeError('Could not instantiate Touch Controller. "'+this._gallery+'" is not a valid gallery')
}this._player=this.options.player||new a(n.toTimeline(this.options.bounceOutKeyframe,this.options.bounceInKeyframe));
this._player.setCurrentTime(this._gallery.getTransitionDuration());this._inertiaPlayer=null;
this._enRoute=false;this._runningIndex=this._gallery.getSelectedIndex();this._scrollView=this.options.scrollView||this.__buildScrollView();
this._scrollRenderer=this.options.scrollRenderer||this.__buildScrollRenderer();
this._scrollRenderer.render(this._scrollView.scrollLeft);this._gallery.on("didShow",this.onDidShow,this);
this._scrollView.on("scrollStart",this.onScrollStart,this);this._scrollView.on("inertiaStart",this.onInertiaStart,this);
this._scrollView.on("scroll",this.onScroll,this)}d.prototype={__generateEasingFunction:function(n){return function(q,o,p,r){return j.easeOutBack(q,o,p,r,n)
}},__buildScrollView:function(){var p=this._element.offsetWidth/this.options.scrollVelocity;
var n=this._element.offsetHeight/this.options.scrollVelocity;var o=g.extend(g.clone(this.options),{innerWidth:p*this._gallery.numKeyframes(),innerHeight:n*this._gallery.numKeyframes(),startBounceDistance:p,endBounceDistance:p,touchContainerWidth:p,touchContainerHeight:n});
return new h(this._element,o)},__buildScrollRenderer:function(){var n=g.extend(g.clone(this.options),{bounceDuration:this._gallery.getTransitionDuration()});
return new l(this._player,this._scrollView,n)},getAxis:function(){return this.options.axis||"x"
},getScrollView:function(){return this._scrollView},onDidShow:function(){var n=this._gallery.getSelectedIndex();
this._runningIndex=n;this._scrollView.scrollTo(n*this._scrollView.getTouchContainerWidth(),n*this._scrollView.getTouchContainerHeight())
},onScrollStart:function(){if(this._inertiaPlayer&&typeof this._inertiaPlayer.pause==="function"){this._inertiaPlayer.pause()
}this._scrollStartTimeout=window.setTimeout(function(){this._gallery.trigger("touchStart")
}.bind(this),100)},onScroll:function(p){var o=p.scrollLeft;var n=p.scrollTop;this._scrollRenderer.render(o,n);
this._gallery.trigger("scroll",{scrollLeft:o,scrollTop:n})},onInertiaStart:function(v){v.preventDefault();
this._gallery.trigger("touchEnd");var u=v.inertia;var o=new b(this._gallery,this._scrollView);
var p=new k(u,this._runningIndex,o.getGrid(),this.options);var t=u.calculateFinalInertiaPosition();
var r=p.calculateTargetIndex();var x=0.4;var s=p.calculateFuturePositions().left;
var A=3;var n=Math.abs(p.calculateFuturePositions().left-v.position.left);if(n!==0){x*=(Math.abs(n)/this._scrollView.getTouchContainerWidth())
}if((r-this._runningIndex)!==0){x=x/Math.abs(r-this._runningIndex)}var z=(Math.abs(n)/this._scrollView.getTouchContainerWidth());
var q=0;if(x<0.32&&x>0.15){x+=0.2;q=1.4}else{if(x<=0.15){x+=0.3;q=1.7}}if(q<0){q=0
}else{if(q>A){q=A}}var w=Math.abs(v.velocity.top)-3;if(w<0){w=0}else{if(w>A){w=A
}}var y=new m(x,[{property:"scrollLeft",from:v.position.left,to:p.calculateFuturePositions().left,easing:this.__generateEasingFunction(q)},{property:"scrollTop",from:v.position.top,to:p.calculateFuturePositions().top,easing:this.__generateEasingFunction(w)}]);
if(this._inertiaPlayer){this._inertiaPlayer.off("ended")}this._inertiaPlayer=new a(y);
y.on("tween_update",function(B){this._scrollView.scrollTo(B.scrollLeft,B.scrollTop)
},this);this._inertiaPlayer.play();this._inertiaPlayer.on("ended",function(){this._enRoute=false;
this._gallery.show(r,{useTransition:false,interactionEvent:v.originalEvent})},this);
this._runningIndex=r;this._enRoute=true}};c.exports=d},{"./../touch/GalleryGrid":234,"./../touch/TimelineRenderer":235,"ac-animation-sequencer":157,"ac-base":false,"ac-scrollview":196}],212:[function(c,d,b){var f=c("ac-base").Element;
var h=c("ac-base").Event;function a(i){i=i||{};this._el=i.el||"";this._id=i.id||"href";
this._method=i.method||"data-method";this.setGallery(i.gallery)}var g=a.prototype;
g.setGallery=function(i){this._gallery=i;if(this._gallery!==undefined){this._addListener()
}};g.getGallery=function(){return this._gallery};g.setEl=function(i){this._el=i;
this._removeListener();if(this._gallery!==undefined){this._addListener()}};g.getEl=function(){return this._el
};g.destroy=function(){this._removeListener();this.func=function(){}};g._addListener=function(){if(this._el!==""){this.func=this._onClickTrigger.bind(this);
f.addEventDelegate(document,"click",this._el,this.func)}};g._removeListener=function(){if(this.func){f.removeEventDelegate(document,"click",this._el,this.func);
this.func=null}};g._onClickTrigger=function(i){h.stop(i.originalEvent);this._click(i.currentTarget,i.originalEvent)
};g._click=function(j,i){var l={interactionEvent:i};if(j.getAttribute(this._method)){var m=j.getAttribute(this._method);
if(typeof this._gallery[m]==="function"){this._gallery[m].call(this._gallery,l)
}else{throw new Error(m+" is not a valid method to call")}}else{if(j.getAttribute(this._id)){var k=j.getAttribute(this._id).split("#")[1];
if(k!==""){this._gallery.show(k,l)}else{throw new Error("Trigger has no ID or method")
}}else{throw new Error("Trigger has no ID or method")}}};d.exports=a},{"ac-base":false}],213:[function(c,b,g){var i=c("ac-animation-sequencer").Timeline;
var h=c("ac-keyframe").Interpolation;var j=c("./../segue/media/MediaClip");var f=c("ac-animation-sequencer").TimedClip;
var a=c("ac-animation-sequencer").CompositeClip;i.clipTypes.Media=j;function d(k,m,l){this._gallery=k;
this._bounceOutKeyframe=m;this._bounceInKeyframe=l}d.prototype={getGallery:function(){return this._gallery
},getTimeline:function(){var m;var k=[];var o=this._gallery.getKeyframes().slice(0);
if(this._bounceInKeyframe){o.unshift(this._bounceInKeyframe)}if(this._bounceOutKeyframe){o.push(this._bounceOutKeyframe)
}var n=new h();n.setDuration(this._gallery.getTransitionDuration());for(var l=1;
l<o.length;l+=1){n.setStartKeyframe(o[l-1]).setEndKeyframe(o[l]);m=n.getClip();
m=new f(m,{startDelay:(l-1)*this._gallery.getTransitionDuration(),fill:"none"});
k.push(m)}return new a(k)}};b.exports=d},{"./../segue/media/MediaClip":232,"ac-animation-sequencer":157,"ac-keyframe":272}],214:[function(f,g,c){var h=f("./../helper/isTransformProperty");
var b=f("./../helper/camelCaseToHyphen");var a=f("./../helper/canTransitionStyle");
var d={zIndex:true,display:true,visibility:true,position:true};g.exports=function(q,l,n,m){var p=[];
var i=false;var k=n;var o=l;m=(typeof m==="number")?" "+m+"s":"";var j=m;q.forEach(function(r){var s=r.property;
if(d[s]===true){return}var u=(typeof r.easing==="string")?r.easing:n;var v=(typeof r.duration==="number")?r.duration:l;
var t=(typeof r.delay==="number")?" "+r.delay+"s":m;if(!a(s)){return}if(!h(s)){p.push(b(s)+" "+v+"s "+u+t)
}else{o=v;k=u;j=t;i=true}});if(i===true){p.push("-webkit-transform "+l+"s "+k+j)
}return p.join(",")}},{"./../helper/camelCaseToHyphen":215,"./../helper/canTransitionStyle":216,"./../helper/isTransformProperty":217}],215:[function(b,c,a){c.exports=function(d){return d.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()
}},{}],216:[function(b,c,a){var d=["display"];c.exports=function(f){return(d.indexOf(f)===-1)
}},{}],217:[function(b,d,a){var c=["matrix","translate","translateX","translateY","scale","scaleX","scaleY","rotate","skewX","skewY","matrix3d","translate3d","translateZ","scale3d","scaleZ","rotate3d","rotateX","rotateY","rotateZ","perspective"];
d.exports=function(f){return(c.indexOf(f)!==-1)}},{}],218:[function(f,g,a){var d=f("ac-deferred").Deferred;
var c=f("./buildTransitionString");var i=f("ac-style-renderer").InlineStyleRenderer;
var h=f("ac-base").Element;var b=f("ac-base").Object;g.exports=function(n,s,m,p,o){var j=new d();
var k=c(s,m,p,o);var q=[];var l;var r=function(t){if(t.target===n){h.removeVendorPrefixEventListener(n,"transitionEnd",r);
h.setVendorPrefixStyle(n,"transition","none");window.requestAnimationFrame(j.resolve.bind(j))
}};if(k!==""&&m!==0){h.addVendorPrefixEventListener(n,"transitionEnd",r);l=h.getVendorPrefixStyle(n,"transition")+",";
if(!/none/.test(l)&&l!==","){k=l+k}h.setVendorPrefixStyle(n,"transition",k)}else{window.requestAnimationFrame(j.resolve.bind(j))
}s.forEach(function(t){var u=b.clone(t);u.prop=u.property;if(u.units){u.value+=u.units
}q.push(u)});i.render(n,q);return j.promise()}},{"./buildTransitionString":214,"ac-base":false,"ac-style-renderer":205}],219:[function(b,c,a){var d=b("ac-keyboard").keys;
var f={};f[d.ARROW_LEFT]=function(g){g.preventDefault();if(this.getEngaged()){this.showPrevious({interactionEvent:g})
}};f[d.ARROW_RIGHT]=function(g){g.preventDefault();if(this.getEngaged()){this.showNext({interactionEvent:g})
}};c.exports=f},{"ac-keyboard":192}],220:[function(c,d,a){var f=c("ac-keyframe").Keyframe;
var b=c("ac-base").Object;var g={zIndex:1};d.exports=function(j,h){var i=[];h=b.extend(b.clone(g),h||{});
j.forEach(function(k,m){var l=[];j.forEach(function(n,o){l.push({element:n,props:[{property:"opacity",value:(o===m)?1:0},{property:"z-index",value:(o===m)?(h.zIndex+1):h.zIndex}]})
});i.push(new f(k.id,l))});return i}},{"ac-base":false,"ac-keyframe":272}],221:[function(c,d,a){var g=c("ac-keyframe").Keyframe;
var f=c("./../segue/FadeInCSSTransition");var h=c("./../segue/CSSTransition");var b=c("ac-base").Object;
var i={zIndex:1};d.exports=function(l,j){var k=[];j=b.extend(b.clone(i),j||{});
l.forEach(function(m,o){var n=[];l.forEach(function(p,q){n.push({SegueType:f,element:p,props:[{property:"opacity",value:(q===o)?"1":"0"},{property:"zIndex",value:(q===o)?(j.zIndex+1):j.zIndex}]})
});k.push(new g(m.id,n))});return k}},{"./../segue/CSSTransition":228,"./../segue/FadeInCSSTransition":229,"ac-base":false,"ac-keyframe":272}],222:[function(c,d,b){var h=c("ac-base").Environment.Feature;
var f=c("ac-keyframe").Keyframe;var g=c("./../segue/CSSTransition");var a=c("./../segue/AnimationSequence");
d.exports=function(o){var l=(h.cssPropertyAvailable("transform"))?"translateX":"left";
var m=(h.cssPropertyAvailable("transition"))?g:a;var j={keyframes:[],bounceInKeyframe:null,bounceOutKeyframe:null};
var n=o[0].offsetWidth;o.forEach(function(p,r){var q=[];o.forEach(function(s,t){q.push({element:s,SegueType:m,props:[{property:l,value:-(n*r),units:"px"}]})
});j.keyframes.push(new f(p.id,q))});var i=[];o.forEach(function(p,q){i.push({element:p,props:[{property:l,value:n,units:"px"}]})
});j.bounceInKeyframe=new f("bounceIn",i);var k=[];o.forEach(function(p,q){k.push({element:p,props:[{property:l,value:-(n*(o.length)),units:"px"}]})
});j.bounceOutKeyframe=new f("bounceOut",k);return j}},{"./../segue/AnimationSequence":227,"./../segue/CSSTransition":228,"ac-base":false,"ac-keyframe":272}],223:[function(b,a,d){var h=b("ac-keyframe").Keyframe;
var f=b("ac-animation-sequencer").ElementClip;var j=b("ac-animation-sequencer").BaseClip;
var g=b("ac-animation-sequencer").Timeline;var c=b("ac-base").Object;var i=function(){f.apply(this,arguments)
};i.prototype=new j();c.extend(i.prototype,f.prototype);i.prototype.update=function(l){if(this.props.length<1){return
}var k=this.props.map(function(o){var m=o.units;var n=o.to;n=(m?(n+m):n);return{prop:o.property,value:n}
});this._renderer.render(this.el,k)};i.create=function(k){return new i(k)};g.clipTypes.Gallery_ShowHide=i;
a.exports=function(l){var k=[];l.forEach(function(m,o){var n=[];l.forEach(function(p,q){n.push({element:p,clipType:"Gallery_ShowHide",props:[{property:"display",value:(q===o)?"block":"none"}]})
});k.push(new h(m.id,n))});return k}},{"ac-animation-sequencer":157,"ac-base":false,"ac-keyframe":272}],224:[function(b,c,a){var d=b("ac-base").Element;
var f=b("ac-element-tracker");function g(h,i){if(!d.isElement(i)){return}this._gallery=h;
this._elementTracker=f;var j=this._elementTracker.addElement({element:i,inViewThreshold:0.33});
this._gallery.setEngaged(false);j.on("thresholdenter",this._onEnterWithinThreshold,this);
j.on("thresholdexit",this._onExitWithinThreshold,this);this._elementTracker.start();
return this}g.prototype._onEnterWithinThreshold=function(h){this._gallery.setEngaged(true)
};g.prototype._onExitWithinThreshold=function(h){this._gallery.setEngaged(false)
};c.exports=g},{"ac-base":false,"ac-element-tracker":189}],225:[function(c,d,b){var f=c("ac-base").Element;
function a(h){if(h.getGallery()&&h.getGallery().isEndless()){return}this.triggerPainter=h;
var i={incoming:h.getGallery().getSelected()};this._paint(i)}var g=a.prototype;
g._paint=function(j){var m=j.incoming.id;var n=this.triggerPainter;var i=n.getGallery();
var o=n.getTriggerSelector();var l=f.selectAll(o+"[data-method]");var k=f.selectAll(o+'[data-method="showPrevious"]');
var h=f.selectAll(o+'[data-method="showNext"]');if(l){n._unpaintTriggers(l,"disabled");
if(m===i.getFirst().id){n._paintTriggers(k,"disabled")}else{if(m===i.getLast().id){n._paintTriggers(h,"disabled")
}}}};d.exports=a},{"ac-base":false}],226:[function(c,d,b){var f=c("ac-base").Element;
function a(i,j,k){this.setGallery(i);this.setTriggerSelector(j);k=k||"current";
this.setActiveTriggerClassname(k);var h={incoming:this._gallery.getSelected()};
this._paint(h)}var g=a.prototype;g.setGallery=function(h){this._gallery=h};g.getGallery=function(){return this._gallery
};g.setTriggerSelector=function(h){this._triggerSelector=h};g.getTriggerSelector=function(){return this._triggerSelector
};g.setActiveTriggerClassname=function(h){this._activeTriggerClassname=h};g.getActiveTriggerClassname=function(){return this._activeTriggerClassname
};g._paint=function(i){var k=i.incoming.id;var m=this.getTriggerSelector();var h=this.getActiveTriggerClassname();
var j=f.selectAll(m+"."+h);var l=f.selectAll(m+'[href="#'+k+'"]');this._unpaintTriggers(j,h);
this._paintTriggers(l,h)};g._paintTriggers=function(m,l){var k,h,j;for(k=0,h=m.length;
k<h;k+=1){j=m[k];f.addClassName(j,l)}};g._unpaintTriggers=function(m,l){var k,h,j;
for(k=0,h=m.length;k<h;k+=1){j=m[k];f.removeClassName(j,l)}};d.exports=a},{"ac-base":false}],227:[function(d,f,b){var h=d("ac-animation-sequencer").Timeline;
var a=d("ac-animation-sequencer").BasicPlayer;var c=d("ac-deferred").Deferred;var g=d("ac-keyframe").Interpolation;
function i(k,j,l,m){this._from=k;this._to=j;this._duration=l;this._easing=m}i.prototype={animate:function(){var m=new c();
var n=this._easing;var j=new g();j.setDuration(this._duration).setStartKeyframe(this._from).setEndKeyframe(this._to);
var l=j.getClip();var k=new a(l);k.once("ended",m.resolve,m);k.play();return m.promise()
}};i.create=function(j){return new i(j.from,j.to,j.duration,j.easing)};f.exports=i
},{"ac-animation-sequencer":157,"ac-keyframe":272}],228:[function(c,d,b){var g=c("./../helper/playCSSTransition");
var a=c("ac-deferred");function f(h,i,j,k){this._toKeyframe=h;this._fromKeyframe=i;
this._duration=j;this._easing=k}f.prototype={animate:function(){var i=this._duration;
var j=this._easing;var h=this._toKeyframe.getStyles().map(function(k){return g(k.element,k.props,i,j)
});return a.all(h)}};f.create=function(h){return new f(h.to,h.from,h.duration,h.easing)
};d.exports=f},{"./../helper/playCSSTransition":218}],229:[function(c,b,d){var h=c("./../helper/playCSSTransition");
var f=c("ac-deferred");var g=c("ac-keyframe").Keyframe;var a=c("ac-style-renderer").InlineStyleRenderer;
function i(l){var k={prop:l.property,value:l.value,units:l.units};return k}function j(k,l,m,n){this._toKeyframe=k;
this._fromKeyframe=l;this._duration=m;this._easing=n;this._beforeStyles=[];this._afterStyles=[]
}j.prototype={_renderBeforeStyles:function(){this._beforeStyles.forEach(function(k){a.render(k.element,k.props.map(i))
})},_renderAfterStyles:function(){this._afterStyles.forEach(function(k){a.render(k.element,k.props.map(i))
})},_processIncomingStyle:function(o){var m;var q=this._toKeyframe.findStyle(o.element,"zIndex");
var p=this._fromKeyframe;var n=this._beforeStyles;var k=this._afterStyles;var l={element:o.element,props:[]};
o.props.forEach(function(r){if(r.property==="opacity"){m=p.findStyle(o.element,r.property).value;
if(parseFloat(m)<parseFloat(r.value)){l.props.push(r);if(q){n.push({element:o.element,props:[q]})
}}else{k.push({element:o.element,props:[r]});if(q){k[k.length-1].props.push(q)}}}else{l.props.push(r)
}});return l},animate:function(){var m=this._duration;var p=this._easing;var o=this._fromKeyframe;
var n=this._toKeyframe;var l=this._toKeyframe.getStyles().map(this._processIncomingStyle.bind(this));
this._renderBeforeStyles();var k=l.map(function(q){return h(q.element,q.props,m,p)
});return f.all(k).then(this._renderAfterStyles.bind(this))}};j.create=function(k){return new j(k.to,k.from,k.duration,k.easing)
};b.exports=j},{"./../helper/playCSSTransition":218,"ac-keyframe":272,"ac-style-renderer":205}],230:[function(c,d,b){var a=c("ac-deferred");
var f=c("ac-animation-sequencer").Pause;var h=c("ac-animation-sequencer").ReversibleVideo;
function g(k,j,i){this._from=k;this._to=j;this._duration=i}g.prototype={animate:function(){var i=[];
var j=this._duration;var k=this._from;this._to.getStyles().forEach(function(l){l.props.forEach(function(s){var n;
var r;var m;var p;var o;var q;if(s.property==="time"){r=new a.Deferred();p=k.findStyle(l.element,s.property);
o=(p.value<s.value)?1:-1;n=new h(l.element);if(s.value!==0){m=new f(n,[0,s.value]);
m._monitor._init();m.once("pauseenter",function(){m=undefined;r.resolve()})}else{if(s.value===0){q=function(){if(l.element.currentTime===0){r.resolve()
}l.element.removeEventListener("timeupdate",q)};l.element.addEventListener("timeupdate",q)
}else{if(s.value===this.element.duration){q=function(){if(l.element.currentTime===this.element.duration){r.resolve()
}l.element.removeEventListener("timeupdate",q)};l.element.addEventListener("timeupdate",q)
}}}n.playbackRate=(Math.abs(p.value-s.value)/j)*o;n.play();i.push(r.promise())}})
});return a.all(i)}};g.create=function(i){return new g(i.from,i.to,i.duration,i.easing)
};d.exports=g},{"ac-animation-sequencer":157}],231:[function(c,b,d){var a=c("./CSSTransition");
var k=c("./AnimationSequence");var j=c("./../helper/playCSSTransition");var f=c("ac-deferred");
var h=f.Deferred;var g=c("ac-keyframe").Keyframe;function i(l,m){this._duration=l;
this._easing=m||"linear"}i.prototype={_determineSegueType:function(m){var l;if(m.SegueType!==undefined){l=m.SegueType
}else{if(typeof m.clipType!=="undefined"&&m.clipType!=="Element"){l=k}else{l=a}}return l
},_sortPropertiesBySegueType:function(m){var n=[];function l(o){for(var p=0;p<n.length;
p+=1){if(n[p].Type===o){return n[p]}}}m.getStyles().forEach(function(p){var q=this._determineSegueType(p);
var o=l(p.SegueType);if(!o){o={Type:q,properties:[]};n.push(o)}o.properties.push({clipType:p.clipType,element:p.element,props:p.props})
}.bind(this));return n},_transition:function(s,n){var p=[];var l;var m=this._duration;
var o=this._easing;if(this._duration===0){return n.draw()}var q=(m===0)?n.clone():s.diff(n);
var r=this._sortPropertiesBySegueType(q);var t=this._sortPropertiesBySegueType(n.diff(s));
r.forEach(function(w,u){var y=new g("to",w.properties);var x=new g("from",t[u].properties);
var v=w.Type.create({duration:m,easing:o,to:y,from:x});p.push(v.animate())});return f.all(p)
},getDuration:function(){return this._duration},setDuration:function(l){this._duration=l;
return this},getEasing:function(){return this._easing},setEasing:function(l){this._easing=l;
return this},play:function(m,l){return this._transition(m,l)}};i.create=function(l){return new i(l.duration,l.easing,l)
};b.exports=i},{"./../helper/playCSSTransition":218,"./AnimationSequence":227,"./CSSTransition":228,"ac-keyframe":272}],232:[function(f,g,c){var a=f("ac-animation-sequencer").TweenClip;
var i=f("./MediaRenderer");var d=f("ac-base").Object;function b(){a.apply(this,arguments)
}var h=b.prototype=new a();b.create=function(j){j=j||{};if(!j.element){throw new TypeError("MediaClip could not be created: "+j.element+" is not a valid element")
}j.renderer=new i(j.element);return new b(j)};g.exports=b},{"./MediaRenderer":233,"ac-animation-sequencer":157,"ac-base":false}],233:[function(b,c,a){function f(g){this._element=g
}var d=f.prototype;d.render=function(h,g){g.forEach(function(i){if(i.prop==="time"){if(h.currentTime!==i.value){h.currentTime=i.value
}}})};c.exports=f},{}],234:[function(c,d,b){function a(f,g){this._gallery=f;this._scrollView=g
}a.prototype={getGrid:function(){var g={left:[],top:[]};for(var f=0;f<this._gallery.numKeyframes();
f+=1){g.left.push(this._scrollView.getTouchContainerWidth()*f);g.top.push(this._scrollView.getTouchContainerHeight()*f)
}return g}};d.exports=a},{}],235:[function(c,f,a){var b=c("ac-base").Object;var g={axis:"x",bounceDuration:0};
function d(i,j,h){this.options=b.extend(g,h||{});this._player=i;this._touchScrollBounds=j
}d.prototype={_calculateScrollPercentage:function(i,h){return{left:i/this._touchScrollBounds.getScrollXDistance(),top:h/this._touchScrollBounds.getScrollYDistance()}
},calculateCurrentTime:function(k,j){var h=this._calculateScrollPercentage(k,j);
var l=(this.options.axis==="x")?"left":"top";var i=(this._player.getDuration()-(this.options.bounceDuration*2))*h[l];
return this.options.bounceDuration+i},render:function(i,h){this._player.setCurrentTime(this.calculateCurrentTime(i,h));
return this}};f.exports=d},{"ac-base":false}],236:[function(b,c,a){var d=b("ac-base").Element;
var f=b("./../controller/Touch");c.exports=function g(k,i,j){j=j||{};var h=new f(k,i,j);
return h}},{"./../controller/Touch":211,"ac-base":false}],237:[function(b,c,a){c.exports=b(157)
},{"./ac-animation-sequencer/Clock":238,"./ac-animation-sequencer/PlayerMonitor":239,"./ac-animation-sequencer/Timeline":240,"./ac-animation-sequencer/Tween":241,"./ac-animation-sequencer/adapters/ReversibleVideo":244,"./ac-animation-sequencer/clip/BaseClip":245,"./ac-animation-sequencer/clip/CompositeClip":246,"./ac-animation-sequencer/clip/ElementClip":247,"./ac-animation-sequencer/clip/TimedClip":248,"./ac-animation-sequencer/clip/TweenClip":249,"./ac-animation-sequencer/clip/VideoClip":250,"./ac-animation-sequencer/controllers/MediaGroup":251,"./ac-animation-sequencer/controllers/Pause":252,"./ac-animation-sequencer/player/BasicPlayer":253,"./ac-animation-sequencer/player/MediaPlayer":254}],238:[function(b,c,a){c.exports=b(158)
},{}],239:[function(b,c,a){c.exports=b(159)},{"./vendor/utils":257,"ac-event-emitter":false}],240:[function(b,c,a){c.exports=b(160)
},{"./clip/CompositeClip":246,"./clip/ElementClip":247,"./clip/TimedClip":248,"./clip/TweenClip":249}],241:[function(b,c,a){c.exports=b(161)
},{"./vendor/EasingFunctions":255,"./vendor/KeySpline":256,"./vendor/utils":257}],242:[function(b,c,a){c.exports=b(162)
},{}],243:[function(b,c,a){c.exports=b(163)},{"ac-event-emitter":false}],244:[function(b,c,a){c.exports=b(164)
},{"ac-event-emitter":false}],245:[function(b,c,a){c.exports=b(165)},{"../vendor/EasingFunctions":255,"../vendor/KeySpline":256,"ac-event-emitter":false,"ac-style-renderer":269}],246:[function(b,c,a){c.exports=b(166)
},{"./TimedClip":248}],247:[function(b,c,a){c.exports=b(167)},{"../Tween":241,"../vendor/utils":257,"./BaseClip":245,"ac-style-renderer":269}],248:[function(b,c,a){c.exports=b(168)
},{"../vendor/utils":257}],249:[function(b,c,a){c.exports=b(169)},{"./BaseClip":245}],250:[function(b,c,a){c.exports=b(170)
},{"../adapters/MediaAsClip":242}],251:[function(b,c,a){c.exports=b(171)},{"../Clock":238,"../vendor/utils":257,"ac-event-emitter":false}],252:[function(b,c,a){c.exports=b(172)
},{"../PlayerMonitor":239,"ac-event-emitter":false}],253:[function(b,c,a){c.exports=b(173)
},{"../Clock":238,"../adapters/PlayerAsMedia":243,"ac-event-emitter":false}],254:[function(b,c,a){c.exports=b(174)
},{"./BasicPlayer":253}],255:[function(b,c,a){c.exports=b(175)},{}],256:[function(b,c,a){c.exports=b(176)
},{}],257:[function(b,c,a){c.exports=b(177)},{}],258:[function(b,c,a){c.exports=b(178)
},{}],259:[function(b,c,a){c.exports={clone:b("./ac-object/clone"),create:b("./ac-object/create"),defaults:b("./ac-object/defaults"),extend:b("./ac-object/extend"),getPrototypeOf:b("./ac-object/getPrototypeOf"),isDate:b("./ac-object/isDate"),isEmpty:b("./ac-object/isEmpty"),isRegExp:b("./ac-object/isRegExp"),toQueryParameters:b("./ac-object/toQueryParameters")}
},{"./ac-object/clone":260,"./ac-object/create":261,"./ac-object/defaults":262,"./ac-object/extend":263,"./ac-object/getPrototypeOf":264,"./ac-object/isDate":265,"./ac-object/isEmpty":266,"./ac-object/isRegExp":267,"./ac-object/toQueryParameters":268}],260:[function(b,c,a){c.exports=b(180)
},{"./extend":263}],261:[function(b,d,a){var f=function(){};d.exports=function c(g){if(arguments.length>1){throw new Error("Second argument not supported")
}if(g===null||typeof g!=="object"){throw new TypeError("Object prototype may only be an Object.")
}if(typeof Object.create==="function"){return Object.create(g)}else{f.prototype=g;
return new f()}}},{}],262:[function(b,c,a){var f=b("./extend");c.exports=function d(h,g){if(typeof h!=="object"){throw new TypeError("defaults: must provide a defaults object")
}g=g||{};if(typeof g!=="object"){throw new TypeError("defaults: options must be a typeof object")
}return f({},h,g)}},{"./extend":263}],263:[function(b,c,a){c.exports=b(182)},{}],264:[function(b,c,a){c.exports=b(183)
},{}],265:[function(b,d,a){d.exports=function c(f){return Object.prototype.toString.call(f)==="[object Date]"
}},{}],266:[function(b,c,a){c.exports=b(184)},{}],267:[function(c,d,b){d.exports=function a(f){return window.RegExp?f instanceof RegExp:false
}},{}],268:[function(b,c,a){c.exports=b(185)},{qs:258}],269:[function(b,c,a){c.exports=b(205)
},{"./ac-style-renderer/InlineStyleRenderer":270,"./ac-style-renderer/LogRenderer":271}],270:[function(b,c,a){c.exports=b(206)
},{}],271:[function(b,c,a){c.exports=b(207)},{}],272:[function(b,c,a){c.exports={Keyframe:b("./ac-keyframe/Keyframe"),Interpolation:b("./ac-keyframe/Interpolation")}
},{"./ac-keyframe/Interpolation":273,"./ac-keyframe/Keyframe":274}],273:[function(b,c,a){var f=b("ac-animation-sequencer").Timeline;
function d(){this._start=null;this._end=null;this._duration=null}d.prototype={_mergeToClip:function(){var i=this._start;
var j=this._end;var g=this._duration;var h=function(l){var k={element:l.element,clip:l.clipType||"Element",duration:g,props:[]};
l.props.forEach(function(o){var n={property:o.property,from:o.value,to:o.value,easing:o.easing||"linear"};
if(o.units){n.units=o.units}var m=i.findStyle(l.element,o.property);if(m){n.from=m.value
}k.props.push(n)});return k};return j.getStyles().map(h)},setStartKeyframe:function(g){this._start=g;
return this},setEndKeyframe:function(g){this._end=g;return this},setDuration:function(g){this._duration=g;
return this},getClip:function(){return f.create(this._mergeToClip())}};c.exports=d
},{"ac-animation-sequencer":237}],274:[function(c,d,a){var h=c("./helper/isTransformProperty");
var i=c("ac-deferred");var b=c("ac-object");var g=c("ac-animation-sequencer").Timeline;
function f(l,k,j){this.id=l;this._styles=k;this.options=j||{}}f.prototype={clone:function(){return new f(this.id,this._styles,this.options)
},findStyle:function(k,l){var j=null;this._styles.forEach(function(m){if(m.element===k){m.props.forEach(function(n){if(n.property===l){j=n
}})}});return j},getStyles:function(){return this._styles},__rafDraw:function(j,k){window.requestAnimationFrame(function(){j.update(j.getDuration());
k.resolve()})},draw:function(){var j=[];this.getStyles().forEach(function(m){var l=m.clipType||"Element";
var k=g.clipTypes[l];var o=[];var p=new i.Deferred();m.props.forEach(function(r){var q=b.clone(r);
q.from=q.to=q.value;q.easing="linear";o.push(q)});var n=k.create({element:m.element,props:o});
this.__rafDraw(n,p);j.push(p.promise())}.bind(this));return i.all(j)},diff:function(k){var j=[];
var o;var m=this.getStyles();var l=k.getStyles();var n;m.forEach(function(u,q){var r=u.element;
var s=u.props;var v={};var t=false;for(var p in l[q]){if(l[q].hasOwnProperty(p)){v[p]=l[q][p]
}}v.props=[];s.forEach(function(y){var w=y.property;var x=k.findStyle(r,w);if(x===null){v.props.push(y)
}else{if(x.value!==y.value||(h(w)&&t===true)){v.props.push(x);if(h(w)){t=true}}}});
if(v.props.length>0){j.push(v)}});return new f("diff",j,this.options)}};d.exports=f
},{"./helper/isTransformProperty":275,"ac-animation-sequencer":237,"ac-object":259}],275:[function(b,d,a){var c=["skew","scale","rotate","translateX","translateY","translateZ"];
d.exports=function(f){return(c.indexOf(f)!==-1)}},{}],276:[function(b,f,a){var d=b("./ac-ajax/Ajax");
var c=b("./ac-ajax/Request");f.exports=new d();f.exports.Ajax=d;f.exports.Request=c
},{"./ac-ajax/Ajax":277,"./ac-ajax/Request":278}],277:[function(b,f,a){var d=b("./Request");
var c=function(){};c._Request=d;c.prototype={_defaults:{timeout:5000},_extend:function(){for(var h=1;
h<arguments.length;h++){for(var g in arguments[h]){if(arguments[h].hasOwnProperty(g)){arguments[0][g]=arguments[h][g]
}}}return arguments[0]},_getOptions:function(g,h){return this._extend({},this._defaults,h,g)
},create:function(g){return new d(g)},get:function(g){g=this._getOptions({method:"get"},g);
return this.create(g).send()},getJSON:function(g){return this.get(g).then(function(h){return JSON.parse(h.responseText)
})},head:function(g){g=this._getOptions({method:"head"},g);return this.create(g).send()
},post:function(g){g=this._getOptions({method:"post"},g);return this.create(g).send()
}};f.exports=c},{"./Request":278}],278:[function(b,d,a){var c=function(f){this._initialize(f)
};c.prototype={_addReadyStateChangeHandler:function(){this.xhr.onreadystatechange=function(f){if(this.xhr.readyState===4){clearTimeout(this._timeout);
if(this.xhr.status>=200&&this.xhr.status<300){this.resolve(this.xhr)}else{this.reject(this.xhr)
}}}.bind(this)},_getPromise:function(){this.promise=new Promise(function(g,f){this.resolve=g;
this.reject=f}.bind(this))},_initialize:function(h){var g=this._validateConfiguration(h);
if(g){throw g}this._configuration=h;var f=this._configuration.method.toUpperCase();
this.xhr=new XMLHttpRequest();this._getPromise();this.xhr.open(f,this._configuration.url);
this._setRequestHeaders(h.headers);this._addReadyStateChangeHandler()},_sendXHR:function(){if(this.xhr){if(this._configuration&&this._configuration.data){this.xhr.send(this._configuration.data)
}else{this.xhr.send()}}},_setRequestHeaders:function(f){if(f){f.forEach(function(g){this.xhr.setRequestHeader(g.name,g.value)
},this)}},_setTimeout:function(f){if(!f){if(this._configuration&&this._configuration.timeout){f=this._configuration.timeout
}else{clearTimeout(this._timeout);this._timeout=null}}if(this._timeout!==null){clearTimeout(this._timeout)
}if(f>0){this._timeout=setTimeout(function(){this.xhr.abort();this.reject()}.bind(this),f)
}},_timeout:null,_validateConfiguration:function(h){if(!h){return"Must provide a configuration object"
}var g=[];var f=h.headers;if(!h.url){g.push("Must provide a url")}if(!h.method){g.push("Must provide a method")
}if(f){if(!Array.isArray(f)){return"Must provide an array of headers"}this._validateHeaders(f,g)
}return g.join(", ")},_validateHeaders:function(h,j){for(var g=0,f=h.length;g<f;
g++){if(!h[g].hasOwnProperty("name")||!h[g].hasOwnProperty("value")){j.push("Must provide a name and value key for all headers");
break}}},promise:null,reject:null,resolve:null,send:function(){this._setTimeout();
this._sendXHR();return this.promise},xhr:null};d.exports=c},{}],279:[function(require,module,exports){(function(process,global){(function(){var _slice=Array.prototype.slice;
try{_slice.call(document.documentElement)}catch(e){Array.prototype.slice=function(begin,end){end=(typeof end!=="undefined")?end:this.length;
if(Object.prototype.toString.call(this)==="[object Array]"){return _slice.call(this,begin,end)
}var i,cloned=[],size,len=this.length;var start=begin||0;start=(start>=0)?start:len+start;
var upTo=(end)?end:len;if(end<0){upTo=len+end}size=upTo-start;if(size>0){cloned=new Array(size);
if(this.charAt){for(i=0;i<size;i++){cloned[i]=this.charAt(start+i)}}else{for(i=0;
i<size;i++){cloned[i]=this[start+i]}}}return cloned}}}());
/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/
if(typeof document!=="undefined"&&!("classList" in document.createElement("a"))){(function(view){if(!("HTMLElement" in view)&&!("Element" in view)){return
}var classListProp="classList",protoProp="prototype",elemCtrProto=(view.HTMLElement||view.Element)[protoProp],objCtr=Object,strTrim=String[protoProp].trim||function(){return this.replace(/^\s+|\s+$/g,"")
},arrIndexOf=Array[protoProp].indexOf||function(item){var i=0,len=this.length;for(;
i<len;i++){if(i in this&&this[i]===item){return i}}return -1},DOMEx=function(type,message){this.name=type;
this.code=DOMException[type];this.message=message},checkTokenAndGetIndex=function(classList,token){if(token===""){throw new DOMEx("SYNTAX_ERR","An invalid or illegal string was specified")
}if(/\s/.test(token)){throw new DOMEx("INVALID_CHARACTER_ERR","String contains an invalid character")
}return arrIndexOf.call(classList,token)},ClassList=function(elem){var trimmedClasses=strTrim.call(elem.className),classes=trimmedClasses?trimmedClasses.split(/\s+/):[],i=0,len=classes.length;
for(;i<len;i++){this.push(classes[i])}this._updateClassName=function(){elem.className=this.toString()
}},classListProto=ClassList[protoProp]=[],classListGetter=function(){return new ClassList(this)
};DOMEx[protoProp]=Error[protoProp];classListProto.item=function(i){return this[i]||null
};classListProto.contains=function(token){token+="";return checkTokenAndGetIndex(this,token)!==-1
};classListProto.add=function(){var tokens=arguments,i=0,l=tokens.length,token,updated=false;
do{token=tokens[i]+"";if(checkTokenAndGetIndex(this,token)===-1){this.push(token);
updated=true}}while(++i<l);if(updated){this._updateClassName()}};classListProto.remove=function(){var tokens=arguments,i=0,l=tokens.length,token,updated=false;
do{token=tokens[i]+"";var index=checkTokenAndGetIndex(this,token);if(index!==-1){this.splice(index,1);
updated=true}}while(++i<l);if(updated){this._updateClassName()}};classListProto.toggle=function(token,forse){token+="";
var result=this.contains(token),method=result?forse!==true&&"remove":forse!==false&&"add";
if(method){this[method](token)}return !result};classListProto.toString=function(){return this.join(" ")
};if(objCtr.defineProperty){var classListPropDesc={get:classListGetter,enumerable:true,configurable:true};
try{objCtr.defineProperty(elemCtrProto,classListProp,classListPropDesc)}catch(ex){if(ex.number===-2146823252){classListPropDesc.enumerable=false;
objCtr.defineProperty(elemCtrProto,classListProp,classListPropDesc)}}}else{if(objCtr[protoProp].__defineGetter__){elemCtrProto.__defineGetter__(classListProp,classListGetter)
}}}(self))}if(document.createEvent){try{new window.CustomEvent("click")}catch(err){window.CustomEvent=(function(){function CustomEvent(event,params){params=params||{bubbles:false,cancelable:false,detail:undefined};
var evt=document.createEvent("CustomEvent");evt.initCustomEvent(event,params.bubbles,params.cancelable,params.detail);
return evt}CustomEvent.prototype=window.Event.prototype;return CustomEvent}())}}if(!Function.prototype.bind){Function.prototype.bind=function(originalContext){if(typeof this!=="function"){throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable")
}var applicableArgs=Array.prototype.slice.call(arguments,1);var functionToBind=this;
var fnOriginalPrototype=function(){};var fnBound=function(){return functionToBind.apply((this instanceof fnOriginalPrototype&&originalContext)?this:originalContext,applicableArgs.concat(Array.prototype.slice.call(arguments)))
};fnOriginalPrototype.prototype=this.prototype;fnBound.prototype=new fnOriginalPrototype();
return fnBound}}if(!Array.isArray){Array.isArray=function isArray(object){return(object&&typeof object==="object"&&"splice" in object&&"join" in object)
}}if(!Array.prototype.every){Array.prototype.every=function every(callback,thisObj){var arrayObject=Object(this);
var len=arrayObject.length>>>0;var i;if(typeof callback!=="function"){throw new TypeError(callback+" is not a function")
}for(i=0;i<len;i+=1){if(i in arrayObject&&!callback.call(thisObj,arrayObject[i],i,arrayObject)){return false
}}return true}}if(!Array.prototype.filter){Array.prototype.filter=function filter(callback,thisObj){var arrayObject=Object(this);
var len=arrayObject.length>>>0;var i;var results=[];if(typeof callback!=="function"){throw new TypeError(callback+" is not a function")
}for(i=0;i<len;i+=1){if(i in arrayObject&&callback.call(thisObj,arrayObject[i],i,arrayObject)){results.push(arrayObject[i])
}}return results}}if(!Array.prototype.forEach){Array.prototype.forEach=function forEach(callback,thisObj){var arrayObject=Object(this);
var i;var currentValue;if(typeof callback!=="function"){throw new TypeError("No function object passed to forEach.")
}for(i=0;i<this.length;i+=1){currentValue=arrayObject[i];callback.call(thisObj,currentValue,i,arrayObject)
}}}if(!Array.prototype.indexOf){Array.prototype.indexOf=function indexOf(searchElement,fromIndex){var startIndex=fromIndex||0;
var currentIndex=0;if(startIndex<0){startIndex=this.length+fromIndex-1;if(startIndex<0){throw"Wrapped past beginning of array while looking up a negative start index."
}}for(currentIndex=0;currentIndex<this.length;currentIndex++){if(this[currentIndex]===searchElement){return currentIndex
}}return(-1)}}if(!Array.prototype.lastIndexOf){Array.prototype.lastIndexOf=function lastIndexOf(value,fromIndex){var arrayObj=Object(this);
var len=arrayObj.length>>>0;var i;fromIndex=parseInt(fromIndex,10);if(len<=0){return -1
}i=(typeof fromIndex==="number")?Math.min(len-1,fromIndex):len-1;i=i>=0?i:len-Math.abs(i);
for(;i>=0;i-=1){if(i in arrayObj&&value===arrayObj[i]){return i}}return -1}}if(!Array.prototype.map){Array.prototype.map=function map(callback,thisObj){var arrayObj=Object(this);
var len=arrayObj.length>>>0;var i;var result=new Array(len);if(typeof callback!=="function"){throw new TypeError(callback+" is not a function")
}for(i=0;i<len;i+=1){if(i in arrayObj){result[i]=callback.call(thisObj,arrayObj[i],i,arrayObj)
}}return result}}if(!Array.prototype.reduce){Array.prototype.reduce=function reduce(callback,initialValue){var arrayObj=Object(this);
var len=arrayObj.length>>>0;var i=0;var result;if(typeof callback!=="function"){throw new TypeError(callback+" is not a function")
}if(typeof initialValue==="undefined"){if(!len){throw new TypeError("Reduce of empty array with no initial value")
}result=arrayObj[0];i=1}else{result=initialValue}while(i<len){if(i in arrayObj){result=callback.call(undefined,result,arrayObj[i],i,arrayObj);
i+=1}}return result}}if(!Array.prototype.reduceRight){Array.prototype.reduceRight=function reduceRight(callback,initialValue){var arrayObj=Object(this);
var len=arrayObj.length>>>0;var i=len-1;var result;if(typeof callback!=="function"){throw new TypeError(callback+" is not a function")
}if(initialValue===undefined){if(!len){throw new TypeError("Reduce of empty array with no initial value")
}result=arrayObj[len-1];i=len-2}else{result=initialValue}while(i>=0){if(i in arrayObj){result=callback.call(undefined,result,arrayObj[i],i,arrayObj);
i-=1}}return result}}if(!Array.prototype.some){Array.prototype.some=function some(callback,thisObj){var arrayObj=Object(this);
var len=arrayObj.length>>>0;var i;if(typeof callback!=="function"){throw new TypeError(callback+" is not a function")
}for(i=0;i<len;i+=1){if(i in arrayObj&&callback.call(thisObj,arrayObj[i],i,arrayObj)===true){return true
}}return false}}if(!Date.now){Date.now=function now(){return new Date().getTime()
}}if(!Date.prototype.toISOString){Date.prototype.toISOString=function toISOString(){if(!isFinite(this)){throw new RangeError("Date.prototype.toISOString called on non-finite value.")
}var parts={year:this.getUTCFullYear(),month:this.getUTCMonth()+1,day:this.getUTCDate(),hours:this.getUTCHours(),minutes:this.getUTCMinutes(),seconds:this.getUTCSeconds(),mseconds:(this.getUTCMilliseconds()/1000).toFixed(3).substr(2,3)};
var prop;var prefix;for(prop in parts){if(parts.hasOwnProperty(prop)&&prop!=="year"&&prop!=="mseconds"){parts[prop]=String(parts[prop]).length===1?"0"+String(parts[prop]):String(parts[prop])
}}if(parts.year<0||parts.year>9999){prefix=parts.year<0?"-":"+";parts.year=prefix+String(Math.abs(parts.year/1000000)).substr(2,6)
}return parts.year+"-"+parts.month+"-"+parts.day+"T"+parts.hours+":"+parts.minutes+":"+parts.seconds+"."+parts.mseconds+"Z"
}}if(!Date.prototype.toJSON){Date.prototype.toJSON=function(key){var obj=Object(this);
var prim;var isPrimitive=function(input){var type=typeof input;var types=[null,"undefined","boolean","string","number"].some(function(value){return value===type
});if(types){return true}return false};var toPrimitive=function(input){var value;
if(isPrimitive(input)){return input}value=(typeof input.valueOf==="function")?input.valueOf():(typeof input.toString==="function")?input.toString():null;
if(value&&isPrimitive(value)){return value}throw new TypeError(input+" cannot be converted to a primitive")
};prim=toPrimitive(obj);if(typeof prim==="number"&&!isFinite(prim)){return null
}if(typeof obj.toISOString!=="function"){throw new TypeError("toISOString is not callable")
}return obj.toISOString.call(obj)}}if(!String.prototype.trim){String.prototype.trim=function trim(){return this.replace(/^\s+|\s+$/g,"")
}}if(!Object.keys){Object.keys=function keys(obj){var keysArray=[];var currentKey;
if((!obj)||(typeof obj.hasOwnProperty!=="function")){throw"Object.keys called on non-object."
}for(currentKey in obj){if(obj.hasOwnProperty(currentKey)){keysArray.push(currentKey)
}}return keysArray}}if(typeof JSON=="undefined"||!("stringify" in JSON&&"parse" in JSON)){if(!this.JSON){this.JSON={}
}(function(){function f(n){return n<10?"0"+n:n}if(typeof String.prototype.toJSON!=="function"){String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()
}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;
function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];
return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];
if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)
}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);
case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);
case"object":if(!value){return"null"}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;
for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";
gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;
i+=1){k=rep[i];if(typeof k==="string"){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)
}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);
if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";
gap=mind;return v}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;
gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space
}}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")
}return str("",{"":value})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;
function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);
if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)
}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");
return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")
}}}())}window.matchMedia=window.matchMedia||(function(doc,undefined){var bool,docElem=doc.documentElement,refNode=docElem.firstElementChild||docElem.firstChild,fakeBody=doc.createElement("body"),div=doc.createElement("div");
div.id="mq-test-1";div.style.cssText="position:absolute;top:-100em";fakeBody.style.background="none";
fakeBody.appendChild(div);return function(q){div.innerHTML='&shy;<style media="'+q+'"> #mq-test-1 { width:42px; }</style>';
docElem.insertBefore(fakeBody,refNode);bool=div.offsetWidth===42;docElem.removeChild(fakeBody);
return{matches:bool,media:q}}}(document));(function(){var lastTime=0;var vendors=["ms","moz","webkit","o"];
for(var x=0;x<vendors.length&&!window.requestAnimationFrame;++x){window.requestAnimationFrame=window[vendors[x]+"RequestAnimationFrame"];
window.cancelAnimationFrame=window[vendors[x]+"CancelAnimationFrame"]||window[vendors[x]+"CancelRequestAnimationFrame"]
}if(!window.requestAnimationFrame){window.requestAnimationFrame=function(callback,element){var currTime=Date.now();
var timeToCall=Math.max(0,16-(currTime-lastTime));var id=window.setTimeout(function(){callback(currTime+timeToCall)
},timeToCall);lastTime=currTime+timeToCall;return id}}if(!window.cancelAnimationFrame){window.cancelAnimationFrame=function(id){clearTimeout(id)
}}}());window.XMLHttpRequest=window.XMLHttpRequest||function(){var request;try{request=new ActiveXObject("Msxml2.XMLHTTP")
}catch(exception){try{request=new ActiveXObject("Microsoft.XMLHTTP")}catch(exception){request=false
}}return request};!function(){var a,b,c,d;!function(){var e={},f={};a=function(a,b,c){e[a]={deps:b,callback:c}
},d=c=b=function(a){function c(b){if("."!==b.charAt(0)){return b}for(var c=b.split("/"),d=a.split("/").slice(0,-1),e=0,f=c.length;
f>e;e++){var g=c[e];if(".."===g){d.pop()}else{if("."===g){continue}d.push(g)}}return d.join("/")
}if(d._eak_seen=e,f[a]){return f[a]}if(f[a]={},!e[a]){throw new Error("Could not find module "+a)
}for(var g,h=e[a],i=h.deps,j=h.callback,k=[],l=0,m=i.length;m>l;l++){"exports"===i[l]?k.push(g={}):k.push(b(c(i[l])))
}var n=j.apply(this,k);return f[a]=g||n}}(),a("promise/all",["./utils","exports"],function(a,b){function c(a){var b=this;
if(!d(a)){throw new TypeError("You must pass an array to all.")}return new b(function(b,c){function d(a){return function(b){f(a,b)
}}function f(a,c){h[a]=c,0===--i&&b(h)}var g,h=[],i=a.length;0===i&&b([]);for(var j=0;
j<a.length;j++){g=a[j],g&&e(g.then)?g.then(d(j),c):f(j,g)}})}var d=a.isArray,e=a.isFunction;
b.all=c}),a("promise/asap",["exports"],function(a){function b(){return function(){process.nextTick(e)
}}function c(){var a=0,b=new i(e),c=document.createTextNode("");return b.observe(c,{characterData:!0}),function(){c.data=a=++a%2
}}function d(){return function(){j.setTimeout(e,1)}}function e(){for(var a=0;a<k.length;
a++){var b=k[a],c=b[0],d=b[1];c(d)}k=[]}function f(a,b){var c=k.push([a,b]);1===c&&g()
}var g,h="undefined"!=typeof window?window:{},i=h.MutationObserver||h.WebKitMutationObserver,j="undefined"!=typeof global?global:void 0===this?window:this,k=[];
g="undefined"!=typeof process&&"[object process]"==={}.toString.call(process)?b():i?c():d(),a.asap=f
}),a("promise/config",["exports"],function(a){function b(a,b){return 2!==arguments.length?c[a]:(c[a]=b,void 0)
}var c={instrument:!1};a.config=c,a.configure=b}),a("promise/polyfill",["./promise","./utils","exports"],function(a,b,c){function d(){var a;
a="undefined"!=typeof global?global:"undefined"!=typeof window&&window.document?window:self;
var b="Promise" in a&&"resolve" in a.Promise&&"reject" in a.Promise&&"all" in a.Promise&&"race" in a.Promise&&function(){var b;
return new a.Promise(function(a){b=a}),f(b)}();b||(a.Promise=e)}var e=a.Promise,f=b.isFunction;
c.polyfill=d}),a("promise/promise",["./config","./utils","./all","./race","./resolve","./reject","./asap","exports"],function(a,b,c,d,e,f,g,h){function i(a){if(!v(a)){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
}if(!(this instanceof i)){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
}this._subscribers=[],j(a,this)}function j(a,b){function c(a){o(b,a)}function d(a){q(b,a)
}try{a(c,d)}catch(e){d(e)}}function k(a,b,c,d){var e,f,g,h,i=v(c);if(i){try{e=c(d),g=!0
}catch(j){h=!0,f=j}}else{e=d,g=!0}n(b,e)||(i&&g?o(b,e):h?q(b,f):a===D?o(b,e):a===E&&q(b,e))
}function l(a,b,c,d){var e=a._subscribers,f=e.length;e[f]=b,e[f+D]=c,e[f+E]=d}function m(a,b){for(var c,d,e=a._subscribers,f=a._detail,g=0;
g<e.length;g+=3){c=e[g],d=e[g+b],k(b,c,d,f)}a._subscribers=null}function n(a,b){var c,d=null;
try{if(a===b){throw new TypeError("A promises callback cannot return that same promise.")
}if(u(b)&&(d=b.then,v(d))){return d.call(b,function(d){return c?!0:(c=!0,b!==d?o(a,d):p(a,d),void 0)
},function(b){return c?!0:(c=!0,q(a,b),void 0)}),!0}}catch(e){return c?!0:(q(a,e),!0)
}return !1}function o(a,b){a===b?p(a,b):n(a,b)||p(a,b)}function p(a,b){a._state===B&&(a._state=C,a._detail=b,t.async(r,a))
}function q(a,b){a._state===B&&(a._state=C,a._detail=b,t.async(s,a))}function r(a){m(a,a._state=D)
}function s(a){m(a,a._state=E)}var t=a.config,u=(a.configure,b.objectOrFunction),v=b.isFunction,w=(b.now,c.all),x=d.race,y=e.resolve,z=f.reject,A=g.asap;
t.async=A;var B=void 0,C=0,D=1,E=2;i.prototype={constructor:i,_state:void 0,_detail:void 0,_subscribers:void 0,then:function(a,b){var c=this,d=new this.constructor(function(){});
if(this._state){var e=arguments;t.async(function(){k(c._state,d,e[c._state-1],c._detail)
})}else{l(this,d,a,b)}return d},"catch":function(a){return this.then(null,a)}},i.all=w,i.race=x,i.resolve=y,i.reject=z,h.Promise=i
}),a("promise/race",["./utils","exports"],function(a,b){function c(a){var b=this;
if(!d(a)){throw new TypeError("You must pass an array to race.")}return new b(function(b,c){for(var d,e=0;
e<a.length;e++){d=a[e],d&&"function"==typeof d.then?d.then(b,c):b(d)}})}var d=a.isArray;
b.race=c}),a("promise/reject",["exports"],function(a){function b(a){var b=this;
return new b(function(b,c){c(a)})}a.reject=b}),a("promise/resolve",["exports"],function(a){function b(a){if(a&&"object"==typeof a&&a.constructor===this){return a
}var b=this;return new b(function(b){b(a)})}a.resolve=b}),a("promise/utils",["exports"],function(a){function b(a){return c(a)||"object"==typeof a&&null!==a
}function c(a){return"function"==typeof a}function d(a){return"[object Array]"===Object.prototype.toString.call(a)
}var e=Date.now||function(){return(new Date).getTime()};a.objectOrFunction=b,a.isFunction=c,a.isArray=d,a.now=e
}),b("promise/polyfill").polyfill()}()}).call(this,require("JkpR2F"),typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})
},{JkpR2F:537}],280:[function(b,c,a){b("ac-polyfills");c.exports.Asset=b("./ac-asset-loader/AssetLoader/Asset");
c.exports.Asset.Ajax=b("./ac-asset-loader/AssetLoader/Asset/Ajax");c.exports.Asset.Ajax.JSON=b("./ac-asset-loader/AssetLoader/Asset/Ajax/JSON");
c.exports.Asset.Img=b("./ac-asset-loader/AssetLoader/Asset/Img");c.exports.Asset.Video=b("./ac-asset-loader/AssetLoader/Asset/Video");
c.exports.Asset.Video.Element=b("./ac-asset-loader/AssetLoader/Asset/Video/Element");
c.exports.Asset.Binary=b("./ac-asset-loader/AssetLoader/Asset/Binary");c.exports.Asset.Binary.Chunk=b("./ac-asset-loader/AssetLoader/Asset/Binary/Chunk");
c.exports.AssetLoader=b("./ac-asset-loader/AssetLoader");c.exports.AssetLoader.Queue=b("./ac-asset-loader/AssetLoader/Queue")
},{"./ac-asset-loader/AssetLoader":281,"./ac-asset-loader/AssetLoader/Asset":282,"./ac-asset-loader/AssetLoader/Asset/Ajax":283,"./ac-asset-loader/AssetLoader/Asset/Ajax/JSON":284,"./ac-asset-loader/AssetLoader/Asset/Binary":285,"./ac-asset-loader/AssetLoader/Asset/Binary/Chunk":286,"./ac-asset-loader/AssetLoader/Asset/Img":287,"./ac-asset-loader/AssetLoader/Asset/Video":288,"./ac-asset-loader/AssetLoader/Asset/Video/Element":289,"./ac-asset-loader/AssetLoader/Queue":290,"ac-polyfills":279}],281:[function(b,a,h){var j;
var g=b("ac-object");var o=b("ac-event-emitter").EventEmitter;var n=b("./AssetLoader/Asset/Ajax");
var f=b("./AssetLoader/Asset/Ajax/JSON");var i=b("./AssetLoader/Asset/Img");var m=b("./AssetLoader/Asset/Video");
var l=b("../utils/destroy");var c=b("./AssetLoader/Queue");var d={};function k(r,p){this.options=g.defaults(d,p||{});
var q=this._generateAssets(r);this._queue=new c(q,this.options);this._timeoutDuration=this.options.timeout;
this._timeout=null;this._proxyListeners()}j=k.prototype=new o();j.load=function(){if(this._timeoutDuration){this._timeout=window.setTimeout(this._onTimeout.bind(this),this._timeoutDuration)
}return this._queue.start()};j._clearTimeout=function(){window.clearTimeout(this._timeout);
this._timeout=null};j.pause=function(){this._clearTimeout();return this._queue.pause()
};j.destroy=function(){l(this,true)};j._onTimeout=function(){this._queue.abort();
this._queue.destroy();this.trigger("timeout")};j._generateAssets=function(q){if(this._boundGenerateAsset===undefined){this._boundGenerateAsset=this._generateAsset.bind(this)
}q=[].concat(q);var p=q.map(this._boundGenerateAsset);return p};j._generateAsset=function(q,p){if(k.isValidAsset(q)){q.index=p;
return q}if(typeof q!=="string"||q===""){return null}if(!!q.match(/\.json$/)){return new f(q,p)
}if(!!q.match(/\.(xml|txt)$/)){return new n(q,p)}return new i(q,p)};j._proxyListeners=function(){this._boundOnResolved=this._onResolved.bind(this);
this._boundOnRejected=this._onRejected.bind(this);this._boundOnProgress=this._onProgress.bind(this);
this._queue.on("resolved",this._boundOnResolved);this._queue.on("rejected",this._boundOnRejected);
this._queue.on("progress",this._boundOnProgress)};j._onResolved=function(p){this._clearTimeout();
this.trigger("loaded",p)};j._onRejected=function(p){this.trigger("error",p)};j._onProgress=function(p){this.trigger("progress",p)
};k.isValidAsset=function(p){return !!(p&&(typeof p.load==="function")&&(typeof p.destroy==="function"))
};k.isValidAssetLoader=function(p){return !!(p&&(typeof p.load==="function")&&(typeof p.pause==="function")&&(typeof p.destroy==="function"))
};a.exports=k},{"../utils/destroy":291,"./AssetLoader/Asset/Ajax":283,"./AssetLoader/Asset/Ajax/JSON":284,"./AssetLoader/Asset/Img":287,"./AssetLoader/Asset/Video":288,"./AssetLoader/Queue":290,"ac-event-emitter":false,"ac-object":346}],282:[function(d,g,b){var i;
var c=d("ac-deferred").Deferred;var h=d("ac-event-emitter").EventEmitter;var f=d("../../utils/destroy");
function a(k,j){this.src=k;this.index=j;this.data=null;this._boundOnLoad=this._onLoad.bind(this);
this._boundOnError=this._onError.bind(this)}i=a.prototype=new h();i.load=function(){this._load()
};i.destroy=function(){f(this)};i._load=function(){this.data={src:this.src};window.setTimeout(this._onLoad.bind(this),20)
};i._onLoad=function(){this.trigger("loaded",this)};i._onError=function(){this.trigger("error",this.data)
};g.exports=a},{"../../utils/destroy":291,"ac-event-emitter":false}],283:[function(d,g,b){var i;
var c=d("ac-ajax");var a=d("ac-object");var h=d("../Asset");function f(k,j){h.apply(this,arguments)
}i=f.prototype=a.create(h.prototype);i._load=function(){c.get({url:this.src}).then(this._boundOnLoad,this._boundOnError)
};i._onLoad=function(j){this.data=j.response;h.prototype._onLoad.call(this)};g.exports=f
},{"../Asset":282,"ac-ajax":276,"ac-object":346}],284:[function(c,d,b){var g;var a=c("ac-object");
var f=c("../Ajax");function h(i){f.apply(this,arguments)}g=h.prototype=a.create(f.prototype);
g._onLoad=function(j){try{f.prototype._onLoad.call(this,{response:JSON.parse(j.response)})
}catch(i){this._onError(i)}};d.exports=h},{"../Ajax":283,"ac-object":346}],285:[function(b,a,f){var k=b("ac-ajax");
var d=b("ac-object");var j=b("./Binary/Chunk");var i=b("./../Asset");var c={chunkSize:1024*1024};
function g(m,l){i.apply(this,arguments);this.options=d.defaults(c,l||{});this._totalSize=null;
this._rangeObjects={};this._contentType=null;this._request=null;this._numLoaded=0;
this._numRanges=0}var h=g.prototype=d.create(i.prototype);h.pause=function(){var l;
if(this._request!==null){this._request.xhr.abort()}for(l in this._rangeObjects){if(this._rangeObjects[l].isLoaded()===false){this._rangeObjects[l].pause()
}}};h._load=function(){if(this._boundQueueRangeRequests===undefined){this._boundQueueRangeRequests=this._queueRangeRequests.bind(this)
}if(this._totalSize===null){this._getMetaData().then(this._boundQueueRangeRequests)
}else{this._queueRangeRequests()}};h._getOrCreateRangeObject=function(n){var m=this._rangeObjects[n.toString()];
var l;var o;if(m===undefined){l=(this.options.chunkSize-1);o=n+l;if(o>this._totalSize){l=null
}m=this._rangeObjects[n.toString()]=new j(this.src,{start:n,length:l});this._numRanges+=1
}return m};h._onRangeLoad=function(){this._numLoaded+=1;if(this._numLoaded===this._numRanges){this._afterAllChunksLoaded()
}};h._queueRangeRequests=function(){var p;var o=[];var q;var l;var m;for(var n=0;
n<this._totalSize;n+=this.options.chunkSize){m=this._getOrCreateRangeObject(n);
m.on("loaded",this._onRangeLoad,this);m.load()}};h._afterAllChunksLoaded=function(){var l;
var n=[];for(var m in this._rangeObjects){n.push(this._rangeObjects[m].data)}l=new Blob(n,{type:this._contentType});
this.trigger("loaded",l)};h._afterHeadRequest=function(l){this._totalSize=parseInt(l.getResponseHeader(["Content-Length"]));
this._contentType=l.getResponseHeader(["Content-Type"]);this._request=null};h._getMetaData=function(){if(!this._boundAfterHeadRequest){this._boundAfterHeadRequest=this._afterHeadRequest.bind(this)
}this._request=k.create({method:"HEAD",url:this.src,timeout:2*1000});return this._request.send().then(this._boundAfterHeadRequest,this._boundOnError)
};a.exports=g},{"./../Asset":282,"./Binary/Chunk":286,"ac-ajax":276,"ac-object":346}],286:[function(b,a,f){var g;
var j=b("ac-ajax");var d=b("ac-object");var h=b("../../Asset");var c={start:0,length:null};
function i(l,k){h.apply(this,arguments);this.options=d.defaults(c,k||{});this._request=null;
this.data=null}g=i.prototype=d.create(h.prototype);g.pause=function(){if(this._request!==null){this._request.xhr.abort();
this._request=null}};g.isLoaded=function(){return(this.data!==null)};g._load=function(){this._request=j.create({url:this.src+"?"+this._buildQueryString(),method:"get",timeout:30*1000,headers:[{name:"Range",value:this._buildRangeString()}]});
this._request.xhr.responseType="arraybuffer";this._request.send().then(this._boundOnLoad)
};g._onLoad=function(k){this.data=k.response;this._request=null;h.prototype._onLoad.call(this,this.data)
};g._buildRangeString=function(){var k="bytes="+this.options.start+"-";if(this.options.length!==null){k+=(this.options.start+this.options.length)
}return k};g._buildQueryString=function(){var k=this.options.start.toString();if(this.options.length!==undefined){k+=(this.options.start+this.options.length)
}return k};a.exports=i},{"../../Asset":282,"ac-ajax":276,"ac-object":346}],287:[function(c,d,b){var g;
var a=c("ac-object");var f=c("../Asset");function h(j,i){f.apply(this,arguments)
}g=h.prototype=a.create(f.prototype);g._load=function(){var i=new Image();this.data=i;
this._boundOnLoad=this._onLoad.bind(this);i.onload=this._boundOnLoad;i.onerror=this._boundOnError;
i.src=this.src};d.exports=h},{"../Asset":282,"ac-object":346}],288:[function(b,a,g){var j;
var f=b("ac-feature");var d=b("ac-object");var h=b("./Binary");var k=b("../Asset");
var i=b("./Video/Element");var c={chunkSize:1024*1024,forceElementLoading:false};
function l(n,m){k.apply(this,arguments);this.options=d.defaults(c,m||{});this._binary=this.options.binary||this._createAssetType()
}j=l.prototype=d.create(k.prototype);j._canUseBlob=function(){return(window.Blob!==undefined&&window.URL!==undefined&&typeof window.URL.createObjectURL==="function"&&f.isDesktop()===true)
};j._createAssetType=function(){if(this._canUseBlob()&&this.options.forceElementLoading!==true){return new h(this.src,this.options)
}return new i(this.src,this.options)};j._load=function(){this._binary.on("loaded",this._boundOnLoad);
this._binary.on("error",this._boundOnError);this._binary.load()};j._onLoad=function(n){var m=n;
if(n instanceof window.Blob){m=this.options.element;if(!m){m=document.createElement("video")
}if(m.getAttribute("type")!==n.type){m.setAttribute("type",n.type)}m.src=window.URL.createObjectURL(n)
}k.prototype._onLoad.call(this,m)};j.pause=function(){this._binary.pause()};j.destroy=function(){this._binary.destroy();
k.prototype.destroy.call(this)};a.exports=l},{"../Asset":282,"./Binary":285,"./Video/Element":289,"ac-feature":154,"ac-object":346}],289:[function(b,a,g){var f=b("ac-feature");
var d=b("ac-object");var k=b("./../../../../utils/round");var j=b("./../../Asset");
var c={};function i(m,l){j.apply(this,arguments);this.options=d.defaults(c,l||{});
this._boundOnVideoProgress=null;this._boundOnTimeUpdate=null;this._boundOnCanPlayThrough=null;
this._videoDuration=null}var h=i.prototype=d.create(j.prototype);h._onVideoProgress=function(l){if(this.data&&this.data.buffered.length>0&&this._videoDuration&&k(this.data.buffered.end(0),4)===k(this._videoDuration,4)){this._unbindEvent("canplaythrough",this._boundOnCanPlayThrough);
this._unbindEvent("timeupdate",this._boundOnTimeUpdate);this._unbindEvent("progress",this._boundOnVideoProgress);
this._unbindEvent("loadedmetadata",this._boundMetaDataLoaded);this._boundOnVideoProgress=null;
this.data.muted=false;this._onLoad()}};h._onTimeUpdate=function(l){this.data.pause();
this.data.currentTime=0;this.data.removeEventListener("timeupdate",this._boundOnTimeUpdate);
this._boundOnTimeUpdate=null};h._onCanPlayThrough=function(l){if(this._boundOnTimeUpdate===null){this._boundOnTimeUpdate=this._onTimeUpdate.bind(this)
}if(f.isDesktop()){this.data.addEventListener("timeupdate",this._boundOnTimeUpdate);
this.data.play()}this._unbindEvent("canplaythrough",this._boundOnCanPlayThrough);
this._boundOnCanPlayThrough=null};h._onMetaDataLoaded=function(l){this._videoDuration=this.data.duration;
this._onVideoProgress(l)};h._load=function(){this.data=this.options.element;if(!this.data){this.data=document.createElement("video")
}this.data.muted=true;if(this.options.type){this.data.setAttribute("type",this.options.type)
}if(this._boundOnVideoProgress===null){this._boundOnVideoProgress=this._onVideoProgress.bind(this);
this._boundOnCanPlayThrough=this._onCanPlayThrough.bind(this);this._boundMetaDataLoaded=this._onMetaDataLoaded.bind(this);
this.data.addEventListener("progress",this._boundOnVideoProgress);this.data.addEventListener("canplaythrough",this._boundOnCanPlayThrough);
this.data.addEventListener("loadedmetadata",this._boundMetaDataLoaded)}this.data.setAttribute("preload","auto");
this.data.src=this.src;this.data.load()};h._unbindEvent=function(l,m){if(typeof m==="function"){this.data.removeEventListener(l,m)
}};h.pause=function(){this._unbindEvent("canplaythrough",this._boundOnCanPlayThrough);
this._unbindEvent("timeupdate",this._boundOnTimeUpdate);this._unbindEvent("progress",this._boundOnVideoProgress);
this._unbindEvent("loadedmetadata",this._boundMetaDataLoaded);this._boundOnVideoProgress=null;
this._boundOnCanPlayThrough=null;this._boundOnTimeUpdate=null;this._boundMetaDataLoaded=null;
this.data.removeAttribute("src");this.data=undefined;this.trigger("pause")};a.exports=i
},{"./../../../../utils/round":292,"./../../Asset":282,"ac-feature":154,"ac-object":346}],290:[function(b,a,g){var h;
var f=b("ac-object");var i=b("ac-deferred").Deferred;var k=b("ac-event-emitter").EventEmitter;
var j=b("../../utils/destroy");var d={threads:4};function c(m,l){this.options=f.defaults(d,l||{});
this._queue=m;this._active=[];this._allowedThreads=this.options.threads;this._availableThreads=this._allowedThreads;
this._deferred=new i();this._data=[];this.paused=true;this.loaded=false;this.promise=this._deferred.promise()
}h=c.prototype=new k();h.start=function(){var m=this._availableThreads;var l;this.paused=false;
if(m>this._queue.length){m=this._queue.length}for(l=1;l<=m;l++){this._startNewThread()
}return this.promise};h.pause=function(){this.paused=true;var l=[];this._active.forEach(function(n,m){if(typeof n.pause==="function"){this._queue.unshift(n);
this._releaseThread();n.off("loaded");n.off("error");n.pause();l.push(m)}},this);
l.forEach(function(m){this._active.splice(m,1)},this)};h.destroy=function(){this.pause();
j(this)};h._startNewThread=function(){var m=this._queue.shift();this._occupyThread();
if(m&&typeof m.load==="function"){var l=function(o){this._onProgress(o);this._active.splice(this._active.indexOf(m),1);
m.off("error",n)};var n=function(o){this._onError();m.off("loaded",l)};m.once("loaded",l,this);
m.once("error",n,this);m.load()}else{this._onError()}this._active.push(m)};h._onResolved=function(){if(this._errored){return false
}this._deferred.resolve(this._data);this.trigger("resolved",this._data)};h._onError=function(l){if(this._errored){return false
}this._errored=true;this._deferred.reject(l);this.trigger("rejected",l)};h.abort=function(){this._deferred.reject()
};h._onProgress=function(l){if(this._errored){return false}this._releaseThread();
this._data[l.index]=l.data;this.trigger("progress",l.data);if(this._queue.length<=0){if(this._availableThreads>=this._allowedThreads){this._onResolved()
}}else{if(!this.paused&&!this._errored){this._startNewThread()}}};h._occupyThread=function(){this._availableThreads--;
if(this._availableThreads<0){throw"AssetLoader.Queue: Available thread count cannot be negative."
}};h._releaseThread=function(){this._availableThreads++;if(this._availableThreads>this._allowedThreads){throw"AssetLoader.Queue: Available thread count cannot be more than allowed thread amount."
}};a.exports=c},{"../../utils/destroy":291,"ac-event-emitter":false,"ac-object":346}],291:[function(b,d,a){d.exports=function c(f,g){if(typeof f.off==="function"){f.off()
}function h(j){var i=true;for(var k in j){if(j.hasOwnProperty(k)){if(j[k]!==null){i=false;
break}}}return i}window.setTimeout(function(){var i;for(i in f){if(f.hasOwnProperty(i)){if(g&&f[i]&&typeof f[i].destroy==="function"&&!h(f[i])){f[i].destroy()
}f[i]=null}}})}},{}],292:[function(b,c,a){c.exports=function(d,f){return Math.round(d*Math.pow(10,f))/Math.pow(10,f)
}},{}],293:[function(c,d,b){var g=c("./ac-clock/Clock"),f=c("./ac-clock/ThrottledClock"),a=c("./ac-clock/sharedClockInstance");
a.Clock=g;a.ThrottledClock=f;d.exports=a},{"./ac-clock/Clock":294,"./ac-clock/ThrottledClock":295,"./ac-clock/sharedClockInstance":296}],294:[function(c,d,b){var g;
var f=c("ac-event-emitter").EventEmitter;var a=new Date().getTime();function h(){f.call(this);
this.lastFrameTime=null;this._animationFrame=null;this._active=false;this._startTime=null;
this._boundOnAnimationFrame=this._onAnimationFrame.bind(this);this._getTime=Date.now||function(){return new Date().getTime()
}}g=h.prototype=new f(null);g.start=function(){if(this._active){return}this._tick()
};g.stop=function(){if(this._active){window.cancelAnimationFrame(this._animationFrame)
}this._animationFrame=null;this.lastFrameTime=null;this._active=false};g.destroy=function(){this.stop();
this.off();var j;for(j in this){if(this.hasOwnProperty(j)){this[j]=null}}};g.isRunning=function(){return this._active
};g._tick=function(){if(!this._active){this._active=true}this._animationFrame=window.requestAnimationFrame(this._boundOnAnimationFrame)
};g._onAnimationFrame=function(l){var m=0;var i=this._getTime();if(this.lastFrameTime===null){this.lastFrameTime=i-a
}else{m=l-this.lastFrameTime}var k=0,j;if(m!==0){k=1000/m}j={time:l,delta:m,fps:k,naturalFps:k,timeNow:i};
this.trigger("update",j);this.trigger("draw",j);this._animationFrame=null;this.lastFrameTime=l;
if(this._active!==false){this._tick()}else{this.lastFrameTime=null}};d.exports=h
},{"ac-event-emitter":false}],295:[function(c,d,b){var g;var a=c("./sharedClockInstance"),f=c("ac-event-emitter").EventEmitter;
function h(j,i){if(j===null){return}f.call(this);i=i||{};this._fps=j||null;this._clock=i.clock||a;
this._lastThrottledTime=null;this._clockEvent=null;this._clock.on("update",this._onClockUpdate,this)
}g=h.prototype=new f(null);g.setFps=function(i){this._fps=i;return this};g.getFps=function(){return this._fps
};g.start=function(){this._clock.start();return this};g.stop=function(){this._clock.stop();
return this};g.isRunning=function(){return this._clock.isRunning()};g.destroy=function(){this._clock.off("update",this._onClockUpdate,this);
this._clock.destroy.call(this)};g._onClockUpdate=function(i){if(this._lastThrottledTime===null){this._lastThrottledTime=this._clock.lastFrameTime
}var j=i.time-this._lastThrottledTime;if(!this._fps){throw new TypeError("FPS is not defined.")
}if(j<(1000/this._fps)){return}this._clockEvent=i;this._clockEvent.delta=j;this._clockEvent.fps=1000/j;
this._lastThrottledTime=this._clockEvent.time;this._clock.once("draw",this._onClockDraw,this);
this.trigger("update",this._clockEvent)};g._onClockDraw=function(){this.trigger("draw",this._clockEvent)
};d.exports=h},{"./sharedClockInstance":296,"ac-event-emitter":false}],296:[function(b,c,a){var d=b("./Clock");
c.exports=new d()},{"./Clock":294}],297:[function(b,d,a){var c=b("./ac-ajax/Ajax");
d.exports=new c();d.exports.Ajax=c},{"./ac-ajax/Ajax":298}],298:[function(c,f,a){var b=c("ac-deferred").Deferred;
var d=function(){};d.prototype={_Deferred:b,_defaults:{timeout:5000},_addReadyStateChangeHandler:function(g){g.xhr.onreadystatechange=function(h){if(g.xhr.readyState===4){clearTimeout(g.timeout);
if(g.xhr.status>=200&&g.xhr.status<300){g.deferred.resolve(g.xhr)}else{g.deferred.reject(g.xhr)
}}}},_addTimeout:function(g,h){if(h){g.timeout=setTimeout(function(){g.xhr.abort();
g.deferred.reject()},h)}},_extend:function(){for(var h=1;h<arguments.length;h++){for(var g in arguments[h]){if(arguments[h].hasOwnProperty(g)){arguments[0][g]=arguments[h][g]
}}}return arguments[0]},_getOptions:function(g,h){return this._extend({},this._defaults,h,g)
},_sendRequest:function(i){var h=this._validateConfiguration(i);if(h){throw h}var g={xhr:new XMLHttpRequest()};
g.deferred=new b();g.xhr.open(i.method,i.url);this._setRequestHeaders(g,i.headers);
this._addTimeout(g,i.timeout);this._addReadyStateChangeHandler(g);g.xhr.send(i.data);
return g.deferred.promise()},_setRequestHeaders:function(g,h){if(h){h.forEach(function(i){g.xhr.setRequestHeader(i.name,i.value)
})}},_validateConfiguration:function(i){if(!i){return"Must provide a configuration object"
}var h=[];var g=i.headers;if(!i.url){h.push("Must provide a url")}if(g){if(!Array.isArray(g)){return"Must provide an array of headers"
}this._validateHeaders(g,h)}return h.join(", ")},_validateHeaders:function(j,k){for(var h=0,g=j.length;
h<g;h++){if(!j[h].hasOwnProperty("name")||!j[h].hasOwnProperty("value")){k.push("Must provide a name and value key for all headers");
break}}},checkURL:function(g){g=this._getOptions({method:"head"},g);return this._sendRequest(g)
},get:function(g){g=this._getOptions({method:"get"},g);return this._sendRequest(g)
},post:function(g){g=this._getOptions({method:"post"},g);return this._sendRequest(g)
}};f.exports=d},{}],299:[function(b,c,a){c.exports.playerFactory=b("./ac-flow-x/flow/playerFactory");
c.exports.Flow=b("./ac-flow-x/flow/FlowController");c.exports.SyncPlayer=b("./ac-flow-x/flow/SyncPlayer");
c.exports.MaskedFlow=b("./ac-flow-x/flow/MaskedFlow")},{"./ac-flow-x/flow/FlowController":301,"./ac-flow-x/flow/MaskedFlow":303,"./ac-flow-x/flow/SyncPlayer":305,"./ac-flow-x/flow/playerFactory":328}],300:[function(b,a,c){var f,j=false,i=b("ac-deferred").Deferred,l=b("ac-deferred").all,o=b("ac-event-emitter").EventEmitter,k=b("./compositor/decorator/Keyframe"),h=b("./compositor/decorator/Superframe"),g=b("./compositor/decorator/SuperKeyframe"),n=b("./compositor/decorator/Cache"),m=b("./compositor/decorator/Benchmark");
function d(p,q){o.call(this);this._compositor=p;this.options=q||{};this.gotoFrame
}f=d.prototype=new o(null);f._gotoImageFrame=function(p){if(this._rendering){return(new i()).resolve()
}else{if(this._currentFrame===p){return(new i()).resolve()}}this._rendering=true;
if(j){console.groupCollapsed("gotoFrame:"+p+" currentFrame:"+this._currentFrame)
}return this._compositor.compositeFrames(this._currentFrame,p).then(function(){this._rendering=false;
this._currentFrame=p;if(j){console.groupEnd()}}.bind(this))};f._gotoBinaryFrame=function(p){if(this._currentFrame===p){return(new i()).resolve()
}return this._compositor.compositeFrames(this._currentFrame,p).then(function(q){if(q){this._compositor.applyBinaryFrame(q)
}this._currentFrame=p;this.trigger("composite")}.bind(this))};f.init=function(q){var p;
if(q.nodeName==="CANVAS"){p=q}else{p=document.createElement("canvas");q.appendChild(p)
}if(this.options.renderType==="binary"){this.gotoFrame=this._gotoBinaryFrame}else{if(this.options.renderType==="default"){this.gotoFrame=this._gotoImageFrame
}}return this._compositor.init(p).then(function(r){return l([this._compositor.createDiffRender(r).then(this._decorateCompositor.bind(this))])
}.bind(this))};f._decorateCompositor=function(){var p=this._compositor,r=this._compositor._diffRender.flowData,q=this._compositor.canvas;
if(this.options.renderType==="binary"){}else{if(r.superframeFrequency){p=new h(p,r.superframeFrequency)
}if(r.version===3){p=new k(p)}if(r.version===3&&r.superframeFrequency){p=new g(p)
}if(this.options.keyframeCache){p=new n(p,this.options.keyframeCache)}if(this.options.benchmark){p=new m(p)
}}if(p===this._compositor){return(new i()).resolve()}else{this._compositor=p;return this._compositor.init(q)
}};if(typeof Object.defineProperties!=="function"){return function(){}}Object.defineProperties(f,{_currentFrame:{value:0,enumerable:false,writable:true},frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true}});a.exports=d},{"./compositor/decorator/Benchmark":308,"./compositor/decorator/Cache":309,"./compositor/decorator/Keyframe":310,"./compositor/decorator/SuperKeyframe":311,"./compositor/decorator/Superframe":312,"ac-event-emitter":false}],301:[function(f,b,g){var i,h=f("./Flow"),d=f("./Player"),m=f("./LoadController"),k=f("./compositor/BinaryCompositor"),j=f("./compositor/Sequence");
var c={fileFormat:"jpg",baseName:"flow",imageUrlPattern:"###",startframeFileFormat:null,endframeFileFormat:null,basePath:null,manifestPath:null,manifestFileFormat:"json",diffPath:null,framePath:null};
var a={superframes:false,reversable:false,keyframeCache:8,benchmark:false,preload:true,multithread:false,preventDraw:false,renderType:"default"};
var l=function(n,o){n=n||{};o=o||{};this._flow=null;this._compositor=null;this._oader=null;
this.options=this._setDefaults(n,a);this._dataOptions=this._setDefaults(o,c);if(!this.options.element){this.options.element=document.createElement("canvas")
}this._flow=this._createFlow(this._compositor,this.options,this._dataOptions);d.call(this,this.options.element,this._flow);
if(this.options.preload){this.load()}};i=l.prototype=new d(null);i.destroy=function(){this.pause();
this.off();this._flow.off();this._flow=this._nullProperties(this._flow);this._nullProperties(this)
};i._nullProperties=function(o){var n;for(n in o){if(o.hasOwnProperty(n)){o[n]=null
}}return o};i._createFlow=function(o,p,r){var n=this._assembleAssetPaths(r);var q=[n.startframe,n.endframe];
this.loader=new m(this,n.manifest,q,n.imageUrlPattern);if(p.renderType==="binary"){this._compositor=new k(q,n.imageUrlPattern,this.loader,p.multithread,p.preventDraw)
}else{this._compositor=new j(q,n.imageUrlPattern,this.loader)}return new h(this._compositor,p)
};i._assembleAssetPaths=function(t){var s=t.basePath?this._forceTrailingSlash(t.basePath):null;
var p=t.framePath?this._forceTrailingSlash(t.framePath):null;var o=t.diffPath?this._forceTrailingSlash(t.diffPath):null;
var r=t.manifestPath?this._forceTrailingSlash(t.manifestPath):null;var n=t.baseName+"_";
var q={};q.startframe=(p||s)+n+"startframe."+(t.startframeFileFormat||t.fileFormat);
q.endframe=(p||s)+n+"endframe."+(t.endframeFileFormat||t.fileFormat);q.imageUrlPattern=(o||s)+n+t.imageUrlPattern+"."+t.fileFormat;
q.manifest=(r||s)+n+"manifest."+t.manifestFileFormat;return q};i._forceTrailingSlash=function(n){if(n.lastIndexOf("/")!==n.length-1){n=n+"/"
}return n};i._setDefaults=function(o,p){var n;for(n in p){if(p.hasOwnProperty(n)){if(typeof o[n]==="undefined"){o[n]=p[n]
}}}return o};b.exports=l},{"./Flow":300,"./LoadController":302,"./Player":304,"./compositor/BinaryCompositor":306,"./compositor/Sequence":307}],302:[function(b,a,c){var d,h=b("ac-asset-loader").AssetLoader,l=b("ac-event-emitter").EventEmitter,f=b("./data/provider/Async"),g=b("ac-deferred").Deferred,i=b("ac-deferred").all;
var k={start:"start",pause:"pause",error:"error",complete:"loaded",destroy:"destroy"};
var j=function(o,m,n,p){this._flow=o;this._manifestUrl=m;this._keyframeUrls=n;this._imageUrlPattern=p;
this.state={manifestLoaded:false,keyframesLoaded:false,diffsLoaded:false,diffCountLoaded:0,totalDiffs:null};
this.assets={keyframes:null,manifest:null,diffs:null};this._promises={};this._loaders={};
this._activeLoaders=[];this._resumeQueue=[];this._paused=true;this._shouldPause=false;
this._boundOnManifestLoaded=this._onManifestLoaded.bind(this);this._boundOnKeyframesLoaded=this._onKeyframesLoaded.bind(this);
this._boundOnDiffsLoaded=this._onDiffsLoaded.bind(this);this._boundOnManifestAndKeyframesLoaded=this._onManifestAndKeyframesLoaded.bind(this);
this._boundOnComplete=this._onComplete.bind(this)};d=j.prototype=new l(null);d.setManifestUrl=function(m){this._manifestUrl=m;
return this};d.setKeyframeUrls=function(m){this._keyframeUrls=m;return this};d.setImageUrlPattern=function(m){this._imageUrlPattern=m;
return this};d.load=function(){if(this._paused&&(this._activeLoaders.length>0||this._resumeQueue.length>0)){this._resume();
return}this._flow.load().then(this._boundOnComplete);return};d.pause=function(){this._shouldPause=true;
var n,m=this._activeLoaders.length;for(n=0;n<m;n++){this._activeLoaders[n].pause()
}this._paused=true};d.destroy=function(){var n,m,o;this.trigger(k.destroy);this.off();
for(n in this._loaders){if(this._loaders.hasOwnProperty(n)){}}for(m in this._promises){if(this._promises.hasOwnProperty(m)){if(this._promises[m].promise().status()==="pending"){this._promises[m].reject()
}}}for(o in this){if(this.hasOwnProperty(o)){this[o]=null}}};d._resume=function(){this._shouldPause=false;
var p,m=this._activeLoaders.length;for(p=0;p<m;p++){this._activeLoaders[p].load()
}var o,n=this._resumeQueue.length;for(o=0;o<n;o++){this._resumeQueue[o].call(this)
}this._resumeQueue=[];this._paused=false};d.loadManifest=function(){this._promises.manifest=this._promises.manifest||new g();
var m=this._promises.manifest.promise();if(this._shouldPause){this._resumeQueue.push(this.loadManifest);
return m}if(this.assets.manifest){return this._promises.manifest.resolve(this.assets.manifest)
}this._paused=false;this._loaders.manifest=new f({url:this._getManifestAssetsData()});
this._activeLoaders.push(this._loaders.manifest);this._loaders.manifest.load().then(this._boundOnManifestLoaded);
return m};d.loadKeyframes=function(){this._promises.keyframes=this._promises.keyframes||new g();
var m=this._promises.keyframes.promise();if(this._shouldPause){this._resumeQueue.push(this.loadKeyframes);
return m}if(this.assets.keyframes){return this._promises.keyframes.resolve(this.assets.keyframes)
}this._paused=false;this._loaders.keyframes=new h(this._getKeyframesAssetsData());
this._activeLoaders.push(this._loaders.keyframes);this._loaders.keyframes.load().then(this._boundOnKeyframesLoaded);
return m};d.loadDiffs=function(){this._promises.diffs=this._promises.diffs||new g();
var m=this._promises.diffs.promise();if(this._shouldPause){this._resumeQueue.push(this.loadDiffs);
return m}if(this.assets.diffs){return this._promises.diffs.resolve(this.assets.diffs)
}this._paused=false;this._activeLoader=this._loaders.diffs=new h(this._getDiffsAssetsData());
this._activeLoaders.push(this._loaders.diffs);this._loaders.diffs.load().then(this._boundOnDiffsLoaded);
return m};d._getManifestAssetsData=function(){return this._manifestUrl};d._getKeyframesAssetsData=function(){return this._keyframeUrls
};d._getDiffsAssetsData=function(){var o=this.assets.manifest.imagesRequired,m=[],p,n,q=this._imageUrlPattern.match(/#/g).length;
for(p=1;p<=o;p++){n="0000"+p;n=n.substring(n.length-q);m.push(this._imageUrlPattern.replace(/#{2,}/g,n))
}return m};d._onManifestLoaded=function(m){if(this.assets){this.assets.manifest=m;
this.state.manifestLoaded=true;this._paused=true;this._removeFromActiveLoaders(this._loaders.manifest);
this._promises.manifest.resolve(this.assets.manifest)}};d._onKeyframesLoaded=function(m){if(this.assets){this.assets.keyframes=m;
this.state.keyframeLoaded=true;this._paused=true;this._removeFromActiveLoaders(this._loaders.keyframes);
this._promises.keyframes.resolve(this.assets.keyframes)}};d._onDiffsLoaded=function(m){if(this.assets){this.assets.diffs=m;
this.state.diffsLoaded=true;this._paused=true;this._removeFromActiveLoaders(this._loaders.diffs);
this._promises.diffs.resolve(this.assets.diffs)}};d._onManifestAndKeyframesLoaded=function(){if(!this.state.diffsLoaded){this.loadDiffs()
}return this._promises.diffs};d._removeFromActiveLoaders=function(o){var n,m=this._activeLoaders.length;
for(n=0;n<m;n++){if(this._activeLoaders[n]===o){this._activeLoaders.splice(n,1);
return}}};d._onComplete=function(){this.trigger(k.complete)};a.exports=j},{"./data/provider/Async":320,"ac-asset-loader":280,"ac-event-emitter":false}],303:[function(b,a,f){var h,g=b("./FlowController"),d=b("./SyncPlayer"),i=b("ac-deferred").Deferred,k=b("ac-deferred").all;
var c={preventDraw:true,renderType:"binary"};function j(p,q,m,o,l,n){m=this._setDefaultOptions(m);
o=this._setDefaultOptions(o);this.flow=new g(p,m,l);this.mask=new g(q,o,n);d.apply(this,[this.flow,this.mask]);
this._flowDefer=null;this._maskDefer=null;this._boundOnSyncRender=this._onSyncRender.bind(this);
this._boundOnFlowTimeUpdate=this._onFlowTimeUpdate.bind(this);this._boundOnMaskTimeUpdate=this._onMaskTimeUpdate.bind(this);
this.flow._flow.on("composite",this._boundOnFlowTimeUpdate);this.mask._flow.on("composite",this._boundOnMaskTimeUpdate);
this._bindSyncRender()}h=j.prototype=new d(null);h._setDefaultOptions=function(l){l=l||{};
var m;for(m in c){if(c.hasOwnProperty(m)){if(typeof l[m]==="undefined"){l[m]=c[m]
}}}return l};h._bindSyncRender=function(){this._flowDefer=new i();this._maskDefer=new i();
k([this._flowDefer,this._maskDefer]).then(this._boundOnSyncRender)};h._onFlowTimeUpdate=function(){if(this._flowDefer){this._flowDefer.resolve()
}};h._onMaskTimeUpdate=function(){if(this._maskDefer){this._maskDefer.resolve()
}};h._onSyncRender=function(){this._flowDefer=this._maskDefer=null;this._applyMask();
this._bindSyncRender()};h._applyMask=function(){if(!this.flow._compositor.imageData){return
}var n=this.flow._compositor.imageData.data,o=this.mask._compositor.imageData.data,m,l=n.length;
for(m=0;m<l;m+=4){n[m+3]=o[m]}this.flow._compositor.applyBinaryFrame({buf8:n},true)
};a.exports=j},{"./FlowController":301,"./SyncPlayer":305}],304:[function(d,f,b){var h,a=false,c=d("ac-deferred").Deferred,i=d("ac-dom-emitter").DOMEmitter;
function g(k,j){this._flow=j;this._domEmitter=new i(k);this._frameRate=30;this.element=k;
this.paused=true;this.loop=false;this._boundAdvanceTimeToGlobal=this._advanceToTimeGlobal.bind(this);
this._onBoundGlobalTimeUpdate=this._onGlobalTimeUpdate.bind(this);this._onBoundLocalTimeUpdate=this._onLocalTimeUpdate.bind(this)
}h=g.prototype;h._timeToFrame=function(j){var k;k=Math.round(j/this.duration*this._flow.frameCount);
k=k%(this._flow.frameCount+1);return(k<0)?this._flow.frameCount+k:k};h._advanceToTimeGlobal=function(j){this._prevTime=this._prevTime||j;
this._currentTime+=((j-this._prevTime)/1000)*this.playbackRate;this._prevTime=j;
this._pauseAfterRender=false;var k=this._timeToFrame(this._currentTime);if(!this.loop){if(this.playbackRate>0&&this._currentTime>this.duration){k=this._flow.frameCount;
this._currentTime=this.duration;this._pauseAfterRender=true}else{if(this.playbackRate<0&&this._currentTime<0){k=0;
this._currentTime=0;this._pauseAfterRender=true}}}else{this._currentTime=(this.duration+this._currentTime)%this.duration
}if(!this.paused&&!this.seeking){return this._flow.gotoFrame(k).then(this._onBoundGlobalTimeUpdate)
}else{return(new c()).reject()}};h._onGlobalTimeUpdate=function(){this.trigger("timeupdate");
if(this._pauseAfterRender){this.paused=true;this.trigger("ended")}else{this._requestAnimationFrame=window.requestAnimationFrame(this._boundAdvanceTimeToGlobal)
}};h._onLocalTimeUpdate=function(){this.seeking=false;this.trigger("timeupdate");
this.trigger("seeked");this._requestAnimationFrame=window.requestAnimationFrame(this._boundAdvanceTimeToGlobal)
};h._advanceToTimeLocal=function(j){if(!this.seeking){this.seeking=true;this.trigger("seeking");
this._currentTime=1*j;this._prevTime=null;window.cancelAnimationFrame(this._requestAnimationFrame);
this._flow.gotoFrame(this._timeToFrame(j)).then(this._onBoundLocalTimeUpdate)}if(a){console.log("advance to time "+j+" from "+this._currentTime)
}};h.load=function(){this.trigger("loadstart");return this._flow.init(this.element).then(this.trigger.bind(this,"canplaythrough"))
};h.play=function(){if(this.paused){this.paused=false;this.trigger("play");this._prevTime=null;
this._requestAnimationFrame=window.requestAnimationFrame(this._boundAdvanceTimeToGlobal)
}return this};h.pause=function(){if(!this.paused){this.paused=true;window.cancelAnimationFrame(this._requestAnimationFrame);
this.trigger("pause")}return this};h.on=function(){this._domEmitter.on.apply(this._domEmitter,arguments)
};h.once=function(){this._domEmitter.once.apply(this._domEmitter,arguments)};h.trigger=function(){this._domEmitter.trigger.apply(this._domEmitter,arguments)
};h.off=function(){this._domEmitter.off.apply(this._domEmitter,arguments)};h.setRenderOperation=function(j){if(this._flow&&this._flow._compositor&&this._flow._compositor._diffRender){this._flow._compositor._diffRender.renderOperation=j
}return this};h.setBeforeRenderOperation=function(j){if(this._flow&&this._flow._compositor&&this._flow._compositor._diffRender){this._flow._compositor._diffRender.beforeRenderOperation=j
}};h.setBeforeDrawOperation=function(j){if(this._flow&&this._flow._compositor){this._flow._compositor.beforeDrawOperation=j
}};h.setAfterDrawOperation=function(j){if(this._flow&&this._flow._compositor){this._flow._compositor.afterDrawOperation=j
}};if(typeof Object.defineProperties!=="function"){return function(){}}Object.defineProperties(h,{_currentTime:{value:0,enumerable:false,writable:true},_playbackRate:{value:1,enumerable:false,writable:true},currentTime:{get:function(){return this._currentTime*1
},set:h._advanceToTimeLocal,enumerable:true},frameRate:{get:function(){return this._frameRate
},set:function(j){if(isFinite(j)){this._frameRate=j;this.trigger("durationchange")
}},enumerable:true},playbackRate:{get:function(){return this._playbackRate*1},set:function(j){if(isFinite(j)){this._playbackRate=1*j;
this.trigger("ratechange")}},enumerable:true},duration:{get:function(){return this._flow.frameCount/this.frameRate
},enumerable:true}});f.exports=g},{"ac-dom-emitter":69}],305:[function(d,f,b){var h,c=d("ac-deferred").Deferred,a=d("ac-deferred").all;
function g(){this.flows=Array.prototype.slice.call(arguments,0)}h=g.prototype;h.on=function(){return this._each("on",arguments)
};h.off=function(){return this._each("off",arguments)};h.load=function(){var n=new c(),m=[],l,j=this.flows.length,k;
for(l=0;l<j;l++){k=this.flows[l];m.push(k.load())}a(m).then(n.resolve.bind(n));
return n.promise()};h.play=function(){return this._each("play",arguments)};h.pause=function(){return this._each("pause",arguments)
};h.destroy=function(){this._each("destroy",arguments);var j;for(j in this){if(this.hasOwnProperty(j)){if(this[j] instanceof c){this[j].reject()
}this[j]=null}}};h.setRenderOperation=function(){return this._each("setRenderOperation",arguments)
};h.setBeforeRenderOperation=function(){return this._each("setBeforeRenderOperation",arguments)
};h.setBeforeDrawOperation=function(){return this._each("setBeforeDrawOperation",arguments)
};h.setAfterDrawOperation=function(){return this._each("setAfterDrawOperation",arguments)
};h._dispatchEvent=function(i){return this._each("_dispatchEvent",arguments)};h._advanceToTimeGlobal=function(){return this._each("_advanceToTimeGlobal",arguments)
};h._advanceToTimeLocal=function(){return this._each("_advanceToTimeLocal",arguments)
};h._each=function(n,l){l=Array.prototype.slice.call(l,0);var m,j=this.flows.length,k;
for(m=0;m<j;m++){k=this.flows[m];k[n].apply(k,l)}return this};Object.defineProperties(h,{_currentTime:{value:0,enumerable:false,writable:true},_playbackRate:{value:1,enumerable:false,writable:true},_loop:{value:false,enumerable:false,writable:true},currentTime:{get:function(){return this._currentTime*1
},set:h._advanceToTimeLocal,enumerable:true},frameRate:{get:function(){return this._frameRate
},set:function(i){if(isFinite(i)){this._frameRate=i;this._dispatchEvent("durationchange")
}},enumerable:true},playbackRate:{get:function(){return this._playbackRate*1},set:function(i){if(isFinite(i)){this._playbackRate=1*i;
this.flows.forEach(function(k,j){j.playbackRate=k}.bind(this,this._playbackRate))
}},enumerable:true},duration:{get:function(){return this._flow[0].frameCount/this.frameRate
},enumerable:true},loop:{get:function(){return this._loop},set:function(i){if(typeof i==="boolean"){this._loop=i;
this.flows.forEach(function(j,k){k.loop=j}.bind(this,this._loop))}},enumerable:true}});
f.exports=g},{}],306:[function(c,b,d){var f,j=false,a=c("../diff/BinaryRender"),g=c("../diff/BinaryMultithreadRender"),i=c("ac-deferred").Deferred;
var h=function(o,m,n,l,k){this._keyframes=o;this._imageUrlPattern=m;this._loadController=n;
this._useMultithreading=l;this._preventDraw=k};f=h.prototype;f._getURLObject=function(){return window.URL||window.webkitURL||null
};f._supportsMultithread=function(){if(this._getURLObject()&&window.Worker&&window.Blob){return true
}return false};f._initDiffRender=function(k){this._images=k;this.canvas.height=k[0].height;
this.canvas.width=k[0].width;this.applyFrame(k[0])};f.init=function(k){this.canvas=k||document.createElement("canvas");
this.context=k.getContext("2d");return this._loadController.loadKeyframes().then(this._initDiffRender.bind(this)).then(this._loadController.loadManifest.bind(this._loadController))
};f.createDiffRender=function(k){if(this._useMultithreading&&this._supportsMultithread()){this._diffRender=new g(k,this._imageUrlPattern)
}else{this._diffRender=new a(k,this._imageUrlPattern,this._loadController)}return this._diffRender.init()
};f.applyFrame=function(m){var l=this.context,k;l.drawImage(m,0,0);if(this._diffRender){this._diffRender.forceBinaryComposite();
k=this._diffRender.forceKeyframeRender(this.canvas,this.context);if(!this.imageData){this.imageData=this.context.createImageData(k.width,k.height)
}this.imageData.data.set(k.buf8)}};f.applyBinaryFrame=function(k,l){if(!this.imageData){this.imageData=this.context.createImageData(k.width,k.height)
}if(this._beforeDrawOperation){k=this._beforeDrawOperation(k)}this.imageData.data.set(k.buf8);
if(!this._preventDraw||l){this.context.putImageData(this.imageData,0,0)}if(this._afterDrawOperation){k=this._afterDrawOperation(k)
}};f.calculateRenderCount=function(k,l){var m=0;if(Math.abs(l-k)>=l){k=1;m=1}else{if(Math.abs(l-k)>=(this.frameCount-l)&&this._images[1]){k=this.frameCount-2;
m=1}}if(l>0&&l<this.frameCount-1){return Math.abs(k-l)+m}else{return m}};f.compositeFrames=function(l,o){var n=new i(),m;
o=(this.frameCount<o)?this.frameCount-1:(o<0)?0:o;l=(this.frameCount-2<l)?this.frameCount-2:(l<0)?0:l;
var p,k,m;if(Math.abs(o-l)>=o){l=1;if(j){console.log("applying start keyframe")
}this.applyFrame(this._images[0]);return n.resolve()}else{if(Math.abs(o-l)>=(this.frameCount-o)&&this._images[1]){l=this.frameCount-2;
if(j){console.log("applying end keyframe")}this.applyFrame(this._images[1]);return n.resolve()
}}p=(l>o)?-1:(l<o)?1:0;if(o>0&&o<this.frameCount-1){while(l!==o){k=this._diffRender.renderDiff(this.canvas,l,this.context);
l+=p}}if(k){k.then(n.resolve.bind(n))}else{n.resolve()}return n.promise()};if(typeof Object.defineProperties!=="function"){return function(){}
}Object.defineProperties(f,{frameCount:{get:function(){return this._diffRender.frames.length+2
},enumerable:true},canvas:{get:function(){return this._canvas},set:function(k){return this._canvas=k
},enumerable:true},mainCompositor:{get:function(){var k=this;while(k._compositor){k=k._compositor
}return k},enumerable:true},_beforeDrawOperation:{value:undefined,enumerable:false,writable:true},_afterDrawOperation:{value:undefined,enumerable:false,writable:true},beforeDrawOperation:{get:function(){return this._beforeDrawOperation
},set:function(k){if(typeof k==="function"){this._beforeDrawOperation=k;return}this._beforeDrawOperation=undefined
},enumerable:true},afterDrawOperation:{get:function(){return this._afterDrawOperation
},set:function(k){if(typeof k==="function"){this._afterDrawOperation=k;return}this._afterDrawOperation=undefined
},enumerable:true}});b.exports=h},{"../diff/BinaryMultithreadRender":322,"../diff/BinaryRender":323}],307:[function(d,c,f){var i=0,b;
function k(){if(!b){b=document.getElementById("counter")}i++;b.textContent=i}var g,l=false,h=d("../diff/Render"),j=d("ac-deferred").Deferred;
function a(p,m,o,n){this._keyframes=p;this._imageUrlPattern=m;this._loadController=o;
this._renderType=n||"default"}g=a.prototype;g._initDiffRender=function(m){this._images=m;
this.canvas.height=m[0].height;this.canvas.width=m[0].width;this.applyFrame(m[0]);
return new j().resolve()};g.init=function(m){this.canvas=m||document.createElement("canvas");
this.context=m.getContext("2d");return this._loadController.loadKeyframes().then(this._initDiffRender.bind(this)).then(this._loadController.loadManifest.bind(this._loadController))
};g.createDiffRender=function(m){this._diffRender=new h(m,this._imageUrlPattern,this._loadController);
return this._diffRender.init()};g.applyFrame=function(n){var m=this.context;m.drawImage(n,0,0)
};g.calculateRenderCount=function(m,n){var o=0;if(Math.abs(n-m)>=n){m=1;o=1}else{if(Math.abs(n-m)>=(this.frameCount-n)&&this._images[1]){m=this.frameCount-2;
o=1}}if(n>0&&n<this.frameCount-1){return Math.abs(m-n)+o}else{return o}};g.compositeFrames=function(m,o){var n=new j();
o=(this.frameCount<o)?this.frameCount-1:(o<0)?0:o;m=(this.frameCount-2<m)?this.frameCount-2:(m<0)?0:m;
var p;if(l){console.groupCollapsed("Rendering diff frames: "+m+"..."+o)}if(Math.abs(o-m)>=o){m=1;
if(l){console.log("applying start keyframe")}this.applyFrame(this._images[0])}else{if(Math.abs(o-m)>=(this.frameCount-o)&&this._images[1]){m=this.frameCount-2;
if(l){console.log("applying end keyframe")}this.applyFrame(this._images[1])}}p=(m>o)?-1:(m<o)?1:0;
if(o>0&&o<this.frameCount-1){while(m!==o){this._diffRender.renderDiff(this.canvas,m);
m+=p}}if(l){console.groupEnd()}n.resolve(m);return n.promise()};if(typeof Object.defineProperties!=="function"){return function(){}
}Object.defineProperties(g,{frameCount:{get:function(){return this._diffRender.frames.length+2
},enumerable:true},canvas:{get:function(){return this._canvas},set:function(m){return this._canvas=m
},enumerable:true},mainCompositor:{get:function(){var m=this;while(m._compositor){m=m._compositor
}return m},enumerable:true}});c.exports=a},{"../diff/Render":325}],308:[function(b,c,a){var d,g=b("../../../stats/Benchmark");
function f(h){this._compositor=h}d=f.prototype;d.init=function(h){var i=new g("init");
i.start();return this._compositor.init.apply(this._compositor,arguments).then(i.end.bind(i))
};d.applyFrame=function(){var h=new g("applyFrame");h.start();this._compositor.applyFrame.apply(this._compositor,arguments);
h.end.bind(h)};d.calculateRenderCount=function(){return this._compositor.calculateRenderCount.apply(this._compositor,arguments)
};d.compositeFrames=function(){var h=new g("renderFrames");h.start();return this._compositor.compositeFrames.apply(this._compositor,arguments).then(h.end.bind(h))
};if(typeof Object.defineProperties!=="function"){return function(){}}Object.defineProperties(d,{frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true},canvas:{get:function(){return this._compositor.canvas},set:function(h){return this._compositor.canvas=h
},enumerable:true}});f.prototype=d;c.exports=f},{"../../../stats/Benchmark":329}],309:[function(d,f,c){var g,b=false;
function a(i,h){this._compositor=i;this._keyframeInterval=h||8;this._keyframes=[]
}g=a.prototype;g._getClosestKeyframe=function(h){var i=h%this._keyframeInterval,j=Math.floor(h/this._keyframeInterval)+((i>(this._keyframeInterval/2))?1:0);
return j};g._getFrameFromKeyframe=function(h){return h*this._keyframeInterval};
g._saveKeyframe=function(j){var h,i=Math.floor(j/this._keyframeInterval);if(j%this._keyframeInterval===0&&!this._keyframes[i]){if(b){console.log("saving keyframe "+j)
}h=document.createElement("canvas");h.width=this._compositor.canvas.width;h.height=this._compositor.canvas.height;
h.getContext("2d").drawImage(this._compositor.canvas,0,0);this._keyframes[i]=h}};
g.init=function(h){return this._compositor.init.apply(this._compositor,arguments)
};g.applyFrame=function(){this._compositor.applyFrame.apply(this._compositor,arguments)
};g.calculateRenderCount=function(h,i){h=this._getFrameFromKeyframe(this._getClosestKeyframe(i));
return this._compositor.calculateRenderCount(h,i)+1};g.compositeFrames=function(h,j){var k=this._getClosestKeyframe(j);
if(b){console.groupCollapsed("Rendering frames: "+h+"..."+j)}if(this._keyframes[k]&&(this._compositor.calculateRenderCount(h,j)>this.calculateRenderCount(h,j))){h=this._getFrameFromKeyframe(k);
if(b){console.log("applying prerendered keyframe: "+h)}this.applyFrame(this._keyframes[k]);
return this._compositor.compositeFrames(h,j).then(function i(){if(b){console.groupEnd()
}})}else{return this._compositor.compositeFrames(h,j).then(function i(){if(b){console.groupEnd()
}},null,this._saveKeyframe.bind(this))}};if(typeof Object.defineProperties!=="function"){return function(){}
}Object.defineProperties(g,{frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true},canvas:{get:function(){return this._compositor.canvas},set:function(h){return this._compositor.canvas=h
},enumerable:true}});f.exports=a},{}],310:[function(f,g,b){var h,a=false,d=f("../../keyframe/Render"),c=f("ac-deferred").Deferred;
function i(j){this._compositor=j;this._flowDataProvider=this.mainCompositor._loadController._loaders.manifest
}h=i.prototype;h.init=function(j){this._keyframeDiffRender=new d(this._flowDataProvider._data,this.mainCompositor._imageUrlPattern);
return this._keyframeDiffRender.init()};h.applyFrame=function(j){return this._compositor.applyFrame.apply(this._compositor,arguments)
};h.applyKeyframe=function(j,k){this._keyframeDiffRender.renderKeyframe(this.canvas,j,k)
};h.compositeFrames=function(j,l){if(!this._isKeyframeDiff(l-1)){return this._compositor.compositeFrames.apply(this._compositor,arguments)
}var k=new c();if(a){console.groupCollapsed("Rendering keyframe diff image: "+(j-1))
}this.applyKeyframe(l-1);if(a){console.groupEnd()}k.resolve(j-1);return k.promise()
};h._isKeyframeDiff=function(j){return j in this._keyframeDiffRender._loader._keyframes
};h.calculateRenderCount=function(j,k){return this._compositor.calculateRenderCount.apply(this._compositor,arguments)
};if(typeof Object.defineProperties!=="function"){return function(){}}Object.defineProperties(h,{frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true},canvas:{get:function(){return this._compositor.canvas},set:function(j){return this._compositor.canvas=j
},enumerable:true},mainCompositor:{get:function(){return this._compositor.mainCompositor
},enumerable:true}});g.exports=i},{"../../keyframe/Render":327}],311:[function(d,f,b){var g,a=false,c=d("ac-deferred").Deferred;
function h(i){this._compositor=i;this._frames=this.mainCompositor._loadController._loaders.manifest._data.frames;
this._superframeInterval=this.mainCompositor._diffRender.flowData.superframeFrequency
}g=h.prototype;g.init=function(i){return this._compositor.init.apply(this._compositor,arguments)
};g.applyFrame=function(i){return this._compositor.applyFrame.apply(this._compositor,arguments)
};g.applyKeyframe=function(i,j){this._compositor.applyKeyframe.apply(this._compositor,arguments)
};g.compositeFrames=function(i,l){var m,k,j=new c();if(l<1||l>this.frameCount-2){return this._compositor.compositeFrames.apply(this._compositor,arguments)
}if(this._isKeyframeDiff(l-1)){m=Math.abs(i-l)===1?true:false;if(a){console.groupCollapsed("Drawing superKeyframe image: "+(l-1))
}this.applyKeyframe(l-1,m);if(a){console.groupEnd()}j.resolve(i-1);return j.promise()
}if(Math.abs(l-i)>this._superframeInterval){k=this._getShortestRender(i,l);if(this._isKeyframeDiff(k-1)||k<=0||k>=this.frameCount-2){return this._compositeFromSuperKeyframe(k,l)
}}if(a){console.log("SuperKeyframe compositor handing off to slave compositor: fromFrame:"+i+" toFrame:"+l)
}return this._compositor.compositeFrames.apply(this._compositor,[i,l])};g._getShortestRender=function(i,k){var m=this._compositor.calculateRenderCount,l=this._getClosestSuperKeyframe(k-1),j=m.apply(this._compositor,[l,k])+1,n=m.apply(this._compositor,[i,k]);
if(j<=n){return l}else{return i}};g._compositeFromSuperKeyframe=function(m,k){var i=this.canvas.getContext("2d"),j=(m<=0)?this.mainCompositor._images[0]:(m>=this.frameCount-2?this.mainCompositor._images[1]:this._frames[m-1].image),l;
if(a){console.log("Drawing superKeyframe for composite base: superKeyframe "+(m-1))
}i.drawImage(j,0,0);return this._compositor.compositeFrames.call(this._compositor,m,k)
};g._getClosestSuperFrame=function(i){return Math.round(i/this._superframeInterval)*this._superframeInterval
};g._getClosestSuperKeyframe=function(k){var n,o,m,l,j=this._frames.length;if(k<j+1&&k>0){l=k-1;
while(l>=0){if(this._frames[l].type==="keyframe"){n=l+1;break}l-=1}l=k+1;while(l<=j-1){if(this._frames[l].type==="keyframe"){o=l+1;
break}l+=1}}n=n?n:0;o=o?o:this.frameCount;m=(k-n)<(o-k)?n:o;return m};g._isKeyframeDiff=function(i){return this._compositor._isKeyframeDiff.apply(this._compositor,arguments)
};if(typeof Object.defineProperties!=="function"){return function(){}}Object.defineProperties(g,{frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true},canvas:{get:function(){return this._compositor.canvas},set:function(i){return this._compositor.canvas=i
},enumerable:true},mainCompositor:{get:function(){return this._compositor.mainCompositor
},enumerable:true}});f.exports=h},{}],312:[function(c,d,b){var f,a=false;function g(i,h){this._compositor=i;
this._superframeInterval=h||4}f=g.prototype;f._getClosestSuperframe=function(h){return Math.round(h/this._superframeInterval)*this._superframeInterval
};f.init=function(h){this._screenCanvas=h};f.applyFrame=function(){this._compositor.applyFrame.apply(this._compositor,arguments)
};f.calculateRenderCount=function(h,j){var i=this._getClosestSuperframe(h);if(Math.abs(i-j)>this._superframeInterval/2){h=i+((h>j)?-1:1)*this._superframeInterval;
return this.calculateRenderCount(h,j)+1}else{return Math.abs(i-j)+1}};f.compositeFrames=function(h,k){var l,i;
if(k<=0||k>=this.frameCount-2){this._compositor.compositeFrames(h,k)}if(h>this.frameCount-2){h=this.frameCount-2
}else{if(h<=0){h=1}}i=this._getClosestSuperframe(h);if(a){console.groupCollapsed("Rendering : "+h+"..."+k)
}if(this._compositor.calculateRenderCount(h,k)>this.calculateRenderCount(h,k)){if(a){console.groupCollapsed("Rendering (superframe) : "+i)
}l=this._compositor.compositeFrames(i,i).then(function j(){if(a){console.groupEnd()
}var m=i+((h>k)?-1:1)*this._superframeInterval;this._compositor.compositeFrames(i,m).then(function(){return this.compositeFrames(m,k)
}.bind(this))}.bind(this))}else{if(a){console.groupCollapsed("Rendering (final frames) : "+h+"..."+k)
}l=this._compositor.compositeFrames(h,k).then(function j(){if(a){console.groupEnd()
}}.bind(this))}l.then(function j(){if(a){console.groupEnd()}}.bind(this));return l
};if(typeof Object.defineProperties!=="function"){return function(){}}Object.defineProperties(f,{frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true},canvas:{get:function(){return this._compositor.canvas},set:function(h){return this._compositor.canvas=h
},enumerable:true},mainCompositor:{get:function(){return this._compositor.mainCompositor
},enumerable:true}});d.exports=g},{}],313:[function(d,f,c){var h,g=d("ac-event-emitter").EventEmitter,a=d("./MultithreadProcess"),i=d("./MultithreadProcessInterface");
var b=function(j){g.call(this);this._function=j};h=b.prototype=new g(null);h.exec=function(l,k){k=k||{};
if(!this._processURL){this._processURL=this._createThreadProcessURL(this._function)
}if(this._process){this.terminateProcess()}if(!this._process){this._process=new window.Worker(this._processURL);
this._process.onmessage=this._onMessage.bind(this)}var j;if(k.transfer){j=[l]}this._process.postMessage(l,j);
return this};h.run=function(n,m,k){k=k||{};var l={name:n,data:m||{}};var j;if(k.transfer){j=[l]
}this._process.postMessage(l,j);this.trigger(n,m)};h.destroy=function(){this.terminateProcess();
this._function=null;this._processURL=null;return this};h.terminateProcess=function(){if(this._process){this._process.terminate();
this._process=null}return this};h._createThreadProcessURL=function(l){var k=this._compileProcess(l),j=new window.Blob([k],{type:"text/javascript"});
return this._getURLObject().createObjectURL(j)};h._getURLObject=function(){return window.URL||window.webkitURL||null
};h._compileProcess=function(l){var o=a.toString();var j=/(['|"]){{INTERFACE}}\1/,k=/(['|"]){{PROCESS}}\1/;
o=o.replace(j,"("+i.toString()+")();");o=o.replace(k,l.toString());var m="(",n=")();";
return m+o+n};h._handleTrigger=function(j,k){this.trigger(j,k)};h._onMessage=function(l){if(!l.data){return
}var j=l.data.evt,k=l.data.data;if(j==="__trigger__"){this._handleTrigger(k.trigger,k.data)
}return this};f.exports=b},{"./MultithreadProcess":314,"./MultithreadProcessInterface":315,"ac-event-emitter":false}],314:[function(c,d,b){var a=function(){var g="{{PROCESS}}",f="{{INTERFACE}}";
this.processInstance;this.onmessage=function(j,h,i){i=i||{};if(!h.processInstance){h.processInstance=new j(this)
}else{h.processInstance._onMessage(i.data.name,i.data.data)}}.bind(f,g,this)};d.exports=a
},{}],315:[function(b,c,a){var d=function(){return{trigger:function(i,h,f){var g={trigger:i,data:h};
this._post("__trigger__",g,f)},_post:function(f,j,h){h=h||{};var g,i={evt:f,data:j};
if(h.transfer){g=[j]}postMessage(i,g)}}};c.exports=d},{}],316:[function(b,c,a){var d;
var f=function(g){this._interface=g;this.trigger=function(j,i,h){this._interface.trigger(j,i,h);
return this};this.renderFrameDiffs=function(m){var j=m.binaryFrame,o=m.compositingData,n=m.frameData,l=m.sourceImagesData,h=n.length,k;
for(k=0;k<h;k++){j=this._applyBlocksToBinaryFrame(j,n[k],l,o)}this.trigger("frameReady",j)
};this._applyBlocksToBinaryFrame=function(i,t,z,A){var l=t.block,G=Math.floor(l/A.blocksPerFullDiff),p=A.imageWidth,F=t.length,D=A.columnsInCanvas,C=A.canvasWidth,E=l%A.blocksPerFullDiff,h=p/A.blockSize;
var w=(E%h)*A.blockSize,v=Math.floor(E/(h||1))*A.blockSize,o=(t.location%D)*A.blockSize,n=Math.floor(t.location/D)*A.blockSize;
var r,q,u,k,j,B,s,m;while(F>0){s=Math.min((F*A.blockSize),C-o,p-w);m=s/A.blockSize;
k=z[G];for(q=0;q<A.blockSize;q++){for(r=0;r<s;r++){j=(v+q)*p+(w+r);B=(n+q)*C+(o+r);
i.buf32[B]=k[j]}}F-=m;if(F>0){if((w+=s)>=p){w=0;v+=A.blockSize}if((E+=m)>=A.blocksPerFullDiff){E=0;
w=0;v=0;G+=1;if(G===A.imagesRequired-1){p=A.imageWidth}}if((o+=s)>=C){o=0;n+=A.blockSize
}l+=m}}return i};this._onMessage=function(i,h){if(typeof this[i]==="function"){this[i](h)
}}};c.exports=f},{}],317:[function(b,c,a){function d(f,g){this.location=f;this.length=g
}c.exports=d},{}],318:[function(c,d,b){function a(){}d.exports=a},{}],319:[function(c,d,b){var h=c("./Manifest"),a=c("./Block"),g;
var f={parseData:function(i){g=0;var j=i.frames.map(this._parseFrame,this);return Object.create(h.prototype,{version:{value:i.version},framecount:{value:i.frameCount},blockSize:{value:i.blockSize},imagesRequired:{value:i.imagesRequired},reversible:{value:i.reversible},superframeFrequency:{value:i.superframeFrequency},frames:{value:j}})
},_valueForCharAt:function(k,i){var j=k.charCodeAt(i);if(j>64&&j<91){return j-65
}if(j>96&&j<123){return j-71}if(j>47&&j<58){return j+4}if(j===43){return 62}if(j===47){return 63
}throw"Invalid Bas64 character: "+k.charAt(i)},_createNumberFromBase64Range:function(m,i,l){var k=0,j;
while(l--){j=this._valueForCharAt(m,i++);k+=(j<<l*6)}return k},_parseFrame:function(k){var l,n=[],k=k.value||k,m,j;
for(l=0;l<k.length;l+=5){j=this._createNumberFromBase64Range(k,l,3);m=this._createNumberFromBase64Range(k,l+3,2);
n.push(Object.create(a.prototype,{location:{value:j,enumerable:true},length:{value:m,enumerable:true},block:{value:(g+=m)-m,enumerable:true}}))
}return n}};d.exports=f},{"./Block":317,"./Manifest":318}],320:[function(c,d,b){var g,a=c("ac-ajax").Ajax,h=c("../processor");
function f(i,j){this._url=i;this._ajaxAdaptor=j||new a()}g=f.prototype;g.load=function(){return this._ajaxAdaptor.get(this._url).then(function(j){try{var i=j.response||j.responseText;
return JSON.parse(i)}catch(k){if(DEBUG){console.log("Failed to parse manifest data")
}}}).then(function(i){this._data=i;return h.parseData(i)}.bind(this))};d.exports=f
},{"../processor":319,"ac-ajax":297}],321:[function(c,d,a){var g,b=c("ac-deferred").Deferred;
var f=function(h){if(typeof h==="string"){h=[h]}this.srcArr=h};g=f.prototype;g._request=function(j){var h=new b();
var i=new XMLHttpRequest();i.addEventListener("load",function(){var k=i.response;
h.resolve(k)});i.responseType="arrayBuffer";i.open("get",j,true);i.send();return h.promise()
};g.load=function(){this._deferred=new b();var l=[];var k,j=this.srcArr,h=j.length;
for(k=0;k<h;k++){l.push(this._request(j[k]))}b.all(l).then(function(i){this._deferred.resolve(i)
}.bind(this));return this._deferred.promise()};d.exports=f},{}],322:[function(c,b,d){var i=false;
var g,k=c("./Loader"),h=c("ac-deferred").Deferred,a=c("../compositor/multithread/MultithreadController"),f=c("../compositor/multithread/MultithreadRenderer");
function j(m,l){this.flowData=m;this.flowData.imageUrlPattern=l;this.ArrayBufferCompositor=document.createElement("canvas");
this.ArrayBufferCompositorContext=this.ArrayBufferCompositor.getContext("2d");this.sourceImagesData={};
this._processor=new a(f);this._processor.exec();window.processor=this._processor
}g=j.prototype;g._storeImages=function(l){if(i){console.log("loaded images")}this.images=l;
this._blocksPerFullDiff=(l[0].width/this.flowData.blockSize)*(l[0].height/this.flowData.blockSize);
return(new h()).resolve()};g._getImageDataAsArrayBuffer=function(n,o,m){m=m||o;
this.ArrayBufferCompositor.width=o;this.ArrayBufferCompositor.height=m;this.ArrayBufferCompositorContext.drawImage(n,0,0);
var l=new Uint32Array(this.ArrayBufferCompositorContext.getImageData(0,0,o,m).data.buffer);
return l};g._processDataConstants=function(){this._compositingConstants={images:[]};
var m,l=this.images.length;for(m=0;m<l;m++){this._compositingConstants.images[m]={};
this._compositingConstants.images[m].width=this.images[m].width}return(new h()).resolve()
};g._setFrameRequirements=function(q){var p=q[0],n=q[q.length-1];var o=this._getImageIndexOfBlock(p.block),l=this._getImageIndexOfBlock(n.block+n.length);
var m,r={};for(m=o;m<l+1;m++){if(this.sourceImagesData[m]){r[m]=this.sourceImagesData[m]
}else{r[m]=this._getImageDataAsArrayBuffer(this.images[m],this.images[m].width)
}}this.sourceImagesData=r;return r};g._getImageIndexOfBlock=function(l){return Math.floor(l/this._blocksPerFullDiff)
};g._setCompositingData=function(l,m){this._compositingData={imageWidth:this._compositingConstants.images[0].width,canvasWidth:m.canvas.width,canvasHeight:m.canvas.height,blocksPerFullDiff:this._blocksPerFullDiff,blockSize:this.flowData.blockSize,imagesRequired:this.flowData.imagesRequired};
var n=m.getImageData(0,0,this._compositingData.canvasWidth,this._compositingData.canvasHeight).data;
this._compositingData.columnsInCanvas=this._compositingData.canvasWidth/this.flowData.blockSize,this._compositingData.imageData=new Uint8ClampedArray(n)
};g._createBinaryFrame=function(n,m,l){return{buf8:n,buf32:new Uint32Array(n.buffer),width:m,height:l}
};g._getBinaryImageArrayLength=function(l){return l.canvasWidth};g._compositeBinaryFrame=function(r,q){var o,l=r.length,n=new h();
var p=this._setFrameRequirements(r);var m;if(this._lastBinaryFrame){m=this._lastBinaryFrame
}else{m=this._createBinaryFrame(q.imageData,q.canvasWidth,q.canvasHeight)}this._processor.run("renderFrameDiffs",{binaryFrame:m,frameData:r,compositingData:q,sourceImagesData:p});
this._processor.once("frameReady",n.resolve.bind(n));return n.promise()};g._getSourceImageAs32Bit=function(l){return new Uint32Array(this.sourceImagesData[l].data.buffer)
};g._applyBlocksToBinaryFrame=function(m,z,D){var p=z.block,J=Math.floor(p/this._blocksPerFullDiff),t=this._compositingConstants.images[J].width,I=z.length,G=D.columnsInCanvas,F=D.canvasWidth,H=p%this._blocksPerFullDiff,l=t/this.flowData.blockSize;
var C=(H%l)*this.flowData.blockSize,B=Math.floor(H/(l||1))*this.flowData.blockSize,s=(z.location%G)*this.flowData.blockSize,r=Math.floor(z.location/G)*this.flowData.blockSize;
var v,u,A,o,n,E,w,q;while(I>0){w=Math.min((I*this.flowData.blockSize),F-s,t-C);
q=w/this.flowData.blockSize;o=this.sourceImagesData[J];for(u=0;u<this.flowData.blockSize;
u++){for(v=0;v<w;v++){n=(B+u)*t+(C+v);E=(r+u)*F+(s+v);m.buf32[E]=o[n]}}I-=q;if(I>0){if((C+=w)>=t){C=0;
B+=this.flowData.blockSize}if((H+=q)>=this._blocksPerFullDiff){H=0;C=0;B=0;J+=1;
if(J===this.flowData.imagesRequired-1){t=this._compositingConstants.images[J].width
}}if((s+=w)>=F){s=0;r+=this.flowData.blockSize}p+=q}}return m};g.init=function(){console.log("LOADED BINARY");
if(i){console.log("load images")}return new k(this.flowData.imageUrlPattern,this.flowData.imagesRequired).load({binary:true}).then(this._storeImages.bind(this)).then(this._processDataConstants.bind(this))
};g.renderDiff=function(n,p){var o=n.getContext("2d"),m=new h();if(!this._compositingData){this._setCompositingData(n,o)
}p-=1;if(i){this._frameToRender=p}var l=this._compositeBinaryFrame(this.frames[p],this._compositingData);
l.then(function(r,q){this._lastBinaryFrame=q;r.resolve(q)}.bind(this,m));return m.promise()
};g.getBinaryDataFromFlowDataBlock=function(l){};if(typeof Object.defineProperties!=="function"){return function(){}
}Object.defineProperties(g,{frames:{get:function(){return this.flowData.frames},set:function(l){this.flowData.frames=l
},enumerable:true}});b.exports=j},{"../compositor/multithread/MultithreadController":313,"../compositor/multithread/MultithreadRenderer":316,"./Loader":324}],323:[function(f,g,c){var h,b=false,d=f("ac-deferred").Deferred;
function a(k,i,j){this.flowData=k;this.flowData.imageUrlPattern=i;this._loadController=j;
this.ArrayBufferCompositor=document.createElement("canvas");this.ArrayBufferCompositorContext=this.ArrayBufferCompositor.getContext("2d");
this.sourceImagesData={};this._forceBinaryComposite=true}h=a.prototype;h._storeImages=function(i){if(b){console.log("loaded images")
}this.images=i;this._blocksPerFullDiff=(i[0].width/this.flowData.blockSize)*(i[0].height/this.flowData.blockSize);
return(new d()).resolve()};h._getImageDataAsArrayBuffer=function(k,l,j){j=j||l;
if(this.ArrayBufferCompositor.width!==l){this.ArrayBufferCompositor.width=l}if(this.ArrayBufferCompositor.height!==j){this.ArrayBufferCompositor.height=j
}this.ArrayBufferCompositorContext.drawImage(k,0,0);var i={buf8:this.ArrayBufferCompositorContext.getImageData(0,0,l,j).data};
i.buf32=new Uint32Array(i.buf8.buffer);return i};h._processDataConstants=function(){this._compositingConstants={images:[]};
var k,j=this.images.length;for(k=0;k<j;k++){this._compositingConstants.images[k]={};
this._compositingConstants.images[k].width=this.images[k].width}return(new d()).resolve()
};h._setFrameRequirements=function(p){var o=p[0],l=p[p.length-1];var n=this._getImageIndexOfBlock(o.block),j=this._getImageIndexOfBlock(l.block+l.length),m=j+1;
var k,q={};for(k=n;k<m;k++){if(this.sourceImagesData[k]){q[k]=this.sourceImagesData[k]
}else{q[k]=this._getImageDataAsArrayBuffer(this.images[k],this.images[k].width)
}}this.sourceImagesData=q};h._getImageIndexOfBlock=function(i){return Math.floor(i/this._blocksPerFullDiff)
};h._setCompositingData=function(i,j){this._compositingData={imageWidth:this._compositingConstants.images[0].width,canvasWidth:j.canvas.width,canvasHeight:j.canvas.height};
var k=j.getImageData(0,0,this._compositingData.canvasWidth,this._compositingData.canvasHeight).data;
this._compositingData.columnsInCanvas=this._compositingData.canvasWidth/this.flowData.blockSize,this._compositingData.imageData=new Uint8ClampedArray(k)
};h._createBinaryFrame=function(k,j,i){return{buf8:k,buf32:new Uint32Array(k.buffer),width:j,height:i}
};h._getBinaryImageArrayLength=function(i){return i.canvasWidth};h._compositeBinaryFrame=function(n,m){var l,j=n.length;
this._setFrameRequirements(n);var k;if(this._lastBinaryFrame&&!this._forceBinaryComposite){k=this._lastBinaryFrame
}else{k=this._createBinaryFrame(m.imageData,m.canvasWidth,m.canvasHeight);if(this._renderOperation){this._cleanBinaryFrame=this._cloneBinaryFrame(k);
k=this.forceApplyFilter(k,m)}else{if(this._cleanBinaryFrame){this._cleanBinaryFrame=null
}}this._forceBinaryComposite=false}if(this._beforeRenderOperation){k=this._beforeRenderOperation(k)
}for(l=0;l<j;l++){k=this._applyBlocksToBinaryFrame(k,n[l],m)}return k};h._applyBlocksToBinaryFrame=function(j,A,F){var s=this.flowData.blockSize,C=this._blocksPerFullDiff,H=this.flowData.imagesRequired,n=A.block,M=Math.floor(n/C),r=this._compositingConstants.images[M].width,L=A.length,J=F.columnsInCanvas,I=F.canvasWidth,m=F.canvasHeight,K=n%C,i=r/s;
var E=(K%i)*s,D=Math.floor(K/(i||1))*s,q=(A.location%J)*s,p=Math.floor(A.location/J)*s;
var w,v,u,t,B,l,k,G,z,o;while(L>0){z=Math.min((L*s),I-q,r-E);o=z/s;l=this.sourceImagesData[M];
for(v=0;v<s;v++){for(w=0;w<z;w++){u=q+w;t=p+v;k=(D+v)*r+(E+w);G=t*I+u;if(this._renderOperation){this._cleanBinaryFrame.buf32[G]=l.buf32[k];
l=this._renderOperation(l,(k*4),u,t,I,m)}j.buf32[G]=l.buf32[k]}}L-=o;if(L>0){if((E+=z)>=r){E=0;
D+=s}if((K+=o)>=C){K=0;E=0;D=0;M+=1;if(M===H-1){r=this._compositingConstants.images[M].width
}}if((q+=z)>=I){q=0;p+=s}n+=o}}return j};h._cloneBinaryFrame=function(i){var j=i.buf8.buffer.slice(0);
return{buf8:new Uint8ClampedArray(j),buf32:new Uint32Array(j),width:i.width,height:i.height}
};h.init=function(){if(b){console.log("load images")}return this._loadController.loadDiffs().then(this._storeImages.bind(this)).then(this._processDataConstants.bind(this))
};h.renderDiff=function(j,l,k){var k=k||j.getContext("2d");if(!this._compositingData||this._forceBinaryComposite){this._setCompositingData(j,k)
}l-=1;if(b){this._frameToRender=l}var i=this._compositeBinaryFrame(this.frames[l],this._compositingData);
this._lastBinaryFrame=i;return new d().resolve(i)};h.forceBinaryComposite=function(){this._forceBinaryComposite=true;
return this};h.forceApplyFilter=function(q,j){if(this._renderOperation){var n,s,r,l,k,m=j.canvasWidth,o=j.canvasHeight,p=q.buf32.length;
for(n=0;n<p;n++){s=n%m;if(n>0){r=Math.floor(n/m)}else{r=0}q=this._renderOperation(q,(n*4),s,r,m,o)
}}return q};h.forceKeyframeRender=function(j,k){this._setCompositingData(j,k);var l=this._compositingData,i=this._createBinaryFrame(l.imageData,l.canvasWidth,l.canvasHeight);
if(this._renderOperation){this._cleanBinaryFrame=this._cloneBinaryFrame(i);i=this.forceApplyFilter(i,l)
}return i};if(typeof Object.defineProperties!=="function"){return function(){}}Object.defineProperties(h,{frames:{get:function(){return this.flowData.frames
},set:function(i){this.flowData.frames=i},enumerable:true},_beforeRenderOperation:{value:undefined,enumerable:false,writable:true},_renderOperation:{value:undefined,enumerable:false,writable:true},beforeRenderOperation:{get:function(){return this._beforeRenderOperation
},set:function(i){if(typeof i==="function"){this._beforeRenderOperation=i;return
}this._beforeRenderOperation=undefined},enumerable:true},renderOperation:{get:function(){return this._renderOperation
},set:function(i){if(typeof i==="function"){this.forceBinaryComposite();this._renderOperation=i;
return}this._renderOperation=undefined;this.forceBinaryComposite()},enumerable:true}});
g.exports=a},{}],324:[function(c,d,b){var g,a=c("ac-asset-loader").AssetLoader,f=c("./BinaryLoader");
function h(l,j){var k,n,m=l.match(/#/g).length;this.imagesUrls=[];if(!j){throw new Error("0 images provided")
}for(k=1;k<=j;k++){n="0000"+k;n=n.substring(n.length-m);this.imagesUrls.push(l.replace(/#{2,}/g,n))
}}g=h.prototype;g.load=function(i){i=i||{};return new a(this.imagesUrls).load()
};d.exports=h},{"./BinaryLoader":321,"ac-asset-loader":280}],325:[function(f,g,c){var h,b=false,d=f("ac-deferred").Deferred;
function a(k,i,j){this.flowData=k;this.flowData.imageUrlPattern=i;this._loadController=j
}h=a.prototype;h._storeImages=function(i){if(b){console.log("loaded images")}this.images=i;
this._blocksPerFullDiff=(i[0].width/this.flowData.blockSize)*(i[0].height/this.flowData.blockSize);
return(new d()).resolve()};h._applyDiffRange=function(k,r){var p=r.block,l=r.length,j=k.canvas.width/this.flowData.blockSize,n=Math.floor(p/this._blocksPerFullDiff),w=this.images[n].width,i=p%this._blocksPerFullDiff,v=w/this.flowData.blockSize,u=(i%v)*this.flowData.blockSize,t=Math.floor(i/(v||1))*this.flowData.blockSize,q=(r.location%j)*this.flowData.blockSize,o=Math.floor(r.location/j)*this.flowData.blockSize,m,s;
while(l){m=Math.min((l*this.flowData.blockSize),k.canvas.width-q,w-u);s=m/this.flowData.blockSize;
if(b){if(typeof this.renderDebugger!=="undefined"&&this._frameToRender>0){this.renderDebugger.registerComparison(this._frameToRender,{image:n,block:p,x:u,y:t})
}}k.drawImage(this.images[n],u,t,m,this.flowData.blockSize,q,o,m,this.flowData.blockSize);
l-=s;if(l){if((u+=m)>=w){u=0;t+=this.flowData.blockSize}if((i+=s)>=this._blocksPerFullDiff){i=0;
u=0;t=0;n+=1;if(n===this.flowData.imagesRequired-1){w=this.images[n].width}}if((q+=m)>=k.canvas.width){q=0;
o+=this.flowData.blockSize}p+=s}}};h.init=function(){if(b){console.log("load images")
}return this._loadController.loadDiffs().then(this._storeImages.bind(this))};h.renderDiff=function(i,l){var j=i.getContext("2d");
l-=1;if(b){this._frameToRender=l;console.log("applying diff frame : "+(l+1))}this.frames[l].forEach(function k(m){this._applyDiffRange(j,m)
}.bind(this))};if(typeof Object.defineProperties!=="function"){return function(){}
}Object.defineProperties(h,{frames:{get:function(){return this.flowData.frames},set:function(i){this.flowData.frames=i
},enumerable:true}});g.exports=a},{}],326:[function(f,g,c){var h,a=f("ac-asset-loader").AssetLoader,d=f("ac-deferred").Deferred;
function b(i,l){var k,j=i.match(/#/g).length;this._keyframes={};i=i.replace(/([^#]+)(#+)(\..*)/,"$1key_$2$3");
this._imageUrls=[];if(l.frames){l.frames.forEach(function(n,m){if(n.type==="keyframe"){k="0000"+m;
k=k.substring(k.length-j);this._imageUrls.push(i.replace(/#+/g,k));this._keyframes[m]=n
}}.bind(this))}}h=b.prototype;h.load=function(){if(this._imageUrls.length>0){return new a(this._imageUrls).load()
}return(new d()).resolve()};if(typeof Object.defineProperties!=="function"){return function(){}
}Object.defineProperties(h,{keyframes:{get:function(){return this._keyframes},enumerable:true}});
g.exports=b},{"ac-asset-loader":280}],327:[function(c,d,b){var f,a=false,h=c("./Loader");
function g(j,i){this.flowData=j;this.flowData.imageUrlPattern=i}f=g.prototype;f._storeImages=function(j){var l=0,m;
if(j&&j.length>0){if(a){console.log("loaded keyframe diff images")}for(var k in this._loader._keyframes){if(this._loader._keyframes.hasOwnProperty(k)){m=j[l];
this._loader._keyframes[k].image=m;l+=1}}}if(a){if(!j||j.length===0){console.log("no keyframe diff images to load")
}}};f.init=function(){if(a){console.log("loading keyframe diff images")}this._loader=new h(this.flowData.imageUrlPattern,this.flowData);
return this._loader.load().then(this._storeImages.bind(this))};f.renderKeyframe=function(k,j,r){var i=k.getContext("2d"),l=this._loader.keyframes[j],m=l.image,p=l.x,o=l.y,q=l.width,n=l.height;
if(a){console.log("applying keyframe diff image: "+j);console.log("x:"+p+" y:"+o+" w:"+q+" h:"+n)
}if(r===true){if(a){console.log("drawing superKeyframe sub-rectangle")}i.drawImage(m,p,o,q,n,p,o,q,n)
}else{if(this.flowData.reversible){if(a){console.log("drawing superKeyframe full image")
}i.drawImage(m,0,0)}else{if(a){console.log("drawing keyframe full image")}i.drawImage(m,p,o,q,n)
}}};d.exports=g},{"./Loader":326}],328:[function(b,c,a){function d(i,j,m,k,n){var g,h,l,f;
n=n||{};n={keyframeCache:(typeof n.keyframeCache==="undefined")?8:n.keyframeCache,benchmark:(typeof n.benchmark==="undefined")?false:n.benchmark,preload:(typeof n.preload==="undefined")?true:n.preload,renderType:n.renderType||"default",multithread:n.multithread||false};
j=j||[i.getAttribute("data-start-frame")];if(i.getAttribute("data-end-frame")){j.push(i.getAttribute("data-end-frame"))
}m=m||i.getAttribute("data-image-url-pattern");l=(typeof k==="string")?new FlowDataProviderAsync(k):new FlowDataProviderSync(k);
if(n.renderType==="binary"){g=new AC_BinaryCompositor(j,m,l,n.multithread)}else{if(n.renderType==="default"){g=new AC_FlowCompositorSequence(j,m,l)
}}h=new AC_FlowPlayer(i,new AC_Flow(g,n));if(n.preload){h.load()}return h}c.exports=d
},{}],329:[function(b,c,a){var f;function d(g){this.name=g}f=d.prototype;f.start=function(){if(DEBUG){console.log("▼▼▼ start "+this.name+" benchmark");
this.startTime=new Date().getTime();console.time(this.name)}};f.end=function(){if(DEBUG){this.endTime=new Date().getTime();
console.log("▲▲▲ end "+this.name+" benchmark "+(this.endTime-this.startTime)/1000+" sec");
console.time(this.timeEnd)}};c.exports=d},{}],330:[function(c,f,a){var d=c("./ac-media-object/create");
var b=c("./ac-media-object/cname");f.exports={create:d,cname:b}},{"./ac-media-object/cname":340,"./ac-media-object/create":341}],331:[function(c,b,f){var j=c("ac-event-emitter").EventEmitter;
var a=c("../eventNames");var i=c("../utils/propertiesAreNull");var h=2;function k(){this._items=[];
this._loadingItem=null;this._active=false}var g=k.prototype=new j();g.load=function(){this._active=true;
return this._loadNext()};g._loadNext=function(){if(this._items.length===0){return
}this._loadingItem=this._items.shift();this._loadItem(this._loadingItem)};g._loadItem=function(l){var m;
this._loadingItem=l;if(l&&l.asset&&!i(l.asset)){l.asset.on(a.loaded,this._itemLoaded.bind(this,l));
l.asset.load()}else{if(this._active){this._loadNext()}}return m};g._itemLoaded=function(m,l){this.trigger(a.progress,{asset:m.asset,binaries:l});
if(this._active===true){this._loadNext()}};g.pause=function(){if(this._loadingItem){this._loadingItem.asset.pause();
this._items.unshift(this._loadingItem);this._loadingItem=null}this._active=false
};g.getItems=function(){return this._items};g.remove=function(o){var n=this._active;
var m;var p;var l=null;if(this._loadingItem&&this._loadingItem.asset===o){p=this._loadingItem;
this.pause()}for(m=0;m<this._items.length;m+=1){if(this._items[m].asset===o){p=this._items[m];
l=m;break}}p.asset.destroy();if(l!==null){this._items.splice(l,1)}if(n&&this._active===false){this.load()
}};g.add=function(n,l){var m=this._active;var o=true;l=(typeof l==="number")?l:h;
if(this._loadingItem&&this._loadingItem.priority<=l){o=false}if(o===true){this.pause()
}this._items.push({asset:n,priority:l});this._sort();if(m&&this._active===false){this.load()
}};g._sort=function(){this._items.sort(function(m,l){if(m.priority<l.priority){return -1
}return 1})};var d=new k();d.load();d.LoadingQueue=k;b.exports=d},{"../eventNames":342,"../utils/propertiesAreNull":344,"ac-event-emitter":false}],332:[function(h,d,k){var m=h("ac-base").Element;
var j=h("ac-object");var p=h("ac-ajax");var n=h("../utils/destroy");var q=h("ac-event-emitter").EventEmitter;
var c=h("../eventNames");var b=h("./MediaObject/Loader");var g=h("./MediaObject/Loader/QueuedLoader");
var a=h("./MediaObject/View");var l;var i={preload:false,autoplay:false,fadeToEndframe:false,transitionDuration:0.4,frameRate:24,queueLoading:false,loadPriority:null};
var f={posterframeSrc:".posterframe",endstateSrc:".endstate"};var o=function(r,t,s){this.container=m.getElementById(r);
if(!this.container){throw"MediaObject: requires valid DOM Node for ‘container’"
}this.options=j.defaults(i,s||{});this.mediaSrc=j.defaults(f,t||{});if(this.mediaSrc.basePath){this.mediaSrc.basePath=this._forceTrailingSlash(this.mediaSrc.basePath)
}this._media=null;this._mediaElement=null;this._mediaEmitter=null;this._loadObject=null;
this._totalFrames=null;this.duration=null;this.ended=false;this.loader=null;this.dataOptionsAttribute="mediaObject";
this.dataAssetOptionsAttribute="mediaObject-asset";this.ready=false;this._updateOptionsFromDataAttribute();
this._mediaExistsSrc=this._constructMediaExistsSrc();this.view=new a(this);if(this.options.preload===true||this.options.autoplay===true){this.load()
}};l=o.prototype=new q();l.enhance=function(){if(!this.view.enhanced){this._generate();
this.view.enhance().then(function(){this.trigger(c.enhance,this)}.bind(this))}};
l.degrade=function(){if(this._media){this.pause()}if(this.view){this.view.degrade();
this.trigger(c.degrade,this)}};l._generate=function(){if(this.loader===null){if(this.options.queueLoading){this.loader=new g(this._loadObject,this.options.loadPriority);
this.prioritize=this.loader.prioritize.bind(this.loader)}else{this.loader=new b(this._loadObject)
}this._addEventListeners()}};l._forceTrailingSlash=function(r){if(r&&r.lastIndexOf("/")!==r.length-1){r=r+"/"
}return r};l._updateOptionsFromDataAttribute=function(){var r=this._parseDataAttributeOptions(this.container,this.dataOptionsAttribute);
var s=this._parseDataAttributeOptions(this.container,this.dataAssetOptionsAttribute);
j.defaults(this.options,r||{});j.defaults(this.mediaSrc,s||{})};l._parseDataAttributeOptions=function(u,s){u=m.getElementById(u);
var v=u.getAttribute("data-"+s);var r;var t={};var w;if(v&&v.length>0){r=v.split(",");
if(r&&r.length>0){r.forEach(function(x){w=x.split(":");t[w[0]]=w[1]})}}return t
};l._constructMediaExistsSrc=function(){var r="";var s=this.mediaSrc.basePath?this._forceTrailingSlash(this.mediaSrc.basePath):"";
r=s+this.mediaSrc.filename+"."+this.mediaSrc.fileFormat;return r};l.load=function(){if(this.loader===null||this.loader.loaded!==true){this._generate();
this.trigger(c.loadstart,this);this._load();return this.loader.load()}};l._load=function(){this.once(c.loaded,this._onReady,this)
};l.play=function(r){if(!this.ready){this.load();this.options.autoplay=true;return
}if(!this._media.paused){return false}this._play(r);this.trigger(c.play,this)};
l._play=function(r){if(this.ready&&this._media!==null){if(typeof r==="number"){this.setPlaybackRate(r)
}this._media.play()}};l.pause=function(){if(this._media.paused){return false}this._pause();
this.trigger(c.pause,this)};l._pause=function(){this._media.pause()};l.reset=function(){this._reset()
};l._reset=function(){if(this.ready){this.setTime(0)}};l.stop=function(){this.options.autoplay=false;
this._stop();this.trigger(c.stop,this)};l._stop=function(){this._pause();this.reset()
};l.setTime=function(r){if(r<0){r=0}if(r>this.duration){r=this.duration}return this._media.currentTime=r
};l.goToFrame=function(s){var r=s/this.options.frameRate;return this.setTime(r)
};l.goToDurationPercent=function(r){var s=r*this.duration;return this.setTime(s)
};l.currentFrame=function(){return Math.floor(this.currentTime()*this.options.frameRate)
};l.currentTime=function(){return this._media.currentTime};l.getCurrentTime=function(){return this._media.currentTime
};l.getPlaybackRate=function(){return this._media.playbackRate};l.setPlaybackRate=function(r){return this._media.playbackRate=r
};l._addEventListeners=function(){this._mediaEmitter.on(c.ended,this._onEnded,this);
this.loader.once(c.loaded,this._onLoad,this);this.loader.once(c.errored,this._onError,this)
};l.destroy=function(){this.trigger(c.destroy,this);this._mediaEmitter.off();n(this,true)
};l._getTotalFrames=function(){return this.duration*this.options.frameRate};l.mediaExists=function(){this._request=p.create({method:"HEAD",url:this._mediaExistsSrc,timeout:2000});
return this._request.send()};l._onReady=function(){this.ready=true;this.duration=this._media.duration;
this._totalFrames=this._getTotalFrames();this._mediaEmitter.on("durationchange",function(){this.duration=this._media.duration;
this._totalFrames=this._getTotalFrames()},this);this.trigger(c.ready,this);if(this.options.autoplay===true){this.options.autoplay=false;
if(this.view.enhanced===false){this.enhance()}this.play()}};l._onEnded=function(){this.ended=true;
this.trigger(c.ended,this)};l._onLoad=function(){this.loaded=true;this.trigger(c.loaded,this)
};l._onError=function(){this.degrade()};d.exports=o},{"../eventNames":342,"../utils/destroy":343,"./MediaObject/Loader":334,"./MediaObject/Loader/QueuedLoader":335,"./MediaObject/View":337,"ac-ajax":276,"ac-base":false,"ac-event-emitter":false,"ac-object":346}],333:[function(f,c,j){try{var b=f("ac-flow-x").Flow
}catch(h){}var i=f("ac-object");var a=f("../../eventNames");var m=f("../MediaObject");
var l;var g={};var d={};var k=function(n,p,o){p=i.defaults(d,p||{});o=i.defaults(g,o||{});
this.canvas=null;m.apply(this,arguments)};l=k.prototype=i.create(m.prototype);l._generate=function(){if(this._media!==null||b===undefined){return
}var o;var p=document.createElement("canvas");var n={element:p,preload:false,superFrames:this.options.superFrames||false,reversable:this.options.reversable||false,keyframeCache:this.options.keyframeCache||false,benchmark:this.options.benchmark||false,multithread:this.options.multithread||false,preventDraw:this.options.preventDraw||false,renderType:this.options.renderType||"default"};
var q={basePath:this.mediaSrc.basePath||null,baseName:this.mediaSrc.filename||"flow",imageUrlPattern:this.mediaSrc.imageUrlPattern||"###",fileFormat:this.mediaSrc.fileFormat||"jpg",startframeFileFormat:this.mediaSrc.startframeFileFormat||null,endframeFileFormat:this.mediaSrc.endframeFileFormat||null,manifestPath:this.mediaSrc.manifestPath||null,manifestFileFormat:this.mediaSrc.manifestFileFormat||"json",diffPath:this.mediaSrc.diffPath||null,framePath:this.mediaSrc.framePath||null};
o=new b(n,q);o.frameRate=this.options.frameRate;this._media=o;this._mediaElement=o.element;
this._mediaEmitter=o;this._loadObject=o.loader;m.prototype._generate.call(this);
return this.mediaObject};l._constructMediaExistsSrc=function(){var o="";var q=this.mediaSrc.basePath?this._forceTrailingSlash(this.mediaSrc.basePath):null;
var n=this.mediaSrc.filename?this.mediaSrc.filename+"_":"_";var p=this.mediaSrc.manifestPath?this._forceTrailingSlash(this.mediaSrc.manifestPath):null;
o=(p||q)+n+"manifest."+(this.mediaSrc.manifestFileFormat||"json");return o};l._load=function(){this._mediaEmitter.once("canplaythrough",this._onReady,this)
};c.exports=k},{"../../eventNames":342,"../MediaObject":332,"ac-flow-x":299,"ac-object":346}],334:[function(d,c,f){var i=d("../../utils/destroy");
var h=d("../../utils/propertiesAreNull");var j=d("ac-event-emitter").EventEmitter;
var b=d("../../eventNames");var g;var a=function(k){this.loadObject=k;this.loaded=false;
this.loadObject.once(b.loaded,this._onLoad,this);this.loadObject.once(b.errored,this._onError,this)
};g=a.prototype=new j();g.load=function(){if(!this.loaded){return this._load()}};
g.pause=function(){if(!this.loaded){this.loadObject.pause()}};g._load=function(){return this.loadObject.load()
};g._onLoad=function(){this.loaded=true;this.trigger(b.loaded)};g._onError=function(){this.trigger(b.errored)
};g.destroy=function(){if(!h(this.loadObject)){this.pause();if(typeof this.loadObject.destroy==="function"){this.loadObject.destroy()
}}i(this,false)};c.exports=a},{"../../eventNames":342,"../../utils/destroy":343,"../../utils/propertiesAreNull":344,"ac-event-emitter":false}],335:[function(d,b,h){var f=d("ac-object");
var a=d("../../../eventNames");var g=d("../../LoadingQueue");var j=d("../Loader");
var i;var c=function(l,k){this.priority=k;j.apply(this,[l])};i=c.prototype=f.create(j.prototype);
i.prioritize=function(k){this.priority=k;this.loadObject.pause();g.remove(this.loadObject);
this.load()};i._load=function(){if(this.promise){g.add(this.loadObject,this.priority)
}else{this.promise=new Promise(function(l,k){this.loadObject.once(a.loaded,l);this.loadObject.once(a.errored,k);
g.add(this.loadObject,this.priority)}.bind(this))}return this.promise};b.exports=c
},{"../../../eventNames":342,"../../LoadingQueue":331,"../Loader":334,"ac-object":346}],336:[function(d,b,h){var o=d("ac-base").Environment;
var g=d("ac-object");var n=d("ac-asset-loader").AssetLoader;var l=d("ac-deferred").Deferred;
var j=d("ac-deferred").all;var m=d("ac-dom-emitter").DOMEmitter;var a=d("../../eventNames");
var k=d("../MediaObject");var q=d("ac-asset-loader").Asset.Video;var i;var f={loop:false};
var c={filename:"h264",fileFormat:"mp4"};var p=function(r,t,s){t=g.defaults(c,t||{});
s=g.defaults(f,s||{});k.call(this,r,t,s)};i=p.prototype=g.create(k.prototype);i._generate=function(){if(this._media!==null){return
}var r=document.createElement("video");var s=this._mediaExistsSrc;var u=new q(s,{element:r,forceElementLoading:this.options.forceElementLoading});
var t=new n(u);if(this.options.loop===true){r.setAttribute("loop","true")}this._media=r;
this._mediaElement=r;this._mediaEmitter=new m(r);this._loadObject=t;k.prototype._generate.call(this)
};i._triggerEndedWhilePlayingInReverse=function(){if(this._media.currentTime===0){this._media.pause();
this.trigger(a.ended,this);this._mediaEmitter.off("timeupdate",this._triggerEndedWhilePlayingInReverse)
}};i._hidePosterOnTimeupdate=function(){if(this._media.currentTime>0){this.view.hideCoverElement(this.view.posterframe);
this._mediaEmitter.off("timeupdate",this._hidePosterOnTimeupdate)}};i._load=function(){var s;
var t=new l();var r=new l();if(typeof this._boundOnReady!=="function"){this._boundOnReady=this._onReady.bind(this)
}this._mediaEmitter.once("loadedmetadata",function(){if(s){window.clearInterval(s)
}t.resolve()},this);this.once(a.loaded,function(){r.resolve();if(o.Browser.name==="Safari"&&!!this._media.src.match(/^blob/)&&t.promise().status()==="pending"){s=window.setInterval(function(){if(!this._media||!this._media.duration){return true
}return isNaN(this._media.duration)}.bind(this),20);window.setTimeout(function(){window.clearInterval(s)
},7000)}},this);return j([t.promise(),r.promise()]).then(this._boundOnReady)};i._play=function(r){this._mediaEmitter.on("timeupdate",this._hidePosterOnTimeupdate,this);
k.prototype._play.apply(this,arguments);if(this.getPlaybackRate()<0){this._mediaEmitter.on("timeupdate",this._triggerEndedWhilePlayingInReverse,this)
}};i._stop=function(){this._mediaEmitter.off("timeupdate",this._hidePosterOnTimeupdate);
this._mediaEmitter.off("timeupdate",this._triggerEndedWhilePlayingInReverse);k.prototype._stop.call(this)
};i._onReady=function(){k.prototype._onReady.call(this);this._boundOnReady=null
};b.exports=p},{"../../eventNames":342,"../MediaObject":332,"ac-asset-loader":280,"ac-base":false,"ac-dom-emitter":69,"ac-object":346}],337:[function(f,d,g){var i=f("ac-base").Element;
var c=f("../../eventNames");var m=f("ac-asset-loader").AssetLoader;var j=f("ac-deferred").Deferred;
var l=f("ac-deferred").all;var k=/\w+\.(?:jpg|png)$/;var a={posterframe:"mediaObject-posterframe",endstate:"mediaObject-endstate"};
function b(n){this.container=n.container;this.mediaObject=n;this.enhanced=false;
this.posterframe=null;this.endstate=null;this.mediaObject.on(c.play,this._onPlay,this);
this.mediaObject.on(c.pause,this._onPause,this);this.mediaObject.on(c.ended,this._onEnded,this)
}var h=b.prototype;h.enhance=function(){var r=new j();var q;var s;var p=function(t){this.posterframe=t||null
}.bind(this);var o=function(t){this.endstate=t||null}.bind(this);var n=function(){if(this.mediaObject&&this.mediaObject._mediaElement){i.addClassName(this.container,"mediaObject-enhanced");
i.addClassName(this.mediaObject._mediaElement,"mediaObject-element");this.enhanced=true;
window.requestAnimationFrame(function(){if(this.mediaObject&&this.mediaObject._mediaElement){this.hideCoverElement(this.endstate);
this._inject();i.setStyle(this.mediaObject._mediaElement,{visibility:"hidden"});
window.requestAnimationFrame(function(){if(this.mediaObject&&this.mediaObject._mediaElement){i.getBoundingBox(this.mediaObject._mediaElement);
i.setStyle(this.mediaObject._mediaElement,{visibility:"visible"});r.resolve()}}.bind(this))
}}.bind(this))}}.bind(this);if(!this.enhanced){s=this._createCoverElement(this.mediaObject.mediaSrc.posterframeSrc,a.posterframe);
q=this._createCoverElement(this.mediaObject.mediaSrc.endstateSrc,a.endstate);s.then(p);
q.then(o);l([s,q]).then(n)}else{r.reject()}return r};h.degrade=function(){this.showCoverElement(this.endstate,false);
window.requestAnimationFrame(function(){this._remove();this.posterframe=null;this.endstate=null;
this.enhanced=false;i.addClassName(this.container,"mediaObject-degraded");this.mediaObject.destroy()
}.bind(this))};h._createCoverElement=function(q,n){var o;var p;if(k.test(q)){p=this._loadImage(q,n)
}else{o=i.select(q,this.container);p=new j().resolve(o)}return p};h._loadImage=function(q,o){var n=new m([q]);
function p(s){var r=s[0];r.width=r.width;r.height=r.height;r.alt="";r.className=o;
return r}return n.load().then(p)};h._inject=function(){i.insert(this.mediaObject._mediaElement,this.container);
[this.posterframe,this.endstate].forEach(function(n){if(n&&!this.container.contains(n)){i.insert(n,this.container)
}},this)};h._remove=function(){var n=[this.mediaObject._mediaElement];if(!k.test(this.mediaObject.posterframeSrc)){n.push(this.posterframe)
}n.forEach(function(o){if(i.isElement(o)&&this.container.contains(o)){this.container.removeChild(o)
}},this)};h.hideCoverElements=function(){this.hideCoverElement(this.posterframe);
this.hideCoverElement(this.endstate)};h.hideCoverElement=function(o,n){if(o){if(n){this._addOpacityTransition(o)
}else{this._removeTransition(o)}window.requestAnimationFrame(function(){i.setStyle(o,{opacity:0,zIndex:1})
}.bind(this))}};h.showCoverElement=function(p,o){var n=function(){this._removeTransition.bind(this,p);
i.removeVendorPrefixEventListener(p,"transitionEnd",n)}.bind(this);if(p){if(o){this._addOpacityTransition(p);
i.addVendorPrefixEventListener(p,"transitionEnd",n)}else{this._removeTransition(p)
}window.requestAnimationFrame(function(){i.setStyle(p,{opacity:1,zIndex:1001})}.bind(this))
}};h._removeTransition=function(n){i.setVendorPrefixStyle(n,"transition","none")
};h._addOpacityTransition=function(n){i.setVendorPrefixStyle(n,"transition","opacity "+this.mediaObject.options.transitionDuration+"s ease-out")
};h._onPlay=function(){i.removeClassName(this.container,"mediaObject-ended");i.addClassName(this.container,"mediaObject-playing");
this.hideCoverElements()};h._onPause=function(){i.removeClassName(this.container,"mediaObject-playing")
};h._onEnded=function(){i.removeClassName(this.container,"mediaObject-playing");
i.addClassName(this.container,"mediaObject-ended");if(this.endstateElement){this.showCoverElement(this.endstate,false)
}};d.exports=b},{"../../eventNames":342,"ac-asset-loader":280,"ac-base":false}],338:[function(c,b,g){var i=c("./KeyframeOnPause/ImageOverlayController");
var h,d=c("ac-object"),a=c("ac-clock");var f={overlayLoadDelay:250,overlayClassName:"image-overlay",overlayDirPath:"./overlay",overlayPrefix:"image_",overlayPattern:"####",overlayFileType:"png",clock:a};
var j=function(){};h=j.prototype;h.decorate=function(m,k){var l=d.defaults(f,k);
m.keyframeOnPauseController=new i(m,l);m.container.appendChild(m.keyframeOnPauseController.el);
return m};b.exports=new j()},{"./KeyframeOnPause/ImageOverlayController":339,"ac-clock":293,"ac-object":346}],339:[function(b,c,a){var g,f=b("ac-event-emitter").EventEmitter,h=b("ac-dom-emitter").DOMEmitter;
var d=function(j,i){this.mediaObject=j;this.options=i;this.active=false;this.el=this._createOverlay();
this._overlaySetTime=null;this._setEventTarget();this._bindEvents()};g=d.prototype;
g.applyOverlay=function(k){k=k||this.mediaObject.currentFrame();var i=this._getImagePath(k),j=this._getContainerDimensions(this.mediaObject.container);
this.el.style.backgroundImage="url("+i+")";this.el.style.backgroundSize=j.width+"px "+j.height+"px";
this.active=true;this.mediaObject.trigger("overlay-applied")};g.removeOverlay=function(){this.el.style.backgroundImage="inherit";
this.active=false;this.mediaObject.trigger("overlay-removed")};g._createOverlay=function(){var i=document.createElement("div");
i.className=this.options.overlayClassName;return i};g._onMetadataLoaded=function(){var j=this.mediaObject.width,i=this.mediaObject.height;
this.el.style.width=j;this.el.style.height=i};g._getContainerDimensions=function(j){j=j||this.mediaObject.container;
var i={width:j.offsetWidth,height:j.offsetHeight},k;if(!i.width||!i.height){k=j.getBoundingClientRect();
i.width=k.width;i.height=k.height}return i};g._getImagePath=function(m){var p=this.options.overlayDirPath,j=this.options.overlayFileType,l=this.options.overlayPrefix,k=this.options.overlayPattern,o=k.length,n=m+"",i=n.length;
while(i<o){n="0"+n;i++}return p+"/"+l+n+"."+j};g._bindEvents=function(){this._eventsTarget.on("timeupdate pause",this._onMediaObjectScrub,this);
this._eventsTarget.on("play",this._onMediaObjectPlay,this);this.options.clock.on("draw",this._clockApplyImageOverlay,this)
};g._setEventTarget=function(){this._eventsTarget=this.mediaObject._mediaEmitter
};g._onMediaObjectPlay=function(){this.removeOverlay()};g._onMediaObjectScrub=function(){this._debounceImageOverlay()
};g._debounceImageOverlay=function(){this._overlaySetTime=Date.now()+this.options.overlayLoadDelay
};g._clockApplyImageOverlay=function(){if(!this.mediaObject._media.paused||!this._overlaySetTime||this._overlaySetTime>Date.now()){return
}this._overlaySetTime=null;this.applyOverlay()};c.exports=d},{"ac-dom-emitter":69,"ac-event-emitter":false}],340:[function(c,d,a){var f=(function(){var g="https://www.apple.com/global/elements/blank.gif";
return g.replace(/global\/.*/,"")}());d.exports=function b(g){if(!!g.match(/(^http(s?))/)){return g
}if(g.match(/^\/(?!\/)/)){g=f+g.replace(/^\//,"");g=g.replace(/(^.+)(\/105\/)/,"$1/")
}return g}},{}],341:[function(c,f,b){var h=c("./MediaObject/Flow");var a=c("./MediaObject/Video");
var g=c("./MediaObject/decorators/KeyframeOnPause");f.exports=function d(i,l,k){k=k||{};
var j=null;if(k.type==="h264"){j=new a(i,l,k)}if(k.type==="flow"){j=new h(i,l,k)
}if(k.keyframeOverlay){j=g.decorate(j,k.keyframeOverlay)}return j}},{"./MediaObject/Flow":333,"./MediaObject/Video":336,"./MediaObject/decorators/KeyframeOnPause":338}],342:[function(b,c,a){c.exports={degrade:"degrade",destroy:"destroy",ended:"ended",enhance:"enhance",errored:"error",loaded:"loaded",loadstart:"loadstart",pause:"pause",play:"play",progress:"progress",ready:"ready",stop:"stop"}
},{}],343:[function(b,d,a){var f=b("./propertiesAreNull");d.exports=function c(g,h){if(typeof g.off==="function"){g.off()
}window.setTimeout(function(){var i;for(i in g){if(g.hasOwnProperty(i)){if(h&&g[i]&&typeof g[i].destroy==="function"&&!f(g[i])){g[i].destroy()
}g[i]=null}}})}},{"./propertiesAreNull":344}],344:[function(b,c,a){c.exports=function d(g){var f=true;
for(var h in g){if(g.hasOwnProperty(h)){if(g[h]!==null){f=false;break}}}return f
}},{}],345:[function(b,c,a){c.exports=b(178)},{}],346:[function(b,c,a){c.exports=b(259)
},{"./ac-object/clone":347,"./ac-object/create":348,"./ac-object/defaults":349,"./ac-object/extend":350,"./ac-object/getPrototypeOf":351,"./ac-object/isDate":352,"./ac-object/isEmpty":353,"./ac-object/isRegExp":354,"./ac-object/toQueryParameters":355}],347:[function(b,c,a){c.exports=b(180)
},{"./extend":350}],348:[function(b,c,a){c.exports=b(261)},{}],349:[function(b,c,a){c.exports=b(262)
},{"./extend":350}],350:[function(b,c,a){c.exports=b(182)},{}],351:[function(b,c,a){c.exports=b(183)
},{}],352:[function(b,c,a){c.exports=b(265)},{}],353:[function(b,c,a){c.exports=b(184)
},{}],354:[function(b,c,a){c.exports=b(267)},{}],355:[function(b,c,a){c.exports=b(185)
},{qs:345}],356:[function(b,c,a){c.exports=b(293)},{"./ac-clock/Clock":357,"./ac-clock/ThrottledClock":358,"./ac-clock/sharedClockInstance":359}],357:[function(b,c,a){c.exports=b(294)
},{"ac-event-emitter":false}],358:[function(b,c,a){c.exports=b(295)},{"./sharedClockInstance":359,"ac-event-emitter":false}],359:[function(b,c,a){c.exports=b(296)
},{"./Clock":357}],360:[function(b,c,a){c.exports={DeferredQueue:b("./ac-deferredqueue/DeferredQueue"),Action:b("./ac-deferredqueue/Action")}
},{"./ac-deferredqueue/Action":361,"./ac-deferredqueue/DeferredQueue":362}],361:[function(b,d,a){function c(h,g){if(typeof h!=="function"){throw new TypeError("Deferred Queue func must be a function.")
}this._options=g||{};this._options.delay=this._options.delay||0;this.__func=h}var f=c.prototype;
f.run=function(){var g=this.__func;if(typeof this._options.delay==="number"&&this._options.delay>0){window.setTimeout(function(){g()
},this._options.delay*1000)}else{g()}};d.exports=c},{}],362:[function(c,f,a){var d=c("./Action");
function b(h){this._options=h||{};this._options.autoplay=this._options.autoplay||false;
this._options.asynchronous=this._options.asynchronous||false;this._isPlaying=false;
this._isRunningAction=false;this._queue=[];this.didFinish=this.__didFinish.bind(this)
}var g=b.prototype;g.add=function(j,i){var h={};var k;if(i>0){h.delay=i}k=new d(j,h);
this._queue.push(k);if(!this._isPlaying&&this._options.autoplay===true){this.start()
}else{if(this._isPlaying){this.__runNextAction()}}};g.remove=function(h){this._queue=this._queue.filter(function(i){return i!==h
})};g.start=function(){if(this._isPlaying){return false}this._isPlaying=true;this.__runNextAction()
};g.stop=function(){if(!this._isPlaying){return false}this._isPlaying=false};g.clear=function(){this._queue=[];
this.stop()};g.__didFinish=function(){this._isRunningAction=false;this.__runNextAction()
};g.__runNextAction=function(){if(!this._isPlaying){return false}if(this._queue.length&&!this._isRunningAction){var h=this._queue.shift();
h.run();if(this._options.asynchronous===true){this._isRunningAction=true;return
}this.__runNextAction()}};f.exports=b},{"./Action":361}],363:[function(b,c,a){arguments[4][69][0].apply(a,arguments)
},{"./ac-dom-emitter/DOMEmitter":364}],364:[function(b,c,a){var g;var f=b("ac-event-emitter").EventEmitter;
var d="dom-emitter";function h(i){if(i===null){return}this.el=i;this._bindings={};
this._eventEmitter=new f()}g=h.prototype;g._parseEventNames=function(i){if(!i){return[i]
}return i.split(" ")};g._onListenerEvent=function(j,i){this.trigger(j,i,false)};
g._setListener=function(i){this._bindings[i]=this._onListenerEvent.bind(this,i);
this._addEventListener(i,this._bindings[i])};g._removeListener=function(i){this._removeEventListener(i,this._bindings[i]);
delete this._bindings[i]};g._addEventListener=function(j,k,i){if(this.el.addEventListener){this.el.addEventListener(j,k,i)
}else{if(this.el.attachEvent){this.el.attachEvent("on"+j,k)}else{target["on"+j]=k
}}return this};g._removeEventListener=function(j,k,i){if(this.el.removeEventListener){this.el.removeEventListener(j,k,i)
}else{this.el.detachEvent("on"+j,k)}return this};g._triggerInternalEvent=function(i,j){this.trigger(d+":"+i,j)
};g.on=function(i,k,j){i=this._parseEventNames(i);i.forEach(function(n,m,l){if(!this.has(l)){this._setListener(l)
}this._triggerInternalEvent("willon",{evt:l,callback:n,context:m});this._eventEmitter.on(l,n,m);
this._triggerInternalEvent("didon",{evt:l,callback:n,context:m})}.bind(this,k,j));
return this};g.off=function(i,l,k){var j=Array.prototype.slice.call(arguments,0);
i=this._parseEventNames(i);i.forEach(function(q,p,n,m){if(n.length===0){this._eventEmitter.off();
var o;for(o in this._bindings){if(this._bindings.hasOwnProperty(o)){this._removeListener(o)
}}return}this._triggerInternalEvent("willoff",{evt:m,callback:q,context:p});this._eventEmitter.off(m,q,p);
this._triggerInternalEvent("didoff",{evt:m,callback:q,context:p});if(!this.has(m)){this._removeListener(m)
}}.bind(this,l,k,j));return this};g.once=function(i,k,j){i=this._parseEventNames(i);
i.forEach(function(n,m,l){if(!this.has(l)){this._setListener(l)}this._triggerInternalEvent("willonce",{evt:l,callback:n,context:m});
this._eventEmitter.once.call(this,l,n,m);this._triggerInternalEvent("didonce",{evt:l,callback:n,context:m})
}.bind(this,k,j));return this};g.has=function(i,k,j){if(this._eventEmitter&&this._eventEmitter.has.apply(this._eventEmitter,arguments)){return true
}return false};g.trigger=function(i,j,k){i=this._parseEventNames(i);i.forEach(function(m,n,l){this._eventEmitter.trigger(l,m,n)
}.bind(this,j,k));return this};g.destroy=function(){this._triggerInternalEvent("willdestroy");
this.off();this.el=this._eventEmitter=this._bindings=null};c.exports=h},{"ac-event-emitter":false}],365:[function(b,c,a){c.exports.ValueSmoother=b("./ac-value-smoother/ValueSmoother")
},{"./ac-value-smoother/ValueSmoother":366}],366:[function(c,d,b){function a(g){g=g||this.sampling;
this.pool=new Array(g);this.raw=0;this.value=0}var f=a.prototype;f.sampling=3;f.smooth=function(h,m){var k=0;
var g=this.pool.length;if(typeof this.pool[g-this.sampling]!=="undefined"){for(var j=this.sampling;
j>0;j--){k+=this.pool[g-j]}k+=h;k/=(this.sampling+1)}else{k=h}if(!m){this.raw=h;
this._track(k,true)}return k};f._track=function(h,g){if(g){this.value=h}else{this.raw=this.value=h
}this.pool.push(h);this.pool.shift()};d.exports=a},{}],367:[function(b,c,a){c.exports=b(4)
},{"./ac-dom-nodes/createDocumentFragment":368,"./ac-dom-nodes/filterByNodeType":369,"./ac-dom-nodes/helpers/nodeTypes":371,"./ac-dom-nodes/insertAfter":373,"./ac-dom-nodes/insertBefore":374,"./ac-dom-nodes/insertFirstChild":375,"./ac-dom-nodes/insertLastChild":376,"./ac-dom-nodes/isComment":377,"./ac-dom-nodes/isDocument":378,"./ac-dom-nodes/isDocumentFragment":379,"./ac-dom-nodes/isDocumentType":380,"./ac-dom-nodes/isElement":381,"./ac-dom-nodes/isNode":382,"./ac-dom-nodes/isNodeList":383,"./ac-dom-nodes/isTextNode":384,"./ac-dom-nodes/remove":385,"./ac-dom-nodes/replace":386}],368:[function(b,c,a){c.exports=b(5)
},{}],369:[function(b,c,a){c.exports=b(6)},{"./helpers/isNodeType":370,"./helpers/nodeTypes":371}],370:[function(b,c,a){c.exports=b(7)
},{"../isNode":382}],371:[function(b,c,a){c.exports=b(8)},{}],372:[function(b,c,a){c.exports=b(9)
},{"./isNodeType":370,"./nodeTypes":371}],373:[function(b,c,a){c.exports=b(10)},{"./helpers/validate":372}],374:[function(b,c,a){c.exports=b(11)
},{"./helpers/validate":372}],375:[function(b,c,a){c.exports=b(12)},{"./helpers/validate":372}],376:[function(b,c,a){c.exports=b(13)
},{"./helpers/validate":372}],377:[function(b,c,a){c.exports=b(14)},{"./helpers/isNodeType":370,"./helpers/nodeTypes":371}],378:[function(b,c,a){c.exports=b(15)
},{"./helpers/isNodeType":370,"./helpers/nodeTypes":371}],379:[function(b,c,a){c.exports=b(16)
},{"./helpers/isNodeType":370,"./helpers/nodeTypes":371}],380:[function(b,c,a){c.exports=b(17)
},{"./helpers/isNodeType":370,"./helpers/nodeTypes":371}],381:[function(b,c,a){c.exports=b(18)
},{"./helpers/isNodeType":370,"./helpers/nodeTypes":371}],382:[function(b,c,a){c.exports=b(19)
},{}],383:[function(b,c,a){c.exports=b(20)},{}],384:[function(b,c,a){c.exports=b(21)
},{"./helpers/isNodeType":370,"./helpers/nodeTypes":371}],385:[function(b,c,a){c.exports=b(22)
},{"./helpers/validate":372}],386:[function(b,c,a){c.exports=b(23)},{"./helpers/validate":372}],387:[function(b,c,a){c.exports=b(24)
},{"./ac-dom-traversal/ancestor":388,"./ac-dom-traversal/ancestors":389,"./ac-dom-traversal/children":390,"./ac-dom-traversal/filterBySelector":391,"./ac-dom-traversal/firstChild":392,"./ac-dom-traversal/lastChild":395,"./ac-dom-traversal/matchesSelector":396,"./ac-dom-traversal/nextSibling":397,"./ac-dom-traversal/nextSiblings":398,"./ac-dom-traversal/previousSibling":399,"./ac-dom-traversal/previousSiblings":400,"./ac-dom-traversal/querySelector":401,"./ac-dom-traversal/querySelectorAll":402,"./ac-dom-traversal/shims/ie":403,"./ac-dom-traversal/siblings":404}],388:[function(b,c,a){c.exports=b(25)
},{"./helpers/validate":394,"./matchesSelector":396,"ac-dom-nodes":367}],389:[function(b,c,a){c.exports=b(26)
},{"./helpers/validate":394,"./matchesSelector":396,"ac-dom-nodes":367}],390:[function(b,c,a){c.exports=b(27)
},{"./filterBySelector":391,"./helpers/validate":394,"ac-dom-nodes":367}],391:[function(b,c,a){c.exports=b(28)
},{"./helpers/validate":394,"./matchesSelector":396}],392:[function(b,c,a){c.exports=b(29)
},{"./children":390,"./helpers/validate":394}],393:[function(b,c,a){c.exports=b(30)
},{}],394:[function(b,c,a){c.exports=b(31)},{"ac-dom-nodes":367}],395:[function(b,c,a){c.exports=b(32)
},{"./children":390,"./helpers/validate":394}],396:[function(b,c,a){c.exports=b(33)
},{"./helpers/nativeMatches":393,"./helpers/validate":394,"ac-dom-nodes":367}],397:[function(b,c,a){c.exports=b(34)
},{"./helpers/validate":394,"./matchesSelector":396,"ac-dom-nodes":367}],398:[function(b,c,a){c.exports=b(35)
},{"./helpers/validate":394,"./matchesSelector":396,"ac-dom-nodes":367}],399:[function(b,c,a){c.exports=b(36)
},{"./helpers/validate":394,"./matchesSelector":396,"ac-dom-nodes":367}],400:[function(b,c,a){c.exports=b(37)
},{"./helpers/validate":394,"./matchesSelector":396,"ac-dom-nodes":367}],401:[function(b,c,a){c.exports=b(38)
},{"./helpers/validate":394}],402:[function(b,c,a){c.exports=b(39)},{"./helpers/validate":394}],403:[function(b,c,a){c.exports=b(40)
},{"../helpers/nativeMatches":393,"../helpers/validate":394,"../vendor/sizzle/sizzle":405,"ac-dom-nodes":367}],404:[function(b,c,a){c.exports=b(41)
},{"./children":390,"./helpers/validate":394}],405:[function(b,c,a){c.exports=b(42)
},{}],406:[function(b,c,a){c.exports=b(43)},{"./ac-dom-emitter/DOMEmitter":407}],407:[function(b,c,a){c.exports=b(44)
},{"ac-dom-events":71,"ac-dom-traversal":387,"ac-event-emitter":false}],408:[function(b,c,a){c.exports=b(2)
},{"./ac-shared-instance/SharedInstance":409}],409:[function(b,c,a){c.exports=b(3)
},{}],410:[function(b,c,a){c.exports=b(45)},{"./ac-window-delegate/WindowDelegate":413,"./ac-window-delegate/WindowDelegateCustomEvent":414,"./ac-window-delegate/WindowDelegateOptimizer":415}],411:[function(b,c,a){c.exports=b(46)
},{"ac-event-emitter":false}],412:[function(b,c,a){c.exports=b(47)},{"ac-event-emitter":false}],413:[function(b,c,a){c.exports=b(48)
},{"./CustomEventController":411,"./OptimizerController":412,"./optimizers/optimizers":418,"./queries/queries":427,"ac-dom-emitter":406,"ac-shared-instance":408}],414:[function(b,c,a){c.exports=b(49)
},{"ac-event-emitter":false}],415:[function(b,c,a){c.exports=b(50)},{"ac-event-emitter":false}],416:[function(b,c,a){c.exports=b(51)
},{"../../WindowDelegateOptimizer":415,"../../queries/queries":427}],417:[function(b,c,a){c.exports=b(52)
},{"../../WindowDelegateOptimizer":415,"../../queries/queries":427}],418:[function(b,c,a){c.exports=b(53)
},{"./events/resize":416,"./events/scroll":417}],419:[function(b,c,a){c.exports=b(54)
},{}],420:[function(b,c,a){c.exports=b(55)},{}],421:[function(b,c,a){c.exports=b(56)
},{}],422:[function(b,c,a){c.exports=b(57)},{}],423:[function(b,c,a){c.exports=b(58)
},{}],424:[function(b,c,a){c.exports=b(59)},{}],425:[function(b,c,a){c.exports=b(60)
},{}],426:[function(b,c,a){c.exports=b(61)},{}],427:[function(b,c,a){c.exports=b(62)
},{"./methods/clientHeight":419,"./methods/clientWidth":420,"./methods/innerHeight":421,"./methods/innerWidth":422,"./methods/maxScrollX":423,"./methods/maxScrollY":424,"./methods/scrollX":425,"./methods/scrollY":426}],428:[function(b,c,a){c.exports={ScrollTimeUpdate:b("./ac-scroll-time-update/ScrollTimeUpdate"),ElementScrollTimeUpdate:b("./ac-scroll-time-update/ElementScrollTimeUpdate")}
},{"./ac-scroll-time-update/ElementScrollTimeUpdate":429,"./ac-scroll-time-update/ScrollTimeUpdate":430}],429:[function(c,g,b){var f=c("./ScrollTimeUpdate"),d=c("ac-window-delegate").WindowDelegate;
var h;var a=function(j,i){i=i||{};this.el=j;this._updateOnResize=false;f.call(this,0,0,i);
this.setOffsets();this._clock.on("update",this._onResizeClockUpdate,this);this._clock.on("draw",this._onResizeClockDraw,this);
d.on("resize orientationchange",this._onResize,this)};h=a.prototype=new f(null);
h.setOffsets=function(){var k=this.el.getBoundingClientRect(),j=d.scrollY(),l=k.top+j,i=k.bottom+j;
if(this.options.startInView){l=l-d.innerHeight()}if(typeof this.options.offsetTop==="function"){l=l+this.options.offsetTop()
}else{if(typeof this.options.offsetTop==="number"){l=l+this.options.offsetTop}}if(typeof this.options.offsetBottom==="function"){i=i-this.options.offsetBottom()
}else{if(typeof this.options.offsetBottom==="number"){i=i-this.options.offsetBottom
}}this.min=l;this.max=i;this._distance=this.max-this.min;return this};h._onResize=function(){this._updateOnResize=true
};h._onResizeClockUpdate=function(){if(!this._updateOnResize){return}this.setOffsets()
};h._onResizeClockDraw=function(){if(!this._updateOnResize){return}this.setCurrentTime();
this._updateOnResize=false};g.exports=a},{"./ScrollTimeUpdate":430,"ac-window-delegate":410}],430:[function(d,b,f){var g,j=d("ac-event-emitter").EventEmitter,a=d("ac-clock"),k=d("ac-window-delegate").WindowDelegate,c=d("ac-value-smoother").ValueSmoother,i=d("ac-dom-emitter").DOMEmitter;
var h=function(n,l,m){if(n===null){return}j.call(this);this.options=m||{};this.min=n;
this.max=l;this._distance=l-n;this._clock=this.options.clock||a;this._emitter=k;
this._lastTime=null;this._timeObj=null;if(this.options.el){this._target=this.options.el;
this._emitter=new i(this.options.el)}this._shouldUpdate=false;this._shouldDraw=false;
this._didInitializeSmoothing=false;this._emitter.on("scroll",this._debounceTimeUpdate,this);
this._clock.on("update",this._onClockUpdate,this);this._clock.on("draw",this._onClockDraw,this);
if(this.options.smooth){this._enableSmoothing(true)}};g=h.prototype=new j(null);
g.setCurrentTime=function(l,m){l=l||this._getCalculatedCurrentTime();if(l===this._lastTime){return
}this._timeObj={time:l,lastTime:this._lastTime};this._triggerUpdate();if(m){this._triggerDraw()
}else{this._shouldDraw=true}this._lastTime=l};g.start=function(){this._clock.start()
};g.stop=function(){this._clock.stop()};g.setSmoothing=function(l){if(typeof l!=="boolean"){return
}if(l){this._enableSmoothing();return}this._disableSmoothing()};g._getCalculatedCurrentTime=function(){var n=k.scrollY(),m=this.min,l=this.max,o=this._distance;
if(this._target){n=this._target.scrollTop}if(n<m){n=m}if(n>l){n=l}return(n-m)/(o)
};g._debounceTimeUpdate=function(){this._shouldUpdate=true};g._triggerUpdate=function(){this.trigger("_update",this._timeObj);
if(!this.options.smooth){this.trigger("update",this._timeObj)}};g._triggerDraw=function(){this.trigger("_draw",this._timeObj);
if(!this.options.smooth){this.trigger("draw",this._timeObj)}};g._onClockUpdate=function(){if(!this._shouldUpdate){return
}this.setCurrentTime();this._shouldUpdate=false};g._onClockDraw=function(){if(!this._shouldDraw){return
}this._triggerDraw();this._shouldDraw=false};g._initializeSmoothing=function(){this.options.smoothingPrecision=this.options.smoothingPrecision||4;
this.options.smoothingPoolSize=this.options.smoothingPoolSize||c.prototype.sampling;
this._smoother=new c(this.options.smoothingPoolSize);this._smoothedValues=this._lastSmoothedValues=this._lastUpdateEvent={time:null,lastTime:null};
this._didUpdateSmootherTrack=false;this._shouldUpdateAndDraw=false;this._didInitializeSmoothing=true
};g._enableSmoothing=function(l){if(!this._didInitializeSmoothing){this._initializeSmoothing()
}if(!this.options.smooth||l){this.on("_update",this._updateSmoothing,this);this._clock.on("update",this._smoothOnUpdate,this);
this._clock.on("draw",this._smoothOnDraw,this);this.options.smooth=true}};g._disableSmoothing=function(){this.off("_update",this._updateSmoothing,this);
this._clock.off("update",this._smoothOnUpdate,this);this._clock.off("draw",this._smoothOnDraw,this);
this.options.smooth=false};g._updateSmoothing=function(l){l.lastTime=l.lastTime||0;
this._lastUpdateEvent=l;this._didUpdateSmootherTrack=true};g._smoothOnUpdate=function(){var l=(this._didUpdateSmootherTrack||this._lastSmoothedValues.time!==this._smoothedValues.time||this._lastSmoothedValues.lastTime!==this._smoothedValues.lastTime);
if(!l){this._shouldUpdateAndDraw=false;return}this._didUpdateSmootherTrack=false;
var n=this._lastUpdateEvent.lastTime,m={};m.lastTime=this._smoothedValues.time;
m.time=this._smoother.smooth(this._lastUpdateEvent.time);if(m.lastTime===null){m.lastTime=parseFloat(n.toFixed(this.options.smoothingPrecision))
}m.time=parseFloat(m.time.toFixed(this.options.smoothingPrecision));m.lastTime=m.lastTime;
this._lastSmoothedValues=this._smoothedValues;this._smoothedValues=m;this._shouldUpdateAndDraw=true;
this.trigger("update",this._smoothedValues)};g._smoothOnDraw=function(l){if(!this._shouldUpdateAndDraw){return
}this.trigger("draw",this._smoothedValues);this._shouldUpdateAndDraw=false};b.exports=h
},{"ac-clock":356,"ac-dom-emitter":363,"ac-event-emitter":false,"ac-value-smoother":365,"ac-window-delegate":410}],431:[function(b,c,a){a.ScrollView=b("./ac-scrollview/ScrollView")
},{"./ac-scrollview/ScrollView":438}],432:[function(c,d,a){function b(){}b.prototype={on:function(){return this._parent.on.apply(this._parent,arguments)
},off:function(){return this._parent.off.apply(this._parent,arguments)},trigger:function(){return this._parent.trigger.apply(this._parent,arguments)
},once:function(){return this._parent.once.apply(this._parent,arguments)},setEnabled:function(f){this._parent.setEnabled.apply(this._parent,arguments)
},isEnabled:function(){return this._parent.isEnabled.apply(this._parent,arguments)
}};d.exports=b},{}],433:[function(f,g,d){var a=function(j,i){return Math.max(0,Math.min(j,i))
};var h=function(i,j){var k={x:0,y:0};if(i.x<0){k.x=-i.x}else{if(i.x>j.x){k.x=j.x-i.x
}}if(i.y<0){k.y=-i.y}else{if(i.y>j.y){k.y=j.y-i.y}}return k};var c=function(i,j){i.x=a(i.x,j.x);
i.y=a(i.y,j.y);return i};var b=function(j,i,k){var l=h(i,k);if(l.x!==0){i.x=j.x+((i.x-j.x)*0.5)
}if(l.y!==0){i.y=j.y+((i.y-j.y)*0.5)}return i};g.exports={calculateOverscrollAmount:h,constrainValue:a,constrainToScrollBounds:c,halfInputIfOutsideOfScrollBounds:b}
},{}],434:[function(b,c,a){var h=b("./BaseInputDecorator");var f=4;function g(i){this._parent=i;
this._currentAxis=undefined}var d=g.prototype=new h();d.inputStart=function(i,l,j,k){this._currentAxis=false;
this._firstTouch={x:i,y:l};this._parent.inputStart.apply(this._parent,arguments)
};d.inputMove=function(i,l,j,k){if(!this._currentAxis){if(Math.abs(i-this._firstTouch.x)>f){this._currentAxis="x"
}else{if(Math.abs(l-this._firstTouch.y)>f){this._currentAxis="y"}}}if(this._currentAxis==="x"){l=this._firstTouch.y
}else{if(this._currentAxis==="y"){i=this._firstTouch.x}}this._parent.inputMove.apply(this._parent,arguments)
};d.inputEnd=function(i,j){this._parent.inputEnd.apply(this._parent,arguments)};
c.exports=g},{"./BaseInputDecorator":432}],435:[function(c,b,f){var k=c("./utilities").assign;
var j=c("./Constraints");var i=c("./utilities").fastFivePointPrecision;var h=(1000/60);
var d={friction:{x:0.95,y:0.95},outOfBounds:{deceleration:0.05,acceleration:0.1}};
function a(l){this.options=k({},d,l||{});if(l&&l.friction){var m=l.friction;if(typeof m!=="object"||!("x" in m)||!("y" in m)){throw new TypeError("InertiaCalculator expects custom friction to be an object with numeric x/y properties.")
}}if(l&&l.outOfBounds){var n=l.outOfBounds;if(typeof n!=="object"||!("acceleration" in n)||!("deceleration" in n)){throw new TypeError("InertiaCalculator expects custom outOfBounds coefficients to be an object with numeric acceleration/deceleration properties.")
}}}var g=a.prototype;g.calculateInertiaPositions=function(l,o,m,q,p){var s=[];if(!p){p=this.options.friction
}o={x:o.x*h,y:o.y*h};if(m.x===0){o.x=0}if(m.y===0){o.y=0}while(Math.abs(o.x)>0.01||Math.abs(o.y)>0.01){if(s.length>5000){console.warn("potential loop detected.");
return s}l.x=l.x+o.x;l.y=l.y+o.y;o.x=o.x*p.x;o.y=o.y*p.y;l.x=i(l.x);l.y=i(l.y);
var r=j.calculateOverscrollAmount(l,m);if(r.x!==0){if(r.x*o.x<=0){o.x+=r.x*this.options.outOfBounds.deceleration
}else{o.x=r.x*this.options.outOfBounds.acceleration}}if(r.y!==0){if(r.y*o.y<=0){o.y+=r.y*this.options.outOfBounds.deceleration
}else{o.y=r.y*this.options.outOfBounds.acceleration}}if(q){j.constrainToScrollBounds(l,m)
}s.push({x:l.x,y:l.y,velocity:{x:i(o.x/h),y:i(o.y/h)}})}if(s.length>1){var n=s[s.length-1];
n.x=Math.round(n.x);n.y=Math.round(n.y);j.constrainToScrollBounds(n,m)}return s
};g.calculateInitialVelocity=function(o,q){var p={};var m=1-this.options.friction.x;
var r=1-this.options.friction.y;var n=q.x-o.x;p.x=i((m*n)/h);var l=q.y-o.y;p.y=i((r*l)/h);
return p};g.calculateFrictionToStopAtPoint=function(p,n,o){var q={};var m=Math.abs(o.x-p.x);
q.x=i(1-((Math.abs(n.x)*h)/m));var l=Math.abs(o.y-p.y);q.y=i(1-((Math.abs(n.y)*h)/l));
q.y=Math.min(1,q.y);q.x=Math.min(1,Math.max(0,q.x));q.y=Math.min(1,Math.max(0,q.y));
if(isNaN(q.x)){q.x=0}if(isNaN(q.y)){q.y=0}return q};b.exports=a},{"./Constraints":433,"./utilities":445}],436:[function(c,d,b){var g=c("ac-event-emitter").EventEmitter;
var h=c("ac-clock").Clock;function a(i){this._clock=new h();this._isPlaying=false;
this._scroll=i;this._currentFrameCnt=0;this._accumulatedTime=0;this._currentAnimationDuration=0;
this._clock.on("draw",this._draw,this)}var f=a.prototype=new g();f.stop=function(){if(this._isPlaying){this._clock.stop();
this._isPlaying=false;this.trigger("end")}this._frames=[]};f.isPlaying=function(){return this._isPlaying
};f.getCurrentFrame=function(){return this._currentFrame};f.getNextFrame=function(j){this._accumulatedTime+=j.delta;
var i=Math.round(this._accumulatedTime/(1000/60));this._currentFrame=this._frames[i];
return this._currentFrame};f._draw=function(j){var i=this.getNextFrame(j);if(!this._isPlaying||(this._accumulatedTime>this._currentAnimationDuration)){this._isPlaying=false;
this.trigger("end");this._clock.stop();return}this._scroll.setPosition(i)};f.play=function(i){if(this._isPlaying){return
}this._frames=i;this._isPlaying=true;this._accumulatedTime=0;this._currentFrameCnt=this._frames.length-1;
this._currentFrame=this._frames[0];this._currentAnimationDuration=(this._currentFrameCnt/60)*1000;
this._clock.start()};d.exports=a},{"ac-clock":356,"ac-event-emitter":false}],437:[function(b,c,a){var i=b("./BaseInputDecorator");
var h=45;var g=-h;function d(j,k){this._parent=j;this._axis=k;this._inputs=[];this._startTouchMove=null;
this._shouldPreventDefault=null}var f=d.prototype=new i();f._calculateTouchAngles=function(){var q={x:0,y:0};
var l=this._inputs[this._inputs.length-1];var n=this._inputs[0];var j=l.x-n.x;var p=l.y-n.y;
var o=Math.sqrt(j*j+p*p);if(o===0){return false}var m=Math.asin(p/o);var k=Math.acos(j/o);
q.x=m*(180/Math.PI);q.y=k*(180/Math.PI);q.y-=90;return q};f.inputStart=function(j,m,k,l){this._inputs=[{x:j,y:m}];
this._startTouchMove={x:j,y:m,timeStamp:k,e:l};this._checkToPreventDefault=true;
this._parent.inputStart.apply(this._parent,arguments)};f._angleTest=function(j){return(j<=h&&j>=g)?true:false
};f._preventDefault=function(j,m,k,l){l.preventDefault();this._shouldPreventDefault=true;
this._parent.inputMove.apply(this._parent,arguments)};f.inputMove=function(j,n,k,l){this._inputs[1]={x:j,y:n};
var m=this._calculateTouchAngles();if((this._axis==="y"&&this._angleTest(m.y))||(this._axis==="x"&&this._angleTest(m.x))||(this._axis===true&&(this._angleTest(m.x)||this._angleTest(m.y)))){if(this._shouldPreventDefault!==false){this._preventDefault.apply(this,arguments)
}}else{if(this._shouldPreventDefault===true){this._preventDefault.apply(this,arguments)
}else{this._shouldPreventDefault=false}}};f.inputEnd=function(j,k){this._shouldPreventDefault=true;
this._parent.inputEnd.apply(this._parent,arguments)};c.exports=d},{"./BaseInputDecorator":432}],438:[function(h,a,s){var l=h("./utilities").assign;
var d=h("ac-event-emitter").EventEmitter;var p=h("./InertiaCalculator");var b=h("./input/MouseWheel");
var g=h("./input/MouseDrag");var m=h("./input/Touch");var n=h("./input/Input");
var q=h("./InputPreventDefault");var o=h("./DirectionalLock");var t=h("./model/Scroll");
var c=h("./Transition");var f=h("./Constraints");var j=h("./InertiaPlayer");var i={alwaysBounceHorizontal:false,alwaysBounceVertical:false,bounces:true,directionalLockEnabled:false,mouseDrag:true,mouseWheel:true,preventDefault:true,scrollingEnabled:true,touch:true};
function r(v,u){if(!v||!v instanceof Element){throw new Error("Element required as first argument for constructor.")
}if(!u||u===null||!u.width||!u.height||!u.contentSize){throw new Error("Scroll View requires a second argument, an object, specifying width, height, and contentSize.")
}this.options=l({},i,u);l(this,{_element:v,_width:this.options.width,_height:this.options.height,_contentSize:this.options.contentSize,_isDecelerating:false});
this._scroll=new t();this._inputNormalize=new n(this._scroll);this._inputNormalize.setEnabled(this.options.scrollingEnabled);
if(this.options.preventDefault){this._inputNormalize=new q(this._inputNormalize,this.options.preventDefault)
}if(this.options.directionalLockEnabled){this._inputNormalize=new o(this._inputNormalize)
}this._inputNormalize.on("input_start",this.inputStart,this);this._inputNormalize.on("input_move",this.inputMove,this);
this._inputNormalize.on("input_end",this.inputEnd,this);if(this.options.touch===true){this._touch=new m(this._inputNormalize,v)
}if(this.options.mouseWheel===true){this._mouseWheel=new b(this._inputNormalize,v)
}if(this.options.mouseDrag===true){this._mouseDrag=new g(this._inputNormalize,v)
}this._inertiaCalculator=new p(this.options);this._inertiaPlayer=new j(this._scroll);
this._inertiaPlayer.on("end",function(){this._isDecelerating=false;this.trigger("didEndDecelerating")
},this);this._scroll.propagateTo(this)}var k=r.prototype=new d();k.isDecelerating=function(){return this._isDecelerating
};k._animateToPosition=function(u){var v=this;var w=this.getPosition();this._transition=new c({draw:function(x){v.setPosition({y:w.y+(u.y-w.y)*x,x:w.x+(u.x-w.x)*x})
}});this._transition.play()};k._handleConstraints=function(v){var y=this.getContentSize();
var u=this.getHeight();var x=this.getWidth();var w=this.getScrollDistance();v=f.halfInputIfOutsideOfScrollBounds(this.getPosition(),v,w);
if(!this.options.alwaysBounceHorizontal&&y.height>u&&y.width<=x){v.x=0}if(!this.options.alwaysBounceVertical&&y.width>x&&y.height<=u){v.y=0
}if(this.options.bounces===false){return f.constrainToScrollBounds(v,w)}return v
};k.setScrollingEnabled=function(u){this._inputNormalize.setEnabled(u)};k.isScrollingEnabled=function(){return this._inputNormalize.isEnabled()
};k.getPosition=function(){return this._scroll.getPosition()};k.setPosition=function(u,v){if(v===undefined){this._scroll.setPosition(u);
if(this._inertiaPlayer.isPlaying()){var x=this.getPosition();var w=this._inertiaPlayer.getCurrentFrame();
var y=this._inertiaCalculator.calculateInertiaPositions(x,w.velocity,this.getScrollDistance(),!this.options.bounces);
this._inertiaPlayer.stop();this._inertiaPlayer.play(y)}}else{if(v===false){this._inertiaPlayer.stop();
this._scroll.setPosition(u)}else{this._inertiaPlayer.stop();this._animateToPosition(u)
}}};k.inertialScrollTo=function(u,v){if(this._inertiaPlayer.isPlaying()){this._inertiaPlayer.stop()
}var x=this.getPosition();var z=f.calculateOverscrollAmount(x,this.getScrollDistance());
if(z.x!==0){v.x=0.1}if(z.y!==0){v.y=0.1}var w=this._inertiaCalculator.calculateFrictionToStopAtPoint(this.getPosition(),v,u);
var y=this._inertiaCalculator.calculateInertiaPositions(x,v,this.getScrollDistance(),!this.options.bounces,w);
this._inertiaPlayer.play(y)};k.setHeight=function(u){this._height=u};k.setWidth=function(u){this._width=u
};k.getHeight=function(){return this._height};k.getWidth=function(){return this._width
};k.setContentSize=function(u){this._contentSize.height=u.height;this._contentSize.width=u.width;
return this};k.getContentSize=function(){return this._contentSize};k.getScrollYDistance=function(){var u=this._contentSize.height-this._height;
if(u<0){u=0}return u};k.getScrollXDistance=function(){var u=this._contentSize.width-this._width;
if(u<0){u=0}return u};k.getScrollDistance=function(){return{x:this.getScrollXDistance(),y:this.getScrollYDistance()}
};k.inputStart=function(u){this._tracking=false;this._isDecelerating=false;this._inertiaPlayer.stop();
this.trigger("inputStart",u)};k.inputMove=function(u){if(!this._tracking){this._tracking=true;
this.trigger("willBeginTracking")}if(u&&u.originalEvent&&u.originalEvent.type==="mousewheel"){u=f.constrainToScrollBounds(u,this.getScrollDistance())
}u=this._handleConstraints(u);this._scroll.setPosition({x:u.x,y:u.y,timeStamp:u.timeStamp,originalEvent:u.originalEvent})
};k.inputEnd=function(w){var z=w.velocity;var A=this.getPosition();var v=this.getScrollDistance();
var B=f.calculateOverscrollAmount(A,v);var x=this._inertiaCalculator.calculateInitialVelocity(B,{x:0,y:0});
if(this._contentSize.width===this._width&&!this.options.alwaysBounceHorizontal){z.x=0
}else{if(this._contentSize.height===this._height&&!this.options.alwaysBounceVertical){z.y=0
}}if(z.x===0&&B.x!==0){z.x=x.x}if(z.y===0&&B.y!==0){z.y=x.y}if(z.x===0&&z.y===0){this.trigger("didEndTracking",false);
this.trigger("willEndTracking",{velocity:z,targetPosition:A,originalEvent:w.originalEvent})
}else{var u=this._inertiaCalculator.calculateInertiaPositions(A,z,this.getScrollDistance(),!this.options.bounces);
var y=u[u.length-1];this.trigger("willEndTracking",{velocity:z,targetPosition:y,originalEvent:w.originalEvent});
this.trigger("didEndTracking",true);this._isDecelerating=true;this.trigger("willBeginDecelerating");
this._inertiaPlayer.play(u)}};a.exports=r},{"./Constraints":433,"./DirectionalLock":434,"./InertiaCalculator":435,"./InertiaPlayer":436,"./InputPreventDefault":437,"./Transition":439,"./input/Input":440,"./input/MouseDrag":441,"./input/MouseWheel":442,"./input/Touch":443,"./model/Scroll":444,"./utilities":445,"ac-event-emitter":false}],439:[function(c,b,f){var j=c("./utilities").assign;
var d={duration:350};var i=function(l,k,n,m){l/=m/2;if(l<1){return n/2*l*l+k}l--;
return -n/2*(l*(l-2)-1)+k};var a=function(l,k,n,m){l/=m;return -n*l*(l-2)+k};function h(k){j(this,d,k);
if(!k.draw){throw new Error("no draw function specified")}}var g=h.prototype;g.update=function(m){if(!this.startTime){this.startTime=m
}var l=(m-this.startTime)/this.duration;var k=i(l,0,1,1);if(l<1){this.draw(k);this._raf=window.requestAnimationFrame(this.update.bind(this))
}else{this.draw(1)}};g.play=function(){window.requestAnimationFrame(this.update.bind(this))
};g.stop=function(){window.cancelAnimationFrame(this._raf)};b.exports=h},{"./utilities":445}],440:[function(b,c,a){var f=b("ac-event-emitter").EventEmitter;
var h=b("../utilities").fastFivePointPrecision;function g(i){this._startingInputPosition=null;
this._lastInputPosition=null;this._inputPositions=[];this._scroll=i;this._enabled=true
}var d=g.prototype=new f();d._addPosition=function(i){this._inputPositions.push(i);
var j=Date.now();if(this._inputPositions.length>=3&&(j-this._inputPositions[0].timeStamp>100)){this._inputPositions.shift()
}};d._pruneOldPositions=function(){var i=Date.now();this._inputPositions=this._inputPositions.filter(function(j){if(i-j.timeStamp<100){return j
}})};d._calculateVelocity=function(){var k={x:0,y:0};this._pruneOldPositions();
if(this._inputPositions.length<2){return k}var l=this._inputPositions[0];var i=this._inputPositions[this._inputPositions.length-1];
var j=(i.timeStamp-l.timeStamp);k.x=-(i.x-l.x)/j;k.y=-(i.y-l.y)/j;k.x=h(k.x);k.y=h(k.y);
return k};d.setEnabled=function(i){this._enabled=i};d.isEnabled=function(){return this._enabled
};d.inputStart=function(i,m,k,j){if(!this._enabled){return}var l={x:i,y:m,timeStamp:k};
this._addPosition(l);this._startingInputPosition=l;this.trigger("input_start",{timeStamp:k,originalEvent:j})
};d.inputMove=function(i,n,l,j){if(!this._enabled){return}var m={x:i,y:n,timeStamp:l};
this._addPosition(m);this._lastInputPosition=m;var k=this.getScrollValues();this.trigger("input_move",{x:k.x,y:k.y,timeStamp:l,originalEvent:j})
};d.inputEnd=function(j,i){if(!this._enabled){return}this.trigger("input_end",{lastInputPosition:this._lastInputPosition,timeStamp:j,originalEvent:i,velocity:this._calculateVelocity()});
this._positions=[];this._lastInputPosition=null;this._startingInputPosition=null
};d.getScrollValues=function(){var j=this._inputPositions[this._inputPositions.length-2];
var i=this._scroll.getPosition();return{x:(j.x-this._lastInputPosition.x)+i.x,y:(j.y-this._lastInputPosition.y)+i.y}
};c.exports=g},{"../utilities":445,"ac-event-emitter":false}],441:[function(b,c,a){var f=b("ac-dom-emitter").DOMEmitter;
function d(g,h){this._input=g;this._element=h;this._domEmitter=new f(h);h.style.webkitUserSelect="none";
this.bindDOMEvents()}d.prototype={bindDOMEvents:function(){var h=this._input;var j=this._element;
var i=this;var k=function(l){h.inputMove(l.pageX,l.pageY,l.timeStamp,l)};var g=function(l){if(l.type==="mouseout"&&j.contains(l.relatedTarget)){return
}i._domEmitter.off("mousemove",k);i._domEmitter.off("mouseup",g);i._domEmitter.off("mouseout",g);
h.inputEnd(l.timeStamp,l)};i._domEmitter.on("mousedown",function(l){if(l.target.tagName.match(/input|textarea|select/i)){return
}h.inputStart(l.pageX,l.pageY,l.timeStamp,l);i._domEmitter.on("mousemove",k);i._domEmitter.on("mouseup",g);
i._domEmitter.on("mouseout",g)})}};c.exports=d},{"ac-dom-emitter":69}],442:[function(d,f,c){var g=d("ac-dom-emitter").DOMEmitter;
var b=d("../utilities").assign;function a(h,i){this._inputController=h;this._element=i;
this._domEmitter=new g(i);this._scrollTop=0;this._scrollLeft=0;this._timeout=null;
this._hasStarted=false;this._boundMouseWheelComplete=this.mouseWheelComplete.bind(this);
this._lastEvent=null;this._velocities=[];this.bindDOMEvents()}a.prototype={mouseWheelComplete:function(){this._scrollTop=0;
this._scrollLeft=0;this._hasStarted=false;this._inputController.inputEnd(new Date().getTime(),this._lastEvent);
this._lastEvent=null},onMouseWheel:function(k){var i;var h;var j;if(this._hasStarted===false){this._inputController.inputStart(this._scrollLeft,this._scrollTop,k.timeStamp,k);
this._hasStarted=true}i=this._scrollTop+k.wheelDeltaY;h=this._scrollLeft+k.wheelDeltaX;
this._lastEvent=b({},k);this._scrollTop=i;this._scrollLeft=h;this._inputController.inputMove(this._scrollLeft,this._scrollTop,k.timeStamp,k);
window.clearTimeout(this._timeout);this._timeout=window.setTimeout(this._boundMouseWheelComplete,100)
},bindDOMEvents:function(){this._domEmitter.on("mousewheel",this.onMouseWheel.bind(this))
}};f.exports=a},{"../utilities":445,"ac-dom-emitter":69}],443:[function(c,d,a){var f=c("ac-dom-emitter").DOMEmitter;
function b(g,h){this._input=g;this._element=h;this._domEmitter=new f(h);this.bindDOMEvents()
}b.prototype={bindDOMEvents:function(){var g=this._input;var h=this._element;this._domEmitter.on("touchstart",function(i){if(i.touches&&i.touches[0]&&i.touches[0].target&&i.touches[0].target.tagName.match(/input|textarea|select/i)){return
}g.inputStart(i.pageX,i.pageY,i.timeStamp,i)});this._domEmitter.on("touchmove",function(i){g.inputMove(i.pageX,i.pageY,i.timeStamp,i)
});this._domEmitter.on("touchend touchcancel",function(i){g.inputEnd(i.timeStamp,i)
})}};d.exports=b},{"ac-dom-emitter":69}],444:[function(b,c,a){var f=b("ac-event-emitter").EventEmitter;
function g(){this.x=0;this.y=0}var d=g.prototype=new f();d.setPosition=function(h){if(h.x===this.x&&h.y===this.y){return
}this.x=h.x;this.y=h.y;this.trigger("scroll",{x:this.x,y:this.y,originalEvent:h.originalEvent})
};d.getPosition=function(){return{x:this.x,y:this.y}};c.exports=g},{"ac-event-emitter":false}],445:[function(d,f,c){var b=function(i,h){var j=Math.pow(10,h);
return ~~(i*j)/j};var g=function(h){return b(h,5)};var a=function(n,m){var h=function(i){if(typeof i!=="object"||i===null||i===undefined){throw new TypeError("assign: target and sources must be objects")
}return i};var o=function(i){n[i]=k[i]};n=h(n);var k;for(var j=1,l=arguments.length;
j<l;j++){k=h(arguments[j]);Object.keys(k).forEach(o)}return n};f.exports={assign:a,fastFivePointPrecision:g,fastPrecision:b}
},{}],446:[function(b,c,a){c.exports.createAmbient=b("./factories/createAmbient");
c.exports.createBasicPlayer=b("./factories/createBasicPlayer");c.exports.createClickToPlay=b("./factories/createClickToPlay");
c.exports.createGrabber=b("./factories/createGrabber");c.exports.createScrubOnScroll=b("./factories/createScrubOnScroll")
},{"./factories/createAmbient":465,"./factories/createBasicPlayer":466,"./factories/createClickToPlay":467,"./factories/createGrabber":468,"./factories/createScrubOnScroll":469}],447:[function(c,f,b){var a=c("ac-object");
var d=c("../utils/destroy");var g;var i={};function h(l,k,j){this.options=a.defaults(i,j||{});
this.mediaObject=l;if(k&&this.View){this.view=new this.View(k,this.options)}this._setupMediaObjectListeners()
}g=h.prototype={};g.View=c("./Controller/View");g.destroy=function(){this._unbindMediaObjectListeners();
d(this,false)};g._setupMediaObjectListeners=function(){this._getMediaObjectListeners().forEach(function(j){this.mediaObject[j.method](j.event,j.callback,this)
},this)};g._getMediaObjectListeners=function(){return[{method:"on",event:"play",callback:this._onPlay},{method:"on",event:"ended",callback:this._onEnded},{method:"on",event:"pause",callback:this._onPause},{method:"on",event:"stop",callback:this._onStop},{method:"on",event:"timeupdate",callback:this._onTimeupdate},{method:"once",event:"loadstart",callback:this._onLoadstart},{method:"once",event:"loaded",callback:this._onLoad},{method:"once",event:"ready",callback:this._onReady},{method:"once",event:"degrade",callback:this.destroy}]
};g._onPlay=function(){};g._onEnded=function(){};g._onPause=function(){};g._onStop=function(){};
g._onTimeupdate=function(){};g._onLoadstart=function(){};g._onLoad=function(){};
g._onReady=function(){};g._unbindMediaObjectListeners=function(){this._getMediaObjectListeners().forEach(function(j){if(this.mediaObject&&typeof this.mediaObject.off==="function"){this.mediaObject.off(j.event,j.callback)
}},this)};f.exports=h},{"../utils/destroy":470,"./Controller/View":452,"ac-object":346}],448:[function(c,f,b){var a=c("ac-object");
var h=c("../Controller");var g;var i={behavior:"play",stopableWhilePlaying:true,disableWhilePlaying:false};
function d(l,k,j){h.call(this,l,k,a.defaults(i,j||{}));this.view.on("click",this._onTriggerClicked,this);
if(this.options.behavior==="stop"||this.options.behavior==="pause"){this.view.disable()
}}g=d.prototype=a.create(h.prototype);g.View=c("./View/Trigger");g._onTriggerClicked=function(j){if(this.options.behavior==="play"){if(this.view.active&&this.options.stopableWhilePlaying){this.mediaObject.stop()
}else{if(this.mediaObject.currentTime()===this.mediaObject.duration){this.mediaObject.reset()
}this.mediaObject.play()}}else{if(this.options.behavior==="stop"){this.mediaObject.stop()
}else{if(this.options.behavior==="pause"){this.mediaObject.pause()}}}};g._reset=function(){this.view.deactivate();
this.view.enable()};g._setupMediaObjectListeners=function(){this.mediaObject.on("play",this._onPlay,this);
this.mediaObject.on("pause",this._onPause,this);this.mediaObject.on("ended",this._onEnded,this);
this.mediaObject.on("stop",this._onStop,this);this.mediaObject.once("degrade",this.destroy,this)
};g._unbindMediaObjectListeners=function(){this.mediaObject.off("play",this._onPlay);
this.mediaObject.off("pause",this._onPause);this.mediaObject.off("ended",this._onEnded);
this.mediaObject.off("stop",this._onStop);this.view.off("click",this._onTriggerClicked)
};g._onPlay=function(){if(this.options.behavior==="play"){this.view.activate()}else{if(this.options.behavior==="pause"){this.view.deactivate()
}}if(this.options.disableWhilePlaying){this.view.disable()}else{if(this.options.behavior==="stop"||this.options.behavior==="pause"){this.view.enable()
}}};g._onPause=function(){if(this.options.behavior==="play"){this.view.removeReplayState();
this.view.deactivate();this.view.enable()}else{if(this.options.behavior==="pause"){this.view.activate()
}}};g._onStop=function(){this._onEnded()};g._onEnded=function(){if(this.options.behavior==="play"){this.view.addReplayState();
this.view.enable()}else{if(this.options.behavior==="stop"||this.options.behavior==="pause"){this.view.disable()
}else{this.view.enable()}}this.view.deactivate()};f.exports=d},{"../Controller":447,"./View/Trigger":454,"ac-object":346}],449:[function(c,a,h){var f=c("ac-object");
var j=c("ac-base").Element;var g=c("ac-scrollview").ScrollView;var k=c("../Controller");
var b=c("ac-clock");var i;var d={continuous:true,speed:0.25,direction:1,mouseWheel:false,mouseDrag:true,friction:0.88,bounces:false,clock:b};
function l(o,n,m){k.call(this,o,n,f.defaults(d,m||{}));this._value=null;this._setupScrollView();
this._trackScrollView();this._setupClock()}i=l.prototype=f.create(k.prototype);
i.View=c("./View/Grabbable");i._setupMediaObjectListeners=function(){};i._setupScrollView=function(){var m=j.getBoundingBox(this.view.element);
this._totalDistance=m.width*(1/this.options.speed);this._scrollview=new g(this.view.element,{contentSize:{width:this._totalDistance*2,height:m.height},friction:{x:this.options.friction,y:0.95},width:this._totalDistance,height:this._totalDistance,mouseWheel:this.options.mouseWheel,mouseDrag:this.options.mouseDrag,preventDefault:true,bounces:!this.options.continuous&&this.options.bounces});
this._scrollview.setPosition({x:this._totalDistance,y:0})};i._trackScrollView=function(){this._scrollview.on("willBeginTracking",function(m){this.view.setGrabbing(true)
},this);this._scrollview.on("didEndTracking",function(m){this.view.setGrabbing(false)
},this);this._scrollview.on("scroll",this._onScroll,this)};i._setupClock=function(){if(!this.options.clock.isRunning()){this.options.clock.start()
}this.options.clock.on("draw",this._draw,this)};i._onScroll=function(m){if(m.x>=this._totalDistance||m.x<=0){if(this.options.continuous){this._scrollview.setPosition({x:(this._totalDistance/2),y:0})
}else{}}this._value=(m.x%(this._totalDistance/2))/(this._totalDistance/2);this._value=(this.options.direction<0)?1-this._value:this._value
};i._draw=function(m){if(this._value!==null){this.mediaObject.goToDurationPercent(this._value)
}this._value=null};a.exports=l},{"../Controller":447,"./View/Grabbable":453,"ac-base":false,"ac-clock":356,"ac-object":346,"ac-scrollview":431}],450:[function(c,b,h){var j=c("ac-base").Element;
var f=c("ac-object");var a=c("ac-scroll-time-update").ElementScrollTimeUpdate;var k=c("../Controller");
var l=c("ac-viewport").Viewport;var i;var m=false;var d={reversed:false,smooth:true,startInView:false,offsetTop:false,offsetBottom:false};
function g(o,n){this.tracker=null;k.call(this,o,null,f.defaults(d,n||{}))}i=g.prototype=f.create(k.prototype);
i.View=null;i.start=function(){this.tracker.on("draw",this._draw,this);this.tracker.start()
};i.stop=function(){this.tracker.off("draw",this._draw);this.tracker.stop()};i.setSmoothing=function(n){this.options.smooth=!!n;
if(this.tracker){this.tracker.setSmoothing(this.options.smooth)}};i.setOffsets=function(o,n){if(this.tracker){o=this._parseOffset(o);
n=this._parseOffset(n);if(o){this.tracker.options.offsetTop=o}if(n){this.tracker.options.offsetBottom=n
}this.tracker.setOffsets();this.tracker.setCurrentTime(null,true)}};i._parseOffset=function(p){var o;
var n;if(typeof p==="number"||typeof p==="function"){return p}else{if(typeof p==="string"){if(/\%$/.test(p)){p=(parseFloat(p,10)/100);
n=function(){if(m){l.off("resize orientationchange",n)}o=j.getBoundingBox(this).height;
return o}.bind(this.mediaObject.view.container);l.on("resize orientationchange",n);
n();return function(){return p*o}}else{if(/vh$/.test(p)){p=(parseFloat(p,10)/100);
return function(){return p*l.innerHeight()}}}}}return false};i._setupMediaObjectListeners=function(){if(this.mediaObject.ready){this._onReady()
}else{this.mediaObject.once("ready",this._onReady,this)}};i._unbindMediaObjectListeners=function(){this.mediaObject.off("ready",this._onReady);
m=true};i._onReady=function(){var n=f.clone(this.options);n.startInView=!n.startInView;
n.offsetTop=this._parseOffset(n.offsetTop);n.offsetBottom=this._parseOffset(n.offsetBottom);
this.tracker=new a(this.mediaObject.container,n);this.start()};i._draw=function(n){if(this.options.reversed){this.mediaObject.goToDurationPercent(1-n.time)
}else{this.mediaObject.goToDurationPercent(n.time)}};b.exports=g},{"../Controller":447,"ac-base":false,"ac-object":346,"ac-scroll-time-update":428,"ac-viewport":535}],451:[function(c,b,g){var f=c("ac-object");
var a=c("ac-element-engagement");var i=c("../Controller");var h;var d={loopInterval:false,reversed:false,timeToEngage:500};
function j(l,k){i.call(this,l,null,f.defaults(d,k||{}))}h=j.prototype={};h.destroy=function(){a.stop(this.tracker);
if(this.tracker&&typeof this.tracker.off==="function"){this.tracker.off()}i.prototype.destroy.call(this)
};h._setupMediaObjectListeners=function(){this.mediaObject.once("degrade",this.destroy,this);
if(this.mediaObject.ready){this._onReady()}else{this.mediaObject.once("ready",this._onReady,this)
}};h._onReady=function(){this.tracker=a.addElement(this.mediaObject.container);
if(!a.tracking){a.start()}this.tracker.on("engaged",this._onEngaged,this)};h._onEngaged=function(){if(typeof this.options.loopInterval==="number"){this._startLoop()
}else{this.tracker.off("engaged",this._onEngaged,this)}if(this.options.reversed){this.mediaObject.setTime(this.mediaObject.duration);
this.mediaObject.setPlaybackRate(-1)}this.mediaObject.play();this.tracker.once("exitview",this._onExitView,this)
};h._onExitView=function(){this.mediaObject.stop()};h._startLoop=function(){this.mediaObject.once("stop pause",this._cancelLoop,this);
this.mediaObject.on("ended",this._startLoopInterval,this)};h._cancelLoop=function(){if(this._loopIntervalTimeout){window.clearTimeout(this._loopIntervalTimeout)
}this.mediaObject.off("ended",this._startLoopInterval,this)};h._startLoopInterval=function(){if(this.options.loopInterval>0){this._loopIntervalTimeout=window.setTimeout(function(){this.mediaObject.reset();
this.mediaObject.play();this._loopIntervalTimeout=null}.bind(this),this.options.loopInterval)
}else{this.mediaObject.reset();this.mediaObject.play()}};h._unbindMediaObjectListeners=function(){if(this.mediaObject&&typeof this.mediaObject.off==="function"){this.mediaObject.off("exitview",this._onExitView);
this.mediaObject.off("ended",this._startLoopInterval);this.mediaObject.off("stop pause",this._cancelLoop);
this.mediaObject.off("ready",this._onReady)}};b.exports=j},{"../Controller":447,"ac-element-engagement":148,"ac-object":346}],452:[function(c,b,g){var i=c("ac-base").Element;
var f=c("ac-object");var j=c("../../utils/destroy");var k=c("ac-event-emitter").EventEmitter;
var h;var d={stateNameActive:"renderplayer-active",stateNameDisabled:"renderplayer-disabled",stateNameReplay:"renderplayer-replay"};
function a(m,l){this.options=f.defaults(d,l||{});this.element=i.getElementById(m);
if(this.element===null){throw"RenderPlayer.Controller.View: Incorrect view element reference."
}}h=a.prototype=new k();h.addReplayState=function(){i.addClassName(this.element,this.options.stateNameReplay)
};h.removeReplayState=function(){i.removeClassName(this.element,this.options.stateNameReplay)
};h.activate=function(){this.active=true;i.addClassName(this.element,this.options.stateNameActive)
};h.deactivate=function(){this.active=false;i.removeClassName(this.element,this.options.stateNameActive)
};h.disable=function(){this.disabled=true;i.addClassName(this.element,this.options.stateNameDisabled)
};h.enable=function(){this.disabled=false;i.removeClassName(this.element,this.options.stateNameDisabled)
};h.destroy=function(){j(this)};b.exports=a},{"../../utils/destroy":470,"ac-base":false,"ac-event-emitter":false,"ac-object":346}],453:[function(b,a,f){var h=b("ac-base").Element;
var d=b("ac-object");var i=b("../View");var c={};function j(l,k){i.call(this,l,d.defaults(c,k||{}));
h.addClassName(this.element,"renderplayer-grabbable")}var g=j.prototype=d.create(i.prototype);
g.setGrabbing=function(k){if(k){h.addClassName(document.body,"renderplayer-grabbing")
}else{h.removeClassName(document.body,"renderplayer-grabbing")}};a.exports=j},{"../View":452,"ac-base":false,"ac-object":346}],454:[function(c,b,g){var i=c("ac-base").Element;
var k=c("ac-base").Function;var a=c("ac-base").Event;var f=c("ac-object");var j=c("../View");
var d={};function l(n,m){j.call(this,n,f.defaults(d,m||{}));this._boundOnClick=k.bindAsEventListener(this._onClick,this);
i.addEventListener(this.element,"click",this._boundOnClick)}var h=l.prototype=f.create(j.prototype);
h._onClick=function(m){a.stop(m);if(!this._disabled){this.trigger("click",m)}};
b.exports=l},{"../View":452,"ac-base":false,"ac-object":346}],455:[function(b,f,a){var d=b("../utils/destroy");
var g;function c(h,j,i){this.mediaObject=h;this.enhanceFunc=j;this.options=i||{};
this.didEnhance=false;this.mediaObject.once("enhance",this._onEnhance,this);this.mediaObject.once("degrade",this.destroy,this);
this._loadedCheck()}g=c.prototype={};g._enhance=function(){if(this.didEnhance||(this.options&&this.options.autoEnhance===false)){return
}if(this.mediaObject&&this.mediaObject.view&&!this.mediaObject.view.enhanced){this.mediaObject.enhance();
this.didEnhance=true}};g.destroy=function(){if(this.mediaObject&&typeof this.mediaObject.off==="function"){this.mediaObject.off("enhance",this._onEnhance);
this.mediaObject.off("ready",this._onReady);this.mediaObject.off("destroy",this.destroy)
}d(this,false)};g._loadedCheck=function(){if(this.mediaObject.ready){this._onReady()
}else{this.mediaObject.load();this.mediaObject.once("ready",this._onReady,this)
}};g._onEnhance=function(){this.mediaObject.off("ready",this._onReady,this);this.enhanceFunc();
this.destroy()};g._onReady=function(){this._enhance()};f.exports=c},{"../utils/destroy":470}],456:[function(d,c,g){var f=d("ac-object");
var j=d("../../utils/destroy");var a=d("ac-element-engagement");var i=d("../Enhancer");
var h;function b(k,m,l){i.apply(this,arguments)}h=b.prototype=f.create(i.prototype);
h._inViewCheck=function(){if(!this.didEnhance&&this.mediaObject&&this.mediaObject.view&&!this.mediaObject.view.enhanced){this.tracker=a.addElement(this.mediaObject.container);
if(!a.tracking){a.start()}a.refreshElementState(this.tracker);if(!this.tracker.inView){this._enhance()
}else{this.tracker.once("exitview",this._enhance,this)}}};h.destroy=function(){if(this.tracker&&typeof this.tracker.off==="function"){a.stop(this.tracker);
this.tracker.off("exitview",this._enhance)}i.prototype.destroy.call(this)};h._onReady=function(){this._inViewCheck()
};c.exports=b},{"../../utils/destroy":470,"../Enhancer":455,"ac-element-engagement":148,"ac-object":346}],457:[function(c,d,a){var f;
function b(){this._active=null}f=b.prototype;f.add=function(h){h._originalPlayMethod=h.play;
h.play=this.play.bind(this,h)};f.play=function(h){if(h){this._play(h)}};f._play=function(h){if(this._active!==h){this.stop()
}this._active=h;if(!this._active._originalPlayMethod){this.add(this._active)}this._active._originalPlayMethod.call(this._active);
this._active.once("pause",this.stop,this);this._active.once("stop",this.stop,this);
this._active.once("ended",this.stop,this)};f.stop=function(h){if(this._active){this._active.off("pause",this.stop);
this._active.off("stop",this.stop);this._active.off("ended",this.stop);if(h===undefined){this._active.stop()
}}this._active=null};var g=new b();g.PlayController=b;d.exports=g},{}],458:[function(b,a,d){var c=b("ac-object");
var j=b("ac-deferredqueue").DeferredQueue;var i=b("../PlayController").PlayController;
var g;function h(){i.call(this);this.deferredQueue=new j({autoplay:true,asynchronous:true})
}g=h.prototype=c.create(i.prototype);g._play=function(k){k.once("play",this._onPlay,this);
this.deferredQueue.add(k._originalPlayMethod.bind(k))};g._onPlay=function(k){this._active=k;
this._active.once("pause",this.stop,this);this._active.once("stop",this.stop,this);
this._active.once("ended",this.stop,this)};g.stop=function(k){i.prototype.stop.call(this,k);
this.deferredQueue.didFinish()};var f=new h();f.QueuedPlayController=h;a.exports=f
},{"../PlayController":457,"ac-deferredqueue":360,"ac-object":346}],459:[function(c,d,a){d.exports=function b(f){if(f!==null){f.container.classList.add("renderplayer-canplay");
return true}return false}},{}],460:[function(b,c,a){var d=b("ac-clock").ThrottledClock;
c.exports=function(f){f=isNaN(f)?30:f;return new d(f)}},{"ac-clock":356}],461:[function(b,d,a){d.exports=function c(h,f){var g=document.createElement("a");
if(h){g.innerHTML=h}g.setAttribute("href","#");if(f&&f.parentNode){f.parentNode.replaceChild(g,f);
g.appendChild(f)}return g}},{}],462:[function(b,c,a){var d=b("ac-viewport").Viewport;
c.exports=function(j,f){f=f||{};var k=typeof f.callback==="function"?f.callback:null;
var h=Array.isArray(f.degradeOnBreakpointBlacklist)?f.degradeOnBreakpointBlacklist:null;
function g(){d.off("breakpoint",i)}function i(l){if(h&&h.indexOf(l.incoming)>-1){return
}else{j.degrade();if(k){k()}}}d.on("breakpoint",i);j.once("destroy",g)}},{"ac-viewport":535}],463:[function(d,f,c){var b=d("ac-object");
var g;var h={pause:true,stop:true,ended:true};f.exports=function a(m,l,j){j=b.defaults(h,j||{});
var k=function(){l();l=function(){}};for(var i in j){if(j[i]){m.once(i,k)}}}},{"ac-object":346}],464:[function(b,c,a){c.exports=function d(f){f.once("loadstart",function(){f.container.classList.add("loading")
});f.once("loaded",function(){f.container.classList.remove("loading")})}},{}],465:[function(d,c,i){var l=d("ac-base").Element;
var g=d("ac-object");var m=d("./behaviors/canPlay");var j=d("./../ac-renderplayer/Controller/UserEngaged");
var p=d("./createScrubOnScroll");var o=d("./behaviors/doAfterPlay");var h=d("../ac-renderplayer/Enhancer");
var b=d("../ac-renderplayer/Enhancer/OutOfViewEnhancer");var k=d("../ac-renderplayer/PlayController/QueuedPlayController");
var a=d("./behaviors/degradeOnBreakpointChange");var f={reversed:false,startInView:false,tiedToScrollAfterPlayed:false,loopInterval:false,degradeAfterPlayed:true};
c.exports=function n(u,s,v){var t={};var r;var q;s=g.defaults(f,s||{});if(!m(u)){return null
}k.add(u);if(s.startInView){new h(u,function(){r=new j(u,{reversed:s.reversed,loopInterval:s.loopInterval})
},v)}else{new b(u,function(){r=new j(u,{reversed:s.reversed,loopInterval:s.loopInterval})
},v)}t.controllers=[r];if(typeof s.loopInterval!=="number"){if(s.tiedToScrollAfterPlayed){o(u,function(){var w;
var y=l.cumulativeOffset(u.container);var x={};if(s.startInView){x.startInView=true;
x.reversed=!s.reversed;x.offsetTop=y.top*-1}w=p(u,x);t.controllers.push(w)},{ended:s.startInView})
}else{if(s.degradeAfterPlayed){o(u,function(){u.degrade.call(u)})}}}if(s.degradeOnBreakpointChange){q={degradeOnBreakpointBlacklist:s.degradeOnBreakpointBlacklist};
a(u,q)}return t}},{"../ac-renderplayer/Enhancer":455,"../ac-renderplayer/Enhancer/OutOfViewEnhancer":456,"../ac-renderplayer/PlayController/QueuedPlayController":458,"./../ac-renderplayer/Controller/UserEngaged":451,"./behaviors/canPlay":459,"./behaviors/degradeOnBreakpointChange":462,"./behaviors/doAfterPlay":463,"./createScrubOnScroll":469,"ac-base":false,"ac-object":346}],466:[function(c,b,h){var i=c("ac-base").Element;
var j=c("./behaviors/canPlay");var f=c("../ac-renderplayer/Controller");var g=c("../ac-renderplayer/Enhancer");
var a=c("./behaviors/degradeOnBreakpointChange");b.exports=function d(p,n){n=n||{};
var o={};var l;var k;if(!j(p)){return null}var m=function(){var q=new f(p);o.controllers=[q]
};new g(p,m,n);if(n.degradeOnBreakpointChange){k={degradeOnBreakpointBlacklist:n.degradeOnBreakpointBlacklist};
a(p,k)}return o}},{"../ac-renderplayer/Controller":447,"../ac-renderplayer/Enhancer":455,"./behaviors/canPlay":459,"./behaviors/degradeOnBreakpointChange":462,"ac-base":false}],467:[function(g,f,k){var m=g("ac-base").Element;
var i=g("ac-object");var n=g("./behaviors/canPlay");var l=g("../ac-renderplayer/Controller/ClickToPlay");
var c=g("./behaviors/createTrigger");var b=g("../ac-renderplayer/PlayController");
var p=g("./behaviors/spinner");var d=g("./behaviors/degradeOnBreakpointChange");
var h={trigger:null};var j=function(r,u){var q={};var s=m.isElement(r)?r:c("",u.container);
var t=s.href.replace(/.*#/,"");if(t==="play"||t==="stop"||t==="pause"){q.behavior=t
}else{if(t==="replay"){q.behavior="play";q.stopableWhilePlaying=false;q.disableWhilePlaying=true
}}return new l(u,s,q)};var a=function(s,q){if(typeof s==="string"){s=m.selectAll(s)
}s=[].concat(s);var r=s.map(function(t){return j(t,q)});return r};f.exports=function o(t,r){var s={};
var q;r=i.defaults(h,r||{});if(!n(t)){return null}b.add(t);p(t);s.controllers=a(r.trigger,t);
if(r.degradeOnBreakpointChange){q={degradeOnBreakpointBlacklist:r.degradeOnBreakpointBlacklist};
d(t,q)}t.enhance();return s}},{"../ac-renderplayer/Controller/ClickToPlay":448,"../ac-renderplayer/PlayController":457,"./behaviors/canPlay":459,"./behaviors/createTrigger":461,"./behaviors/degradeOnBreakpointChange":462,"./behaviors/spinner":464,"ac-base":false,"ac-object":346}],468:[function(c,b,i){var g=c("ac-object");
var j=c("./behaviors/canPlay");var d=c("./behaviors/clock30fps");var k=c("../ac-renderplayer/Controller/Grabber");
var h=c("../ac-renderplayer/Enhancer");var l=c("./behaviors/spinner");var a=c("./behaviors/degradeOnBreakpointChange");
var f={clock:d()};b.exports=function m(q,o){var p={};var n;o=g.defaults(f,o||{});
if(!j(q)){return null}l(q);new h(q,function(){var r=new k(q,q.container,o);p.controllers=[r]
});if(o.degradeOnBreakpointChange){n={degradeOnBreakpointBlacklist:o.degradeOnBreakpointBlacklist};
a(q,n)}return p}},{"../ac-renderplayer/Controller/Grabber":449,"../ac-renderplayer/Enhancer":455,"./behaviors/canPlay":459,"./behaviors/clock30fps":460,"./behaviors/degradeOnBreakpointChange":462,"./behaviors/spinner":464,"ac-object":346}],469:[function(d,c,j){var h=d("ac-object");
var k=d("./behaviors/canPlay");var f=d("./behaviors/clock30fps");var n=d("./../ac-renderplayer/Controller/ScrubOnScroll");
var i=d("../ac-renderplayer/Enhancer");var l=d("../utils/getAttribute");var b=d("../ac-renderplayer/Enhancer/OutOfViewEnhancer");
var a=d("./behaviors/degradeOnBreakpointChange");var g={clock:f(),enhanceInView:false};
c.exports=function m(s,q,t){var r={};var o;q=h.defaults(g,q||{});q.offsetTop=q.offsetTop||l(s.container,"data-offsetTop",true);
q.offsetBottom=q.offsetBottom||l(s.container,"data-offsetBottom",true);if(!k(s)){return null
}var p=function(){var u=new n(s,q);r.setOffsets=function(w,v){u.setOffsets(w,v)
};r.setSmoothing=function(v){u.setSmoothing(v)};r.controllers=[u]};if(q.startInView||q.enhanceInView){new i(s,p,t)
}else{new b(s,p,t)}if(q.degradeOnBreakpointChange){o={degradeOnBreakpointBlacklist:q.degradeOnBreakpointBlacklist};
a(s,o)}return r}},{"../ac-renderplayer/Enhancer":455,"../ac-renderplayer/Enhancer/OutOfViewEnhancer":456,"../utils/getAttribute":471,"./../ac-renderplayer/Controller/ScrubOnScroll":450,"./behaviors/canPlay":459,"./behaviors/clock30fps":460,"./behaviors/degradeOnBreakpointChange":462,"ac-object":346}],470:[function(b,c,a){c.exports=b(291)
},{}],471:[function(c,d,a){d.exports=function b(h,g,f){var i=h.getAttribute(g)||null;
if(i){if(i==="true"){i=true}else{if(i==="false"){i=false}else{if(f){i=parseFloat(i,10)
}}}}return i}},{}],472:[function(b,c,a){c.exports.SlideShow=b("./ac-slideshow/SlideShow")
},{"./ac-slideshow/SlideShow":473}],473:[function(f,g,c){var d=f("ac-base").Object;
var b={autoplay:true,pauseOnUserInteraction:true,initialDelay:1000,delayBetweenSlides:3000};
var h;function a(i,j){this.gallery=i;this.animationTimeout=null;this.options=j||{};
this.currentTime=this.currentTime();this._playing=false;this._progress=0;var k;
k=d.clone(b);this.setOptions(d.extend(k,this.options),{replace:true});if(this.options.autoplay===true){setTimeout(function(){this.play()
}.bind(this),this.options.initialDelay)}if(this.options.pauseOnUserInteraction===true){this.gallery.on("willShow",function(l){if(l.interactionEvent!==this){this.pause()
}},this)}}h=a.prototype;h.setOptions=function(j,i){i=i||{};if(i.replace===true){this.options=j
}else{this.options=d.extend(this.options,j)}return this};h.play=function(){this.animationTimeout=setInterval(function(){this.gallery.showNext({interactionEvent:this});
this._progress+=1}.bind(this),this.options.delayBetweenSlides);this._playing=true
};h.pause=function(){clearTimeout(this.animationTimeout);this._playing=false};h.currentTime=function(){return this.options.initialDelay+(this._progress*(this.options.delayBetweenSlides+(this.options.transitionDuration*1000)))
};g.exports=a},{"ac-base":false}],474:[function(b,c,a){c.exports=b(2)},{"./ac-shared-instance/SharedInstance":475}],475:[function(b,c,a){c.exports=b(3)
},{}],476:[function(b,c,a){c.exports=b(4)},{"./ac-dom-nodes/createDocumentFragment":477,"./ac-dom-nodes/filterByNodeType":478,"./ac-dom-nodes/helpers/nodeTypes":480,"./ac-dom-nodes/insertAfter":482,"./ac-dom-nodes/insertBefore":483,"./ac-dom-nodes/insertFirstChild":484,"./ac-dom-nodes/insertLastChild":485,"./ac-dom-nodes/isComment":486,"./ac-dom-nodes/isDocument":487,"./ac-dom-nodes/isDocumentFragment":488,"./ac-dom-nodes/isDocumentType":489,"./ac-dom-nodes/isElement":490,"./ac-dom-nodes/isNode":491,"./ac-dom-nodes/isNodeList":492,"./ac-dom-nodes/isTextNode":493,"./ac-dom-nodes/remove":494,"./ac-dom-nodes/replace":495}],477:[function(b,c,a){c.exports=b(5)
},{}],478:[function(b,c,a){c.exports=b(6)},{"./helpers/isNodeType":479,"./helpers/nodeTypes":480}],479:[function(b,c,a){c.exports=b(7)
},{"../isNode":491}],480:[function(b,c,a){c.exports=b(8)},{}],481:[function(b,c,a){c.exports=b(9)
},{"./isNodeType":479,"./nodeTypes":480}],482:[function(b,c,a){c.exports=b(10)},{"./helpers/validate":481}],483:[function(b,c,a){c.exports=b(11)
},{"./helpers/validate":481}],484:[function(b,c,a){c.exports=b(12)},{"./helpers/validate":481}],485:[function(b,c,a){c.exports=b(13)
},{"./helpers/validate":481}],486:[function(b,c,a){c.exports=b(14)},{"./helpers/isNodeType":479,"./helpers/nodeTypes":480}],487:[function(b,c,a){c.exports=b(15)
},{"./helpers/isNodeType":479,"./helpers/nodeTypes":480}],488:[function(b,c,a){c.exports=b(16)
},{"./helpers/isNodeType":479,"./helpers/nodeTypes":480}],489:[function(b,c,a){c.exports=b(17)
},{"./helpers/isNodeType":479,"./helpers/nodeTypes":480}],490:[function(b,c,a){c.exports=b(18)
},{"./helpers/isNodeType":479,"./helpers/nodeTypes":480}],491:[function(b,c,a){c.exports=b(19)
},{}],492:[function(b,c,a){c.exports=b(20)},{}],493:[function(b,c,a){c.exports=b(21)
},{"./helpers/isNodeType":479,"./helpers/nodeTypes":480}],494:[function(b,c,a){c.exports=b(22)
},{"./helpers/validate":481}],495:[function(b,c,a){c.exports=b(23)},{"./helpers/validate":481}],496:[function(b,c,a){c.exports=b(24)
},{"./ac-dom-traversal/ancestor":497,"./ac-dom-traversal/ancestors":498,"./ac-dom-traversal/children":499,"./ac-dom-traversal/filterBySelector":500,"./ac-dom-traversal/firstChild":501,"./ac-dom-traversal/lastChild":504,"./ac-dom-traversal/matchesSelector":505,"./ac-dom-traversal/nextSibling":506,"./ac-dom-traversal/nextSiblings":507,"./ac-dom-traversal/previousSibling":508,"./ac-dom-traversal/previousSiblings":509,"./ac-dom-traversal/querySelector":510,"./ac-dom-traversal/querySelectorAll":511,"./ac-dom-traversal/shims/ie":512,"./ac-dom-traversal/siblings":513}],497:[function(b,c,a){c.exports=b(25)
},{"./helpers/validate":503,"./matchesSelector":505,"ac-dom-nodes":476}],498:[function(b,c,a){c.exports=b(26)
},{"./helpers/validate":503,"./matchesSelector":505,"ac-dom-nodes":476}],499:[function(b,c,a){c.exports=b(27)
},{"./filterBySelector":500,"./helpers/validate":503,"ac-dom-nodes":476}],500:[function(b,c,a){c.exports=b(28)
},{"./helpers/validate":503,"./matchesSelector":505}],501:[function(b,c,a){c.exports=b(29)
},{"./children":499,"./helpers/validate":503}],502:[function(b,c,a){c.exports=b(30)
},{}],503:[function(b,c,a){c.exports=b(31)},{"ac-dom-nodes":476}],504:[function(b,c,a){c.exports=b(32)
},{"./children":499,"./helpers/validate":503}],505:[function(b,c,a){c.exports=b(33)
},{"./helpers/nativeMatches":502,"./helpers/validate":503,"ac-dom-nodes":476}],506:[function(b,c,a){c.exports=b(34)
},{"./helpers/validate":503,"./matchesSelector":505,"ac-dom-nodes":476}],507:[function(b,c,a){c.exports=b(35)
},{"./helpers/validate":503,"./matchesSelector":505,"ac-dom-nodes":476}],508:[function(b,c,a){c.exports=b(36)
},{"./helpers/validate":503,"./matchesSelector":505,"ac-dom-nodes":476}],509:[function(b,c,a){c.exports=b(37)
},{"./helpers/validate":503,"./matchesSelector":505,"ac-dom-nodes":476}],510:[function(b,c,a){c.exports=b(38)
},{"./helpers/validate":503}],511:[function(b,c,a){c.exports=b(39)},{"./helpers/validate":503}],512:[function(b,c,a){c.exports=b(40)
},{"../helpers/nativeMatches":502,"../helpers/validate":503,"../vendor/sizzle/sizzle":514,"ac-dom-nodes":476}],513:[function(b,c,a){c.exports=b(41)
},{"./children":499,"./helpers/validate":503}],514:[function(b,c,a){c.exports=b(42)
},{}],515:[function(b,c,a){c.exports=b(43)},{"./ac-dom-emitter/DOMEmitter":516}],516:[function(b,c,a){c.exports=b(44)
},{"ac-dom-events":71,"ac-dom-traversal":496,"ac-event-emitter":false}],517:[function(b,c,a){c.exports=b(45)
},{"./ac-window-delegate/WindowDelegate":520,"./ac-window-delegate/WindowDelegateCustomEvent":521,"./ac-window-delegate/WindowDelegateOptimizer":522}],518:[function(b,c,a){c.exports=b(46)
},{"ac-event-emitter":false}],519:[function(b,c,a){c.exports=b(47)},{"ac-event-emitter":false}],520:[function(b,c,a){c.exports=b(48)
},{"./CustomEventController":518,"./OptimizerController":519,"./optimizers/optimizers":525,"./queries/queries":534,"ac-dom-emitter":515,"ac-shared-instance":474}],521:[function(b,c,a){c.exports=b(49)
},{"ac-event-emitter":false}],522:[function(b,c,a){c.exports=b(50)},{"ac-event-emitter":false}],523:[function(b,c,a){c.exports=b(51)
},{"../../WindowDelegateOptimizer":522,"../../queries/queries":534}],524:[function(b,c,a){c.exports=b(52)
},{"../../WindowDelegateOptimizer":522,"../../queries/queries":534}],525:[function(b,c,a){c.exports=b(53)
},{"./events/resize":523,"./events/scroll":524}],526:[function(b,c,a){c.exports=b(54)
},{}],527:[function(b,c,a){c.exports=b(55)},{}],528:[function(b,c,a){c.exports=b(56)
},{}],529:[function(b,c,a){c.exports=b(57)},{}],530:[function(b,c,a){c.exports=b(58)
},{}],531:[function(b,c,a){c.exports=b(59)},{}],532:[function(b,c,a){c.exports=b(60)
},{}],533:[function(b,c,a){c.exports=b(61)},{}],534:[function(b,c,a){c.exports=b(62)
},{"./methods/clientHeight":526,"./methods/clientWidth":527,"./methods/innerHeight":528,"./methods/innerWidth":529,"./methods/maxScrollX":530,"./methods/maxScrollY":531,"./methods/scrollX":532,"./methods/scrollY":533}],535:[function(b,c,a){c.exports={Viewport:b("./ac-viewport/Viewport")}
},{"./ac-viewport/Viewport":536}],536:[function(d,b,g){var c=d("ac-shared-instance").SharedInstance,k=d("ac-window-delegate").WindowDelegate,i=d("ac-breakpoints-delegate").BreakpointsDelegate;
var j="ac-viewport:Viewport",a="1.0.0";var h;function f(m){var n,l=k;for(n in l){if(l.hasOwnProperty(n)){this[n]=l[n]
}else{h[n]=l[n]}}this.addCustomEvent(i.getCustomEvent())}h=f.prototype;h.getBreakpoint=function(){return i.getBreakpoint()
};b.exports=c.share(j,a,f)},{"ac-breakpoints-delegate":63,"ac-shared-instance":474,"ac-window-delegate":517}],537:[function(b,c,a){var f=c.exports={};
f.nextTick=(function(){var h=typeof window!=="undefined"&&window.setImmediate;var j=typeof window!=="undefined"&&window.postMessage&&window.addEventListener;
if(h){return function(k){return window.setImmediate(k)}}if(j){var g=[];window.addEventListener("message",function(l){var m=l.source;
if((m===window||m===null)&&l.data==="process-tick"){l.stopPropagation();if(g.length>0){var k=g.shift();
k()}}},true);return function i(k){g.push(k);window.postMessage("process-tick","*")
}}return function i(k){setTimeout(k,0)}})();f.title="browser";f.browser=true;f.env={};
f.argv=[];function d(){}f.on=d;f.addListener=d;f.once=d;f.off=d;f.removeListener=d;
f.removeAllListeners=d;f.emit=d;f.binding=function(g){throw new Error("process.binding is not supported")
};f.cwd=function(){return"/"};f.chdir=function(g){throw new Error("process.chdir is not supported")
}},{}],538:[function(d,f,c){var g=d("ac-base").Element;d("../shared/LocalNav").initialize();
var b=d("../shared/galleryFactory");var a=d("../shared/RenderPlayerFactory");var i=d("../shared/experienceReport");
var h=(function(){return{initialize:function(){var j;a.init();if(i.ambient.experience==="flow"||i.ambient.experience==="h264"){j=g.select("#activity .gallery-wrapper");
g.addClassName(j,"renderplayer-canplay")}var k=b.create("activity-grid");var l=b.create("workout-grid");
return this}}}());f.exports=h.initialize()},{"../shared/LocalNav":539,"../shared/RenderPlayerFactory":540,"../shared/experienceReport":544,"../shared/galleryFactory":545,"ac-base":false}],539:[function(c,b,f){var i=c("ac-dom-emitter").DOMEmitter;
var g=c("ac-base").Element;var j=c("ac-analytics");var a=c("ac-dom-events");var h=c("ac-viewport").Viewport;
var d=(function(){return{opened:false,closeThreshold:0,initialize:function(){this.globalheaderHeight=g.getElementById("globalheader").offsetHeight;
this.localNav=g.getElementById("localnav");this.menu=g.getElementById("menu");this.curtain=g.getElementById("curtain");
this.main=g.getElementById("main");this.footer=g.select(".footer-wrapper");var k=g.getElementById("explore-btn");
this.menuEmitter=new i(this.menu);h.on("scroll load",this.navTrackPosition.bind(this));
g.addEventListener(k,"click",this.toggle.bind(this));g.addEventListener(this.curtain,"click",this.onCurtainTouch.bind(this));
g.addEventListener(document,"touchstart",this.onDocumentTouch.bind(this));this.menuEmitter.on("transitionend webkitTransitionEnd oTransitionEnd",this.onTransitionEnd,this);
if(typeof j==="object"){new j.observer.Event(this.menuEmitter,{interactionEvents:["localnav-open"]})
}return this},onTransitionEnd:function(){g.removeClassName(this.menu,"translating");
g.addClassName(this.menu,"translate-ended")},translate:function(){g.removeClassName(this.menu,"translate-ended");
g.addClassName(this.menu,"translating")},open:function(){g.addClassName(this.localNav,"open");
g.addClassName(this.curtain,"open");this.translate();this.opened=true;this.openedAt=h.scrollY();
var k="";if(g.hasClassName(this.localNav,"lock")){k=" - locked";this.localNav.setAttribute("data-analytics-region","product nav locked");
if(typeof j==="object"){j.regions.refreshRegion(this.localNav)}}else{k=" - unlocked";
this.localNav.setAttribute("data-analytics-region","product nav");if(typeof j==="object"){j.regions.refreshRegion(this.localNav)
}}this.menuEmitter.trigger("localnav-open",{prop3:"{PAGE_NAME_NO_LOCALE} - explore"+k,title:"{PAGE_NAME_NO_LOCALE} - explore"+k})
},close:function(){g.removeClassName(this.localNav,"open");g.removeClassName(this.curtain,"open");
this.translate();this.opened=false},closeImmediately:function(){this.menuEmitter.off("transitionend webkitTransitionEnd oTransitionEnd",this.onTransitionEnd);
g.addClassName(this.localNav,"immediate-hide");window.requestAnimationFrame(function(){g.removeClassName(this.localNav,"open");
g.removeClassName(this.curtain,"open");g.removeClassName(this.menu,"translate-ended");
window.requestAnimationFrame(function(){g.removeClassName(this.localNav,"immediate-hide");
g.addClassName(this.menu,"translate-ended");this.menuEmitter.on("transitionend webkitTransitionEnd oTransitionEnd",this.onTransitionEnd,this)
}.bind(this))}.bind(this));this.opened=false},toggle:function(k){if(this.opened){this.close()
}else{this.open()}a.stop(k)},onDocumentTouch:function(k){if(this.opened&&!this.localNav.contains(k.srcElement)){this.closeImmediately()
}},onCurtainTouch:function(k){if(this.opened){this.close()}},withinThreshold:function(k){return(k>this.openedAt+this.closeThreshold)||(k<this.openedAt-this.closeThreshold)
},navTrackPosition:function(k){var l=h.scrollY();if(l>=this.globalheaderHeight){g.addClassName(this.localNav,"lock")
}else{g.removeClassName(this.localNav,"lock")}if(this.opened&&this.withinThreshold(l)){this.close()
}}}}());b.exports=d},{"ac-base":false,"ac-dom-emitter":69,"ac-dom-events":71,"ac-viewport":535}],540:[function(d,b,f){var g=d("ac-base").Element;
var l=d("./RenderPlayerFactory/generateMediaObject");var k=d("./RenderPlayerFactory/renderConfigs");
var h=d("./RenderPlayerFactory/ReplayRender");var c=!(/\?A8E4D41E3E051CA502E82E36124536CD$/.test(window.location.href));
var i="data-renderplayer";var a;var n=function(q){var o=q.getAttribute(i);var z=q.getAttribute(i+"-locale")||"us";
var r=k[o];var u;var s;var A=null;var v=true;var x,p,t,w;if(r){if(r.replayable){t=r.replayable||false
}if(typeof r.factory!=="function"){throw"RenderPlayerFactory: No factory method assigned to render `"+o+"`"
}if(!r.priority){v=false}if(r.playerOptions){u=r.playerOptions||{}}if(r.mediaObjectOptions){s=r.mediaObjectOptions||{}
}if(r.size){w=r.size.replace("_2x","")}for(var y in r.staticBreakpoints){if(r.staticBreakpoints[y]===w){return
}}x=l(q,z,o,r.type,r.size,r.priority,!!r.keyframes,!!r.loop,s,v);A=r.factory(x,u)
}else{throw"RenderPlayerFactory: No config found for render `"+o+"`"}return{container:q,replayable:t,player:A,mediaObject:x,size:w}
};function j(o){g.removeClassName(o.container,"mediaObject-playing")}b.exports={init:function m(){if(c!==true){return
}var q=g.selectAll("["+i+"]");var o;a=q.map(n);o=a.length;for(var p=0;p<o;p++){if(a[p]){if(a[p].mediaObject){a[p].mediaObject.on("stop",j,a[p]);
if(a[p].replayable){new h(a[p])}}}}return a}}},{"./RenderPlayerFactory/ReplayRender":541,"./RenderPlayerFactory/generateMediaObject":542,"./RenderPlayerFactory/renderConfigs":543,"ac-base":false}],541:[function(c,d,b){var g=c("ac-base").Element;
var a=function(h){this.render=h;this.triggerAttribute="data-renderplayer-trigger";
this.triggerId=h.container.getAttribute(this.triggerAttribute);this.replayBtn=g.getElementById(this.triggerId);
this.init()};var f=a.prototype;f.init=function(){this.replayerMediaObj=this.render.mediaObject;
this.replayerMediaObj.on("ended",this.activate,this)};f.activate=function(){g.removeClassName(this.replayBtn,"playing");
g.addClassName(this.replayBtn,"active");g.addClassName(this.render.container,"replayEnded");
var h=this;g.addEventListener(this.replayBtn,"click",function(i){if(!g.hasClassName(this.replayBtn,"active")){i.preventDefault();
i.stopPropagation();h.replay(h)}})};f.replay=function(h){h.replayerMediaObj.reset();
h.replayerMediaObj.play();g.removeClassName(h.replayBtn,"active");g.removeClassName(h.render.container,"replayEnded");
g.addClassName(h.replayBtn,"playing")};d.exports=a},{"ac-base":false}],542:[function(d,g,c){var i=d("ac-media-object");
var h=d("ac-base").Environment.Browser;var b=d("ac-object");var f="jpg";g.exports=function a(k,t,j,r,w,s,o,p,v,m){var u=i.cname("/105/media/"+t+"/watch/2014/videos/e71af271_d18c_4d78_918d_d008fc4d702d/"+j+"/"+w+"/");
var q={basePath:u+r+"/",filename:r,fileFormat:((r==="flow")?"jpg":"mp4"),loop:!!p};
var l={type:r,queueLoading:m,loadPriority:s};v=b.defaults(l,v||{});if(o){if(h.name==="Safari"&&r==="h264"){q.posterframeSrc=u+"h264/h264_startframe."+f;
q.endstateSrc=u+"h264/h264_endframe."+f}else{q.posterframeSrc=u+"flow/flow_startframe."+f;
q.endstateSrc=u+"flow/flow_endframe."+f}}var n=i.create(k,q,v);return n}},{"ac-base":false,"ac-media-object":330,"ac-object":346}],543:[function(d,f,b){var g=d("../experienceReport");
var c=d("ac-renderplayer");var a=g.ambient.experienceObject.platform==="tablet"?"static":g.ambient.experience;
f.exports={"technology/charger":{factory:c.createAmbient,type:g.ambient.experience,size:g.sizes.experience,priority:2,keyframes:true,mediaObjectOptions:{frameRate:30},playerOptions:{}},"technology/taptic":{factory:c.createAmbient,type:g.ambient.experience,size:g.sizes.experience,priority:2,keyframes:true,mediaObjectOptions:{frameRate:30},playerOptions:{}},"overview/glances":{factory:c.createAmbient,type:a,size:g.sizes.experience,priority:2,keyframes:true,mediaObjectOptions:{frameRate:30}},"overview/precise":{factory:c.createAmbient,type:g.ambient.experience,size:g.sizes.experience,priority:2,keyframes:true,mediaObjectOptions:{frameRate:30}},"overview/connect":{factory:c.createAmbient,type:g.ambient.experience,size:g.sizes.experience,priority:2,keyframes:true,mediaObjectOptions:{frameRate:30}},"overview/healthier":{factory:c.createAmbient,type:g.ambient.experience,size:g.sizes.experience,priority:2,keyframes:true,mediaObjectOptions:{frameRate:30},playerOptions:{}},"overview/quality":{factory:c.createAmbient,type:g.ambient.experience,size:g.sizes.experience,priority:2,keyframes:true,mediaObjectOptions:{frameRate:30}},"health-and-fitness/case_exercise":{factory:c.createClickToPlay,type:g.click_to_play.experience,size:g.sizes.experience,keyframes:false,mediaObjectOptions:{frameRate:30},playerOptions:{trigger:".exercise-trigger"}},"health-and-fitness/case_move":{factory:c.createClickToPlay,type:g.click_to_play.experience,size:g.sizes.experience,keyframes:false,mediaObjectOptions:{frameRate:30},playerOptions:{trigger:".move-trigger"}},"health-and-fitness/case_stand":{factory:c.createClickToPlay,type:g.click_to_play.experience,size:g.sizes.experience,keyframes:false,mediaObjectOptions:{frameRate:30},playerOptions:{trigger:".stand-trigger"}},"health-and-fitness/activity":{factory:c.createAmbient,type:g.ambient.experience,size:g.sizes.experience,priority:2,keyframes:true,mediaObjectOptions:{frameRate:30},playerOptions:{degradeAfterPlayed:false}},"health-and-fitness/workout":{factory:c.createAmbient,type:g.ambient.experience,size:g.sizes.experience,priority:2,keyframes:true,mediaObjectOptions:{frameRate:30}},"health-and-fitness/badge":{factory:c.createAmbient,type:g.ambient.experience,size:g.sizes.experience,priority:2,keyframes:true,mediaObjectOptions:{frameRate:30}},"connect/sketch":{factory:c.createAmbient,type:g.ambient.experience,size:g.sizes.experience,priority:2,keyframes:false,mediaObjectOptions:{frameRate:30},playerOptions:{degradeOnBreakpointBlacklist:["xlarge"],degradeOnBreakpointChange:true,loopInterval:1,degradeAfterPlayed:false}},"connect/tap":{factory:c.createAmbient,type:g.ambient.experience,size:g.sizes.experience,priority:2,keyframes:false,mediaObjectOptions:{frameRate:30},playerOptions:{degradeOnBreakpointBlacklist:["xlarge"],degradeOnBreakpointChange:true,loopInterval:1,degradeAfterPlayed:false}},"connect/heartbeat":{factory:c.createAmbient,type:g.ambient.experience,size:g.sizes.experience,priority:2,keyframes:false,mediaObjectOptions:{frameRate:30},playerOptions:{degradeOnBreakpointBlacklist:["xlarge"],degradeOnBreakpointChange:true,loopInterval:1,degradeAfterPlayed:false}},"connect/calls":{factory:c.createAmbient,type:g.ambient.experience,size:g.sizes.experience,priority:2,keyframes:true,mediaObjectOptions:{frameRate:30},playerOptions:{}},"connect/message":{factory:c.createAmbient,type:g.ambient.experience,size:g.sizes.experience,priority:2,keyframes:true,mediaObjectOptions:{frameRate:30},playerOptions:{}},"connect/reply":{factory:c.createAmbient,type:g.ambient.experience,size:g.sizes.experience,priority:2,keyframes:true,mediaObjectOptions:{frameRate:30},playerOptions:{}},"timekeeping/stopwatch_hybrid":{factory:c.createBasicPlayer,type:g.basic.experience,size:g.sizes.experience,keyframes:true,mediaObjectOptions:{frameRate:30},playerOptions:{degradeOnBreakpointBlacklist:["xlarge"],degradeOnBreakpointChange:true,degradeAfterPlayed:false,autoEnhance:false}},"timekeeping/stopwatch_digital":{factory:c.createBasicPlayer,type:g.basic.experience,size:g.sizes.experience,keyframes:true,mediaObjectOptions:{frameRate:30},playerOptions:{degradeOnBreakpointBlacklist:["xlarge"],degradeOnBreakpointChange:true,degradeAfterPlayed:false,autoEnhance:false}},"timekeeping/stopwatch_analog":{factory:c.createBasicPlayer,type:g.basic.experience,size:g.sizes.experience,keyframes:true,mediaObjectOptions:{frameRate:30},playerOptions:{degradeOnBreakpointBlacklist:["xlarge"],degradeOnBreakpointChange:true,degradeAfterPlayed:false,autoEnhance:false}},"timekeeping/calendar":{factory:c.createAmbient,type:g.ambient.experience,size:g.sizes.experience,priority:2,keyframes:true,mediaObjectOptions:{frameRate:30},playerOptions:{}}}
},{"../experienceReport":544,"ac-renderplayer":446}],544:[function(b,c,a){(function(){var f=b("ac-experience-reporter");
var d=b("../../../build/asset-type-matrix.json");function g(){var h={};Object.keys(d).forEach(function(i){h[i]=f.newExperience(d[i])
});return h}c.exports=g()}())},{"../../../build/asset-type-matrix.json":1,"ac-experience-reporter":150}],545:[function(c,b,H){var v=c("ac-base").Object;
var M=c("ac-base").Element;var E=c("ac-base").Environment.Browser;var n=c("ac-base").Environment.Feature;
var B=c("ac-gallery");var x=c("ac-slideshow").SlideShow;var y=c("ac-viewport").Viewport;
var K=B.builder;var C=B.horizontalSliderKeyframesGenerator;var D=B.fadeInKeyframesGenerator;
var m=B.showHideKeyframesGenerator;var q=n.cssPropertyAvailable("opacity")&&n.cssPropertyAvailable("transition");
var N="#";var p=".";var G=".gallery-content";var f="-trigger";var a="ease";var g="fade";
var u="slide";var w="oldie";var A="large";var s="medium";var J="xsmall";var o={};
var I={galleryType:u,contentClass:G,triggerClass:f,transitionEasing:a,transitionDuration:0.4,touch:true,keyboard:true,endless:false,slideshow:false,autoplay:true,pauseOnUserInteraction:false,initialDelay:1000,delayBetweenSlides:3000};
function i(Q,O){O=v.extend(v.clone(I),O||{});O.galleryID=d(Q);O.wrapperID=N+O.galleryID;
O.galleryElement=M.select(O.wrapperID);if(!O.galleryElement){return}if(o[O.galleryID]){return o[O.galleryID]
}if(!q){O.galleryType=w}O.triggerClass=r(O.triggerClass,O.galleryID);O.allKeyFrames=h(O.wrapperID,O.contentClass);
if(!O.keyframes){O.keyframes=L(O.allKeyFrames,O.galleryType)}if(!O.keyframeElements){O.keyframeElements=t(O.allKeyFrames)
}if(E.IE){var P=j(k,200,O,false);M.addEventListener(window,"resize",k.bind(O),false);
M.addEventListener(window,"orientationchange",k.bind(O),false)}else{y.on("resize orientationchange",k,O)
}return o[O.galleryID]=F(O)}function F(P){var Q,O;if(!P.keyframes){return}switch(P.galleryType){case g:Q={engagementElement:P.galleryElement,touchElement:P.galleryElement,triggerSelector:P.triggerClass,transitionDuration:P.transitionDuration,transitionEasing:P.transitionEasing,endless:P.endless,autoplay:P.autoplay,keyframes:P.keyframes,shouldUseKeyboard:P.keyboard,touch:P.touch};
break;case w:Q={engagementElement:P.galleryElement,touchElement:P.galleryElement,triggerSelector:P.triggerClass,transitionDuration:P.transitionDuration,transitionEasing:P.transitionEasing,endless:P.endless,keyframeElements:P.keyframeElements,shouldUseKeyboard:P.keyboard,touch:P.touch};
break;default:Q={engagementElement:P.galleryElement,touchElement:P.galleryElement,triggerSelector:P.triggerClass,transitionDuration:P.transitionDuration,transitionEasing:P.transitionEasing,endless:P.endless,keyframes:P.keyframes.keyframes,bounceInKeyframe:P.keyframes.bounceInKeyframe,bounceOutKeyframe:P.keyframes.bounceOutKeyframe,shouldUseKeyboard:P.keyboard,touch:P.touch};
break}Q.analytics=P.analytics||{};O=K(Q);if(P.slideshow){O.slideShow=new x(O.gallery,{autoplay:P.autoplay,pauseOnUserInteraction:P.pauseOnUserInteraction,initialDelay:P.initialDelay,delayBetweenSlides:P.delayBetweenSlides})
}return O}function j(Q,S,P,O){var R;return function(){var W=P,V=arguments;var U=function(){R=null;
if(!O){Q.apply(W,V)}};var T=O&&!R;clearTimeout(R);R=setTimeout(U,S);if(T){Q.apply(W,V)
}}}function k(W){var U,Z,T,Q,S,V,Y=this,O=o[Y.galleryID];if(z()===J&&!M.hasClassName(M.select("html"),"touch")){return
}U=Y.keyframes=L(Y.allKeyFrames,Y.galleryType);if(Y.regenerateKeyframes){U=Y.keyframes=Y.regenerateKeyframes()
}if(!O){O=F(Y);if(!O){return}}O.gallery.setEngaged(!!U);if(Y.galleryType===u&&!!U){Q=O.gallery._keyframes.length;
S=U.keyframes.length;T=O.gallery.getSelectedIndex();V=Math.floor(T/(Q/S));O.gallery._keyframes[O.gallery._selected].draw(0);
O.gallery._keyframes=U.keyframes;if(U[V]){U.keyframes[V].draw();O.triggerPainter._paint({incoming:U.keyframes[V]})
}if(O.touchController){var X=O.gallery.toTimeline(U.bounceOutKeyframe,U.bounceInKeyframe);
var P=Y.galleryElement.offsetWidth/O.touchController.options.scrollVelocity;var R=Y.galleryElement.offsetHeight/O.touchController.options.scrollVelocity;
O.touchController._scrollView._touchContainerWidth=P;O.touchController._scrollView._touchContainerHeight=R;
O.touchController._scrollView._innerScrollWidth=(P*O.gallery.numKeyframes())+(O.touchController._scrollView.options.startBounceDistance+O.touchController._scrollView.options.endBounceDistance);
O.touchController._scrollView._innerScrollHeight=(R*O.gallery.numKeyframes())+(O.touchController._scrollView.options.startBounceDistance+O.touchController._scrollView.options.endBounceDistance);
O.touchController._player=X;O.touchController._scrollRenderer._player=X;O.touchController.onDidShow()
}O.gallery.show(V,{useTransition:false})}}function d(O){if(O){O=O.match(/^(#)?(\S+)$/);
if(O&&O.length===3){return O[2]}}return O}function l(O){if(O){O=O.match(/^(\.)?(\S+)$/);
if(O&&O.length===3){return p+O[2]}}return G}function r(P,O){if(P&&P!==f){P=P.match(/^(\.)?(\S+)$/);
if(P&&P.length===3){return p+P[2]}}return p+O+f}function z(){var O=y.innerWidth();
if(O>=1024){return A}else{if(O<=767&&!n.isDesktop()){return J}else{return s}}}function L(Q,S){var P=z();
var O=Q[P];var R=S===g?D:C;if(!!O.length){return R(Q[P])}else{return null}}function t(P){var O=z();
return P[O]}function h(S,P){P=l(P);var U=S+" "+P+"-";var Q=M.selectAll(U+A);var O=M.selectAll(U+s);
var T=M.selectAll(U+J);var R=M.selectAll(S+" "+P);if(!Q.length&&!!R.length){Q=R
}if(!O.length&&!!R.length){O=R}if(!T.length&&!!R.length){T=R}return{large:Q,medium:O,xsmall:T}
}b.exports={create:i,getSize:z,findAllKeyFrameElements:h}},{"ac-base":false,"ac-gallery":208,"ac-slideshow":472,"ac-viewport":535}]},{},[538]);