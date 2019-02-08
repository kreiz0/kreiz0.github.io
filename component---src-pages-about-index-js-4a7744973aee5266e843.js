(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{699:function(n,t,e){"use strict";e.r(t);e(18);var o=e(3),i=e.n(o),r=e(0),a=e.n(r),s=e(757),l=e.n(s),u=e(12),c=e.n(u),d=e(712),f=e(749),p=e(750),m=(e(350),e(2)),v=e.n(m),g=e(115),h=e(720),b=e(91),x=e(4),y=e.n(x),w=e(736),C=y()(w.a,null,"AboutCardContainer",e(778),"about-card-container","aboutCardContainer"),E=y()("h4",null,"Title",e(779),"title","title"),S=y()("span",null,"Date",e(780),"date","date"),k=y()("p",null,"Description",e(781),"description","description"),T=y()("img",null,"Logo",e(782),"logo","logo"),P=e(783),A=e(718),N=e(48),I=function(n){function t(){return n.apply(this,arguments)||this}return i()(t,n),t.prototype.render=function(){var n=this.props,t=n.status,e=n.direction,o=n.disableTransition,i=n.description,r=n.title,s=n.date,l=n.logo,u=n.isSwipeEvent,d=n.link,f=u?e>0?A.o[t]:A.p[t]:e>0?A.q[t]:A.n[t];return a.a.createElement(C,{disableTransition:o,className:c()(f,N.d[t],A.r[t])},a.a.createElement(E,null,r),a.a.createElement(S,null,function(n){var t=new Date(n);if(t instanceof Date){var e=t.getDate(),o=t.getMonth();return e+"."+(o+1<10?"0":"")+(o+1)+"."+t.getFullYear()}return"Invalid date"}(s)),a.a.createElement(k,null,i," ",d&&a.a.createElement(h.a,{href:d,className:P.read},"Читать")),l&&a.a.createElement(T,{src:l,alt:"logo"}))},t}(r.PureComponent),R=function(n){function t(){for(var t,e=arguments.length,o=new Array(e),i=0;i<e;i++)o[i]=arguments[i];return(t=n.call.apply(n,[this].concat(o))||this).onSwiped=function(n){var e=n.isLeft,o=n.isRight,i=n.xRatio,r=t.props.onSectionChange;e&&i>25?r({value:1,isSwipeEvent:!0}):o&&i>25&&r({value:-1,isSwipeEvent:!0})},t}return i()(t,n),t.prototype.render=function(){var n=this,t=this.props,e=t.direction,o=t.title,i=t.date,r=t.description,s=t.logo,l=t.selectedSectionIndex;return a.a.createElement(b.a,{onSwiped:this.onSwiped},a.a.createElement(g.TransitionGroup,{appear:!0},a.a.createElement(g.Transition,{key:l+"-news-"+e,timeout:{enter:100,exit:200}},function(t){return a.a.createElement(I,Object.assign({},n.props,{status:t,date:i,logo:s,title:o,description:r}))})))},t}(r.PureComponent);R.propTypes={title:v.a.string,date:v.a.string,description:v.a.string,logo:v.a.string,id:v.a.string,direction:v.a.number,isSwipeEvent:v.a.bool,selectedSectionIndex:v.a.number,disableTransition:v.a.bool};var D=e(730),M=e(41),O=e(63),F=(e(74),e(162),e(86)),L=e.n(F),W=y()("div",null,"ConstellationPointsContainer",e(811),"constellation-points-container","constellationPointsContainer"),j=y()("div",null,"TransformContainer",e(812),"transform-container","transformContainer"),B=y()("div",null,"PointMain",e(813),"point-main","pointMain"),U=y()(B,null,"FakePoint",e(814),"fake-point","fakePoint"),J=y()(B,null,"Point",e(815),"point","point"),z=function(n){function t(t){var e;return(e=n.call(this,t)||this).points=[],e.fakePoint=null,e.transform=function(){var n=e.props,t=n.selectedSectionIndex,o=n.onTransform,i=n.x,r=n.y,a=e.fakePoint.getBoundingClientRect(),s=a.left,l=a.top,u=e.points[t].getBoundingClientRect(),c=u.left,d=u.top;o&&o({x:s-c+i,y:l-d+r})},e.savePointsRef=function(n){var t=e.props.pointsAmount;n&&e.points.length!==t&&e.points.push(n)},e.onFakePointRef=function(n){n&&(e.fakePoint=n)},e.debouncedTransform=L()(e.transform,200),e}i()(t,n);var e=t.prototype;return e.componentDidMount=function(){window.addEventListener("resize",this.debouncedTransform)},e.componentWillUnmount=function(){window.removeEventListener("resize",this.debouncedTransform)},e.componentDidUpdate=function(n,t){var e=n.selectedSectionIndex,o=this.props,i=o.selectedSectionIndex,r=o.transitionEnd;i!==e&&this.points[i]&&this.fakePoint&&r&&this.transform()},e.render=function(){var n=this,t=this.props,e=t.selectedSectionIndex,o=t.pointsAmount,i=t.x,r=t.y,s=t.status,l=t.disableTransition;return a.a.createElement(W,{disableTransition:l,className:c()(N.d[s],N.h[s])},a.a.createElement(U,{ref:this.onFakePointRef}),a.a.createElement(j,{style:{transform:"translate("+i+"px, "+r+"px)"}},Array.from({length:o},function(t,o){return a.a.createElement(J,{ref:n.savePointsRef,key:"point-"+o,isActive:o===e})})))},t}(r.PureComponent);z.propTypes={selectedSectionIndex:v.a.number,onTransform:v.a.func,x:v.a.number,y:v.a.number,status:v.a.string,transitionEnd:v.a.bool,disableTransition:v.a.bool},z.defaultProps={pointsAmount:5,x:0,y:0};var H=y()("div",null,"NewsContainer",e(816),"news-container","newsContainer"),Q=y()("div",null,"WillChangeNews",e(817),"will-change-news","willChangeNews"),V=e(818);e.d(t,"About",function(){return Y}),e.d(t,"aboutPageQuery",function(){return q});var Y=function(n){function t(){for(var t,e=arguments.length,o=new Array(e),i=0;i<e;i++)o[i]=arguments[i];return(t=n.call.apply(n,[this].concat(o))||this).state={x:0,y:0},t.onTransform=function(n){return t.setState(n)},t}return i()(t,n),t.prototype.render=function(){var n=this,t=this.props.data.allMarkdownRemark,e=this.props,o=e.status,i=e.disableTransition,r=this.state,s=r.x,u=r.y;return a.a.createElement(O.a,null,function(e){var r=e.selectedSectionIndex,m=e.onSectionChange,v=e.sectionDirection,g=e.isSwipeEvent,h=e.transitionEnd,b=t&&t.edges[r]?l()(t.edges.map(function(n){return n.node.frontmatter}),"date").reverse()[r]:{title:t?"Пусто":"Список пуст",description:t?"Заполните статью в системе управления содержимым":"Заполните статьи в системе управления содержимым"},x=t&&t.edges?t.edges:[];return a.a.createElement(D.a,Object.assign({},n.props,{disableTransition:i,withRightSideAnimation:!1,x:s,y:u,backgroundClassName:V.isAboutSlide,leftSide:a.a.createElement(a.a.Fragment,null,a.a.createElement(M.a,{as:"h1"},"СМИ о нас"),a.a.createElement(d.a,{to:"/news",gatsby:!0},"Все комментарии")),containerClassName:V.aboutContainer,rightSide:a.a.createElement(H,null,a.a.createElement(z,{disableTransition:i,transitionEnd:h,status:o,x:s,y:u,onTransform:n.onTransform,selectedSectionIndex:r}),a.a.createElement(Q,{disableTransition:i,className:c()(N.g[o],N.d[o],N.h[o])},a.a.createElement(f.a,{sections:x,selectedSectionIndex:r}),a.a.createElement(R,Object.assign({selectedSectionIndex:r,disableTransition:i,isSwipeEvent:g,onSectionChange:m,direction:v},b)),a.a.createElement(p.a,{sections:x,selectedSectionIndex:r,goPrev:function(){return m({value:-1,isSwipeEvent:!0})},goNext:function(){return m({value:1,isSwipeEvent:!0})}})))}))})},t}(r.PureComponent),q=(t.default=Y,"249173350")},720:function(n,t,e){"use strict";e.d(t,"a",function(){return p});e(18);var o=e(36),i=e.n(o),r=(e(353),e(0)),a=e.n(r),s=e(4),l=e.n(s),u=e(2),c=e.n(u),d=l()("a",null,"Link",e(735),"link","link"),f=function(n){if(n){var t=0===n.toString().indexOf("http");return 0===n.toString().indexOf("www")||t?n:"https://"+n}},p=function(n){var t=n.href,e=n.children,o=i()(n,["href","children"]);return a.a.createElement(d,Object.assign({href:f(t),target:"_blank",rel:"noopener noreferrer"},o),e)};p.propTypes={href:c.a.string}},734:function(n,t,e){var o=e(165),i=e(161),r=e(164),a=e(62);n.exports=function(n,t,e){if(!a(e))return!1;var s=typeof t;return!!("number"==s?i(e)&&r(t,e.length):"string"==s&&t in e)&&o(e[t],n)}},735:function(n,t,e){n.exports={link:"OutsideLink-Link-module--link--1-yuh"}},736:function(n,t,e){"use strict";e.d(t,"a",function(){return i});var o=e(4),i=e.n(o)()("article",null,"Blank",e(737),"blank","blank")},737:function(n,t,e){n.exports={blank:"Blank-module--blank--2YNtX"}},757:function(n,t,e){var o=e(758),i=e(760),r=e(765),a=e(734),s=r(function(n,t){if(null==n)return[];var e=t.length;return e>1&&a(n,t[0],t[1])?t=[]:e>2&&a(t[0],t[1],t[2])&&(t=[t[0]]),i(n,o(t,1),[])});n.exports=s},758:function(n,t,e){var o=e(362),i=e(759);n.exports=function n(t,e,r,a,s){var l=-1,u=t.length;for(r||(r=i),s||(s=[]);++l<u;){var c=t[l];e>0&&r(c)?e>1?n(c,e-1,r,a,s):o(s,c):a||(s[s.length]=c)}return s}},759:function(n,t,e){var o=e(93),i=e(166),r=e(37),a=o?o.isConcatSpreadable:void 0;n.exports=function(n){return r(n)||i(n)||!!(a&&n&&n[a])}},760:function(n,t,e){var o=e(363),i=e(361),r=e(761),a=e(762),s=e(360),l=e(763),u=e(352);n.exports=function(n,t,e){var c=-1;t=o(t.length?t:[u],s(i));var d=r(n,function(n,e,i){return{criteria:o(t,function(t){return t(n)}),index:++c,value:n}});return a(d,function(n,t){return l(n,t,e)})}},761:function(n,t,e){var o=e(359),i=e(161);n.exports=function(n,t){var e=-1,r=i(n)?Array(n.length):[];return o(n,function(n,o,i){r[++e]=t(n,o,i)}),r}},762:function(n,t){n.exports=function(n,t){var e=n.length;for(n.sort(t);e--;)n[e]=n[e].value;return n}},763:function(n,t,e){var o=e(764);n.exports=function(n,t,e){for(var i=-1,r=n.criteria,a=t.criteria,s=r.length,l=e.length;++i<s;){var u=o(r[i],a[i]);if(u)return i>=l?u:u*("desc"==e[i]?-1:1)}return n.index-t.index}},764:function(n,t,e){var o=e(92);n.exports=function(n,t){if(n!==t){var e=void 0!==n,i=null===n,r=n==n,a=o(n),s=void 0!==t,l=null===t,u=t==t,c=o(t);if(!l&&!c&&!a&&n>t||a&&s&&u&&!l&&!c||i&&s&&u||!e&&u||!r)return 1;if(!i&&!a&&!c&&n<t||c&&e&&r&&!i&&!a||l&&e&&r||!s&&r||!u)return-1}return 0}},765:function(n,t,e){var o=e(352),i=e(766),r=e(768);n.exports=function(n,t){return r(i(n,t,o),n+"")}},766:function(n,t,e){var o=e(767),i=Math.max;n.exports=function(n,t,e){return t=i(void 0===t?n.length-1:t,0),function(){for(var r=arguments,a=-1,s=i(r.length-t,0),l=Array(s);++a<s;)l[a]=r[t+a];a=-1;for(var u=Array(t+1);++a<t;)u[a]=r[a];return u[t]=e(l),o(n,this,u)}}},767:function(n,t){n.exports=function(n,t,e){switch(e.length){case 0:return n.call(t);case 1:return n.call(t,e[0]);case 2:return n.call(t,e[0],e[1]);case 3:return n.call(t,e[0],e[1],e[2])}return n.apply(t,e)}},768:function(n,t,e){var o=e(769),i=e(771)(o);n.exports=i},769:function(n,t,e){var o=e(770),i=e(358),r=e(352),a=i?function(n,t){return i(n,"toString",{configurable:!0,enumerable:!1,value:o(t),writable:!0})}:r;n.exports=a},770:function(n,t){n.exports=function(n){return function(){return n}}},771:function(n,t){var e=800,o=16,i=Date.now;n.exports=function(n){var t=0,r=0;return function(){var a=i(),s=o-(a-r);if(r=a,s>0){if(++t>=e)return arguments[0]}else t=0;return n.apply(void 0,arguments)}}},778:function(n,t,e){n.exports={aboutCardContainer:"styles-AboutCardContainer-module--about-card-container--2MBcI",disableTransition:"styles-AboutCardContainer-module--disableTransition--3ypp7"}},779:function(n,t,e){n.exports={title:"styles-Title-module--title--KJwsA"}},780:function(n,t,e){n.exports={date:"styles-Date-module--date--1fZ0Q"}},781:function(n,t,e){n.exports={description:"styles-Description-module--description--3FWxT"}},782:function(n,t,e){n.exports={logo:"styles-Logo-module--logo--1aVyE"}},783:function(n,t,e){n.exports={read:"styles-styles-module--read--3y7pF"}},811:function(n,t,e){n.exports={constellationPointsContainer:"styles-ConstellationPointsContainer-module--constellation-points-container--2uNtO",disableTransition:"styles-ConstellationPointsContainer-module--disableTransition--miN2f"}},812:function(n,t,e){n.exports={transformContainer:"styles-TransformContainer-module--transform-container--e4RrP"}},813:function(n,t,e){n.exports={pointMain:"styles-PointMain-module--point-main--2WuOf"}},814:function(n,t,e){n.exports={fakePoint:"styles-FakePoint-module--fake-point--3SMfd"}},815:function(n,t,e){n.exports={point:"styles-Point-module--point--34UEH",isActive:"styles-Point-module--isActive--1kamd"}},816:function(n,t,e){n.exports={newsContainer:"about-NewsContainer-module--news-container--2Mvu0"}},817:function(n,t,e){n.exports={willChangeNews:"about-WillChangeNews-module--will-change-news--bkgeE",disableTransition:"about-WillChangeNews-module--disableTransition--17RjH"}},818:function(n,t,e){n.exports={aboutContainer:"about-styles-module--aboutContainer--wVUoe",isAboutSlide:"about-styles-module--isAboutSlide--2vbvT"}}}]);
//# sourceMappingURL=component---src-pages-about-index-js-4a7744973aee5266e843.js.map