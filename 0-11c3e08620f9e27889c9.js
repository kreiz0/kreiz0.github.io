(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{704:function(e,n,t){"use strict";t.d(n,"a",function(){return a}),t.d(n,"b",function(){return i}),t.d(n,"c",function(){return l}),t.d(n,"d",function(){return s});var r=t(4),o=t.n(r),a=o()("h1",null,"BigH1",t(714),"big-h-1","bigH1"),i=o()("h1",null,"H1",t(715),"h-1","h1"),l=o()("h2",null,"H2",t(716),"h-2","h2"),s=o()("h3",null,"H3",t(717),"h-3","h3");o()("p",null,"Paragraph",t(718),"paragraph","paragraph")},707:function(e,n,t){"use strict";t.d(n,"a",function(){return o});var r=t(4),o=t.n(r)()("p",null,"Paragraph",t(763),"paragraph","paragraph")},713:function(e,n,t){"use strict";t.d(n,"a",function(){return m});t(18);var r=t(36),o=t.n(r),a=(t(351),t(0)),i=t.n(a),l=t(4),s=t.n(l),c=t(2),u=t.n(c),d=s()("a",null,"Link",t(732),"link","link"),p=function(e){if(e){var n=0===e.toString().indexOf("http");return 0===e.toString().indexOf("www")||n?e:"https://"+e}},m=function(e){var n=e.href,t=e.children,r=o()(e,["href","children"]);return i.a.createElement(d,Object.assign({href:p(n),target:"_blank",rel:"noopener noreferrer"},r),t)};m.propTypes={href:u.a.string}},714:function(e,n,t){e.exports={bigH1:"Headlines-BigH1-module--big-h-1--12i4p"}},715:function(e,n,t){e.exports={h1:"Headlines-H1-module--h-1--2-f8n",portfolio:"Headlines-H1-module--portfolio--3r1z8"}},716:function(e,n,t){e.exports={h2:"Headlines-H2-module--h-2--1mVJ6",small:"Headlines-H2-module--small--NS77u"}},717:function(e,n,t){e.exports={h3:"Headlines-H3-module--h-3--27MQu"}},718:function(e,n,t){e.exports={paragraph:"Headlines-Paragraph-module--paragraph--2uMT3",big:"Headlines-Paragraph-module--big--35E7x"}},720:function(e,n,t){"use strict";t.d(n,"a",function(){return u});t(75),t(62),t(43),t(76);var r=t(3),o=t.n(r),a=t(0),i=t(2),l=t.n(i),s=t(729),c=t.n(s),u=function(e){function n(){return e.apply(this,arguments)||this}o()(n,e);var t=n.prototype;return t.componentDidMount=function(){this.loadImages()},t.shouldComponentUpdate=function(e,n){var t=e.images,r=this.props.images;return!c()(r,t)},t.componentDidUpdate=function(e,n){var t=e.images,r=this.props.images;c()(t,r)||this.loadImages()},t.loadEachImage=function(e){return new Promise(function(n){var t=new Image;t.src=e,t.onload=function(){n(e)},t.onerror=function(){console.error("failed to load ",e)}})},t.loadImages=function(){var e=this,n=this.props,t=n.images,r=n.onLoad,o=n.onError,a=[];t?(Array.isArray(t)?t.forEach(function(n){return a.push(e.loadEachImage(n))}):a.push(this.loadEachImage(t)),Promise.all(a).then(function(e){r&&r(e)}).catch(function(e){return o&&o(e)})):r&&r()},t.render=function(){return null},n}(a.Component);u.propTypes={images:l.a.oneOfType([l.a.arrayOf(l.a.string),l.a.string]),onLoad:l.a.func,onError:l.a.func}},729:function(e,n,t){var r=t(165);e.exports=function(e,n){return r(e,n)}},730:function(e,n,t){"use strict";t(18),t(350),t(77);var r=t(3),o=t.n(r),a=t(0),i=t.n(a),l=t(2),s=t.n(l),c=t(10),u=t.n(c),d=t(713),p=t(19);function m(){return(m=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var f=i.a.createElement("path",{d:"M11.252 7.252L6 11.752l-5.252-4.5m10.504-6L6 5.752l-5.252-4.5",fill:"none",fillRule:"evenodd",stroke:"#FFF",strokeWidth:2,opacity:.5}),h=function(e){return i.a.createElement("svg",m({width:12,height:13},e),f)},g=t(36),b=t.n(g),y=t(4),v=t.n(y),x=t(115),H=v()(x.a,null,"IconButtonContainer",t(857),"icon-button-container","iconButtonContainer"),k=function(e){var n=e.children,t=b()(e,["children"]);return i.a.createElement(H,t,n)};k.propTypes={component:s.a.bool};var w=function(e){return i.a.createElement(k,e,i.a.createElement(h,null))};w.propTypes={component:s.a.bool};var E=t(94),S=t(89),C=(t(858),t(859),t(860)),B=t(704),I=t(707),j=v()("header",null,"HeaderContainer",t(861),"header-container","headerContainer"),O=v()("div",null,"HeaderBlock",t(862),"header-block","headerBlock"),L=v()("section",null,"Section",t(863),"section","section"),N=v()(L,null,"LeftSide",t(864),"left-side","leftSide"),T=v()(L,null,"RightSide",t(865),"right-side","rightSide"),D=v()(B.b,null,"Title",t(866),"title","title"),P=v()(I.a,null,"Description",t(867),"description","description"),M=v()("label",null,"Badge",t(868),"badge","badge"),A=t(869),F=t(720);t.d(n,"a",function(){return U});var J=function(e){function n(){for(var n,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))||this).onScrollDown=function(){var e=n.props,t=e.scrollbar,r=e.native,o=Math.max(document.documentElement.clientHeight,window.innerHeight||0)-Object(E.b)();r?window.scrollTo({top:o,behavior:"smooth"}):t&&t.scrollTo(0,o,400)},n}o()(n,e);var t=n.prototype;return t.componentDidMount=function(){var e=this.props,n=e.location,t=e.projectId,r=Object(p.a)(n.pathname).replace(/\//g,"");localStorage.setItem(r,t)},t.shouldComponentUpdate=function(e,n){var t=e.scrollbar,r=e.animate,o=e.native,a=this.props,i=a.scrollbar,l=a.animate,s=a.native;return i!==t||l!==r||s!==o},t.render=function(){var e,n=this.props,t=n.children,r=n.projectBackgroundColor,o=n.type,a=n.text,l=n.title,s=n.description,c=n.link,p=n.rightSide,m=n.leftSideClassName,f=n.rightSideClassName,h=n.containerClassName,g=n.leftSide,b=n.animate,y=n.onLoad,v=n.images;return i.a.createElement(j,{className:h,style:{background:r}},i.a.createElement(F.a,{images:v,onLoad:y}),i.a.createElement(O,null,i.a.createElement(N,{animate:b,className:u()((e={},e[C.fadeIn]=!v,e),m)},o&&i.a.createElement(M,null,o),i.a.createElement(D,null,l||a),i.a.createElement(P,null,s),c&&i.a.createElement(d.a,{className:A.projectLink,href:c},c),g),i.a.createElement(T,{className:f},p),i.a.createElement(w,{className:A.scrollDownButton,onClick:this.onScrollDown})),t)},n}(a.Component);J.propTypes={projectBackgroundColor:s.a.string,type:s.a.string,title:s.a.string,text:s.a.string,rightSide:s.a.element,scrollbar:s.a.object,leftSideClassName:s.a.string,containerClassName:s.a.string,leftSide:s.a.element,projectId:s.a.string,animate:s.a.bool,onLoad:s.a.func,images:s.a.arrayOf(s.a.string)};var U=function(e){return i.a.createElement(S.a,null,function(n){var t=n.scrollbar,r=n.native;return i.a.createElement(J,Object.assign({scrollbar:t,native:r},e))})}},732:function(e,n,t){e.exports={link:"OutsideLink-Link-module--link--1-yuh"}},763:function(e,n,t){e.exports={paragraph:"Paragraph-module--paragraph--2NKdA",withoutMargin:"Paragraph-module--withoutMargin--29OQ5"}},857:function(e,n,t){e.exports={iconButtonContainer:"IconButton-IconButtonContainer-module--icon-button-container--1O2Ae"}},858:function(e,n,t){e.exports={entered:"animation-transition-module--entered--Uqfdv",exiting:"animation-transition-module--exiting--3jrjm"}},859:function(e,n,t){e.exports={entering:"animation-fade-module--entering--BFK4y",entered:"animation-fade-module--entered--3cCf2",exiting:"animation-fade-module--exiting--2N3Kr"}},860:function(e,n,t){e.exports={fadeIn:"animation-styles-module--fadeIn--r57Cf",fadeOut:"animation-styles-module--fadeOut--37bFW"}},861:function(e,n,t){e.exports={headerContainer:"styles-HeaderContainer-module--header-container--HusIN"}},862:function(e,n,t){e.exports={headerBlock:"styles-HeaderBlock-module--header-block--3H3xV"}},863:function(e,n,t){e.exports={section:"styles-Section-module--section--1ywnx"}},864:function(e,n,t){e.exports={leftSide:"styles-LeftSide-module--left-side--1IzfV",animate:"styles-LeftSide-module--animate--1SY0_"}},865:function(e,n,t){e.exports={rightSide:"styles-RightSide-module--right-side--J2p-7"}},866:function(e,n,t){e.exports={title:"styles-Title-module--title--38Pfe"}},867:function(e,n,t){e.exports={description:"styles-Description-module--description--1o50t"}},868:function(e,n,t){e.exports={badge:"styles-Badge-module--badge--3lGgu"}},869:function(e,n,t){e.exports={scrollDownButton:"styles-styles-module--scrollDownButton--2mQg4",projectLink:"styles-styles-module--projectLink--2cSIj"}}}]);
//# sourceMappingURL=0-11c3e08620f9e27889c9.js.map