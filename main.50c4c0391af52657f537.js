(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{QfWi:function(n,o,t){"use strict";t.r(o);t("JBxO"),t("FdtR");setTimeout((function(){console.log("Завдання-1")}),900);var e=function(n){return new Promise((function(o){setTimeout((function(){o(n)}),n)}))},a=function(n){return console.log("Resolved after "+n+"ms")};e(2e3).then(a),e(1e3).then(a),e(1500).then(a);t("lmye"),t("D/wG"),t("wCa+");console.log("Завдання-2");var c=[{name:"Mango",active:!0},{name:"Poly",active:!1},{name:"Ajax",active:!0},{name:"Lux",active:!1}],i=function(n,o){return new Promise((function(t){t(n.map((function(n){return n.name===o?Object.assign({},n,{active:!n.active}):n})))}))},r=function(n){return console.table(n)};i(c,"Mango").then(r),i(c,"Lux").then(r),setTimeout((function(){console.log("Завдання-3")}),10);var u=function(n){return new Promise((function(o,t){var e,a,c=(e=200,a=500,Math.floor(Math.random()*(a-e+1)+e));setTimeout((function(){Math.random()>.3?o([n.id,c]):t(n.id)}),c)}))},s=function(n){var o=n[0],t=n[1];console.log("Transaction "+o+" processed in "+t+"ms")},l=function(n){console.warn("Error processing transaction "+n+". Please try again later.")};u({id:70,amount:150}).then(s).catch(l),u({id:71,amount:230}).then(s).catch(l),u({id:72,amount:75}).then(s).catch(l),u({id:73,amount:100}).then(s).catch(l),console.log("hello")}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.50c4c0391af52657f537.js.map