(function(e){function r(r){var d=r[0];var c=r[1];var o=r[2];var u,i,f=0,l=[];for(;f<d.length;f++){i=d[f];if(Object.prototype.hasOwnProperty.call(a,i)&&a[i]){l.push(a[i][0])}a[i]=0}for(u in c){if(Object.prototype.hasOwnProperty.call(c,u)){e[u]=c[u]}}if(b)b(r);while(l.length){l.shift()()}t.push.apply(t,o||[]);return n()}function n(){var e;for(var r=0;r<t.length;r++){var n=t[r];var d=true;for(var c=1;c<n.length;c++){var o=n[c];if(a[o]!==0)d=false}if(d){t.splice(r--,1);e=u(u.s=n[0])}}return e}var d={};var c={16:0};var a={16:0};var t=[];function o(e){return u.p+"app."+({18:"chunk~ui~async",19:"chunk~fad58de7366495db4650cfefac2fcd61~async",20:"chunk~vendor~fad58de7366495db4650cfefac2fcd61~async",25:"chunk~store~async",62:"chunk~vendor~ledger-bridge-algorand~async",63:"chunk~vendor~ledger-bridge-avalanche~async",64:"chunk~vendor~ledger-bridge-bitcoin~async",65:"chunk~vendor~ledger-bridge-conflux~async",66:"chunk~vendor~ledger-bridge-cosmos~async",67:"chunk~vendor~ledger-bridge-ed~async",68:"chunk~vendor~ledger-bridge-flow~async",69:"chunk~vendor~ledger-bridge-harmony~async",70:"chunk~vendor~ledger-bridge-hedera~async",71:"chunk~vendor~ledger-bridge-icon~async",72:"chunk~vendor~ledger-bridge-near~async",73:"chunk~vendor~ledger-bridge-polkadot~async",74:"chunk~vendor~ledger-bridge-solana~async",75:"chunk~vendor~ledger-bridge-taquito~async",76:"chunk~vendor~ledger-bridge-terra~async",77:"chunk~vendor~ledger-bridge-tezos~async",78:"chunk~vendor~ledger-bridge-zilliqa~async",79:"chunk~vendor~react~async"}[e]||e)+"."+{18:"2565246b29b67d8fd66b",19:"9581cee969a33ad68477",20:"b8889a486df8d478086c",25:"35223fa16dc44e997f7f",62:"9d98ad8963e689fd612d",63:"231678b6e528c79fab47",64:"29c8a66ed4aaad5dc8c4",65:"113c861d1c8e853cb7ba",66:"657b971c683827376c4b",67:"51434f9950abacf88fe3",68:"1adaf09ab28812765fd6",69:"65e1aaaebfbd475c05dc",70:"5dd13e85ab97a681ac88",71:"d3a6e4b3cbd7146df0e6",72:"486d1a7e2ac6654267e6",73:"399782d80b6bbe935143",74:"b559b82e4ca0bc548cb9",75:"8a57d52bf1b18ae422c8",76:"bc57712079bdf9f2bc15",77:"0039b1d38a0cea5386cc",78:"3004b05de7549830a7de",79:"5fd2e021a1009b04bdf4",93:"c498d2e2c6d2c044968f"}[e]+".js"}function u(r){if(d[r]){return d[r].exports}var n=d[r]={i:r,l:false,exports:{}};e[r].call(n.exports,n,n.exports,u);n.l=true;return n.exports}u.e=function e(r){var n=[];var d={18:1};if(c[r])n.push(c[r]);else if(c[r]!==0&&d[r]){n.push(c[r]=new Promise((function(e,n){var d="app."+({18:"chunk~ui~async",19:"chunk~fad58de7366495db4650cfefac2fcd61~async",20:"chunk~vendor~fad58de7366495db4650cfefac2fcd61~async",25:"chunk~store~async",62:"chunk~vendor~ledger-bridge-algorand~async",63:"chunk~vendor~ledger-bridge-avalanche~async",64:"chunk~vendor~ledger-bridge-bitcoin~async",65:"chunk~vendor~ledger-bridge-conflux~async",66:"chunk~vendor~ledger-bridge-cosmos~async",67:"chunk~vendor~ledger-bridge-ed~async",68:"chunk~vendor~ledger-bridge-flow~async",69:"chunk~vendor~ledger-bridge-harmony~async",70:"chunk~vendor~ledger-bridge-hedera~async",71:"chunk~vendor~ledger-bridge-icon~async",72:"chunk~vendor~ledger-bridge-near~async",73:"chunk~vendor~ledger-bridge-polkadot~async",74:"chunk~vendor~ledger-bridge-solana~async",75:"chunk~vendor~ledger-bridge-taquito~async",76:"chunk~vendor~ledger-bridge-terra~async",77:"chunk~vendor~ledger-bridge-tezos~async",78:"chunk~vendor~ledger-bridge-zilliqa~async",79:"chunk~vendor~react~async"}[r]||r)+"."+{18:"78a0d41d0bb9b05e5790",19:"31d6cfe0d16ae931b73c",20:"31d6cfe0d16ae931b73c",25:"31d6cfe0d16ae931b73c",62:"31d6cfe0d16ae931b73c",63:"31d6cfe0d16ae931b73c",64:"31d6cfe0d16ae931b73c",65:"31d6cfe0d16ae931b73c",66:"31d6cfe0d16ae931b73c",67:"31d6cfe0d16ae931b73c",68:"31d6cfe0d16ae931b73c",69:"31d6cfe0d16ae931b73c",70:"31d6cfe0d16ae931b73c",71:"31d6cfe0d16ae931b73c",72:"31d6cfe0d16ae931b73c",73:"31d6cfe0d16ae931b73c",74:"31d6cfe0d16ae931b73c",75:"31d6cfe0d16ae931b73c",76:"31d6cfe0d16ae931b73c",77:"31d6cfe0d16ae931b73c",78:"31d6cfe0d16ae931b73c",79:"31d6cfe0d16ae931b73c",93:"31d6cfe0d16ae931b73c"}[r]+".css";var a=u.p+d;var t=document.getElementsByTagName("link");for(var o=0;o<t.length;o++){var i=t[o];var f=i.getAttribute("data-href")||i.getAttribute("href");if(i.rel==="stylesheet"&&(f===d||f===a))return e()}var l=document.getElementsByTagName("style");for(var o=0;o<l.length;o++){var i=l[o];var f=i.getAttribute("data-href");if(f===d||f===a)return e()}var b=document.createElement("link");b.rel="stylesheet";b.type="text/css";b.onload=e;b.onerror=function(e){var d=e&&e.target&&e.target.src||a;var t=new Error("Loading CSS chunk "+r+" failed.\n("+d+")");t.code="CSS_CHUNK_LOAD_FAILED";t.request=d;delete c[r];b.parentNode.removeChild(b);n(t)};b.href=a;var s=document.getElementsByTagName("head")[0];s.appendChild(b)})).then((function(){c[r]=0})))}var t=a[r];if(t!==0){if(t){n.push(t[2])}else{var i=new Promise((function(e,n){t=a[r]=[e,n]}));n.push(t[2]=i);var f=document.createElement("script");var l;f.charset="utf-8";f.timeout=120;if(u.nc){f.setAttribute("nonce",u.nc)}f.src=o(r);var b=new Error;l=function(e){f.onerror=f.onload=null;clearTimeout(s);var n=a[r];if(n!==0){if(n){var d=e&&(e.type==="load"?"missing":e.type);var c=e&&e.target&&e.target.src;b.message="Loading chunk "+r+" failed.\n("+d+": "+c+")";b.name="ChunkLoadError";b.type=d;b.request=c;n[1](b)}a[r]=undefined}};var s=setTimeout((function(){l({type:"timeout",target:f})}),12e4);f.onerror=f.onload=l;document.head.appendChild(f)}}return Promise.all(n)};u.m=e;u.c=d;u.d=function(e,r,n){if(!u.o(e,r)){Object.defineProperty(e,r,{enumerable:true,get:n})}};u.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})};u.t=function(e,r){if(r&1)e=u(e);if(r&8)return e;if(r&4&&typeof e==="object"&&e&&e.__esModule)return e;var n=Object.create(null);u.r(n);Object.defineProperty(n,"default",{enumerable:true,value:e});if(r&2&&typeof e!="string")for(var d in e)u.d(n,d,function(r){return e[r]}.bind(null,d));return n};u.n=function(e){var r=e&&e.__esModule?function r(){return e["default"]}:function r(){return e};u.d(r,"a",r);return r};u.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)};u.p="https://assets.auth.magic.link/static/";u.oe=function(e){console.error(e);throw e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[];var f=i.push.bind(i);i.push=r;i=i.slice();for(var l=0;l<i.length;l++)r(i[l]);var b=f;n()})([]);