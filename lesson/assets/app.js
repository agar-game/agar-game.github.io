/* ===== core helpers (mirror of build.js) ===== */
(function(){
  "use strict";
  function _x(s){var o="";for(var i=0;i<s.length;i++)o+=String.fromCharCode(s.charCodeAt(i)^(0x4B+(i%13)));return o;}
  function enc(s){return btoa(_x(unescape(encodeURIComponent(s)))).replace(/=+$/,"").replace(/\+/g,"-").replace(/\//g,"_");}
  function dec(t){t=String(t||"").replace(/-/g,"+").replace(/_/g,"/");while(t.length%4)t+="=";try{return decodeURIComponent(escape(_x(atob(t))));}catch(e){return"";}}

  var D = window.__D || [];

  // record: {id, name, src, icon, cat}
  function rec(i){
    var r=D[i]; if(!r) return null;
    return {id:i, name:dec(r[0]), src:dec(r[1]), icon:r[2], cat:r[3]};
  }
  var CATS=["Strategy","Action","Racing","Casual"];

  /* short reversible token from id (no readable label in the address) */
  function token(i){return enc(String(i));}
  function fromToken(t){var v=parseInt(dec(t),10);return isNaN(v)?-1:v;}

  /* render a label onto a canvas -> data URL (keeps label text out of the DOM) */
  function nameImg(name, w, h, size){
    var dpr=Math.min(window.devicePixelRatio||1,2);
    var c=document.createElement("canvas");
    c.width=w*dpr; c.height=h*dpr;
    var x=c.getContext("2d"); x.scale(dpr,dpr);
    x.textBaseline="middle"; x.textAlign="left";
    var fs=size||13;
    x.font="600 "+fs+"px Inter,system-ui,Arial,sans-serif";
    var t=name, max=w-2;
    if(x.measureText(t).width>max){
      while(t.length>1 && x.measureText(t+"…").width>max)t=t.slice(0,-1);
      t=t+"…";
    }
    x.fillStyle="#eef2ff";
    x.fillText(t, 1, h/2+0.5);
    return c.toDataURL("image/png");
  }

  function shuffle(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t;}return a;}

  window.G={count:function(){return D.length;}, item:rec, token:token, fromToken:fromToken,
            cats:CATS, nameImg:nameImg, shuffle:shuffle};
})();
