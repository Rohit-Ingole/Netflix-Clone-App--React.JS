(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},48:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(18),o=n.n(a),r=(n(28),n.p,n(29),n(4)),s=n.n(r),l=n(6),u=n(5),d=n(19),h=n.n(d).a.create({baseURL:"https://api.themoviedb.org/3"}),f=(n(48),n(20)),v=n(23),b=n.n(v),j=n(0);var p=function(e){var t=e.title,n=e.fetchUrl,i=e.isLargeRow,a=Object(c.useState)([]),o=Object(u.a)(a,2),r=o[0],d=o[1],v=Object(c.useState)(""),p=Object(u.a)(v,2),g=p[0],m=p[1];Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get(n);case 2:return t=e.sent,d(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]);var O=function(e){g?m(""):b()((null===e||void 0===e?void 0:e.name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);m(t.get("v"))})).catch((function(e){return console.log(e)}))};return console.log(g),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("h2",{children:t}),Object(j.jsx)("div",{className:"row__posters",children:r.map((function(e){return Object(j.jsx)("img",{onClick:O(e),className:"row__poster ".concat(i&&"row__posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(i?e.poster_path:e.backdrop_path),alt:e.name},e.id)}))}),g&&Object(j.jsx)(f.a,{videoId:g,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}})]})},g="bf756d57840811ac886ba63cf5fe4601",m={fetchTrending:"/trending/all/week?api_key=".concat(g,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(g,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(g,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(g,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(g,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(g,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(g,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(g,"&with_genres=99")};n(71);var O=function(){var e,t,n=Object(c.useState)([]),i=Object(u.a)(n,2),a=i[0],o=i[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get(m.fetchNetflixOriginals);case 2:return t=e.sent,o(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(j.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(null===a||void 0===a?void 0:a.backdrop_path,'")'),backgroundPosition:"center center"},children:[Object(j.jsxs)("div",{className:"banner__contents",children:[Object(j.jsx)("h1",{className:"banner__title",children:(null===a||void 0===a?void 0:a.title)||(null===a||void 0===a?void 0:a.name)||(null===a||void 0===a?void 0:a.original_name)}),Object(j.jsxs)("div",{className:"banner__buttons",children:[Object(j.jsx)("button",{className:"banner__button",children:"Play"}),Object(j.jsx)("button",{className:"banner__button",children:"My List"})]}),Object(j.jsx)("h3",{className:"banner__description",children:(e=null===a||void 0===a?void 0:a.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)})]}),Object(j.jsx)("div",{className:"banner--fadeBottom"})]})};n(72);var _=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],i=t[1];return Object(c.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?i(!0):i(!1)})),function(){window.removeEventListener("scroll")}}),[]),Object(j.jsx)("div",{className:"nav ".concat(n&&"nav__black"),children:Object(j.jsx)("img",{className:"nav__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png",alt:"Netflix Logo"})})};var x=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(_,{}),Object(j.jsx)(O,{}),Object(j.jsx)(p,{title:"NETFLIX ORIGINALS",fetchUrl:m.fetchNetflixOriginals,isLargeRow:!0}),Object(j.jsx)(p,{title:"Trending Now",fetchUrl:m.fetchTrending}),Object(j.jsx)(p,{title:"Top Rated",fetchUrl:m.fetchTopRated}),Object(j.jsx)(p,{title:"Action Movies",fetchUrl:m.fetchActionMovies}),Object(j.jsx)(p,{title:"Comedy Movies",fetchUrl:m.fetchComedyMovies}),Object(j.jsx)(p,{title:"Horror Movies",fetchUrl:m.fetchHorrorMovies}),Object(j.jsx)(p,{title:"Romance Movies",fetchUrl:m.fetchRomanceMovies}),Object(j.jsx)(p,{title:"Documantries",fetchUrl:m.fetchDocumentaries})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),a(e),o(e)}))};o.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root")),w()}},[[73,1,2]]]);
//# sourceMappingURL=main.3c7ae861.chunk.js.map