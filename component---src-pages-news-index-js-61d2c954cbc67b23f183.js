(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1075:function(e,t,n){"use strict";n.r(t);n(11);var a=n(4),r=n.n(a),l=n(0),o=n.n(l),c=n(1),i=n.n(c),u=n(101),s=(n(73),n(203),n(189)),d=n(2),m=n.n(d),p=n(58),g=m()("nav",null,"Container",n(994),"container","container"),f=m()(p.a,null,"ControlBtn",n(995),"control-btn","controlBtn"),h=m()(f,null,"PrevBtn",n(996),"prev-btn","prevBtn"),C=m()(f,null,"NextBtn",n(997),"next-btn","nextBtn"),k=m()("span",null,"Amount",n(998),"amount","amount"),v=m()("nav",null,"Nav",n(999),"nav","nav"),E=m()("a",null,"Page",n(1e3),"page","page"),P=(n(1001),function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={midBlock:{start:0,end:0}},t.setDefaultMidBlockInterval=function(e,n,a){var r=(n=Math.max(n%2==0?n-1:n,5))-4,l=a-2,o=(r-1)/2;e<3?t.setState({midBlock:{start:3,end:3+r-1}}):e>l?t.setState({midBlock:{start:l-r+1,end:l}}):t.setState({midBlock:{start:Math.max(e-o,3),end:Math.min(e+o,l)}})},t.recalculateMidBlockInterval=function(e,n,a){var r=t.state.midBlock,l=n-4,o=a-2;e<=3?t.setState({midBlock:{start:3,end:3+l-1}}):e>=o?t.setState({midBlock:{start:a-l-1,end:o}}):e<r.start&&e>3?t.setState({midBlock:{start:Math.max(r.start-l,3),end:Math.min(r.start-1,o)}}):e>r.end&&e<o&&t.setState({midBlock:{start:Math.min(r.end+l,o)-l+1,end:Math.min(r.end+l,o)}})},t.handleLeftGapClick=function(e){var n=t.state.midBlock,a=t.props.onPageChange,r=e>n.end?n.start-1:e-(n.end-n.start+1);return a&&a(Math.max(r,1))},t.handleRightGabClick=function(e,n){var a=t.state.midBlock,r=t.props.onPageChange,l=e<a.start?a.end+1:e+(a.end-a.start+1);return r&&r(Math.min(l,n))},t.renderMidBlock=function(e,n){var a=t.state.midBlock,r=a.end-a.start+1;return Array.from({length:r},function(e,t){return a.start+t}).map(function(t){return o.a.createElement(E,{key:t,selected:e===t,onClick:function(){return n&&n(t)}},t)})},t.showRightGap=function(e){var n=e-2;return e>5&&t.state.midBlock.end<n},t.showLeftGap=function(){return t.state.midBlock.start>3},t}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this.props,t=e.currentPage,n=e.slots,a=e.pageCount;this.setDefaultMidBlockInterval(t,n,a)},n.componentDidUpdate=function(e){var t=this.props,n=t.currentPage,a=t.slots,r=t.pageCount,l=a%2==0?a-1:a;e.currentPage!==n&&this.recalculateMidBlockInterval(n,l,r)},n.render=function(){var e=this,t=this.props,n=t.currentPage,a=t.pageCount,r=t.onPageChange,l=t.className,c=this.state.midBlock,i=n+1,u=n-1,d=a-1;return o.a.createElement(v,{className:l},o.a.createElement(h,{dark:!0,disabled:n<=1,onClick:function(){return n>1&&r&&r(u)}},o.a.createElement(s.a,null)),o.a.createElement(E,{selected:1===n,onClick:function(){return r&&r(1)}},"1"),this.showLeftGap()?o.a.createElement(E,{selected:!1,onClick:function(){return 3===c.start?r&&r(2):e.handleLeftGapClick(n)}},"..."):a>2&&o.a.createElement(E,{selected:2===n,onClick:function(){return r&&r(2)}},"2"),a>4&&this.renderMidBlock(n,r),this.showRightGap(a)?o.a.createElement(E,{selected:!1,onClick:function(){return e.handleRightGabClick(n,a)}},"..."):a>3&&o.a.createElement(E,{selected:n===d,onClick:function(){return r&&r(d)}},d),o.a.createElement(E,{selected:n===a,onClick:function(){return r&&r(a)}},a),o.a.createElement(C,{dark:!0,disabled:n>=a,onClick:function(){return n<a&&r&&r(i)}},o.a.createElement(s.a,null)))},t}(l.Component));P.propTypes={slots:i.a.number,onPageChange:i.a.func.isRequired,currentPage:i.a.number,pageCount:i.a.number},P.defaultProps={slots:5};var b=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.shouldComponentUpdate=function(e){var t=e.currentPage,n=e.pageCount,a=this.props,r=a.currentPage,l=a.pageCount;return r!==t||l!==n},n.render=function(){var e=this.props,t=e.pageCount,n=e.currentPage,a=e.className,r=e.onPageChange;return o.a.createElement(g,{className:a},o.a.createElement(h,{onClick:function(e){return r(n-1,e)},disabled:1===n},o.a.createElement(s.a,null)),o.a.createElement(k,null,n+" / "+t),o.a.createElement(C,{onClick:function(e){return r(n+1,e)},disabled:n===t},o.a.createElement(s.a,null)))},t}(l.Component);b.propTypes={className:i.a.string,currentPage:i.a.number,pageCount:i.a.number,onPageChange:i.a.func.isRequired};var B=n(15),M=function(e,t){for(var n=e.slice(),a=[],r=0;r<t;r++)a.push([]);return n.reduce(function(e,n,a){return e[a%t].push(n),e},a)},w=n(198),y=n(1089),S=n(202),R=m()("header",null,"Container",n(1002),"container","container"),D=m()("div",null,"Content",n(1003),"content","content"),N=m()(S.a,null,"Hr",n(1004),"hr","hr"),T=m()(w.a,null,"Title",n(1005),"title","title"),G=function(e){var t=e.title;return o.a.createElement(R,null,o.a.createElement(D,null,o.a.createElement(N,null),o.a.createElement(T,null,t)))};G.propTypes={title:i.a.string};n(140);var x=n(199),A=n(1105),L=m()("article",null,"Container",n(1006),"container","container"),j=m()("img",null,"Logo",n(1007),"logo","logo"),I=m()("h2",null,"Title",n(1008),"title","title"),q=m()(A.b,null,"PublishDate",n(1009),"publish-date","publishDate"),F=m()("p",null,"Description",n(1010),"description","description"),O=n(1011),J=function(e){var t=e.date,n=e.description,a=e.link,r=e.logo,l=e.title;return o.a.createElement(L,null,o.a.createElement(j,{src:r}),o.a.createElement(I,null,l),o.a.createElement(q,null,t),o.a.createElement(F,null,n),o.a.createElement(x.a,{href:a,className:O.read},"Читать"))};J.propTypes={date:i.a.string,description:i.a.string,link:i.a.string,logo:i.a.string,title:i.a.string};var U=n(1088),H=m()(U.a,null,"Section",n(1012),"section","section"),Q=m()("div",null,"Column",n(1013),"column","column"),z=n(1014);n.d(t,"newsPageQuery",function(){return W});var K=8,V=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={columnsCount:2,currentPage:1,columns:[],pageCount:0},t.init=function(){var e=Object(B.b)()?1:2,n=t.state.currentPage,a=t.props.data.allMarkdownRemark,r=a?a.edges:[],l=t.pagination(n),o=Math.ceil(r.length/K),c=M(l,e);t.setState({pageCount:o,columns:c,columnsCount:e})},t.pagination=function(e){var n=t.props.data.allMarkdownRemark,a=n?n.edges:[],r=K*(e-1),l=r+K;return a.slice(r,l)},t.onPageChange=function(e){var n=t.state.columnsCount,a=t.props.scrollbar,r=t.pagination(e),l=M(r,n);t.setState({currentPage:e,columns:l},function(){a?a.scrollTo(0,0,0):window.scrollTo(0,0)})},t}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.init()},n.render=function(){var e=this.state,t=e.columnsCount,n=e.columns,a=e.currentPage,r=e.pageCount,l=this.props.data,c=l.allMarkdownRemark,i=l.markdownRemark;return o.a.createElement(o.a.Fragment,null,o.a.createElement(G,{title:i&&i.frontmatter.title}),o.a.createElement(y.a,{as:"main",withoutPaddingBottom:!0},o.a.createElement(H,{as:"section"},!c&&o.a.createElement(w.c,null,"Список статей пуст"),n.map(function(e,n){return o.a.createElement(Q,{key:n,oneColumn:1===t},!c&&o.a.createElement(w.c,null,"Список статей пуст"),e.map(function(e){var t=e.node;return o.a.createElement(J,Object.assign({key:t.id},t.frontmatter))}))})),r>1&&o.a.createElement(o.a.Fragment,null,o.a.createElement(P,{className:z.paginationFull,currentPage:a,pageCount:r,slots:7,onPageChange:this.onPageChange}),o.a.createElement(b,{pageCount:r,currentPage:a,onPageChange:this.onPageChange,className:z.paginationSimple}))))},t}(l.PureComponent);V.propTypes={data:i.a.object.isRequired};t.default=function(e){return o.a.createElement(u.a,null,function(t){var n=t.scrollbar;return o.a.createElement(V,Object.assign({scrollbar:n},e))})};var W="3719896240"},1088:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(2),r=n.n(a)()("article",null,"Article",n(798),"article","article")},1089:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(2),r=n.n(a)()("section",null,"Section",n(799),"section","section")},1105:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"e",function(){return c}),n.d(t,"b",function(){return i}),n.d(t,"c",function(){return u}),n.d(t,"d",function(){return s});var a=n(2),r=n.n(a),l=n(204),o=r()(l.a,null,"AboutCardContainer",n(816),"about-card-container","aboutCardContainer"),c=r()("h4",null,"Title",n(817),"title","title"),i=r()("span",null,"Date",n(818),"date","date"),u=r()("p",null,"Description",n(819),"description","description"),s=r()("img",null,"Logo",n(820),"logo","logo"),d=n(821);t.f=d}}]);
//# sourceMappingURL=component---src-pages-news-index-js-61d2c954cbc67b23f183.js.map