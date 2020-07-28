/*! For license information please see 3.1be51501.chunk.js.LICENSE.txt */
(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{351:function(e,n,t){e.exports={photo:"User_photo__2XVZD",pageNum:"User_pageNum__1ANve"}},352:function(e,n,t){e.exports={selectedPage:"Paginator_selectedPage__3SIki",pointer:"Paginator_pointer__3sODf",paginator:"Paginator_paginator__18P4_",pageNumber:"Paginator_pageNumber__xOsKi"}},353:function(e,n,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var l=o.apply(null,r);l&&e.push(l)}else if("object"===a)for(var s in r)t.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(n,[]))||(e.exports=r)}()},354:function(e,n,t){"use strict";t.r(n);var r=t(29),o=t(30),a=t(32),l=t(31),s=t(0),u=t.n(s),i=t(18),c=t(83),p=t(351),g=t.n(p),f=t(89),m=t.n(f),h=t(92),P=t(51),d=t(352),w=t.n(d),v=t(353),E=t.n(v),b=function(e){for(var n=e.currentPage,t=e.onPageChanged,r=e.totalItemsCount,o=e.pageSize,a=e.portionSize,l=void 0===a?10:a,i=Math.ceil(r/o),c=[],p=1;p<=i;p++)c.push(p);var g=Math.ceil(i/l),f=Object(s.useState)(1),m=Object(P.a)(f,2),d=m[0],v=m[1],b=(d-1)*l+1,U=d*l;return u.a.createElement("div",{className:w.a.paginator},d>1&&u.a.createElement("button",{onClick:function(){v(d-1)}},"PREV"),c.filter((function(e){return e>=b&&e<=U})).map((function(e){return u.a.createElement("span",{key:e.id,className:E()(Object(h.a)({},w.a.selectedPage,n===e),w.a.pageNumber,w.a.pointer),onClick:function(){t(e)}},e)})),g>d&&u.a.createElement("button",{onClick:function(){v(d+1)}},"NEXT"))},U=t(9),C=function(e){var n=e.user,t=e.followingInProgress,r=e.unfollowUser,o=e.followUser;return u.a.createElement("div",null,u.a.createElement("span",null,u.a.createElement("div",null,u.a.createElement(U.b,{to:"/profile/"+n.id},u.a.createElement("img",{src:null!=n.photos.small?n.photos.small:m.a,className:g.a.photo}))),u.a.createElement("div",null,n.followed?u.a.createElement("button",{disabled:t.some((function(e){return e===n.id})),onClick:function(){r(n.id)}},"Follow"):u.a.createElement("button",{disabled:t.some((function(e){return e===n.id})),onClick:function(){o(n.id)}},"Unfollow"))),u.a.createElement("span",null,u.a.createElement("span",null,u.a.createElement("div",null,n.name),u.a.createElement("div",null,n.status)),u.a.createElement("span",null,u.a.createElement("div",null,"u.location.country"),u.a.createElement("div",null,"u.location.city"))))},_=function(e){var n=e.currentPage,t=e.onPageChanged,r=e.totalUsersCount,o=e.pageSize,a=e.users,l=Object(c.a)(e,["currentPage","onPageChanged","totalUsersCount","pageSize","users"]);return u.a.createElement("div",null,u.a.createElement(b,{currentPage:n,onPageChanged:t,totalItemsCount:r,pageSize:o}),u.a.createElement("div",null,a.map((function(e){return u.a.createElement(C,{key:e.id,user:e,followingInProgress:l.followingInProgress,followUser:l.followUser,unfollowUser:l.unfollowUser})}))))},y=t(133),O=t(64),S=t(12),j=function(e){return e.usersPage.users},k=function(e){return e.usersPage.pageSize},z=function(e){return e.usersPage.totalUsersCount},I=function(e){return e.usersPage.currentPage},N=function(e){return e.usersPage.isFetching},F=function(e){return e.usersPage.followingInProgress},x=function(e){Object(a.a)(t,e);var n=Object(l.a)(t);function t(){var e;Object(r.a)(this,t);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return(e=n.call.apply(n,[this].concat(a))).onPageChanged=function(n){var t=e.props.pageSize;e.props.requestUsers(n,t)},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,n=e.currentPage,t=e.pageSize;this.props.requestUsers(n,t)}},{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,this.props.isFetching?u.a.createElement(O.a,null):null,u.a.createElement(_,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,toggleFollowingProgress:this.props.toggleFollowingProgress,followingInProgress:this.props.followingInProgress,followUser:this.props.followUser,unfollowUser:this.props.unfollowUser}))}}]),t}(u.a.Component);n.default=Object(S.compose)(Object(i.connect)((function(e){return{users:j(e),pageSize:k(e),totalUsersCount:z(e),currentPage:I(e),isFetching:N(e),followingInProgress:F(e)}}),{followUser:y.b,unfollowUser:y.f,setCurrentPage:y.d,toggleFollowingProgress:y.e,requestUsers:y.c}))(x)}}]);
//# sourceMappingURL=3.1be51501.chunk.js.map