(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{714:function(e,n,t){"use strict";t.r(n);t(18);var i=t(3),a=t.n(i),o=t(0),r=t.n(o),s=t(726),l=t(745),u=t(759),c=t(715),d=t(932);t.d(n,"IndexPage",function(){return g});var g=function(e){function n(){return e.apply(this,arguments)||this}return a()(n,e),n.prototype.render=function(){return r.a.createElement(l.a,Object.assign({},this.props,{withSvg:!0,containerClassName:d.indexContainer,leftSide:r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null),r.a.createElement(c.a,null,"Геосервисы для ",r.a.createElement("br",null)," принятия решений"),r.a.createElement(s.a,{to:"/company",gatsby:!0,big:!0},"О компании"))}))},n}(o.PureComponent);n.default=g},715:function(e,n,t){"use strict";t.d(n,"a",function(){return o}),t.d(n,"b",function(){return r}),t.d(n,"c",function(){return s}),t.d(n,"d",function(){return l});var i=t(4),a=t.n(i),o=a()("h1",null,"BigH1",t(720),"big-h-1","bigH1"),r=a()("h1",null,"H1",t(721),"h-1","h1"),s=a()("h2",null,"H2",t(722),"h-2","h2"),l=a()("h3",null,"H3",t(723),"h-3","h3");a()("p",null,"Paragraph",t(724),"paragraph","paragraph")},720:function(e,n,t){e.exports={bigH1:"Headlines-BigH1-module--big-h-1--12i4p"}},721:function(e,n,t){e.exports={h1:"Headlines-H1-module--h-1--2-f8n",portfolio:"Headlines-H1-module--portfolio--3r1z8"}},722:function(e,n,t){e.exports={h2:"Headlines-H2-module--h-2--1mVJ6",small:"Headlines-H2-module--small--NS77u"}},723:function(e,n,t){e.exports={h3:"Headlines-H3-module--h-3--27MQu"}},724:function(e,n,t){e.exports={paragraph:"Headlines-Paragraph-module--paragraph--2uMT3",big:"Headlines-Paragraph-module--big--35E7x"}},726:function(e,n,t){"use strict";t(18),t(358);var i=t(36),a=t.n(i),o=t(0),r=t.n(o),s=t(2),l=t.n(s),u=t(10),c=t.n(u),d=t(4),g=t.n(d),h=t(26);function m(){return(m=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}var p=r.a.createElement("path",{d:"M11.7 5.3L7.3.9c0-.1-.2-.1-.3-.1-.1 0-.3.1-.4.1l-.7.7c-.1.1-.1.3-.1.4 0 .1.1.3.1.4L8.6 5H.5c-.3 0-.5.2-.5.5v1c0 .3.2.5.5.5h8.1L5.9 9.6c-.1.1-.1.3-.1.4s.1.3.1.4l.7.7c.1.1.2.1.4.1.1 0 .3-.1.4-.1l4.3-4.3c.2-.3.3-.5.3-.8s-.1-.5-.3-.7z"}),b=function(e){return r.a.createElement("svg",m({viewBox:"0 0 12 12"},e),p)};t.d(n,"a",function(){return C});var f=g()("a",null,"NativeLink",t(747),"native-link","nativeLink"),w=t(748),C=function(e){var n,t=e.children,i=e.withArrow,o=void 0===i||i,s=e.gatsby,l=void 0!==s&&s,u=e.className,d=e.big,g=void 0!==d&&d,m=e.white,p=void 0!==m&&m,C=a()(e,["children","withArrow","gatsby","className","big","white"]),v=l?h.Link:f;return r.a.createElement(v,Object.assign({className:c()(u,w.goNextLink,(n={},n[w.big]=g,n[w.white]=p,n))},C),t,o&&r.a.createElement(b,null))};C.propTypes={withArrow:l.a.bool,gatsby:l.a.bool,className:l.a.string,big:l.a.bool,white:l.a.bool}},745:function(e,n,t){"use strict";t(18);var i=t(3),a=t.n(i),o=t(0),r=t.n(o),s=t(2),l=t.n(s),u=t(10),c=t.n(u),d=t(746),g=t(4),h=t.n(g),m=h()("div",null,"Background",t(753),"background","background"),p=t(49),b=t(78),f=t(169),w=t(167),C=function(e){function n(){for(var n,t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return(n=e.call.apply(e,[this].concat(i))||this).state={isResized:!1},n.onResize=function(){var e=n.wrapper;if(e){var t=e.firstElementChild||e.firstChild,i=Math.max(document.documentElement.clientWidth,window.innerWidth||0),a=Math.max(document.documentElement.clientHeight,window.innerHeight||0),o=a>0?i/a:1,r=Object(w.b)(t),s=r.width,l=r.height;(l>0?s/l:1)>o?(t.style.width="auto",t.style.height="100%"):(t.style.width="100%",t.style.height="auto"),n.setState({isResized:!0})}},n.onRef=function(e){e&&(n.wrapper=e)},n}a()(n,e);var t=n.prototype;return t.componentDidMount=function(){window.addEventListener("resize",this.onResize),this.onResize()},t.componentWillUnmount=function(){window.removeEventListener("resize",this.onResize)},t.render=function(){var e=this.state.isResized;return r.a.createElement(b.a,{style:{visibility:e?"visible":"hidden"},ref:this.onRef},Object(f.c)())},n}(o.Component),v=function(e){function n(){return e.apply(this,arguments)||this}a()(n,e);var t=n.prototype;return t.shouldComponentUpdate=function(e,n){var t=e.status,i=e.x,a=e.y,o=e.backgroundImage,r=e.disableTransition,s=e.transitionEnd,l=e.backgroundClassName,u=this.props,c=u.status,d=u.x,g=u.y,h=u.backgroundImage,m=u.disableTransition,p=u.transitionEnd,b=u.backgroundClassName;return p!==s||c!==t||d!==i||g!==a||h!==o||m!==r||b!==l},t.render=function(){var e=this.props,n=e.x,t=e.y,i=e.direction,a=e.transitionEnd,o=e.onTransitionEnd,s=e.withSvg,l=e.status,u=e.backgroundClassName,d=e.backgroundImage,g=e.disableTransition,h=e.isAboutPage,w="translate("+n+"px, "+t+"px)",v=a&&h()?{transform:w,transition:"transform 500ms ease"}:{};return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,{style:Object.assign({},v,{backgroundImage:"url("+(d||Object(f.a)(this.props))+")"}),disableTransition:g,onTransitionEnd:o,className:c()(i>0?p.e[l]:p.f[l],p.d[l],p.h[l],b.b.default,Object(f.b)(this.props),u)}),s&&a&&r.a.createElement(m,null,r.a.createElement(C,null)))},n}(o.Component);v.propTypes={x:l.a.number,y:l.a.number,direction:l.a.number,backgroundImage:l.a.string,disableTransition:l.a.bool,backgroundClassName:l.a.string};var y=t(63),S=h()("section",null,"WillChange",t(754),"will-change","willChange"),x=h()("main",null,"Content",t(755),"content","content"),E=h()("div",null,"LeftSide",t(756),"left-side","leftSide"),N=h()("div",null,"RightSide",t(757),"right-side","rightSide"),k=function(e){function n(){return e.apply(this,arguments)||this}a()(n,e);var t=n.prototype;return t.shouldComponentUpdate=function(e,n){var t=e.status,i=e.selectedSectionIndex,a=e.transitionEnd,o=e.x,r=e.y,s=e.backgroundImage,l=e.disableTransition,u=e.isMobile,c=this.props,d=c.status,g=c.selectedSectionIndex,h=c.transitionEnd,m=c.x,p=c.y,b=c.backgroundImage,f=c.disableTransition,w=c.isMobile;return d!==t||g!==i||h!==a||m!==o||p!==r||b!==s||f!==l||w!==u},t.render=function(){var e=this.props,n=e.status,t=e.willChangeRightSideClassName,i=e.rightSideClassName,a=e.withRightSideAnimation,o=e.children,s=e.disableTransition;return r.a.createElement(S,{className:t},r.a.createElement(N,{disableTransition:s,className:c()(i,a&&p.g[n],a&&p.d[n],a&&p.h[n])},o))},n}(o.Component);k.propTypes={status:l.a.string,willChangeRightSideClassName:l.a.string,rightSideClassName:l.a.string,withRightSideAnimation:l.a.bool,selectedSectionIndex:l.a.number,transitionEnd:l.a.bool,x:l.a.number,y:l.a.number,backgroundImage:l.a.string,disableTransition:l.a.bool,isMobile:l.a.bool};var T=t(172),H=t(176);t.d(n,"a",function(){return P});var R=function(e){function n(){return e.apply(this,arguments)||this}return a()(n,e),n.prototype.render=function(){var e=this.props,n=e.status,t=e.leftSide,i=e.leftSideClassName,a=e.rightSide,o=e.rightSideClassName,s=e.children,l=e.backgroundImage,u=e.containerClassName,d=e.willChangeLeftSideClassName,g=e.willChangeRightSideClassName,h=e.withRightSideAnimation,m=e.onLeftSideSectionRef,b=e.x,f=e.y,w=e.disableTransition,C=e.isMobile,y=e.scrollTop,N=e.direction,R=e.onTransitionEnd,P=e.transitionEnd,L=e.selectedSectionIndex,z=e.backgroundClassName,I="translateY("+y+"px)";return r.a.createElement(T.a,null,r.a.createElement(S,{fullViewport:!0,style:{transform:I,willChange:P&&"transform",overflow:P?"hidden":"visible"}},r.a.createElement(v,Object.assign({},this.props,{backgroundClassName:z,transitionEnd:P,onTransitionEnd:R,disableTransition:w,direction:N}))),r.a.createElement(x,{className:c()(u,H.a.container)},r.a.createElement(S,{className:d,left:!0,style:{transform:I,willChange:P&&"transform"}},r.a.createElement(E,{disableTransition:w,ref:m,className:c()(i,p.g[n],p.d[n],p.h[n])},t)),a&&r.a.createElement(k,{isMobile:C,disableTransition:w,backgroundImage:l,x:b,y:f,transitionEnd:P,selectedSectionIndex:L,status:n,willChangeRightSideClassName:g,withRightSideAnimation:h,rightSideClassName:o},a),s))},n}(o.Component);R.propTypes={status:l.a.string,leftSideClassName:l.a.string,rightSideClassName:l.a.string,scrollable:l.a.bool,withSvg:l.a.bool,backgroundImage:l.a.string,containerClassName:l.a.string,leftSideWillChangeClassName:l.a.string,willChangeLeftSideClassName:l.a.string,willChangeRightSideClassName:l.a.string,x:l.a.number,y:l.a.number,backgroundClassName:l.a.string,withRightSideAnimation:l.a.bool,onLeftSideSectionRef:l.a.func,disableTransition:l.a.bool,isMobile:l.a.bool},R.defaultProps={withRightSideAnimation:!0};var P=Object(d.a)(function(e){return r.a.createElement(y.a,null,function(n){return r.a.createElement(R,Object.assign({},e,n))})})},746:function(e,n,t){"use strict";t(18),t(65),t(64);var i=t(3),a=t.n(i),o=t(0),r=t.n(o);n.a=function(e){return function(n){function t(){for(var e,t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return(e=n.call.apply(n,[this].concat(i))||this).isHomePage=function(){return"/"===e.props.location.pathname},e.isPortfolioPage=function(){return e.props.location.pathname.includes("/portfolio")},e.isAboutPage=function(){return e.props.location.pathname.includes("/about")},e.isJobsPage=function(){return e.props.location.pathname.includes("/jobs")},e.isContactsPage=function(){return e.props.location.pathname.includes("/contacts")},e}return a()(t,n),t.prototype.render=function(){return r.a.createElement(e,Object.assign({isHomePage:this.isHomePage,isPortfolioPage:this.isPortfolioPage,isAboutPage:this.isAboutPage,isJobsPage:this.isJobsPage,isContactsPage:this.isContactsPage},this.props))},t}(o.Component)}},747:function(e,n,t){e.exports={nativeLink:"GoNextLink-NativeLink-module--native-link--3_Bwl"}},748:function(e,n,t){e.exports={goNextLink:"GoNextLink-styles-module--goNextLink--ncLaN",big:"GoNextLink-styles-module--big--ZwPkb",white:"GoNextLink-styles-module--white--2_Ntg"}},753:function(e,n,t){e.exports={background:"Background-module--background--27e63",disableTransition:"Background-module--disableTransition--2XUzH"}},754:function(e,n,t){e.exports={willChange:"WillChange-module--will-change--1oDMy",fullViewport:"WillChange-module--fullViewport--2Uiap",left:"WillChange-module--left--2CJQr"}},755:function(e,n,t){e.exports={content:"Content-module--content--2fV2v"}},756:function(e,n,t){e.exports={leftSide:"LeftSide-module--left-side--SqrV0",disableTransition:"LeftSide-module--disableTransition--3wo4E"}},757:function(e,n,t){e.exports={rightSide:"RightSide-module--right-side--3trea",disableTransition:"RightSide-module--disableTransition--6HDUR"}},759:function(e,n,t){"use strict";t.d(n,"a",function(){return a});var i=t(4),a=t.n(i)()("hr",null,"HorizontalRule",t(760),"horizontal-rule","horizontalRule")},760:function(e,n,t){e.exports={horizontalRule:"HorizontalRule-module--horizontal-rule--2hj-Y"}},932:function(e,n,t){e.exports={indexContainer:"index-styles-module--indexContainer--3emgw"}}}]);
//# sourceMappingURL=component---src-pages-index-js-08daa37cb8370991ae97.js.map