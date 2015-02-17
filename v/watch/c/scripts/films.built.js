(function e(b,g,d){function c(k,i){if(!g[k]){if(!b[k]){var h=typeof require=="function"&&require;
if(!i&&h){return h(k,!0)}if(a){return a(k,!0)}throw new Error("Cannot find module '"+k+"'")
}var j=g[k]={exports:{}};b[k][0].call(j.exports,function(l){var m=b[k][1][l];return c(m?m:l)
},j,j.exports,e,b,g,d)}return g[k].exports}var a=typeof require=="function"&&require;
for(var f=0;f<d.length;f++){c(d[f])}return c})({1:[function(b,c,a){c.exports={SharedInstance:b("./ac-shared-instance/SharedInstance")}
},{"./ac-shared-instance/SharedInstance":2}],2:[function(d,h,c){var i=window,g="AC",a="SharedInstance",f=i[g];
var b=(function(){var j={};return{get:function(l,k){var m=null;if(j[l]&&j[l][k]){m=j[l][k]
}return m},set:function(m,k,l){if(!j[m]){j[m]={}}if(typeof l==="function"){j[m][k]=new l()
}else{j[m][k]=l}return j[m][k]},share:function(m,k,l){var n=this.get(m,k);if(!n){n=this.set(m,k,l)
}return n},remove:function(l,k){var m=typeof k;if(m==="string"||m==="number"){if(!j[l]||!j[l][k]){return
}j[l][k]=null;return}if(j[l]){j[l]=null}}}}());if(!f){f=i[g]={}}if(!f[a]){f[a]=b
}h.exports=f[a]},{}],3:[function(d,f,c){var b=d("./ac-dom-nodes/helpers/nodeTypes");
var g;var a={createDocumentFragment:d("./ac-dom-nodes/createDocumentFragment"),filterByNodeType:d("./ac-dom-nodes/filterByNodeType"),insertAfter:d("./ac-dom-nodes/insertAfter"),insertBefore:d("./ac-dom-nodes/insertBefore"),insertFirstChild:d("./ac-dom-nodes/insertFirstChild"),insertLastChild:d("./ac-dom-nodes/insertLastChild"),isComment:d("./ac-dom-nodes/isComment"),isDocument:d("./ac-dom-nodes/isDocument"),isDocumentFragment:d("./ac-dom-nodes/isDocumentFragment"),isDocumentType:d("./ac-dom-nodes/isDocumentType"),isElement:d("./ac-dom-nodes/isElement"),isNode:d("./ac-dom-nodes/isNode"),isNodeList:d("./ac-dom-nodes/isNodeList"),isTextNode:d("./ac-dom-nodes/isTextNode"),remove:d("./ac-dom-nodes/remove"),replace:d("./ac-dom-nodes/replace")};
for(g in b){a[g]=b[g]}f.exports=a},{"./ac-dom-nodes/createDocumentFragment":4,"./ac-dom-nodes/filterByNodeType":5,"./ac-dom-nodes/helpers/nodeTypes":7,"./ac-dom-nodes/insertAfter":9,"./ac-dom-nodes/insertBefore":10,"./ac-dom-nodes/insertFirstChild":11,"./ac-dom-nodes/insertLastChild":12,"./ac-dom-nodes/isComment":13,"./ac-dom-nodes/isDocument":14,"./ac-dom-nodes/isDocumentFragment":15,"./ac-dom-nodes/isDocumentType":16,"./ac-dom-nodes/isElement":17,"./ac-dom-nodes/isNode":18,"./ac-dom-nodes/isNodeList":19,"./ac-dom-nodes/isTextNode":20,"./ac-dom-nodes/remove":21,"./ac-dom-nodes/replace":22}],4:[function(c,d,b){d.exports=function a(g){var f=document.createDocumentFragment();
var h;if(g){h=document.createElement("div");h.innerHTML=g;while(h.firstChild){f.appendChild(h.firstChild)
}}return f}},{}],5:[function(d,f,c){var g=d("./helpers/isNodeType");var a=d("./helpers/nodeTypes").ELEMENT_NODE;
f.exports=function b(i,h){h=h||a;i=Array.prototype.slice.call(i);return i.filter(function(j){return g(j,h)
})}},{"./helpers/isNodeType":6,"./helpers/nodeTypes":7}],6:[function(b,c,a){var d=b("../isNode");
c.exports=function f(h,g){if(!d(h)){return false}if(typeof g==="number"){return(h.nodeType===g)
}return(g.indexOf(h.nodeType)!==-1)}},{"../isNode":18}],7:[function(b,c,a){c.exports={ELEMENT_NODE:1,TEXT_NODE:3,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11}
},{}],8:[function(f,c,h){var g=f("./nodeTypes");var b=f("./isNodeType");var j=[g.ELEMENT_NODE,g.TEXT_NODE,g.COMMENT_NODE,g.DOCUMENT_FRAGMENT_NODE];
var d=" must be an Element, TextNode, Comment, or Document Fragment";var m=[g.ELEMENT_NODE,g.TEXT_NODE,g.COMMENT_NODE];
var i=" must be an Element, TextNode, or Comment";var k=[g.ELEMENT_NODE,g.DOCUMENT_FRAGMENT_NODE];
var l=" must be an Element, or Document Fragment";var a=" must have a parentNode";
c.exports={parentNode:function(n,q,p,o){o=o||"target";if((n||q)&&!b(n,k)){throw new TypeError(p+": "+o+l)
}},childNode:function(n,q,p,o){o=o||"target";if(!n&&!q){return}if(!b(n,m)){throw new TypeError(p+": "+o+i)
}},insertNode:function(n,q,p,o){o=o||"node";if(!n&&!q){return}if(!b(n,j)){throw new TypeError(p+": "+o+d)
}},hasParentNode:function(n,p,o){o=o||"target";if(!n.parentNode){throw new TypeError(p+": "+o+a)
}}}},{"./isNodeType":6,"./nodeTypes":7}],9:[function(b,c,a){var f=b("./helpers/validate");
c.exports=function d(g,h){f.insertNode(g,true,"insertAfter");f.childNode(h,true,"insertAfter");
f.hasParentNode(h,"insertAfter");if(!h.nextSibling){return h.parentNode.appendChild(g)
}return h.parentNode.insertBefore(g,h.nextSibling)}},{"./helpers/validate":8}],10:[function(c,d,a){var f=c("./helpers/validate");
d.exports=function b(g,h){f.insertNode(g,true,"insertBefore");f.childNode(h,true,"insertBefore");
f.hasParentNode(h,"insertBefore");return h.parentNode.insertBefore(g,h)}},{"./helpers/validate":8}],11:[function(c,d,b){var f=c("./helpers/validate");
d.exports=function a(g,h){f.insertNode(g,true,"insertFirstChild");f.parentNode(h,true,"insertFirstChild");
if(!h.firstChild){return h.appendChild(g)}return h.insertBefore(g,h.firstChild)
}},{"./helpers/validate":8}],12:[function(b,c,a){var d=b("./helpers/validate");
c.exports=function f(g,h){d.insertNode(g,true,"insertLastChild");d.parentNode(h,true,"insertLastChild");
return h.appendChild(g)}},{"./helpers/validate":8}],13:[function(c,d,a){var g=c("./helpers/isNodeType");
var f=c("./helpers/nodeTypes").COMMENT_NODE;d.exports=function b(h){return g(h,f)
}},{"./helpers/isNodeType":6,"./helpers/nodeTypes":7}],14:[function(c,d,b){var g=c("./helpers/isNodeType");
var a=c("./helpers/nodeTypes").DOCUMENT_NODE;d.exports=function f(h){return g(h,a)
}},{"./helpers/isNodeType":6,"./helpers/nodeTypes":7}],15:[function(c,d,b){var g=c("./helpers/isNodeType");
var a=c("./helpers/nodeTypes").DOCUMENT_FRAGMENT_NODE;d.exports=function f(h){return g(h,a)
}},{"./helpers/isNodeType":6,"./helpers/nodeTypes":7}],16:[function(b,c,a){var g=b("./helpers/isNodeType");
var f=b("./helpers/nodeTypes").DOCUMENT_TYPE_NODE;c.exports=function d(h){return g(h,f)
}},{"./helpers/isNodeType":6,"./helpers/nodeTypes":7}],17:[function(c,d,b){var g=c("./helpers/isNodeType");
var a=c("./helpers/nodeTypes").ELEMENT_NODE;d.exports=function f(h){return g(h,a)
}},{"./helpers/isNodeType":6,"./helpers/nodeTypes":7}],18:[function(b,c,a){c.exports=function d(f){return !!(f&&f.nodeType)
}},{}],19:[function(c,d,b){var f=/^\[object (HTMLCollection|NodeList|Object)\]$/;
d.exports=function a(g){if(!g){return false}if(typeof g.length!=="number"){return false
}if(typeof g[0]==="object"&&(!g[0]||!g[0].nodeType)){return false}return f.test(Object.prototype.toString.call(g))
}},{}],20:[function(c,d,a){var g=c("./helpers/isNodeType");var b=c("./helpers/nodeTypes").TEXT_NODE;
d.exports=function f(h){return g(h,b)}},{"./helpers/isNodeType":6,"./helpers/nodeTypes":7}],21:[function(c,d,b){var f=c("./helpers/validate");
d.exports=function a(g){f.childNode(g,true,"remove");if(!g.parentNode){return g
}return g.parentNode.removeChild(g)}},{"./helpers/validate":8}],22:[function(b,d,a){var f=b("./helpers/validate");
d.exports=function c(g,h){f.insertNode(g,true,"insertFirstChild","newNode");f.childNode(h,true,"insertFirstChild","oldNode");
f.hasParentNode(h,"insertFirstChild","oldNode");return h.parentNode.replaceChild(g,h)
}},{"./helpers/validate":8}],23:[function(b,c,a){var d={querySelector:b("./ac-dom-traversal/querySelector"),querySelectorAll:b("./ac-dom-traversal/querySelectorAll"),ancestor:b("./ac-dom-traversal/ancestor"),ancestors:b("./ac-dom-traversal/ancestors"),children:b("./ac-dom-traversal/children"),firstChild:b("./ac-dom-traversal/firstChild"),lastChild:b("./ac-dom-traversal/lastChild"),siblings:b("./ac-dom-traversal/siblings"),nextSibling:b("./ac-dom-traversal/nextSibling"),nextSiblings:b("./ac-dom-traversal/nextSiblings"),previousSibling:b("./ac-dom-traversal/previousSibling"),previousSiblings:b("./ac-dom-traversal/previousSiblings"),filterBySelector:b("./ac-dom-traversal/filterBySelector"),matchesSelector:b("./ac-dom-traversal/matchesSelector")};
b("./ac-dom-traversal/shims/ie")(d);c.exports=d},{"./ac-dom-traversal/ancestor":24,"./ac-dom-traversal/ancestors":25,"./ac-dom-traversal/children":26,"./ac-dom-traversal/filterBySelector":27,"./ac-dom-traversal/firstChild":28,"./ac-dom-traversal/lastChild":31,"./ac-dom-traversal/matchesSelector":32,"./ac-dom-traversal/nextSibling":33,"./ac-dom-traversal/nextSiblings":34,"./ac-dom-traversal/previousSibling":35,"./ac-dom-traversal/previousSiblings":36,"./ac-dom-traversal/querySelector":37,"./ac-dom-traversal/querySelectorAll":38,"./ac-dom-traversal/shims/ie":39,"./ac-dom-traversal/siblings":40}],24:[function(d,g,c){var a=d("ac-dom-nodes");
var b=d("./matchesSelector");var h=d("./helpers/validate");g.exports=function f(j,i){h.childNode(j,true,"ancestors");
h.selector(i,false,"ancestors");if(j!==document.body){while((j=j.parentNode)&&a.isElement(j)){if(!i||b(j,i)){return j
}if(j===document.body){break}}}return null}},{"./helpers/validate":30,"./matchesSelector":32,"ac-dom-nodes":3}],25:[function(d,f,c){var a=d("ac-dom-nodes");
var b=d("./matchesSelector");var h=d("./helpers/validate");f.exports=function g(k,i){var j=[];
h.childNode(k,true,"ancestors");h.selector(i,false,"ancestors");if(k!==document.body){while((k=k.parentNode)&&a.isElement(k)){if(!i||b(k,i)){j.push(k)
}if(k===document.body){break}}}return j}},{"./helpers/validate":30,"./matchesSelector":32,"ac-dom-nodes":3}],26:[function(d,g,c){var a=d("ac-dom-nodes");
var b=d("./filterBySelector");var h=d("./helpers/validate");g.exports=function f(k,i){var j;
h.parentNode(k,true,"children");h.selector(i,false,"children");j=k.children||k.childNodes;
j=a.filterByNodeType(j);if(i){j=b(j,i)}return j}},{"./filterBySelector":27,"./helpers/validate":30,"ac-dom-nodes":3}],27:[function(d,f,c){var b=d("./matchesSelector");
var g=d("./helpers/validate");f.exports=function a(i,h){g.selector(h,true,"filterBySelector");
i=Array.prototype.slice.call(i);return i.filter(function(j){return b(j,h)})}},{"./helpers/validate":30,"./matchesSelector":32}],28:[function(b,d,a){var c=b("./children");
var g=b("./helpers/validate");d.exports=function f(j,h){var i;g.parentNode(j,true,"firstChild");
g.selector(h,false,"firstChild");if(j.firstElementChild&&!h){return j.firstElementChild
}i=c(j,h);if(i.length){return i[0]}return null}},{"./children":26,"./helpers/validate":30}],29:[function(b,c,a){c.exports=window.Element?(function(d){return d.matches||d.matchesSelector||d.webkitMatchesSelector||d.mozMatchesSelector||d.msMatchesSelector||d.oMatchesSelector
}(Element.prototype)):null},{}],30:[function(d,b,f){var j=d("ac-dom-nodes");var a=function(m,l){if(!j.isNode(m)){return false
}if(typeof l==="number"){return(m.nodeType===l)}return(l.indexOf(m.nodeType)!==-1)
};var h=[j.ELEMENT_NODE,j.DOCUMENT_NODE,j.DOCUMENT_FRAGMENT_NODE];var i=" must be an Element, Document, or Document Fragment";
var k=[j.ELEMENT_NODE,j.TEXT_NODE,j.COMMENT_NODE];var g=" must be an Element, TextNode, or Comment";
var c=" must be a string";b.exports={parentNode:function(l,o,n,m){m=m||"node";if((l||o)&&!a(l,h)){throw new TypeError(n+": "+m+i)
}},childNode:function(l,o,n,m){m=m||"node";if(!l&&!o){return}if(!a(l,k)){throw new TypeError(n+": "+m+g)
}},selector:function(l,o,n,m){m=m||"selector";if((l||o)&&typeof l!=="string"){throw new TypeError(n+": "+m+c)
}}}},{"ac-dom-nodes":3}],31:[function(b,d,a){var c=b("./children");var g=b("./helpers/validate");
d.exports=function f(j,h){var i;g.parentNode(j,true,"lastChild");g.selector(h,false,"lastChild");
if(j.lastElementChild&&!h){return j.lastElementChild}i=c(j,h);if(i.length){return i[i.length-1]
}return null}},{"./children":26,"./helpers/validate":30}],32:[function(f,g,d){var b=f("ac-dom-nodes");
var a=f("./helpers/nativeMatches");var h=f("./helpers/validate");g.exports=function c(j,i){h.selector(i,true,"matchesSelector");
return b.isElement(j)?a.call(j,i):false}},{"./helpers/nativeMatches":29,"./helpers/validate":30,"ac-dom-nodes":3}],33:[function(d,f,c){var a=d("ac-dom-nodes");
var b=d("./matchesSelector");var h=d("./helpers/validate");f.exports=function g(j,i){h.childNode(j,true,"nextSibling");
h.selector(i,false,"nextSibling");if(j.nextElementSibling&&!i){return j.nextElementSibling
}while(j=j.nextSibling){if(a.isElement(j)){if(!i||b(j,i)){return j}}}return null
}},{"./helpers/validate":30,"./matchesSelector":32,"ac-dom-nodes":3}],34:[function(f,g,c){var a=f("ac-dom-nodes");
var b=f("./matchesSelector");var h=f("./helpers/validate");g.exports=function d(k,i){var j=[];
h.childNode(k,true,"nextSiblings");h.selector(i,false,"nextSiblings");while(k=k.nextSibling){if(a.isElement(k)){if(!i||b(k,i)){j.push(k)
}}}return j}},{"./helpers/validate":30,"./matchesSelector":32,"ac-dom-nodes":3}],35:[function(d,f,c){var a=d("ac-dom-nodes");
var b=d("./matchesSelector");var h=d("./helpers/validate");f.exports=function g(j,i){h.childNode(j,true,"previousSibling");
h.selector(i,false,"previousSibling");if(j.previousElementSibling&&!i){return j.previousElementSibling
}while(j=j.previousSibling){if(a.isElement(j)){if(!i||b(j,i)){return j}}}return null
}},{"./helpers/validate":30,"./matchesSelector":32,"ac-dom-nodes":3}],36:[function(d,f,c){var a=d("ac-dom-nodes");
var b=d("./matchesSelector");var h=d("./helpers/validate");f.exports=function g(k,i){var j=[];
h.childNode(k,true,"previousSiblings");h.selector(i,false,"previousSiblings");while(k=k.previousSibling){if(a.isElement(k)){if(!i||b(k,i)){j.push(k)
}}}return j.reverse()}},{"./helpers/validate":30,"./matchesSelector":32,"ac-dom-nodes":3}],37:[function(b,c,a){var f=b("./helpers/validate");
c.exports=function d(g,h){h=h||document;f.parentNode(h,true,"querySelector","context");
f.selector(g,true,"querySelector");return h.querySelector(g)}},{"./helpers/validate":30}],38:[function(b,c,a){var f=b("./helpers/validate");
c.exports=function d(g,h){h=h||document;f.parentNode(h,true,"querySelectorAll","context");
f.selector(g,true,"querySelectorAll");return Array.prototype.slice.call(h.querySelectorAll(g))
}},{"./helpers/validate":30}],39:[function(d,f,c){var g=d("../vendor/sizzle/sizzle");
var b=d("ac-dom-nodes");var a=d("../helpers/nativeMatches");var h=d("../helpers/validate");
f.exports=function(j,i){if(i||!("querySelectorAll" in document)){j.querySelectorAll=function(k,m){var l;
var n;m=m||document;h.parentNode(m,true,"querySelectorAll","context");h.selector(k,true,"querySelectorAll");
if(b.isDocumentFragment(m)){l=j.children(m);n=[];l.forEach(function(p){var o;if(g.matchesSelector(p,k)){n.push(p)
}o=g(k,p);if(o.length){n=n.concat(o)}});return n}return g(k,m)};j.querySelector=function(l,m){var k;
m=m||document;h.parentNode(m,true,"querySelector","context");h.selector(l,true,"querySelector");
k=j.querySelectorAll(l,m);return k.length?k[0]:null}}if(i||!a){j.matchesSelector=function(l,k){return g.matchesSelector(l,k)
}}}},{"../helpers/nativeMatches":29,"../helpers/validate":30,"../vendor/sizzle/sizzle":41,"ac-dom-nodes":3}],40:[function(b,d,a){var c=b("./children");
var g=b("./helpers/validate");d.exports=function f(j,h){var i=[];g.childNode(j,true,"siblings");
g.selector(h,false,"siblings");if(j.parentNode){i=c(j.parentNode,h);i=i.filter(function(k){return(k!==j)
})}return i}},{"./children":26,"./helpers/validate":30}],41:[function(b,c,a){
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
}else{ad.Sizzle=ac}})(window)},{}],42:[function(b,c,a){c.exports={DOMEmitter:b("./ac-dom-emitter/DOMEmitter")}
},{"./ac-dom-emitter/DOMEmitter":43}],43:[function(c,b,d){var f;var j=c("ac-event-emitter").EventEmitter,g=c("ac-dom-events"),a=c("ac-dom-traversal");
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
},{"ac-dom-events":70,"ac-dom-traversal":23,"ac-event-emitter":false}],44:[function(b,c,a){c.exports={WindowDelegate:b("./ac-window-delegate/WindowDelegate"),WindowDelegateOptimizer:b("./ac-window-delegate/WindowDelegateOptimizer"),WindowDelegateCustomEvent:b("./ac-window-delegate/WindowDelegateCustomEvent")}
},{"./ac-window-delegate/WindowDelegate":47,"./ac-window-delegate/WindowDelegateCustomEvent":48,"./ac-window-delegate/WindowDelegateOptimizer":49}],45:[function(b,c,a){var f=b("ac-event-emitter").EventEmitter;
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
},{"ac-event-emitter":false}],46:[function(b,c,a){var g=b("ac-event-emitter").EventEmitter;
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
};c.exports=d},{"ac-event-emitter":false}],47:[function(d,b,g){var i;var c=d("ac-shared-instance").SharedInstance,l=d("ac-dom-emitter").DOMEmitter,j=d("./OptimizerController"),f=d("./CustomEventController"),h=d("./queries/queries"),m=d("./optimizers/optimizers");
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
};b.exports=c.share(k,a,n)},{"./CustomEventController":45,"./OptimizerController":46,"./optimizers/optimizers":52,"./queries/queries":61,"ac-dom-emitter":42,"ac-shared-instance":1}],48:[function(c,d,a){var g=c("ac-event-emitter").EventEmitter;
function b(h,j,i){g.call(this);this.name=h;this.active=false;this._initializeFunc=j;
this._deinitializeFunc=i}var f=b.prototype=new g(null);f.initialize=function(){if(this._initializeFunc){this._initializeFunc()
}return this};f.deinitialize=function(){if(this._deinitializeFunc){this._deinitializeFunc()
}return this};d.exports=b},{"ac-event-emitter":false}],49:[function(c,d,b){var g=c("ac-event-emitter").EventEmitter;
function a(h,i){g.call(this);this.active=false;this.eventNames=h.eventNames;this.propertyNames=h.propertyNames;
this.options=h.options||{};this.callback=i}var f=a.prototype=new g(null);f.update=function(i,h){this.trigger("update",{prop:i,val:h})
};f.activate=function(){this.active=true;this.trigger("activate",this)};f.deactivate=function(){this.active=false;
this.trigger("deactivate",this)};d.exports=a},{"ac-event-emitter":false}],50:[function(f,g,b){var a=f("../../WindowDelegateOptimizer"),d=f("../../queries/queries");
var c={eventNames:["resize"],propertyNames:["clientWidth","clientHeight","innerWidth","innerHeight"]};
var h=new a(c,function(m){var l,k=c.propertyNames,j=k.length;for(l=0;l<j;l++){this.update(k[l],d[k[l]](true))
}});g.exports=h},{"../../WindowDelegateOptimizer":49,"../../queries/queries":61}],51:[function(g,h,b){var a=g("../../WindowDelegateOptimizer"),f=g("../../queries/queries");
var d={eventNames:["scroll"],propertyNames:["scrollX","scrollY","maxScrollX","maxScrollY"]};
var c=new a(d,function(m){var l,k=d.propertyNames,j=k.length;for(l=0;l<j;l++){this.update(k[l],f[k[l]](true))
}});h.exports=c},{"../../WindowDelegateOptimizer":49,"../../queries/queries":61}],52:[function(d,f,b){var c=d("./events/resize"),a=d("./events/scroll");
f.exports=[c,a]},{"./events/resize":50,"./events/scroll":51}],53:[function(b,c,a){var d=function(f){return document.documentElement.clientHeight
};c.exports=d},{}],54:[function(b,c,a){var d=function(f){return document.documentElement.clientWidth
};c.exports=d},{}],55:[function(b,d,a){var c=function(f){return window.innerHeight||this.clientHeight(f)
};d.exports=c},{}],56:[function(b,c,a){var d=function(f){return window.innerWidth||this.clientWidth(f)
};c.exports=d},{}],57:[function(c,d,a){var b=function(f){return document.body.scrollWidth-this.innerWidth()
};d.exports=b},{}],58:[function(c,d,b){var a=function(f){return document.body.scrollHeight-this.innerHeight()
};d.exports=a},{}],59:[function(b,c,a){var d=function(f){var h=window.pageXOffset;
if(!h){var g=document.documentElement||document.body.parentNode||document.body;
h=g.scrollLeft}return h};c.exports=d},{}],60:[function(b,c,a){var d=function(f){var h=window.pageYOffset;
if(!h){var g=document.documentElement||document.body.parentNode||document.body;
h=g.scrollTop}return h};c.exports=d},{}],61:[function(i,g,k){var b=i("./methods/innerWidth"),j=i("./methods/innerHeight"),d=i("./methods/clientWidth"),l=i("./methods/clientHeight"),c=i("./methods/scrollX"),a=i("./methods/scrollY"),h=i("./methods/maxScrollX"),f=i("./methods/maxScrollY");
g.exports={innerWidth:b,innerHeight:j,clientWidth:d,clientHeight:l,scrollX:c,scrollY:a,maxScrollX:h,maxScrollY:f}
},{"./methods/clientHeight":53,"./methods/clientWidth":54,"./methods/innerHeight":55,"./methods/innerWidth":56,"./methods/maxScrollX":57,"./methods/maxScrollY":58,"./methods/scrollX":59,"./methods/scrollY":60}],62:[function(b,c,a){c.exports={BreakpointsDelegate:b("./ac-breakpoints-delegate/BreakpointsDelegate")}
},{"./ac-breakpoints-delegate/BreakpointsDelegate":63}],63:[function(f,b,i){var d=f("ac-shared-instance").SharedInstance,g=f("ac-object"),p=f("ac-window-delegate").WindowDelegate,c=f("ac-window-delegate").WindowDelegateCustomEvent,o=f("ac-event-emitter").EventEmitter;
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
},{"ac-event-emitter":false,"ac-object":75,"ac-shared-instance":1,"ac-window-delegate":44}],64:[function(d,f,b){var g=d("./ac-browser/BrowserData");
var a=/applewebkit/i;var h=d("./ac-browser/IE");var c=g.create();c.isWebKit=function(i){var j=i||window.navigator.userAgent;
return j?!!a.test(j):false};c.lowerCaseUserAgent=navigator.userAgent.toLowerCase();
if(c.name==="IE"){c.IE={documentMode:h.getDocumentMode()}}f.exports=c},{"./ac-browser/BrowserData":65,"./ac-browser/IE":66}],65:[function(b,c,a){var d=b("./data");
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
};c.exports=f},{"./data":67}],66:[function(b,c,a){c.exports={getDocumentMode:function(){var d;
if(document.documentMode){d=parseInt(document.documentMode,10)}else{d=5;if(document.compatMode){if(document.compatMode==="CSS1Compat"){d=7
}}}return d}}},{}],67:[function(b,c,a){c.exports={browser:[{string:window.navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:window.navigator.userAgent,subString:/silk/i,identity:"Silk"},{string:window.navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:window.navigator.userAgent,subString:/mobile\/[^\s]*\ssafari\//i,identity:"Safari Mobile",versionSearch:"Version"},{string:window.navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera",versionSearch:"Version"},{string:window.navigator.vendor,subString:"iCab",identity:"iCab"},{string:window.navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:window.navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:window.navigator.vendor,subString:"Camino",identity:"Camino"},{string:window.navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:window.navigator.userAgent,subString:"MSIE",identity:"IE",versionSearch:"MSIE"},{string:window.navigator.userAgent,subString:"Trident",identity:"IE",versionSearch:"rv"},{string:window.navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:window.navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],os:[{string:window.navigator.platform,subString:"Win",identity:"Windows",versionSearch:"Windows NT"},{string:window.navigator.platform,subString:"Mac",identity:"OS X"},{string:window.navigator.userAgent,subString:"iPhone",identity:"iOS",versionSearch:"iPhone OS"},{string:window.navigator.userAgent,subString:"iPad",identity:"iOS",versionSearch:"CPU OS"},{string:window.navigator.userAgent,subString:/android/i,identity:"Android"},{string:window.navigator.platform,subString:"Linux",identity:"Linux"}],versionString:window.navigator.userAgent||window.navigator.appVersion||undefined}
},{}],68:[function(b,c,a){c.exports.DOMEmitter=b("./ac-dom-emitter/DOMEmitter")
},{"./ac-dom-emitter/DOMEmitter":69}],69:[function(b,c,a){var f;var d=b("ac-event-emitter").EventEmitter;
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
};c.exports=g},{"ac-event-emitter":false}],70:[function(b,d,a){var c={};c.addEventListener=function(j,h,i,g){if(j.addEventListener){j.addEventListener(h,i,g)
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
};d.exports=c},{}],71:[function(c,f,b){var d={cssPropertyAvailable:c("./ac-feature/cssPropertyAvailable"),localStorageAvailable:c("./ac-feature/localStorageAvailable")};
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
};f.exports=d},{"./ac-feature/cssPropertyAvailable":72,"./ac-feature/localStorageAvailable":73}],72:[function(c,f,b){var g=null;
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
}}return false}}},{}],73:[function(d,f,b){var a=null;f.exports=function c(){if(a===null){a=!!(window.localStorage&&window.localStorage.non_existent!==null)
}return a}},{}],74:[function(i,c,x){var s=Object.prototype.toString;var l=Object.prototype.hasOwnProperty;
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
}catch(z){return A}}},{}],75:[function(b,c,a){c.exports={clone:b("./ac-object/clone"),create:b("./ac-object/create"),defaults:b("./ac-object/defaults"),extend:b("./ac-object/extend"),getPrototypeOf:b("./ac-object/getPrototypeOf"),isDate:b("./ac-object/isDate"),isEmpty:b("./ac-object/isEmpty"),isRegExp:b("./ac-object/isRegExp"),toQueryParameters:b("./ac-object/toQueryParameters")}
},{"./ac-object/clone":76,"./ac-object/create":77,"./ac-object/defaults":78,"./ac-object/extend":79,"./ac-object/getPrototypeOf":80,"./ac-object/isDate":81,"./ac-object/isEmpty":82,"./ac-object/isRegExp":83,"./ac-object/toQueryParameters":84}],76:[function(b,c,a){var f=b("./extend");
c.exports=function d(g){return f({},g)}},{"./extend":79}],77:[function(b,d,a){var f=function(){};
d.exports=function c(g){if(arguments.length>1){throw new Error("Second argument not supported")
}if(g===null||typeof g!=="object"){throw new TypeError("Object prototype may only be an Object.")
}if(typeof Object.create==="function"){return Object.create(g)}else{f.prototype=g;
return new f()}}},{}],78:[function(b,c,a){var f=b("./extend");c.exports=function d(h,g){if(typeof h!=="object"){throw new TypeError("defaults: must provide a defaults object")
}g=g||{};if(typeof g!=="object"){throw new TypeError("defaults: options must be a typeof object")
}return f({},h,g)}},{"./extend":79}],79:[function(c,d,b){var a=Object.prototype.hasOwnProperty;
d.exports=function f(){var h;var g;if(arguments.length<2){h=[{},arguments[0]]}else{h=[].slice.call(arguments)
}g=h.shift();h.forEach(function(j){if(j!=null){for(var i in j){if(a.call(j,i)){g[i]=j[i]
}}}});return g}},{}],80:[function(c,d,b){var a=Object.prototype.hasOwnProperty;
d.exports=function f(i){if(Object.getPrototypeOf){return Object.getPrototypeOf(i)
}else{if(typeof i!=="object"){throw new Error("Requested prototype of a value that is not an object.")
}else{if(typeof this.__proto__==="object"){return i.__proto__}else{var g=i.constructor;
var h;if(a.call(i,"constructor")){h=g;if(!(delete i.constructor)){return null}g=i.constructor;
i.constructor=h}return g?g.prototype:null}}}}},{}],81:[function(b,d,a){d.exports=function c(f){return Object.prototype.toString.call(f)==="[object Date]"
}},{}],82:[function(c,d,b){var a=Object.prototype.hasOwnProperty;d.exports=function f(g){var h;
if(typeof g!=="object"){throw new TypeError("ac-base.Object.isEmpty : Invalid parameter - expected object")
}for(h in g){if(a.call(g,h)){return false}}return true}},{}],83:[function(c,d,b){d.exports=function a(f){return window.RegExp?f instanceof RegExp:false
}},{}],84:[function(c,f,b){var a=c("qs");f.exports=function d(g){if(typeof g!=="object"){throw new TypeError("toQueryParameters error: argument is not an object")
}return a.stringify(g)}},{qs:74}],85:[function(b,c,a){c.exports=function(){var d=b("dust-runtime");
(function(){d.register("emptyTemplate",f);function f(h,g){return h.write("<div><!-- having less than two templates in ./src/templates causes problems --></div>")
}return f})();(function(){d.register("rangeSlider",f);function f(h,g){return h.write('<div class="ac-rangeslider ac-rangeslider-').reference(g.get("orientation"),g,"h").write(" ac-rangeslider-skin-").reference(g.get("skin"),g,"h").write('" data-rangesliderrangeslider-min="').reference(g.get("min"),g,"h").write('" data-rangeslider-max="').reference(g.get("max"),g,"h").write('" data-rangeslider-step="').reference(g.get("step"),g,"h").write('" data-rangeslider-value="').reference(g.get("value"),g,"h").write('" data-rangeslider-orientation="').reference(g.get("orientation"),g,"h").write('" ><div class="ac-rangeslider-back"></div><div class="ac-rangeslider-grip"><div class="ac-rangeslider-rail"></div><div class="ac-rangeslider-foot"></div><div class="ac-rangeslider-head"></div><div class="ac-rangeslider-jewel"></div></div><input type="range" class="ac-rangeslider-eventsurface" tabindex="').reference(g.get("tabindex"),g,"h").write('" role="slider" aria-label="').reference(g.get("label"),g,"h").write('" aria-valuemin="').reference(g.get("min"),g,"h").write('" aria-valuenow="').reference(g.get("value"),g,"h").write('" aria-valuemax="').reference(g.get("max"),g,"h").write('" ></div>')
}return f})();return d}},{"dust-runtime":241}],86:[function(c,d,b){var a=c("./ac-keyboard/Keyboard");
d.exports=new a();d.exports.Keyboard=a;d.exports.keys=c("./ac-keyboard/keymap")
},{"./ac-keyboard/Keyboard":88,"./ac-keyboard/keymap":89}],87:[function(d,f,b){var c=d("ac-base").Object;
var a=["keyLocation"];function g(h){this.originalEvent=h;for(var i in h){if(typeof h[i]!=="function"&&a.indexOf(i)===-1){this[i]=h[i]
}}this.location=(this.originalEvent.keyLocation===undefined)?this.originalEvent.location:this.originalEvent.keyLocation
}g.prototype={preventDefault:function(){if(typeof this.originalEvent.preventDefault!=="function"){this.originalEvent.returnValue=false;
return}return this.originalEvent.preventDefault()},stopPropagation:function(){return this.originalEvent.stopPropagation()
}};f.exports=g},{"ac-base":false}],88:[function(f,c,h){var j=f("ac-base").Element;
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
}};i._normalizeKeyboardEvent=function(o){return new g(o)};c.exports=b},{"./KeyEvent":87,"./keymap":89,"ac-base":false,"ac-event-emitter":false}],89:[function(b,c,a){c.exports={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CONTROL:17,ALT:18,COMMAND:91,CAPSLOCK:20,ESCAPE:27,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,NUMPAD_ZERO:96,NUMPAD_ONE:97,NUMPAD_TWO:98,NUMPAD_THREE:99,NUMPAD_FOUR:100,NUMPAD_FIVE:101,NUMPAD_SIX:102,NUMPAD_SEVEN:103,NUMPAD_EIGHT:104,NUMPAD_NINE:105,NUMPAD_ASTERISK:106,NUMPAD_PLUS:107,NUMPAD_DASH:109,NUMPAD_DOT:110,NUMPAD_SLASH:111,NUMPAD_EQUALS:187,TICK:192,LEFT_BRACKET:219,RIGHT_BRACKET:221,BACKSLASH:220,SEMICOLON:186,APOSTRAPHE:222,SPACEBAR:32,CLEAR:12,COMMA:188,DOT:190,SLASH:191}
},{}],90:[function(b,c,a){c.exports.Slider=b("./ac-slider/Slider")},{"./ac-slider/Slider":94}],91:[function(c,d,b){var g=c("ac-event-emitter").EventEmitter;
function h(o,k,j,m){var i=Math.abs(j-k);var n=Math.abs(o-k);var p=k+(Math.floor(i/m)*m);
var l=Math.min(p,k+Math.round(n/m)*m);return l}function a(i){i=i||{};this._setRangeOptions(i)
}var f=a.prototype=new g();f._rangeSliderDefaults={min:0,value:50,max:100,step:"any",disabled:false,toPrecision:3};
f.setValue=function(j,i){if(typeof j!==this._model.value){if(typeof j!=="number"||isNaN(j)){throw new TypeError("value must be a number, and cannot be NaN.")
}j=this._normalizeValue(j);if(this._model.value!==j){this._model.value=j;if(!i){this.trigger("change",this._model.value)
}this.trigger("_change",this._model.value)}}return this._model.value};f.setMin=function(j,i){if(this._model.min!==j){if(typeof j!=="number"||isNaN(j)){throw new TypeError("min value must be a number, and cannot be NaN.")
}this._model.min=j;this.setValue(this._model.value);if(!i){this.trigger("change",this._model.value)
}this.trigger("_change",this._model.value)}return this._model.min};f.setMax=function(j,i){if(this._model.max!==j){if(typeof j!=="number"||isNaN(j)){throw new TypeError("Max value must be a number value, and cannot be NaN.")
}this._model.max=j;this.setValue(this._model.value);if(!i){this.trigger("change",this._model.value)
}this.trigger("_change",this._model.value)}return this._model.max};f.setStep=function(j,i){if(this._model.step!==j){if(typeof j!=="number"&&j!=="auto"){throw new TypeError('step value must be a number, or the string "auto"')
}this._model.step=j;this.setValue(this._model.value);if(!i){this.trigger("change",this._model.value)
}this.trigger("_change",this._model.value)}return this._model.step};f.getValue=function(){return this._model.value
};f._normalizeValue=function(i){if(typeof i!=="number"){throw new TypeError("newValue must be a number")
}i=Math.max(this._model.min,Math.min(this._model.max,i));if(typeof this._model.step==="number"){i=h(i,this._model.min,this._model.max,this._model.step)
}if(typeof this._model.toPrecision==="number"){i=Math.round(i*Math.pow(10,this._model.toPrecision))/Math.pow(10,this._model.toPrecision)
}return i};f._setRangeOptions=function(i){this._model=this._model||{};var j;for(j in this._rangeSliderDefaults){if(this._rangeSliderDefaults.hasOwnProperty(j)){if(j!=="value"){this._model[j]=(typeof i[j]!=="undefined")?i[j]:this._rangeSliderDefaults[j]
}}}this.setValue((typeof i.value==="number")?i.value:this._rangeSliderDefaults.value)
};d.exports=a},{"ac-event-emitter":false}],92:[function(f,g,c){var h=f("ac-base").Element;
function b(k,j,l){if(j){this.__={};this.__.calc=(l===false)?l:true;this.__.selector=k||"*";
this.__.contextElement=j;this.$=(k)?h.select(k,j):j;if(!this.$){throw new TypeError('The selector "'+this.__.selector+'" for this context did not return any elements')
}if(this.__.calc){this.calculate()}}}var d=b.prototype;d.calculate=function(){this.width=this.$.offsetWidth;
this.height=this.$.offsetHeight};d.addChildNode=function(k,j){if(typeof this[k]!=="undefined"){throw (new TypeError('the name "'+k+'" is already in use, please chose a different nodeName.'))
}this[k]=new b(j,this.element)};function i(l,j,k){this._init(l,j,k)}var a=i.prototype=new b();
a._walkTree=function(j){var l;var k;for(k in j){l=j[k];this[k]=new b(l.selector,this.$,((l.calc===false)?l.calc:true));
if(l.children){a._walkTree.apply(this[k],[l.children])}}};a._init=function(l,j,k){b.apply(this,[undefined,l,k]);
this._walkTree(j)};g.exports=i},{"ac-base":false}],93:[function(d,f,b){var h=d("ac-event-emitter").EventEmitter;
var g=d("ac-base").Element;function a(){}a.prototype={isHoveringAny:false,isGrabbingAny:false};
function c(i,j){if(i){this.init(i,j)}}c.prototype=new h();c.prototype.evtOptsDict={$target:{type:"object"}};
c.prototype.addEventListeners=function(i,k,l,j){((typeof k==="string")?[k]:k).forEach(function(m){g.addEventListener(i,m,l,j)
})};c.prototype.eventPolyfill=function(k){if(k.target===undefined){k.target=k.srcElement||k.toElement
}if(k.pageX===undefined&&typeof(k.clientX)==="number"&&typeof(document.body.scrollLeft)==="number"){k.pageX=k.clientX+document.body.scrollLeft
}if(k.pageY===undefined&&typeof(k.clientY)==="number"&&typeof(document.body.scrollTop)==="number"){k.pageY=k.clientY+document.body.scrollTop
}var j=g.cumulativeOffset(k.target);var i=((k.offsetX===undefined||(j.left!==0&&k.offsetX===k.pageX))||(k.offsetY===undefined||(j.top!==0&&k.offsetY===k.pageY)));
if(i){k.offsetX=Math.round(k.pageX-j.left);k.offsetY=Math.round(k.pageY-j.top)}if(k.preventDefault===undefined){k.preventDefault=k.preventDefault||function(){k.returnValue=false
}}if(k.stopPropagation===undefined){k.stopPropagation=k.stopPropagation||function(){k.returnValue=false
}}return k};c.prototype.init=function(i,j){this._model=this._model||new a();this.$target=i;
this.dragOnGrab=(j===true)?j:false;this.setGrabEvent();this.setDragEvent();this.setReleaseEvent()
};c.prototype.setGrabEvent=function(){this.addEventListeners(this.$target,["mousedown","touchstart"],function(i){i=this.eventPolyfill(i);
i.preventDefault();i.stopPropagation();if(!this._model.isGrabbingThis){this._model.isGrabbingThis=true;
a.prototype.isGrabbingAny=true;this._model.grabEventPageCoords={x:i.pageX,y:i.pageY};
this._model.grabEventElementCoords={x:i.offsetX,y:i.offsetY};this._model.eventCoords=this._model.grabEventElementCoords;
this.trigger("grab",this._model.eventCoords);if(this.dragOnGrab){this.trigger("drag",this._model.eventCoords)
}}}.bind(this),false)};c.prototype.setDragEvent=function(){this.addEventListeners(document.body,["mousemove","touchmove"],function(k){k=this.eventPolyfill(k);
if(this._model.isGrabbingThis){k.preventDefault();var j=(Math.max(k.pageX,this._model.grabEventPageCoords.x)-Math.min(k.pageX,this._model.grabEventPageCoords.x))*((this._model.grabEventPageCoords.x<k.pageX)?1:-1);
var i=(Math.max(k.pageY,this._model.grabEventPageCoords.y)-Math.min(k.pageY,this._model.grabEventPageCoords.y))*((this._model.grabEventPageCoords.y<k.pageY)?1:-1);
this._model.eventCoords={x:this._model.grabEventElementCoords.x+j,y:this._model.grabEventElementCoords.y+i};
this.trigger("drag",this._model.eventCoords)}}.bind(this),true)};c.prototype.setReleaseEvent=function(){var i=function(j){if(this._model.isGrabbingThis){j.preventDefault();
j.stopPropagation();this._model.isGrabbingThis=false;a.prototype.isGrabbingAny=false;
this.trigger("release",this._model.eventCoords)}}.bind(this);this.addEventListeners(document.body,["mouseup","touchend"],function(j){j=this.eventPolyfill(j);
i(j)}.bind(this),false);this.addEventListeners(document.body,["mouseover"],function(k){k=this.eventPolyfill(k);
var j=((k.button===1)||(k.button===0&&k.buttons===0)||(k.which===0));if(j){i(k)
}}.bind(this),false)};f.exports=c},{"ac-base":false,"ac-event-emitter":false}],94:[function(c,b,f){var m=c("ac-deferred").Deferred;
var h=c("ac-base").Element;var i=c("ac-keyboard");var n=c("ac-keyboard").keys;var j=c("./RangeSlider");
var a=c("./TemplateHelper");var o=c("./RenderModel");var l=c("./SimpleDragger");
var p=new a();var k=function(q){var r=new m();var t;var s=function(){var u=document.getElementsByTagName(q);
if(u.length>0&&u[0]){clearTimeout(t);r.resolve(u[0])}else{t=setTimeout(s,10)}};
s();return r.promise()};function d(q,r){if(typeof q!=="undefined"&&typeof r!=="undefined"){this._init(q,r)
}}var g=d.prototype=j.prototype;g._sliderViewDefaults={userControlsEnabled:true,skin:"basic",label:"Range Slider Control",tabindex:0};
g._addToDom=function(r){var q=new m();p.injectMarkup({markup:"rangeSlider",target:r,data:this._model}).then(function(s){q.resolve(s)
}.bind(this));return q.promise()};g._setRenderModel=function(q){this._renderModel=new o(q,{grip:{selector:".ac-rangeslider-grip",calc:false,children:{foot:{selector:".ac-rangeslider-foot"},rail:{selector:".ac-rangeslider-rail"},head:{selector:".ac-rangeslider-head"},jewel:{selector:".ac-rangeslider-jewel"}}},surface:{selector:".ac-rangeslider-eventsurface"}})
};g._render=function(r,q){window.requestAnimationFrame(function(){var z=(this._model.orientation==="horizontal")?"width":"height";
var y=(this._model.orientation==="vertical")?"width":"height";var t=this._model.max-this._model.min;
var v=(t===0)?0:(this._model.value-this._model.min)/t;var s=function(B,D,C){var E={};
D=(D==="width")?z:((D==="height")?y:D);E[D]=C;h.setStyle(B,E)};if(r){s(this._renderModel.$,"height",this._model[y]+"px")
}var w=(this._renderModel.grip.foot[z]+this._renderModel.grip.head[z]);var u=Math.round(w+((this._renderModel[z]-w)*v));
var A=(u-w);var x=this._renderModel.grip.head[z];s(this._renderModel.grip.$,"width",u+"px");
if(!this._hasCalc){s(this._renderModel.grip.rail.$,"width",A+"px");s(this._renderModel.grip.rail.$,((this._model.orientation==="horizontal")?"left":"top"),x+"px")
}this._renderModelToAria(q)}.bind(this))};g._renderModelToAria=function(r){var s=(typeof this._model.min==="number"&&!isNaN(this._model.min))?this._model.min:0;
var q=(typeof this._model.max==="number"&&!isNaN(this._model.max))?this._model.max:0;
var t=(typeof this._model.value==="number"&&!isNaN(this._model.value))?this._model.value:0;
this._renderModel.surface.$.setAttribute("min",s);this._renderModel.surface.$.setAttribute("max",q);
if(typeof this._model.step==="number"){this._renderModel.surface.$.setAttribute("step",this._model.step)
}else{this._renderModel.surface.$.removeAttribute("step")}this._renderModel.surface.$.setAttribute("value",t);
if(r){this._renderModel.surface.$.setAttribute("aria-valuemin",s);this._renderModel.surface.$.setAttribute("aria-valuemax",q);
this._renderModel.surface.$.setAttribute("aria-valuenow",t);if(typeof this._renderAriaValueText==="function"){this._renderModel.surface.$.setAttribute("aria-valuetext",this._renderAriaValueText())
}}};g._setSliderOptions=function(q,r){var u=(typeof q==="undefined"||typeof q.nodeName!=="string"||q.nodeType!==1);
if(u){throw new TypeError("targetEle undefined or not a dom element: you must provide an element in which to place your slider SliderControl")
}if(typeof r.renderAriaValueText==="function"){this._renderAriaValueText=r.renderAriaValueText.bind(this)
}else{this._renderAriaValueText=null}this._hasCalc=this._hasCssCalc();var t;var s;
for(t in this._sliderViewDefaults){if(this._sliderViewDefaults.hasOwnProperty(t)){s=(typeof j.prototype._rangeSliderDefaults[t]!=="undefined");
if(!s){this._model[t]=(typeof r[t]!=="undefined")?r[t]:this._sliderViewDefaults[t]
}}}this._model.width=r.width||q.offsetWidth;this._model.height=r.height||q.offsetHeight;
this._model.orientation=r.orientation||((this._model.width>this._model.height)?"horizontal":"vertical");
if(typeof this._model.width!=="number"){throw (new TypeError("width must be a number"))
}if(typeof this._model.height!=="number"){throw (new TypeError("height must be a number"))
}if(this._model.orientation!=="horizontal"&&this._model.orientation!=="vertical"){throw (new TypeError('orientation must be a string, with the value of "horizontal" or "vertical"'))
}};g._hasCssCalc=function(){var s;var q=document.body.appendChild(document.createElement("div"));
var r=q.appendChild(document.createElement("div"));q.className="ac-rangeslider-hascalc-test";
r.className="ac-rangeslider-hascalc-test-child";s=(r.offsetWidth===3&&r.offsetHeight===3);
q=document.body.removeChild(q);return s};g._setDragEvents=function(){this._simpleDragger=new l(this._renderModel.surface.$,true);
var q=(this._model.orientation==="horizontal")?"width":"height";var r=function(v){if(this._model.userControlsEnabled){var t=this._renderModel.surface[q]-(this._renderModel.grip.foot[q]+this._renderModel.grip.head[q]);
var w=(this._model.orientation==="horizontal")?v.x:v.y;if(this._model.orientation==="vertical"){w=this._renderModel.surface[q]-w
}var s=Math.min((w-(this._renderModel.grip.foot[q]+(this._renderModel.grip.head[q]/2))),t);
var u=Math.min(1,Math.max(0,(s/t)));this.setValue((Math.abs(this._model.max-this._model.min)*u)+this._model.min,false);
this._render(false,true)}}.bind(this);this._simpleDragger.on("grab",function(){if(this._model.userControlsEnabled){this.trigger("grab");
h.addClassName(this._renderModel.$,"ac-rangeslider-grabbing")}}.bind(this));this._simpleDragger.on("drag",r);
this._simpleDragger.on("release",function(){if(this._model.userControlsEnabled){h.removeClassName(this._renderModel.$,"ac-rangeslider-grabbing");
this.trigger("release")}}.bind(this))};g._setKeyboardControls=function(){this._sliderHasFocus=false;
function q(){if(this._sliderHasFocus){var t=Math.abs(this._model.max-this._model.min);
var s=(typeof this._model.step==="number")?this._model.step:(t/20);this.setValue(this.getValue()+s);
this._renderModelToAria(true)}}function r(){if(this._sliderHasFocus){var t=Math.abs(this._model.max-this._model.min);
var s=(typeof this._model.step==="number")?this._model.step:(t/20);this.setValue(this.getValue()-s);
this._renderModelToAria(true)}}i.addKeyDown(n.ARROW_UP,q.bind(this));i.addKeyDown(n.ARROW_RIGHT,q.bind(this));
i.addKeyDown(n.ARROW_DOWN,r.bind(this));i.addKeyDown(n.ARROW_LEFT,r.bind(this));
h.addEventListener(this._renderModel.surface.$,"focus",function(){this._sliderHasFocus=true;
this._renderModelToAria(true)}.bind(this));h.addEventListener(this._renderModel.surface.$,"blur",function(){this._sliderHasFocus=false
}.bind(this));h.addEventListener(this._renderModel.surface.$,"change",function(t){var s=parseFloat(this._renderModel.surface.$.value);
if(this._model.value!==s&&!isNaN(s)){this.setValue(s);this._renderModelToAria(true)
}}.bind(this))};g._init=function(q,r){r=r||{};k("body").then(function(){this._setRangeOptions(r);
this._setSliderOptions(q,r);this.setValue(this._model.value);this._addToDom(q).then(function(s){this._setRenderModel(s);
this._setDragEvents();this._setKeyboardControls();this._render(true);this._renderModelToAria();
this.on("_change",function(){this._renderModel.calculate();this._render()}.bind(this),this)
}.bind(this))}.bind(this))};g.disableUserControls=function(){this._model.userControlsEnabled=false
};g.enableUserControls=function(){this._model.userControlsEnabled=true};b.exports=d
},{"./RangeSlider":91,"./RenderModel":92,"./SimpleDragger":93,"./TemplateHelper":95,"ac-base":false,"ac-keyboard":86}],95:[function(c,b,f){var d=c("../../lib/dust-runtime");
var l=c("../../../build/templates/commonjs/templates");var h=c("ac-base").Element;
var i=c("ac-deferred").Deferred;function k(o){var p=false;var n=new l();for(var m in n.cache){if(m===o){p=true;
break}}return p}function j(m){if(typeof m.nextElementSibling==="object"){return m.nextElementSibling
}else{do{m=m.nextSibling}while(m&&m.nodeType!==1);return m}}function a(){}var g=a.prototype;
g.putElementInDom=function(s,q,r,p){p=(typeof p==="boolean")?p:true;var m;var o;
var n;switch(r){case"before":s=q.parentNode.insertBefore(s,q);break;case"fill":m=this._getElementContext(s);
q.innerHTML="";for(n=0;n<s.childNodes.length;n++){if(s.childNodes[n].nodeType===1){q.appendChild(s.childNodes[n].cloneNode(true))
}}this._applyContextToElement(m,q);break;case"replace":m=this._getElementContext(q);
s=q.parentNode.insertBefore(s,q);q.parentNode.removeChild(q);q=s;if(p){this._applyContextToElement(m,q)
}break;case"insert":q=q.appendChild(s);break;case"after":o=j(q);if(o){s=o.parentNode.insertBefore(s,o)
}else{q=q.parentNode.appendChild(s)}break;default:throw (new TypeError(r+"is not a valid renderMode for node insertion. Valid renderMode values are before, fill, replace, insert or after."))
}return q};g.injectMarkup=function(n){var m=new i();n=this._getInjectionOptions(n);
if(n.markupType==="template"){this.getRenderedMarkup(n.markup,n.data).then(function(o){m.resolve(this.putElementInDom(this.getElementFromMarkup(o),n.target,n.renderMode,n.preserveContext))
}.bind(this))}else{m.resolve(this.putElementInDom(this.getElementFromMarkup(n.markup),n.target,n.renderMode,n.preserveContext))
}return m.promise()};g.getRenderedMarkup=function(o,p){var m=new i();function q(s,r){if(r&&!s){m.resolve(r)
}else{try{console.warn("dust out %s & error %O",r,s)}catch(t){throw new Error("dust out "+r+" & error "+s+"")
}}}if(!k(o)){throw new TypeError('The template "'+o+'" does not exist.')}var n=new l();
n.render(o,p,q);return m.promise()};g.getElementFromMarkup=function(n){var p;var o=0;
var q=null;var m=document.createElement("div");m.innerHTML=n;for(p=0;p<m.childNodes.length;
p++){if(m.childNodes[p].nodeType===1){o++;if(o<2){q=m.childNodes[p]}}}if(o!==1){if(o===0){throw new TypeError("The markup did not describe any element nodes to convert to elements.")
}else{throw new TypeError("The markup must not have more than a single outermost element wrapper (no siblings permitted).")
}}return q};g._getInjectionOptions=function(m){m=m||{};m.renderMode=m.renderMode||"fill";
m.data=m.data||{};m.preserveContext=(typeof m.preserveContext==="boolean")?m.preserveContext:true;
if(typeof m.target==="undefined"||m.target.nodeType!==1){throw new TypeError("You must indicate an element to target for as the template insertion point.")
}if(typeof m.data!=="object"){throw new TypeError("The template data must be an Object.")
}if(typeof m.markup!=="string"){throw new TypeError("markup must be a string")}if(typeof m.markupType==="undefined"){m.markupType=(/^\s*<[\s\S]*>\s*$/.test(m.markup))?"markup":"template"
}else{if(typeof m.markupType!=="string"){throw new TypeError("markupType must be a string")
}else{if(!/^(markup|template)$/.test(m.markupType)){throw new TypeError('markupType must be "markup" or "template"')
}}}return m};g._getElementContext=function(s){var p={};var r;p.id=(s.id)?s.id:null;
p.classes=(s.className&&s.className.length>0&&/\w/.test(s.className))?s.className.split(/\s+/):[];
p.attributes={};for(r=0;r<s.attributes.length;r++){var n=s.attributes[r];var o=n.name;
if(typeof o==="string"){var m=(/^accesskey$/.test(o)||/^contenteditable$/.test(o)||/^contextmenu$/.test(o)||/^dir$/.test(o)||/^draggable$/.test(o)||/^dropzone$/.test(o)||/^hidden$/.test(o)||/^itemid$/.test(o)||/^itemprop$/.test(o)||/^itemref$/.test(o)||/^itemscope$/.test(o)||/^itemtype$/.test(o)||/^lang$/.test(o)||/^spellcheck$/.test(o)||/^data\-\w/i.test(o)||/^src$/.test(o)||/^width$/i.test(o)||/^height$/i.test(o)||/^tabindex$/i.test(o)||/^href$/i.test(o)||/^target$/i.test(o)||/^alt$/i.test(o)||/^title$/i.test(o)||/^name$/i.test(o)||/^for$/i.test(o)||/^autofocus$/i.test(o)||/^disabled$/i.test(o)||/^toolbar$/i.test(o)||/^context$/i.test(o)||/^type$/i.test(o)||/^label$/i.test(o));
if(m){var q=s.getAttribute(o);if(typeof q==="string"){p.attributes[o]=q}}}}return p
};g._applyContextToElement=function(o,m){var n;if(o.id){m.id=o.id}o.classes.forEach(function(p){h.addClassName(m,p)
}.bind(this));for(n in o.attributes){if(o.attributes.hasOwnProperty(n)){m.setAttribute(n,o.attributes[n])
}}return m};b.exports=a},{"../../../build/templates/commonjs/templates":85,"../../lib/dust-runtime":96,"ac-base":false}],96:[function(require,module,exports){
/*! Dust - Asynchronous Templating - v2.3.3
* http://linkedin.github.io/dustjs/
* Copyright (c) 2014 Aleksander Williams; Released under the MIT License */
(function(root){var dust={},NONE="NONE",ERROR="ERROR",WARN="WARN",INFO="INFO",DEBUG="DEBUG",loggingLevels=[DEBUG,INFO,WARN,ERROR,NONE],EMPTY_FUNC=function(){},logger=EMPTY_FUNC,loggerContext=this;
dust.debugLevel=NONE;dust.silenceErrors=false;if(root&&root.console&&root.console.log){logger=root.console.log;
loggerContext=root.console}dust.log=function(message,type){if(dust.isDebug&&dust.debugLevel===NONE){logger.call(loggerContext,'[!!!DEPRECATION WARNING!!!]: dust.isDebug is deprecated.  Set dust.debugLevel instead to the level of logging you want ["debug","info","warn","error","none"]');
dust.debugLevel=INFO}type=type||INFO;if(loggingLevels.indexOf(type)>=loggingLevels.indexOf(dust.debugLevel)){if(!dust.logQueue){dust.logQueue=[]
}dust.logQueue.push({message:message,type:type});logger.call(loggerContext,"[DUST "+type+"]: "+message)
}if(!dust.silenceErrors&&type===ERROR){if(typeof message==="string"){throw new Error(message)
}else{throw message}}};dust.onError=function(error,chunk){logger.call(loggerContext,"[!!!DEPRECATION WARNING!!!]: dust.onError will no longer return a chunk object.");
dust.log(error.message||error,ERROR);if(!dust.silenceErrors){throw error}else{return chunk
}};dust.helpers={};dust.cache={};dust.register=function(name,tmpl){if(!name){return
}dust.cache[name]=tmpl};dust.render=function(name,context,callback){var chunk=new Stub(callback).head;
try{dust.load(name,chunk,Context.wrap(context,name)).end()}catch(err){dust.log(err,ERROR)
}};dust.stream=function(name,context){var stream=new Stream();dust.nextTick(function(){try{dust.load(name,stream.head,Context.wrap(context,name)).end()
}catch(err){dust.log(err,ERROR)}});return stream};dust.renderSource=function(source,context,callback){return dust.compileFn(source)(context,callback)
};dust.compileFn=function(source,name){name=name||null;var tmpl=dust.loadSource(dust.compile(source,name));
return function(context,callback){var master=callback?new Stub(callback):new Stream();
dust.nextTick(function(){if(typeof tmpl==="function"){tmpl(master.head,Context.wrap(context,name)).end()
}else{dust.log(new Error("Template ["+name+"] cannot be resolved to a Dust function"),ERROR)
}});return master}};dust.load=function(name,chunk,context){var tmpl=dust.cache[name];
if(tmpl){return tmpl(chunk,context)}else{if(dust.onLoad){return chunk.map(function(chunk){dust.onLoad(name,function(err,src){if(err){return chunk.setError(err)
}if(!dust.cache[name]){dust.loadSource(dust.compile(src,name))}dust.cache[name](chunk,context).end()
})})}return chunk.setError(new Error("Template Not Found: "+name))}};dust.loadSource=function(source,path){return eval(source)
};if(Array.isArray){dust.isArray=Array.isArray}else{dust.isArray=function(arr){return Object.prototype.toString.call(arr)==="[object Array]"
}}dust.nextTick=(function(){return function(callback){setTimeout(callback,0)}})();
dust.isEmpty=function(value){if(dust.isArray(value)&&!value.length){return true
}if(value===0){return false}return(!value)};dust.filter=function(string,auto,filters){if(filters){for(var i=0,len=filters.length;
i<len;i++){var name=filters[i];if(name==="s"){auto=null;dust.log("Using unescape filter on ["+string+"]",DEBUG)
}else{if(typeof dust.filters[name]==="function"){string=dust.filters[name](string)
}else{dust.log("Invalid filter ["+name+"]",WARN)}}}}if(auto){string=dust.filters[auto](string)
}return string};dust.filters={h:function(value){return dust.escapeHtml(value)},j:function(value){return dust.escapeJs(value)
},u:encodeURI,uc:encodeURIComponent,js:function(value){if(!JSON){dust.log("JSON is undefined.  JSON stringify has not been used on ["+value+"]",WARN);
return value}else{return JSON.stringify(value)}},jp:function(value){if(!JSON){dust.log("JSON is undefined.  JSON parse has not been used on ["+value+"]",WARN);
return value}else{return JSON.parse(value)}}};function Context(stack,global,blocks,templateName){this.stack=stack;
this.global=global;this.blocks=blocks;this.templateName=templateName}dust.makeBase=function(global){return new Context(new Stack(),global)
};Context.wrap=function(context,name){if(context instanceof Context){return context
}return new Context(new Stack(context),{},null,name)};Context.prototype.get=function(path,cur){if(typeof path==="string"){if(path[0]==="."){cur=true;
path=path.substr(1)}path=path.split(".")}return this._get(cur,path)};Context.prototype._get=function(cur,down){var ctx=this.stack,i=1,value,first,len,ctxThis;
dust.log("Searching for reference [{"+down.join(".")+"}] in template ["+this.getTemplateName()+"]",DEBUG);
first=down[0];len=down.length;if(cur&&len===0){ctxThis=ctx;ctx=ctx.head}else{if(!cur){while(ctx){if(ctx.isObject){ctxThis=ctx.head;
value=ctx.head[first];if(value!==undefined){break}}ctx=ctx.tail}if(value!==undefined){ctx=value
}else{ctx=this.global?this.global[first]:undefined}}else{ctx=ctx.head[first]}while(ctx&&i<len){ctxThis=ctx;
ctx=ctx[down[i]];i++}}if(typeof ctx==="function"){var fn=function(){try{return ctx.apply(ctxThis,arguments)
}catch(err){return dust.log(err,ERROR)}};fn.isFunction=true;return fn}else{if(ctx===undefined){dust.log("Cannot find the value for reference [{"+down.join(".")+"}] in template ["+this.getTemplateName()+"]")
}return ctx}};Context.prototype.getPath=function(cur,down){return this._get(cur,down)
};Context.prototype.push=function(head,idx,len){return new Context(new Stack(head,this.stack,idx,len),this.global,this.blocks,this.getTemplateName())
};Context.prototype.rebase=function(head){return new Context(new Stack(head),this.global,this.blocks,this.getTemplateName())
};Context.prototype.current=function(){return this.stack.head};Context.prototype.getBlock=function(key,chk,ctx){if(typeof key==="function"){var tempChk=new Chunk();
key=key(tempChk,this).data.join("")}var blocks=this.blocks;if(!blocks){dust.log("No blocks for context[{"+key+"}] in template ["+this.getTemplateName()+"]",DEBUG);
return}var len=blocks.length,fn;while(len--){fn=blocks[len][key];if(fn){return fn
}}};Context.prototype.shiftBlocks=function(locals){var blocks=this.blocks,newBlocks;
if(locals){if(!blocks){newBlocks=[locals]}else{newBlocks=blocks.concat([locals])
}return new Context(this.stack,this.global,newBlocks,this.getTemplateName())}return this
};Context.prototype.getTemplateName=function(){return this.templateName};function Stack(head,tail,idx,len){this.tail=tail;
this.isObject=head&&typeof head==="object";this.head=head;this.index=idx;this.of=len
}function Stub(callback){this.head=new Chunk(this);this.callback=callback;this.out=""
}Stub.prototype.flush=function(){var chunk=this.head;while(chunk){if(chunk.flushable){this.out+=chunk.data.join("")
}else{if(chunk.error){this.callback(chunk.error);dust.log("Chunk error ["+chunk.error+"] thrown. Ceasing to render this template.",WARN);
this.flush=EMPTY_FUNC;return}else{return}}chunk=chunk.next;this.head=chunk}this.callback(null,this.out)
};function Stream(){this.head=new Chunk(this)}Stream.prototype.flush=function(){var chunk=this.head;
while(chunk){if(chunk.flushable){this.emit("data",chunk.data.join(""))}else{if(chunk.error){this.emit("error",chunk.error);
dust.log("Chunk error ["+chunk.error+"] thrown. Ceasing to render this template.",WARN);
this.flush=EMPTY_FUNC;return}else{return}}chunk=chunk.next;this.head=chunk}this.emit("end")
};Stream.prototype.emit=function(type,data){if(!this.events){dust.log("No events to emit",INFO);
return false}var handler=this.events[type];if(!handler){dust.log("Event type ["+type+"] does not exist",WARN);
return false}if(typeof handler==="function"){handler(data)}else{if(dust.isArray(handler)){var listeners=handler.slice(0);
for(var i=0,l=listeners.length;i<l;i++){listeners[i](data)}}else{dust.log("Event Handler ["+handler+"] is not of a type that is handled by emit",WARN)
}}};Stream.prototype.on=function(type,callback){if(!this.events){this.events={}
}if(!this.events[type]){dust.log("Event type ["+type+"] does not exist. Using just the specified callback.",WARN);
if(callback){this.events[type]=callback}else{dust.log("Callback for type ["+type+"] does not exist. Listener not registered.",WARN)
}}else{if(typeof this.events[type]==="function"){this.events[type]=[this.events[type],callback]
}else{this.events[type].push(callback)}}return this};Stream.prototype.pipe=function(stream){this.on("data",function(data){try{stream.write(data,"utf8")
}catch(err){dust.log(err,ERROR)}}).on("end",function(){try{return stream.end()}catch(err){dust.log(err,ERROR)
}}).on("error",function(err){stream.error(err)});return this};function Chunk(root,next,taps){this.root=root;
this.next=next;this.data=[];this.flushable=false;this.taps=taps}Chunk.prototype.write=function(data){var taps=this.taps;
if(taps){data=taps.go(data)}this.data.push(data);return this};Chunk.prototype.end=function(data){if(data){this.write(data)
}this.flushable=true;this.root.flush();return this};Chunk.prototype.map=function(callback){var cursor=new Chunk(this.root,this.next,this.taps),branch=new Chunk(this.root,cursor,this.taps);
this.next=branch;this.flushable=true;callback(branch);return cursor};Chunk.prototype.tap=function(tap){var taps=this.taps;
if(taps){this.taps=taps.push(tap)}else{this.taps=new Tap(tap)}return this};Chunk.prototype.untap=function(){this.taps=this.taps.tail;
return this};Chunk.prototype.render=function(body,context){return body(this,context)
};Chunk.prototype.reference=function(elem,context,auto,filters){if(typeof elem==="function"){elem.isFunction=true;
elem=elem.apply(context.current(),[this,context,null,{auto:auto,filters:filters}]);
if(elem instanceof Chunk){return elem}}if(!dust.isEmpty(elem)){return this.write(dust.filter(elem,auto,filters))
}else{return this}};Chunk.prototype.section=function(elem,context,bodies,params){if(typeof elem==="function"){elem=elem.apply(context.current(),[this,context,bodies,params]);
if(elem instanceof Chunk){return elem}}var body=bodies.block,skip=bodies["else"];
if(params){context=context.push(params)}if(dust.isArray(elem)){if(body){var len=elem.length,chunk=this;
if(len>0){if(context.stack.head){context.stack.head["$len"]=len}for(var i=0;i<len;
i++){if(context.stack.head){context.stack.head["$idx"]=i}chunk=body(chunk,context.push(elem[i],i,len))
}if(context.stack.head){context.stack.head["$idx"]=undefined;context.stack.head["$len"]=undefined
}return chunk}else{if(skip){return skip(this,context)}}}}else{if(elem===true){if(body){return body(this,context)
}}else{if(elem||elem===0){if(body){return body(this,context.push(elem))}}else{if(skip){return skip(this,context)
}}}}dust.log("Not rendering section (#) block in template ["+context.getTemplateName()+"], because above key was not found",DEBUG);
return this};Chunk.prototype.exists=function(elem,context,bodies){var body=bodies.block,skip=bodies["else"];
if(!dust.isEmpty(elem)){if(body){return body(this,context)}}else{if(skip){return skip(this,context)
}}dust.log("Not rendering exists (?) block in template ["+context.getTemplateName()+"], because above key was not found",DEBUG);
return this};Chunk.prototype.notexists=function(elem,context,bodies){var body=bodies.block,skip=bodies["else"];
if(dust.isEmpty(elem)){if(body){return body(this,context)}}else{if(skip){return skip(this,context)
}}dust.log("Not rendering not exists (^) block check in template ["+context.getTemplateName()+"], because above key was found",DEBUG);
return this};Chunk.prototype.block=function(elem,context,bodies){var body=bodies.block;
if(elem){body=elem}if(body){return body(this,context)}return this};Chunk.prototype.partial=function(elem,context,params){var partialContext;
partialContext=dust.makeBase(context.global);partialContext.blocks=context.blocks;
if(context.stack&&context.stack.tail){partialContext.stack=context.stack.tail}if(params){partialContext=partialContext.push(params)
}if(typeof elem==="string"){partialContext.templateName=elem}partialContext=partialContext.push(context.stack.head);
var partialChunk;if(typeof elem==="function"){partialChunk=this.capture(elem,partialContext,function(name,chunk){partialContext.templateName=partialContext.templateName||name;
dust.load(name,chunk,partialContext).end()})}else{partialChunk=dust.load(elem,this,partialContext)
}return partialChunk};Chunk.prototype.helper=function(name,context,bodies,params){var chunk=this;
try{if(dust.helpers[name]){return dust.helpers[name](chunk,context,bodies,params)
}else{dust.log("Invalid helper ["+name+"]",WARN);return chunk}}catch(err){dust.log(err,ERROR);
return chunk}};Chunk.prototype.capture=function(body,context,callback){return this.map(function(chunk){var stub=new Stub(function(err,out){if(err){chunk.setError(err)
}else{callback(out,chunk)}});body(stub.head,context).end()})};Chunk.prototype.setError=function(err){this.error=err;
this.root.flush();return this};function Tap(head,tail){this.head=head;this.tail=tail
}Tap.prototype.push=function(tap){return new Tap(tap,this)};Tap.prototype.go=function(value){var tap=this;
while(tap){value=tap.head(value);tap=tap.tail}return value};var HCHARS=new RegExp(/[&<>\"\']/),AMP=/&/g,LT=/</g,GT=/>/g,QUOT=/\"/g,SQUOT=/\'/g;
dust.escapeHtml=function(s){if(typeof s==="string"){if(!HCHARS.test(s)){return s
}return s.replace(AMP,"&amp;").replace(LT,"&lt;").replace(GT,"&gt;").replace(QUOT,"&quot;").replace(SQUOT,"&#39;")
}return s};var BS=/\\/g,FS=/\//g,CR=/\r/g,LS=/\u2028/g,PS=/\u2029/g,NL=/\n/g,LF=/\f/g,SQ=/'/g,DQ=/"/g,TB=/\t/g;
dust.escapeJs=function(s){if(typeof s==="string"){return s.replace(BS,"\\\\").replace(FS,"\\/").replace(DQ,'\\"').replace(SQ,"\\'").replace(CR,"\\r").replace(LS,"\\u2028").replace(PS,"\\u2029").replace(NL,"\\n").replace(LF,"\\f").replace(TB,"\\t")
}return s};if(typeof exports==="object"){module.exports=dust}else{root.dust=dust
}})(this)},{}],97:[function(b,f,a){var d=b("./ac-ajax/Ajax");var c=b("./ac-ajax/Request");
f.exports=new d();f.exports.Ajax=d;f.exports.Request=c},{"./ac-ajax/Ajax":98,"./ac-ajax/Request":99}],98:[function(b,f,a){var d=b("./Request");
var c=function(){};c._Request=d;c.prototype={_defaults:{timeout:5000},_extend:function(){for(var h=1;
h<arguments.length;h++){for(var g in arguments[h]){if(arguments[h].hasOwnProperty(g)){arguments[0][g]=arguments[h][g]
}}}return arguments[0]},_getOptions:function(g,h){return this._extend({},this._defaults,h,g)
},create:function(g){return new d(g)},get:function(g){g=this._getOptions({method:"get"},g);
return this.create(g).send()},getJSON:function(g){return this.get(g).then(function(h){return JSON.parse(h.responseText)
})},head:function(g){g=this._getOptions({method:"head"},g);return this.create(g).send()
},post:function(g){g=this._getOptions({method:"post"},g);return this.create(g).send()
}};f.exports=c},{"./Request":99}],99:[function(b,d,a){var c=function(f){this._initialize(f)
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
this._sendXHR();return this.promise},xhr:null};d.exports=c},{}],100:[function(b,c,a){c.exports=b(74)
},{}],101:[function(b,c,a){c.exports={isString:b("./ac-string/isString"),toCamelCase:b("./ac-string/toCamelCase"),queryStringToObject:b("./ac-string/queryStringToObject"),toQueryPair:b("./ac-string/toQueryPair"),queryParameters:b("./ac-string/queryParameters"),supplant:b("./ac-string/supplant")}
},{"./ac-string/isString":102,"./ac-string/queryParameters":103,"./ac-string/queryStringToObject":104,"./ac-string/supplant":105,"./ac-string/toCamelCase":106,"./ac-string/toQueryPair":107}],102:[function(c,d,b){d.exports=function a(f){return(typeof f==="string")
}},{}],103:[function(d,f,c){var a=d("./queryStringToObject");f.exports=function b(){var g={};
var h=window.location.toString().split("?")[1];if(typeof h==="string"){g=a(h)}return g
}},{"./queryStringToObject":104}],104:[function(d,f,c){var a=d("qs");f.exports=function b(g){if(typeof g!=="string"){throw new TypeError("QueryStringToObject error: argument must be a string")
}return a.parse(g)}},{qs:100}],105:[function(b,c,a){c.exports=function d(h,g,f){if(!g){return h
}f=f||/{([^{}]*)}/g;return h.replace(f,function(j,i){var k=g[i];return typeof k==="string"||typeof k==="number"?k:j
})}},{}],106:[function(b,c,a){c.exports=function d(f){if(typeof f!=="string"){throw new TypeError("Argument must be of type String.")
}return f.replace(/-+(.)?/g,function(g,h){return h?h.toUpperCase():""})}},{}],107:[function(b,c,a){c.exports=function d(f,g){if(typeof f!=="string"||typeof g!=="string"){throw new TypeError("toQueryPair error: argument must be a string")
}return encodeURIComponent(f)+"="+encodeURIComponent(g)}},{}],108:[function(c,d,b){var a=c("./ac-vatman/vat-client");
var f=c("./ac-vatman/vat-resource");var g={vatClient:a,vatResource:f};d.exports=g
},{"./ac-vatman/vat-client":109,"./ac-vatman/vat-resource":110}],109:[function(d,c,g){var j=d("ac-ajax");
var h=d("ac-string");var k=/(-[a-z]{2}-([a-z]{2}-){0,})[0-9]{8}_r[0-9].+\.mov$/;
var b=/_r[0-9].+\.mov$/;var i=/((-([a-z]{2}))*)-[0-9]+/;var m=/((-([a-z]{2}))*)-/;
var a="m";var f="_{width}x{height}{suffix}."+a+"p4";var l=[{width:416,height:234,type:"baseline-high",suffix:"h"},{width:416,height:234,type:"small",suffix:"h"},{width:416,height:234,type:"baseline-low",suffix:"l"},{width:416,height:234,type:"baseline-medium",suffix:"m"},{width:640,height:360,type:"medium",suffix:"h"},{width:848,height:480,type:"large",suffix:""}];
var n={create:function(){var o=function(){};o.prototype=this;return new o()},getSource:function(o,q,p){var s=l;
if(!o){throw"Must provide a vatRefMovie"}if(!q){throw"Must provide a width"}if(p){s=s.filter(function(t){return t.type===p
})}var r=s.reduce(function(t,u){return Math.abs(u.width-q)<Math.abs(t.width-q)?u:t
});return o.replace(b,h.supplant(f,r))},getConfigPath:function(o){return o.replace(k,"-current.json")
},getConfig:function(o){return j.getJSON({url:this.getConfigPath(o)})},getVTTSource:function(o){return o.replace(b,"_cc.vtt")
}};c.exports=n},{"ac-ajax":97,"ac-string":101}],110:[function(c,d,b){var a=c("./vat-client");
var f={create:function(h){if(!h){throw"Must provide a vatRefMovie."}var i=function(){};
i.prototype=this;var g=new i();g.vatRefMovie=h;return g},getSource:function(h,g){return a.getSource(this.vatRefMovie,h,g)
},getConfig:function(){return a.getConfig(this.vatRefMovie)},getVTTSource:function(){return a.getVTTSource(this.vatRefMovie)
}};d.exports=f},{"./vat-client":109}],111:[function(b,c,a){c.exports=b(96)},{}],112:[function(b,c,a){c.exports=(function(){var d=b("./dust-runtime");
(function(){d.register("controlBarDefault",h);function h(j,i){return j.write('<div aria-label="Video playback" class="').reference(i._get(false,["values","controlbarskinning"]),i,"h").write(' acv-controller-disabled" role="toolbar"><div class="ac-video-controlbar-elements"><button aria-label="').reference(i._get(false,["values","localizedText","mutevolume"]),i,"h").write('" data-ac-video-element="minVolumeButton" class="acv-button acv-minvolume" tabindex="0"></button><div data-ac-video-element="volumeSlider" class="acv-button acv-volumeslider ac-media-volume-slider"><div class="acv-volumeslider-inputrange"></div></div><button aria-label="').reference(i._get(false,["values","localizedText","fullvolume"]),i,"h").write('" data-ac-video-element="maxVolumeButton" class="acv-button acv-maxvolume" tabindex="0"></button><button aria-label="').reference(i._get(false,["values","localizedText","play"]),i,"h").write('" data-ac-video-element="playPauseButton" class="acv-button acv-playpause" tabindex="0" role="button"></button>').notexists(i._get(false,["values","disablecaptionscontrol"]),i,{block:g},null).exists(i._get(false,["values","usesFullScreen"]),i,{block:f},null).write('<div data-ac-video-element="progressSlider" class="acv-button acv-progressslider"><span aria-label="').reference(i._get(false,["values","localizedText","elapsed"]),i,"h").write('" class="acv-text acv-text-first acv-currenttime" data-ac-video-element="currentTimeText" role="timer" tabindex="0"></span><div class="acv-progressslider-inputrange"></div><span aria-label="').reference(i._get(false,["values","localizedText","remaining"]),i,"h").write('" class="acv-text acv-text-last acv-remainingtime" data-ac-video-element="remainingTimeText" role="timer" tabindex="0"></span></div>').reference(i._get(false,["values","controlsTemplateString"]),i,"h",["s"]).write("</div></div>")
}function g(j,i){return j.write('<button aria-label="').reference(i._get(false,["values","localizedText","captionscontrol"]),i,"h").write('" data-ac-video-element="captionsButton" class="acv-button acv-captions" tabindex="0"></button>')
}function f(j,i){return j.write('<button aria-label="Enable Full Screen" data-ac-video-element="fullScreenButton" class="acv-button acv-fullscreen" tabindex="0"></button>')
}return h})();(function(){d.register("controlBarStream",f);function f(h,g){return h.write('<div aria-label="Video playback" class="').reference(g._get(false,["values","controlbarskinning"]),g,"h").write('" aria-role="toolbar"><div class="ac-video-controlbar-elements"><button aria-label="Min Volume" data-ac-video-element="minVolumeButton" class="acv-button acv-minvolume" tabindex="0"></button><div data-ac-video-element="volumeSlider" class="acv-button acv-volumeslider ac-media-volume-slider"><div class="acv-volumeslider-inputrange"></div></div><button aria-label="Max Volume" data-ac-video-element="maxVolumeButton" class="acv-button acv-maxvolume" tabindex="0"></button><button aria-label="Play" data-ac-video-element="playPauseButton" class="acv-button acv-playpause" tabindex="0" role="button"></button><button aria-label="Enable Captions" data-ac-video-element="captionsButton" class="acv-button acv-captions" tabindex="0"></button><button aria-label="Enable Full Screen" data-ac-video-element="fullScreenButton" class="acv-button acv-fullscreen" tabindex="0"></button><div class="acv-button acv-progressslider"><span aria-label="Elapsed" class="acv-text acv-text-first acv-currenttime" data-ac-video-element="currentTimeText" aria-role="timer" tabindex="0"></span></div>').reference(g._get(false,["values","controlsTemplateString"]),g,"h",["s"]).write("</div></div>")
}return f})();(function(){d.register("controlBarString",f);function f(h,g){return h.write('<div class="ac-video-controlbar" style="width:').reference(g._get(false,["values","width"]),g,"h").write('px;">').reference(g._get(false,["values","controlsTemplateString"]),g,"h",["s"]).write("</div>")
}return f})();(function(){d.register("elementEmbed",i);function i(k,j){return k.write('<embed src="').reference(j._get(false,["source"]),j,"h").write('" ').notexists(j._get(false,["responsive"]),j,{block:h},null).write(" ").notexists(j._get(false,["responsive"]),j,{block:g},null).write(' class="ac-video-media" id="').reference(j._get(false,["values","id"]),j,"h").write('" wmode="transparent" name="').reference(j._get(false,["values","id"]),j,"h").write('" type="').reference(j._get(false,["type"]),j,"h").write('" width="').reference(j._get(false,["values","width"]),j,"h").write('" height="').reference(j._get(false,["values","height"]),j,"h").write('" scale="tofit" enablejavascript="true" postdomevents="true" controller="false" ').exists(j._get(false,["values","autoplay"]),j,{block:f},null).write(' poster="').reference(j._get(false,["values","poster"]),j,"h").write('" bgcolor="').reference(j._get(false,["values","bgcolor"]),j,"h").write('" style="width:').reference(j._get(false,["values","width"]),j,"h").write("px; height:").reference(j._get(false,["values","height"]),j,"h").write('px;"  pluginspage="www.apple.com/quicktime/download">')
}function h(k,j){return k.write(' width="').reference(j._get(false,["values","width"]),j,"h").write('" height="').reference(j._get(false,["values","height"]),j,"h").write('"')
}function g(k,j){return k.write(' style="width:').reference(j._get(false,["values","width"]),j,"h").write("px; height:").reference(j._get(false,["values","height"]),j,"h").write('px;"')
}function f(k,j){return k.write("autoplay")}return i})();(function(){d.register("elementObject",j);
function j(l,k){return l.write('<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" wmode="transparent" codebase="https://www.apple.com/qtactivex/qtplugin.cab#version=7,2,1,0" id="').reference(k._get(false,["values","id"]),k,"h").write('" name="').reference(k._get(false,["values","id"]),k,"h").write('" class="ac-video-media movie-object" type="').reference(k._get(false,["type"]),k,"h").write('" style="behavior:url(#').reference(k._get(false,["values","eventId"]),k,"h").write("); ").notexists(k._get(false,["responsive"]),k,{block:i},null).write('" ').notexists(k._get(false,["responsive"]),k,{block:h},null).write(' bgcolor="').reference(k._get(false,["values","bgcolor"]),k,"h").write('" poster="').reference(k._get(false,["values","poster"]),k,"h").write('"><param name="enablejavascript" value="true" /><param name="postdomevents" value="true" />').exists(k._get(false,["values","autoplay"]),k,{block:g},null).notexists(k._get(false,["values","autoplay"]),k,{block:f},null).write('<param name="scale" value="tofit" /><param name="controller" value="false" /><param name="kioskmode" value="true" /><param name="src" value="').reference(k._get(false,["source"]),k,"h").write('" /><param name="pluginspace" value="https://www.apple.com/qtactivex/qtplugin.cab" /><param name="wmode" value="transparent"></object>')
}function i(l,k){return l.write("width:").reference(k._get(false,["values","width"]),k,"h").write("px; height:").reference(k._get(false,["values","height"]),k,"h").write("px;")
}function h(l,k){return l.write(' width="').reference(k._get(false,["values","width"]),k,"h").write('" height="').reference(k._get(false,["values","height"]),k,"h").write('" ')
}function g(l,k){return l.write('<param name="autoplay" value="true" />')}function f(l,k){return l.write('<param name="autoplay" value="false" />')
}return j})();(function(){d.register("elementObjectEvent",f);function f(h,g){return h.write('<object id="').reference(g._get(false,["values","eventId"]),g,"h").write('" wmode="transparent" classid="clsid:CB927D12-4FF7-4a9e-A169-56E4B8A75598" codebase="https://www.apple.com/qtactivex/qtplugin.cab#version=7,2,1,0"></object>')
}return f})();(function(){d.register("elementVideo",j);function j(o,n){return o.write('<video crossorigin="anonymous" class="ac-video-media" id="').reference(n._get(false,["values","id"]),n,"h").write('" poster="').reference(n._get(false,["values","poster"]),n,"h").write('" ').exists(n._get(false,["values","controls"]),n,{block:i},null).write(" ").exists(n._get(false,["values","autoplay"]),n,{block:h},null).write(" ").exists(n._get(false,["values","preload"]),n,{block:g},null).write(' x-webkit-airplay="').reference(n._get(false,["values","airplay"]),n,"h").write('" ').exists(n._get(false,["values","bgcolor"]),n,{block:f},null).write(" ").notexists(n._get(false,["responsive"]),n,{block:m},null).write(' style="').notexists(n._get(false,["responsive"]),n,{block:l},null).write('" ><source src="').reference(n._get(false,["source"]),n,"h").write('" type="').reference(n._get(false,["type"]),n,"h").write('" />').exists(n._get(false,["captionsTrack"]),n,{block:k},null).write("</video>")
}function i(o,n){return o.write("controls")}function h(o,n){return o.write("autoplay")
}function g(o,n){return o.write('preload="').reference(n._get(false,["values","preload"]),n,"h").write('"')
}function f(o,n){return o.write('bgcolor="').reference(n._get(false,["values","bgcolor"]),n,"h").write('"')
}function m(o,n){return o.write('width="').reference(n._get(false,["values","width"]),n,"h").write('" height="').reference(n._get(false,["values","height"]),n,"h").write('"')
}function l(o,n){return o.write("width:").reference(n._get(false,["values","width"]),n,"h").write("px; height:").reference(n._get(false,["values","height"]),n,"h").write("px;")
}function k(o,n){return o.write('<track src="').reference(n._get(false,["captionsTrack"]),n,"h").write('" kind="captions" srclang="en" label="English" default />')
}return j})();(function(){d.register("masterTemplate",o);function o(q,p){return q.write('<div class="ac-video-wrapper ').reference(p._get(false,["values","targetId"]),p,"h").write(" ac-video-template-").reference(p._get(false,["videoTemplate"]),p,"h").write(" ").exists(p._get(false,["values","usesFullScreen"]),p,{block:n},null).write('" id="').reference(p._get(false,["values","wrapperId"]),p,"h").write('" ').notexists(p._get(false,["responsive"]),p,{block:m},null).write('><div class="ac-video-event-blockade" ').notexists(p._get(false,["responsive"]),p,{block:l},null).write('>&nbsp; &nbsp; &nbsp; &nbsp;</div><button aria-label="Close Video" data-ac-video-element="closeButton" class="acv-button acv-close icon icon-before icon-closealt" tabindex="0"><label class="ac-element-label acv-text">Close</label></button>').exists(p._get(false,["values","poster"]),p,{block:k},null).exists(p._get(false,["values","endframe"]),p,{block:j},null).exists(p._get(false,["videoTemplate"]),p,{block:i},null).exists(p._get(false,["values","controlbar"]),p,{block:g},null).write("</div>")
}function n(q,p){return q.write("ac-video-has-fullscreen")}function m(q,p){return q.write('style="width:').reference(p._get(false,["values","width"]),p,"h").write("px;height:").reference(p._get(false,["values","height"]),p,"h").write('px"')
}function l(q,p){return q.write('style="width:').reference(p._get(false,["values","width"]),p,"h").write("px; height:").reference(p._get(false,["values","height"]),p,"h").write('px;"')
}function k(q,p){return q.write('<img width="').reference(p._get(false,["values","width"]),p,"h").write('px" height="').reference(p._get(false,["values","height"]),p,"h").write('px" src="').reference(p._get(false,["values","poster"]),p,"h").write('" class="ac-video-posterframe" data-ac-video-element="posterframe" alt="" />')
}function j(q,p){return q.write('<img width="').reference(p._get(false,["values","width"]),p,"h").write('px" height="').reference(p._get(false,["values","height"]),p,"h").write('px" src="').reference(p._get(false,["values","endframe"]),p,"h").write('" class="ac-video-endframe acv-hide" data-ac-video-element="endframe" alt="" />')
}function i(q,p){return q.partial(h,p,null)}function h(q,p){return q.reference(p._get(false,["videoTemplate"]),p,"h")
}function g(q,p){return q.partial(f,p,null)}function f(q,p){return q.reference(p._get(false,["values","controlbar"]),p,"h")
}return o})();(function(){d.register("native",h);function h(j,i){return j.write('<div class="ac-video-wrapper native-controlbar ').reference(i._get(false,["values","targetId"]),i,"h").write('" id="').reference(i._get(false,["values","wrapperId"]),i,"h").write('" style="width:').reference(i._get(false,["values","width"]),i,"h").write("px;height:").reference(i._get(false,["values","height"]),i,"h").write('px;"><button aria-label="Close Video" data-ac-video-element="closeButton" class="acv-button acv-close icon icon-before icon-closealt" tabindex="0"><label class="ac-element-label acv-text">Close</label></button><div class="acv-native-playbutton"></div>').exists(i._get(false,["videoTemplate"]),i,{block:g},null).write("</div>")
}function g(j,i){return j.partial(f,i,null)}function f(j,i){return j.reference(i._get(false,["videoTemplate"]),i,"h")
}return h})();(function(){d.register("noVideoSupport",f);function f(h,g){return h.write('<div class="ac-video-wrapper ').reference(g._get(false,["values","targetId"]),g,"h").write(' acv-no-video-support" id="').reference(g._get(false,["values","wrapperId"]),g,"h").write('" style="width:').reference(g._get(false,["values","width"]),g,"h").write("px;height:").reference(g._get(false,["values","height"]),g,"h").write('px;"><a onclick="s_objectID=&quot;https://www.apple.com/quicktime/download/_1&quot;;return this.s_oc?this.s_oc(e):true" href="').reference(g._get(false,["values","localizedText","downloadquicktimeurl"]),g,"h").write('" class="ac-video-quicktime-download"><span class="ac-video-quicktime-download-title">').reference(g._get(false,["values","localizedText","downloadquicktimetitle"]),g,"h").write('</span><span class="ac-video-quicktime-download-text">').reference(g._get(false,["values","localizedText","downloadquicktimetext"]),g,"h").write('</span><span class="ac-video-quicktime-download-button">').reference(g._get(false,["values","localizedText","downloadquicktimebutton"]),g,"h").write("</span></a></div>")
}return f})();(function(){d.register("steamVideoElement",j);function j(l,k){return l.write('<video crossorigin="anonymous" class="ac-video-media" id="').reference(k._get(false,["values","id"]),k,"h").write('" poster="').reference(k._get(false,["values","poster"]),k,"h").write('" ').exists(k._get(false,["values","controls"]),k,{block:i},null).write(" ").exists(k._get(false,["values","autoplay"]),k,{block:h},null).write(" ").exists(k._get(false,["values","preload"]),k,{block:g},null).write(' width="').reference(k._get(false,["values","width"]),k,"h").write('" height="').reference(k._get(false,["values","height"]),k,"h").write('" x-webkit-airplay="').reference(k._get(false,["values","airplay"]),k,"h").write('" bgcolor="').reference(k._get(false,["values","bgcolor"]),k,"h").write('" style="width:').reference(k._get(false,["values","width"]),k,"h").write("px; height:").reference(k._get(false,["values","height"]),k,"h").write('px;"><source src="').reference(k._get(false,["source"]),k,"h").write('" type="').reference(k._get(false,["type"]),k,"h").write('" />').exists(k._get(false,["captionsTrack"]),k,{block:f},null).write("</video>")
}function i(l,k){return l.write("controls")}function h(l,k){return l.write("autoplay")
}function g(l,k){return l.write('preload="').reference(k._get(false,["values","preload"]),k,"h").write('"')
}function f(l,k){return l.write('<track src="').reference(k._get(false,["captionsTrack"]),k,"h").write('" kind="captions" srclang="en" label="English" default />')
}return j})();return d})()},{"./dust-runtime":111}],113:[function(b,c,a){c.exports={Video:b("./ac-video/Video"),Utils:b("./ac-video/lib/SharedUtils")}
},{"./ac-video/Video":114,"./ac-video/lib/SharedUtils":149}],114:[function(j,c,t){var k=j("./config/VideoConfig");
var f=j("./profiles/Recommendation");var i=j("ac-dom-emitter").DOMEmitter;var h=j("ac-event-emitter").EventEmitter;
var q=j("ac-vatman");var s=j("ac-base").Element;var m=j("ac-base").Environment;
var l=j("ac-base").log;var u=j("ac-base").Object;var d=j("./lib/SharedUtils");var g=j("ac-video-templates");
var r=j("./views/HTML5VideoView");var n=j("./views/QuickTimeVideoView");var o=j("./api");
var a=j("ac-deferred").Deferred;j("./polyfills/full-screen");function b(w,v){w=s.getElementById(w);
this.element=w;this.targetId=w.id;this.callouts=d.NodeListToArray(s.selectAll('[data-acv-trigger-open="'+this.targetId+'"]'));
this._fixSafari5AttributeSelectorIssue();this._id=this.element.getAttribute("href").replace(/\W|_/g,"").toLowerCase();
i.call(this,w);this._initialize(v);this.api=o(this)}b.api=o.globalAPI;b.emitter=new h();
b.prototype=new i();var p=b.prototype;p.isVisible=false;p._defaults={useNative:d.useNative(),debug:false};
p._addCalloutClickTrigger=function(v){this.boundTriggerCalloutClick=this._triggerCalloutClick.bind(this);
s.addEventListener(v,"click",this.boundTriggerCalloutClick)};p._videoViewReady=function(v){this.videoView=v;
this._renderVideoView();this.trigger("acv-open");this.isVisible=true};p._fixSafari5AttributeSelectorIssue=function(){if(m.Browser.name==="Safari"&&m.Browser.version<6){var w=document.activeElement;
var v=0;this.callouts.forEach(function(y,x){x++;y.focus();setTimeout(function(){y.blur()
},1);if(x===this.callouts.length){setTimeout(function(){if(w){w.focus()}},2)}}.bind(this))
}};p._addEventListeners=function(){if(this.options.debug){this.on("acv-close",function(){console.log("acv-close")
});this.on("acv-open",function(){console.log("acv-open")});this.on("acv-play",function(){console.log("acv-play")
});this.on("acv-pause",function(){console.log("acv-pause")});this.on("acv-timeupdate",function(){console.log("acv-timeupdate")
})}if(this.options.autoplay&&!this.options.useNative){this._initializeVideoView()
}this.on("acv-video-view-ready",this._videoViewReady,this);if(this.options.useNative){this._initializeVideoView()
}else{this.callouts.forEach(this._addCalloutClickTrigger,this);this.on("acv-callout-clicked",this._handleCalloutClick,this);
this.on("acv-close",this.closeVideo,this)}if(d.usesFullScreen()){this.on("acv-full-screen-toggle",this.toggleFullScreen,this)
}this._eventEmitter.propagateTo(b.emitter)};p._initializeVideoView=function(){if(!this.initializationHasBegun){this.initializationHasBegun=true;
var w=this._createVideo.bind(this);var v=this._unsuccessfulRecomendation.bind(this);
this._getRecomendation().then(w,v)}};p._handleCalloutClick=function(){if(this.videoView){this.trigger("acv-reopen",this.trackingData);
this.toggleVideoDisplay()}else{this._initializeVideoView()}};p._triggerCalloutClick=function(v){if(!v){v=window.event
}if(v.preventDefault){v.preventDefault()}v.returnValue=false;this.trigger("acv-callout-clicked")
};p._initialize=function(v){this.options=u.extend({},this._defaults,v);this._addEventListeners();
this.targetContent=s.select('[data-acv-target="'+this.targetId+'"]');this.targetContent.setAttribute("data-acv-viewtype",(this.options.useNative)?"native":"ac-video");
s.selectAll("acv-title",this.targetContent).forEach(function(w){s.removeClassName(w,"acv-title")
});this.videoTarget=this.targetContent.parentNode};p._getRecomendation=function(){var v=new a();
var w={videoTemplate:"elementVideo",supportedProfiles:[]};if(m.Browser.name==="Safari"||m.Browser.name==="Safari Mobile"){w.videoTemplate="elementVideo"
}else{if(m.Browser.name==="Chrome"&&!m.Feature.touchAvailable()){w.videoTemplate="elementVideo"
}else{if(m.Browser.name==="Chrome"&&m.Feature.touchAvailable()){w.videoTemplate="elementVideo"
}else{if(m.Browser.name==="Firefox"){w.videoTemplate="elementEmbed"}else{if(m.Browser.name==="IE"){w.videoTemplate="elementObject"
}}}}}v.resolve(w);return v.promise()};p._renderVideoView=function(){var v=document.createElement("div");
if(this.options.modal&&!d.useNative()){v.innerHTML='<table class="acv-modal" style="background-color: '+this.options.modal.background+';"><tr><td class="acv-vertical-align">'+this.videoView.render()+"</td></tr></table>";
this.videoContent=v.firstChild}else{v.innerHTML=this.videoView.render();this.videoContent=v
}s.addClassName(this.videoContent,"ac-video-content-container");if(this.options.responsive){s.addClassName(this.videoContent,"responsive");
this.videoContent.style.maxWidth=this.options.responsive.maxWidth+"px"}s.addClassName(this.targetContent,"acv-target");
this.targetContent.parentNode.insertBefore(this.videoContent,this.targetContent);
s.toggleClassName(this.targetContent,"acv-hide");this.videoView.afterRender()};
p._unsuccessfulRecomendation=function(){l("Video.createVideo() : unable to obtain a video recommendation")
};p._createVideo=function(w){var v=new k();v.getConfig(this.element,w,this.options.values).then(function(y){var B=y.videoTemplate;
var A=/video/i.test(B);var z=/object|embed/i.test(B);var x=A?r:z?n:false;if(x){if(this.options.stream){y.source=this.options.stream
}y.responsive=this.options.responsive?true:false;y.root=this;if(this.options.source){y.source=this.options.source
}y.movSrc=y.source;if(m.Browser.name==="Chrome"){y.source=q.vatClient.getSource(y.source,window.innerWidth)
}y.videoType="";if(this.options.captionsTrack){y.captionsTrack=this.options.captionsTrack
}if(!z){q.vatClient.getConfig(y.movSrc).then(function(C){if((C&&C.metadata&&typeof C.metadata.captions!=="string")||m.Browser.name==="Safari Mobile"){y.captionsTrack=false
}new x(y)},function(){new x(y)})}else{new x(y)}}else{g.render("noVideoSupport",y,function(C,D){this.element.parentNode.replaceChild(d.createElementFromMarkup(D),this.element)
}.bind(this))}}.bind(this))};p.destroy=function(){this.callouts.forEach(function(x){s.removeEventListener(x,"click",this.boundTriggerCalloutClick)
},this);this.videoView.destroy();this.videoContent.parentNode.removeChild(this.videoContent);
i.prototype.destroy.call(this);var v=b.api.instances.indexOf(this);b.api.instances.splice(v,1);
for(var w in this){if(this.hasOwnProperty(w)){this[w]=null}}};p.initialize=function(){if(!this.videoView){this._initializeVideoView()
}};p.toggleFullScreen=function(){if(document.isFullScreen){document.cancelFullScreen()
}else{this.videoContent.requestFullScreen()}};p.toggleVideoDisplay=function(){this.isVisible=this.isVisible?false:true;
var v=[this.targetContent,this.videoContent];v.forEach(function(w){s.toggleClassName(w,"acv-hide")
})};p.show=function(){if(!this.isVisible){this.isVisible=true;s.addClassName(this.targetContent,"acv-hide");
s.removeClassName(this.videoContent,"acv-hide")}};p.hide=function(){if(this.isVisible){this.isVisible=false;
s.removeClassName(this.targetContent,"acv-hide");s.addClassName(this.videoContent,"acv-hide")
}};p.closeVideo=function(){this.toggleVideoDisplay()};c.exports=b},{"./api":115,"./config/VideoConfig":117,"./lib/SharedUtils":149,"./polyfills/full-screen":156,"./profiles/Recommendation":158,"./views/HTML5VideoView":168,"./views/QuickTimeVideoView":169,"ac-base":false,"ac-dom-emitter":68,"ac-event-emitter":false,"ac-vatman":108,"ac-video-templates":112}],115:[function(b,d,a){var f=b("ac-event-emitter").EventEmitter;
var c={emitter:new f(),instances:[]};d.exports=function(g){c.instances.push(g);
return{globalAPI:c,instanceAPI:{initialize:function(){if(!g.videoView){g.initialize()
}},toggleDisplay:function(){if(!g.videoView){this.initialize()}else{if(g.isVisible){g.videoView.close()
}else{g.show()}}},player:{pause:function(){g.videoView.pause()},play:function(){g.videoView.play()
},getCurrentTime:function(){return g.videoView.getCurrentTime()},getDuration:function(){return g.videoView.getDuration()
},getVolume:function(){return g.videoView.getVolume()},getPaused:function(){if(g.videoView){return g.videoView.getPaused()
}else{return true}},setVolume:function(h){return g.videoView.setVolume(h)},setCurrentTime:function(h){g.videoView.setCurrentTime(h)
},streaming:{getSeekableEnd:function(){return g.videoView.element.seekable.end(0)
}},toggleCaptions:function(h){g.videoView.toggleCaptions(h)}}}}};d.exports.globalAPI=c
},{"ac-event-emitter":false}],116:[function(f,g,c){var i=f("ac-base").Ajax;var a=f("ac-base").Environment;
var d=f("ac-deferred").Deferred;function b(){}var h=b.prototype;h.firstValidRequest=function(k){var l=0;
var j=new d();var m=function(){var n=this.validateFile(k[l]);n.then(function(o){j.resolve(o)
},function(){l++;if(l===k.length){j.reject()}else{m()}}.bind(this))}.bind(this);
if(k.length>0){m()}else{j.reject()}return j.promise()};h.validateFile=function(k){var j=new d();
if(a.Browser.IE){j.resolve(k)}else{i.checkURL(k,function(l){if(l){j.resolve(k)}else{j.reject()
}}.bind(this))}return j.promise()};g.exports=b},{"ac-base":false}],117:[function(f,b,r){var s=f("ac-base").Object;
var p=f("ac-base").Element;var i=f("ac-base").Environment;var h=f("ac-base").log;
var m=f("ac-deferred").all;var a=f("ac-deferred").Deferred;var o=f("./FileRequest");
var l=f("../profiles/definitions");var d=f("../polyfills/hasAttribute");var c=f("../lib/SharedUtils");
var q=f("../localization/Localization");var j="v";var n;function g(){this._possibleTemplateKeys=["autoplay","buffered","endframe","controls","height","loop","muted","poster","preload","suffix","width","controlbar","controlbarwidth","controlbarskinning","disablecaptionscontrol"];
this._defaultTemplateValues={autoplay:false,muted:false,loop:false,controls:false,preload:"metadata",controlbarwidth:"450",controlbarskinning:"ac-video-controlbar",disablecaptionscontrol:false};
this.fileRequest=new o()}var k=g.prototype;k.getSource=function(v){document.createElement("video");
document.createElement("source");var w=/[^/]*.[^\.]*$/;var u=null;var x={};if(d(v,"data-src")){u=v.getAttribute("data-src")
}else{if(d(v,"href")){u=v.getAttribute("href")}else{if(d(v,"src")){u=v.getAttribute("src")
}else{var t=p.select("source",v.parentElement);if(t&&d(t,"src")){u=t.getAttribute("src")
}}}}if(u){x.defaultSource=u;x.videoSource=u.match(w)[0];x.directory=u.replace(x.videoSource,"");
x.videoFileName=x.videoSource.split(".")[0]}else{h("ACVideo VideoConfig.getDirectory : unable to get the src video directory")
}return x};k.getConfig=function(y,B,C){var w=new a();var t=new a();var z=new a();
var D=m([z]);var v={};var A=this.getSource(y);this.isAppleMobileDevice=(i.Browser.os==="iOS");
v.values=this._getValues(y,C);v.values.usesFullScreen=c.usesFullScreen();var x;
this._videoRecommendation=B;v.videoTemplate=B.videoTemplate;this.localization=new q();
var u=this.localization.getLocalizedText();u.then(function(E){v.values.localizedText=E;
z.resolve()}.bind(this),function(){h("VideoConfig: Unable to load localization JSON. Using defaulg values");
v.values.localizedText=this.localization.defaultText;z.resolve()}.bind(this));return D.then(function(){if(v.type===l.hls.videoType||(v.type===l.h264.videoType&&i.Browser.name==="Safari"&&i.Browser.version<7)){v.captionsTrack=null
}v.values.usesFullScreen=(v.values.usesFullScreen&&v.videoTemplate==="elementVideo");
v.source=A.defaultSource;return v})};k._configureFrames=function(t,w){var v;var u;
if(!t.values.poster){v=w.match(/[^/]*.[^\.]*$/)[0];u=v.replace(/(-cc)?\..*/,".jpg");
t.values.poster=w.replace(v,"")+"posterframes/"+u}else{if(t.values.poster==="false"){t.values.poster=null
}}if(!t.values.endframe){t.values.endframe=t.values.poster}else{if(t.values.poster===false){t.values.endframe=null
}}};k._buildFileSuffix=function(u){var w="";if(u.suffix){w="_"+u.suffix}else{if(u.height&&u.width){var t=u.height.replace("px","").replace("em","").replace("rem","");
var v=u.width.replace("px","").replace("em","").replace("rem","");w="_"+v+"x"+t
}}return w};k._getRecommendedCaptionsPaths=function(u,t){var v=[];v.push(u+t+"-captions."+j+"tt");
return v};k._generateRecommendedVideoPaths=function(u,t){var w=this._buildFileSuffix(t);
var v=[];this._videoRecommendation.supportedProfiles.forEach(function(x){if(x.sizeRelevant){u=u+w
}v.push(u+"."+x.fileExtension)});return v};k._getValues=function(u,w){var v="ac-video-"+c.uuid();
var t=this._defaultTemplateValues;s.extend(t,this._getMarkupValues(u));if(w){s.extend(t,w)
}if(c.useNative()){t["native"]=true;t.controls="true"}t.targetId=u.id;t.id=v;t.eventId=v+"-quicktime-event";
t.wrapperId=v+"-wrapper";return t};k._getMarkupValues=function(t){var u={};this._possibleTemplateKeys.forEach(function(v){if(d(t,v)){u[v]=t.getAttribute(v)
}else{if(d(t,"data-acv-"+v)){u[v]=t.getAttribute("data-acv-"+v)}}if((v==="autoplay"||v==="controls"||v==="muted"||v==="loop")&&u[v]&&u[v].length>0){u[v]=true
}if(typeof(u[v])==="string"&&/^(true|false)$/.test(u[v])){u[v]=(u[v]==="true")?true:false
}});return u};k.addPossibleTemplateKeys=function(t){t.forEach(function(u){if(!this._possibleTemplateKeys.indexOf(u)){this._possibleTemplateKeys.push(u)
}},this)};b.exports=g},{"../lib/SharedUtils":149,"../localization/Localization":152,"../polyfills/hasAttribute":157,"../profiles/definitions":159,"./FileRequest":116,"ac-base":false}],118:[function(b,c,a){var f=b("./Controller");
var g=function(h){f.call(this,h)};g.prototype=new f();var d=g.prototype;d._addEventListeners=function(){if(this.emitter){this.emitter.on("acv-buffered-data",this._toggleBufferedDataListener,this)
}};d._initialize=function(h){f.prototype._initialize.call(this,h);this._addEventListeners()
};d._toggleBufferedDataListener=function(h){this.view.updateBufferProgress(h);if(parseInt(h,10)>=100){this.emitter.off("acv-buffered-data",this._toggleBufferedDataListener,this)
}};c.exports=g},{"./Controller":119}],119:[function(b,c,a){var h=b("../views/View");
var g=b("../models/Model");var f=function(i){this._initialize(i)};var d=f.prototype;
d.destroy=function(){this.model.destroy();this.view.destroy()};d._initialize=function(i){i=i||{};
this.view=i.view||new h();this.model=i.model||new g();if(i.emitter){this.emitter=i.emitter
}};c.exports=f},{"../models/Model":153,"../views/View":171}],120:[function(c,b,f){var d=c("./ElementsRegistry");
var i=c("ac-base").Element;var h=c("../lib/animate");var m=c("ac-dom-emitter").DOMEmitter;
var l=c("ac-base").log;var k=c("../lib/SharedUtils");var a=c("../polyfills/hasAttribute");
function j(n){this.flag="data-ac-video-element";this.videoView=n;this.viableElements=[];
this.elements=[];this.element=i.select(".ac-video-controlbar",this.videoView.wrapper);
m.call(this,this.element);this.registry=new d()}j.prototype=new m();var g=j.prototype;
g._animate=h.factory;g._animationDuration=400;g.destroy=function(){this.destroyed=true;
clearTimeout(this._hiderTimer);this._hiderTimer=null;this.buttons.forEach(this._removeButtonTriggers,this);
this._removeWrapperEventListeners();for(var n=this.elements.length-1;n>=0;n--){this.elements[n].destroy()
}this.elements=null;m.prototype.destroy.call(this);for(var o in this){if(this.hasOwnProperty(o)){this[o]=null
}}};g.show=function(){this.isVisible=true;this.videoView.trigger("acv-show-control-bar");
i.removeClassName(this.videoView.wrapper,"ac-video-controlbarstate-hidden")};g.hide=function(){this.isVisible=false;
this.videoView.trigger("acv-hide-control-bar");i.addClassName(this.videoView.wrapper,"ac-video-controlbarstate-hidden")
};g._timingValue=2500;g.hideOnTimer=function(){clearTimeout(this._hiderTimer);this._hiderTimer=null;
if(!this.controlBarHover&&!this.destroyed){if(!this.isVisible){this.show()}else{this._hiderTimer=setTimeout(function(){if(!this._controlHasFocus){this.hide()
}}.bind(this),this._timingValue)}}};g._handleBlurAndFocusEvents=function(n){if(n.type==="blur"){this._controlHasFocus=false;
this.hideOnTimer()}else{this._controlHasFocus=true;clearTimeout(this._hiderTimer);
this.show()}};g._removeButtonTriggers=function(n){i.removeEventListener(n,"focus",this.boundTriggerFocus);
i.removeEventListener(n,"blur",this.boundTriggerBlur)};g._setupButtonTriggers=function(n){this.boundTriggerFocus=this.trigger.bind(this,"focus");
this.boundTriggerBlur=this.trigger.bind(this,"blur");i.addEventListener(n,"focus",this.boundTriggerFocus);
i.addEventListener(n,"blur",this.boundTriggerBlur)};g._respondToVideoPauseEvent=function(){this.isPlaying=false;
clearTimeout(this._hiderTimer);this.show()};g._respondToVideoPlayEvent=function(){this.isPlaying=true;
this.hideOnTimer.call(this)};g._cancelTimeoutAndShow=function(){this.controlBarHover=true;
clearTimeout(this._hiderTimer);this.show()};g._resumeTimeout=function(){this.controlBarHover=false;
this.hideOnTimer()};g._setControlbarState=function(){this.show();this.isPlaying=!this.videoView.getPaused();
this._controlHasFocus=false;this.on("blur focus",this._handleBlurAndFocusEvents,this);
this.buttons=i.selectAll(".ac-rangeslider-eventsurface, .acv-button",this.videoView.wrapper);
this.buttons.forEach(this._setupButtonTriggers,this);this.videoView._bindings.on("acv-pause",this._respondToVideoPauseEvent,this);
this.videoView._bindings.on("acv-play",this._respondToVideoPlayEvent,this);this._addWrapperEventListeners();
this.on("mouseenter",this._cancelTimeoutAndShow,this);this.on("mouseleave",this._resumeTimeout,this)
};g.setDisabledState=function(){i.addClassName(this.element,"acv-controller-disabled");
this.elements.forEach(function(n){n.enabled=false;switch(n.controlName){case"progressSlider":n._slider.disableUserControls();
break;case"volumeSlider":n._slider.disableUserControls();break}}.bind(this))};g.setEnabledState=function(){i.removeClassName(this.element,"acv-controller-disabled");
this.elements.forEach(function(n){n.enabled=true;switch(n.controlName){case"progressSlider":n._slider.enableUserControls();
break;case"volumeSlider":n._slider.enableUserControls();break}}.bind(this))};g.createElements=function(){if(this.videoView.element.tagName.toLowerCase().match(/embed|object/)){k.waitForQuickTimeToLoad(this.videoView.element).then(function(){this._instantiateElements()
}.bind(this))}else{this._instantiateElements()}};g._removeWrapperEventListeners=function(){i.removeEventListener(this.videoView.wrapper,"mouseenter",this.boundShow);
i.removeEventListener(this.videoView.wrapper,"mouseleave",this.boundHide);i.removeEventListener(this.videoView.wrapper,"mousemove",this.boundHideOnTimer);
i.removeEventListener(this.videoView.wrapper,"click",this.boundHideOnTimer);i.removeEventListener(this.videoView.wrapper,"touchstart",this.boundHideOnTimer)
};g._addWrapperEventListeners=function(){this.boundShow=this.show.bind(this);this.boundHide=this.hide.bind(this);
this.boundHideOnTimer=this.hideOnTimer.bind(this);i.addEventListener(this.videoView.wrapper,"mouseenter",this.boundShow);
i.addEventListener(this.videoView.wrapper,"mouseleave",this.boundHide);i.addEventListener(this.videoView.wrapper,"mousemove",this.boundHideOnTimer);
i.addEventListener(this.videoView.wrapper,"click",this.boundHideOnTimer);i.addEventListener(this.videoView.wrapper,"touchstart",this.boundHideOnTimer)
};g._instantiateElements=function(){var n=true;this.viableElements=this._getViableElements(this.videoView.wrapper);
this.viableElements.forEach(function(s){var o=s.getAttribute(this.flag);var q=this.registry.getItem(o);
var r=q.value;if(!n&&q.isVolumeRelated===true){s=s.parentNode.removeChild(s)}else{if(r){var p=new r(s,this.videoView,s.getAttribute(this.flag));
this.videoView._bindings._eventEmitter.propagateTo(p);this.elements.push(p)}}},this);
this._setControlbarState()};g._getViableElements=function(r){var p=i.selectAll("*",r);
var q=[];for(var o=p.length-1;o>=0;o--){if(a(p[o],this.flag)){var n=p[o].getAttribute(this.flag);
if(this.registry.exists(n)){q.push(p[o])}else{l("ControlBar._getViableElements() : flagged control found with invalid key (key not in registry): "+n)
}}}return q};b.exports=j},{"../lib/SharedUtils":149,"../lib/animate":150,"../polyfills/hasAttribute":157,"./ElementsRegistry":122,"ac-base":false,"ac-dom-emitter":68}],121:[function(c,d,a){var h=c("ac-dom-emitter").DOMEmitter;
var f=c("ac-base").Element;function b(k,i,l){h.apply(this,arguments);this.videoView=i;
this.node=k;var j;if(j=f.select(".ac-element-label",this.node)){this.labelElement=j
}this.active=false;if(l){this.controlName=l}if(this.videoView&&this.controlName){this._classifyWrapper(this.videoView,this.controlName)
}}var g=b.prototype=new h();g._classifyWrapper=function(i,j){if(i&&j){f.addClassName(i.wrapper,"ac-video-hascontrol-"+j)
}};g.updateLabelText=function(i){if(this.labelElement){this.labelElement.innerHTML=i
}};d.exports=b},{"ac-base":false,"ac-dom-emitter":68}],122:[function(j,c,t){var i=j("./Registry");
var n=j("./buttons/MinVolumeButton");var k=j("./buttons/MaxVolumeButton");var m=j("./buttons/MuteButton");
var g=j("./buttons/PlayPauseButton");var b=j("./buttons/CaptionsButton");var r=j("./text/CurrentTimeText");
var a=j("./text/RemainingTimeText");var d=j("./sliders/VolumeSlider");var l=j("./sliders/ProgressSlider");
var q=j("./posterframe/Posterframe");var f=j("./posterframe/Endframe");var o=j("./buttons/CloseButton");
var s=j("./buttons/FullScreenButton");var p=[{key:"minVolumeButton",value:n,isVolumeRelated:true},{key:"maxVolumeButton",value:k,isVolumeRelated:true},{key:"muteButton",value:m,isVolumeRelated:true},{key:"playPauseButton",value:g,isVolumeRelated:false},{key:"captionsButton",value:b,isVolumeRelated:false},{key:"currentTimeText",value:r,isVolumeRelated:false},{key:"remainingTimeText",value:a,isVolumeRelated:false},{key:"volumeSlider",value:d,isVolumeRelated:true},{key:"progressSlider",value:l,isVolumeRelated:false},{key:"posterframe",value:q},{key:"endframe",value:f},{key:"closeButton",value:o},{key:"fullScreenButton",value:s}];
function h(){this.registerItems(p)}h.prototype=new i();c.exports=h},{"./Registry":123,"./buttons/CaptionsButton":125,"./buttons/CloseButton":126,"./buttons/FullScreenButton":127,"./buttons/MaxVolumeButton":128,"./buttons/MinVolumeButton":129,"./buttons/MuteButton":130,"./buttons/PlayPauseButton":131,"./posterframe/Endframe":132,"./posterframe/Posterframe":134,"./sliders/ProgressSlider":136,"./sliders/VolumeSlider":137,"./text/CurrentTimeText":138,"./text/RemainingTimeText":139}],123:[function(c,d,a){var g=c("ac-base").log;
function b(h){this.items=[];if(h){this.registerItems(h)}}var f=b.prototype;f.registerItem=function(h){if(!this.exists(h.key)){this.items.push(h)
}else{g("Registry.registerItem: attempted to register an item whose key already exists in the registry: "+h.key)
}};f.registerItems=function(h){h.forEach(function(i){this.registerItem(i)},this)
};f.exists=function(j){for(var h=this.items.length-1;h>=0;h--){if(this.items[h].key===j){return true
}}return false};f.getItem=function(j){for(var h=this.items.length-1;h>=0;h--){if(this.items[h].key===j){return this.items[h]
}}return null};d.exports=b},{"ac-base":false}],124:[function(d,f,b){var c=d("../ControlElement");
function a(i,h){void (h);c.apply(this,arguments);this._addEventListeners();this.active=false;
this.enabled=true}var g=a.prototype=new c();g._addEventListeners=function(){if(this.node){this._addControlElementFocusedEvent();
this.on("ControlElement-focused",this._focusHandler.bind(this))}};g._addControlElementFocusedEvent=function(){this._focusedOnMouseDown=false;
this._isFocused=false;this.on("mousedown",this._toggleMouseDownFlag.bind(this));
this.on("focus",this._toggleMouseDownFlag.bind(this));this.on("blur",this._toggleIsFocused.bind(this))
};g.clickHandler=function(h){void (h)};g._focusHandler=function(h){if(h==="click"){setTimeout(function(){this.node.blur()
}.bind(this),1)}};g._toggleIsFocused=function(h){if(h.type==="blur"){this._isFocused=false
}else{this._isFocused=true}};g._toggleMouseDownFlag=function(j){var h=(j.type==="mousedown")?true:false;
if(j.type==="mousedown"){if(this.node!==document.activeElement){this._focusedOnMouseDown=h
}}else{if(!this._isFocused){var i=this._focusedOnMouseDown?"click":"keypress";this._toggleIsFocused(j);
this.trigger("ControlElement-focused",i);this._focusedOnMouseDown=h}}};f.exports=a
},{"../ControlElement":121}],125:[function(c,f,b){var a=c("./Button");var g=c("ac-base").Element;
var h;function d(j,i){void (j,i);a.apply(this,arguments);this.on("click",function(k){if(this.enabled){this.videoView._bindings.trigger("click:captions",k)
}}.bind(this));this.on("acv-captions-enabled",this._enableCaptions,this);this.on("acv-captions-disabled",this._disableCaptions,this);
this.enableCaptions=(this.videoView.model.values.localizedText.captionscontrol)?this.videoView.model.values.localizedText.captionscontrol:"Enable Captions";
this.disableCaptions=(this.videoView.model.values.localizedText.captionscontrol)?this.videoView.model.values.localizedText.captionscontrol:"Disable Captions"
}d.prototype=new a();h=d.prototype;h._enableCaptions=function(){g.addClassName(this.node,"active");
this.node.setAttribute("aria-label",this.enableCaptions)};h._disableCaptions=function(){g.removeClassName(this.node,"active");
this.node.setAttribute("aria-label",this.disableCaptions)};f.exports=d},{"./Button":124,"ac-base":false}],126:[function(c,d,b){var a=c("./Button");
function g(i,h){void (h);a.apply(this,arguments)}var f=g.prototype=new a();f._addEventListeners=function(){a.prototype._addEventListeners.call(this);
this.on("click",function(){this.videoView._bindings.trigger("click:close")},this)
};d.exports=g},{"./Button":124}],127:[function(d,f,c){var i=d("../../lib/SharedUtils");
var b=d("./Button");var g=d("ac-base").Element;function a(k,j){void (j);b.apply(this,arguments)
}a.prototype=new b();var h=a.prototype;h.destroy=function(){document.removeEventListener("fullscreenchange",this.boundToggleActiveClass,false);
b.prototype.destroy.call(this)};h._addEventListeners=function(){this.boundToggleActiveClass=this._toggleActiveClass.bind(this);
b.prototype._addEventListeners.call(this);if(i.usesFullScreen()){this.on("click",function(){this.videoView._bindings.trigger("click:fullScreen")
},this);document.addEventListener("fullscreenchange",this.boundToggleActiveClass,false);
if(this.enabled){this.videoView._bindings.trigger("click:fullScreen")}}};h._toggleActiveClass=function(){var j=document.isFullScreen?"addClassName":"removeClassName";
g[j](this.node,"active");this.node.setAttribute("aria-label",(document.isFullScreen)?"Disable Full Screen":"Enable Full Screen")
};f.exports=a},{"../../lib/SharedUtils":149,"./Button":124,"ac-base":false}],128:[function(c,d,b){var f=c("ac-base").Element;
var a=c("./Button");function h(j,i){void (j,i);a.apply(this,arguments);this.on("click",this.clickHandler.bind(this));
this.on("acv-volumechange",this.updateState.bind(this));this.once("acv-canplay",this.updateState.bind(this));
this.updateState()}var g=h.prototype=new a();g.clickHandler=function(){if(this.enabled){this.videoView.setVolume(1)
}};g.updateState=function(){var i=this.videoView.getVolume();if(i===1){f.addClassName(this.node,"active")
}else{f.removeClassName(this.node,"active")}};d.exports=h},{"./Button":124,"ac-base":false}],129:[function(c,d,b){var f=c("ac-base").Element;
var a=c("./Button");function h(j,i){void (j,i);a.apply(this,arguments);this.on("click",this.clickHandler.bind(this));
this.on("acv-volumechange",this.updateState.bind(this));this.once("acv-canplay",this.updateState.bind(this));
this.updateState()}var g=h.prototype=new a();g.clickHandler=function(){if(this.enabled){this.videoView.setVolume(0)
}};g.updateState=function(){var i=this.videoView.getVolume();if(i===0){f.addClassName(this.node,"active")
}else{f.removeClassName(this.node,"active")}};d.exports=h},{"./Button":124,"ac-base":false}],130:[function(c,d,b){var f=c("ac-base").Element;
var a=c("./Button");function h(j,i){void (j,i);a.apply(this,arguments);this.isScrubbing=false;
this.on("acv-scrub-start",function(){this.isScrubbing=true},this);this.on("acv-scrub-end",function(){this.isScrubbing=false
},this);this.on("click",this.clickHandler,this);this.on("acv-volumechange",this.updateState,this);
this.updateState()}var g=h.prototype=new a();g.clickHandler=function(){if(this.enabled){this.videoView.setMuted(!this.videoView.getMuted());
this.updateState()}};g.updateState=function(){if(!this.isScrubbing){var i=this.videoView.getMuted();
f[(i)?"addClassName":"removeClassName"](this.node,"muted");this.node.setAttribute("aria-checked",(i)?"true":"false");
this.updateLabelText((i)?"Muted":"Mute")}};d.exports=h},{"./Button":124,"ac-base":false}],131:[function(d,f,c){var g=d("ac-base").Element;
var a=d("./Button");function b(j,i){void (i);a.apply(this,arguments);this.updateState();
this.play=(this.videoView.model.values.localizedText.play)?this.videoView.model.values.localizedText.play:"Play";
this.pause=(this.videoView.model.values.localizedText.pause)?this.videoView.model.values.localizedText.pause:"Pause"
}var h=b.prototype=new a();h._addEventListeners=function(){a.prototype._addEventListeners.call(this);
this.on("acv-startPlaying",this.updateState.bind(this));this.on("acv-stopPlaying",this.updateState.bind(this));
this.on("acv-ended",this.updateState.bind(this,true));this.on("click",function(i){if(this.enabled){this.videoView._bindings.trigger("click:play/pause",i)
}}.bind(this),this)};h.updateState=function(i){i=i||false;var j=i?this.play:this.pause;
var k=i?"removeClassName":"addClassName";g[k](this.node,"paused");this.node.setAttribute("aria-label",j);
this.updateLabelText(j)};f.exports=b},{"./Button":124,"ac-base":false}],132:[function(c,f,a){var b=c("../ControlElement");
var d=c("./Frame");function h(j,i){void (j,i);b.apply(this,arguments);this.active=false;
this.threshold="";this.on("acv-timeupdate",this.timeUpdate.bind(this));this.on("acv-ended",function(){i._bindings.trigger("click:close")
});this.timeUpdate()}h.prototype=new d();var g=h.prototype;g.timeUpdate=function(){var i=this.videoView.getCurrentTime();
if(!this.threshold){this.threshold=this.videoView.getDuration()}if(i>this.threshold&&!this.active){this.show()
}else{if(i<this.threshold&&this.active){this.hide()}}};f.exports=h},{"../ControlElement":121,"./Frame":133}],133:[function(c,f,a){var b=c("../ControlElement");
var g=c("ac-base").Element;function d(j,i){void (j,i);b.apply(this,arguments)}d.prototype=new b();
var h=d.prototype;h.show=function(){this.active=true;g.removeClassName(this.node,"acv-hide")
};h.hide=function(){this.active=false;g.addClassName(this.node,"acv-hide")};f.exports=d
},{"../ControlElement":121,"ac-base":false}],134:[function(c,f,a){var b=c("../ControlElement");
var d=c("./Frame");function g(i,h){void (i,h);b.apply(this,arguments);this.active=true;
this.once("acv-timeupdate",function(){this.hide()}.bind(this));this.on("acv-play",this.hide.bind(this))
}g.prototype=new d();f.exports=g},{"../ControlElement":121,"./Frame":133}],135:[function(c,d,a){var h=c("../../controllers/BufferController");
var b=c("../../views/BufferView");var g=function(i,j){this._initialize(i,j)};var f=g.prototype;
f.destroy=function(){this.controller.destroy()};f._initialize=function(i,j){this.controller=new h({emitter:j,element:i,view:new b(i)})
};d.exports=g},{"../../controllers/BufferController":118,"../../views/BufferView":167}],136:[function(b,a,g){var j=b("ac-base").Element;
var i=b("../buttons/Button");var f=b("ac-slider").Slider;var d=b("./Buffer");function c(l){this.totalSec=l;
this.calculate()}c.prototype.calculate=function(l){this.totalSec=(typeof l==="number")?l:this.totalSec;
this.minutes=Math.floor(this.totalSec/60);this.seconds=Math.round(this.totalSec-(this.minutes*60));
this.stringOut=(((this.minutes>0)?this.minutes+(" minute"+((this.minutes>1)?"s":"")):"")+((this.minutes>0&&this.seconds>0)?", ":"")+((this.seconds>0)?this.seconds+(" second"+((this.seconds>1)?"s":"")):""))
};function k(o,m){i.apply(this,arguments);var n=this.videoView.getDuration();this.node=o;
this.inputRangeNode=j.select(".acv-progressslider-inputrange",this.node);this.videoView=m;
this._slider=new f(this.inputRangeNode,{skin:"ac-media-progress",min:0,max:(typeof n==="number"&&!isNaN(n))?n:0,value:0,label:"playback",renderAriaValueText:function(){var r=new c(m.getCurrentTime());
var s=new c(m.getDuration());return r.stringOut+", of "+s.stringOut}});var p=j.select(".ac-rangeslider-grip",o);
var q=document.createElement("div");j.addClassName(q,"acv-bufferprogress-container");
p.parentNode.insertBefore(q,p);var l=document.createElement("div");l.id="acv-bufferprogress";
j.addClassName(l,"acv-bufferprogress");q.appendChild(l);this._buffer=new d(l,m._bindings);
this.on("acv-timeupdate acv-loadedmetadata acv-durationchange",this.updateState.bind(this));
this._slider.on("grab",function(){function r(){this._storedVideoMuting=this.videoView.getMuted();
if(!this.videoView.getMuted()){this.videoView.setMuted(true)}this.videoView.pause()
}this.videoView.trigger("acv-scrub-start");this._suspendManagedEventsWhileScrubbing=(this.videoView.getPaused())?false:true;
if(this._suspendManagedEventsWhileScrubbing){if(AC.Environment.Browser.name==="IE"){setTimeout(r.bind(this),1)
}else{r.call(this)}}}.bind(this));this._slider.on("change",this.setCurrentTime.bind(this));
this._slider.on("release",function(){if(this._suspendManagedEventsWhileScrubbing){this.videoView.play();
this._suspendManagedEventsWhileScrubbing=false;this.videoView.setMuted(this._storedVideoMuting)
}setTimeout(function(){this.videoView.trigger("acv-scrub-end")}.bind(this),1)}.bind(this));
this.updateState()}k.prototype=new i();var h=k.prototype;h.destroy=function(){this._buffer.destroy();
this._slider.off();i.prototype.destroy.call(this)};h.updateState=function(){if(this._slider._model.max===0){var l=this.videoView.getDuration();
this._slider.setMax((typeof l==="number"&&!isNaN(l))?l:0)}var m=this.videoView.getCurrentTime();
this._slider.setValue((typeof m==="number"&&!isNaN(m))?m:0,true)};h.setCurrentTime=function(l){this.videoView.setCurrentTime(l)
};a.exports=k},{"../buttons/Button":124,"./Buffer":135,"ac-base":false,"ac-slider":90}],137:[function(d,f,c){var h=d("ac-base").Element;
var a=d("../buttons/Button");var g=d("ac-slider").Slider;var i;function b(k,j){a.apply(this,arguments);
this.node=k;this.inputRangeNode=h.select(".acv-volumeslider-inputrange",this.node);
this.videoView=j;this._slider=new g(this.inputRangeNode,{skin:"ac-media-volume",min:0,max:1,step:0.1,value:this.videoView.getVolume(),label:"volume"});
this.on("acv-volumechange",this.updateState.bind(this));this.once("acv-canplay",this.updateState.bind(this));
this._slider.on("change",this.setVolume.bind(this));this.updateState()}i=b.prototype=new a();
i.destroy=function(){this._slider.off();a.prototype.destroy.call(this)};i.updateState=function(){this._slider.setValue(this.videoView.getVolume())
};i.setVolume=function(j){this.videoView.setVolume(j)};f.exports=b},{"../buttons/Button":124,"ac-base":false,"ac-slider":90}],138:[function(d,f,c){var b=d("./TimeText");
function a(i,h){void (i,h);b.apply(this,arguments);this.on("acv-updatetime",this.timeUpdate.bind(this))
}var g=a.prototype=new b();g.timeUpdate=function(i){var h=this._formatTime(Math.floor(i.current));
this.update(h)};f.exports=a},{"./TimeText":141}],139:[function(c,d,b){var a=c("./TimeText");
function g(i,h){void (i,h);a.apply(this,arguments);this.on("acv-updatetime",this.timeUpdate.bind(this))
}var f=g.prototype=new a();f.timeUpdate=function(i){var h=Math.floor(i.current)-Math.floor(i.duration);
h=this._formatTime(h);this.update(h)};d.exports=g},{"./TimeText":141}],140:[function(c,d,a){var b=c("../ControlElement");
function g(i,h){void (i,h);b.apply(this,arguments);this.active=false}var f=g.prototype=new b();
f.update=function(h){if(this.text!==h){this.node.innerHTML=h;this.text=h}};d.exports=g
},{"../ControlElement":121}],141:[function(f,b,g){var d=f("./Text");var i=f("ac-base").log;
var a=function(m,l,k){if(!l){return m}k=k||/{([^{}]*)}/g;return m.replace(k,function(o,n){var p=l[n];
return typeof p==="string"||typeof p==="number"?p:o})};var c=function(l,k){if(l<10){l=String(l);
while(l.length<k){l="0"+l}}return l};function j(l,k){void (l,k);d.apply(this,arguments);
this.formatString="{PN}{minutes}:{seconds}";this.videoView=k}var h=j.prototype=new d();
h.splitTime=function(n,k){k=k||function(o){return o};var m={negativeModifier:"",minutes:0,seconds:0};
if(isNaN(n)){i("TimeText.splitTime: parameter was not a number: "+n);return m}m.negativeModifier=(n<0)?"-":"";
n=Math.abs(n);m.minutes=Math.floor(n/60);m.seconds=(n%60);for(var l in m){if(typeof m[l]!=="number"){continue
}m[l]=k(m[l])}return m};h.setFormatString=function(k){this.formatString=k};h.setFormatFunction=function(k){this.formatFunction=k
};h._formatTime=function(m,k){if(isNaN(m)){return"00:00"}k=k||2;m=this.splitTime(Math.floor(m),function(n){return c(n,k)
});var l=a(this.formatString,{PN:m.negativeModifier,minutes:m.minutes,seconds:m.seconds});
return l};b.exports=j},{"./Text":140,"ac-base":false}],142:[function(c,b,i){var k=c("../lib/SharedUtils");
var m=c("../lib/SharedUtils").getSetPair;var h=c("../lib/browserString");var l=c("ac-deferred").Deferred;
var d=c("ac-base").Object;var g=c("../version");var a={storeOutcomesOn:["pass","fail"],failOnTimeout:5000,deferTimeoutCounter:false};
function f(p,o){this.id=o.id;this.type="FeatureTypeError";this.message=p||"";this.data=o||null
}f.prototype=Error.prototype;function n(s,r,o,q){o=o||{};this.deferred=new l();
this.promise=this.deferred.promise();this.data={id:s,status:"initialized",testOutcome:null};
for(var p in a){this.data[p]=(typeof o[p]!=="undefined")?o[p]:a[p]}this.initialData=d.clone(this.data);
this.cleanup=q.bind(this)||function(){};this.testProcedure=r.bind(this)}var j=n.prototype;
j.run=function(){if(this.data.status!=="complete"){this.data.status="running";var p=this._getOutcome();
if(p){this.data.outcomeSource="localStorage";this._setOutcome(p);switch(p){case"pass":this.pass();
break;case"fail":this.fail(new Error("A failed test result was retrieved from local storage"));
break}}else{this.data.outcomeSource="testProcedure";if(!this.data.deferTimeoutCounter){this.startFailureTimer()
}try{this.testProcedure()}catch(o){this._setOutcome("fail");this._fulfill("reject",new f(o.message,this.data,this.id))
}}}return this.promise};j.startFailureTimer=function(){if(this.data.failOnTimeout>0){this.failureTimer=setTimeout(function(){this.fail(new Error("The test timed out after "+this.data.failOnTimeout+"ms"))
}.bind(this),this.data.failOnTimeout)}};j.pass=function(o){if(this.data.status!=="complete"){this._setOutcome("pass",o);
this._fulfill("resolve",this.data)}};j.fail=function(o){this._setOutcome("fail");
this._fulfill("reject",new f(o.message,this.data,this.id))};j.reset=function(){this.deferred=new l();
this.promise=this.deferred.promise();k.clearPair(this.data.id);this.data=d.clone(this.initialData)
};j._setOutcome=function(p,q){q=q||{};for(var o in q){this.data[o]=q[o]}this.data.testOutcome=p;
if(typeof p==="string"&&new RegExp(p).test(this.data.storeOutcomesOn.join(" "))){m(this.data.id,p)
}return this.data.testOutcome};j._getOutcome=function(){return m(this.data.id)};
j._fulfill=function(p,o){if(this.data.status!=="complete"){clearTimeout(this.failureTimer);
this.data.status="complete";this.deferred[p](o);if(this.cleanup){this.cleanup()
}}};b.exports=n},{"../lib/SharedUtils":149,"../lib/browserString":151,"../version":166,"ac-base":false}],143:[function(d,f,b){var a=d("ac-base").Environment;
var c=d("../FeatureTest");f.exports=new c("h264",(function(){if(a.Browser.name==="Chrome"&&!a.Feature.touchAvailable()){return function(){this.fail(new Error("Desktop Chrome gets quicktime"))
}}else{if(a.Browser.name==="IE"){return function(){this.fail(new Error("IE fail"))
}}}return d("../videoTestProcedure")(d("../../profiles/definitions").h264)}()),{storeOutcomesOn:["pass"]},d("../videoCleanupProcedure"))
},{"../../profiles/definitions":159,"../FeatureTest":142,"../videoCleanupProcedure":146,"../videoTestProcedure":147,"ac-base":false}],144:[function(d,f,b){var c=d("../FeatureTest");
var a=d("ac-base").Environment;f.exports=new c("hls",(function(){if(a.Browser.name==="Chrome"){return function(){this.fail(new Error("Chrome fail"))
}}else{if(a.Browser.name==="IE"){return function(){this.fail(new Error("IE fail"))
}}else{if(a.Browser.os==="Android"){return function(){this.fail(new Error('Android "technically" passes the HLS feature test, but it\'s implmementation is unacceptably buggy'))
}}else{if(a.Browser.os==="iOS"&&a.Browser.version<7){return function(){this.fail(new Error("iOS 6 does not support WebVTT with HLS videos"))
}}else{if(a.Browser.name==="Safari Mobile"&&a.Feature.isTablet()===false){return function(){this.fail(new Error("For the moment, we are not supporting HLS on iphone."))
}}else{return d("../videoTestProcedure")(d("../../profiles/definitions").hls)}}}}}}()),{storeOutcomesOn:["pass"]},d("../videoCleanupProcedure"))
},{"../../profiles/definitions":159,"../FeatureTest":142,"../videoCleanupProcedure":146,"../videoTestProcedure":147,"ac-base":false}],145:[function(d,g,b){var c=d("../FeatureTest");
var i=d("../../lib/SharedUtils");var h=d("../../profiles/definitions");var f=d("ac-video-templates");
var a=["qt_loadedfirstframe","qt_canplay","qt_canplaythrough","qt_durationchange","qt_load","qt_ended","qt_play","qt_progress","qt_timechanged"];
g.exports=new c("quicktime",function(){this.data.quicktimePluginVersion=i.getQuicktimePlugin();
if(!this.data.quicktimePluginVersion){this.fail(new Error("quicktime plugin not detected"))
}this.data.qtTemplate=h.quicktime.useTemplate;this.data.qtModel={source:h.quicktime.testFile,type:h.quicktime.videoType,values:{width:8,height:8,autopplay:false,id:"ac-video-qt-test-movie",eventId:"ac-video-qt-test-event"}};
i.getElementAsync("body").then(function(j){f.render("elementObjectEvent",this.data.qtModel,function(k,l){f.render(this.data.qtTemplate,this.data.qtModel,function(m,n){this.data.eventEle=(this.data.qtTemplate==="elementObject")?i.createElementFromMarkup(l,document.getElementsByTagName("head")[0]):null;
this.data.pluginEle=i.createElementFromMarkup(n,j);i.waitForQuickTimeToLoad(this.data.pluginEle).then(function(){this.startFailureTimer();
a.forEach(function(p){i.addEventListener(this.data.pluginEle,p,function(){this.pass()
}.bind(this))}.bind(this));try{this.data.pluginEle.Play()}catch(o){this.fail(o)
}}.bind(this))}.bind(this))}.bind(this))}.bind(this))},{storeOutcomesOn:["pass"],failOnTimeout:4000,deferTimeoutCounter:true},function(){setTimeout(function(){try{if(this.data.pluginEle&&this.data.pluginEle.parentNode){this.data.pluginEle.parentNode.removeChild(this.data.pluginEle)
}if(this.data.eventEle&&this.data.eventEle.parentNode){this.data.eventEle.parentNode.removeChild(this.data.eventEle)
}}catch(j){}}.bind(this),1)})},{"../../lib/SharedUtils":149,"../../profiles/definitions":159,"../FeatureTest":142,"ac-video-templates":112}],146:[function(b,c,a){c.exports=function(){if(this.data.videoEle&&this.data.videoEle.parentNode){this.data.videoEle.parentNode.removeChild(this.data.videoEle)
}}},{}],147:[function(c,d,b){var a=c("ac-base").Environment;var f=c("ac-base").Element;
var g=c("../lib/SharedUtils");d.exports=function(h){return function(){this.data.videoEle=document.createElement("video");
this.data.videoEle.id="ac-video-html5-test-movie";this.data.sourceEle=this.data.videoEle.appendChild(document.createElement("source"));
this.data.sourceEle.setAttribute("type",h.videoType);this.data.sourceEle.setAttribute("src",h.testFile);
if(h.name==="h264"){this.data.webVttEle=this.data.videoEle.appendChild(document.createElement("track"));
this.data.webVttEle.setAttribute("kind","captions");this.data.webVttEle.setAttribute("srcLang","en");
this.data.webVttEle.setAttribute("label","English WebVTT");this.data.webVttEle.setAttribute("default","");
this.data.webVttEle.setAttribute("src",h.vttFile)}var i=this.data.videoEle.canPlayType(h.videoType);
if(!i||i===""){this.fail(new Error('the browser reported that it cannot play videos with type: "'+h.videoType+'"'))
}if(/^(iOS|Android)$/.test(a.Browser.os)){this.pass();return}f.setStyle(this.data.videoEle,{opacity:0.1,width:"4px",height:"4px",position:"absolute",bottom:0,right:0});
this.data.videoEle.volume=0;this.data.videoEle.muted=true;g.getElementAsync("body").then(function(j){this.data.videoEle=j.appendChild(this.data.videoEle);
g.addEventListener(this.data.videoEle,"error",function(l){var k=(l&&l.message)?l.message:"unknown";
this.fail(new Error("video element triggered an error event: "+k))}.bind(this),false);
g.addEventListener(this.data.videoEle,"loadedmetadata",function(){this.data.videoEle.volume=0;
this.data.videoEle.muted=true;g.addEventListener(this.data.videoEle,"timeupdate",function(){setTimeout(function(){this.pass()
}.bind(this),1)}.bind(this),false)}.bind(this));this.data.videoEle.play()}.bind(this))
}}},{"../lib/SharedUtils":149,"ac-base":false}],148:[function(b,c,a){var d=b("./SharedUtils");
var g=b("ac-dom-emitter").DOMEmitter;function f(){g.apply(this,arguments)}f.prototype=new g();
f.prototype._addEventListener=function(h){if(this.el.nodeName==="OBJECT"&&this.el.attachEvent&&this.el.addEventListener&&/^qt_/.test(h)){this._bindings[h]=this._onListenerEvent.bind(this,h);
d.addEventListener(this.el,h,this._bindings[h])}else{g.prototype._addEventListener.apply(this,arguments)
}};c.exports=f},{"./SharedUtils":149,"ac-dom-emitter":68}],149:[function(d,g,b){var c=d("ac-deferred").Deferred;
var a=d("ac-base").Environment;var f=d("ac-video-templates");var h={};h.hasLocalStorage=function(){try{var i=Math.random().toString().split(".").join("");
localStorage.setItem("acv-localStorage-test",i);return(localStorage.getItem("acv-localStorage-test")===i)
}catch(j){return false}};h.uuid=(function(){function i(){return Math.floor((1+Math.random())*65536).toString(16).substring(1)
}return function(){return i()+i()+"-"+i()+"-"+i()+"-"+i()+"-"+i()+i()+i()}}());
h.usesFullScreen=function(){return"cancelFullScreen" in document&&!h.useNative()
};h.NodeListToArray=function(k){var m;var l=k.length;var j=[];for(m=0;m!==l;m++){j.push(k[m])
}return j};h.getElementAsync=function(i){var j=new c();var l;var k=function(){var m=document.getElementsByTagName(i);
if(m.length>0&&m[0]){clearTimeout(l);j.resolve(m[0])}else{l=setTimeout(k,10)}};
k();return j.promise()};h.createElementFromMarkup=function(k,i){var j=document.createElement("div");
j.innerHTML=k;k=j.childNodes[0];return(i)?i.appendChild(k):k};h.removeElement=function(i){if(i&&i.parentNode){i.parentNode.removeChild(i)
}};h.addEventListener=function(l,j,k,i){if(l.addEventListener&&!(l.nodeName==="OBJECT"&&l.attachEvent&&/^qt_/.test(j))){l.addEventListener(j,k,i)
}else{if(l.attachEvent){l.attachEvent("on"+j,k)}else{l["on"+j]=k}}return l};h.onMovieReady=function(i,j){i=(typeof i==="string")?document.getElementById(i):i;
switch(i.nodeName.toUpperCase()){case"OBJECT":h.waitForQuickTimeToLoad(i).then(j);
break;default:j();break}};h.waitForQuickTimeToLoad=function(j,k){k=k||new c();var m;
var i;var n;var l=(a.Browser.name==="IE");try{m=j.GetPluginStatus()}catch(o){}try{j.GetVolume();
i=true}catch(o){i=false}if(j&&typeof m==="string"&&/(Complete)/i.test(m)&&i){if(l){j.SetResetPropertiesOnReload(false);
n=j.GetURL();j.autoplay=true;n+=(n.indexOf("?")!==-1)?"&rnd="+Math.random():"?rnd="+Math.random();
j.SetURL(n)}setTimeout(function(){k.resolve(true)},1)}else{setTimeout(function(){h.waitForQuickTimeToLoad(j,k)
},5)}return k.promise()};h.renderQuickTimeMarkup=function(k){var i=new c();var l=(a.Browser.name==="IE")?"elementObject":"elementEmbed";
var j={source:k,type:"video/quicktime",values:{width:8,height:8,id:"ac-video-qt-test-movie",eventId:"ac-video-qt-test-event"}};
h.getElementAsync("body").then(function(m){var n=function(){f.render(l,j,function(o,p){i.resolve(h.createElementFromMarkup(p,m))
})};if(l==="elementObject"){f.render("elementObjectEvent",j,function(o,p){h.createElementFromMarkup(p,document.getElementsByTagName("head")[0]);
n()})}else{n()}});return i.promise()};h.clearPair=function(i,k){localStorage.removeItem(i);
if(h.hasLocalStorage()&&!k){localStorage.removeItem(i)}else{var j=[];document.cookie.split("; ").forEach(function(l){var o=l.split("=");
var n=o[0];var m=unescape(o[1]);if(n!==i){j.push(n+"="+escape(m))}});document.cookie=j.join("; ")
}};h.getSetPair=function(i,k,l){if(h.hasLocalStorage()&&!l){if(typeof k!=="undefined"){localStorage.setItem(i,k)
}k=localStorage.getItem(i)}else{var j=[];document.cookie.split("; ").forEach(function(m){var p=m.split("=");
var o=p[0];var n=unescape(p[1]);if(o===i){if(k){n=k}j.push(o+"="+escape(n))}k=n
});if(i&&k){document.cookie=j.join("; ")}}return k};h.getQuicktimePlugin=function(){var m;
var n=/(\d+\.){2}(\d+){1}$/;if(navigator.plugins&&navigator.plugins[0]){for(var l=0;
l<navigator.plugins.length;l++){var j=(/QuickTime/i.test(navigator.plugins[l].name)&&typeof m==="undefined");
if(j){if(navigator.plugins[l].version){m=navigator.plugins[l].version}else{if(n.test(navigator.plugins[l].name)){m=navigator.plugins[l].name.match(n);
m=m[0]||undefined}}}}}else{var k=["QuickTime.QuickTime","QuickTimeCheckObject.QuickTimeCheck.1"];
k.forEach(function(o){var p;var i;try{p=new ActiveXObject(o);i=(typeof p==="object"&&typeof p.QuickTimeVersion!=="undefined"&&typeof m==="undefined");
if(i){m=p.QuickTimeVersion}}catch(q){}})}return m};h.getPackageLocation=function(k,n){try{var o=new RegExp("/"+k+"\\.?(debug|)\\.js$");
var l=new RegExp(".+"+n);var i=h.NodeListToArray(document.getElementsByTagName("script"));
var j=i.filter(function(q){return q.src&&o.test(q.src)}).pop().src;return(j)?((n)?j.match(l)[0]:j):null
}catch(m){console.log("Failed because regular expression do not work correctly");
console.log("var foo = new RegExp(/foo/);");var p=new RegExp(/foo/);console.log("Variable foo should be an instance of RegExp equal to /foo/");
console.log("Instead variable foo equals:",p);console.log(m)}return null};h.useNative=function(){return/^(iOS|Android)$/.test(a.Browser.os)
};h.getVTTcaptionsTracks=function(i){if(i.textTracks){var j=h.NodeListToArray(i.textTracks);
if(j[0]){return j}}return null};g.exports=h},{"ac-base":false,"ac-video-templates":112}],150:[function(c,d,b){var f=c("ac-base").Element;
var g=c("ac-base").EasingFunctions;var a=function(h,i,j){this.element=h;this.change=i;
this.begin=this._getCurrentStyles();this.duration=j;this.startTime=new Date().getTime()
};a.factory=function(i,j){if(!this.element){throw"Animate must be mixed into an an object with element property"
}var h=new a(this.element,i,j);h._initialize();return h};a.prototype={_easingFunction:"easeInOutQuart",_getCurrentStyles:function(){var h={};
for(var i in this.change){h[i]=f.getStyle(this.element,i)}return h},_getRatio:function(j){var h=this._easingFunction;
var i=j-this.startTime;var k=this.duration;var l=g[h];return l(i,0,1,k)},_getValue:function(j){var i=this._getRatio(this.currentTime);
var k=this.change[j];var h=this.begin[j];return((k-h)*i)+h},_initialize:function(){this._tick(this._getRatio())
},_style:function(i){var h=this._getValue(i);if(i==="opacity"){this.element.style.filter="alpha(opacity="+h*100+")"
}this.element.style[i]=h},_tick:function(){this.currentTime=new Date().getTime();
if(this.currentTime<this.startTime+this.duration){requestAnimationFrame(this._tick.bind(this))
}for(var h in this.change){this._style(h)}}};d.exports=a},{"ac-base":false}],151:[function(b,c,a){c.exports=(function(){var f="";
if(navigator.plugins&&navigator.plugins[0]){for(var h=0,d=navigator.plugins.length;
h<d;h++){if(/QuickTime/i.test(navigator.plugins[h].name)){f=f+[(navigator.plugins[h].name||"no plugin name"),(navigator.plugins[h].version||"no plugin version"),(navigator.plugins[h].description||"no plugin description")].join(", ")
}}}else{var g=["QuickTime.QuickTime","QuickTimeCheckObject.QuickTimeCheck.1"];g.forEach(function(i){var j;
f=f+(i+"ActiveXObject: ");try{j=new ActiveXObject(i);if(typeof j==="object"){f=f+("created successfully, ");
if(j.QuickTimeVersion){f=f+("version: "+j.QuickTimeVersion+".")}else{f=f+("no version found.")
}}}catch(k){f=f+("failed to create.")}})}f=(f.length>0)?f:"Quicktime Not Found";
return[navigator.userAgent||"No User Agent",navigator.appVersion||"No App Version",f||"No Plugin Info"].join("; ")
})()},{}],152:[function(d,f,a){var c=d("ac-base").Object;var h=d("ac-base").Ajax;
var b=d("ac-deferred").Deferred;function i(){this.translationDictionary={"bg-BG":"bg-BG.json","cs-CZ":"cs-CZ.json","el-GR":"el-GR.json","de-AT":"de-AT.json","de-CH":"de-CH.json","de-DE":"de-DE.json","de-LI":"de-LI.json","da-DK":"da-DK.json",en:"en.json","en-US":"en-US.json","en-AP":"en-AP.json","en-CA":"en-CA.json","en-GB":"en-GB.json","en-HK":"en-HK.json","en-IE":"en-IE.json","en-IN":"en-IN.json","en-KR":"en-KR.json","en-AU":"en-AU.json","en-NZ":"en-NZ.json","en-SG":"en-SG.json","en-ZA":"en-ZA.json",es:"es.json","es-LA":"es-LA.json","es-MX":"es-MX.json","es-ES":"es-ES.json","et-EE":"et-EE.json","fi-FI":"fi-FI.json",fr:"fr.json","fr-BE":"fr-BE.json","fr-CA":"fr-CA.json","fr-CH":"fr-CH.json","fr-FR":"fr-FR.json","hr-HR":"hr-HR.json","hu-HU":"hu-HU.json","it-IT":"it-IT.json",ja:"ja.json","ja-JP":"ja-JP.json","ko-KR":"ko-KR.json","lt-LT":"lt-LT.json","lv-LV":"lv-LV.json","nl-BE":"nl-BE.json","nl-NL":"nl-NL.json","no-NO":"no-NO.json","pl-PL":"pl-PL.json",pt:"pt.json","pt-BR":"pt-BR.json","pt-PT":"pt-PT.json","ro-RO":"ro-RO.json","ru-RU":"ru-RU.json","sk-SK":"sk-SK.json","sv-SE":"sv-SE.json","tr-TR":"tr-TR.json",zh:"zh.json","zh-CN":"zh-CN.json","zh-HK":"zh-HK.json","zh-TW":"zh-TW.json"};
this.defaultText={play:"Play",pause:"Pause",fastreverse:"Fast Reverse",fastforward:"Fast Forward",mutevolume:"Mute Volume",fullvolume:"Full Volume",captionscontrol:"Closed Captions",captionsturnedon:"Closed Captions On",captionsturnedoff:"Closed Captions Off",sizescontrol:"Video Size",downloadcontrol:"Download Video",small:"Small",medium:"Medium",large:"Large",hd:"HD",ipod:"iPod/iPhone",mb:"MB",gb:"GB",tb:"TB",downloadquicktimetitle:"Get QuickTime.",downloadquicktimetext:"Download QuickTime to view this video. QuickTime is free for Mac + PC.",downloadquicktimebutton:"Download",downloadquicktimeurl:"https://www.apple.com/quicktime/download/",elapsed:"elapsed",remaining:"remaining"}
}var g=i.prototype;g.getLocalizedText=function(){this.getTranslation();this.responseDeferred=new b();
var j="/global/ac_media_player/scripts/ac_media_languages/"+this.languageFile;new h.AjaxRequest(j,{onSuccess:function(m){var k=this.defaultText;
c.extend(k,m.responseJSON());for(var l in k){if(k.hasOwnProperty(l)){k[l]=k[l].replace("<br />"," ");
k[l]=k[l].replace("<br />"," ");k[l]=k[l].replace("<br/>"," ")}}this.responseDeferred.resolve(k)
}.bind(this),onFailure:function(){this.responseDeferred.reject()}.bind(this),onError:function(){this.responseDeferred.reject()
}.bind(this)});return this.responseDeferred};g.getTranslation=function(){this.languageAttribute=document.body.parentNode.getAttribute("lang");
this.languageFileName=this.getLangFromAttr(this.languageAttribute);this.languageFile=this.langDictionary(this.languageFileName)
};g.getLangFromAttr=function(j){if(!j){return"en-US"}switch(j.toLowerCase()){case"bg-bg":return"bg-BG";
case"cs-cz":return"cs-CZ";case"de-at":return"de-AT";case"de-ch":return"de-CH";case"de-de":return"de-DE";
case"de-li":return"de-LI";case"da-dk":return"da-DK";case"el-gr":return"el-GR";case"en-us":return"en-US";
case"en-ca":return"en-CA";case"en-ap":return"en-AP";case"en-au":return"en-AU";case"en-gb":return"en-GB";
case"en-hk":return"en-HK";case"en-ie":return"en-IE";case"en-in":return"en-IN";case"en-nz":return"en-NZ";
case"en-sg":return"en-SG";case"en-kr":return"en-KR";case"en-za":return"en-ZA";case"et-ee":return"et-EE";
case"es-es":return"es-ES";case"es-419":case"es-la":return"es-LA";case"es-mx":return"es-MX";
case"fi-fi":return"fi-FI";case"fr-be":return"fr-BE";case"fr-ca":return"fr-CA";case"fr-ch":return"fr-CH";
case"fr-fr":return"fr-FR";case"hr-hr":return"hr-HR";case"hu-hu":return"hu-HU";case"it-it":return"it-IT";
case"ja-jp":return"ja-JP";case"ko-kr":return"ko-KR";case"lt-lt":return"lt-LT";case"lv-lv":return"lv-LV";
case"nl-be":return"nl-BE";case"nl-nl":return"nl-NL";case"no-no":return"no-NO";case"pl-pl":return"pl-PL";
case"pt":case"pt-br":return"pt-BR";case"pt-pt":return"pt-PT";case"ro-ro":return"ro-RO";
case"ru-ru":return"ru-RU";case"sv-se":return"sv-SE";case"sk-sk":return"sk-SK";case"tr-tr":return"tr-TR";
case"zh-cn":return"zh-CN";case"zh-hk":return"zh-HK";case"zh-tw":return"zh-TW";default:return j
}};g.langDictionary=function(j){var l=j.toLowerCase().split("-")[0],k=this.translationDictionary[j]||false;
if(!k){k=this.translationDictionary[l]}if(!k){k=this.translationDictionary.en}return k
};f.exports=i},{"ac-base":false}],153:[function(b,c,a){var d=function(){};d.prototype={destroy:function(){}};
c.exports=d},{}],154:[function(b,c,a){if(document.createEvent){try{new window.CustomEvent("click")
}catch(d){window.CustomEvent=(function(){function f(h,i){i=i||{bubbles:false,cancelable:false,detail:undefined};
var g=document.createEvent("CustomEvent");g.initCustomEvent(h,i.bubbles,i.cancelable,i.detail);
return g}f.prototype=window.Event.prototype;return f}())}}},{}],155:[function(b,c,a){function f(g){this._ranges=g;
this.length=g.length}var d=f.prototype;d.start=function(g){return this._ranges[g][0]
};d.end=function(g){return this._ranges[g][1]};d.toString=function(){return"[object TimeRanges]"
};c.exports=f},{}],156:[function(b,c,a){var d=b("ac-dom-events");if("webkitIsFullScreen" in document){Document.prototype.cancelFullScreen=Document.prototype.webkitCancelFullScreen;
HTMLElement.prototype.requestFullScreen=HTMLElement.prototype.webkitRequestFullScreen;
document.addEventListener("webkitfullscreenchange",d.dispatchEvent.bind(null,document,"fullscreenchange"));
document.__defineGetter__("isFullScreen",function(){return document.webkitIsFullScreen
});document.__defineGetter__("fullScreen",function(){return document.webkitIsFullScreen
})}else{if("mozFullScreen" in document){Document.prototype.cancelFullScreen=document.mozCancelFullScreen;
HTMLElement.prototype.requestFullScreen=HTMLElement.prototype.mozRequestFullScreen;
document.addEventListener("mozfullscreenchange",d.dispatchEvent.bind(null,document,"fullscreenchange"));
document.__defineGetter__("isFullScreen",function(){return document.mozFullScreen
});document.__defineGetter__("fullScreen",function(){return document.mozFullScreen
})}}},{"ac-dom-events":70}],157:[function(c,d,a){var b=function(f,g){var h=f.getAttribute(g);
if(h===null){return false}else{if(h===""){return false}}return true};d.exports=b
},{}],158:[function(c,b,g){var j=c("ac-deferred").Deferred;var a=c("./definitions");
var f=c("../lib/browserString");var d=c("../version");var k=c("../lib/SharedUtils").getSetPair;
function i(l){l=l||{};l.devMode=(typeof l.devMode!=="undefined")?l.devMode:false;
var m;for(m in l){if(l.hasOwnProperty(m)){this[m]=l[m]}}this.options=l}var h=i.prototype;
h.get=function(){var o=new j();var m=[c("../featureTests/tests/hasHLS"),c("../featureTests/tests/hasH264"),c("../featureTests/tests/hasQuicktime")];
var r=this.options.devMode;var s={videoTemplate:"",supportedProfiles:[]};var p=-1;
var q=function(t){if(r){try{console.log("test success ("+t.id+"):",t)}catch(u){}}s.supportedProfiles.push(a[t.id]);
if(t.id!=="quicktime"||s.videoTemplate===""){s.videoTemplate=a[t.id].useTemplate
}n()};var l=function(t){if(r){try{console.log("test failure ("+t.id+")."+((t.message)?" Error Message: "+t.message+".":""))
}catch(u){}}n()};var n=function(){p++;if(m[p]){var v=m[p];if(s.videoTemplate===""||v.data.id!=="quicktime"){v.run().then(q,l)
}else{n()}}else{if(r){var t=[];s.supportedProfiles.forEach(function(w){t.push(w.name)
});try{console.log("Video Recommendation:",'{ videoTemplate: "'+s.videoTemplate+'"}, supportedProfiles: ['+t.join(", ")+"]")
}catch(u){}}k("browserid",f);k("acVideoVersion",d);o.resolve(s)}};if(!this.storedValuesAreStillValid){m.forEach(function(t){t.reset()
})}n();return o.promise()};h.storedValuesAreStillValid=(f===k("browserid")&&d===k("acVideoVersion"));
b.exports=i},{"../featureTests/tests/hasH264":143,"../featureTests/tests/hasHLS":144,"../featureTests/tests/hasQuicktime":145,"../lib/SharedUtils":149,"../lib/browserString":151,"../version":166,"./definitions":159}],159:[function(g,h,f){var a="m";
var d="v";var b=g("ac-base").Environment;var i=g("../version").split(".").slice(0,2).join(".")+".0";
var c=window.ac_video_test_directory||"//"+((document.location.protocol==="https:")?"www":"images")+".apple.com/media/ac/ac-video/"+i+"/";
h.exports={hls:{name:"hls",useTemplate:"elementVideo",videoType:"application/"+d+"nd.apple."+a+"pegURL",fileExtension:a+"3u8",testFile:c+"test_playback."+a+"3u8",vttFile:c+"test_playback-captions."+d+"tt",sizeRelevant:false},h264:{name:"h264",useTemplate:"elementVideo",videoType:"video/"+a+"p4; codecs=a"+d+"c1.42E01E,"+a+"p4a.40.2",fileExtension:a+"4v",testFile:c+"test_playback_cellular."+a+"4v",vttFile:c+"test_playback-captions."+d+"tt",sizeRelevant:true},quicktime:{name:"quicktime",useTemplate:(b.Browser.name==="IE")?"elementObject":"elementEmbed",videoType:"video/quicktime",fileExtension:a+"4v",testFile:c+"test_playback_cellular."+a+"4v",sizeRelevant:true}}
},{"../version":166,"ac-base":false}],160:[function(b,c,a){c.exports={bindingType:"on",triggerEvent:"canplay",callback:function(){this._qtModel.readyState=3
}}},{}],161:[function(b,c,a){c.exports={bindingType:"on",triggerEvent:"canplaythrough",callback:function(){this._qtModel.readyState=4
}}},{}],162:[function(b,c,a){c.exports={bindingType:"once",triggerEvent:"ended",callback:function(){clearInterval(this._qtModel.timeUpdateInterval);
this._qtModel.paused=true;this._qtModel.ended=true}}},{}],163:[function(b,c,a){c.exports={bindingType:"on",triggerEvent:"error",callback:function(){this._qtModel.error=true;
this._qtModel.networkState=0}}},{}],164:[function(b,c,a){c.exports={bindingType:"on",triggerEvent:"loadeddata",callback:function(){this._qtModel.readyState=2
}}},{}],165:[function(b,c,a){c.exports={bindingType:"on",triggerEvent:"loadedmetadata",callback:function(){this._qtModel.readyState=1;
var d=this.element.GetRectangle().split(",");this._qtModel.videoDimensions[0]=d[2];
this._qtModel.videoDimensions[1]=d[3]}}},{}],166:[function(b,c,a){c.exports="0.1.4"
},{}],167:[function(c,d,a){var g=c("./View");function b(h){g.apply(this,arguments);
this.element=h}b.prototype=new g();var f=b.prototype;f.updateBufferProgress=function(i){var h=this.element.offsetWidth;
this.element.style.width=i+"%"};d.exports=b},{"./View":171}],168:[function(f,b,g){var k=f("../lib/SharedUtils");
var h=f("ac-base").Environment;var l=f("./VideoView");var d=(h.Browser.name==="IE");
var j=f("ac-vatman");var a=(h.Browser.name==="Safari"&&h.Browser.version<7);function c(m){l.apply(this,arguments);
if(typeof m.captionsTrack!=="string"&&m.captionsTrack!==false){m.captionsTrack=j.vatClient.getVTTSource(m.movSrc)
}if(m.captionsTrack===false){m.values.disablecaptionscontrol=true}if(h.Browser.name==="Safari"){m.captionsTrack=false
}this.initializeTemplate(m)}var i=c.prototype=new l();i._captionsEnabledMode=d?2:"showing";
i._captionsDisabledMode=d?1:a?"disabled":"hidden";i._getCaptionsMode=function(){return this.captionsEnabled?this._captionsEnabledMode:this._captionsDisabledMode
};i._toggleCaptionsIteratorCallback=function(m){var o=this._getCaptionsMode();var n;
if(o===this._captionsDisabledMode){n=this.getCaptionsTracks();n.forEach(function(p){p.mode=o
})}else{m.mode=o}};i.getCaptionsTracks=function(){return k.NodeListToArray(this.element.textTracks)
};i.afterRender=function(){l.prototype.afterRender.apply(this,arguments);this.finishSetup()
};i.registerHTMLMediaEvents=function(){l.prototype.registerHTMLMediaEvents.call(this);
this.mediaEvents.forEach(function(m){this._bindings.on(m,this.triggerBinding.bind(this,"acv-"+m))
},this)};i.play=function(){this.element.play()};i.pause=function(){this.element.pause()
};i.getPaused=function(){return this.element.paused};i.setMuted=function(m){this.element.muted=m;
this.muted=m;this.trigger("acv-volumechange")};i.getMuted=function(){return this.element.muted
};i.getEnded=function(){return this.element.ended};i.setVolume=function(m){if(typeof m==="number"){this.element.volume=m;
if(this.element.muted){this.setMuted(false)}}};i.getVolume=function(){return this.element.volume
};i.setCurrentTime=function(m){this.element.currentTime=m};i.getCurrentTime=function(){return this.element.currentTime
};i.setPlaybackRate=function(m){this.element.playbackRate=m};i.getPlaybackRate=function(){return this.element.playbackRate
};i.getDuration=function(){return this.element.duration};i.setAutoplay=function(m){this.element.autoplay=m
};i.getAutoplay=function(){return this.element.autoplay};i.setLoop=function(m){this.element.loop=m
};i.getLoop=function(){return this.element.loop};i.getError=function(){return this.element.error
};i.getVideoWidth=function(){return this.element.videoWidth};i.getVideoHeight=function(){return this.element.videoHeight
};i.getWidth=function(){return this.element.width};i.getHeight=function(){return this.element.height
};i.getPoster=function(){return this.element.poster};i.getSrc=function(){return this.element.src
};i.getCurrentSrc=function(){return this.element.currentSrc};i.getNetworkState=function(){return this.element.networkState
};i.getReadyState=function(){return this.element.readyState};i.getControls=function(){return this.element.controls
};i.setControls=function(m){this.element.controls=m};i.getDefaultPlaybackRate=function(){return this.element.defaultPlaybackRate
};i.getSeekable=function(){return this.element.seekable};i.getDefaultMuted=function(){return this.element.defaultMuted
};i.getSeeking=function(){return this.element.seeking};i.getStartDate=function(){return this.element.startDate
};i.getPlayed=function(){return this.element.played};i.getBuffered=function(){return this.element.buffered
};b.exports=c},{"../lib/SharedUtils":149,"./VideoView":170,"ac-base":false,"ac-vatman":108}],169:[function(b,a,c){var l=b("./VideoView");
var f=b("../polyfills/TimeRanges");b("../polyfills/CustomEvent");var g=b("ac-base").Element;
var j=b("ac-deferred").Deferred;var k=b("ac-video-templates");var i=b("../lib/SharedUtils");
function h(m){l.apply(this,arguments);if(m.videoTemplate==="elementObject"){k.render("elementObjectEvent",m,function(n,o){i.createElementFromMarkup(o,document.getElementsByTagName("head")[0]);
this.initializeTemplate(m)}.bind(this))}else{this.initializeTemplate(m)}}var d=h.prototype=new l();
d.DOMEmitter=b("../lib/QuicktimeDomEmitter");d.timeUpdateFreq=250;d.destroy=function(){this.setTimeUpdateInterval(false);
this.setTimeUpdateInterval=function(){};this._bindings.trigger=function(){};this.trigger=function(){};
l.prototype.destroy.call(this)};d.initializeTemplate=function(m){this._qtModel={poster:m.values.poster||null,volume:1,muted:false,timeUpdateInterval:null,lastTimeCheck:null,ended:false,error:null,paused:true,videoDimensions:[null,null],defaultMuted:null,seeking:false,networkState:0,readyState:0};
l.prototype.initializeTemplate.apply(this,arguments)};d.getCaptionsTracks=function(){var p=[];
var m=this.element.GetTrackCount();for(var n=1;n<=m;n++){var o=this.element.GetTrackType(n);
if(o==="Subtitle"||o==="Closed Caption"){p.push({mode:(this.element.GetTrackEnabled(n))?"showing":"hidden",index:n})
}}return p};d._toggleCaptionsIteratorCallback=function(m){this.element.SetTrackEnabled(m.index,this.captionsEnabled)
};d.afterRender=function(){l.prototype.afterRender.apply(this,arguments);var m=new j();
i.onMovieReady(this.element,function(){this.finishSetup();m.resolve(this._bindings)
}.bind(this));return m.promise()};d.registerHTMLMediaEvents=function(){l.prototype.registerHTMLMediaEvents.call(this);
this.mediaEvents.forEach(function(m){var n=(m==="loadstart")?"qt_begin":"qt_"+m;
this._bindings.on(n,function(o){this.triggerBinding("acv-"+m,o)},this)}.bind(this),this);
this.shimEvents()};d.play=function(){if(!this._qtModel.paused){return}this.element.Play();
this._qtModel.paused=false;this.setTimeUpdateInterval(true)};d.pause=function(){if(this._qtModel.paused){return
}this.element.Stop();this._qtModel.paused=true;this.setTimeUpdateInterval(false)
};d.shimEvents=function(){var m=[b("../shims/quicktime/ended"),b("../shims/quicktime/error"),b("../shims/quicktime/loadedmetadata"),b("../shims/quicktime/loadeddata"),b("../shims/quicktime/canplay"),b("../shims/quicktime/canplaythrough")];
m.forEach(function(o){this._bindings[o.bindingType]("acv-"+o.triggerEvent,o.callback.bind(this))
},this);var n=g.select("param[name=volume]",this.element);this._qtModel.defaultMuted=(n&&(+n.value)===0)?true:false;
this.setTimeUpdateInterval(true)};d.timeUpdateInterval=false;d.setTimeUpdateInterval=function(n){if(n&&!this.timeUpdateInterval){var m=function(){if(this._qtModel&&this._qtModel.lastTimeCheck!==this.getCurrentTime()){this._qtModel.lastTimeCheck=this.getCurrentTime();
var o=this.getTrackingData();var p="timeupdate";var q=(typeof CustomEvent==="function")?new CustomEvent(p):document.createEventObject();
o.event=q;this._bindings.trigger("acv-timeupdate",o)}setTimeout(m.bind(this),this.timeUpdateFreq)
}.bind(this);m()}else{clearTimeout(this.timeUpdateInterval);this.timeUpdateInterval=false
}};d.getPaused=function(){return this._qtModel.paused};d.setMuted=function(m){this._qtModel.muted=m;
this._qtModel.volume=(m)?this.getVolume():this._qtModel.volume;this.element.SetVolume((m)?0:(this._qtModel.volume>0)?this._qtModel.volume*256:1);
this.trigger("acv-volumechange")};d.getMuted=function(){return this._qtModel.muted
};d.getEnded=function(){return this._qtModel.ended};d.setVolume=function(m){if(m!==this._qtModel.volume){this._qtModel.volume=m;
this.element.SetVolume(this._qtModel.volume*256);this._bindings.trigger("acv-volumechange")
}if(this.getMuted()){this.setMuted(false)}};d.getVolume=function(){try{return this._qtModel.volume
}catch(m){return null}};d.setCurrentTime=function(n){try{this.element.SetTime(n*this.element.GetTimeScale())
}catch(m){}};d.getCurrentTime=function(){try{return(this.element.GetTime()/this.element.GetTimeScale())
}catch(m){return null}};d.setPlaybackRate=function(m){this.element.SetRate(m)};
d.getPlaybackRate=function(){try{return this.element.GetRate()}catch(m){return null
}};d.getDuration=function(){try{return(this.element.GetDuration()/this.element.GetTimeScale())
}catch(m){return null}};d.setAutoplay=function(m){this.element.SetAutoPlay(m)};
d.getAutoplay=function(){return this.element.GetAutoPlay()};d.setLoop=function(m){this.element.SetIsLooping(m)
};d.getLoop=function(){return this.element.GetIsLooping()};d.getError=function(){return this._qtModel.error
};d.getVideoWidth=function(){return this._qtModel.videoDimensions[0]};d.getVideoHeight=function(){return this._qtModel.videoDimensions[1]
};d.getWidth=function(){return this.element.offsetWidth};d.getHeight=function(){return this.element.offsetHeight
};d.getPoster=function(){return this._qtModel.poster};d.getSrc=function(){return this.element.GetURL()
};d.getCurrentSrc=function(){return this.element.GetURL()};d.getNetworkState=function(){return this._qtModel.networkState
};d.getReadyState=function(){return this._qtModel.readyState};d.getControls=function(){return this._qtModel.values.controls
};d.setControls=function(m){return m};d.getDefaultPlaybackRate=function(){return 1
};d.getSeekable=function(){return this.getBuffered()};d.getDefaultMuted=function(){return this._qtModel.defaultMuted
};d.getSeeking=function(){return this._seeking};d.getStartDate=function(){return undefined
};d.getPlayed=function(){return this.playbackMonitor.getRanges()};d.getBuffered=function(){return(this._qtModel.readyState===3)?new f([[0,this.element.GetMaxTimeLoaded()/this.element.GetTimeScale()]]):null
};a.exports=h},{"../lib/QuicktimeDomEmitter":148,"../lib/SharedUtils":149,"../polyfills/CustomEvent":154,"../polyfills/TimeRanges":155,"../shims/quicktime/canplay":160,"../shims/quicktime/canplaythrough":161,"../shims/quicktime/ended":162,"../shims/quicktime/error":163,"../shims/quicktime/loadeddata":164,"../shims/quicktime/loadedmetadata":165,"./VideoView":170,"ac-base":false,"ac-video-templates":112}],170:[function(d,c,f){var o=d("ac-video-templates");
var l=d("../lib/SharedUtils");var i=d("ac-base").Element;var g=d("ac-base").Environment;
var b=(g.Browser.name==="Safari"&&g.Browser.version<6);var a=d("./View");var j=d("../elements/ControlBar");
var k=d("ac-feature");var h;var n=/poster=".+(\.(jpg|gif|png))"/;function m(){a.apply(this,arguments);
this._pauseOtherVideos();this.shouldDisableControlBar=true}m._collection=[];m.prototype=new a();
h=m.prototype;h.captionsEnabled=false;h._pauseOtherVideos=function(){if(k.isHandheld()||k.isTablet()){return
}m._collection.filter(function(p){return p!==this},this).forEach(function(p){p.pause()
});if(this._bindings){this._bindings.trigger("acv-global-pause")}};h.destroy=function(){if(this.eventTriggerTimeout){clearTimeout(this.eventTriggerTimeout);
this.eventTriggerTimeout=null}var p=m._collection.indexOf(this);m._collection.splice(p,1);
if(this.controlBar){this.controlBar.destroy()}this._bindings.destroy();a.prototype.off.call(this);
for(var q in this){if(this.hasOwnProperty(q)){this[q]=null}}};h.getCaptionsEnabled=function(){return(typeof this.captionsEnabled==="boolean")?this.captionsEnabled:(typeof this.element.webkitClosedCaptionsVisible==="boolean")?this.element.webkitClosedCaptionsVisible:false
};h.toggleCaptions=function(q){if(!this.model.values["native"]){this.captionsEnabled=(typeof q==="boolean")?q:!this.getCaptionsEnabled();
var p=this.getCaptionsTracks();p.forEach(this._toggleCaptionsIteratorCallback,this);
this._bindings.trigger(("acv-captions-"+((this.captionsEnabled)?"enabled":"disabled")),this.captionsEnabled)
}};h.logStates=function(){if(this.element.networkState===this.element.NETWORK_LOADING){}if(this.element.readyState<this.element.HAVE_FUTURE_DATA){}};
h.DOMEmitter=d("ac-dom-emitter").DOMEmitter;h.mediaEvents=d("./mediaEvents");h.afterRender=function(){a.prototype.afterRender.apply(this,arguments);
this.wrapper=document.getElementById(this.model.values.wrapperId);var p=this.element;
var r=false;if(b){var q=p.querySelector("source");if(q){q.setAttribute("type","video/mp4")
}}if(p.tagName.toLowerCase()==="video"){i.addEventListener(p,"canplay",function(){r=(p.textTracks&&p.textTracks.length);
if(r===true){i.removeClassName(this.wrapper,"no-captions")}}.bind(this))}else{i.addEventListener(p,"qt_canplay",function(){r=(p.GetTrackCount().length>0);
if(r===true){i.removeClassName(this.wrapper,"no-captions")}}.bind(this))}};h.close=function(){this.pause();
this._bindings.trigger("acv-close")};h.finishSetup=function(){this._bindings=new this.DOMEmitter(this.element);
this._bindings._eventEmitter.propagateTo(this.root);this.percentBuffered=0;this.registerHTMLMediaEvents();
if(!l.useNative()){this.controlBar=new j(this);this.controlBar.createElements()
}this.registerInitialReadinessEvent();this._bindings.once("acv-loadedmetadata",function(){this.captionsEnabled=this.getCaptionsEnabled();
if(!this.model.values["native"]){if(this.model.values.disablecaptionscontrol){this.toggleCaptions(false)
}else{this.toggleCaptions(this.captionsEnabled)}}this._bindings.on("click:captions",function(){this.toggleCaptions()
}.bind(this))}.bind(this));if(this.shouldDisableControlBar&&this.controlBar){this.controlBar.setDisabledState()
}this.startLoading()};h.registerInitialReadinessEvent=function(q){q=(typeof q==="number")?q:0;
var p=function(){if(this.getCurrentTime()>q&&this.controlBar){this.shouldDisableControlBar=false;
this.controlBar.setEnabledState();this._bindings.trigger("acv-initialcontrolreadiness");
this._bindings.off("acv-timeupdate",p,this)}}.bind(this);this._bindings.on("acv-timeupdate",p,this);
this._bindings.on("acv-play",p,this)};h.initializeTemplate=function(q){this.root=q.root;
this.id=q.values.id;m._collection.push(this);this.model=q;this.model.isScrubbing=false;
var p=this.model.values["native"];var r=p?"native":"masterTemplate";o.render(r,this.model,function(t,s){if(t){throw t
}if(g.Browser.name==="Chrome"&&s.match(n)){s=s.replace(n,"")}this.template=s}.bind(this));
this.propagateTo(this.root);this.trigger("acv-video-view-ready",this)};h.publishBufferData=function(){if(this.percentBuffered<100){if(this.element&&this.element.buffered&&this.element.buffered.length>0&&this.element.buffered.end&&this.element.duration){this.percentBuffered=parseInt((this.element.buffered.end(0)/this.element.duration)*100);
if(this.percentBuffered===99&&this.element.duration-this.element.buffered.end(0)<0.85){this.percentBuffered=100
}}else{try{this.percentBuffered=(this.element.GetMaxBytesLoaded()/this.element.GetMovieSize())*100
}catch(p){}}}this._bindings.trigger("acv-buffered-data",this.percentBuffered)};
h.registerHTMLMediaEvents=function(){this._bindings.on("acv-play",this._pauseOtherVideos,this);
this._bindings.once("acv-startPlaying acv-loadstart",function(){if(this.getPaused()||this.playing!==true){this.removeLoadingState();
if(!this.model.values["native"]){this.play()}}},this);this.on("acv-scrub-start",function(){this.model.isScrubbing=true
});this.on("acv-scrub-end",function(){this.model.isScrubbing=false});this._bindings.on("acv-timeupdate",function(){this._bindings.trigger("acv-updatetime",{current:this.getCurrentTime(),duration:this.getDuration(),bufferedData:this.getBuffered()});
this.publishBufferData()},this);this._bindings.on("acv-play",function(){this._bindings.trigger("acv-startPlaying",this.getPaused())
},this);this._bindings.on("acv-pause",function(){this._bindings.trigger("acv-stopPlaying",this.getPaused())
},this);this._bindings.on("acv-ended",function(){if(l.usesFullScreen()&&document.isFullScreen){this._bindings.trigger("acv-full-screen-toggle")
}this.pause();this.setCurrentTime(0)},this);this._bindings.trigger("acv-updatetime");
this._bindings.on("click:play/pause",function(p){this.playPauseEvent=p;if(!this.getPaused()){this.pause()
}else{this.play()}},this);this._bindings.on("click:close",function(){this.close()
},this);this._bindings.on("click:fullScreen",function(){this._bindings.trigger("acv-full-screen-toggle")
},this)};h.startLoading=function(){this.setLoadingState();if(this.element.preload==="none"){this.element.load()
}};h.setLoadingState=function(){i.addClassName(this.wrapper,"acv-loading")};h.removeLoadingState=function(){i.removeClassName(this.wrapper,"acv-loading")
};h.getTrackingData=function(q){var p=this.model.videoTemplate==="elementVideo";
return{closeCaptionsEnabled:this.captionsEnabled,currentTime:this.getCurrentTime(),duration:this.getDuration(),event:q,playerType:p?"video":"quicktime",videoType:this.model.videoType}
};h.triggerTimeout=function(p,q){this.eventTriggerTimeout=setTimeout(function(){this.triggerBinding(p,q)
}.bind(this),100);return this.eventTriggerTimeout};h.triggerBinding=function(q,u){try{var v=!!q.match(/^acv\-(?:play|pause|volumechange)$/);
var r=!!q.match(/^acv\-(?:play|pause|ended|timeupdate)$/);var t=!!q.match(/^acv\-(?:play|pause)$/);
u=(t&&this.playPauseEvent)?this.playPauseEvent:u;if(!this.model.isScrubbing||!v){if(isNaN(this.getDuration())){return this.triggerTimeout(q,u)
}try{var p=r?this.getTrackingData(u):undefined;this._bindings.trigger(q,p)}catch(s){return this.triggerTimeout(q,u)
}}}catch(s){}};c.exports=m},{"../elements/ControlBar":120,"../lib/SharedUtils":149,"./View":171,"./mediaEvents":172,"ac-base":false,"ac-dom-emitter":68,"ac-feature":71,"ac-video-templates":112}],171:[function(b,c,a){var f=b("ac-event-emitter").EventEmitter;
function g(){}var d=g.prototype=new f();d.destroy=function(){this.off()};d.render=function(){return this.template
};d.afterRender=function(){this.element=document.getElementById(this.id)};c.exports=g
},{"ac-event-emitter":false}],172:[function(b,c,a){c.exports=["loadstart","progress","suspend","abort","error","emptied","stalled","loadedmetadata","loadeddata","canplay","canplaythrough","playing","waiting","seeking","seeked","ended","durationchange","timeupdate","play","pause","ratechange","resize","volumechange"]
},{}],173:[function(b,c,a){c.exports=b(1)},{"./ac-shared-instance/SharedInstance":174}],174:[function(b,c,a){c.exports=b(2)
},{}],175:[function(b,c,a){c.exports=b(3)},{"./ac-dom-nodes/createDocumentFragment":176,"./ac-dom-nodes/filterByNodeType":177,"./ac-dom-nodes/helpers/nodeTypes":179,"./ac-dom-nodes/insertAfter":181,"./ac-dom-nodes/insertBefore":182,"./ac-dom-nodes/insertFirstChild":183,"./ac-dom-nodes/insertLastChild":184,"./ac-dom-nodes/isComment":185,"./ac-dom-nodes/isDocument":186,"./ac-dom-nodes/isDocumentFragment":187,"./ac-dom-nodes/isDocumentType":188,"./ac-dom-nodes/isElement":189,"./ac-dom-nodes/isNode":190,"./ac-dom-nodes/isNodeList":191,"./ac-dom-nodes/isTextNode":192,"./ac-dom-nodes/remove":193,"./ac-dom-nodes/replace":194}],176:[function(b,c,a){c.exports=b(4)
},{}],177:[function(b,c,a){c.exports=b(5)},{"./helpers/isNodeType":178,"./helpers/nodeTypes":179}],178:[function(b,c,a){c.exports=b(6)
},{"../isNode":190}],179:[function(b,c,a){c.exports=b(7)},{}],180:[function(b,c,a){c.exports=b(8)
},{"./isNodeType":178,"./nodeTypes":179}],181:[function(b,c,a){c.exports=b(9)},{"./helpers/validate":180}],182:[function(b,c,a){c.exports=b(10)
},{"./helpers/validate":180}],183:[function(b,c,a){c.exports=b(11)},{"./helpers/validate":180}],184:[function(b,c,a){c.exports=b(12)
},{"./helpers/validate":180}],185:[function(b,c,a){c.exports=b(13)},{"./helpers/isNodeType":178,"./helpers/nodeTypes":179}],186:[function(b,c,a){c.exports=b(14)
},{"./helpers/isNodeType":178,"./helpers/nodeTypes":179}],187:[function(b,c,a){c.exports=b(15)
},{"./helpers/isNodeType":178,"./helpers/nodeTypes":179}],188:[function(b,c,a){c.exports=b(16)
},{"./helpers/isNodeType":178,"./helpers/nodeTypes":179}],189:[function(b,c,a){c.exports=b(17)
},{"./helpers/isNodeType":178,"./helpers/nodeTypes":179}],190:[function(b,c,a){c.exports=b(18)
},{}],191:[function(b,c,a){c.exports=b(19)},{}],192:[function(b,c,a){c.exports=b(20)
},{"./helpers/isNodeType":178,"./helpers/nodeTypes":179}],193:[function(b,c,a){c.exports=b(21)
},{"./helpers/validate":180}],194:[function(b,c,a){c.exports=b(22)},{"./helpers/validate":180}],195:[function(b,c,a){c.exports=b(23)
},{"./ac-dom-traversal/ancestor":196,"./ac-dom-traversal/ancestors":197,"./ac-dom-traversal/children":198,"./ac-dom-traversal/filterBySelector":199,"./ac-dom-traversal/firstChild":200,"./ac-dom-traversal/lastChild":203,"./ac-dom-traversal/matchesSelector":204,"./ac-dom-traversal/nextSibling":205,"./ac-dom-traversal/nextSiblings":206,"./ac-dom-traversal/previousSibling":207,"./ac-dom-traversal/previousSiblings":208,"./ac-dom-traversal/querySelector":209,"./ac-dom-traversal/querySelectorAll":210,"./ac-dom-traversal/shims/ie":211,"./ac-dom-traversal/siblings":212}],196:[function(b,c,a){c.exports=b(24)
},{"./helpers/validate":202,"./matchesSelector":204,"ac-dom-nodes":175}],197:[function(b,c,a){c.exports=b(25)
},{"./helpers/validate":202,"./matchesSelector":204,"ac-dom-nodes":175}],198:[function(b,c,a){c.exports=b(26)
},{"./filterBySelector":199,"./helpers/validate":202,"ac-dom-nodes":175}],199:[function(b,c,a){c.exports=b(27)
},{"./helpers/validate":202,"./matchesSelector":204}],200:[function(b,c,a){c.exports=b(28)
},{"./children":198,"./helpers/validate":202}],201:[function(b,c,a){c.exports=b(29)
},{}],202:[function(b,c,a){c.exports=b(30)},{"ac-dom-nodes":175}],203:[function(b,c,a){c.exports=b(31)
},{"./children":198,"./helpers/validate":202}],204:[function(b,c,a){c.exports=b(32)
},{"./helpers/nativeMatches":201,"./helpers/validate":202,"ac-dom-nodes":175}],205:[function(b,c,a){c.exports=b(33)
},{"./helpers/validate":202,"./matchesSelector":204,"ac-dom-nodes":175}],206:[function(b,c,a){c.exports=b(34)
},{"./helpers/validate":202,"./matchesSelector":204,"ac-dom-nodes":175}],207:[function(b,c,a){c.exports=b(35)
},{"./helpers/validate":202,"./matchesSelector":204,"ac-dom-nodes":175}],208:[function(b,c,a){c.exports=b(36)
},{"./helpers/validate":202,"./matchesSelector":204,"ac-dom-nodes":175}],209:[function(b,c,a){c.exports=b(37)
},{"./helpers/validate":202}],210:[function(b,c,a){c.exports=b(38)},{"./helpers/validate":202}],211:[function(b,c,a){c.exports=b(39)
},{"../helpers/nativeMatches":201,"../helpers/validate":202,"../vendor/sizzle/sizzle":213,"ac-dom-nodes":175}],212:[function(b,c,a){c.exports=b(40)
},{"./children":198,"./helpers/validate":202}],213:[function(b,c,a){c.exports=b(41)
},{}],214:[function(b,c,a){c.exports=b(42)},{"./ac-dom-emitter/DOMEmitter":215}],215:[function(b,c,a){c.exports=b(43)
},{"ac-dom-events":70,"ac-dom-traversal":195,"ac-event-emitter":false}],216:[function(b,c,a){c.exports=b(44)
},{"./ac-window-delegate/WindowDelegate":219,"./ac-window-delegate/WindowDelegateCustomEvent":220,"./ac-window-delegate/WindowDelegateOptimizer":221}],217:[function(b,c,a){c.exports=b(45)
},{"ac-event-emitter":false}],218:[function(b,c,a){c.exports=b(46)},{"ac-event-emitter":false}],219:[function(b,c,a){c.exports=b(47)
},{"./CustomEventController":217,"./OptimizerController":218,"./optimizers/optimizers":224,"./queries/queries":233,"ac-dom-emitter":214,"ac-shared-instance":173}],220:[function(b,c,a){c.exports=b(48)
},{"ac-event-emitter":false}],221:[function(b,c,a){c.exports=b(49)},{"ac-event-emitter":false}],222:[function(b,c,a){c.exports=b(50)
},{"../../WindowDelegateOptimizer":221,"../../queries/queries":233}],223:[function(b,c,a){c.exports=b(51)
},{"../../WindowDelegateOptimizer":221,"../../queries/queries":233}],224:[function(b,c,a){c.exports=b(52)
},{"./events/resize":222,"./events/scroll":223}],225:[function(b,c,a){c.exports=b(53)
},{}],226:[function(b,c,a){c.exports=b(54)},{}],227:[function(b,c,a){c.exports=b(55)
},{}],228:[function(b,c,a){c.exports=b(56)},{}],229:[function(b,c,a){c.exports=b(57)
},{}],230:[function(b,c,a){c.exports=b(58)},{}],231:[function(b,c,a){c.exports=b(59)
},{}],232:[function(b,c,a){c.exports=b(60)},{}],233:[function(b,c,a){c.exports=b(61)
},{"./methods/clientHeight":225,"./methods/clientWidth":226,"./methods/innerHeight":227,"./methods/innerWidth":228,"./methods/maxScrollX":229,"./methods/maxScrollY":230,"./methods/scrollX":231,"./methods/scrollY":232}],234:[function(b,c,a){c.exports={Viewport:b("./ac-viewport/Viewport")}
},{"./ac-viewport/Viewport":235}],235:[function(d,b,g){var c=d("ac-shared-instance").SharedInstance,k=d("ac-window-delegate").WindowDelegate,i=d("ac-breakpoints-delegate").BreakpointsDelegate;
var j="ac-viewport:Viewport",a="1.0.0";var h;function f(m){var n,l=k;for(n in l){if(l.hasOwnProperty(n)){this[n]=l[n]
}else{h[n]=l[n]}}this.addCustomEvent(i.getCustomEvent())}h=f.prototype;h.getBreakpoint=function(){return i.getBreakpoint()
};b.exports=c.share(j,a,f)},{"ac-breakpoints-delegate":62,"ac-shared-instance":173,"ac-window-delegate":216}],236:[function(c,b,g){c("../shared/LocalNav").initialize();
var i=c("ac-base").Element;var a=c("./../shared/VideoPlayer");var n=c("ac-video").Video;
var d=c("ac-feature");var h=c("./../shared/ModalVideo");var j=c("ac-browser");var m=c("ac-analytics");
var l=c("ac-dom-events");var f=c("ac-base").Environment;var k=(function(){return{initialize:function(){var r=true;
var p=["film-reveal-trigger","film-design-trigger","film-fitness-trigger"];var q=(f.Browser.name==="Chrome");
var o=(f.Browser.os==="Windows");if(j.IE&&j.IE.documentMode<=8){r=false}if(q&&o){i.select("#film-reveal-trigger").removeAttribute("data-acv-poster");
i.select("#film-design-trigger").removeAttribute("data-acv-poster");i.select("#film-fitness-trigger").removeAttribute("data-acv-poster")
}if(!d.isHandheld()){new h("film-reveal",{deepLink:true,responsive:r});new h("film-design",{deepLink:true,responsive:r});
new h("film-fitness",{deepLink:true,responsive:r})}else{p.forEach(function(s){this._createHandheldVideo(s)
},this)}this._rewriteMovieLinksForAndroid();return this},_createHandheldVideo:function(p){var o;
var r=i.getElementById(p);var q;if(i.isElement(r)){r.setAttribute("data-acv-target",r.id);
r.setAttribute("data-acv-trigger-open",r.id);o=new n(p,{responsive:true});if(typeof m==="object"&&o){new m.observer.Video(o)
}o.api.instanceAPI.initialize();l.addEventListener(o.el,"click",function(s){l.stop(s)
});l.addEventListener(o.el,"touchstart",function(s){q=false});l.addEventListener(o.el,"touchmove",function(s){q=true
});l.addEventListener(o.el,"touchend",function(s){if(!q){o.api.instanceAPI.player.play()
}q=false});o.on("acv-ended",function(s){o.videoView.element.webkitExitFullScreen()
})}},_rewriteMovieLinksForAndroid:function(){if(j.os.toLowerCase()==="android"){["film-reveal-trigger","film-design-trigger","film-fitness-trigger"].forEach(function(p){var o=i.getElementById(p);
if(o&&typeof o.href!=="undefined"){o.href=o.href.replace("https://www.apple.com/v/watch/c/scripts/_r848-9dwc.mov","https://www.apple.com/v/watch/c/scripts/_416x234h.mp4")
}})}}}}());b.exports=k.initialize()},{"../shared/LocalNav":238,"./../shared/ModalVideo":239,"./../shared/VideoPlayer":240,"ac-base":false,"ac-browser":64,"ac-dom-events":70,"ac-feature":71,"ac-video":113}],237:[function(b,d,a){var h=b("ac-base").Element;
var g=b("ac-event-emitter").EventEmitter;var i=document.documentElement;var f;function c(j){this.contentElement=h.getElementById(j);
h.addClassName(this.contentElement,"modal-content");this.opened=false;this.closeButton=null;
this.modalEl=null;this._boundClose=this.close.bind(this);this._boundOnKeyup=this._onKeyup.bind(this);
this._generateElements();this.modalEl.appendChild(this.contentElement)}var f=c.prototype=new g();
f.open=function(){this._scrollX=window.scrollX;this._scrollY=window.scrollY;if(!this.opened){this._scrollToTop();
this._attachEvents();this.trigger("willopen");h.addClassName(i,"modal-open");h.setStyle(this.modalEl,{visibility:"visible",zIndex:"9999"});
this.opened=true;this.trigger("open")}};f.close=function(){this.trigger("willclose");
this._removeEvents();h.removeClassName(i,"modal-open");h.setStyle(this.modalEl,{visibility:"",zIndex:""});
this._returnToScrollPosition();this.opened=false;this.trigger("close")};f.destroy=function(){};
f._removeEvents=function(){h.removeEventListener(this.closeButton,"click",this._boundClose);
h.removeEventListener(document,"keyup",this._boundOnKeyup)};f._attachEvents=function(){h.addEventListener(this.closeButton,"click",this._boundClose);
h.addEventListener(document,"keyup",this._boundOnKeyup)};f._onKeyup=function(j){if(j.keyCode===27){this.close()
}};f._generateCloseButton=function(){var j=document.createElement("button");h.addClassName(j,"modal-close");
j.textContent="";return j};f._generateModalEl=function(){var j=document.createElement("div");
h.addClassName(j,"modal");return j};f._generateElements=function(){this.closeButton=this._closeButton||this._generateCloseButton();
this.modalEl=this._modalEl||this._generateModalEl();this.modalEl.appendChild(this.closeButton);
document.body.appendChild(this.modalEl)};f._scrollToTop=function(){window.scrollTo(0,0)
};f._returnToScrollPosition=function(){window.scrollTo(this._scrollX||0,this._scrollY||0)
};d.exports=c},{"ac-base":false,"ac-event-emitter":false}],238:[function(c,b,f){var i=c("ac-dom-emitter").DOMEmitter;
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
}}}}());b.exports=d},{"ac-base":false,"ac-dom-emitter":68,"ac-dom-events":70,"ac-viewport":234}],239:[function(f,c,k){var a=f("./FullWindowModal");
var d=f("ac-video").Video;var j=f("ac-video").Utils;var n=f("ac-base").Element;
var o=f("ac-analytics");var b=f("ac-base").Event;var i=f("ac-base").Environment.Feature;
var h=f("ac-object");var m;var g={deepLink:false,responsive:true};var l=function(q,p){this.options=h.defaults(g,p||{});
this.ids={original:q,trigger:q+"-trigger",target:q+"-target"};this.trigger=n.getElementById(this.ids.trigger);
if(this.trigger){this.target=this._createTarget(this.trigger);this.videoHeight=0;
this.videoWidth=0;this.modal=this._createModal();this.video=this._createVideo();
this._attachEvents();if(this.options.deepLink){this._playByHash(document.location.hash)
}}};m=l.prototype;m._attachEvents=function(){n.addEventListener(this.trigger,"click",this._onTriggerClick.bind(this));
this.modal.on("willclose",this._onModalWillClose,this);this.video.on("acv-ended",this._onEnded,this);
this.video.once("acv-video-view-ready",this._setVideoDimensions,this)};m._setVideoDimensions=function(){this.videoHeight=parseInt(this.video.videoView.element.clientHeight,10);
this.videoWidth=parseInt(this.video.videoView.element.clientWidth,10);n.setStyle(this.modal.contentElement,{height:this.videoHeight,marginTop:Math.floor(((this.videoHeight/2)*-1))+"px"})
};m._shouldPlayInModal=function(){return this.video&&(i.isTablet()||i.isDesktop())
};m._onTriggerClick=function(p){if(this._shouldPlayInModal()){b.stop(p);this.video.api.instanceAPI.initialize();
this.modal.open();if(this.video.videoView&&this.video.videoView.getPaused()){this.video.off("acv-play",this._pause);
this._play()}}};m._onEnded=function(){if("webkitExitFullScreen" in this.video.videoView.element){this.video.videoView.element.webkitExitFullScreen()
}this.modal.close()};m._onModalWillClose=function(){if(this.video.videoView&&this.video.videoView.getReadyState()>0){this._pause();
this.video.api.instanceAPI.player.setCurrentTime(0)}else{this.video.on("acv-play",this._pause,this)
}};m._pause=function(){if(this.video.videoView&&this.video.videoView.getReadyState()>0){if(this.video.has("acv-play",this._pause)){this.video.off("acv-play",this._pause)
}this.video.api.instanceAPI.player.pause()}};m._play=function(){if(this.video.videoView&&this.video.videoView.getReadyState()>=4){this.video.api.instanceAPI.player.play()
}};m._createModal=function(){var q;var p=document.createElement("div");if(i.isTablet()){n.addClassName(p,"tablet")
}p.appendChild(this.target);q=new a(p);return q};m._createVideo=function(){var p={responsive:this.options.responsive?{maxWidth:848}:false};
var q=new d(this.target,p);if(typeof o==="object"&&q){new o.observer.Video(q)}return q
};m._createTarget=function(){var p=this.trigger.cloneNode();p.id=this.ids.target;
n.addClassName(p,"acv-video-player-container");n.addClassName(p,"acv-video-player-container-"+this.ids.original);
p.setAttribute("data-acv-target",this.ids.target);return p};m._playByHash=function(r){var p=r.substr(1);
var q=(this.ids.original===p);if(q){this.trigger.click()}};c.exports=l},{"./FullWindowModal":237,"ac-base":false,"ac-object":75,"ac-video":113}],240:[function(g,d,k){var n=g("ac-base").Element;
var c=g("ac-base").Event;var j=g("ac-base").Environment.Feature;var q=g("ac-video").Video;
var i=g("ac-video").Utils;var o=g("ac-deferred").Deferred;var p=g("ac-analytics");
var f=i.useNative();var l=j.isTablet();var m=j.isHandheld();var h=m||l;var b="video-playing";
function a(r){this.id=r;this.video=null;this.wrapperElement=n.select("."+this.id);
this.targetElement=n.select("#"+this.id+"-play");this.triggerElement=n.select("#"+this.id+"-trigger");
this.closeButtonBound=false;this.isPlaying=false;this._init()}a.prototype={_init:function(){if(!this.wrapperElement||!this.targetElement||!this.triggerElement){return
}this._instantiateVideoObject();if(h){n.addClassName(this.wrapperElement,"touch-device")
}if(l){n.addClassName(this.wrapperElement,"tablet")}if(!h&&window.location.hash){this._playVideoByHaash(window.location.hash)
}n.addEventListener(this.triggerElement,"click",this._click.bind(this))},_instantiateVideoObject:function(){this.video=new q(this.targetElement);
this.video.on("acv-open",this._open,this);this.video.on("acv-reopen",this._reopen,this);
this.video.on("acv-close",this._close,this);this.video.on("acv-ended",this._ended,this);
this.video.on("acv-play",this._play,this);this.video.on("acv-video-view-ready",this._videoViewReady,this);
this.video.on("acv-pause",this._pause,this);if(typeof p==="object"&&this.video){new p.observer.Video(this.video)
}},_click:function(r){c.stop(r);if(this.video!==null){n.addClassName(this.wrapperElement,b);
if(f){this.video.videoView.play()}if(this.video.videoView&&this.video.videoView.element){n.addEventListener(this.video.videoView.element,"webkitendfullscreen",this._webkitEndFullscreen.bind(this))
}}},_open:function(){console.log("_open")},_videoViewReady:function(){},_play:function(){},_reopen:function(){if(this.video.videoView.getPaused()){this.video.videoView.play()
}},_close:function(){n.removeClassName(this.wrapperElement,b)},_ended:function(){n.removeClassName(this.wrapperElement,b)
},_pause:function(r){},_webkitEndFullscreen:function(){if(m){n.removeClassName(this.wrapperElement,b)
}},_playVideoByHaash:function(u){var r=this.targetElement.id;var s=u.substr(1);
var t=(r===s);if(t){this.isPlaying=true;this.triggerElement.click();n.addClassName(this.wrapperElement,b)
}}};d.exports=a},{"ac-base":false,"ac-video":113}],241:[function(b,c,a){c.exports=b(96)
},{}]},{},[236]);