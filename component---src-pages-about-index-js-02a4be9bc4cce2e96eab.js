(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{710:function(n,t,e){"use strict";e.r(t);e(18);var i=e(3),o=e.n(i),r=e(0),a=e.n(r),s=e(2),l=e.n(s),u=e(797),c=e.n(u),d=e(10),f=e.n(d),p=e(726),m=e(792),v=e(749),g=(e(356),e(118)),h=e(719),b=e(93),x=e(774),y=e(752),w=e(49),C=function(n){function t(){return n.apply(this,arguments)||this}return o()(t,n),t.prototype.render=function(){var n=this.props,t=n.status,e=n.direction,i=n.disableTransition,o=n.description,r=n.title,s=n.date,l=n.logo,u=n.isSwipeEvent,c=n.link,d=u?e>0?y.g[t]:y.h[t]:e>0?y.i[t]:y.f[t];return a.a.createElement(x.a,{disableTransition:i,className:f()(d,w.d[t],y.j[t])},a.a.createElement(x.e,null,r),a.a.createElement(x.b,null,function(n){var t=new Date(n);if(t instanceof Date){var e=t.getDate(),i=t.getMonth();return(e<10?"0"+e:e)+"."+(i+1<10?"0":"")+(i+1)+"."+t.getFullYear()}return"Invalid date"}(s)),a.a.createElement(x.c,null,o," ",c&&a.a.createElement(h.a,{href:c,className:x.f.read},"Читать")),l&&a.a.createElement(x.d,{src:l,alt:"logo"}))},t}(r.PureComponent),E=function(n){function t(){for(var t,e=arguments.length,i=new Array(e),o=0;o<e;o++)i[o]=arguments[o];return(t=n.call.apply(n,[this].concat(i))||this).onSwiped=function(n){var e=n.isLeft,i=n.isRight,o=n.xRatio,r=t.props.onSectionChange;e&&o>25?r({value:1,isSwipeEvent:!0}):i&&o>25&&r({value:-1,isSwipeEvent:!0})},t}return o()(t,n),t.prototype.render=function(){var n=this,t=this.props,e=t.direction,i=t.title,o=t.date,r=t.description,s=t.logo,l=t.id;return a.a.createElement(b.a,{onSwiped:this.onSwiped},a.a.createElement(g.TransitionGroup,null,a.a.createElement(g.Transition,{key:l+"-news-"+e,timeout:{enter:100,exit:200}},function(t){return a.a.createElement(C,Object.assign({},n.props,{status:t,date:o,logo:s,title:i,description:r}))})))},t}(r.PureComponent);E.propTypes={title:l.a.string,date:l.a.string,description:l.a.string,logo:l.a.string,id:l.a.string,direction:l.a.number,isSwipeEvent:l.a.bool,disableTransition:l.a.bool};var S=e(745),T=e(43),k=e(63),P=(e(50),e(117),e(88)),A=e.n(P),M=e(4),N=e.n(M),R=N()("div",null,"ConstellationPointsContainer",e(823),"constellation-points-container","constellationPointsContainer"),D=N()("div",null,"TransformContainer",e(824),"transform-container","transformContainer"),O=N()("div",null,"PointMain",e(825),"point-main","pointMain"),I=N()(O,null,"FakePoint",e(826),"fake-point","fakePoint"),j=N()(O,null,"Point",e(827),"point","point"),F=function(n){function t(t){var e;return(e=n.call(this,t)||this).points=[],e.fakePoint=null,e.transform=function(){var n=e.props,t=n.selectedSectionIndex,i=n.onTransform,o=n.x,r=n.y,a=e.fakePoint.getBoundingClientRect(),s=a.left,l=a.top,u=e.points[t].getBoundingClientRect(),c=u.left,d=u.top;i&&i({x:s-c+o,y:l-d+r})},e.savePointsRef=function(n){var t=e.props.pointsAmount;n&&e.points.length!==t&&e.points.push(n)},e.onFakePointRef=function(n){n&&(e.fakePoint=n)},e.debouncedTransform=A()(e.transform,200),e}o()(t,n);var e=t.prototype;return e.componentDidMount=function(){window.addEventListener("resize",this.debouncedTransform)},e.componentWillUnmount=function(){window.removeEventListener("resize",this.debouncedTransform)},e.componentDidUpdate=function(n,t){var e=n.selectedSectionIndex,i=this.props,o=i.selectedSectionIndex,r=i.transitionEnd;o!==e&&this.points[o]&&this.fakePoint&&r&&this.transform()},e.render=function(){var n=this,t=this.props,e=t.selectedSectionIndex,i=t.pointsAmount,o=t.x,r=t.y,s=t.status,l=t.disableTransition,u=t.onSectionChange,c=t.isMobile;return a.a.createElement(R,{disableTransition:l,className:f()(w.d[s],w.h[s])},a.a.createElement(I,{ref:this.onFakePointRef}),a.a.createElement(D,{style:{transform:"translate("+o+"px, "+r+"px)"}},Array.from({length:i},function(t,i){return a.a.createElement(j,{onMouseUp:c?void 0:function(){return u({index:i})},onTouchEnd:c?void 0:function(){return u({index:i,isSwipeEvent:!0})},ref:n.savePointsRef,key:"point-"+i,isActive:i===e})})))},t}(r.PureComponent);F.propTypes={selectedSectionIndex:l.a.number,onTransform:l.a.func,x:l.a.number,y:l.a.number,status:l.a.string,transitionEnd:l.a.bool,disableTransition:l.a.bool,onSectionChange:l.a.func,isMobile:l.a.bool},F.defaultProps={pointsAmount:5,x:0,y:0};var L=e(38),W=N()("div",null,"NewsContainer",e(828),"news-container","newsContainer"),B=N()("div",null,"WillChangeNews",e(829),"will-change-news","willChangeNews"),U=e(830);e.d(t,"About",function(){return J}),e.d(t,"aboutPageQuery",function(){return z});var J=function(n){function t(){for(var t,e=arguments.length,i=new Array(e),o=0;o<e;o++)i[o]=arguments[o];return(t=n.call.apply(n,[this].concat(i))||this).state={x:0,y:0,isMobile:!1},t.onTransform=function(n){return t.setState(n)},t.onPageChange=function(n,t,e){e(n>t?{value:1,isSwipeEvent:!0}:{value:-1,isSwipeEvent:!0})},t}o()(t,n);var e=t.prototype;return e.componentDidMount=function(){var n=Object(L.a)().parsedResult.platform.type;this.setState({isMobile:"mobile"===n})},e.render=function(){var n=this,t=this.props.data,e=t.allMarkdownRemark,i=this.props,o=i.status,r=i.disableTransition,s=this.state,l=s.x,u=s.y,d=s.isMobile;return a.a.createElement(k.a,null,function(i){var s=i.selectedSectionIndex,g=i.onSectionChange,h=i.sectionDirection,b=i.isSwipeEvent,x=i.transitionEnd,y=e&&e.edges?c()(e.edges.map(function(n){var t=n.node;return Object.assign({},t.frontmatter,{id:t.id})}),"date").reverse():[],C=e&&e.edges[s]?y[s]:{title:e?"Пусто":"Список пуст",description:e?"Заполните статью в системе управления содержимым":"Заполните статьи в системе управления содержимым"},k=t.markdownRemark;return a.a.createElement(S.a,Object.assign({},n.props,{disableTransition:r,withRightSideAnimation:!1,x:l,y:u,backgroundClassName:U.isAboutSlide,leftSide:a.a.createElement(a.a.Fragment,null,a.a.createElement(T.a,{as:"h1"},k&&k.frontmatter.title),a.a.createElement(p.a,{to:"/news",gatsby:!0,big:!0},"Все комментарии")),containerClassName:U.aboutContainer,rightSide:a.a.createElement(W,null,a.a.createElement(F,{isMobile:d,disableTransition:r,transitionEnd:x,status:o,x:l,y:u,onTransform:n.onTransform,selectedSectionIndex:s,onSectionChange:g}),a.a.createElement(B,{disableTransition:r,className:f()(w.g[o],w.d[o],w.h[o])},a.a.createElement(m.a,{sections:y,selectedSectionIndex:s}),a.a.createElement(E,Object.assign({disableTransition:r,isSwipeEvent:b,onSectionChange:g,direction:h},C)),a.a.createElement(v.a,{pageCount:y.length,currentPage:s+1,onPageChange:function(t){return n.onPageChange(t,s,g)}})))}))})},t}(r.Component);J.propTypes={data:l.a.object.isRequired,status:l.a.string,disableTransition:l.a.bool};t.default=J;var z="1005722639"},719:function(n,t,e){"use strict";e.d(t,"a",function(){return p});e(18);var i=e(36),o=e.n(i),r=(e(357),e(0)),a=e.n(r),s=e(4),l=e.n(s),u=e(2),c=e.n(u),d=l()("a",null,"Link",e(725),"link","link"),f=function(n){if(n){var t=0===n.toString().indexOf("http");return 0===n.toString().indexOf("www")||t?n:"https://"+n}},p=function(n){var t=n.href,e=n.children,i=o()(n,["href","children"]);return a.a.createElement(d,Object.assign({href:f(t),target:"_blank",rel:"noopener noreferrer"},i),e)};p.propTypes={href:c.a.string}},725:function(n,t,e){n.exports={link:"OutsideLink-Link-module--link--1-yuh"}},750:function(n,t,e){"use strict";e.d(t,"a",function(){return o});var i=e(4),o=e.n(i)()("article",null,"Blank",e(751),"blank","blank")},751:function(n,t,e){n.exports={blank:"Blank-module--blank--2YNtX"}},768:function(n,t,e){var i=e(173),o=e(171),r=e(174),a=e(66);n.exports=function(n,t,e){if(!a(e))return!1;var s=typeof t;return!!("number"==s?o(e)&&r(t,e.length):"string"==s&&t in e)&&i(e[t],n)}},774:function(n,t,e){"use strict";e.d(t,"a",function(){return a}),e.d(t,"e",function(){return s}),e.d(t,"b",function(){return l}),e.d(t,"c",function(){return u}),e.d(t,"d",function(){return c});var i=e(4),o=e.n(i),r=e(750),a=o()(r.a,null,"AboutCardContainer",e(775),"about-card-container","aboutCardContainer"),s=o()("h4",null,"Title",e(776),"title","title"),l=o()("span",null,"Date",e(777),"date","date"),u=o()("p",null,"Description",e(778),"description","description"),c=o()("img",null,"Logo",e(779),"logo","logo"),d=e(780);t.f=d},775:function(n,t,e){n.exports={aboutCardContainer:"styles-AboutCardContainer-module--about-card-container--2MBcI",disableTransition:"styles-AboutCardContainer-module--disableTransition--3ypp7"}},776:function(n,t,e){n.exports={title:"styles-Title-module--title--KJwsA"}},777:function(n,t,e){n.exports={date:"styles-Date-module--date--1fZ0Q"}},778:function(n,t,e){n.exports={description:"styles-Description-module--description--3FWxT"}},779:function(n,t,e){n.exports={logo:"styles-Logo-module--logo--1aVyE"}},780:function(n,t,e){n.exports={read:"styles-styles-module--read--3y7pF"}},797:function(n,t,e){var i=e(798),o=e(800),r=e(805),a=e(768),s=r(function(n,t){if(null==n)return[];var e=t.length;return e>1&&a(n,t[0],t[1])?t=[]:e>2&&a(t[0],t[1],t[2])&&(t=[t[0]]),o(n,i(t,1),[])});n.exports=s},798:function(n,t,e){var i=e(364),o=e(799);n.exports=function n(t,e,r,a,s){var l=-1,u=t.length;for(r||(r=o),s||(s=[]);++l<u;){var c=t[l];e>0&&r(c)?e>1?n(c,e-1,r,a,s):i(s,c):a||(s[s.length]=c)}return s}},799:function(n,t,e){var i=e(95),o=e(177),r=e(39),a=i?i.isConcatSpreadable:void 0;n.exports=function(n){return r(n)||o(n)||!!(a&&n&&n[a])}},800:function(n,t,e){var i=e(369),o=e(368),r=e(801),a=e(802),s=e(365),l=e(803),u=e(359);n.exports=function(n,t,e){var c=-1;t=i(t.length?t:[u],s(o));var d=r(n,function(n,e,o){return{criteria:i(t,function(t){return t(n)}),index:++c,value:n}});return a(d,function(n,t){return l(n,t,e)})}},801:function(n,t,e){var i=e(367),o=e(171);n.exports=function(n,t){var e=-1,r=o(n)?Array(n.length):[];return i(n,function(n,i,o){r[++e]=t(n,i,o)}),r}},802:function(n,t){n.exports=function(n,t){var e=n.length;for(n.sort(t);e--;)n[e]=n[e].value;return n}},803:function(n,t,e){var i=e(804);n.exports=function(n,t,e){for(var o=-1,r=n.criteria,a=t.criteria,s=r.length,l=e.length;++o<s;){var u=i(r[o],a[o]);if(u)return o>=l?u:u*("desc"==e[o]?-1:1)}return n.index-t.index}},804:function(n,t,e){var i=e(94);n.exports=function(n,t){if(n!==t){var e=void 0!==n,o=null===n,r=n==n,a=i(n),s=void 0!==t,l=null===t,u=t==t,c=i(t);if(!l&&!c&&!a&&n>t||a&&s&&u&&!l&&!c||o&&s&&u||!e&&u||!r)return 1;if(!o&&!a&&!c&&n<t||c&&e&&r&&!o&&!a||l&&e&&r||!s&&r||!u)return-1}return 0}},805:function(n,t,e){var i=e(359),o=e(806),r=e(808);n.exports=function(n,t){return r(o(n,t,i),n+"")}},806:function(n,t,e){var i=e(807),o=Math.max;n.exports=function(n,t,e){return t=o(void 0===t?n.length-1:t,0),function(){for(var r=arguments,a=-1,s=o(r.length-t,0),l=Array(s);++a<s;)l[a]=r[t+a];a=-1;for(var u=Array(t+1);++a<t;)u[a]=r[a];return u[t]=e(l),i(n,this,u)}}},807:function(n,t){n.exports=function(n,t,e){switch(e.length){case 0:return n.call(t);case 1:return n.call(t,e[0]);case 2:return n.call(t,e[0],e[1]);case 3:return n.call(t,e[0],e[1],e[2])}return n.apply(t,e)}},808:function(n,t,e){var i=e(809),o=e(811)(i);n.exports=o},809:function(n,t,e){var i=e(810),o=e(366),r=e(359),a=o?function(n,t){return o(n,"toString",{configurable:!0,enumerable:!1,value:i(t),writable:!0})}:r;n.exports=a},810:function(n,t){n.exports=function(n){return function(){return n}}},811:function(n,t){var e=800,i=16,o=Date.now;n.exports=function(n){var t=0,r=0;return function(){var a=o(),s=i-(a-r);if(r=a,s>0){if(++t>=e)return arguments[0]}else t=0;return n.apply(void 0,arguments)}}},823:function(n,t,e){n.exports={constellationPointsContainer:"styles-ConstellationPointsContainer-module--constellation-points-container--2uNtO",disableTransition:"styles-ConstellationPointsContainer-module--disableTransition--miN2f"}},824:function(n,t,e){n.exports={transformContainer:"styles-TransformContainer-module--transform-container--e4RrP"}},825:function(n,t,e){n.exports={pointMain:"styles-PointMain-module--point-main--2WuOf"}},826:function(n,t,e){n.exports={fakePoint:"styles-FakePoint-module--fake-point--3SMfd"}},827:function(n,t,e){n.exports={point:"styles-Point-module--point--34UEH",isActive:"styles-Point-module--isActive--1kamd"}},828:function(n,t,e){n.exports={newsContainer:"about-NewsContainer-module--news-container--2Mvu0"}},829:function(n,t,e){n.exports={willChangeNews:"about-WillChangeNews-module--will-change-news--bkgeE",disableTransition:"about-WillChangeNews-module--disableTransition--17RjH"}},830:function(n,t,e){n.exports={aboutContainer:"about-styles-module--aboutContainer--wVUoe",isAboutSlide:"about-styles-module--isAboutSlide--2vbvT"}}}]);
//# sourceMappingURL=component---src-pages-about-index-js-02a4be9bc4cce2e96eab.js.map