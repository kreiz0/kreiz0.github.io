(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1069:function(n,t,e){n.exports={container:"styles-Container-module--container--2o2DT"}},1070:function(n,t,e){n.exports={content:"styles-Content-module--content--gRDdm"}},1071:function(n,t,e){n.exports={hr:"styles-Hr-module--hr--1Ds_i"}},1072:function(n,t,e){n.exports={title:"styles-Title-module--title--3xH1I"}},1073:function(n,t,e){n.exports={container:"styles-Container-module--container--2H9ja"}},1074:function(n,t,e){n.exports={logo:"styles-Logo-module--logo--1dcgc"}},1075:function(n,t,e){n.exports={title:"styles-Title-module--title--V65bI"}},1076:function(n,t,e){},1077:function(n,t,e){n.exports={description:"styles-Description-module--description--11FJ6"}},1078:function(n,t,e){n.exports={read:"styles-styles-module--read--y-UKL"}},1079:function(n,t,e){n.exports={section:"news-Section-module--section--39TI8"}},1080:function(n,t,e){n.exports={column:"news-Column-module--column--dyw77"}},700:function(n,t,e){"use strict";e.r(t);e(18);var o=e(3),r=e.n(o),i=e(0),l=e.n(i),a=e(2),u=e.n(a),c=e(706),s=e(707),d=e(4),p=e.n(d),f=e(729),m=p()("header",null,"Container",e(1069),"container","container"),h=p()("div",null,"Content",e(1070),"content","content"),g=p()(f.a,null,"Hr",e(1071),"hr","hr"),y=p()(c.a,null,"Title",e(1072),"title","title"),b=function(n){var t=n.title;return l.a.createElement(m,null,l.a.createElement(h,null,l.a.createElement(g,null),l.a.createElement(y,null,t)))};b.propTypes={title:u.a.string};e(350);var x=e(713),H=e(738),k=p()("article",null,"Container",e(1073),"container","container"),v=p()("img",null,"Logo",e(1074),"logo","logo"),E=p()("h2",null,"Title",e(1075),"title","title"),w=p()(H.b,null,"PublishDate",e(1076),"publish-date","publishDate"),C=p()("p",null,"Description",e(1077),"description","description"),T=e(1078),D=function(n){var t=n.date,e=n.description,o=n.link,r=n.logo,i=n.title;return l.a.createElement(k,null,l.a.createElement(v,{src:r}),l.a.createElement(E,null,i),l.a.createElement(w,null,t),l.a.createElement(C,null,e),l.a.createElement(x.a,{href:o,className:T.read},"Читать"))};D.propTypes={date:u.a.string,description:u.a.string,link:u.a.string,logo:u.a.string,title:u.a.string};var P=e(708),S=p()(P.a,null,"Section",e(1079),"section","section"),L=p()("div",null,"Column",e(1080),"column","column");e.d(t,"newsPageQuery",function(){return z});var B=function(n){function t(){return n.apply(this,arguments)||this}return r()(t,n),t.prototype.render=function(){var n=this.props.data.allMarkdownRemark,t=function(n,t){for(var e=n.slice(),o=[],r=0;r<t;r++)o.push([]);return e.reduce(function(n,e,o){return n[o%t].push(e),n},o)}(n?n.edges:[],2);return l.a.createElement(l.a.Fragment,null,l.a.createElement(b,{title:"СМИ о нас"}),l.a.createElement(s.a,{as:"main"},l.a.createElement(S,{as:"section"},!n&&l.a.createElement(c.c,null,"Список статей пуст"),t.map(function(t,e){return l.a.createElement(L,{key:e},!n&&l.a.createElement(c.c,null,"Список статей пуст"),t.map(function(n){var t=n.node;return l.a.createElement(D,Object.assign({key:t.id},t.frontmatter))}))}))))},t}(i.PureComponent);B.propTypes={data:u.a.object.isRequired};t.default=B;var z="3260919358"},706:function(n,t,e){"use strict";e.d(t,"a",function(){return i}),e.d(t,"b",function(){return l}),e.d(t,"c",function(){return a}),e.d(t,"d",function(){return u});var o=e(4),r=e.n(o),i=r()("h1",null,"BigH1",e(714),"big-h-1","bigH1"),l=r()("h1",null,"H1",e(715),"h-1","h1"),a=r()("h2",null,"H2",e(716),"h-2","h2"),u=r()("h3",null,"H3",e(717),"h-3","h3");r()("p",null,"Paragraph",e(718),"paragraph","paragraph")},707:function(n,t,e){"use strict";e.d(t,"a",function(){return r});var o=e(4),r=e.n(o)()("section",null,"Section",e(710),"section","section")},708:function(n,t,e){"use strict";e.d(t,"a",function(){return r});var o=e(4),r=e.n(o)()("article",null,"Article",e(711),"article","article")},710:function(n,t,e){n.exports={section:"Section-module--section--1ccUB",withoutPaddingTop:"Section-module--withoutPaddingTop--1SUgL",withoutPaddingBottom:"Section-module--withoutPaddingBottom--3nN5A"}},711:function(n,t,e){n.exports={article:"Article-module--article--2ThG2"}},713:function(n,t,e){"use strict";e.d(t,"a",function(){return f});e(18);var o=e(36),r=e.n(o),i=(e(352),e(0)),l=e.n(i),a=e(4),u=e.n(a),c=e(2),s=e.n(c),d=u()("a",null,"Link",e(725),"link","link"),p=function(n){if(n){var t=0===n.toString().indexOf("http");return 0===n.toString().indexOf("www")||t?n:"https://"+n}},f=function(n){var t=n.href,e=n.children,o=r()(n,["href","children"]);return l.a.createElement(d,Object.assign({href:p(t),target:"_blank",rel:"noopener noreferrer"},o),e)};f.propTypes={href:s.a.string}},714:function(n,t,e){n.exports={bigH1:"Headlines-BigH1-module--big-h-1--12i4p"}},715:function(n,t,e){n.exports={h1:"Headlines-H1-module--h-1--2-f8n",portfolio:"Headlines-H1-module--portfolio--3r1z8"}},716:function(n,t,e){n.exports={h2:"Headlines-H2-module--h-2--1mVJ6",small:"Headlines-H2-module--small--NS77u"}},717:function(n,t,e){n.exports={h3:"Headlines-H3-module--h-3--27MQu"}},718:function(n,t,e){n.exports={paragraph:"Headlines-Paragraph-module--paragraph--2uMT3",big:"Headlines-Paragraph-module--big--35E7x"}},725:function(n,t,e){n.exports={link:"OutsideLink-Link-module--link--1-yuh"}},726:function(n,t,e){"use strict";e.d(t,"a",function(){return r});var o=e(4),r=e.n(o)()("article",null,"Blank",e(727),"blank","blank")},727:function(n,t,e){n.exports={blank:"Blank-module--blank--2YNtX"}},729:function(n,t,e){"use strict";e.d(t,"a",function(){return r});var o=e(4),r=e.n(o)()("hr",null,"HorizontalRule",e(730),"horizontal-rule","horizontalRule")},730:function(n,t,e){n.exports={horizontalRule:"HorizontalRule-module--horizontal-rule--2hj-Y"}},738:function(n,t,e){"use strict";e.d(t,"a",function(){return l}),e.d(t,"e",function(){return a}),e.d(t,"b",function(){return u}),e.d(t,"c",function(){return c}),e.d(t,"d",function(){return s});var o=e(4),r=e.n(o),i=e(726),l=r()(i.a,null,"AboutCardContainer",e(739),"about-card-container","aboutCardContainer"),a=r()("h4",null,"Title",e(740),"title","title"),u=r()("span",null,"Date",e(741),"date","date"),c=r()("p",null,"Description",e(742),"description","description"),s=r()("img",null,"Logo",e(743),"logo","logo"),d=e(744);t.f=d},739:function(n,t,e){n.exports={aboutCardContainer:"styles-AboutCardContainer-module--about-card-container--2MBcI",disableTransition:"styles-AboutCardContainer-module--disableTransition--3ypp7"}},740:function(n,t,e){n.exports={title:"styles-Title-module--title--KJwsA"}},741:function(n,t,e){n.exports={date:"styles-Date-module--date--1fZ0Q"}},742:function(n,t,e){n.exports={description:"styles-Description-module--description--3FWxT"}},743:function(n,t,e){n.exports={logo:"styles-Logo-module--logo--1aVyE"}},744:function(n,t,e){n.exports={read:"styles-styles-module--read--3y7pF"}}}]);
//# sourceMappingURL=component---src-pages-news-index-js-a7f8f84a0daa175c8459.js.map