(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{20:function(e,a,t){e.exports=t(46)},45:function(e,a,t){},46:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),s=t(13),i=t.n(s),m=t(3),c=t.n(m),o=t(14),l=t(15),u=t(16),d=t(19),v=t(18),p=t(17),g=t.n(p),y=t(2),_=t.n(y);function E(e){e.id;var a=e.year,t=e.title,r=e.summary,s=e.poster,i=e.genres;return n.a.createElement("div",{className:"movie"},n.a.createElement("img",{src:s,alt:t,title:t}),n.a.createElement("div",{className:"movie__data"},n.a.createElement("div",{className:"movie__title"},t),n.a.createElement("div",{className:"movie__year"},a),n.a.createElement("ul",{className:"movie__genres"},i.map((function(e,a){return n.a.createElement("li",{key:a,className:"genres__genre"},e)}))),n.a.createElement("p",{className:"movie__summary"},r.slice(0,180),"...")))}E.ProTypes={id:_.a.number.isRequired,year:_.a.number.isRequired,title:_.a.string.isRequired,summary:_.a.string.isRequired,poster:_.a.string.isRequired,genres:_.a.arrayOf(_.a.string).isRequired};var f=E,h=function(e){Object(d.a)(t,e);var a=Object(v.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=a.call.apply(a,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(o.a)(c.a.mark((function a(){var t,r;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,g.a.get("https://yts-proxy.now.sh/list_movies.json");case 2:t=a.sent,r=t.data.data.movies,e.setState({movies:r,isLoading:!1});case 5:case"end":return a.stop()}}),a)}))),e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.movies;return n.a.createElement("section",{className:"container"},a?n.a.createElement("div",{className:"loader"},n.a.createElement("span",{className:"loader__text"},"Loading...")):n.a.createElement("div",{className:"movies"},t.map((function(e){return n.a.createElement(f,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),t}(n.a.Component);t(45);i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(h,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.1577085b.chunk.js.map