!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r():"function"==typeof define&&define.amd?define(r):r()}(0,function(){"use strict";var c=require("deep-get-set");module.exports={setIn:function(e,r,i,n){n||(n=i,i=r,r=e,e=this);for(var t=e.slice(),f=0;f<t.length;f++){var a=t[f],o=!1;for(var s in r)if(a[s]===r[s]){o=!0;break}if(o){c(t[f],i,n);break}}},getIn:function(e,r){r||(r=e,e=this);for(var i=e.slice(),n=0;n<i.length;n++){var t=i[n],f=!1;for(var a in r)if(t[a]===r[a]){f=!0;break}if(f)return i[n]}},filterIn:function(e,n){return n||(n=e,e=this),e.slice().filter(function(e){var r=!1;for(var i in n)if(e[i]===n[i]){r=!0;break}return r})},updateIn:function(e,r,i){i||(i=r,r=e,e=this);for(var n=e.slice(),t=0;t<n.length;t++){var f=n[t],a=!1;for(var o in r)if(f[o]===r[o]){f=Object.assign(f,i),a=!0;break}if(a){e.splice(t,1,f);break}}},deleteIn:function(e,r){r||(r=e,e=this);for(var i=e.slice(),n=0;n<i.length;n++){var t=i[n],f=!1;for(var a in r)if(t[a]===r[a]){f=!0;break}if(f){e.splice(n,1);break}}}}});
