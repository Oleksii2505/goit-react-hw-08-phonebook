"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[285],{8285:function(n,e,t){t.r(e),t.d(e,{default:function(){return H}});var r,o,a=t(168),i=t(5706),u=i.Z.section(r||(r=(0,a.Z)(["\ndisplay: flex;\nflex-direction: row;\nalign-items: flex-start;\ngap: 50px;\nflex-wrap: nowrap;\njustify-content: center;\npadding: 50px;\n"]))),c=i.Z.h1(o||(o=(0,a.Z)(["\ntext-transform: capitalize;\nfont-size: 35px;\n"]))),l=t(2791),s=t(4382),p=t(9434),f="NOT_FOUND";var d=function(n,e){return n===e};function x(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,o=void 0===r?d:r,a=t.maxSize,i=void 0===a?1:a,u=t.resultEqualityCheck,c=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,o=0;o<r;o++)if(!n(e[o],t[o]))return!1;return!0}}(o),l=1===i?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:f},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(c):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var o=t[r];return r>0&&(t.splice(r,1),t.unshift(o)),o.value}return f}return{get:r,put:function(e,o){r(e)===f&&(t.unshift({key:e,value:o}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(i,c);function s(){var e=l.get(arguments);if(e===f){if(e=n.apply(null,arguments),u){var t=l.getEntries(),r=t.find((function(n){return u(n.value,e)}));r&&(e=r.value)}l.put(arguments,e)}return e}return s.clearCache=function(){return l.clear()},s}function h(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function m(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var o=function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var a,i=0,u={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(u=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var l=u,s=l.memoizeOptions,p=void 0===s?t:s,f=Array.isArray(p)?p:[p],d=h(r),x=n.apply(void 0,[function(){return i++,c.apply(null,arguments)}].concat(f)),m=n((function(){for(var n=[],e=d.length,t=0;t<e;t++)n.push(d[t].apply(null,arguments));return a=x.apply(null,n)}));return Object.assign(m,{resultFunc:c,memoizedResultFunc:x,dependencies:d,lastResult:function(){return a},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),m};return o}var v,y,g,b,Z,j,w,k,C,z=m(x),A=function(n){return n.contacts.items},E=function(n){return n.contacts.isLoading},_=function(n){return n.contacts.error},F=function(n){return n.filter},L=z([A,F],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),q=i.Z.ul(v||(v=(0,a.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n"]))),S=i.Z.li(y||(y=(0,a.Z)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n"]))),B=i.Z.button(g||(g=(0,a.Z)(["\n    border-radius: 8px;\n    font-size: 14px;\n    padding: 5px 15px;\n    &:hover {\n        background-color: #1d49aa;\n        color: #fff;\n    }\n"]))),N=t(184),O=function(){var n=(0,p.I0)(),e=(0,p.v9)(E),t=(0,p.v9)(_),r=(0,p.v9)(L);(0,l.useEffect)((function(){n((0,s.yF)())}),[n]);return(0,N.jsxs)(q,{children:[e&&!t&&(0,N.jsx)("b",{children:"Loading..."}),r.map((function(e){var t=e.id,r=e.name,o=e.number;return(0,N.jsxs)(S,{children:[r,": ",o," ",(0,N.jsx)(B,{type:"button",onClick:function(){return e=t,void n((0,s.GK)(e));var e},children:"Delete"})]},t)}))]})},D=i.Z.label(b||(b=(0,a.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    margin-bottom: 15px;\n    transition: color 250ms;\n    &:hover,\n    &:focus {\n        color: #70B3F1;\n    }\n"]))),I=i.Z.input(Z||(Z=(0,a.Z)(["\n    display: block;\n    padding: 6px 12px;\n    border-radius: 8px;\n    font-size: 18px;\n"]))),R=t(5054),T=function(){var n=(0,p.I0)(),e=(0,p.v9)(F);return(0,N.jsxs)(D,{children:["Find contact by name",(0,N.jsx)(I,{type:"text",name:"name",placeholder:"Enter contact name",value:e,onChange:function(e){n((0,R.z)(e.currentTarget.value.toLowerCase()))}})]})},K=t(9439),G=i.Z.form(j||(j=(0,a.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    padding-bottom: 30px;\n"]))),J=i.Z.label(w||(w=(0,a.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    font-size: 24px;\n    &:hover,\n    &:focus {\n        color: #70B3F1;\n    }\n    &:nth-of-type(2) {\n        margin-bottom: 25px;\n    }\n"]))),M=i.Z.input(k||(k=(0,a.Z)(["\n    display: block;\n    margin: 0;\n    padding: 6px 12px;\n    border-radius: 8px;\n    font-size: 16px;\n"]))),P=i.Z.button(C||(C=(0,a.Z)(["\nwidth: 150px;\nappearance: none;\nborder: 0;\nborder-radius: 8px;\nbackground: #4676D7;\ncolor: #fff;\npadding: 8px 16px;\nfont-size: 14px;\ntext-transform: capitalize;\n:hover,\n:focus {\n    background: #1d49aa;\n    outline: none;\n    box-shadow: 0 0 0 2px #051BB8;\n}\n"]))),U=function(){var n=(0,l.useState)(""),e=(0,K.Z)(n,2),t=e[0],r=e[1],o=(0,l.useState)(""),a=(0,K.Z)(o,2),i=a[0],u=a[1],c=(0,p.I0)(),f=(0,p.v9)(A),d=function(n){var e=n.currentTarget,t=e.name,o=e.value;switch(t){case"name":r(o);break;case"number":u(o)}};return(0,N.jsxs)(G,{onSubmit:function(n){n.preventDefault(),f.find((function(n){return n.name.toLowerCase()===t.toLowerCase()}))?alert("".concat(t," is already in contacts")):(c((0,s.uK)({name:t,number:i})),r(""),u(""))},children:[(0,N.jsxs)(J,{children:["Name",(0,N.jsx)(M,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Enter contact name",onChange:d,value:t})]}),(0,N.jsxs)(J,{children:["Number",(0,N.jsx)(M,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"Enter contact number",onChange:d,value:i})]}),(0,N.jsx)(P,{type:"submit",children:"Add contact"})]})},$=t(6246),H=function(){var n=(0,$.a)(),e=(0,p.v9)(_);return(0,N.jsxs)(u,{children:[(0,N.jsx)(U,{}),(0,N.jsx)(c,{children:"Contacts"}),(0,N.jsx)(T,{}),n&&!e&&(0,N.jsx)("b",{children:"Request in progress..."}),(0,N.jsx)(O,{})]})}}}]);
//# sourceMappingURL=285.7b85352c.chunk.js.map