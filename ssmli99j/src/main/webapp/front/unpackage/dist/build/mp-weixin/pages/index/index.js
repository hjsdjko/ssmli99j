(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0774":function(n,t,e){"use strict";var i;e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return i}));var a=function(){var n=this,t=n.$createElement,e=(n._self._c,n.__map(n.chezhanlist,(function(t,e){var i=n.__get_orig(t),a=t.qichetupian?t.qichetupian.split(","):null;return{$orig:i,g0:a}}))),i=null,a=n.__map(n.xinwentoutiaolist,(function(t,e){var i=n.__get_orig(t),a=t.fengmian?t.fengmian.split(","):null;return{$orig:i,g2:a}})),r=null,o=n.__map(n.homechezhanlist,(function(t,e){var i=n.__get_orig(t),a=t.qichetupian?t.qichetupian.split(","):null;return{$orig:i,g4:a}})),u=null,l=n.__map(n.homexinwentoutiaolist,(function(t,e){var i=n.__get_orig(t),a=t.fengmian?t.fengmian.split(","):null;return{$orig:i,g6:a}})),c=null;n.$mp.data=Object.assign({},{$root:{l0:e,l1:i,l2:a,l3:r,l4:o,l5:u,l6:l,l7:c}})},r=[]},"376c":function(n,t,e){"use strict";e.r(t);var i=e("0774"),a=e("8ae9");for(var r in a)"default"!==r&&function(n){e.d(t,n,(function(){return a[n]}))}(r);e("d434");var o,u=e("f0c5"),l=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);t["default"]=l.exports},"5b16":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(e("a34a"));function a(n){return n&&n.__esModule?n:{default:n}}function r(n,t){var e;if("undefined"===typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(e=o(n))||t&&n&&"number"===typeof n.length){e&&(n=e);var i=0,a=function(){};return{s:a,n:function(){return i>=n.length?{done:!0}:{done:!1,value:n[i++]}},e:function(n){throw n},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,u=!0,l=!1;return{s:function(){e=n[Symbol.iterator]()},n:function(){var n=e.next();return u=n.done,n},e:function(n){l=!0,r=n},f:function(){try{u||null==e.return||e.return()}finally{if(l)throw r}}}}function o(n,t){if(n){if("string"===typeof n)return u(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?u(n,t):void 0}}function u(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,i=new Array(t);e<t;e++)i[e]=n[e];return i}function l(n,t,e,i,a,r,o){try{var u=n[r](o),l=u.value}catch(c){return void e(c)}u.done?t(l):Promise.resolve(l).then(i,a)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(i,a){var r=n.apply(t,e);function o(n){l(r,i,a,o,u,"next",n)}function u(n){l(r,i,a,o,u,"throw",n)}o(void 0)}))}}e("42c4");var s=function(){Promise.all([e.e("common/vendor"),e.e("components/uni-ui/lib/uni-icons/uni-icons")]).then(function(){return resolve(e("5af0"))}.bind(null,e)).catch(e.oe)},f={components:{uniIcons:s},data:function(){return{autoplaySwiper:!1,intervalSwiper:5e3,swiperList:[],chezhanlist:[],xinwentoutiaolist:[],homechezhanlist:[],homexinwentoutiaolist:[],news:[]}},onShow:function(){var n=this;return c(i.default.mark((function t(){var e,a,o,u,l;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=[],t.next=3,n.$api.page("config",{page:1,limit:5});case 3:a=t.sent,o=r(a.data.list);try{for(o.s();!(u=o.n()).done;)l=u.value,l.name.indexOf("picture")>=0&&l.value&&""!=l.value&&null!=l.value&&e.push({img:l.value})}catch(i){o.e(i)}finally{o.f()}return e&&(n.swiperList=e),t.next=9,n.$api.recommend("chezhan",1,6);case 9:return a=t.sent,n.chezhanlist=a.data.list,t.next=13,n.$api.recommend("xinwentoutiao",1,6);case 13:return a=t.sent,n.xinwentoutiaolist=a.data.list,t.next=17,n.$api.list("chezhan",{page:1,limit:6});case 17:return a=t.sent,n.homechezhanlist=a.data.list,t.next=21,n.$api.list("xinwentoutiao",{page:1,limit:6});case 21:a=t.sent,n.homexinwentoutiaolist=a.data.list;case 23:case"end":return t.stop()}}),t)})))()},methods:{onSwiperTap:function(n){},onNewsDetailTap:function(n){this.$utils.jump("../news-detail/news-detail?id=".concat(n))},onDetailTap:function(n,t){this.$utils.jump("../".concat(n,"/detail?id=").concat(t))},onPageTap:function(t){n.navigateTo({url:"../".concat(t,"/list"),fail:function(){n.switchTab({url:"../".concat(t,"/list")})}})}}};t.default=f}).call(this,e("543d")["default"])},"8ae9":function(n,t,e){"use strict";e.r(t);var i=e("5b16"),a=e.n(i);for(var r in i)"default"!==r&&function(n){e.d(t,n,(function(){return i[n]}))}(r);t["default"]=a.a},9895:function(n,t,e){"use strict";(function(n){e("de77");i(e("66fd"));var t=i(e("376c"));function i(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},a5bc:function(n,t,e){},d434:function(n,t,e){"use strict";var i=e("a5bc"),a=e.n(i);a.a}},[["9895","common/runtime","common/vendor"]]]);