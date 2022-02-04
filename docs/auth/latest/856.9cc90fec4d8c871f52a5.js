(self.webpackChunkauth=self.webpackChunkauth||[]).push([[856],{5826:t=>{t.exports=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)}},4779:(t,e,n)=>{var r=n(5826);t.exports=function t(e,n,o){return r(n)||(o=n||o,n=[]),o=o||{},e instanceof RegExp?function(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return l(t,e)}(e,n):r(e)?function(e,n,r){for(var o=[],i=0;i<e.length;i++)o.push(t(e[i],n,r).source);return l(new RegExp("(?:"+o.join("|")+")",p(r)),n)}(e,n,o):function(t,e,n){return f(i(t,n),e,n)}(e,n,o)},t.exports.parse=i,t.exports.compile=function(t,e){return u(i(t,e),e)},t.exports.tokensToFunction=u,t.exports.tokensToRegExp=f;var o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function i(t,e){for(var n,r=[],i=0,a=0,u="",l=e&&e.delimiter||"/";null!=(n=o.exec(t));){var p=n[0],f=n[1],h=n.index;if(u+=t.slice(a,h),a=h+p.length,f)u+=f[1];else{var v=t[a],m=n[2],d=n[3],y=n[4],g=n[5],x=n[6],C=n[7];u&&(r.push(u),u="");var E=null!=m&&null!=v&&v!==m,R="+"===x||"*"===x,w="?"===x||"*"===x,Z=n[2]||l,b=y||g;r.push({name:d||i++,prefix:m||"",delimiter:Z,optional:w,repeat:R,partial:E,asterisk:!!C,pattern:b?s(b):C?".*":"[^"+c(Z)+"]+?"})}}return a<t.length&&(u+=t.substr(a)),u&&r.push(u),r}function a(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function u(t,e){for(var n=new Array(t.length),o=0;o<t.length;o++)"object"==typeof t[o]&&(n[o]=new RegExp("^(?:"+t[o].pattern+")$",p(e)));return function(e,o){for(var i="",u=e||{},c=(o||{}).pretty?a:encodeURIComponent,s=0;s<t.length;s++){var l=t[s];if("string"!=typeof l){var p,f=u[l.name];if(null==f){if(l.optional){l.partial&&(i+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(r(f)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(f)+"`");if(0===f.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var h=0;h<f.length;h++){if(p=c(f[h]),!n[s].test(p))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(p)+"`");i+=(0===h?l.prefix:l.delimiter)+p}}else{if(p=l.asterisk?encodeURI(f).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})):c(f),!n[s].test(p))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+p+'"');i+=l.prefix+p}}else i+=l}return i}}function c(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function s(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function l(t,e){return t.keys=e,t}function p(t){return t&&t.sensitive?"":"i"}function f(t,e,n){r(e)||(n=e||n,e=[]);for(var o=(n=n||{}).strict,i=!1!==n.end,a="",u=0;u<t.length;u++){var s=t[u];if("string"==typeof s)a+=c(s);else{var f=c(s.prefix),h="(?:"+s.pattern+")";e.push(s),s.repeat&&(h+="(?:"+f+h+")*"),a+=h=s.optional?s.partial?f+"("+h+")?":"(?:"+f+"("+h+"))?":f+"("+h+")"}}var v=c(n.delimiter||"/"),m=a.slice(-v.length)===v;return o||(a=(m?a.slice(0,-v.length):a)+"(?:"+v+"(?=$))?"),a+=i?"$":o&&m?"":"(?="+v+"|$)",l(new RegExp("^"+a,p(n)),e)}},7856:(t,e,n)=>{"use strict";n.r(e),n.d(e,{BrowserRouter:()=>F,HashRouter:()=>J,Link:()=>tt,MemoryRouter:()=>w,NavLink:()=>rt,Prompt:()=>b,Redirect:()=>P,Route:()=>S,Router:()=>R,StaticRouter:()=>H,Switch:()=>D,generatePath:()=>U,matchPath:()=>T,useHistory:()=>K,useLocation:()=>V,useParams:()=>q,useRouteMatch:()=>I,withRouter:()=>W});var r=n(1788),o=n(7271),i=n.n(o),a=n(5697),u=n.n(a),c=n(71),s=1073741823,l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:{};function p(t){var e=[];return{on:function(t){e.push(t)},off:function(t){e=e.filter((function(e){return e!==t}))},get:function(){return t},set:function(n,r){t=n,e.forEach((function(e){return e(t,r)}))}}}const f=i().createContext||function(t,e){var n,i,a,c="__create-react-context-"+((l[a="__global_unique_id__"]=(l[a]||0)+1)+"__"),f=function(t){function n(){var e;return(e=t.apply(this,arguments)||this).emitter=p(e.props.value),e}(0,r.Z)(n,t);var o=n.prototype;return o.getChildContext=function(){var t;return(t={})[c]=this.emitter,t},o.componentWillReceiveProps=function(t){if(this.props.value!==t.value){var n,r=this.props.value,o=t.value;((i=r)===(a=o)?0!==i||1/i==1/a:i!=i&&a!=a)?n=0:(n="function"==typeof e?e(r,o):s,0!=(n|=0)&&this.emitter.set(t.value,n))}var i,a},o.render=function(){return this.props.children},n}(o.Component);f.childContextTypes=((n={})[c]=u().object.isRequired,n);var h=function(e){function n(){var t;return(t=e.apply(this,arguments)||this).state={value:t.getValue()},t.onUpdate=function(e,n){0!=((0|t.observedBits)&n)&&t.setState({value:t.getValue()})},t}(0,r.Z)(n,e);var o=n.prototype;return o.componentWillReceiveProps=function(t){var e=t.observedBits;this.observedBits=null==e?s:e},o.componentDidMount=function(){this.context[c]&&this.context[c].on(this.onUpdate);var t=this.props.observedBits;this.observedBits=null==t?s:t},o.componentWillUnmount=function(){this.context[c]&&this.context[c].off(this.onUpdate)},o.getValue=function(){return this.context[c]?this.context[c].get():t},o.render=function(){return(t=this.props.children,Array.isArray(t)?t[0]:t)(this.state.value);var t},n}(o.Component);return h.contextTypes=((i={})[c]=u().object,i),{Provider:f,Consumer:h}};var h=n(2177),v=n(2122),m=n(4779),d=n.n(m),y=(n(9864),n(9756)),g=n(8679),x=n.n(g),C=function(t){var e=f();return e.displayName="Router-History",e}(),E=function(t){var e=f();return e.displayName="Router",e}(),R=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={location:e.history.location},n._isMounted=!1,n._pendingLocation=null,e.staticContext||(n.unlisten=e.history.listen((function(t){n._isMounted?n.setState({location:t}):n._pendingLocation=t}))),n}(0,r.Z)(e,t),e.computeRootMatch=function(t){return{path:"/",url:"/",params:{},isExact:"/"===t}};var n=e.prototype;return n.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},n.componentWillUnmount=function(){this.unlisten&&this.unlisten()},n.render=function(){return i().createElement(E.Provider,{value:{history:this.props.history,location:this.state.location,match:e.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},i().createElement(C.Provider,{children:this.props.children||null,value:this.props.history}))},e}(i().Component),w=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).history=(0,c.PP)(e.props),e}return(0,r.Z)(e,t),e.prototype.render=function(){return i().createElement(R,{history:this.history,children:this.props.children})},e}(i().Component),Z=function(t){function e(){return t.apply(this,arguments)||this}(0,r.Z)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.props.onMount&&this.props.onMount.call(this,this)},n.componentDidUpdate=function(t){this.props.onUpdate&&this.props.onUpdate.call(this,this,t)},n.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount.call(this,this)},n.render=function(){return null},e}(i().Component);function b(t){var e=t.message,n=t.when,r=void 0===n||n;return i().createElement(E.Consumer,null,(function(t){if(t||(0,h.Z)(!1),!r||t.staticContext)return null;var n=t.history.block;return i().createElement(Z,{onMount:function(t){t.release=n(e)},onUpdate:function(t,r){r.message!==e&&(t.release(),t.release=n(e))},onUnmount:function(t){t.release()},message:e})}))}var k={},A=0;function U(t,e){return void 0===t&&(t="/"),void 0===e&&(e={}),"/"===t?t:function(t){if(k[t])return k[t];var e=d().compile(t);return A<1e4&&(k[t]=e,A++),e}(t)(e,{pretty:!0})}function P(t){var e=t.computedMatch,n=t.to,r=t.push,o=void 0!==r&&r;return i().createElement(E.Consumer,null,(function(t){t||(0,h.Z)(!1);var r=t.history,a=t.staticContext,u=o?r.push:r.replace,s=(0,c.ob)(e?"string"==typeof n?U(n,e.params):(0,v.Z)({},n,{pathname:U(n.pathname,e.params)}):n);return a?(u(s),null):i().createElement(Z,{onMount:function(){u(s)},onUpdate:function(t,e){var n=(0,c.ob)(e.to);(0,c.Hp)(n,(0,v.Z)({},s,{key:n.key}))||u(s)},to:n})}))}var _={},M=0;function T(t,e){void 0===e&&(e={}),("string"==typeof e||Array.isArray(e))&&(e={path:e});var n=e,r=n.path,o=n.exact,i=void 0!==o&&o,a=n.strict,u=void 0!==a&&a,c=n.sensitive,s=void 0!==c&&c;return[].concat(r).reduce((function(e,n){if(!n&&""!==n)return null;if(e)return e;var r=function(t,e){var n=""+e.end+e.strict+e.sensitive,r=_[n]||(_[n]={});if(r[t])return r[t];var o=[],i={regexp:d()(t,o,e),keys:o};return M<1e4&&(r[t]=i,M++),i}(n,{end:i,strict:u,sensitive:s}),o=r.regexp,a=r.keys,c=o.exec(t);if(!c)return null;var l=c[0],p=c.slice(1),f=t===l;return i&&!f?null:{path:n,url:"/"===n&&""===l?"/":l,isExact:f,params:a.reduce((function(t,e,n){return t[e.name]=p[n],t}),{})}}),null)}var S=function(t){function e(){return t.apply(this,arguments)||this}return(0,r.Z)(e,t),e.prototype.render=function(){var t=this;return i().createElement(E.Consumer,null,(function(e){e||(0,h.Z)(!1);var n=t.props.location||e.location,r=t.props.computedMatch?t.props.computedMatch:t.props.path?T(n.pathname,t.props):e.match,o=(0,v.Z)({},e,{location:n,match:r}),a=t.props,u=a.children,c=a.component,s=a.render;return Array.isArray(u)&&0===u.length&&(u=null),i().createElement(E.Provider,{value:o},o.match?u?"function"==typeof u?u(o):u:c?i().createElement(c,o):s?s(o):null:"function"==typeof u?u(o):null)}))},e}(i().Component);function N(t){return"/"===t.charAt(0)?t:"/"+t}function L(t,e){if(!t)return e;var n=N(t);return 0!==e.pathname.indexOf(n)?e:(0,v.Z)({},e,{pathname:e.pathname.substr(n.length)})}function $(t){return"string"==typeof t?t:(0,c.Ep)(t)}function B(t){return function(){(0,h.Z)(!1)}}function j(){}var H=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).handlePush=function(t){return e.navigateTo(t,"PUSH")},e.handleReplace=function(t){return e.navigateTo(t,"REPLACE")},e.handleListen=function(){return j},e.handleBlock=function(){return j},e}(0,r.Z)(e,t);var n=e.prototype;return n.navigateTo=function(t,e){var n=this.props,r=n.basename,o=void 0===r?"":r,i=n.context,a=void 0===i?{}:i;a.action=e,a.location=function(t,e){return t?(0,v.Z)({},e,{pathname:N(t)+e.pathname}):e}(o,(0,c.ob)(t)),a.url=$(a.location)},n.render=function(){var t=this.props,e=t.basename,n=void 0===e?"":e,r=t.context,o=void 0===r?{}:r,a=t.location,u=void 0===a?"/":a,s=(0,y.Z)(t,["basename","context","location"]),l={createHref:function(t){return N(n+$(t))},action:"POP",location:L(n,(0,c.ob)(u)),push:this.handlePush,replace:this.handleReplace,go:B(),goBack:B(),goForward:B(),listen:this.handleListen,block:this.handleBlock};return i().createElement(R,(0,v.Z)({},s,{history:l,staticContext:o}))},e}(i().Component),D=function(t){function e(){return t.apply(this,arguments)||this}return(0,r.Z)(e,t),e.prototype.render=function(){var t=this;return i().createElement(E.Consumer,null,(function(e){e||(0,h.Z)(!1);var n,r,o=t.props.location||e.location;return i().Children.forEach(t.props.children,(function(t){if(null==r&&i().isValidElement(t)){n=t;var a=t.props.path||t.props.from;r=a?T(o.pathname,(0,v.Z)({},t.props,{path:a})):e.match}})),r?i().cloneElement(n,{location:o,computedMatch:r}):null}))},e}(i().Component);function W(t){var e="withRouter("+(t.displayName||t.name)+")",n=function(e){var n=e.wrappedComponentRef,r=(0,y.Z)(e,["wrappedComponentRef"]);return i().createElement(E.Consumer,null,(function(e){return e||(0,h.Z)(!1),i().createElement(t,(0,v.Z)({},r,e,{ref:n}))}))};return n.displayName=e,n.WrappedComponent=t,x()(n,t)}var O=i().useContext;function K(){return O(C)}function V(){return O(E).location}function q(){var t=O(E).match;return t?t.params:{}}function I(t){var e=V(),n=O(E).match;return t?T(e.pathname,t):n}var F=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).history=(0,c.lX)(e.props),e}return(0,r.Z)(e,t),e.prototype.render=function(){return i().createElement(R,{history:this.history,children:this.props.children})},e}(i().Component),J=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).history=(0,c.q_)(e.props),e}return(0,r.Z)(e,t),e.prototype.render=function(){return i().createElement(R,{history:this.history,children:this.props.children})},e}(i().Component),X=function(t,e){return"function"==typeof t?t(e):t},z=function(t,e){return"string"==typeof t?(0,c.ob)(t,null,null,e):t},G=function(t){return t},Q=i().forwardRef;void 0===Q&&(Q=G);var Y=Q((function(t,e){var n=t.innerRef,r=t.navigate,o=t.onClick,a=(0,y.Z)(t,["innerRef","navigate","onClick"]),u=a.target,c=(0,v.Z)({},a,{onClick:function(t){try{o&&o(t)}catch(e){throw t.preventDefault(),e}t.defaultPrevented||0!==t.button||u&&"_self"!==u||function(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)||(t.preventDefault(),r())}});return c.ref=G!==Q&&e||n,i().createElement("a",c)})),tt=Q((function(t,e){var n=t.component,r=void 0===n?Y:n,o=t.replace,a=t.to,u=t.innerRef,c=(0,y.Z)(t,["component","replace","to","innerRef"]);return i().createElement(E.Consumer,null,(function(t){t||(0,h.Z)(!1);var n=t.history,s=z(X(a,t.location),t.location),l=s?n.createHref(s):"",p=(0,v.Z)({},c,{href:l,navigate:function(){var e=X(a,t.location);(o?n.replace:n.push)(e)}});return G!==Q?p.ref=e||u:p.innerRef=u,i().createElement(r,p)}))})),et=function(t){return t},nt=i().forwardRef;void 0===nt&&(nt=et);var rt=nt((function(t,e){var n=t["aria-current"],r=void 0===n?"page":n,o=t.activeClassName,a=void 0===o?"active":o,u=t.activeStyle,c=t.className,s=t.exact,l=t.isActive,p=t.location,f=t.sensitive,m=t.strict,d=t.style,g=t.to,x=t.innerRef,C=(0,y.Z)(t,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return i().createElement(E.Consumer,null,(function(t){t||(0,h.Z)(!1);var n=p||t.location,o=z(X(g,n),n),y=o.pathname,E=y&&y.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),R=E?T(n.pathname,{path:E,exact:s,sensitive:f,strict:m}):null,w=!!(l?l(R,n):R),Z=w?function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.filter((function(t){return t})).join(" ")}(c,a):c,b=w?(0,v.Z)({},d,{},u):d,k=(0,v.Z)({"aria-current":w&&r||null,className:Z,style:b,to:o},C);return et!==nt?k.ref=e||x:k.innerRef=x,i().createElement(tt,k)}))}))}}]);