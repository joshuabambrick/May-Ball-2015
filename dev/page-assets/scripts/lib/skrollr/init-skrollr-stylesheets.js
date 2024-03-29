/*
|-------------------------------------------
| initSkrollrStylesheets
|-------------------------------------------
|
| a function to load skrollr-stylesheets for the page, after the initial rendering has been completed
|
| type:         function
| author:       Josh Bambrick
| version:      0.0.1
| modified:     11/12/14
|
*/

define(function () {
    return function () {
        /*! skrollr-stylesheets 0.0.6 (2014-05-28) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr-stylesheets | Free to use under terms of MIT license */
        (function(e,t){"use strict";var n,r=[],l=/@-skrollr-keyframes\s+([\w-]+)/g,s=/\s*\{\s*((?:[^{]+\{[^}]*\}\s*)+?)\s*\}/g,a=/([\w\-]+)\s*\{([^}]+)\}/g,o=/-skrollr-animation-name\s*:\s*([\w-]+)/g,i=/-skrollr-(anchor-target|smooth-scrolling|emit-events|menu-offset)\s*:\s*['"]([^'"]+)['"]/g,u=function(t){var n=new XMLHttpRequest;try{n.open("GET",t,!1),n.send(null)}catch(r){e.XDomainRequest&&(n=new XDomainRequest,n.open("GET",t,!1),n.send(null))}return n.responseText},c=function(t){for(var l=0;t.length>l;l++){var s=t[l];if("LINK"===s.tagName){if(null===s.getAttribute("data-skrollr-stylesheet"))continue;if(e.matchMedia){var a=s.getAttribute("media");if(a&&!matchMedia(a).matches)continue}n=u(s.href)}else n=s.textContent||s.innerText||s.innerHTML;n&&r.push(n)}r.reverse();for(var o={},i=[],c=[],g=0;r.length>g;g++)n=r[g],f(n,o),h(n,i),d(n,c);x(o,i),m(c)},f=function(e,t){l.lastIndex=0;for(var n,r,o,i;null!==(n=l.exec(e));)for(s.lastIndex=l.lastIndex,r=s.exec(e),a.lastIndex=0,i=t[n[1]]={};null!==(o=a.exec(r[1]));)i[o[1]]=o[2].replace(/[\n\r\t]/g,"")},g=function(e,t){for(var n,r=t;r--&&"{"!==e.charAt(r););for(n=r;n--&&"}"!==e.charAt(n-1););return e.substring(n,r).replace(/[\n\r\t]/g,"")},h=function(e,t){var n,r;for(o.lastIndex=0;null!==(n=o.exec(e));)r=g(e,o.lastIndex),t.push([r,n[1]])},d=function(e,t){var n,r;for(i.lastIndex=0;null!==(n=i.exec(e));)r=g(e,i.lastIndex),t.push([r,n[1],n[2]])},x=function(e,n){for(var r,l,s,a,o,i,u,c=0;n.length>c;c++)if(r=t.querySelectorAll(n[c][0])){l=e[n[c][1]];for(s in l)for(a=0;r.length>a;a++)u=r[a],o="data-"+s,i=l[s],u.hasAttribute(o)&&(i+=u.getAttribute(o)),u.setAttribute(o,i)}},m=function(e){for(var n,r,l,s,a,o=0;e.length>o;o++)if(n=e[o],r=t.querySelectorAll(n[0]),l="data-"+n[1],s=n[2],r)for(a=0;r.length>a;a++)r[a].setAttribute(l,s)};c(t.querySelectorAll("link, style"))})(window,document);
    };
});