(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1DEj":function(e,t,n){},"3Olm":function(e,t){const n=document.querySelector(".date__day"),a=document.querySelector(".date__month"),l=document.querySelector(".date__time");setInterval(()=>{const e=new Date;dayNow=e.getDate();const t=new Array;t[0]="Sun",t[1]="Mon",t[2]="Tue",t[3]="Wed",t[4]="Thu",t[5]="Fri",t[6]="Sat",weekDayNow=t[e.getDay()],n.innerHTML=`${dayNow}<sup class="date__day--nth">${function(e){if(e>3&&e<21)return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}(dayNow)}</sup> ${weekDayNow}`;const o=new Array;o[0]="January",o[1]="February",o[2]="March",o[3]="April",o[4]="May",o[5]="June",o[6]="July",o[7]="August",o[8]="September",o[9]="October",o[10]="November",o[11]="December",a.textContent=o[e.getMonth()],l.textContent=s(e.getHours())+":"+s(e.getMinutes())+":"+s(e.getSeconds())},1e3);function s(e){return String(e).padStart(2,"0")}},MyEh:function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,a,l){var s,o=null!=t?t:e.nullContext||{},r=e.hooks.helperMissing,i="function",u=e.escapeExpression,c=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<div class="temperature-box">\n    <i class="weather-picture-icon"></i>\n    <p class="temperature-header">'+u(typeof(s=null!=(s=c(n,"city")||(null!=t?c(t,"city"):t))?s:r)===i?s.call(o,{name:"city",hash:{},data:l,loc:{start:{line:3,column:34},end:{line:3,column:42}}}):s)+", "+u(typeof(s=null!=(s=c(n,"countryCode")||(null!=t?c(t,"countryCode"):t))?s:r)===i?s.call(o,{name:"countryCode",hash:{},data:l,loc:{start:{line:3,column:44},end:{line:3,column:59}}}):s)+'</p>\n    <div class="degree-box">\n        <p class="degree-title">'+u(typeof(s=null!=(s=c(n,"temp")||(null!=t?c(t,"temp"):t))?s:r)===i?s.call(o,{name:"temp",hash:{},data:l,loc:{start:{line:5,column:32},end:{line:5,column:40}}}):s)+'&deg</p>\n        <ul class="degree-list">\n            <li class="degree-item degree-item--line">\n                <p class="degree-first-subtitle">min</p>\n                <p class="degree-second-subtitle">'+u(typeof(s=null!=(s=c(n,"tempMin")||(null!=t?c(t,"tempMin"):t))?s:r)===i?s.call(o,{name:"tempMin",hash:{},data:l,loc:{start:{line:9,column:50},end:{line:9,column:61}}}):s)+' &deg</p>\n            </li>\n            <li class="degree-item">\n                <p class="degree-first-subtitle">max</p>\n                <p class="degree-second-subtitle">'+u(typeof(s=null!=(s=c(n,"tempMax")||(null!=t?c(t,"tempMax"):t))?s:r)===i?s.call(o,{name:"tempMax",hash:{},data:l,loc:{start:{line:13,column:50},end:{line:13,column:61}}}):s)+" &deg</p>\n            </li>\n        </ul>\n    </div>\n</div>"},useData:!0})},QfWi:function(e,t,n){"use strict";n.r(t);n("1DEj");var a=n("MyEh"),l=n.n(a),s=n("sntm"),o=n.n(s),r=n("xDKS"),i=n.n(r);const u=document.querySelector(".search-location__form"),c=document.querySelector(".btn-5-days-js"),m=document.querySelector(".btn-today-js"),d=document.querySelector(".content-box"),p=document.querySelector(".btn-box"),y=document.querySelector(".part2"),h=document.querySelector(".part3"),f=document.querySelector(".five-days-containeer"),_=document.querySelector(".moreInfo"),g=document.querySelector(".date__sunrise--time"),b=document.querySelector(".date__sunset--time"),v=document.querySelector(".days-list"),M=document.querySelector(".moreInfo__block");let x="",D="",k={},w={};function S(e){return e<10&&(e="0"+e),e}const q=(e,t)=>{const n=S(e.getHours()),a=S(e.getMinutes()),l=S(t.getHours()),s=S(t.getMinutes());g.textContent=n+":"+a,b.textContent=l+":"+s},N=e=>{document.querySelector(".temperature-box")?(document.querySelector(".temperature-box").remove(),d.insertAdjacentHTML("afterbegin",l()(e)),q(k.sunrise,k.sunset)):(d.insertAdjacentHTML("afterbegin",l()(e)),q(k.sunrise,k.sunset),y.style.display="flex",h.style.display="flex",f.style.display="none",f.style.borderRadius="35px",_.style.display="none",p.style.display="block")};function T(e,t){return"https://api.openweathermap.org/data/2.5/"+e+"?q="+t+"&appid=48f3906fa74131a752b29b56bb64ec12"}const E=async e=>{try{return(await fetch(e)).json()}catch(e){throw e}},O=(e,t)=>{"one"==e&&(k.temp=Math.floor(t.main.temp-273.15),k.tempMin=Math.floor(t.main.temp_min-273.15),k.tempMax=Math.floor(t.main.temp_max-273.15),k.city=t.name,k.countryCode=t.sys.country,k.sunrise=new Date(1e3*t.sys.sunrise),k.sunset=new Date(1e3*t.sys.sunset),N(k),console.log(k)),"five"==e&&(w.city=t.city.name,w.countryCode=t.city.country,w.list=t.list,w.days=[],w.list.map(e=>{const t=new Date(1e3*e.dt),n={};-1==w.days.map(e=>e.DayNum).indexOf(t.getDate())&&(n.DayNum=t.getDate(),n.Day=(e=>{const t=[];return t[0]="Sunday",t[1]="Monday",t[2]="Tuesday",t[3]="Wednesday",t[4]="Thursday",t[5]="Friday",t[6]="Saturday",t[e]})(t.getDay()),n.Month=(e=>{const t=[];return t[0]="Jan",t[1]="Feb",t[2]="Mar",t[3]="Apr",t[4]="May",t[5]="Jun",t[6]="Jul",t[7]="Aug",t[8]="Sep",t[9]="Oct",t[10]="Nov",t[11]="Dec",t[e]})(t.getMonth()),w.days.push(n))}),w.days.map(e=>{const t=w.list.filter(t=>{if(new Date(1e3*t.dt).getUTCDate()==e.DayNum)return t});if(0==t.length)e.isData=!1;else{const n=t.map(e=>Math.floor(e.main.temp-273.15));e.TempMin=Math.min(...n),e.TempMax=Math.max(...n),e.list=t}}),0==w.days[5].isData?w.days.pop():w.days.shift(),console.log(w))};u.addEventListener("submit",(function(e){e.preventDefault();const t=new FormData(this);x=t.get("query"),D=T("weather",x),E(D).then(e=>O("one",e)),D=T("forecast",x),E(D).then(e=>O("five",e))})),m.addEventListener("click",()=>N(k)),c.addEventListener("click",()=>(e=>{document.querySelector(".temperature-box")&&document.querySelector(".temperature-box").remove();const t=document.querySelectorAll(".days-list__item");t&&t.forEach(e=>e.remove()),h.style.display="none",f.style.display="block",v.innerHTML+=o()(e)})(w)),v.addEventListener("click",(function(e){e.preventDefault();const t=e.target;"BUTTON"==t.nodeName&&(e=>{f.style.borderRadius="35px 35px 0 0",_.style.display="block";const t=Number(e.dataset.day),n=document.querySelectorAll(".timeWeather");n&&n.forEach(e=>e.remove());w.days.forEach(e=>{if(e.DayNum==t){const t=[];e.list.forEach(e=>{const n=new Date(1e3*e.dt),a={};a.time=S(n.getHours())+":"+S(n.getMinutes()),a.temp=Math.floor(e.main.temp-273.15),a.humidity=e.main.humidity,a.pressure=e.main.pressure,a.speed=e.wind.speed.toFixed(1),t.push(a)}),M.innerHTML+=i()(t),console.log(t)}})})(t)}));x="Kyiv",D=T("weather",x),E(D).then(e=>O("one",e)),D=T("forecast",x),E(D).then(e=>O("five",e));n("tNz6");var j={searchInput:document.querySelector(".search-location__form"),backgroundWrapper:document.querySelector(".background-wrapper")},C=n("czhI"),W=n.n(C),L={searchQuery:"kiev",apiKey:"16192319-9ae9d95026dacaeb88e2fcf6c",makeQuery(){const e=`https://pixabay.com/api/?image_type=backgrounds&orientation=horizontal&q=${this.query}&per_page=7&key=${this.apiKey}`;return W.a.get(e).then(({data:{hits:e}})=>e)},makeReserveQuery(){const e=`https://pixabay.com/api/?image_type=backgrounds&orientation=horizontal&q=clouds&per_page=7&key=${this.apiKey}`;return W.a.get(e).then(({data:{hits:e}})=>e)},get query(){return this.searchQuery},set query(e){this.searchQuery=e}};function Q(e){0===e.length?L.makeReserveQuery().then(Q):j.backgroundWrapper.style=`background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)),\n  url('${e[6].largeImageURL}') center; background-size: cover;`}L.makeQuery().then(Q).catch(()=>{L.makeReserveQuery().then(Q)}),j.searchInput.addEventListener("submit",(function(e){e.preventDefault();const t=e.currentTarget;L.query=t.elements.query.value,L.makeQuery().then(Q)}));n("3Olm")},sntm:function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({1:function(e,t,n,a,l){var s,o=null!=t?t:e.nullContext||{},r=e.hooks.helperMissing,i="function",u=e.escapeExpression,c=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li class="days-list__item">\n    <h3 class="days-list__day-of-the-week days-list__day-of-the-week--active">\n        '+u(typeof(s=null!=(s=c(n,"Day")||(null!=t?c(t,"Day"):t))?s:r)===i?s.call(o,{name:"Day",hash:{},data:l,loc:{start:{line:4,column:8},end:{line:4,column:15}}}):s)+'\n    </h3>\n    <h4 class="days-list__date">'+u(typeof(s=null!=(s=c(n,"DayNum")||(null!=t?c(t,"DayNum"):t))?s:r)===i?s.call(o,{name:"DayNum",hash:{},data:l,loc:{start:{line:6,column:32},end:{line:6,column:42}}}):s)+" "+u(typeof(s=null!=(s=c(n,"Month")||(null!=t?c(t,"Month"):t))?s:r)===i?s.call(o,{name:"Month",hash:{},data:l,loc:{start:{line:6,column:43},end:{line:6,column:52}}}):s)+'</h4>\n    <i class="days-list__img tmp-cloud-icon"></i>\n    <div class="days-list__temperature-block">\n        <div class="days-list__min days-list__min-max">\n            <p class="days-list__title">\n                min\n            </p>\n            <p class="days-list__value days-list__value--degrees">'+u(typeof(s=null!=(s=c(n,"TempMin")||(null!=t?c(t,"TempMin"):t))?s:r)===i?s.call(o,{name:"TempMin",hash:{},data:l,loc:{start:{line:14,column:66},end:{line:14,column:77}}}):s)+'</p>\n        </div>\n        <i class="days-list__line days-list__line--mobile tmp-line-m-icon"></i>\n        <i class="days-list__line days-list__line--tablet_desktop tmp-line-tp-icon"></i>\n        <div class="days-list__min-max">\n            <p class="days-list__title">\n                max\n            </p>\n            <p class="days-list__value days-list__value--degrees">'+u(typeof(s=null!=(s=c(n,"TempMax")||(null!=t?c(t,"TempMax"):t))?s:r)===i?s.call(o,{name:"TempMax",hash:{},data:l,loc:{start:{line:24,column:66},end:{line:24,column:77}}}):s)+'</p>\n        </div>\n    </div>\n    <button class="days-list__more-btn" type="button" data-day="'+u(typeof(s=null!=(s=c(n,"DayNum")||(null!=t?c(t,"DayNum"):t))?s:r)===i?s.call(o,{name:"DayNum",hash:{},data:l,loc:{start:{line:27,column:64},end:{line:27,column:74}}}):s)+'">\n        more info\n    </button>\n</li>\n'},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,l){var s,o=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return null!=(s=o(n,"each").call(null!=t?t:e.nullContext||{},null!=t?o(t,"days"):t,{name:"each",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l,loc:{start:{line:1,column:0},end:{line:31,column:9}}}))?s:""},useData:!0})},tNz6:function(e,t){},xDKS:function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({1:function(e,t,n,a,l){var s,o=null!=t?t:e.nullContext||{},r=e.hooks.helperMissing,i="function",u=e.escapeExpression,c=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<div class="timeWeather">\n    <p class="timeWeather__time">'+u(typeof(s=null!=(s=c(n,"time")||(null!=t?c(t,"time"):t))?s:r)===i?s.call(o,{name:"time",hash:{},data:l,loc:{start:{line:3,column:33},end:{line:3,column:41}}}):s)+'</p>\n    <p class="timeWeather__temp">'+u(typeof(s=null!=(s=c(n,"temp")||(null!=t?c(t,"temp"):t))?s:r)===i?s.call(o,{name:"temp",hash:{},data:l,loc:{start:{line:4,column:33},end:{line:4,column:41}}}):s)+' &#176;</p>\n    <ul class="timeWeather__data">\n        <li class="timeWeather__pressure">'+u(typeof(s=null!=(s=c(n,"pressure")||(null!=t?c(t,"pressure"):t))?s:r)===i?s.call(o,{name:"pressure",hash:{},data:l,loc:{start:{line:6,column:42},end:{line:6,column:54}}}):s)+' mm</li>\n        <li class="timeWeather__humidity">'+u(typeof(s=null!=(s=c(n,"humidity")||(null!=t?c(t,"humidity"):t))?s:r)===i?s.call(o,{name:"humidity",hash:{},data:l,loc:{start:{line:7,column:42},end:{line:7,column:54}}}):s)+'%</li>\n        <li class="timeWeather__wind">'+u(typeof(s=null!=(s=c(n,"speed")||(null!=t?c(t,"speed"):t))?s:r)===i?s.call(o,{name:"speed",hash:{},data:l,loc:{start:{line:8,column:38},end:{line:8,column:47}}}):s)+" m/s</li>\n    </ul>\n</div>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,l){var s;return null!=(s=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l,loc:{start:{line:1,column:0},end:{line:11,column:9}}}))?s:""},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.7c485b3c96d7e9c90e6b.js.map