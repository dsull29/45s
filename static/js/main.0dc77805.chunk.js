(this.webpackJsonp45s=this.webpackJsonp45s||[]).push([[0],[,,,,,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(1),c=a.n(r),i=a(10),n=a.n(i),s=(a(15),a(2)),d=(a(16),a(0)),l=function(){return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)("div",{className:"maintitle",children:"45"}),Object(d.jsx)("div",{className:"tagline",children:"Straight out the UMD commuter cafe"})]})},o=(a(18),a(19),function(e){var t=e.round,a=e.gameScore;return Object(d.jsxs)("div",{className:"scoreBoard",style:{textAlign:"left"},children:[Object(d.jsxs)("div",{className:"scoreBoardItem","data-testid":"team1Score",children:["Team 1: ",a[0]]}),Object(d.jsxs)("div",{className:"scoreBoardItem","data-testid":"round",children:["Round: ",t]}),Object(d.jsxs)("div",{className:"scoreBoardItem","data-testid":"team2Score",children:["Team 2: ",a[1]]})]})}),j=a(4),u=a.n(j),b=a(5);function h(){return(h=Object(b.a)(u.a.mark((function e(t,a,r,c){var i,n,s,d;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=x(a),e.next=3,fetch(t+"/shuffle/");case 3:return e.next=5,fetch(t+"/draw/?count=20");case 5:return n=e.sent,e.next=8,n.json();case 8:return s=e.sent,d=O(s.cards),console.log("handCheck",d,s),e.next=13,fetch(t+"/pile/"+i[0]+"/add/?cards="+d[0].toString());case 13:return e.next=15,fetch(t+"/pile/"+i[1]+"/add/?cards="+d[1].toString());case 15:return e.next=17,fetch(t+"/pile/"+i[2]+"/add/?cards="+d[2].toString());case 17:return e.next=19,fetch(t+"/pile/"+i[3]+"/add/?cards="+d[3].toString());case 19:e.sent&&(c(i),r(!1));case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){return[[e[0].code,e[1].code,e[2].code,e[12].code,e[13].code],[e[3].code,e[4].code,e[5].code,e[14].code,e[15].code],[e[6].code,e[7].code,e[8].code,e[16].code,e[17].code],[e[9].code,e[10].code,e[11].code,e[18].code,e[19].code]]}function x(e){var t,a=(e-1)%4;return 0===a?t=["Mario","Partner","Luigi","You"]:1===a?t=["Partner","Luigi","You","Mario"]:2===a?t=["Luigi","You","Mario","Partner"]:3===a&&(t=["You","Mario","Partner","Luigi"]),t}function f(e,t,a,r,c){return v.apply(this,arguments)}function v(){return(v=Object(b.a)(u.a.mark((function e(t,a,r,c,i){var n,s,d,l,o,j;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t+"/pile/discard/add/?cards="+a.toString());case 2:return n=e.sent,e.next=5,n.json();case 5:return e.next=7,fetch(t+"/draw/?count="+a.length);case 7:return s=e.sent,e.next=10,s.json();case 10:if(d=e.sent,console.log("redraw",r,a,d.cards),l=[],d.cards)for(o=0;o<d.cards.length;o++)l.push(d.cards[o].code);return e.next=16,fetch(t+"/pile/"+r+"/add/?cards="+l.toString());case 16:return j=e.sent,e.next=19,j.json();case 19:e.sent&&(c(a.length),i(!1));case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var p=[-35,-21,-18,-13,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1],m=[13,12,11,10,9,8,7,6,5,4,3,2,1,0],g=["5H","JH","AH","KH","QH","0H","9H","8H","7H","6H","4H","3H","2H"],S=["5D","JD","AH","AD","KD","QD","0D","9D","8D","7D","6D","4D","3D","2D"],y=["5S","JS","AH","AS","KS","QS","2S","3S","4S","6S","7S","8S","9S","0S"],w=["5C","JC","AH","AC","KC","QC","2C","3C","4C","6C","7C","8C","9C","0C"],N=["2H","3H","4H","5H","6H","7H","8H","9H","0H","JH","QH","KH"],k=["AD","2D","3D","4D","5D","6D","7D","8D","9D","0D","JD","QD","KD"],D=["0S","9S","8S","7S","6S","5S","4S","3S","2S","AS","JS","QS","KS"],B=["0C","9C","8C","7C","6C","5C","4C","3C","2C","AC","JC","QC","KC"];function C(e){var t,a,r,c;t=a=r=c=0;for(var i=0;i<5;i++){var n=e[i];t+=H(n),a+=U(n),r+=Y(n),c+=I(n)}return[t,a,r,c]}function P(e,t){switch(t){case"Hearts":return H(e);case"Diamonds":return U(e);case"Spades":return Y(e);case"Clubs":return I(e);default:return 0}}function H(e){return p[g.indexOf(e)]||m[k.indexOf(e)]||m[B.indexOf(e)]||m[D.indexOf(e)]}function U(e){return p[S.indexOf(e)]||m[N.indexOf(e)]||m[B.indexOf(e)]||m[D.indexOf(e)]}function Y(e){return p[y.indexOf(e)]||m[k.indexOf(e)]||m[B.indexOf(e)]||m[N.indexOf(e)]}function I(e){return p[w.indexOf(e)]||m[k.indexOf(e)]||m[N.indexOf(e)]||m[D.indexOf(e)]}var A=function(e,t){var a,r;return"Pass"===e.playerBid||("Take"===e.playerBid?(a=t.highBid,r=e.bidder):e.playerBid&&(a=e.playerBid,r=e.bidder)),{highBid:a,highBidder:r}};var T=a(3),L=function(e){var t=Object(r.useState)(null),a=Object(s.a)(t,2),c=a[0],i=a[1],n=Object(r.useState)(!0),d=Object(s.a)(n,2),l=d[0],o=d[1],j=Object(r.useState)(null),u=Object(s.a)(j,2),b=u[0],h=u[1];return Object(r.useEffect)((function(){var t=new AbortController;return fetch(e,{signal:t.signal}).then((function(e){if(!e.ok)throw Error("Could not fetch data for that resource");return e.json()})).then((function(e){i(e),o(!1),h(null)})).catch((function(e){"AbortError"===e.name?console.log("fetch aborted"):(o(!1),h(e.message))})),function(){return t.abort()}}),[e]),{data:c,isPending:l,error:b}},M=function(e){var t,a=e.deckUrl,c=e.bidder,i=e.bidData,n=e.dealer,l=e.sendBid,o=Object(r.useState)("Pass"),j=Object(s.a)(o,2),u=j[0],b=j[1],h=L(a+"/pile/"+c+"/list/"),O=h.data,x=(h.error,h.isPending,i.highBid);if(O)if("You"===c)t=!0;else{t=!1;var f,v,p=O.piles[c].cards,m=[],g=Object(T.a)(p);try{for(g.s();!(v=g.n()).done;)f=v.value,m.push(f.code)}catch(N){g.e(N)}finally{g.f()}var S=function(e,t){var a=["Pass","15","20","25","30","30 No Draw"],r=e.sort((function(e,t){return e-t}))[0],c=null;return r<-25?c="20":r<-5&&(c="15"),c&&a.indexOf(c)<=a.indexOf(t.highBid)&&(c="Pass"),c}(C(m),i);l({bidder:c,playerBid:S})}var y="You"===n;function w(e,t){var a=["Pass","15","20","25","30","30No"];return a.indexOf(t)<a.indexOf(e)}return Object(d.jsx)("div",{className:"playeraction",children:t&&Object(d.jsx)("div",{children:Object(d.jsxs)("form",{onSubmit:function(){l({bidder:c,playerBid:u})},children:[Object(d.jsxs)("select",{value:u,onChange:function(e){return b(e.target.value)},children:[y&&x&&Object(d.jsx)("option",{value:"Take",children:"Take"}),y&&x&&Object(d.jsx)("option",{value:"Pass",children:"Let Bidder Have It"}),!y&&Object(d.jsx)("option",{value:"Pass",children:"Pass"}),w("15",x)&&Object(d.jsx)("option",{value:"15",children:"15"}),w("20",x)&&Object(d.jsx)("option",{value:"20",children:"20"}),w("25",x)&&Object(d.jsx)("option",{value:"25",children:"25"}),w("30",x)&&Object(d.jsx)("option",{value:"30",children:"30"}),w("30No",x)&&Object(d.jsx)("option",{value:"30No",children:"30 No Draw"})]}),Object(d.jsx)("button",{children:"Place Bid"})]})})})},J=(a(9),function(e){var t=e.card;return Object(d.jsx)("div",{className:"cardslot",children:t&&Object(d.jsx)("img",{src:t.image,alt:"Card",width:"100%"})})}),R=function(e){var t=e.deckUrl,a=e.player,r=e.round,c=L(t+"/pile/"+a+"/list/"),i=c.data,n=c.isPending,s=c.error,l=[];return i&&i.piles[a]&&i.piles[a].cards&&(l=i.piles[a].cards),Object(d.jsxs)("div",{children:[s&&Object(d.jsx)("div",{children:s}),n&&Object(d.jsx)("div",{children:"Loading..."}),i&&l&&Object(d.jsx)("div",{className:"handwindow",children:Object(d.jsxs)("div",{className:"hand",children:[Object(d.jsx)(J,{card:l[0],round:r}),Object(d.jsx)(J,{card:l[1],round:r}),Object(d.jsx)(J,{card:l[2],round:r}),Object(d.jsx)(J,{card:l[3],round:r}),Object(d.jsx)(J,{card:l[4],round:r})]})})]})},E=function(e){var t=e.bid,a=e.bidder;return console.log("ViewBid",t),Object(d.jsxs)("div",{className:"playermessagebox",children:[t&&Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"playermessageboxheader",children:t.bidder}),Object(d.jsx)("div",{className:"playermessageboxtext",children:t.playerBid||"Pass"})]}),!t&&"You"!==a&&Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"playermessageboxheader",children:a}),Object(d.jsx)("div",{className:"playermessageboxtext",children:"\xa0"})]}),!t&&"You"===a&&Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"playermessageboxheader",children:"You"}),Object(d.jsx)("div",{className:"playermessageboxtext",children:"We're waiting!"})]})]})},W=(a(8),function(e){var t=e.deckUrl,a=e.bidData,c=e.sendTrumpSuit,i=Object(r.useState)("Hearts"),n=Object(s.a)(i,2),l=n[0],o=n[1],j=a.highBidder,u=L(t+"/pile/"+j+"/list/"),b=u.data;u.error,u.isPending;if(console.log("bid",j,a),b)if("You"===j)!0;else{!1;var h,O,x=b.piles[j].cards,f=[],v=Object(T.a)(x);try{for(v.s();!(O=v.n()).done;)h=O.value,f.push(h.code)}catch(m){v.e(m)}finally{v.f()}var p=function(e){var t=JSON.stringify(e),a=e.sort((function(e,t){return e-t}))[0];return["Hearts","Diamonds","Spades","Clubs"][JSON.parse(t).indexOf(a)]}(C(f));c(p)}return Object(d.jsx)("div",{children:"You"===a.highBidder&&Object(d.jsx)("div",{className:"playeraction",children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c(l)},children:[Object(d.jsxs)("select",{value:l,onChange:function(e){return o(e.target.value)},children:[Object(d.jsx)("option",{value:"Hearts",children:"Hearts"}),Object(d.jsx)("option",{value:"Diamonds",children:"Diamonds"}),Object(d.jsx)("option",{value:"Spades",children:"Spades"}),Object(d.jsx)("option",{value:"Clubs",children:"Clubs"})]}),Object(d.jsx)("button",{children:"Select Suit"})]})})})}),K=function(e){var t=e.draw,a=e.drawer;return Object(d.jsxs)("div",{className:"playermessagebox",children:[t&&Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"playermessageboxheader",children:a}),Object(d.jsxs)("div",{className:"playermessageboxtext",children:["Draws ",t]})]}),!t&&Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"playermessageboxheader",children:a}),Object(d.jsx)("div",{className:"playermessageboxtext",children:"\xa0"})]})]})},Q=function(e){var t=e.card,a=e.player;return Object(d.jsx)("div",{className:"playermessagebox",children:t&&Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"playermessageboxheader",children:a}),Object(d.jsx)("div",{className:"playerplayedcard",children:Object(d.jsx)("img",{src:t.image,alt:"Card",width:"93px"})})]})})},G=(a(21),function(e){var t=e.stage,a=e.players,r=e.actions;e.bidData;return console.log(t,a,r),Object(d.jsxs)("div",{className:"table",children:[Object(d.jsx)("div",{className:"tablerowtop",children:Object(d.jsx)("div",{className:"tableplayerbox player3",children:Object(d.jsxs)("div",{className:"playerslot",children:["Bidding"===t&&Object(d.jsx)(E,{bid:r[2],bidder:a[2]}),"Drawing"===t&&Object(d.jsx)(K,{draw:r[2],drawer:a[2]}),"Playing"===t&&Object(d.jsx)(Q,{card:r[2],player:a[2]})]})})}),Object(d.jsxs)("div",{className:"tablerowmid",children:[Object(d.jsx)("div",{className:"tableplayerbox player2",children:Object(d.jsxs)("div",{className:"playerslot",children:["Bidding"===t&&Object(d.jsx)(E,{bid:r[1],bidder:a[1]}),"Drawing"===t&&Object(d.jsx)(K,{draw:r[1],drawer:a[1]}),"Playing"===t&&Object(d.jsx)(Q,{card:r[1],player:a[1]})]})}),Object(d.jsx)("div",{className:"tableplayerbox player4",children:Object(d.jsxs)("div",{className:"playerslot",children:["Bidding"===t&&Object(d.jsx)(E,{bid:r[3],bidder:a[3]}),"Drawing"===t&&Object(d.jsx)(K,{draw:r[3],drawer:a[3]}),"Playing"===t&&Object(d.jsx)(Q,{card:r[3],player:a[3]})]})})]}),Object(d.jsx)("div",{className:"tablerowbottom",children:Object(d.jsx)("div",{className:"tableplayerbox player1",children:Object(d.jsxs)("div",{className:"playerslot",children:["Bidding"===t&&Object(d.jsx)(E,{bid:r[0],bidder:a[0]}),"Drawing"===t&&Object(d.jsx)(K,{draw:r[0],drawer:a[0]}),"Playing"===t&&Object(d.jsx)(Q,{card:r[0]})]})})}),Object(d.jsx)("div",{className:"tablerowlog",children:Object(d.jsx)("div",{className:"tablelogbox",children:Object(d.jsx)("div",{className:"logslot"})})})]})}),V=function(e){var t=e.deckUrl,a=e.bidOrder,c=e.sendBidData,i=Object(r.useState)(""),n=Object(s.a)(i,2),l=n[0],o=n[1],j=Object(r.useState)(""),u=Object(s.a)(j,2),b=u[0],h=u[1],O=Object(r.useState)(""),x=Object(s.a)(O,2),f=x[0],v=x[1],p=Object(r.useState)(""),m=Object(s.a)(p,2),g=m[0],S=m[1],y=Object(r.useState)(""),w=Object(s.a)(y,2),N=w[0],k=w[1],D=Object(r.useState)(1),B=Object(s.a)(D,2),C=B[0],P=B[1],H=Object(r.useState)({highBid:null,highBidder:null,trumpSuit:null}),U=Object(s.a)(H,2),Y=U[0],I=U[1];Object(r.useEffect)((function(){I({highBid:null,highBidder:null,trumpSuit:null})}),[a]);var T=a[C-1],L=a[3];switch(C){case 1:if(l){var J=A(l,Y),E=J.highBid,K=J.highBidder;E&&I({highBid:E,highBidder:K,trumpSuit:N}),P(2)}break;case 2:if(b){var Q=A(b,Y),V=Q.highBid,_=Q.highBidder;V&&I({highBid:V,highBidder:_,trumpSuit:N}),P(3)}break;case 3:if(f){var q=A(f,Y),z=q.highBid,F=q.highBidder;z&&I({highBid:z,highBidder:F,trumpSuit:N}),P(4)}break;case 4:if(g){var X=A(g,Y),Z=X.highBid,$=X.highBidder;Z?I({highBid:Z,highBidder:$,trumpSuit:N}):Y.highBid||I({highBid:"15",highBidder:L,trumpSuit:N}),P(5)}break;case 5:if(N){var ee=Y.highBid,te=Y.highBidder;I({highBid:ee,highBidder:te,trumpSuit:N}),P(6)}break;case 6:c(Y)}var ae=[l,b,f,g];function re(e,t){var a=t.indexOf(e);return ae[a]}var ce=["You","Mario","Partner","Luigi"];return Object(d.jsxs)("div",{className:"game",children:[Object(d.jsx)("div",{className:"viewTableContainer",children:Object(d.jsx)(G,{stage:"Bidding",players:ce,actions:function(e,t){for(var a=[],r=0;r<ce.length;r++)a[r]=re(ce[r],t);return a}(0,a),bidData:Y})}),Object(d.jsx)("div",{className:"playerWindowContainer",children:Object(d.jsxs)("div",{className:"playerwindow",children:[Object(d.jsx)(R,{deckUrl:t,player:"You"}),1===C&&Object(d.jsx)(M,{deckUrl:t,bidder:T,bidData:Y,dealer:L,sendBid:o}),2===C&&Object(d.jsx)(M,{deckUrl:t,bidder:T,bidData:Y,dealer:L,sendBid:h}),3===C&&Object(d.jsx)(M,{deckUrl:t,bidder:T,bidData:Y,dealer:L,sendBid:v}),4===C&&Object(d.jsx)(M,{deckUrl:t,bidder:T,bidData:Y,dealer:L,sendBid:S}),5===C&&Object(d.jsx)(W,{deckUrl:t,bidData:Y,sendTrumpSuit:k})]})})]})};function _(e,t){for(var a=null,r=-50,c=0;c<e.length;c++){var i=P(e[c].code,t);i>r&&(r=i,a=c)}return e[a]}function q(e,t){for(var a=null,r=50,c=0;c<e.length;c++){var i=P(e[c].code,t);i<r&&(r=i,a=c)}return e[a]}function z(){return(z=Object(b.a)(u.a.mark((function e(t,a,r){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t+"/pile/discard/add/?cards="+a.code).then((function(e){if(!e.ok)throw Error("Could not fetch data for that resource");return e.json()})).then((function(e){return a}));case 2:r(a);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var F=function(e){var t=e.deckUrl,a=e.player,c=(e.position,e.leadSuit,e.sendPlayCard),i=(e.trumpSuit,Object(r.useState)(0)),n=Object(s.a)(i,2),l=n[0],o=n[1],j=L(t+"/pile/"+a+"/list/"),u=j.data,b=(j.error,j.isPending,[]);return u&&(b=u.piles[a].cards),Object(d.jsx)("div",{children:u&&Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(e,t,a){z.apply(this,arguments)}(t,b[l],c)},children:[Object(d.jsxs)("select",{value:l,onChange:function(e){return o(e.target.value)},children:[b[0]&&Object(d.jsx)("option",{value:0,children:b[0].code}),b[1]&&Object(d.jsx)("option",{value:1,children:b[1].code}),b[2]&&Object(d.jsx)("option",{value:2,children:b[2].code}),b[3]&&Object(d.jsx)("option",{value:3,children:b[3].code}),b[4]&&Object(d.jsx)("option",{value:4,children:b[4].code})]}),Object(d.jsx)("button",{children:"Play Card"})]})})},X=function(e){var t=e.deckUrl,a=e.player,c=e.position,i=(e.leadSuit,e.sendPlayCard),n=e.trumpSuit,l=L(t+"/pile/"+a+"/list/"),o=l.data,j=l.error,u=l.isPending,b=Object(r.useState)(null),h=Object(s.a)(b,2),O=h[0],x=h[1];if(o&&!O){var f=function(e,t,a){var r;switch(e){case 1:case 2:r=_(t,a);break;case 3:case 4:r=q(t,a);break;default:console.log("defaultHit")}return r}(c,o.piles[a].cards,n);fetch(t+"/pile/discard/add/?cards="+f.code).then((function(e){if(!e.ok)throw Error("Could not fetch data for that resource");return e.json()})).then((function(e){x(f)}))}return o&&O&&i(O),Object(d.jsxs)("div",{children:[j&&Object(d.jsx)("div",{children:j}),u&&Object(d.jsx)("div",{children:"Thinking...."}),o&&Object(d.jsx)("div",{children:"Dawn"}),";"]})};var Z=function(e){var t=e.bidData;return Object(d.jsxs)("div",{className:"bidInfo",children:[Object(d.jsx)("div",{className:"bidInfoBox",children:"Bid Info"}),Object(d.jsxs)("div",{className:"bidInfoBox",children:["Bid: ",t.highBid," "]}),Object(d.jsxs)("div",{className:"bidInfoBox",children:["Bidder: ",t.highBidder]}),Object(d.jsxs)("div",{className:"bidInfoBox",children:["Suit: ",t.trumpSuit]})]})},$=function(e){var t=e.deckUrl,a=e.player,c=e.order,i=e.sendBookInfo,n=e.book,l=e.bookInfo,o=e.bidData,j=Object(r.useState)(""),u=Object(s.a)(j,2),b=u[0],h=u[1],O=Object(r.useState)(""),x=Object(s.a)(O,2),f=x[0],v=x[1],p=Object(r.useState)(""),m=Object(s.a)(p,2),g=m[0],S=m[1],y=Object(r.useState)(""),w=Object(s.a)(y,2),N=w[0],k=w[1],D=Object(r.useState)(""),B=Object(s.a)(D,2),C=B[0],H=B[1],U=Object(r.useState)(1),Y=Object(s.a)(U,2),I=Y[0],A=Y[1],T=[b,f,g,N],L=n,M=function(e,t){var a,r=e[e.length-1];return r&&(a=r.winningPlayer),"Mario"===a?["Mario","Partner","Luigi","You"]:"Partner"===a?["Partner","Luigi","You","Mario"]:"Luigi"===a?["Luigi","You","Mario","Partner"]:"You"===a?["You","Mario","Partner","Luigi"]:t}(l,c);if(1===I&&b)H(b.code.charAt(1)),A(2);else if(2===I&&f)A(3);else if(3===I&&g)A(4);else if(4===I&&N)setTimeout((function(){A(5)}),2e3);else if(5===I){for(var J,E=50,W=0;W<T.length;W++){var K=P(T[W].code,o.trumpSuit);K<E&&(E=K,J=W)}var Q=T[J].code;i({bookNum:L,winningPlayer:M[J],highCard:Q})}function V(e,r){return ee(a,M)===e?Object(d.jsx)(F,{deckUrl:t,player:a,position:e,sendPlayCard:r,trumpSuit:o.trumpSuit,leadSuit:C}):Object(d.jsx)(X,{deckUrl:t,player:M[e-1],position:e,sendPlayCard:r,trumpSuit:o.trumpSuit})}function _(e,t){var a=t.indexOf(e);return T[a]}var q=["You","Mario","Partner","Luigi"];return Object(d.jsxs)("div",{className:"game",children:[Object(d.jsx)("div",{className:"viewTableContainer",children:Object(d.jsx)(G,{stage:"Playing",players:q,actions:function(e,t){for(var a=[],r=0;r<q.length;r++)a[r]=_(q[r],t);return a}(0,M)})}),Object(d.jsx)("div",{className:"bidInfoContainer",children:Object(d.jsx)(Z,{bidData:o})}),Object(d.jsx)("div",{className:"playerWindowContainer"}),Object(d.jsxs)("div",{className:"playerwindow",children:[Object(d.jsx)(R,{deckUrl:t,player:a}),Object(d.jsxs)("div",{className:"playeraction",children:[I>0&&!b&&V(1,h),I>1&&!f&&V(2,v),I>2&&!g&&V(3,S),I>3&&!N&&V(4,k)]})]})]})};function ee(e,t){return t.indexOf(e)+1}a(22);var te=function(e){var t=e.deckUrl,a=e.drawer,c=(e.trumpSuit,e.sendDraw),i=Object(r.useState)(!1),n=Object(s.a)(i,2),l=n[0],o=n[1],j=Object(r.useState)(!1),u=Object(s.a)(j,2),b=u[0],h=u[1],O=Object(r.useState)(!1),x=Object(s.a)(O,2),v=x[0],p=x[1],m=Object(r.useState)(!1),g=Object(s.a)(m,2),S=g[0],y=g[1],w=Object(r.useState)(!1),N=Object(s.a)(w,2),k=N[0],D=N[1],B=Object(r.useState)(!0),C=Object(s.a)(B,2),P=(C[0],C[1]),H=L(t+"/pile/"+a+"/list/"),U=H.data;H.error,H.isPending;return Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault();for(var r=[l,b,v,S,k],i=[],n=0;n<5;n++)r[n]&&i.push(U.piles[a].cards[n].code);f(t,i,a,c,P)},children:[Object(d.jsxs)("div",{className:"discardhandwindow",children:[Object(d.jsxs)("div",{className:"discardHand",children:[Object(d.jsx)("div",{className:"discardbox",children:Object(d.jsx)("input",{type:"checkbox",name:"card0",onChange:function(e){return o(e.target.checked)},checked:l})}),Object(d.jsx)("div",{className:"discardbox",children:Object(d.jsx)("input",{type:"checkbox",name:"card1",onChange:function(e){return h(e.target.checked)},checked:b})}),Object(d.jsx)("div",{className:"discardbox",children:Object(d.jsx)("input",{type:"checkbox",name:"card2",onChange:function(e){return p(e.target.checked)},checked:v})}),Object(d.jsx)("div",{className:"discardbox",children:Object(d.jsx)("input",{type:"checkbox",name:"card3",onChange:function(e){return y(e.target.checked)},checked:S})}),Object(d.jsx)("div",{className:"discardbox",children:Object(d.jsx)("input",{type:"checkbox",name:"card4",onChange:function(e){return D(e.target.checked)},checked:k})})]}),Object(d.jsx)("div",{className:"playeraction"})]}),Object(d.jsx)("button",{children:"Discard Selected"})]})},ae=function(e){var t=e.deckUrl,a=e.drawer,c=e.trumpSuit,i=e.sendDraw,n=Object(r.useState)(null),l=Object(s.a)(n,2),o=l[0],j=l[1],u=Object(r.useState)(!0),b=Object(s.a)(u,2),h=b[0],O=b[1],x=L(t+"/pile/"+a+"/list/"),v=x.data,p=x.error,m=x.isPending;return Object(r.useEffect)((function(){if(v){var e,r,i=v.piles[a].cards,n=[],s=Object(T.a)(i);try{for(s.s();!(r=s.n()).done;)"AH"!==(e=r.value).code&&e.code.charAt(1)!==c.charAt(0)&&n.push(e.code)}catch(d){s.e(d)}finally{s.f()}f(t,n,a,j,O)}}),[v]),v&&o&&!h&&i(o),Object(d.jsxs)("div",{children:[p&&Object(d.jsx)("div",{children:p}),m&&Object(d.jsx)("div",{children:"Thinking...."}),v&&Object(d.jsx)("div",{children:"Done"}),";"]})},re=function(e){var t=e.deckUrl,a=e.roundOrder,c=e.bidData,i=e.sendDiscardData,n=Object(r.useState)(""),l=Object(s.a)(n,2),o=l[0],j=l[1],u=Object(r.useState)(""),b=Object(s.a)(u,2),h=b[0],O=b[1],x=Object(r.useState)(""),f=Object(s.a)(x,2),v=f[0],p=f[1],m=Object(r.useState)(""),g=Object(s.a)(m,2),S=g[0],y=g[1],w=Object(r.useState)(1),N=Object(s.a)(w,2),k=N[0],D=N[1];switch(k){case 1:o&&D(2);break;case 2:h&&D(3);break;case 3:v&&D(4);break;case 4:S&&D(5);break;case 5:i(!0)}var B=a[k-1];function C(e,r){return ee("You",a)===e?Object(d.jsx)(te,{deckUrl:t,drawer:B,trumpSuit:c.trumpSuit,sendDraw:r}):Object(d.jsx)(ae,{deckUrl:t,drawer:B,trumpSuit:c.trumpSuit,sendDraw:r})}var P=[o,h,v,S];function H(e,t){var a=t.indexOf(e);return P[a]}var U=["You","Mario","Partner","Luigi"];return Object(d.jsxs)("div",{className:"game",children:[Object(d.jsx)("div",{className:"viewTableContainer",children:Object(d.jsx)(G,{stage:"Drawing",players:U,actions:function(e,t){for(var a=[],r=0;r<U.length;r++)a[r]=H(U[r],t);return a}(0,a),bidData:c})}),Object(d.jsx)("div",{className:"bidInfoContainer",children:Object(d.jsx)(Z,{bidData:c})}),Object(d.jsx)("div",{className:"playerWindowContainer",children:Object(d.jsxs)("div",{className:"playerwindow",children:[Object(d.jsx)(R,{deckUrl:t,player:"You"}),k>0&&!o&&C(1,j),k>1&&!h&&C(2,O),k>2&&!v&&C(3,p),k>3&&!S&&C(4,y),4===k&&S&&Object(d.jsx)("div",{children:"Hey!"})]})})]})},ce=function(e){var t=e.team1,a=e.team2,r=e.sendRoundScore,c=e.sendStage;return Object(d.jsxs)("div",{classname:"gamewindow",children:[Object(d.jsxs)("div",{className:"biddingwindow",children:[Object(d.jsx)("div",{className:"windowheader",children:"Round Over!"}),Object(d.jsxs)("div",{className:"playwinner",children:["Team 1: ",t]}),Object(d.jsxs)("div",{className:"playwinner",children:["Team 2: ",a]})]}),Object(d.jsx)("div",{className:"nextroundbutton",children:Object(d.jsx)("button",{onClick:function(){r([t,a]),c("Over")},children:"Next Round"})})]})},ie=function(e){var t=e.deckUrl,a=e.round,c=e.sendRoundScore,i=e.newRound,n=Object(r.useState)(!0),l=Object(s.a)(n,2),o=l[0],j=l[1],u=Object(r.useState)(""),b=Object(s.a)(u,2),O=b[0],x=b[1],f=Object(r.useState)("Deal"),v=Object(s.a)(f,2),p=v[0],m=v[1],g=Object(r.useState)(!1),S=Object(s.a)(g,2),y=S[0],w=S[1],N=Object(r.useState)(null),k=Object(s.a)(N,2),D=k[0],B=k[1],C=Object(r.useState)(1),H=Object(s.a)(C,2),U=H[0],Y=H[1],I=Object(r.useState)([]),A=Object(s.a)(I,2),T=A[0],L=A[1],M=Object(r.useState)(null),J=Object(s.a)(M,2),R=J[0],E=J[1];i&&"Over"===p&&(j(!0),x(""),m("Deal"),w(!1),B(null),Y(1),L([]),E(null),console.log("wipe"));var W="You";Object(r.useEffect)((function(){!function(e,t,a,r){h.apply(this,arguments)}(t,a,j,E)}),[t,a]),t&&"Deal"===p&&!o&&m("Bid"),O&&"Bid"===p&&!o&&m("Discard"),y&&"Discard"===p&&m("Play"),D&&(T[U-1]=D,L(T),B(""),Y(U+1)),"Play"===p&&5===T.length&&(m("Winner"),Y(0));var K=0,Q=0;if("Winner"===p){for(var G=50,_=null,q=0;q<5;q++){"You"===T[q].winningPlayer||"Partner"===T[q].winningPlayer?K+=1:Q+=1;var z=P(T[q].highCard,O.trumpSuit);G>z&&(G=z,_=T[q].winningPlayer)}"You"===_||"Partner"===_?K+=1:Q+=1,6===K&&(K=9),6===Q&&(Q=9);var F=O.highBid;"You"===O.highBidder||"Partner"===O.highBidder?"15"===F&&K<3?K=-3:"20"===F&&K<4?K=-4:"25"===F&&K<5?K=-5:"30"===F&&K<6?K=-6:"30No"===F&&Q<6&&(K=-12):"15"===F&&Q<3?Q=-3:"20"===F&&Q<4?Q=-4:"25"===F&&Q<5?Q=-5:"30"===F&&Q<6?Q=-6:"30No"===F&&Q<6&&(Q=-12)}return Object(d.jsxs)("div",{className:"content",children:["Deal"===p&&o&&Object(d.jsx)("div",{className:"gamewindow loading",children:"Dealing...."}),"Bid"===p&&R&&Object(d.jsx)("div",{children:Object(d.jsx)(V,{deckUrl:t,bidOrder:R,sendBidData:x})}),"Discard"===p&&Object(d.jsx)("div",{children:Object(d.jsx)(re,{deckUrl:t,roundOrder:R,bidData:O,sendDiscardData:w})}),"Play"===p&&1===U&&Object(d.jsx)("div",{children:Object(d.jsx)($,{deckUrl:t,player:W,order:R,sendBookInfo:B,book:U,bookInfo:T,bidData:O})}),"Play"===p&&2===U&&Object(d.jsx)("div",{children:Object(d.jsx)($,{deckUrl:t,player:W,order:R,sendBookInfo:B,book:U,bookInfo:T,bidData:O})}),"Play"===p&&3===U&&Object(d.jsx)("div",{children:Object(d.jsx)($,{deckUrl:t,player:W,order:R,sendBookInfo:B,book:U,bookInfo:T,bidData:O})}),"Play"===p&&4===U&&Object(d.jsx)("div",{children:Object(d.jsx)($,{deckUrl:t,player:W,order:R,sendBookInfo:B,book:U,bookInfo:T,bidData:O})}),"Play"===p&&5===U&&Object(d.jsx)("div",{children:Object(d.jsx)($,{deckUrl:t,player:W,order:R,sendBookInfo:B,book:U,bookInfo:T,bidData:O})}),"Winner"===p&&Object(d.jsx)(ce,{team1:K,team2:Q,sendRoundScore:c,sendStage:m})]})},ne=function(){var e=L("https://deckofcardsapi.com/api/deck/new/"),t=e.data,a=e.isPending,c=e.error,i=Object(r.useState)(1),n=Object(s.a)(i,2),l=n[0],j=n[1],u=Object(r.useState)([0,0]),b=Object(s.a)(u,2),h=b[0],O=b[1],x=Object(r.useState)(null),f=Object(s.a)(x,2),v=f[0],p=f[1],m=Object(r.useState)([]),g=Object(s.a)(m,2),S=g[0],y=g[1],w=Object(r.useState)(""),N=Object(s.a)(w,2),k=N[0],D=N[1],B=null;t&&(B="https://deckofcardsapi.com/api/deck/"+t.deck_id);var C=[];return v&&(S[l]=v,C[0]=h[0]+v[0],C[1]=h[1]+v[1],console.log("scoring",C,v,l),y(S),O(C),C[0]>30&&D("Team 1 Wins"),C[1]>30&&D("Team 2 Wins"),p(null),j(l+1)),Object(d.jsxs)("div",{className:"gamewindow",children:[a&&Object(d.jsx)("div",{className:"gamewindow loading",children:"Setting up..."}),c&&Object(d.jsx)("div",{className:"gamewindow loading",children:c}),B&&!k&&Object(d.jsxs)("div",{className:"game",children:[Object(d.jsx)(o,{round:l,gameScore:h}),Object(d.jsx)(ie,{deckUrl:B,round:l,sendRoundScore:p,newRound:!0})]}),k&&Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:k}),Object(d.jsxs)("h3",{children:["Team 1: ",h[0]]}),Object(d.jsxs)("h3",{children:["Team 2: ",h[1]]}),Object(d.jsx)("button",{children:"Play Again"})]})]})},se=(a(23),function(){return Object(d.jsxs)("div",{className:"footer",children:[Object(d.jsx)("div",{className:"footeritem",children:Object(d.jsx)("a",{href:"https://github.com/dsull29/45s",target:"new",children:"GitHub Page"})}),Object(d.jsx)("div",{className:"footeritem",children:Object(d.jsx)("a",{href:"https://github.com/dsull29/45s/issues",target:"new",children:"Report a bug"})})]})});var de=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(l,{}),!1===a&&Object(d.jsx)("div",{className:"gamewindow",children:Object(d.jsx)("button",{className:"startbutton",onClick:function(){return c(!0)},children:"Start Game"})}),a&&Object(d.jsx)(ne,{}),Object(d.jsx)(se,{})]})};n.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(de,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.0dc77805.chunk.js.map