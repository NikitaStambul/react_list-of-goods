(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(t,e,s){},17:function(t,e,s){"use strict";s.r(e);var n,r=s(4),o=s.n(r),i=s(5),c=s(6),a=s(9),l=s(7),u=s(8),b=s(1),h=s.n(b),d=(s(14),s(15),s(2)),p=s.n(d),j=s(0),O=function(t){var e=t.goods;return Object(j.jsx)("ul",{children:e.map((function(t){return Object(j.jsx)("li",{children:t},t)}))})},g=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(n||(n={}));var v=function(t){Object(a.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(i.a)(this,s);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={isReversed:!1,sortType:n.NONE},t.reverseList=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.sortAlphabetically=function(){t.setState({sortType:n.ALPHABET})},t.sortByLength=function(){t.setState({sortType:n.LENGTH})},t.resetOrder=function(){t.setState({isReversed:!1,sortType:n.NONE})},t}return Object(c.a)(s,[{key:"render",value:function(){var t=function(t,e){var s=e.sortType,r=e.isReversed,o=Object(u.a)(t);return o.sort((function(t,e){switch(s){case n.ALPHABET:return t.localeCompare(e);case n.LENGTH:return t.length-e.length;default:return 0}})),r&&o.reverse(),window.console.log(s,r),o}(g,this.state),e=this.state,s=e.isReversed,r=e.sortType,o=s||r!==n.NONE;return Object(j.jsxs)("div",{className:"section content",children:[Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("button",{type:"button",onClick:this.sortAlphabetically,className:p()("button is-info",{"is-light":r!==n.ALPHABET}),children:"Sort alphabetically"}),Object(j.jsx)("button",{type:"button",onClick:this.sortByLength,className:p()("button is-success",{"is-light":r!==n.LENGTH}),children:"Sort by length"}),Object(j.jsx)("button",{type:"button",onClick:this.reverseList,className:p()("button is-warning",{"is-light":!s}),children:"Reverse"}),o&&Object(j.jsx)("button",{type:"button",onClick:this.resetOrder,className:"button is-danger is-light",children:"Reset"})]}),Object(j.jsx)(O,{goods:t})]})}}]),s}(h.a.Component);o.a.render(Object(j.jsx)(v,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.9e50cfc7.chunk.js.map